import { Github, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Exam Answer Improver",
    description:
      "An AI-assisted tool designed to enhance written exam answers using structured prompting techniques. The tool focuses on clarity, learning enhancement, and providing an evaluation perspective to help students improve their responses.",
    tags: ["AI", "Prompt Engineering", "Education"],
    github: "https://github.com/ritikaoswal",
    featured: true,
  },
  {
    title: "Portfolio Website",
    description:
      "A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Features dark/light theme toggle, smooth animations with Framer Motion, and showcases projects, skills, and experiences.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    github: "https://github.com/ritikaoswal130-gif/ritika-s-digital-canvas",
  },
  {
    title: "Project Name Here",
    description:
      "Replace this with your project description. Highlight the key technologies used and the problem it solves.",
    tags: ["Tag1", "Tag2", "Tag3"],
    github: "https://github.com/yourusername/project-name",
  },
  {
    title: "Another Project",
    description:
      "Add more projects by following the same structure. Each project should have a title, description, tags, and GitHub link.",
    tags: ["Technology", "Skills", "Tools"],
    github: "https://github.com/yourusername/another-project",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Projects
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Featured Project */}
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
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
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
