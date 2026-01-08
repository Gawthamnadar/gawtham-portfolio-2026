import { useState, useEffect } from "react";
import { Menu, X, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import ThemeToggle from "@/components/ThemeToggle";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const { toast } = useToast();
  const [isDownloading, setIsDownloading] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const handleDownload = async () => {
    setIsDownloading(true);
    try {
      const candidates = ["/Resume_2026.pdf", "/resume.pdf"];
      let res: Response | undefined;
      for (const path of candidates) {
        try {
          res = await fetch(path);
        } catch (e) {
          res = undefined;
        }
        if (res && res.ok) {
          const contentType = (
            res.headers.get("content-type") || ""
          ).toLowerCase();
          if (!contentType.includes("application/pdf")) {
            // Skip non-PDF responses (dev server may return index.html)
            continue;
          }
          const blob = await res.blob();
          const url = window.URL.createObjectURL(blob);
          const a = document.createElement("a");
          a.href = url;
          a.download = path.split("/").pop() || "resume.pdf";
          document.body.appendChild(a);
          a.click();
          a.remove();
          window.URL.revokeObjectURL(url);
          toast({
            title: "Download started",
            description: "Resume is downloading.",
          });
          setIsDownloading(false);
          return;
        }
      }

      toast({
        title: "Resume not found",
        description:
          "Place your PDF at public/Resume_2026.pdf or public/resume.pdf",
      });
    } catch (err) {
      toast({
        title: "Download failed",
        description: "Could not download the resume.",
      });
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container-tight">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#"
            className="text-xl md:text-2xl font-bold text-foreground hover:text-accent transition-colors"
          >
            GN<span className="text-accent">.</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className="nav-link text-sm font-medium"
              >
                {item.label}
              </button>
            ))}
            <ThemeToggle />
            <Button
              size="sm"
              className="gap-2"
              onClick={handleDownload}
              disabled={isDownloading}
            >
              <Download className="w-4 h-4" />
              {isDownloading ? "Downloading..." : "Resume"}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-foreground hover:text-accent transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? "max-h-96 pb-6" : "max-h-0"
          }`}
        >
          <div className="flex flex-col gap-4 pt-4 border-t border-border">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className="text-left text-muted-foreground hover:text-foreground transition-colors py-2"
              >
                {item.label}
              </button>
            ))}
            <div className="flex items-center gap-4 mt-2">
              <ThemeToggle />
              <Button size="sm" className="gap-2 w-fit">
                <Download className="w-4 h-4" />
                Resume
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
