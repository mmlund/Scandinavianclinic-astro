import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Calendar,
  CheckCircle,
  Stethoscope,
  Activity,
  Target,
  ShieldCheck,
  Bone,
  Zap,
  HeartPulse,
} from "lucide-react";
import { Link } from "react-router-dom";
import heroEva from "@/assets/rmt-hero-eva.jpg";
import rmtSession from "@/assets/rmt-session-new.jpg";
import evaProfile from "@/assets/rmt-puzzle.jpg";
import { usePageMeta } from "@/hooks/use-page-meta";
import { rmtSchema } from "@/lib/schemas";

const RMT = () => {
  usePageMeta({
    title: "Registered Massage Therapy North Vancouver | Eva Andersson RMT",
    description:
      "Clinical RMT in North Vancouver focusing on orthopedic assessment and root-cause treatment for chronic pain and sports injuries. Eva Andersson, RMT.",
    jsonLd: rmtSchema,
  });

  const differentiators = [
    {
      icon: <Stethoscope className="w-6 h-6" />,
      title: "Clinical Assessment First",
      description:
        "We never lead with the treatment; we lead with the diagnostic assessment to understand why you are in pain.",
    },
    {
      icon: <Activity className="w-6 h-6" />,
      title: "Orthopedic Manual Therapy",
      description:
        "Utilizing various treatment modalities to address musculoskeletal dysfunction at the source.",
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Result-Oriented",
      description:
        "We often work with complex cases including sciatica, scoliosis, disc-related issues, and sports injuries.",
    },
  ];

  type ConditionLink = { label: string; to: string };
  const conditions: { icon: JSX.Element; title: string; links: ConditionLink[] }[] = [
    {
      icon: <Bone className="w-7 h-7" />,
      title: "Spinal Health",
      links: [
        { label: "Back pain", to: "/conditions/back-pain-treatment-north-vancouver" },
        { label: "neck pain", to: "/conditions/neck-pain-treatment-north-vancouver" },
        { label: "disc-related dysfunction", to: "/conditions/back-pain-treatment-north-vancouver" },
      ],
    },
    {
      icon: <Zap className="w-7 h-7" />,
      title: "Nerve Issues",
      links: [
        { label: "Sciatica", to: "/conditions/sciatica-treatment-north-vancouver" },
        { label: "chronic impingement", to: "/conditions/shoulder-injury-treatment-north-vancouver" },
      ],
    },
    {
      icon: <HeartPulse className="w-7 h-7" />,
      title: "Injury Recovery",
      links: [
        { label: "Sports injuries", to: "/conditions/tennis-elbow-treatment-north-vancouver" },
        { label: "ICBC motor vehicle accident claims", to: "/icbc-rmt-north-vancouver" },
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={heroEva}
            alt="Clinical Registered Massage Therapy in North Vancouver"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent" />
        </div>

        <div className="container mx-auto px-4 z-10 relative">
          <div className="max-w-3xl animate-fade-in">
            <div className="inline-block px-4 py-1.5 rounded-full bg-accent/20 border border-accent/30 text-accent-foreground text-sm font-semibold mb-6 backdrop-blur-sm">
              North Vancouver · Eva Andersson, RMT
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
              Registered Massage Therapy in North Vancouver
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-2xl leading-relaxed">
              Assessment-based treatment for chronic pain and injury recovery.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 text-lg font-semibold transition-all hover:scale-105 shadow-lg"
              >
                <a href="/booking" className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Book Your Clinical Treatment
                </a>
              </Button>
            </div>
            <p className="text-sm text-primary-foreground/70 mt-4">
              Official RMT receipts provided for extended health & ICBC
            </p>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
              <Stethoscope className="w-8 h-8 text-primary" />
            </div>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              At Scandinavian Clinic, Registered Massage Therapy (RMT) is a clinical
              healthcare discipline. Our approach often works for patients who
              are looking for a systematic investigation into the root cause of their pain.
            </p>
          </div>
        </div>
      </section>

      {/* Why Different */}
      <section className="py-20 bg-muted/40">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div className="relative rounded-2xl overflow-hidden shadow-xl animate-scale-in bg-background p-6">
                <img
                  src={evaProfile}
                  alt="Our four-pillar approach: assessment, treatment, individualized training, and education"
                  className="w-full aspect-square object-contain"
                  loading="lazy"
                />
              </div>
              <div className="animate-fade-in">
                <div className="text-sm font-semibold text-accent mb-2 uppercase tracking-wider">
                  Why Our Approach is Different
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Bridging Manual Therapy and Active Rehabilitation
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Led by <span className="font-semibold text-foreground">Eva Andersson</span>,
                  an RMT with over 30 years of experience in both Sweden and Canada, we
                  bridge the gap between manual therapy and active rehabilitation.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {differentiators.map((item, index) => (
                <Card
                  key={index}
                  className="p-8 border-0 shadow-card bg-background hover:shadow-lg transition-shadow animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Conditions */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in order-2 lg:order-1">
                <div className="text-sm font-semibold text-accent mb-2 uppercase tracking-wider">
                  Conditions We Address
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
                  Examples of What We Treat
                </h2>
                <div className="space-y-5">
                  {conditions.map((condition, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4 p-5 bg-muted/40 rounded-xl"
                    >
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        {condition.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-foreground mb-1">
                          {condition.title}
                        </h3>
                        <p className="text-muted-foreground">
                          {condition.links.map((l, i) => (
                            <span key={l.to + l.label}>
                              <Link
                                to={l.to}
                                className="text-primary underline underline-offset-4 hover:text-accent transition-colors"
                              >
                                {l.label}
                              </Link>
                              {i < condition.links.length - 1 ? ", " : "."}
                            </span>
                          ))}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative rounded-2xl overflow-hidden shadow-xl animate-scale-in order-1 lg:order-2">
                <img
                  src={rmtSession}
                  alt="Clinical massage therapy treatment session"
                  className="w-full aspect-[4/5] object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/20 mb-6">
              <ShieldCheck className="w-8 h-8 text-accent" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Ready for a Clinical Approach to Your Pain?
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8">
              We provide official RMT receipts for extended health coverage and ICBC reimbursement.
            </p>
            <Button
              asChild
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-10 py-6 text-lg font-semibold transition-all hover:scale-105 shadow-lg"
            >
              <a href="/booking" className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                Book Your Clinical Treatment
              </a>
            </Button>
            <div className="flex flex-wrap items-center justify-center gap-6 mt-8 text-sm text-primary-foreground/80">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-accent" />
                Extended health coverage
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-accent" />
                ICBC accepted
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-accent" />
                30+ years experience
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RMT;
