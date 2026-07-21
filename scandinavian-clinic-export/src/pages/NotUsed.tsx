import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { usePageMeta } from "@/hooks/use-page-meta";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Calendar, CheckCircle, Search, Target, Lightbulb, ClipboardList, Hand, RefreshCw, MapPin, Phone, Mail, Shield } from "lucide-react";
import evaHeadshot from "@/assets/eva-headshot.jpg";
import rmtEducation from "@/assets/rmt-education.jpg";
import preventionVideo from "@/assets/prevention-video.mp4";
import assessmentImage from "@/assets/assessment-image.jpg";
import treatmentSession from "@/assets/treatment-session.jpg";
import correctiveFocus from "@/assets/corrective-focus.jpg";
import educationExplanation from "@/assets/education-explanation.jpg";

const RMTCore2 = () => {
  usePageMeta({
    title: "Test Page | Scandinavian Clinic",
    description: "Internal test page — not for public indexing.",
    noindex: true,
  });

  const commonPhrases = [
    "Your muscles are tight",
    "You need more sessions",
    "It will take time"
  ];

  const problemBlocks = [
    {
      icon: <Search className="w-6 h-6" />,
      title: "Symptoms treated instead of causes",
      description: "Pain is often managed where it appears, rather than where it originates. It sometimes takes a lot of training, expertise, and gradual unwinding of several related issues to find the root cause."
    },
    {
      icon: <ClipboardList className="w-6 h-6" />,
      title: "Little or no clinical assessment",
      description: "Without understanding movement patterns, joint function, and load distribution, treatment becomes guesswork."
    },
    {
      icon: <RefreshCw className="w-6 h-6" />,
      title: "Generic protocols",
      description: "Standard routines can miss individual contributors who keep the problem active."
    }
  ];

  const sessionSteps = [
    {
      icon: <ClipboardList className="w-6 h-6" />,
      title: "Clinical assessment",
      description: "Discussion of symptoms, history, and movement to understand contributing factors.",
      image: assessmentImage
    },
    {
      icon: <Hand className="w-6 h-6" />,
      title: "Targeted hands-on treatment",
      description: "Manual therapy chosen based on findings — not routines.",
      image: treatmentSession
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Corrective focus",
      description: "Addressing the underlying contributors to reduce recurrence, not just short-term relief.",
      image: correctiveFocus
    }
  ];

  const goodFit = [
    "Have persistent or recurring pain",
    "Want to understand why the issue is happening",
    "Prefer structured, clinical care",
    "Have tried other treatments without lasting results"
  ];

  const credibilityPoints = [
    { icon: <Shield className="w-5 h-5" />, text: "Registered Massage Therapy (RMT)" },
    { icon: <CheckCircle className="w-5 h-5" />, text: "Eligible for extended health insurance" },
    { icon: <MapPin className="w-5 h-5" />, text: "Located in North Vancouver" },
    { icon: <Calendar className="w-5 h-5" />, text: "Appointment-based clinical practice" }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section - Video on side, text on other */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-primary/95 to-primary/80">
        <div className="container mx-auto px-4 z-10 relative py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-4 leading-tight">
                Registered Massage Therapy for Patients Who Haven't Found Answers Yet
              </h1>
              <p className="text-xl md:text-2xl text-primary-foreground/90 mb-4 font-medium">
                Clinical, assessment-based RMT care for people whose pain hasn't resolved with previous treatment.
              </p>
              <p className="text-sm text-primary-foreground/70 mb-8 italic">
                This clinic focuses on treatment and problem-solving — not relaxation or spa massage.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 text-lg font-semibold transition-all hover:scale-105 shadow-lg"
                >
                  <Link
                    to="/booking"
                    className="flex items-center gap-2"
                  >
                    <Calendar className="w-5 h-5" />
                    Book an RMT Assessment & Treatment
                  </Link>
                </Button>
              </div>
              <p className="text-sm text-primary-foreground/70 mt-4">
                Covered by extended health insurance
              </p>
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-2xl animate-scale-in aspect-[9/16] max-w-sm mx-auto lg:mx-0 lg:ml-auto">
              <video
                src={preventionVideo}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: Empathy */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden shadow-xl animate-scale-in">
              <img
                src={evaHeadshot}
                alt="Eva - Clinical RMT"
                className="w-full aspect-[3/4] object-cover"
              />
            </div>

            <div className="animate-fade-in">
              <div className="text-sm font-semibold text-accent mb-2 uppercase tracking-wider">
                Understanding
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                You're not alone if past treatments didn't help.
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Many patients come to this clinic after trying massage therapy, physiotherapy, or other treatments — sometimes multiple times — without lasting improvement.
                </p>
                <p className="font-medium text-foreground">
                  Often, they were told:
                </p>
                <ul className="space-y-2 ml-4">
                  {commonPhrases.map((phrase, index) => (
                    <li key={index} className="flex items-start gap-3 italic text-muted-foreground">
                      <span className="text-primary">"</span>
                      {phrase}
                      <span className="text-primary">"</span>
                    </li>
                  ))}
                </ul>
                <p>
                  Yet the pain returned, shifted, or never fully resolved.
                </p>
                <p className="font-semibold text-foreground bg-muted p-4 rounded-lg border-l-4 border-accent">
                  This page is for patients who are looking for clarity and finding the root cause(s), not just another treatment attempt.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Why pain doesn't resolve */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="animate-fade-in order-2 lg:order-1">
              <div className="text-sm font-semibold text-accent mb-2 uppercase tracking-wider">
                The Real Issue
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Why pain often doesn't resolve
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                In many chronic or recurring cases, the issue isn't effort or compliance — it's how the problem was approached.
              </p>
              
              <div className="space-y-6">
                {problemBlocks.map((block, index) => (
                  <Card key={index} className="p-6 border-0 shadow-card bg-background animate-slide-in-left" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        {block.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-foreground mb-2">
                          {block.title}
                        </h3>
                        <p className="text-muted-foreground text-sm">
                          {block.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              <p className="text-muted-foreground italic mt-6 pl-4 border-l-4 border-primary/30">
                This is not a failure of the patient — it's a limitation of the approach.
              </p>
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-xl animate-scale-in order-1 lg:order-2 aspect-video">
              <video
                src={preventionVideo}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Your Approach */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden shadow-xl animate-scale-in">
              <img
                src={rmtEducation}
                alt="European clinical training"
                className="w-full aspect-[4/3] object-cover"
              />
            </div>

            <div className="animate-fade-in">
              <div className="text-sm font-semibold text-accent mb-2 uppercase tracking-wider">
                My Approach
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                This is how I work as an RMT
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  At Scandinavian Clinic, Registered Massage Therapy is practiced as a clinical discipline, not a routine service.
                </p>
                <p className="font-medium text-foreground">
                  Each session is guided by:
                </p>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>Careful assessment</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>Clinical reasoning</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>Individualized decision-making</span>
                  </li>
                </ul>
                <p>
                  Treatment is adapted to your specific presentation, not a pre-set sequence.
                </p>

                <div className="bg-muted p-6 rounded-lg mt-6">
                  <h3 className="text-lg font-bold text-foreground mb-2 flex items-center gap-2">
                    <Lightbulb className="w-5 h-5 text-accent" />
                    5 Years European Training
                  </h3>
                  <p className="text-muted-foreground">
                    My background includes European university-level education in manual therapy and musculoskeletal assessment — a training model that emphasizes problem-solving and root-cause identification.
                  </p>
                  <p className="text-muted-foreground mt-2">
                    This perspective often helps identify factors that may have been overlooked previously.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: What a Session Looks Like */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <div className="text-sm font-semibold text-accent mb-2 uppercase tracking-wider">
                The Process
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                What to expect in an RMT session
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {sessionSteps.map((step, index) => (
                <Card key={index} className="overflow-hidden border-0 shadow-card bg-background animate-fade-in" style={{ animationDelay: `${index * 0.15}s` }}>
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        {step.icon}
                      </div>
                      <span className="text-2xl font-bold text-primary/30">{index + 1}</span>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </Card>
              ))}
            </div>

            <div className="text-center mt-10 animate-fade-in">
              <p className="text-lg text-foreground font-medium">
                Sessions are active, focused, and collaborative.
              </p>
              <p className="text-muted-foreground italic mt-2">
                This is not a relaxation-based massage experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Who This Is For */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <div className="text-center mb-12">
              <div className="text-sm font-semibold text-accent mb-2 uppercase tracking-wider">
                Self-Selection
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Is this the right clinic for you?
              </h2>
            </div>

            <div className="max-w-lg mx-auto">
              <Card className="p-8 border-0 shadow-card bg-background">
                <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                  <CheckCircle className="w-6 h-6 text-primary" />
                  This clinic is a good fit if you:
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

      {/* Section 6: Reassurance & Legitimacy */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
              {credibilityPoints.map((point, index) => (
                <div key={index} className="flex items-center gap-3 bg-background p-4 rounded-lg shadow-sm animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="text-primary">{point.icon}</div>
                  <span className="text-sm text-foreground">{point.text}</span>
                </div>
              ))}
            </div>
            <p className="text-center text-sm text-muted-foreground mt-6 italic">
              No exaggerated claims. No promises of cure.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden shadow-xl animate-scale-in">
              <img
                src={educationExplanation}
                alt="Clinical education and patient consultation"
                className="w-full aspect-[4/3] object-cover"
              />
            </div>

            <div className="text-center lg:text-left animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
                Ready to take a more structured approach?
              </h2>
              <Button
                asChild
                className="bg-accent hover:bg-accent/90 text-accent-foreground px-10 py-6 text-lg font-semibold transition-all hover:scale-105 shadow-lg"
              >
                <Link
                  to="/booking"
                  className="flex items-center gap-2"
                >
                  <Calendar className="w-5 h-5" />
                  Book an RMT Assessment & Treatment
                </Link>
              </Button>
              <p className="text-sm text-primary-foreground/70 mt-4">
                Appointments are clinical in nature and focused on identifying and addressing contributing factors.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RMTCore2;
