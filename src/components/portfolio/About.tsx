import { Code2, Users, Shield, Zap } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code Advocate",
    description:
      "Writing maintainable, well-documented code that stands the test of time",
  },
  {
    icon: Shield,
    title: "Security-First",
    description: "Building applications with banking-grade security standards",
  },
  {
    icon: Users,
    title: "Team Leadership",
    description: "Mentoring developers and leading code reviews in agile teams",
  },
  {
    icon: Zap,
    title: "Performance Expert",
    description:
      "Optimizing applications for speed, scalability, and reliability",
  },
];

const About = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container-tight">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">
            About Me
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3">
            Building the Future
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text content */}
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              As a{" "}
              <span className="text-foreground font-semibold">
                Senior Software Engineer
              </span>{" "}
              with over 7 years of experience, I specialize in building
              large-scale, secure web applications for the banking and other
              services.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm passionate about mentoring junior developers, conducting
              thorough code reviews, and continuously improving development
              processes through Agile methodologies. When I'm not coding, you'll
              find me exploring new technologies and contributing to the
              developer community.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-border">
              <div>
                <div className="text-3xl md:text-4xl font-bold text-foreground">
                  7+
                </div>
                <div className="text-sm text-muted-foreground mt-1">
                  Years Experience
                </div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-foreground">
                  20+
                </div>
                <div className="text-sm text-muted-foreground mt-1">
                  Projects Delivered
                </div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-foreground">
                  3+
                </div>
                <div className="text-sm text-muted-foreground mt-1">
                  Team Members Led
                </div>
              </div>
            </div>
          </div>

          {/* Highlight cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="group p-6 rounded-2xl bg-secondary/50 border border-border hover:border-accent/50 hover:bg-secondary transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <item.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
