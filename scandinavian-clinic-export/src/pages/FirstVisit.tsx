import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calendar, Clock, Shirt, FileText, ClipboardCheck, Search, Activity, Home, Receipt, Phone, AlertCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { usePageMeta } from "@/hooks/use-page-meta";
import { firstVisitSchema } from "@/lib/schemas";
import legImage from "@/assets/first-visit-leg-treatment.jpg";
import dnsImage from "@/assets/first-visit-dns-assessment.jpg";

const FirstVisit = () => {
  usePageMeta({
    title: "First Visit Biomechanical Assessment – RMT North Vancouver | Scandinavian Clinic",
    description:
      "Your first visit includes a detailed health history, symptom review, and a hands-on biomechanical assessment to identify the root cause of pain and dysfunction. This clinical approach allows precise treatment planning and faster recovery.",
    jsonLd: firstVisitSchema,
  });

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-24">
        {/* Hero */}
        <section className="py-20 bg-gradient-to-b from-secondary/30 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center animate-fade-in">
              <div className="text-sm font-semibold text-accent mb-2 uppercase tracking-wider">
                What to Expect
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                What to Expect at Your First Visit
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                A systematic investigation into your movement and pain.
              </p>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                At Scandinavian Clinic, we begin with a clinical assessment to ensure your treatment is guided by your specific conditions and needs. To allow for a thorough history and physical evaluation, we recommend booking 60 minutes for your initial visit (a 45-minute session is also sufficient).
              </p>
            </div>
          </div>
        </section>

        {/* Preparation */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div className="animate-fade-in">
                <div className="text-sm font-semibold text-accent mb-2 uppercase tracking-wider">
                  Preparation
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  What to Bring
                </h2>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  To provide a precise assessment, Eva needs to observe your posture, joint mechanics, and range of motion.
                </p>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Shirt className="text-primary" size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Clothing</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Please bring a tank top and shorts. This allows for an effective evaluation of the spine and extremities while maintaining your comfort.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <FileText className="text-primary" size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Diagnostic Reports</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        If you have previous imaging—such as X-rays, MRIs, or other diagnostic reports—please bring them. While not mandatory, these provide valuable context for your clinical history.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Clock className="text-primary" size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Arrival</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Please arrive 10 minutes early to complete your intake form, which covers your medical history and current symptoms.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="animate-scale-in">
                <img
                  src={dnsImage}
                  alt="Eva conducting a DNS clinical assessment at Scandinavian Clinic"
                  className="rounded-lg shadow-xl w-full h-auto"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Clinical Assessment */}
        <section className="py-20 bg-secondary/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12 animate-fade-in">
                <div className="text-sm font-semibold text-accent mb-2 uppercase tracking-wider">
                  The Process
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  The Clinical Assessment
                </h2>
                <p className="text-lg text-muted-foreground">
                  Before any manual therapy begins, Eva conducts a structured evaluation:
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="p-6 border-0 shadow-card hover:shadow-xl transition-all bg-background animate-scale-in">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                    <ClipboardCheck className="text-accent" size={22} />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Clinical History</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    A detailed discussion regarding when your symptoms started, what triggers pain (if applicable), and how it impacts your daily function.
                  </p>
                </Card>
                <Card className="p-6 border-0 shadow-card hover:shadow-xl transition-all bg-background animate-scale-in" style={{ animationDelay: "0.1s" }}>
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                    <Activity className="text-accent" size={22} />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Physical Evaluation</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    Observing your movement patterns and using hands-on testing to identify the mechanical source of your dysfunction.
                  </p>
                </Card>
                <Card className="p-6 border-0 shadow-card hover:shadow-xl transition-all bg-background animate-scale-in" style={{ animationDelay: "0.2s" }}>
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                    <Search className="text-accent" size={22} />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Root-Cause Identification</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    We look beyond where it hurts to find why it hurts, ensuring the subsequent treatment is targeted and effective.
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Integrated Treatment */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div className="order-2 md:order-1 animate-scale-in">
                <img
                  src={legImage}
                  alt="Manual therapy treatment of the lower leg at Scandinavian Clinic"
                  className="rounded-lg shadow-xl w-full h-auto"
                  loading="lazy"
                />
              </div>
              <div className="order-1 md:order-2 animate-fade-in">
                <div className="text-sm font-semibold text-accent mb-2 uppercase tracking-wider">
                  Treatment
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Integrated Treatment & Follow-up
                </h2>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Once the assessment is complete, Eva applies a combination of manual techniques—such as massage, soft tissue normalization, joint mobilization, or neuromuscular rehabilitation—tailored specifically to the findings during the assessment.
                </p>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <AlertCircle className="text-primary" size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Post-Treatment</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        It is common to feel some minor soreness for 24–48 hours as your body adjusts to the mechanical changes.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Calendar className="text-primary" size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Plan of Care</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Eva will discuss a follow-up schedule based on your goals. Some acute issues resolve in 2–3 sessions, while chronic mechanical imbalances may require further treatment or periodic maintenance.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Home className="text-primary" size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Rehabilitation</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Home exercises, which include instruction on how to perform them correctly, are typically part of your treatment program.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Insurance & Policies */}
        <section className="py-20 bg-secondary/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12 animate-fade-in">
                <div className="text-sm font-semibold text-accent mb-2 uppercase tracking-wider">
                  Good to Know
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Insurance & Clinic Policies
                </h2>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="p-6 border-0 shadow-card bg-background animate-scale-in">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Receipt className="text-primary" size={22} />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Extended Health</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    Most BC plans cover Registered Massage Therapy. You will receive an official RMT receipt following your session to submit for reimbursement.
                  </p>
                </Card>
                <Card className="p-6 border-0 shadow-card bg-background animate-scale-in" style={{ animationDelay: "0.1s" }}>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Phone className="text-primary" size={22} />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">ICBC & MSP</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    If your visit is covered under ICBC, WCB, RCMP, or MSP-exempt programs, do not book online. Please call{" "}
                    <a href="tel:6049264883" className="text-primary font-semibold hover:underline">
                      604-926-4883
                    </a>{" "}
                    directly to ensure proper intake procedures are followed.
                  </p>
                </Card>
                <Card className="p-6 border-0 shadow-card bg-background animate-scale-in" style={{ animationDelay: "0.2s" }}>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <AlertCircle className="text-primary" size={22} />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Cancellations</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    We require 24 hours' notice for all cancellations or rescheduling. Late changes are subject to a full session fee.
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <div className="text-sm font-semibold text-accent mb-2 uppercase tracking-wider">
                Schedule Your Visit
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Book Your Initial Assessment
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Ready to start your journey to pain-free movement? Click below to schedule your appointment.
              </p>
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link to="/booking">
                  <Calendar className="mr-2" size={20} />
                  Book Your Initial Assessment
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default FirstVisit;
