import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import { Link } from "react-router-dom";

export const Booking = () => {
  return (
    <section id="booking" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <div className="text-sm font-semibold text-accent mb-2 uppercase tracking-wider">
            Schedule Your Visit
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Book an Appointment for Registered Massage Therapy
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Ready to start your journey to pain-free movement? Click below to schedule your appointment.
          </p>
          <Button
            asChild
            className="bg-accent hover:bg-accent/90 text-accent-foreground py-6 px-8 text-lg font-semibold transition-all hover:scale-105 shadow-lg"
          >
            <a
              href="/booking"
              className="flex items-center gap-2"
            >
              <Calendar size={20} />
              Book Your Appointment
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
