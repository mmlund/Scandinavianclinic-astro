import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { ConditionsWeTreat } from "@/components/ConditionsWeTreat";
import { Testimonials } from "@/components/Testimonials";
import { Booking } from "@/components/Booking";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { usePageMeta } from "@/hooks/use-page-meta";
import { homeSchema } from "@/lib/schemas";

const Index = () => {
  usePageMeta({
    title: "Registered Massage Therapy in North Vancouver – Clinical Treatment and Root-Cause Recovery | Scandinavian Clinic",
    description: "Clinical registered massage therapy in North Vancouver focused on assessment, root-cause treatment, and long-term recovery. Biomechanical analysis, corrective exercise, and hands-on treatment for pain, injury, and dysfunction.",
    jsonLd: homeSchema,
  });

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Services />
        <ConditionsWeTreat />
        <Testimonials />
        <Booking />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
