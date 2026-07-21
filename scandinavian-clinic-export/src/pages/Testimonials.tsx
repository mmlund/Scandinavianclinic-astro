import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Quote, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { usePageMeta } from "@/hooks/use-page-meta";

const testimonials = [
  {
    name: "Karen",
    text: "My recovery from hip replacement surgery had stalled despite months of physiotherapy and exercise. Thankfully, Eva took my case and very patiently and systematically assessed and teased out my chronic back and hip problems. After a short treatment program of massage and corrective exercise I am now pain free for the first time in many years. I also have a clear understanding of how to prevent relapses and maintain my strength and normal functioning. I most appreciated Eva's individualized approach and her ability to clearly explain my rehabilitation program.",
  },
  {
    name: "Mike",
    text: "When you are injured – due to sports or activities you pursue— your life is upended. Eva sets things right with her considered approach. Her knowledge and technique have delivered me from pain. And her recommendations on how to move forward has helped to prevent future injury occurrence. I have recommended Eva to my family and friends. The result is always the same – relief from pain and a return to an active life. She works magic.",
  },
  {
    name: "Brandon",
    text: "I had suffered a debilitating hamstring injury and no treatment methods were working. I went on for months unable to recover and my life was completely put on hold. Eva Andersson started me on the DNS program and I began to see the benefits immediately. With Eva's guidance through DNS, I have made full recovery. Now I am in the best shape of my life and I am able to pursue my dream of joining the Canadian Armed Forces. Eva's knowledge of DNS is invaluable to anyone struggling with a sports related injury or looking to improve their athletic performance.",
  },
];

const Testimonials = () => {
  usePageMeta({
    title: "Patient Results from Clinical RMT Treatment in North Vancouver | Scandinavian Clinic",
    description:
      "Read how patients in North Vancouver recovered from chronic pain, injury, and stalled rehabilitation through detailed assessment, clinical treatment, and corrective exercise at the Scandinavian Clinic.",
  });

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-24">
        <section className="py-20 bg-gradient-to-b from-secondary/30 to-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Patient Stories & Treatment Results
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Hear from patients who have experienced lasting pain relief and improved movement
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <Card
                  key={index}
                  className="p-8 border-0 shadow-card hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-background to-secondary/20 animate-scale-in"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <Quote className="text-accent mb-4" size={32} />
                  <p className="text-muted-foreground leading-relaxed mb-6 italic">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-primary font-bold">{testimonial.name[0]}</span>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">Patient</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <div className="text-sm font-semibold text-accent mb-2 uppercase tracking-wider">
                Schedule Your Visit
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Book an Appointment
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Ready to start your journey to pain-free movement? Click below to schedule your appointment.
              </p>
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link to="/booking">
                  <Calendar className="mr-2" size={20} />
                  Book Your Appointment
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

export default Testimonials;
