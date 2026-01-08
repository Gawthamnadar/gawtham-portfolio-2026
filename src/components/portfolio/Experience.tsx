import { Building2, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    title: "Senior Technology Consultant",
    company: "Ernst and Young LLP",
    location: "Remote / Mumbai, Maharashtra",
    period: "March 2022 - Present",
    type: "Full-time",
    responsibilities: [
      "Leading development of secure, scalable React applications for core banking operations",
      "Architecting and implementing REST API integrations with robust authentication and error handling",
      "Optimizing application performance through code splitting, memoization, and lazy loading",
      "Introduced Redux Toolkit and improved state management patterns",
      "Writing comprehensive unit and integration tests achieving 90%+ code coverage",
      "Mentoring team of 4 junior developers and conducting bi-weekly code review sessions",
      "Leveraging GitHub Copilot and AI tools to increase development productivity by 30%",
      "Worked in Agile/Scrum environments, contributing to sprint planning, estimations, and timely feature delivery.",
    ],
  },
  {
    title: "Software Developer",
    company: "AQM Technologies PVT LTD",
    location: "Hybrid / Mumbai, Maharashtra",
    period: "May 2019 - February 2022",
    type: "Full-time",
    responsibilities: [
      "Built and deployed 3 full-stack web applications from scratch using ReactJS and Node.js.",
      "Designed REST APIs and integrated frontend with backend services.",
      "Implemented HR-focused features including document management, employee data handling, and workflow automation.",
      "Collaborated with HR stakeholders to deliver business-ready solutions.",
      "Ensured performance, security, and code quality best practices.",
    ],
  },
  {
    title: "Junior Software Developer (Intern)",
    company: "ETI Infosystem",
    location: "Mumbai, Maharashtra",
    period: "March 2019 - May 2019",
    type: "Full-time",
    responsibilities: [
      "Learned core Java programming concepts by working on real-time e-commerce use cases.",
      "Assisted senior developers with backend development tasks and maintenance activities.",
      "Gained exposure to end-to-end e-commerce application flow, from product management to checkout.",
      "Developed understanding of industry-standard development practices and version control.",
    ],
  },
  {
    title: "Junior Software Developer (Intern)",
    company: "I-Tech Media",
    location: "Mumbai, Maharashtra",
    period: "July 2018 - October 2018",
    type: "Full-time",
    responsibilities: [
      "Learned Angular by contributing to a real-time Online E-Magazine frontend application.",
      "Assisted with UI development, bug fixing, and API integration.",
      "Gained exposure to Angular components, routing, and data binding."
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="section-padding bg-background">
      <div className="container-tight">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">
            Career Journey
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3">
            Professional Experience
          </h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
            A track record of delivering impactful solutions in the financial
            sector
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div
              key={`${exp.company}-${index}`}
              className="group experience-card"
            >
              <div className="ml-6">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-3">
                  <h3 className="text-xl font-bold text-foreground">
                    {exp.title}
                  </h3>
                  <span className="text-xs font-medium px-3 py-1 rounded-full bg-accent/10 text-accent w-fit">
                    {exp.type}
                  </span>
                </div>

                {/* Company info */}
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
                  <span className="flex items-center gap-1.5">
                    <Building2 className="w-4 h-4" />
                    {exp.company}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4" />
                    {exp.location}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4" />
                    {exp.period}
                  </span>
                </div>

                {/* Responsibilities */}
                <ul className="space-y-2">
                  {exp.responsibilities.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="flex items-start gap-3 text-muted-foreground"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
