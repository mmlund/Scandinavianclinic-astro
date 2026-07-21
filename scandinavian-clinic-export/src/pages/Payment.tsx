import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { usePageMeta } from "@/hooks/use-page-meta";

const Payment = () => {
  usePageMeta({
    title: "Payment | Scandinavian Clinic",
    description: "Payment information for Scandinavian Clinic.",
    noindex: true,
  });
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Payment
          </h1>
          <p className="text-lg text-muted-foreground">
            Content coming soon.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Payment;
