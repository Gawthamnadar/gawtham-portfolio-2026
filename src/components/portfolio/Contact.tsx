import { useState } from "react";
import { Mail, Linkedin, Github, MapPin, Send, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });

    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container-tight">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3">
            Let's Work Together
          </h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
            I'm always open to discussing new projects, opportunities, or just
            having a chat about technology.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 max-w-5xl mx-auto">
          {/* Contact info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                <a
                  href="mailto:gawthamnadar18@gmail.com"
                  className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors group"
                >
                  <span className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                    <Mail className="w-5 h-5 text-accent" />
                  </span>
                  <div>
                    <div className="text-sm text-muted-foreground">Email</div>
                    <div className="text-foreground font-medium">
                      gawthamnadar18@gmail.com
                    </div>
                  </div>
                </a>

                <div className="flex items-center gap-4 text-muted-foreground">
                  <span className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-accent" />
                  </span>
                  <div>
                    <div className="text-sm text-muted-foreground">
                      Location
                    </div>
                    <div className="text-foreground font-medium">
                      Mumbai, Maharashtra, India (Remote-friendly)
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-6">
                Connect With Me
              </h3>
              <div className="flex items-center gap-4">
                <a
                  href="https://www.linkedin.com/in/gawtham-r-772771145/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center hover:bg-accent/10 transition-colors group"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
                </a>
                <a
                  href="https://github.com/Gawthamnadar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center hover:bg-accent/10 transition-colors group"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
                </a>
              </div>
            </div>

            {/* Resume download */}
            <div className="pt-6 border-t border-border">
              <Button
                variant="accent"
                size="lg"
                className="gap-2"
                onClick={handleDownload}
                disabled={isDownloading}
              >
                <Download className="w-5 h-5" />
                {isDownloading ? "Downloading..." : "Download Resume (PDF)"}
              </Button>
            </div>
          </div>

          {/* Contact form */}
          <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
            <h3 className="text-xl font-semibold text-foreground mb-6">
              Send a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Your Name
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-background"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Email Address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-background"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell me about your project or opportunity..."
                  value={formData.message}
                  onChange={handleChange}
                  className="bg-background resize-none"
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="w-full gap-2"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
