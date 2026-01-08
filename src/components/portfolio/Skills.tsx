const skillCategories = [
  {
    title: "Frontend Development",
    skills: [
      "React.js",
      "Next.js",
      "Angular",
      "TypeScript",
      "JavaScript (ES6+)",
      "JQuery",
      "HTML5",
      "CSS3",
      "Bootstrap",
      "Tailwind CSS",
      "SASS / SCSS / LESS",
    ],
  },
  {
    title: "State Management",
    skills: ["Redux", "Redux Toolkit", "Context API", "React Query"],
  },
  {
    title: "Backend & APIs",
    skills: ["Node.js", "Express.js", "REST APIs", "Microservices", "JWT", "Java"],
  },
  {
    title: "Databases",
    skills: ["MySQL", "MongoDB"],
  },
  {
    title: "Testing & Quality",
    skills: ["Jest", "React Testing Library", "ESLint", "Prettier"],
  },
  {
    title: "DevOps & Tools",
    skills: [
      "Git",
      "GitHub",
      "Jenkins",
      "Docker",
      "Jira",
      "GitHub Copilot",
      "Vercel",
      "VS Code",
      "Postman",
      "Swagger",
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="section-padding bg-secondary/30">
      <div className="container-tight">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">
            Technical Skills
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3">
            Technologies I Work With
          </h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
            A comprehensive toolkit for building enterprise-grade applications
          </p>
        </div>

        {/* Skills grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className="p-6 rounded-2xl bg-card border border-border hover:border-accent/30 transition-all duration-300"
            >
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent" />
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skill}
                    className="skill-badge"
                    style={{
                      animationDelay: `${
                        categoryIndex * 0.1 + skillIndex * 0.05
                      }s`,
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional note */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            Always exploring new technologies and staying current with industry
            best practices
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
