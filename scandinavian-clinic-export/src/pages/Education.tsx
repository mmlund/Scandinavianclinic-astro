import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import {
  GraduationCap,
  Award,
  Globe,
  Stethoscope,
  ClipboardList,
  Layers,
  Target,
  ExternalLink,
} from "lucide-react";
import { usePageMeta } from "@/hooks/use-page-meta";
import { educationSchema } from "@/lib/schemas";

const Education = () => {
  usePageMeta({
    title: "Clinical Education & Background | Eva Andersson RMT",
    description:
      "Eva Andersson, RMT — 28+ years of clinical experience. Integrated Swedish orthopedic training, DNS, and Western medical acupuncture for root-cause recovery.",
    jsonLd: educationSchema,
  });

  const toolkit = [
    {
      icon: <ClipboardList className="w-6 h-6" />,
      title: "Thorough Clinical Assessment",
      description: "Conducted prior to any manual intervention to identify the mechanical source of dysfunction.",
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Individualized Plans",
      description: "Treatment programs that adapt and progress as your mobility and function improve.",
    },
    {
      icon: <Layers className="w-6 h-6" />,
      title: "Integrated Modalities",
      description: (
        <>
          Manual therapy,{" "}
          <Link to="/d-n-s" className="text-accent underline underline-offset-4 hover:text-accent/80 transition-colors">
            DNS
          </Link>
          , massage, and corrective exercise applied in tandem for cohesive results.
        </>
      ),
    },
    {
      icon: <Stethoscope className="w-6 h-6" />,
      title: "Root-Cause Focus",
      description: "Designed for long-term functional stability rather than short-term symptom relief.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-secondary/30 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6">
              <GraduationCap className="w-8 h-8" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6">
              Education and Clinical Background
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Over 30 years of clinical investigation into musculoskeletal pain.
            </p>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-foreground leading-relaxed">
              Eva Andersson is a Registered Massage Therapist with a systematic, assessment-based approach
              to recovery. Her clinical framework is built upon three decades of experience across two
              countries, merging the Scandinavian orthopedic tradition with advanced neuromuscular science
              to identify and treat the mechanical root causes of pain.
            </p>
          </div>
        </div>
      </section>

      {/* Scandinavian Tradition */}
      <section className="py-16 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <Globe className="w-7 h-7 text-primary" />
              <h2 className="text-3xl md:text-4xl font-bold text-primary">
                The Scandinavian Orthopedic Tradition
              </h2>
            </div>
            <div className="space-y-5 text-lg text-foreground leading-relaxed">
              <p>
                Eva's foundational training took place in Sweden (5-years secondary education), where
                manual therapy is rooted in a rigorous orthopedic tradition.{" "}
                <a
                  href="https://naprapathogskolan.se/the-scandinavian-college-of-naprapathic-manual-medicine"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline underline-offset-4 hover:text-primary/80 inline-flex items-center gap-1"
                >
                  This discipline
                  <ExternalLink className="w-4 h-4" />
                </a>{" "}
                focuses heavily on clinical reasoning and functional anatomy.
              </p>
              <p>
                For patients, this means Eva's approach is fundamentally investigative. She uses
                orthopedic assessment to determine why a tissue is under stress. Eva sees all sorts of
                patients, and many are straight forward. However, this high-level clinical thinking is
                especially important for complex or persistent conditions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BC Qualifications */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <Award className="w-7 h-7 text-primary" />
              <h2 className="text-3xl md:text-4xl font-bold text-primary">
                Professional Qualifications in British Columbia
              </h2>
            </div>
            <div className="space-y-5 text-lg text-foreground leading-relaxed">
              <p>
                Eva is a Registered Massage Therapist (RMT) in good standing with the College of Massage
                Therapists of British Columbia (CMTBC). As a regulated health professional, her practice
                meets the highest standards of safety and clinical efficacy in Canada.
              </p>
              <p>
                Because of this designation, treatment at Scandinavian Clinic is eligible for coverage
                under most extended health insurance plans, as well as ICBC.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Global Toolkit */}
      <section className="py-16 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                A Global Toolkit for Local Care
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Eva often incorporates several specialized disciplines. Choosing Scandinavian Clinic
                means benefiting from a broad clinical toolkit that includes:
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {toolkit.map((item, i) => (
                <Card key={i} className="p-6 bg-background border-border hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-primary mb-2">{item.title}</h3>
                      <p className="text-foreground leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
            <p className="text-lg text-foreground leading-relaxed text-center mt-12 max-w-3xl mx-auto">
              If you are looking for an approach that prioritizes clinical investigation, Eva's
              background is uniquely suited to that goal.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link to="/booking">Book an Appointment</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/first-visit">Learn What to Expect</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Education;
