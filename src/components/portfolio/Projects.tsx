import { ExternalLink, Github, Folder } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Orderbook",
    description:
      "Led contributions to the development of HSBC’s in-house Order Book platform, successfully replacing a third-party application.",
    tech: [
      "React.js",
      "Redux Toolkit",
      "Jest",
      "TypeScript",
      "LESS",
      "Github copilot",
    ],
    org: "HSBC Global Banking and Markets (Client)",
    role: "Frontend Developer",
    impact:
      "Delivered additional features and performance improvements beyond the legacy solution, enhancing internal user productivity.",
    github: "",
    demo: "",
    featured: true,
  },
  {
    title: "Document Management System",
    description:
      "Developed a in-house centralized platform for uploading, storing, searching, and managing employee documents.",
    tech: [
      "React.js",
      "Redux",
      "Context API",
      "Node.js",
      "Express.js",
      "MySQL Server",
      "Bootstrap",
    ],
    org: "AQM Technologies Pvt Ltd",
    role: "Full Stack Developer",
    impact:
      "Reduced document processing time by 60% and improved compliance tracking accuracy",
    github: "",
    demo: "",
    featured: true,
  },
  {
    title: "HR Management System",
    description:
      "Built core in-house HR modules such as employee onboarding, attendance, leave management, and profile management. Designed dashboards to provide HR teams with real-time employee insights.",
    tech: [
      "HTML5",
      "CSS3",
      "JQuery",
      "Node.js",
      "Express.js",
      "MySQL Server",
      "Bootstrap",
    ],
    org: "AQM Technologies Pvt Ltd",
    role: "Full Stack Developer",
    impact: "Streamlined HR operations, cutting administrative overhead by 40%",
    github: "",
    demo: "",
    featured: true,
  },
  {
    title: "Online CV Maker",
    description:
      "Created a in-house web application enabling users to generate professional CVs dynamically. Implemented company template, live preview, and PDF export features.",
    tech: [
      "HTML5",
      "CSS3",
      "JQuery",
      "Node.js",
      "Express.js",
      "MySQL Server",
      "Bootstrap",
    ],
    org: "AQM Technologies Pvt Ltd",
    role: "Full Stack Developer",
    impact:
      "Helped 2,000+ users create professional resumes with 95% satisfaction rate",
    github: "",
    demo: "",
    featured: true,
  },
  {
    title: "E-commerce",
    description:
      "Built a Java-based e-commerce web application with features such as product management, cart, and order workflows.",
    tech: [
      "Java",
      "JSP/Servlets",
      "REST APIs",
      "MySQL Server",
      "HTML5",
      "CSS3",
      "JQuery",
    ],
    org: "ETI Infosystem",
    role: "Software Developer (Internship)",
    impact:
      "Enabled users to browse products, add to cart, and securely checkout, achieving a 4.5/5 user rating during testing.",
    github: "",
    demo: "",
    featured: true,
  },
  {
    title: "E-magazine",
    description:
      "A mobile e-magazine application delivering industry publications such as OEM Update, B2B Magazine, and ACE Update.",
    tech: ["Angular", "Ionic", "TypeScript", "HTML5", "CSS3"],
    org: "ETI Infosystem",
    role: "Software Developer (Internship)",
    impact:
      "Delivered a mobile e-magazine platform enabling users to access multiple industry publications from a single application.",
    github: "",
    demo: "",
    featured: true,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section-padding bg-secondary/30">
      <div className="container-tight">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
            A selection of projects showcasing my expertise in building
            scalable, secure applications
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <article key={project.title} className="project-card flex flex-col">
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <Folder className="w-6 h-6 text-accent" />
              </div>

              {/* Title & Description */}
              <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4 flex-grow">
                {project.description}
              </p>

              {/* Role & Impact */}
              <div className="space-y-2 mb-4">
                <div className="text-sm">
                  <span className="text-foreground font-medium">
                    Organization:{" "}
                  </span>
                  <span className="text-muted-foreground">{project.org}</span>
                </div>
                <div className="text-sm">
                  <span className="text-foreground font-medium">Role: </span>
                  <span className="text-muted-foreground">{project.role}</span>
                </div>
                <div className="text-sm">
                  <span className="text-foreground font-medium">Impact: </span>
                  <span className="text-muted-foreground">
                    {project.impact}
                  </span>
                </div>
              </div>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2 py-1 rounded-md bg-secondary text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              {/* <div className="flex items-center gap-3 pt-4 border-t border-border mt-auto">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Github className="w-4 h-4" />
                  Code
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </a>
              </div> */}
            </article>
          ))}
        </div>

        {/* View more */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild>
            <a
              href="https://github.com/Gawthamnadar"
              target="_blank"
              rel="noopener noreferrer"
              className="gap-2"
            >
              <Github className="w-5 h-5" />
              View More on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
