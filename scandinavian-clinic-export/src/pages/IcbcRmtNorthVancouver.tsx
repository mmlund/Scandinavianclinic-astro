import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { AlertTriangle, Phone, Calendar } from "lucide-react";
import { usePageMeta } from "@/hooks/use-page-meta";

const IcbcRmtNorthVancouver = () => {
  usePageMeta({
    title:
      "ICBC RMT in North Vancouver — Direct Billing for Active Claims | Scandinavian Clinic",
    description:
      "Registered Massage Therapy in North Vancouver for ICBC and WSBC claims. Direct billing available. Treatment for whiplash, soft tissue injuries, and post-accident pain. Call (604) 926-4883.",
    noindex: true,
  });

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Hero */}
        <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary via-primary to-primary/90 overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_30%_20%,white,transparent_50%)]" />
          <div className="container mx-auto px-4 relative">
            <div className="max-w-4xl mx-auto text-center">
              <div className="text-sm font-semibold text-primary-foreground/80 mb-3 uppercase tracking-widest">
                Insurance & Claims
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
                ICBC RMT in North Vancouver
              </h1>
              <p className="text-xl md:text-2xl text-primary-foreground/90 leading-relaxed">
                Direct billing for active claims
              </p>
            </div>
          </div>
        </section>

        {/* Under construction banner */}
        <section className="py-10 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="flex items-start gap-4 p-6 md:p-8 rounded-xl border-2 border-accent bg-accent/15 shadow-lg">
              <AlertTriangle className="w-7 h-7 text-accent flex-shrink-0 mt-1" />
              <div>
                <p className="text-lg md:text-xl font-bold text-foreground mb-1">
                  Page Under Construction — Full content coming soon
                </p>
                <p className="text-muted-foreground">
                  We're finalizing the full information for ICBC-covered Registered Massage Therapy.
                  In the meantime, please call us directly to arrange your visit.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Body */}
        <section className="pb-20 bg-background">
          <div className="container mx-auto px-4 max-w-3xl">
            <p className="text-lg text-muted-foreground leading-relaxed mb-10">
              We're currently expanding our information about ICBC-covered Registered Massage
              Therapy. In the meantime, if your visit is covered under ICBC, WCB, RCMP, or
              MSP-exempt programs, please call{" "}
              <a
                href="tel:+16049264883"
                className="text-primary font-semibold underline underline-offset-4 hover:text-accent"
              >
                (604) 926-4883
              </a>{" "}
              directly so we can ensure proper intake. Common ICBC-covered conditions we treat
              include whiplash, post-accident neck and back pain, concussion-related neck
              tension, and soft-tissue injury rehabilitation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground text-base font-semibold"
              >
                <a href="tel:+16049264883" className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  Call (604) 926-4883
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/booking" className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Book Online
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

export default IcbcRmtNorthVancouver;
