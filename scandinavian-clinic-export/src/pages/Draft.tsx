import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { usePageMeta } from "@/hooks/use-page-meta";
import { CheckCircle2, MapPin, ShieldCheck, Activity, Calendar } from "lucide-react";
import heroEva from "@/assets/hero-eva.jpg";

const Draft = () => {
  usePageMeta({
    title: "Draft | Scandinavian Clinic",
    description:
      "Internal draft page — not for public indexing.",
    noindex: true,
  });

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* HERO */}
        <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src={heroEva}
              alt="Registered Massage Therapy treatment at Scandinavian Clinic in North Vancouver"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent" />
          </div>

          <div className="container mx-auto px-4 z-10 relative">
            <div className="max-w-3xl animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
                Registered Massage Therapy in North Vancouver
              </h1>
              <p className="text-xl md:text-2xl text-primary-foreground/95 mb-4 leading-relaxed">
                Scandinavian Clinic provides Registered Massage Therapy in North Vancouver for pain
                relief, injury recovery, and better movement.
              </p>
              <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl leading-relaxed">
                Whether you are managing back pain, recovering from a sports injury, or dealing with
                desk-related strain, our RMT helps you get back to the activities you love.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/booking"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:scale-105 shadow-lg inline-flex items-center justify-center gap-2"
                >
                  <Calendar className="w-5 h-5" />
                  Book Registered Massage Therapy
                </a>
                <Link
                  to="/first-visit"
                  className="bg-background/10 hover:bg-background/20 backdrop-blur text-primary-foreground border border-primary-foreground/30 px-8 py-4 rounded-lg font-semibold text-lg transition-all inline-flex items-center justify-center"
                >
                  Learn about your first visit
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* WHO WE HELP */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Is this you?
              </h2>
              <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
                Scandinavian Clinic offers Registered Massage Therapy in North Vancouver for people
                living with persistent pain, sports injuries, and work-related strain. We see a
                wide range of patients with goals from simple pain relief to returning to sport.
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Desk workers with neck, shoulder, or upper-back tension",
                  "Runners and cyclists with knee, hip, or IT band pain",
                  "Patients recovering from a motor vehicle accident or surgery",
                  "Active adults with chronic back pain or sciatica",
                  "Weekend athletes managing tendon and overuse injuries",
                  "Anyone wanting to move better and prevent future injury",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES OVERVIEW */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-center">
                Our Services
              </h2>
              <p className="text-lg text-muted-foreground mb-12 text-center max-w-3xl mx-auto leading-relaxed">
                Our registered massage therapy in North Vancouver is assessment-based and tailored
                to your goals — from acute pain management to long-term rehabilitation and
                performance.
              </p>

              <div className="grid md:grid-cols-3 gap-6">
                <Card className="border-2 border-primary/20 hover:border-primary/40 transition-all">
                  <CardContent className="p-6">
                    <Activity className="w-10 h-10 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-3 text-foreground">
                      Registered Massage Therapy (RMT)
                    </h3>
                    <p className="text-muted-foreground">
                      Hands-on treatment for pain, tension, and recovery, delivered by a regulated
                      RMT in North Vancouver.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <Activity className="w-10 h-10 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-3 text-foreground">
                      Sports-Focused Treatment
                    </h3>
                    <p className="text-muted-foreground">
                      Targeted therapy for athletes and active people working through overuse,
                      strains, and training plateaus.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <Activity className="w-10 h-10 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-3 text-foreground">Injury Rehab</h3>
                    <p className="text-muted-foreground">
                      Structured rehabilitation for post-surgical recovery, MVA injuries, and
                      complex musculoskeletal cases.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="text-center mt-10">
                <p className="text-lg text-foreground">
                  Learn more about our{" "}
                  <Link
                    to="/r-m-t"
                    className="text-primary font-semibold underline underline-offset-4 hover:text-primary/80"
                  >
                    Registered Massage Therapy in North Vancouver
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SERVING NORTH VANCOUVER */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <MapPin className="w-12 h-12 text-accent mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Serving North Vancouver
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Scandinavian Clinic is centrally located in North Vancouver, making Registered
                Massage Therapy in North Vancouver easy and convenient for patients in Central
                Lonsdale, Lower Lonsdale, Lynn Valley, and the surrounding North Shore
                neighbourhoods.
              </p>
              <p className="text-muted-foreground">
                Suite 202, 101 West 16th Street · North Vancouver, BC
              </p>
            </div>
          </div>
        </section>

        {/* TRUST & CREDENTIALS */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
                Why Choose Scandinavian Clinic
              </h2>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <ShieldCheck className="w-10 h-10 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2 text-foreground">
                    Registered & Regulated
                  </h3>
                  <p className="text-muted-foreground">
                    Our RMTs are regulated health professionals in BC, in good standing with the
                    CMTBC.
                  </p>
                </div>

                <div className="text-center">
                  <ShieldCheck className="w-10 h-10 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2 text-foreground">
                    Evidence-Based Approach
                  </h3>
                  <p className="text-muted-foreground">
                    Our Registered Massage Therapy is grounded in orthopedic assessment and
                    sports-informed clinical reasoning.
                  </p>
                </div>

                <div className="text-center">
                  <ShieldCheck className="w-10 h-10 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2 text-foreground">
                    Easy Online Booking
                  </h3>
                  <p className="text-muted-foreground">
                    Receipts provided for extended health coverage. Book online in minutes — no
                    referral required.
                  </p>
                </div>
              </div>

              <div className="text-center mt-12">
                <a
                  href="/booking"
                  className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:scale-105 shadow-lg"
                >
                  <Calendar className="w-5 h-5" />
                  Book Your Appointment
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Draft;
