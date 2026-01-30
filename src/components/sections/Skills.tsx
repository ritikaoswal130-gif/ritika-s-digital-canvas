import { Code, Wrench, Heart } from "lucide-react";

const skillCategories = [
  {
    title: "Technical Skills",
    icon: Code,
    skills: [
      "Prompt Engineering",
      "Vibe Coding",
      "Python (Basic)",
      "Java (Beginner)",
      "Problem Solving",
    ],
  },
  {
    title: "Tools & Technologies",
    icon: Wrench,
    skills: [
      "ChatGPT",
      "Gemini",
      "VS Code",
      "GitHub",
    ],
  },
  {
    title: "Soft Skills",
    icon: Heart,
    skills: [
      "Communication",
      "Teamwork",
      "Creativity",
      "Discipline",
      "Consistency",
      "Enthusiasm",
      "Friendliness",
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Skills
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={category.title}
                className="p-8 rounded-2xl gradient-card shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center">
                    <category.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground">
                    {category.title}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors duration-300 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
