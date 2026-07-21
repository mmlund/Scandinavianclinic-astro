import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, MapPin, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { usePageMeta } from "@/hooks/use-page-meta";

const Hours = () => {
  usePageMeta({
    title: "Clinic Hours & Appointments – RMT North Vancouver | Scandinavian Clinic",
    description:
      "View current clinic hours and booking information for registered massage therapy at the Scandinavian Clinic in North Vancouver. Learn how appointments work and what to expect when scheduling your visit.",
  });

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <header className="text-center mb-12 animate-fade-in">
            <div className="text-sm font-semibold text-accent mb-2 uppercase tracking-wider">
              Clinic Information
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Clinic Hours & Booking Information
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Plan your visit to Scandinavian Clinic in North Vancouver
            </p>
          </header>

          <div className="grid gap-8">
            {/* Booking */}
            <Card className="p-8 shadow-card border-0 bg-gradient-to-br from-background to-primary/5">
              <h2 className="text-2xl font-bold text-foreground mb-3">
                Booking an Appointment
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                The most efficient way to secure a session is at{" "}
                <a
                  href="https://booking.scandinavianclinic.com"
                  className="font-semibold text-primary hover:underline"
                >
                  booking.scandinavianclinic.com
                </a>
                . You can view current availability for initial orthopedic
                assessments and follow-up treatments.
              </p>

              <div className="bg-secondary/40 border-l-4 border-primary p-5 rounded-r-lg mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <Clock className="text-primary" size={20} />
                  <h3 className="font-semibold text-foreground">Clinic Hours</h3>
                </div>
                <div className="text-muted-foreground space-y-1">
                  <p>Monday: 8:00 AM – 5:00 PM</p>
                  <p>Wednesday: 8:00 AM – 5:00 PM</p>
                  <p>Thursday: 8:00 AM – 5:00 PM</p>
                  <p className="mt-2 text-sm">
                    Closed Tuesday, Friday, Saturday & Sunday
                  </p>
                </div>
              </div>

              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link to="/booking">Book Your Appointment</Link>
              </Button>
            </Card>

            {/* Location */}
            <Card className="p-8 shadow-card border-0 bg-gradient-to-br from-background to-accent/5">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Clinic Location & Details
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">Address</p>
                    <p className="text-muted-foreground">
                      Suite 202 - 101 West 16th Street
                      <br />
                      North Vancouver, BC V7M 1T3
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">Phone</p>
                    <a
                      href="tel:+16049264883"
                      className="text-primary hover:underline"
                    >
                      (604) 926-4883
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">Email</p>
                    <a
                      href="mailto:info@scandinavianclinic.com"
                      className="text-primary hover:underline"
                    >
                      info@scandinavianclinic.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2600.7748442984766!2d-123.07896842345562!3d49.31686497144019!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5486701e2f3c3b5f%3A0x4e5e5e5e5e5e5e5e!2s101%20W%2016th%20St%2C%20North%20Vancouver%2C%20BC%20V7M%201T3!5e0!3m2!1sen!2sca!4v1699999999999!5m2!1sen!2sca"
                  width="100%"
                  height="350"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Scandinavian Clinic Location"
                />
              </div>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Hours;
