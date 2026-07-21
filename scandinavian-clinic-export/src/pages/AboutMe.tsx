import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Calendar,
  Stethoscope,
  Microscope,
  Target,
  GraduationCap,
  Award,
  ExternalLink,
  Activity,
  Search,
  MapPin,
} from "lucide-react";
import evaPortrait from "@/assets/eva-andersson-portrait.jpg";
import { usePageMeta } from "@/hooks/use-page-meta";
import { aboutMeSchema } from "@/lib/schemas";

const AboutMe = () => {
  usePageMeta({
    title: "Eva Andersson, RMT – 30+ Years Clinical Experience in North Vancouver | Scandinavian Clinic",
    description:
      "Eva Andersson is a registered massage therapist in North Vancouver with over 30 years of clinical experience in Sweden and Canada, specializing in biomechanical assessment, orthopedic treatment, and root-cause recovery.",
    jsonLd: aboutMeSchema,
  });

  const philosophy = [
    {
      icon: <Stethoscope className="w-6 h-6" />,
      title: "Assessment-Led Care",
      description:
        'When patients ask "how do you treat?", my answer is always: "That depends on what is wrong." We must identify the functional problem—shortened muscles, restricted joint movement, or asymmetric patterns—before an intervention is chosen.',
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Specific Over General",
      description:
        'Clinical evidence (such as the Skillgate et. al. 2006 study) shows that specific manual therapy is significantly more effective than general advice to "stay active."',
    },
    {
      icon: <Activity className="w-6 h-6" />,
      title: "Early Intervention",
      description:
        "Catching functional abnormalities early prevents unnecessary suffering and leads to faster, more sustainable results.",
    },
  ];

  const authorityKeywords = [
    { icon: <Award className="w-5 h-5" />, label: "30+ Years Experience" },
    { icon: <Microscope className="w-5 h-5" />, label: "Clinical Methodology" },
    { icon: <Target className="w-5 h-5" />, label: "Root Cause Recovery" },
    { icon: <Search className="w-5 h-5" />, label: "Mechanical System Investigation" },
    { icon: <MapPin className="w-5 h-5" />, label: "Registered Massage Therapist (RMT) North Vancouver" },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary/80 py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-accent blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-accent/50 blur-3xl" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-5 gap-12 items-center max-w-6xl mx-auto">
            <div className="lg:col-span-3 animate-fade-in">
              <div className="inline-block px-4 py-1.5 rounded-full bg-accent/20 border border-accent/30 text-accent-foreground text-sm font-semibold mb-6 backdrop-blur-sm">
                North Vancouver · Eva Andersson, RMT
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
                About Eva Andersson, RMT – Clinical Insight & Experience
              </h1>
              <p className="text-xl md:text-2xl text-primary-foreground/90 leading-relaxed font-light">
                Clinical Insight. 30 Years of Experience. Root-Cause Recovery.
              </p>
            </div>
            <div className="lg:col-span-2 animate-scale-in">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-accent/30 to-primary-foreground/10 rounded-2xl blur-2xl" />
                <img
                  src={evaPortrait}
                  alt="Eva Andersson, Registered Massage Therapist in North Vancouver"
                  className="relative rounded-2xl shadow-2xl w-full object-cover aspect-[3/4]"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto animate-fade-in">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
              Many patients arrive at Scandinavian Clinic after struggling to find relevant
              treatment or prompt attention for their pain. My approach is built on a single
              clinical conviction: that most musculoskeletal pain—however complex—can eventually
              be isolated, i.e. to specific spinal segments, restricted movements, and functional
              deviations. Regardless, your muscles are the best tools for treating pain and
              developing optimal movement patterns.
            </p>
            <p className="text-lg md:text-xl text-foreground leading-relaxed font-medium border-l-4 border-accent pl-6">
              My approach centers on thorough assessment, individualized treatment, prevention, and
              empowering patients with self-management strategies. All ages and patients are welcome.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 bg-muted/40">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14 animate-fade-in">
              <div className="text-sm font-semibold text-accent mb-2 uppercase tracking-wider">
                My Treatment Philosophy
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                The Body as a System
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                I view the human body as a mechanical system for movement. It makes little sense
                to divide the assessment of muscles, joints, and coordination into separate silos.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {philosophy.map((item, index) => (
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

      {/* Background + Authority Keywords */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Text */}
              <div className="animate-fade-in">
                <div className="text-sm font-semibold text-accent mb-2 uppercase tracking-wider">
                  Professional Background
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Background &amp; Education
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  My clinical foundation was established in Sweden, a country with a heritage of
                  manual therapy dating back to 1813.
                </p>

                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <GraduationCap className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-1">Swedish Clinical Training</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        My background includes five years of university-level training in
                        Scandinavia as a Doctor of Naprapathy. While I am licensed as a Registered
                        Massage Therapist (RMT) in British Columbia, I utilize this advanced
                        orthopedic training to provide comprehensive analysis and treatments.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <Award className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-1">Clinical Experience</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        With over 30 years of practice across Sweden, Czechia, and Canada, I have
                        managed thousands of cases ranging from acute sports injuries to complex,
                        chronic spinal conditions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Authority Keywords Graphic */}
              <div className="animate-scale-in lg:sticky lg:top-24">
                <div className="relative rounded-2xl bg-gradient-to-br from-primary to-primary/80 p-8 md:p-10 shadow-2xl overflow-hidden">
                  <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-accent/20 blur-2xl" />
                  <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-accent/10 blur-2xl" />

                  <div className="relative z-10">
                    <div className="space-y-4">
                      {authorityKeywords.map((kw, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-4 p-4 rounded-xl bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/10 hover:bg-primary-foreground/15 transition-colors"
                        >
                          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                            {kw.icon}
                          </div>
                          <span className="font-semibold text-primary-foreground text-sm md:text-base">
                            {kw.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Memberships */}
      <section className="py-20 bg-muted/40">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <div className="text-sm font-semibold text-accent mb-2 uppercase tracking-wider">
                Credentials
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Professional Memberships &amp; Certifications
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-10">
              <Card className="p-6 border-0 shadow-card bg-background text-center animate-fade-in">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary mb-4">
                  <Award className="w-7 h-7" />
                </div>
                <h3 className="font-bold text-foreground mb-2">CMTBC</h3>
                <p className="text-sm text-muted-foreground">
                  Registered member of the College of Massage Therapists of British Columbia.
                </p>
              </Card>

              <Card className="p-6 border-0 shadow-card bg-background text-center animate-fade-in" style={{ animationDelay: "0.1s" }}>
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary mb-4">
                  <GraduationCap className="w-7 h-7" />
                </div>
                <h3 className="font-bold text-foreground mb-2">Prague School</h3>
                <p className="text-sm text-muted-foreground">
                  Dynamic Neuromuscular Stabilization (DNS).
                </p>
              </Card>

              <Card className="p-6 border-0 shadow-card bg-background text-center animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary mb-4">
                  <Microscope className="w-7 h-7" />
                </div>
                <h3 className="font-bold text-foreground mb-2">Orthopedic Manual Therapy</h3>
                <p className="text-sm text-muted-foreground">
                  Advanced training in Orthopedic Manual Therapy and Neuromuscular Rehabilitation.
                </p>
              </Card>
            </div>

            <div className="text-center animate-fade-in">
              <a
                href="https://naprapathogskolan.se/the-scandinavian-college-of-naprapathic-manual-medicine"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold underline underline-offset-4"
              >
                Learn more about my specific training
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Ready to Investigate the Source of Your Pain?
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8">
              Book a clinical assessment and start your path to root-cause recovery.
            </p>
            <Button
              asChild
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-10 py-6 text-lg font-semibold transition-all hover:scale-105 shadow-lg"
            >
              <a href="/booking" className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                Book an Assessment
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutMe;
