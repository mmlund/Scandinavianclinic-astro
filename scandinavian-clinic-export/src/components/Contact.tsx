import { Card } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Link } from "react-router-dom";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <div className="text-sm font-semibold text-accent mb-2 uppercase tracking-wider">
            Get In Touch
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Contact & Location
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're here to help you start your journey to pain-free movement
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="p-8 shadow-card border-0 bg-gradient-to-br from-background to-primary/5">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Contact Information
            </h3>
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

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="text-primary" size={20} />
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-1">Hours</p>
                  <div className="text-muted-foreground">
                    <p>Monday: 8:00 AM - 5:00 PM</p>
                    <p>Wednesday: 8:00 AM - 5:00 PM</p>
                    <p>Thursday: 8:00 AM - 5:00 PM</p>
                    <p className="mt-2 text-sm">Closed Tuesday, Friday, Saturday & Sunday</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-0 shadow-card border-0 overflow-hidden">
            <div className="w-full h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2600.7748442984766!2d-123.07896842345562!3d49.31686497144019!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5486701e2f3c3b5f%3A0x4e5e5e5e5e5e5e5e!2s101%20W%2016th%20St%2C%20North%20Vancouver%2C%20BC%20V7M%201T3!5e0!3m2!1sen!2sca!4v1699999999999!5m2!1sen!2sca"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Clinic Location"
              />
            </div>
          </Card>
          
          <Card className="p-8 shadow-card border-0 bg-gradient-to-br from-background to-accent/5 md:col-span-2">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Insurance Coverage for RMT Treatments
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              As a Registered Massage Therapist, Eva's treatments are covered by most extended 
              health insurance plans. Please check with your provider for specific coverage details.
            </p>
            <div className="bg-primary/5 border-l-4 border-primary p-4 rounded-r-lg">
              <p className="text-sm text-foreground font-semibold mb-2">
                What to Bring
              </p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Any relevant medical records or imaging</li>
                <li>• Comfortable clothing for movement assessment</li>
                <li>• List of current medications if applicable</li>
              </ul>
              <p className="mt-4 text-sm">
                <Link to="/first-visit" className="text-primary font-semibold underline underline-offset-4 hover:text-primary/80">
                  More about your first visit
                </Link>
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
