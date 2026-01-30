import { Rocket, Briefcase, Users, TrendingUp } from "lucide-react";

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
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Open to Opportunities
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I'm actively looking for opportunities to grow, learn, and make an impact. 
              If you have something exciting in mind, let's connect!
            </p>
          </div>

          {/* Opportunities Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {opportunities.map((item, index) => (
              <div
                key={item.title}
                className="group p-6 rounded-2xl gradient-card shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-2 text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Opportunities;
