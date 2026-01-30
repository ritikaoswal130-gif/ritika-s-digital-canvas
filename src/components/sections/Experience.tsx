import { Briefcase, Users, BookOpen, Award, Star } from "lucide-react";

const experiences = [
  {
    role: "Campus Representative",
    organization: "GeeksforGeeks",
    icon: Star,
    description: "Bridging the gap between students and learning opportunities",
  },
  {
    role: "Secretary",
    organization: "APP CLUB",
    icon: Briefcase,
    description: "Leading initiatives and organizing technical events",
  },
  {
    role: "Vice-President",
    organization: "Information Technology Students Association (ITSA)",
    icon: Users,
    description: "Representing and advocating for IT students",
  },
  {
    role: "Co-head",
    organization: "College Magazine",
    icon: BookOpen,
    description: "Curating content and managing editorial team",
  },
  {
    role: "Head",
    organization: "Departmental Magazine",
    icon: Award,
    description: "Leading the IT department's publication efforts",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Experience & Leadership
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block" />

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div
                  key={exp.role}
                  className="relative pl-0 md:pl-20 animate-fade-up"
                  style={{ animationDelay: `${index * 0.1}s`, opacity: 0 }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-5 top-8 w-7 h-7 rounded-full bg-accent border-4 border-background shadow-soft hidden md:flex items-center justify-center">
                    <exp.icon className="w-3 h-3 text-primary" />
                  </div>

                  <div className="p-6 rounded-2xl gradient-card shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1">
                    <div className="flex items-start gap-4">
                      {/* Mobile Icon */}
                      <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center flex-shrink-0 md:hidden">
                        <exp.icon className="w-6 h-6 text-primary" />
                      </div>

                      <div className="flex-1">
                        <h3 className="text-lg font-display font-bold text-foreground">
                          {exp.role}
                        </h3>
                        <p className="text-primary font-medium mb-2">
                          {exp.organization}
                        </p>
                        <p className="text-muted-foreground text-sm">
                          {exp.description}
                        </p>
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

export default Experience;
