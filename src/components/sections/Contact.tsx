import { Mail, Linkedin, Github, Instagram, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const socialLinks = [
  {
    name: "Email",
    icon: Mail,
    href: "mailto:ritikaoswal130@gmail.com",
    color: "hover:text-red-500",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/ritika-oswal-40b060309",
    color: "hover:text-blue-600",
  },
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/ritikaoswal130-gif",
    color: "hover:text-gray-800",
  },
  {
    name: "Instagram",
    icon: Instagram,
    href: "https://instagram.com/_ritika_oswal",
    color: "hover:text-pink-500",
  },
];

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Let's Connect
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6" />
            <p className="text-lg text-muted-foreground">
              I'd love to hear from you! Whether it's an opportunity, collaboration, 
              or just a friendly hello, feel free to reach out.
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true, margin: "-50px" }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {socialLinks.map((link) => (
              <Button
                key={link.name}
                variant="outline"
                size="lg"
                asChild
                className="group"
              >
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <link.icon className={`w-5 h-5 transition-colors duration-300 ${link.color}`} />
                  <span>{link.name}</span>
                </a>
              </Button>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, margin: "-50px" }}
            className="p-8 rounded-2xl gradient-card shadow-card"
          >
            <p className="text-xl font-display font-semibold text-foreground mb-2">
              Ready to create something amazing together?
            </p>
            <p className="text-muted-foreground mb-6">
              Let's turn ideas into reality!
            </p>
            <Button variant="hero" size="xl" asChild>
              <a href="mailto:ritikaoswal130@gmail.com">
                <Mail className="mr-2 h-5 w-5" />
                Send me an Email
              </a>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mt-24 pt-8 border-t border-border"
      >
        <div className="container mx-auto px-6 text-center">
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            Made with <Heart className="w-4 h-4 text-red-400 fill-red-400" /> by Ritika Satish Oswal
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </motion.footer>
    </section>
  );
};

export default Contact;
