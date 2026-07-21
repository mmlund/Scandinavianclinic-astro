import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { About } from "@/components/About";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calendar, CheckCircle, XCircle, Stethoscope, ClipboardList, Target, MessageCircle } from "lucide-react";
import heroEva from "@/assets/hero-eva.jpg";
import rmtEducation from "@/assets/rmt-education.jpg";
import rmtSession from "@/assets/rmt-session-new.jpg";
import painCollage from "@/assets/pain-collage.png";
import { usePageMeta } from "@/hooks/use-page-meta";

const RMTCore1 = () => {
  usePageMeta({
    title: "RMT & Massage Therapy | Scandinavian Clinic North Vancouver",
    description: "Clinical Registered Massage Therapy for persistent pain. Thorough assessment, targeted treatment, and personalized rehabilitation in North Vancouver.",
  });
  const scrollToBooking = () => {
    document.getElementById("rmt-final-cta")?.scrollIntoView({ behavior: "smooth" });
  };

  const conditions = [
    "Ongoing neck or shoulder pain",
    "Persistent low-back pain",
    "Tennis elbow",
    "Hip or pelvic discomfort",
    "Headaches related to muscle tension or posture",
    "Pain that returns after previous treatments"
  ];

  const sessionSteps = [
    {
      icon: <ClipboardList className="w-6 h-6" />,
      title: "Assessment"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Targeted Treatment"
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "Plan & Guidance"
    }
  ];

  const goodFit = [
    "You have ongoing or recurring pain",
    "You want to understand why pain is happening",
    "You prefer structured, clinical care"
  ];

  const notGoodFit = [
    "You want relaxation or pampering",
    "You're looking for a one-off \"feel-good\" massage",
    "You prefer a spa environment"
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={heroEva}
            alt="Clinical RMT treatment session"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent" />
        </div>

        <div className="container mx-auto px-4 z-10 relative">
          <div className="max-w-3xl animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
              Registered Massage Therapy in North Vancouver
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-2xl leading-relaxed">
              Your muscles are the best tools for treating pain and developing optimal movement patterns.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 text-lg font-semibold transition-all hover:scale-105 shadow-lg"
              >
                <a href="/booking" className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Book a Clinical RMT Appointment
                </a>
              </Button>
            </div>
            <p className="text-sm text-primary-foreground/70 mt-4">
              Covered by extended health insurance
            </p>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-1.5 bg-primary-foreground/50 rounded-full" />
          </div>
        </div>
      </section>

      {/* Section 1: What This Is */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                <Stethoscope className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                This Is Clinical RMT
              </h2>
            </div>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Scandinavian Clinic provides Registered Massage Therapy focused on identifying and treating the underlying causes of pain.
              </p>
              <p>
                Each session begins with a thorough clinical assessment and reasoning, followed by hands-on treatment chosen specifically for your condition.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Conditions Treated */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Common Reasons Patients Come Here
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {conditions.map((condition, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 bg-background rounded-lg shadow-sm"
                >
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">{condition}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About / Clinical RMT Focus Section */}
      <About imageSrc={painCollage} imageAlt="Common pain points including back, neck, knee, and shoulder pain" />

      {/* Section 3: How Sessions Work */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                What to Expect in a Session
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6 items-center">
              <div className="space-y-3">
                {sessionSteps.map((step, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 bg-muted/30 rounded-lg animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      {step.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {index + 1}. {step.title}
                    </h3>
                  </div>
                ))}
              </div>

              <div className="relative rounded-xl overflow-hidden shadow-lg animate-scale-in">
                <img
                  src={rmtSession}
                  alt="Clinical leg massage therapy treatment"
                  className="w-full aspect-video object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Who This Is For */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Is This the Right Clinic for You?
              </h2>
            </div>

            <div className="max-w-md mx-auto">
              <Card className="p-8 border-0 shadow-card bg-background">
                <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                  <CheckCircle className="w-6 h-6 text-primary" />
                  Good Fit
                </h3>
                <ul className="space-y-4">
                  {goodFit.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Therapist Credibility */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative rounded-2xl overflow-hidden shadow-xl animate-scale-in order-2 lg:order-1">
                <img
                  src={rmtEducation}
                  alt="Clinical education and expertise"
                  className="w-full aspect-[4/3] object-cover"
                />
              </div>

              <div className="animate-fade-in order-1 lg:order-2">
                <div className="text-sm font-semibold text-accent mb-2 uppercase tracking-wider">
                  Expertise
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  A Different Clinical Background
                </h2>
                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    Treatment at Scandinavian Clinic is informed by advanced manual therapy education and a European clinical training model that emphasizes assessment, biomechanics, and long-term improvement.
                  </p>
                  <p>
                    I have five years of post-secondary education and many courses in manual medicine.
                  </p>
                  <p className="font-medium text-foreground">
                    The focus is on investigation, reasoning, progression and results.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="rmt-final-cta" className="py-20 bg-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Ready for a Clinical Approach to RMT?
            </h2>
            <Button
              asChild
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-10 py-6 text-lg font-semibold transition-all hover:scale-105 shadow-lg"
            >
              <a href="/booking" className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                Book a Clinical RMT Appointment
              </a>
            </Button>
            <p className="text-sm text-primary-foreground/70 mt-4">
              Insurance receipts provided
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RMTCore1;
