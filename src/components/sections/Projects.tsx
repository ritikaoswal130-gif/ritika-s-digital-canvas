import { ExternalLink, Github, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Exam Answer Improver",
    description:
      "An AI-assisted tool designed to enhance written exam answers using structured prompting techniques. The tool focuses on clarity, learning enhancement, and providing an evaluation perspective to help students improve their responses.",
    tags: ["AI", "Prompt Engineering", "Education"],
    github: "https://github.com/ritikaoswal",
    featured: true,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Projects
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Featured Project */}
            {projects.map((project) => (
              <div
                key={project.title}
                className="group p-8 rounded-2xl gradient-card shadow-soft hover:shadow-hover transition-all duration-300 hover:-translate-y-1 border border-border/50"
              >
                {project.featured && (
                  <div className="flex items-center gap-2 text-primary text-sm font-medium mb-4">
                    <Sparkles className="w-4 h-4" />
                    Featured Project
                  </div>
                )}

                <h3 className="text-xl font-display font-bold text-foreground mb-3">
                  {project.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  <Button variant="outline" size="sm" asChild>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      View on GitHub
                    </a>
                  </Button>
                </div>
              </div>
            ))}

            {/* Coming Soon Card */}
            <div className="group p-8 rounded-2xl border-2 border-dashed border-border hover:border-primary/50 transition-all duration-300 flex flex-col items-center justify-center text-center min-h-[300px]">
              <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-4 group-hover:bg-accent transition-colors duration-300">
                <Sparkles className="w-8 h-8 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-display font-bold text-foreground mb-2">
                More Coming Soon
              </h3>
              <p className="text-muted-foreground">
                Exciting projects in the works. Stay tuned!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
