import { GraduationCap, Award, Calendar, MapPin } from "lucide-react";

const education = {
  degree: "Bachelor of Science in Information Technology",
  institution: "Wilson College, Mumbai",
  date: "April 2017",
};

const certifications = [
  {
    title: "Post Graduate Program in Software Engineering",
    specialization: "(Java specialization)",
    institution: "NIIT, Mumbai",
    date: "January 2019",
  },
  {
    title: "CCNA",
    specialization: "(Routing & Switching)",
    institution: "RST Forum, Mumbai",
    date: "December 2016",
  },
];

const EducationAndCertifications = () => {
  return (
    <section id="education" className="section-padding bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Education & Certifications
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </div>

          {/* Education */}
          <div className="mb-10">
            <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-primary" />
              Education
            </h3>
            <div className="bg-card rounded-lg p-6 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-foreground mb-2">
                    {education.degree}
                  </h4>
                  <div className="flex flex-col gap-1 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{education.institution}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{education.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Courses & Certifications */}
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
              <Award className="w-5 h-5 text-primary" />
              Courses & Certifications
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="bg-card rounded-lg p-6 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Award className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-foreground mb-1">
                        {cert.title}
                      </h4>
                      {cert.specialization && (
                        <p className="text-primary font-medium text-sm mb-3">
                          {cert.specialization}
                        </p>
                      )}
                      <div className="flex flex-col gap-1 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          <span>{cert.institution}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>{cert.date}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationAndCertifications;
