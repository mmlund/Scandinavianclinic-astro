import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const conditions = [
  {
    title: "Back Pain",
    description:
      "Assessment-based treatment for chronic back pain, including disc-related, postural, and stability-driven causes.",
    to: "/conditions/back-pain-treatment-north-vancouver",
  },
  {
    title: "Sciatica",
    description:
      "Targeted treatment for nerve-related leg pain caused by lumbar and gluteal compression.",
    to: "/conditions/sciatica-treatment-north-vancouver",
  },
  {
    title: "Neck Pain",
    description:
      "Relief and recovery for postural strain, tech neck, and chronic cervical stiffness.",
    to: "/conditions/neck-pain-treatment-north-vancouver",
  },
  {
    title: "Tennis Elbow",
    description:
      "Treatment for overuse and tendon-related elbow pain from sport, work, or repetitive strain.",
    to: "/conditions/tennis-elbow-treatment-north-vancouver",
  },
  {
    title: "Headaches",
    description:
      "Relief for tension and cervicogenic headaches that originate from the neck and upper back.",
    to: "/conditions/headaches-treatment-north-vancouver",
  },
  {
    title: "Shoulder Injury",
    description:
      "Recovery from rotator cuff strain, impingement, and post-injury shoulder dysfunction.",
    to: "/conditions/shoulder-injury-treatment-north-vancouver",
  },
  {
    title: "Hip Pain",
    description:
      "Treatment for hip stiffness, glute dysfunction, and pain limiting walking, running, or hiking.",
    to: "/conditions/hip-pain-treatment-north-vancouver",
  },
];

export const ConditionsWeTreat = () => {
  return (
    <section id="conditions-we-treat" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14 animate-fade-in">
          <div className="text-sm font-semibold text-accent mb-2 uppercase tracking-wider">
            What We Treat
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Conditions We Treat
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Eva treats a wide range of musculoskeletal conditions through clinical Registered
            Massage Therapy. Common reasons patients seek treatment include:
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {conditions.map((c, i) => (
            <Link
              key={c.to}
              to={c.to}
              className="group block animate-fade-in"
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              <Card className="h-full p-6 border-0 shadow-card bg-background hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                  {c.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">{c.description}</p>
                <span className="inline-flex items-center gap-1.5 text-primary font-semibold group-hover:text-accent transition-colors">
                  Learn more
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Card>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            asChild
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
          >
            <Link to="/conditions">
              View all conditions we treat
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
