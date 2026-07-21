import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Testimonials } from "@/components/Testimonials";
import { Booking } from "@/components/Booking";
import { Contact } from "@/components/Contact";
import { CheckCircle2, Activity, Target, Heart, Stethoscope } from "lucide-react";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import backpainVideo from "@/assets/backpain-video.mp4";
import heroEva from "@/assets/hero-eva.jpg";
import manualTherapy from "@/assets/manual-therapy.jpg";
import customizedTreatment from "@/assets/customized-treatment.jpg";
import dnsVideo from "@/assets/dns-video.mp4";
import preventionVideo from "@/assets/prevention-video.mp4";
import { usePageMeta } from "@/hooks/use-page-meta";

const BackPain = () => {
  usePageMeta({
    title: "Back Pain Treatment | Scandinavian Clinic North Vancouver",
    description: "Specialized back pain treatment with orthopedic manual therapy and DNS training in North Vancouver.",
  });
  const credentials = [
    "5-year Scandinavian post-secondary education and training",
    "Czech-trained DNS therapist",
    "Advanced biomechanical assessment expertise",
    "Focus on prevention and self-management",
    "Multiple treatment modality integration",
    "Commitment to effective, lasting results"
  ];

  const services = [
    {
      icon: <Stethoscope className="w-8 h-8" />,
      title: "Orthopedic Manual Therapy for Back Pain",
      description: "Combination of treatments: spine and joint mobilization, soft tissue including fascia, specific stretching, and neurodynamics to restore function and decrease pain.",
      image: manualTherapy
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: "Dynamic Neuromuscular Stabilization",
      description: "Fast-growing active treatment method for training and pain prevention, rehabilitation and athletic performance improvement. DNS stabilizes core muscles: diaphragm, pelvic floor, and all parts of the abdominal wall.",
      video: dnsVideo
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Customized Treatment Plans for Back Pain",
      description: "Tailored assessment and treatment specific to your condition, ensuring we address the root cause of your pain.",
      image: customizedTreatment
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Prevention & Self-Management for Back Pain",
      description: "Empowering you with tools and knowledge to take care of yourself and prevent future injuries.",
      video: preventionVideo
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Hero */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <img
              src={heroEva}
              alt="Professional orthopedic therapy environment"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent" />
          </div>
          <div className="container mx-auto px-4 z-10 relative">
            <div className="max-w-3xl animate-fade-in">
              <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
                My Approach to
                <br />
                <span className="text-accent">Back Pain</span>
              </h1>
              <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-2xl leading-relaxed">
                Your muscles are the best tools for treating pain and developing optimal movement patterns
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/booking"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:scale-105 shadow-lg"
                >
                  Book Your Appointment
                </a>
                <button
                  onClick={() => document.getElementById("expertise")?.scrollIntoView({ behavior: "smooth" })}
                  className="bg-primary-foreground/10 hover:bg-primary-foreground/20 text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg transition-all backdrop-blur-sm border border-primary-foreground/30"
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
            <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex items-start justify-center p-2">
              <div className="w-1.5 h-1.5 bg-primary-foreground/50 rounded-full" />
            </div>
          </div>
        </section>

        {/* Expertise (About) */}
        <section id="expertise" className="py-20 bg-gradient-to-b from-background to-secondary/30">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              {/* Video instead of image */}
              <div className="animate-slide-in-left">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-2xl" />
                  <video
                    src={backpainVideo}
                    autoPlay
                    loop
                    muted
                    playsInline
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
                  Clinical RMT Focus
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

        {/* Services */}
        <section id="services" className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-fade-in">
              <div className="text-sm font-semibold text-accent mb-2 uppercase tracking-wider">
                Our Approach
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Comprehensive Care Solutions for Back Pain
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                For positive long-term results, you need to restore your natural muscle balance. 
                We use a combination of manual treatments, active therapies, and training focused on movement and muscle activation.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {services.map((service, index) => (
                <Card
                  key={index}
                  className="group overflow-hidden border-0 shadow-card hover:shadow-xl transition-all duration-300 animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative h-64 overflow-hidden">
                    {'video' in service && service.video ? (
                      <video
                        src={service.video}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    ) : (
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 text-primary-foreground">
                      {service.icon}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </Card>
              ))}
            </div>

            <div className="mt-16 max-w-4xl mx-auto bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 text-center">
                It All Has to Fit - For Your Back Pain
              </h3>
              <p className="text-lg text-muted-foreground text-center leading-relaxed mb-6">
                Our first step is always to find the root cause of your pain. Treatment is then tailored 
                to your specific condition and needs. Our goal is to alleviate your pain and prevent it from returning.
              </p>
              <p className="text-center text-muted-foreground">
                Whatever your active lifestyle looks like, we want you to enjoy it without the restrictions 
                of pain, discomfort, and improper movement.
              </p>
            </div>
          </div>
        </section>

        <Testimonials />
        <Booking />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default BackPain;
