import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Globe, Building2, Calendar, Clock } from "lucide-react";
import { usePageMeta } from "@/hooks/use-page-meta";
import { contactSchema } from "@/lib/schemas";

const Contact = () => {
  usePageMeta({
    title: "Contact Scandinavian Clinic | RMT North Vancouver",
    description:
      "Contact Scandinavian Clinic in North Vancouver. Suite 202-101 16th St W. Call (604) 926-4883 or book your RMT appointment online.",
    jsonLd: contactSchema,
  });

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-secondary/30 to-background">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <div className="text-sm font-semibold text-accent mb-3 uppercase tracking-wider">
            Get In Touch
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Contact Scandinavian Clinic
          </h1>
          <p className="text-xl text-muted-foreground mb-4">
            Clinical Assessment & Orthopedic Manual Therapy in North Vancouver.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Whether you are dealing with a recent sports injury or a long-standing chronic
            condition, we provide a systematic, evidence-based RMT approach to recovery. Our clinic
            is located within Liberation Fitness in Central Lonsdale, offering a professional
            setting for both manual treatment and active rehabilitation.
          </p>
        </div>
      </section>

      {/* Clinic Details + Booking */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 shadow-card border-0 bg-gradient-to-br from-background to-primary/5">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Clinic Location & Details
              </h2>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Building2 className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">Clinic Name</p>
                    <p className="text-muted-foreground">Scandinavian Clinic</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">Address</p>
                    <p className="text-muted-foreground">
                      101 16th St W Suite 202
                      <br />
                      North Vancouver, BC V7M 1T6
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">Phone</p>
                    <a
                      href="tel:+16049264883"
                      className="text-primary hover:underline font-medium"
                    >
                      (604) 926-4883
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Globe className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">Website</p>
                    <a
                      href="https://scandinavianclinic.com"
                      className="text-primary hover:underline"
                    >
                      scandinavianclinic.com
                    </a>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-8 shadow-card border-0 bg-gradient-to-br from-background to-accent/5 flex flex-col">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Booking an Appointment
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                The most efficient way to secure a session is at{" "}
                <span className="font-medium text-foreground">
                  booking.scandinavianclinic.com
                </span>
                . You can view current availability for initial orthopedic assessments and
                follow-up treatments.
              </p>

              <div className="bg-primary/5 border-l-4 border-primary p-5 rounded-r-lg mb-6">
                <div className="flex items-start gap-3 mb-3">
                  <Clock className="text-primary mt-0.5 flex-shrink-0" size={18} />
                  <div>
                    <p className="font-semibold text-foreground mb-1">Clinic Hours</p>
                    <div className="text-sm text-muted-foreground space-y-0.5">
                      <p>Monday: 8:00 AM – 5:00 PM</p>
                      <p>Wednesday: 8:00 AM – 5:00 PM</p>
                      <p>Thursday: 8:00 AM – 5:00 PM</p>
                      <p className="mt-2">Closed Tuesday, Friday, Saturday & Sunday</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-auto flex flex-col sm:flex-row gap-3">
                <Button asChild size="lg" className="flex-1">
                  <Link to="/booking">
                    <Calendar className="mr-1" size={18} />
                    Book Online
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="flex-1">
                  <a href="tel:+16049264883">
                    <Phone className="mr-1" size={18} />
                    Call Clinic
                  </a>
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="pb-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <Card className="p-0 shadow-card border-0 overflow-hidden">
            <div className="w-full h-[450px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2600.7748442984766!2d-123.07896842345562!3d49.31686497144019!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5486701e2f3c3b5f%3A0x4e5e5e5e5e5e5e5e!2s101%20W%2016th%20St%2C%20North%20Vancouver%2C%20BC%20V7M%201T3!5e0!3m2!1sen!2sca!4v1699999999999!5m2!1sen!2sca"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Scandinavian Clinic Location — 101 16th St W, North Vancouver"
              />
            </div>
          </Card>
          <div className="text-center mt-6">
            <a
              href="https://www.google.com/maps/place/101+W+16th+St,+North+Vancouver,+BC+V7M+1T3"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline font-medium"
            >
              View Location on Google Maps →
            </a>
          </div>
        </div>
      </section>

      {/* Directions */}
      <section className="py-16 bg-secondary/20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Directions & Access
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Scandinavian Clinic is centrally located at the corner of 16th Street West and
            Lonsdale Avenue.
          </p>

          <Card className="p-8 shadow-card border-0 bg-background">
            <h3 className="text-2xl font-bold text-foreground mb-4">Finding the Suite</h3>
            <p className="text-muted-foreground leading-relaxed">
              We are situated on the second floor of the professional building at{" "}
              <span className="font-medium text-foreground">101 16th St W</span>. Take the elevator
              or stairs to <span className="font-medium text-foreground">Suite 202</span>. Our
              clinical space is located inside the Liberation Fitness facility. Please check in at
              the front desk upon arrival.
            </p>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-b from-background to-primary/5">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to Book Your Assessment?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Reserve your initial orthopedic assessment or follow-up treatment online.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link to="/booking">Book Your Appointment</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="tel:+16049264883">Call (604) 926-4883</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
