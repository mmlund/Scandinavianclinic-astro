import evaProfile from "@/assets/eva-profile.jpg";
import { CheckCircle2 } from "lucide-react";

interface AboutProps {
  imageSrc?: string;
  imageAlt?: string;
}

export const About = ({ imageSrc, imageAlt }: AboutProps) => {
  const credentials = [
    "5-year Scandinavian post-secondary education and training",
    "Czech-trained DNS therapist",
    "Advanced biomechanical assessment expertise",
    "Focus on prevention and self-management",
    "Multiple treatment modality integration",
    "Commitment to effective, lasting results"
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Image */}
          <div className="animate-slide-in-left">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-2xl" />
              <img
                src={imageSrc || evaProfile}
                alt={imageAlt || "Eva Andersson, Registered Massage Therapist"}
                loading="lazy"
                className="relative rounded-2xl shadow-card w-full object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="animate-fade-in">
          <div className="text-sm font-semibold text-accent mb-2 uppercase tracking-wider">
            Swedish-Trained – Czech-trained DNS therapist
          </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Clinical Registered Massage Therapy (RMT) Focus
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Eva received her comprehensive education and training in Orthopedic Manual Therapy in Sweden. 
              Her approach centers on thorough assessment, individualized treatment, prevention, and empowering 
              patients with self-management strategies.
            </p>

            <div className="space-y-3 mb-8">
              {credentials.map((credential, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={20} />
                  <span className="text-foreground">{credential}</span>
                </div>
              ))}
            </div>

            <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg">
              <h3 className="font-semibold text-foreground mb-2">
                Commitment to Quality Care
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Patients deserve accurate, detailed explanations about their symptoms and education on how to 
                manage and prevent pain. Success is maximized through comprehensive assessment, combining multiple 
                treatment modalities, and active patient involvement.
              </p>
            </div>

            <p className="mt-6 text-sm text-muted-foreground">
              As a Registered Massage Therapist, treatments are covered by most insurance plans.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
