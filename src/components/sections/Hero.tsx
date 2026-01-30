import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/profile-photo.jpg";
import { ArrowDown, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen gradient-hero flex items-center justify-center relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-soft-yellow/40 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-golden-light/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/30 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Profile Photo */}
          <div className="relative animate-fade-up" style={{ animationDelay: '0.2s', opacity: 0 }}>
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-hover border-4 border-background">
                <img
                  src={profilePhoto}
                  alt="Ritika Satish Oswal"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative ring */}
              <div className="absolute inset-0 -m-3 rounded-full border-2 border-dashed border-primary/30 animate-[spin_20s_linear_infinite]" />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 text-center lg:text-left max-w-2xl">
            <p className="text-muted-foreground font-medium mb-4 animate-fade-up" style={{ animationDelay: '0.3s', opacity: 0 }}>
              Hello, I'm
            </p>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-4 animate-fade-up" style={{ animationDelay: '0.4s', opacity: 0 }}>
              Ritika Satish Oswal
            </h1>
            
            <p className="text-lg md:text-xl text-primary font-medium mb-6 animate-fade-up" style={{ animationDelay: '0.5s', opacity: 0 }}>
              IT Engineering Student | Aspiring Technologist | Creative Learner
            </p>
            
            <p className="text-muted-foreground text-lg leading-relaxed mb-8 animate-fade-up" style={{ animationDelay: '0.6s', opacity: 0 }}>
              A curious 3rd-year IT student at P.E.S Modern College of Engineering, Pune. 
              With leadership roles across multiple organizations and a passion for hackathons, 
              I'm driven by technology, creativity, and the endless pursuit of growth.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-up" style={{ animationDelay: '0.7s', opacity: 0 }}>
              <Button variant="hero" size="xl" asChild>
                <a href="#projects">
                  View Projects
                  <ArrowDown className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <a href="#contact">
                  <Mail className="mr-2 h-5 w-5" />
                  Contact Me
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-muted-foreground/50 rounded-full mt-2 animate-[slideUp_1.5s_ease-in-out_infinite]" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
