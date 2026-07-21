import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Calendar, Phone } from "lucide-react";
import { usePageMeta } from "@/hooks/use-page-meta";
import { bookingSchema } from "@/lib/schemas";

const Booking = () => {
  usePageMeta({
    title: "Book Your Appointment | Scandinavian Clinic",
    description: "Review booking policies and schedule your orthopedic therapy appointment at Scandinavian Clinic in North Vancouver.",
    jsonLd: bookingSchema,
  });

  const [agreed, setAgreed] = useState(false);

  const policies = [
    {
      title: "Insurance:",
      text: "Most extended health plans cover Registered Massage Therapy. Please check your specific plan."
    },
    {
      title: "Attire:",
      text: "Depending on the area of injury, please bring a tank top and shorts for optimal assessment and treatment."
    },
    {
      title: "First Visit:",
      text: "Arrive 10 minutes early to complete your intake form. We recommend booking 45-60 minutes (60 minutes is ideal) for your initial appointment to allow for a thorough history and assessment."
    },
    {
      title: "Cancellations:",
      text: "Cancel at least 24 hours in advance via your email link to avoid a full cancellation fee. For urgent changes, please call 604-926-4883."
    },
    {
      title: "Special Programs:",
      text: "(ICBC, WCB, RCMP, DVA, MSP exempt): Do not use online booking. Please call 604-926-4883 directly to schedule your appointment."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-28 pb-20 bg-gradient-to-b from-background to-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="bg-background rounded-2xl shadow-card p-8 md:p-10 border border-border/50">
              <div className="flex items-center gap-3 mb-2">
                <Calendar className="w-7 h-7 text-primary" />
                <h1 className="text-2xl md:text-3xl font-bold text-foreground">
                  Before You Book Your Session
                </h1>
              </div>
              <p className="text-muted-foreground mb-8">
                Please review our booking and visit information before scheduling your appointment.
              </p>

              <ul className="space-y-6 mb-10">
                {policies.map((policy, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="mt-2 w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                    <p className="text-foreground leading-relaxed">
                      <span className="font-semibold text-primary">{policy.title}</span>{" "}
                      {policy.text}
                    </p>
                  </li>
                ))}
              </ul>

              <label className="flex items-center gap-3 p-4 bg-secondary/30 rounded-lg border border-border/50 cursor-pointer mb-6 select-none">
                <input
                  type="checkbox"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  className="w-5 h-5 rounded border-primary text-primary focus:ring-primary"
                />
                <span className="text-foreground">
                  I have read and agree to the booking and visit policies above.
                </span>
              </label>

              <Button
                asChild={agreed}
                disabled={!agreed}
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground py-6 text-lg font-semibold transition-all hover:scale-[1.02] shadow-lg disabled:opacity-50 disabled:hover:scale-100"
              >
                {agreed ? (
                  <a
                    href="https://booking.scandinavianclinic.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    <Calendar className="w-5 h-5" />
                    BOOK NOW
                  </a>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    <Calendar className="w-5 h-5" />
                    BOOK NOW
                  </span>
                )}
              </Button>

              <div className="mt-6 text-center text-muted-foreground text-sm flex items-center justify-center gap-2">
                <Phone className="w-4 h-4" />
                Questions?{" "}
                <a href="tel:+16049264883" className="text-primary font-semibold hover:underline">
                  Call 604-926-4883
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Booking;
