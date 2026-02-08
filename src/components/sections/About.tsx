import { Award, BookOpen, Lightbulb, Users } from "lucide-react";
import { motion } from "framer-motion";

const highlights = [
  {
    icon: Award,
    title: "Udyamahotsav Finalist",
    description: "National Startup Competition",
  },
  {
    icon: Users,
    title: "Leadership Roles",
    description: "Secretary, VP, Campus Rep",
  },
  {
    icon: BookOpen,
    title: "Creative Writer",
    description: "Magazine Head & Co-head",
  },
  {
    icon: Lightbulb,
    title: "Curious Learner",
    description: "Always exploring new fields",
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              About Me
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="prose prose-lg mx-auto text-center mb-16"
          >
            <p className="text-muted-foreground text-lg leading-relaxed">
              I'm a <span className="text-foreground font-medium">disciplined and curious individual</span> who 
              thrives at the intersection of technology and creativity. As a <span className="text-foreground font-medium">finalist 
              at Udyamahotsav</span> (National Startup Competition), I've experienced firsthand how ideas 
              can transform into impactful results.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mt-4">
              Currently serving as <span className="text-foreground font-medium">Secretary at APP CLUB</span> and 
              <span className="text-foreground font-medium"> Vice-President of ITSA</span>, I channel my enthusiasm 
              into building communities and leading initiatives. As a <span className="text-foreground font-medium">Campus 
              Representative at GeeksforGeeks</span>, I bridge the gap between learning and opportunity.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mt-4">
              Beyond tech, I'm the <span className="text-foreground font-medium">Co-head of our College Magazine</span> and
              <span className="text-foreground font-medium"> Head of the Departmental Magazine</span> spaces where my love
              for reading and writing finds expression. I believe in consistency, friendliness, and the power 
              of continuous learning.
            </p>
          </motion.div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                className="group p-6 rounded-2xl gradient-card shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1 text-center"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-accent flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                  <item.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
