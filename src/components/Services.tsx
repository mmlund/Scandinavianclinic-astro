import manualTherapy from "@/assets/clinic/manual-therapy-treatment.webp?url";
import customizedTreatment from "@/assets/clinic/customized-treatment.webp?url";
import dnsTreatment from "@/assets/clinic/dns-treatment.webp?url";
import { YouTubeEmbed } from "@/components/YouTubeEmbed";
import { Card } from "@/components/ui/card";
import { Activity, Target, Heart, Stethoscope } from "lucide-react";

interface ServicesProps {
  images?: {
    manualTherapy?: string;
    customizedTreatment?: string;
    dnsTreatment?: string;
  };
}

export const Services = ({ images }: ServicesProps = {}) => {
  const services = [
    {
      icon: <Stethoscope className="w-8 h-8" />,
      title: "Orthopedic Manual Therapy & Registered Massage Therapy",
      description: "Combination of treatments: spine and joint mobilization, soft tissue including fascia, specific stretching, and neurodynamics to restore function and decrease pain.",
      image: images?.manualTherapy || manualTherapy
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: "Dynamic Neuromuscular Stabilization",
      titleHref: "/d-n-s",
      description: "Fast-growing active treatment method for training and pain prevention, rehabilitation and and athletic performance improvement. DNS stabilizes core muscles: diaphragm, pelvic floor, and all parts of the abdominal wall.",
      youtubeVideoId: "Dt-hermwK3U"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Customized Treatment Plans",
      description: "Tailored assessment and treatment specific to your condition, ensuring we address the root cause of your pain.",
      image: images?.customizedTreatment || customizedTreatment
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Prevention & Self-Management",
      description: "Empowering you with tools and knowledge to take care of yourself and prevent future injuries.",
      image: images?.dnsTreatment || dnsTreatment
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <div className="text-sm font-semibold text-accent mb-2 uppercase tracking-wider">
            Our Approach
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Comprehensive RMT Care Solutions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            For positive long-term results, you need to restore your natural muscle balance. 
            We use a combination of manual treatments, active therapies, and training focused on movement and muscle activation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-0 shadow-card hover:shadow-xl transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-64 overflow-hidden">
                {'youtubeVideoId' in service && service.youtubeVideoId ? (
                  <YouTubeEmbed videoId={service.youtubeVideoId} title={service.title} />
                ) : (
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 text-primary-foreground pointer-events-none">
                  {service.icon}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {'titleHref' in service && service.titleHref ? (
                    <a href={service.titleHref} className="hover:text-accent transition-colors underline-offset-4 hover:underline">
                      {service.title}
                    </a>
                  ) : (
                    service.title
                  )}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16 max-w-4xl mx-auto bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 text-center">
            It All Has to Fit - For You
          </h3>
          <p className="text-lg text-muted-foreground text-center leading-relaxed mb-6">
            Our first step is always to find the root cause of your pain. Treatment is then tailored 
            to your specific{" "}
            <a href="/conditions" className="text-accent underline underline-offset-4 hover:text-accent/80 transition-colors">
              condition
            </a>
            {" "}and needs. Our goal is to alleviate your pain and prevent it from returning.
          </p>
          <p className="text-center text-muted-foreground">
            Whatever your active lifestyle looks like, we want you to enjoy it without the restrictions 
            of pain, discomfort, and improper movement.
          </p>
        </div>
      </div>
    </section>
  );
};
