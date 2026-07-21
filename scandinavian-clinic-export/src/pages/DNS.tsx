import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Calendar, ExternalLink } from "lucide-react";
import { usePageMeta } from "@/hooks/use-page-meta";
import { dnsSchema } from "@/lib/schemas";

const DNS = () => {
  usePageMeta({
    title: "Dynamic Neuromuscular Stabilization (DNS) Therapy | North Vancouver RMT",
    description:
      "Scandinavian Clinic integrates Dynamic Neuromuscular Stabilization (DNS) principles into Registered Massage Therapy in North Vancouver. For dedicated DNS training, visit DNStrainer.com.",
    jsonLd: dnsSchema,
  });

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-12 bg-gradient-to-b from-secondary/30 to-background">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 leading-tight">
            Dynamic Neuromuscular Stabilization (DNS)
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <Card className="p-8 md:p-10 mb-10 shadow-sm">
            <h2 className="text-2xl font-semibold text-primary mb-4">
              Functional Rehabilitation with DNS Principles
            </h2>
            <p className="text-foreground/90 leading-relaxed mb-4">
              In 2015 Eva began studying DNS – Dynamic Neuromuscular Stabilization,
              developed at Prague School of Rehabilitation in the Czech Republic. DNS
              is a method designed to activate functional stabilization of the spine
              and extremity joints. Eva often incorporates DNS principles into
              treatments.
            </p>
            <p className="text-foreground/90 leading-relaxed mb-4">
              By combining manual therapy with these principles, Eva finds she can
              provide a more integrated and comprehensive recovery plan.
            </p>
            <p className="text-foreground/90 leading-relaxed">
              By training your body with DNS, you can re-establish the natural,
              innate way of stabilizing and moving. The body's function is
              normalized, pain and stiffness are reduced. You will also often
              notice that your body becomes stronger and more resilient, without
              increasing your muscle mass.
            </p>
          </Card>

          <Card className="p-8 md:p-10 mb-10 shadow-sm">
            <p className="text-foreground/90 leading-relaxed mb-4">
              For more information about DNS, we invite you to visit{" "}
              <a
                href="https://www.dnstrainer.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent font-medium underline hover:text-accent/80"
              >
                DNStrainer.com
              </a>
              .
            </p>
            <p className="text-foreground/90 leading-relaxed">
              DNStrainer operates as a specialized movement education and
              rehabilitation practice, focused on DNS-based movement training.
            </p>
          </Card>

          <Card className="p-8 md:p-10 shadow-sm bg-secondary/20">
            <h2 className="text-2xl font-semibold text-primary mb-4">
              Book Your Appointment
            </h2>
            <p className="text-foreground/90 leading-relaxed mb-6">
              To book a Registered Massage Therapy appointment that utilizes an
              orthopedic and assessment-based approach, please book online at
              Scandinavian Clinic.
            </p>
            <p className="text-foreground/90 leading-relaxed mb-8">
              To book a dedicated DNS movement training session, please book online at
              DNStrainer.com.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground"
              >
                <Link to="/booking">
                  <Calendar className="w-5 h-5 mr-2" />
                  Book at Scandinavian Clinic
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a
                  href="https://www.dnstrainer.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="w-5 h-5 mr-2" />
                  Book at DNStrainer.com
                </a>
              </Button>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DNS;
