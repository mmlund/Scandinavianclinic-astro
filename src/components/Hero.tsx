import heroEva from "@/assets/clinic/eva-hero.webp?url";

interface HeroProps {
  imageSrc?: string;
}

export const Hero = ({ imageSrc }: HeroProps) => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={imageSrc || heroEva}
          alt="Professional orthopedic therapy environment"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-4 leading-tight">
            Registered Massage Therapy in North Vancouver for Active Recovery
          </h1>
          <p className="text-2xl md:text-3xl font-semibold text-accent mb-6">
            Active Treatment for an Active Lifestyle
          </p>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-2xl leading-relaxed">
            Your muscles are the best tools for treating pain and developing optimal movement patterns
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="/booking"
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:scale-105 shadow-lg"
            >
              Book Your Appointment
            </a>
          </div>
        </div>
      </div>


      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 bg-primary-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};
