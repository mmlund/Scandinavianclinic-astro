import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Building2,
  Dumbbell,
  Wrench,
  MapPin,
  Bus,
  DoorOpen,
  Calendar,
  ExternalLink,
} from "lucide-react";
import rehabFloor from "@/assets/facility-rehab-floor-wide.jpg";
import treatmentRoom from "@/assets/facility-treatment-room.jpg";
import exterior from "@/assets/facility-exterior.jpg";
import { Link } from "react-router-dom";
import { usePageMeta } from "@/hooks/use-page-meta";
import { facilitiesSchema } from "@/lib/schemas";

const Facilities = () => {
  usePageMeta({
    title: "Clinical Treatment Room & Rehab Gym – RMT North Vancouver | Scandinavian Clinic",
    description:
      "The Scandinavian Clinic operates from a private clinical treatment room within a fully equipped rehabilitation gym on Lonsdale Avenue in North Vancouver. This environment allows assessment, treatment, and corrective exercise in one place for faster recovery.",
    jsonLd: facilitiesSchema,
  });

  const environment = [
    {
      icon: <Building2 className="w-6 h-6" />,
      title: "Private Clinical Suite",
      description:
        "Your assessment and manual therapy take place in a private, quiet treatment room equipped with specialized orthopedic tables.",
    },
    {
      icon: <Dumbbell className="w-6 h-6" />,
      title: "Active Rehab Floor",
      description:
        "For patients undergoing Dynamic Neuromuscular Stabilization (DNS) or sports-specific training, we have full access to the strength and conditioning equipment at Liberation Fitness.",
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      title: "Specialized Equipment",
      description:
        "When needed we can utilize functional tools—including free weights, cables, and stabilization equipment—to test movement patterns, provide instructions, and reinforce manual treatments with active loading.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary via-primary to-primary/90 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_30%_20%,white,transparent_50%)]" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-sm font-semibold text-primary-foreground/80 mb-3 uppercase tracking-widest">
              Our Facility
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
              Our Clinical Facility in North Vancouver
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 leading-relaxed">
              A hybrid environment for manual therapy and active rehabilitation.
            </p>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-center">
              Scandinavian Clinic is located within Liberation Fitness in the heart of Central
              Lonsdale. Our facility is designed for clinical investigation and functional
              movement. This location allows us to bridge the gap between table-based manual
              therapy and rehabilitation.
            </p>
          </div>
        </div>
      </section>

      {/* Treatment Environment */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                The Treatment Environment
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A professional, focused setting for patients dealing with acute injuries and
                chronic pain.
              </p>
            </div>

            {/* Treatment Room Image + Suite */}
            <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
              <div className="rounded-2xl overflow-hidden shadow-card aspect-[4/5] md:aspect-[3/4]">
                <img
                  src={treatmentRoom}
                  alt="Private clinical treatment room with orthopedic table, anatomical charts and spine model at Scandinavian Clinic North Vancouver"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <Card className="p-8 border-0 shadow-card bg-background">
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                  {environment[0].icon}
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  {environment[0].title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {environment[0].description}
                </p>
              </Card>
            </div>
          </div>
        </div>

        {/* Full-bleed panoramic rehab floor */}
        <div className="w-full my-12">
          <div className="relative w-full overflow-hidden shadow-card">
            <img
              src={rehabFloor}
              alt="Spacious active rehabilitation floor at Liberation Fitness with treadmills, ellipticals, exercise bikes, free weights and strength equipment used for functional rehab in North Vancouver"
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </div>
        </div>

        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8 border-0 shadow-card bg-background">
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                  {environment[1].icon}
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  {environment[1].title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {environment[1].description}
                </p>
              </Card>
              <Card className="p-8 border-0 shadow-card bg-background">
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                  {environment[2].icon}
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  {environment[2].title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {environment[2].description}
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Accessibility */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Location & Accessibility
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Centrally located to serve patients from North Vancouver, West Vancouver, and
                the surrounding areas.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-stretch">
              <div className="rounded-2xl overflow-hidden shadow-card">
                <img
                  src={exterior}
                  alt="Exterior of Scandinavian Clinic building at the corner of 16th Street and Lonsdale Avenue, North Vancouver, with door to second floor marked"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="space-y-5">
                <Card className="p-6 border-0 shadow-card bg-background flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">Address</h3>
                    <p className="text-muted-foreground">
                      Suite 202, 101 West 16th Street, North Vancouver, BC.
                    </p>
                  </div>
                </Card>
                <Card className="p-6 border-0 shadow-card bg-background flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">The Building</h3>
                    <p className="text-muted-foreground">
                      We are situated on the second floor of the professional building at the
                      corner of 16th and Lonsdale (door next to Scotiabank).
                    </p>
                  </div>
                </Card>
                <Card className="p-6 border-0 shadow-card bg-background flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                    <Bus className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">Transit & Parking</h3>
                    <p className="text-muted-foreground">
                      The clinic is easily accessible via local bus routes. Street parking is
                      available along 16th Street and adjacent side streets (pay parking).
                    </p>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect on Arrival */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 md:p-12 border-0 shadow-card bg-background">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                  <DoorOpen className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                    What to Expect on Arrival
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    When you arrive at the 101 West 16th Street entrance, take the stairs or
                    elevator to the second floor. You will find us inside the Liberation
                    Fitness facility. The Scandinavian RMT is towards the back on the right
                    hand side.
                  </p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button asChild variant="outline" size="lg">
                  <a
                    href="https://maps.google.com/?q=101+West+16th+Street,+North+Vancouver,+BC"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MapPin className="w-5 h-5 mr-2" />
                    View Location on Google Maps
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </Button>
                <Button asChild size="lg">
                  <Link to="/booking">
                    <Calendar className="w-5 h-5 mr-2" />
                    Book an Appointment
                  </Link>
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Facilities;
