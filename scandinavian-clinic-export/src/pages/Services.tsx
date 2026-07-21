import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Stethoscope,
  Activity,
  Hand,
  ClipboardList,
  ArrowRight,
  Calendar,
  Phone,
  MapPin,
  CheckCircle2,
} from "lucide-react";
import { Link } from "react-router-dom";
import { usePageMeta } from "@/hooks/use-page-meta";
import { servicesSchema } from "@/lib/schemas";

const Services = () => {
  usePageMeta({
    title: "Registered Massage Therapy Services North Vancouver | Scandinavian Clinic",
    description:
      "Registered Massage Therapy, Dynamic Neuromuscular Stabilization (DNS) & orthopedic rehabilitation services at Scandinavian Clinic in North Vancouver.",
    jsonLd: servicesSchema,
  });

  const conditions: { label: string; to: string }[] = [
    { label: "Chronic Back & Neck Pain", to: "/conditions/back-pain-treatment-north-vancouver" },
    { label: "Sports & Overuse Injuries", to: "/conditions/tennis-elbow-treatment-north-vancouver" },
    { label: "Scoliosis Management", to: "/conditions/back-pain-treatment-north-vancouver" },
    { label: "Nerve Impingement & Sciatica", to: "/conditions/sciatica-treatment-north-vancouver" },
    { label: "Jaw Pain (TMJ) and Headaches", to: "/conditions/headaches-treatment-north-vancouver" },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary via-primary to-primary/90 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_30%_20%,white,transparent_50%)]" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-sm font-semibold text-primary-foreground/80 mb-3 uppercase tracking-widest">
              Our Services
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
              Registered Massage Therapy Services
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 leading-relaxed">
              Moving beyond temporary relief to address the root cause of musculoskeletal pain.
            </p>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-center">
              At Scandinavian Clinic, our services are clinical, designed for patients seeking a
              systematic investigation into why their body is not functioning correctly. By
              integrating Swedish orthopedic manual therapy with developmental kinesiology, we
              provide a path to recovery for acute injuries and long-standing chronic pain.
            </p>
          </div>
        </div>
      </section>

      {/* RMT */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <Card className="p-8 md:p-12 border-0 shadow-card bg-background">
              <div className="flex items-start gap-5 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                  <Stethoscope className="w-7 h-7" />
                </div>
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                    Registered Massage Therapy (RMT)
                  </h2>
                  <p className="text-lg text-muted-foreground italic">
                    Clinical assessment and targeted manual intervention.
                  </p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                In British Columbia, Registered Massage Therapy is a regulated healthcare
                profession. We focus on the assessment and treatment of soft tissue and joint
                dysfunction to restore normal movement patterns.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <p className="text-muted-foreground leading-relaxed">
                    <span className="font-semibold text-foreground">Clinical Focus:</span> We
                    prioritize conditions such as back pain, sciatica, neck pain, tennis elbow,
                    tension headaches, and repetitive strain injuries and others.
                  </p>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <p className="text-muted-foreground leading-relaxed">
                    <span className="font-semibold text-foreground">Evidence-Based:</span> Every
                    session begins with an assessment to ensure the treatment is indicated for
                    your specific mechanical problem.
                  </p>
                </li>
              </ul>
              <Button asChild variant="outline">
                <Link to="/r-m-t">
                  Explore our RMT approach
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* DNS */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <Card className="p-8 md:p-12 border-0 shadow-card bg-background">
              <div className="flex items-start gap-5 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                  <Activity className="w-7 h-7" />
                </div>
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                    Dynamic Neuromuscular Stabilization (DNS)
                  </h2>
                  <p className="text-lg text-muted-foreground italic">
                    Brain-based movement retraining from the Prague School of Rehabilitation.
                  </p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                DNS is a revolutionary approach to movement based on the principles of
                developmental kinesiology—the way an infant naturally acquires movement patterns.
                This service addresses how your central nervous system controls your muscles and
                stabilizes your spine.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <p className="text-muted-foreground leading-relaxed">
                    <span className="font-semibold text-foreground">Stabilization & Power:</span>{" "}
                    We help patients "reboot" their foundational stability, which is essential for
                    both chronic pain recovery and athletic performance.
                  </p>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <p className="text-muted-foreground leading-relaxed">
                    <span className="font-semibold text-foreground">Root-Cause Correction:</span>{" "}
                    Often, pain in a joint is caused by poor stabilization in the core or trunk.
                    DNS addresses this "global" coordination.
                  </p>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <p className="text-muted-foreground leading-relaxed">
                    <span className="font-semibold text-foreground">Active Rehabilitation:</span>{" "}
                    Unlike passive treatments, DNS involves active participation to create lasting
                    changes in how you move.
                  </p>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Orthopedic Manual Therapy */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <Card className="p-8 md:p-12 border-0 shadow-card bg-background">
              <div className="flex items-start gap-5 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                  <Hand className="w-7 h-7" />
                </div>
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                    Orthopedic Manual Therapy & Assessment
                  </h2>
                  <p className="text-lg text-muted-foreground italic">
                    The Swedish tradition of mechanical system investigation.
                  </p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Drawing on Eva Andersson's background as a Doctor of Naprapathy in Sweden, we
                utilize advanced manual techniques to address functional abnormalities.
              </p>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <p className="text-muted-foreground leading-relaxed">
                    <span className="font-semibold text-foreground">Joint Mobilization:</span>{" "}
                    Restoring restricted range of motion in spinal segments and peripheral joints.
                  </p>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <p className="text-muted-foreground leading-relaxed">
                    <span className="font-semibold text-foreground">
                      Functional Stretching (PNF):
                    </span>{" "}
                    Addressing shortened muscle groups that disrupt your mechanical balance.
                  </p>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <p className="text-muted-foreground leading-relaxed">
                    <span className="font-semibold text-foreground">Integrated Care:</span> We
                    treat the body as a single mechanical system, ensuring that coordination,
                    ligaments, and joints work in harmony.
                  </p>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Conditions We Treat */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
                <ClipboardList className="w-7 h-7" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Conditions We Treat
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Not sure which service you need? We treat a wide array of common and complex
                complaints, including:
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {conditions.map((c) => (
                <Link key={c.to + c.label} to={c.to} className="group">
                  <Card className="p-5 border-0 shadow-card bg-background flex items-center gap-3 hover:shadow-lg transition-shadow">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="font-medium text-foreground group-hover:text-accent transition-colors">
                      {c.label}
                    </span>
                  </Card>
                </Link>
              ))}
            </div>
            <div className="text-center">
              <Button asChild variant="outline" size="lg">
                <Link to="/conditions">
                  View the Full List of Conditions
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary to-primary/90 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_70%_30%,white,transparent_50%)]" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-4">
              Book Your Assessment in North Vancouver
            </h2>
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              Our facility at Liberation Fitness is equipped for both table-based manual therapy
              and active, movement-based rehabilitation.
            </p>
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 mb-8 inline-block">
              <p className="text-primary-foreground font-semibold text-lg mb-2">
                Scandinavian Clinic
              </p>
              <p className="text-primary-foreground/90 flex items-center justify-center gap-2 mb-1">
                <MapPin className="w-4 h-4" />
                101 16th St W Suite 202, North Vancouver, BC V7M 1T3
              </p>
              <a
                href="tel:+16049264883"
                className="text-primary-foreground/90 hover:text-primary-foreground flex items-center justify-center gap-2 transition-colors"
              >
                <Phone className="w-4 h-4" />
                (604) 926-4883
              </a>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link to="/booking">
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Your Appointment Online
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
              >
                <a href="tel:+16049264883">
                  <Phone className="w-5 h-5 mr-2" />
                  (604) 926-4883
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
