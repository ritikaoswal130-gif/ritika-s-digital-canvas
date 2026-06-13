import { Rocket, Briefcase, Users, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

const opportunities = [
  {
    icon: Briefcase,
    title: "Internships",
    description: "Actively seeking opportunities to learn and contribute in real-world tech environments",
  },
  {
    icon: Rocket,
    title: "Freelancing",
    description: "Eager to start freelancing and work on diverse, challenging projects",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Open to collaborative projects with like-minded individuals and teams",
  },
  {
    icon: TrendingUp,
    title: "Growth Roles",
    description: "Looking for roles that offer learning, mentorship, and professional growth",
  },
];

const Opportunities = () => {
  return (
    <section id="opportunities" className="py-24 bg-muted/30">
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
              Open to Opportunities
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I'm actively looking for opportunities to grow, learn, and make an impact. 
              If you have something exciting in mind, let's connect!
            </p>
          </motion.div>

          {/* Opportunities Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {opportunities.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                className="group p-6 rounded-2xl gradient-card shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-2 text-center"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-accent flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                  <item.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <h3 className="font-display text-lg font-bold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Opportunities;
