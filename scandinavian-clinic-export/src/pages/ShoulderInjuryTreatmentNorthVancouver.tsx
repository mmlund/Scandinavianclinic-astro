import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { BackToConditionsLink } from "@/components/BackToConditionsLink";
import { Contact } from "@/components/Contact";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Activity, Hand, Sparkles, Search, Award, Shield, Brain } from "lucide-react";
import { usePageMeta } from "@/hooks/use-page-meta";
import shoulderIllustration from "@/assets/shoulder-injury-illustration.png";
import shoulderHero from "@/assets/shoulder-injury-hero.jpg";

const PAGE_URL = "https://scandinavianclinic.com/conditions/shoulder-injury-treatment-north-vancouver";

const ShoulderInjuryTreatmentNorthVancouver = () => {
  const today = new Date().toISOString().split("T")[0];

  usePageMeta({
    title: "Shoulder Injury Treatment in North Vancouver | Scandinavian Clinic",
    description:
      "Clinical RMT treatment for shoulder injuries in North Vancouver. Assessment-based Registered Massage Therapy for rotator cuff, impingement, and frozen shoulder. DNS and active rehab. Insurance accepted.",
    jsonLd: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "MedicalBusiness",
          "@id": "https://scandinavianclinic.com/#business",
          name: "Scandinavian Clinic",
          url: "https://scandinavianclinic.com",
          telephone: "+1-604-926-4883",
          email: "info@scandinavianclinic.com",
          priceRange: "$$",
          image: "https://scandinavianclinic.com/og-image.jpg",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Suite 202, 101 West 16th Street",
            addressLocality: "North Vancouver",
            addressRegion: "BC",
            postalCode: "V7M 1T3",
            addressCountry: "CA",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: 49.3231,
            longitude: -123.0726,
          },
          openingHoursSpecification: [
            { "@type": "OpeningHoursSpecification", dayOfWeek: "Monday", opens: "08:00", closes: "17:00" },
            { "@type": "OpeningHoursSpecification", dayOfWeek: "Wednesday", opens: "08:00", closes: "17:00" },
            { "@type": "OpeningHoursSpecification", dayOfWeek: "Thursday", opens: "08:00", closes: "17:00" },
          ],
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Clinical RMT Services",
            itemListElement: [
              { "@type": "Offer", itemOffered: { "@type": "MedicalTherapy", name: "Registered Massage Therapy", alternateName: "RMT" } },
              { "@type": "Offer", itemOffered: { "@type": "MedicalTherapy", name: "Orthopedic Manual Therapy" } },
              { "@type": "Offer", itemOffered: { "@type": "MedicalTherapy", name: "Dynamic Neuromuscular Stabilization", alternateName: "DNS" } },
            ],
          },
          medicalSpecialty: "Musculoskeletal",
          areaServed: {
            "@type": "City",
            name: "North Vancouver",
            containedInPlace: { "@type": "AdministrativeArea", name: "British Columbia" },
          },
          isAcceptingNewPatients: true,
          potentialAction: {
            "@type": "ReserveAction",
            target: {
              "@type": "EntryPoint",
              urlTemplate: "https://scandinavianclinic.com/booking",
              actionPlatform: "http://schema.org/DesktopWebPlatform",
            },
            result: { "@type": "Reservation", name: "Book an RMT Appointment" },
          },
        },
        {
          "@type": "MedicalWebPage",
          "@id": PAGE_URL,
          name: "Shoulder Injury Treatment in North Vancouver",
          description:
            "Clinical RMT treatment for shoulder injuries in North Vancouver. Assessment-based Registered Massage Therapy for rotator cuff, impingement, and frozen shoulder.",
          url: PAGE_URL,
          lastReviewed: today,
          mainEntity: {
            "@type": "MedicalCondition",
            name: "Shoulder Injury",
            associatedAnatomy: {
              "@type": "AnatomicalStructure",
              name: "Shoulder Joint",
            },
            signOrSymptom: [
              { "@type": "MedicalSignOrSymptom", name: "Pain reaching overhead" },
              { "@type": "MedicalSignOrSymptom", name: "Night pain on affected side" },
              { "@type": "MedicalSignOrSymptom", name: "Weakness when lifting" },
              { "@type": "MedicalSignOrSymptom", name: "Loss of range of motion" },
            ],
            possibleTreatment: [
              { "@type": "MedicalTherapy", name: "Registered Massage Therapy", alternateName: "RMT" },
              { "@type": "MedicalTherapy", name: "Shoulder Joint and Capsule Mobilization" },
              { "@type": "MedicalTherapy", name: "Rotator Cuff Rehabilitation" },
              { "@type": "MedicalTherapy", name: "Dynamic Neuromuscular Stabilization" },
            ],
          },
          about: { "@type": "MedicalCondition", name: "Shoulder Injury" },
          provider: { "@id": "https://scandinavianclinic.com/#business" },
        },
        {
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://scandinavianclinic.com/" },
            { "@type": "ListItem", position: 2, name: "Conditions", item: "https://scandinavianclinic.com/conditions" },
            { "@type": "ListItem", position: 3, name: "Shoulder Injury Treatment" },
          ],
        },
      ],
    },
  });

  const conditions = [
    {
      title: "Rotator cuff strain or tear",
      description:
        "Pain with overhead reaching, weakness when lifting, night pain lying on the affected side. Often develops gradually from repetitive use, not just acute injury.",
    },
    {
      title: "Shoulder impingement",
      description:
        "A pinching sensation when raising the arm, caused by tendons getting compressed between bones. Usually linked to poor shoulder blade mechanics rather than a structural problem.",
    },
    {
      title: "Frozen shoulder (adhesive capsulitis)",
      description:
        "Progressive loss of range of motion with stiffness and pain. Common in ages 40–60, often following a period of reduced movement after minor injury or surgery.",
    },
    {
      title: "Post-surgical rehabilitation",
      description:
        "Restoring strength, mobility, and confidence after rotator cuff repair, labral repair, or other shoulder surgery.",
    },
    {
      title: "Instability and recurrent subluxation",
      description:
        "A feeling that the shoulder \"slips\" or is unreliable, often after a dislocation or in naturally hypermobile individuals.",
    },
  ];

  const treatments = [
    {
      icon: Hand,
      title: "Joint Mobilization",
      subtitle: "Capsule and thoracic spine",
      description:
        "Manual therapy to restore movement in the shoulder joint capsule (critical in frozen shoulder and post-surgical stiffness) and the thoracic spine (often stiff in patients with shoulder impingement). When the thoracic spine can extend and rotate properly, the shoulder blade positions better, and impingement symptoms often reduce significantly.",
    },
    {
      icon: Sparkles,
      title: "Rotator Cuff & Blade Reactivation",
      subtitle: "Targeted muscle testing and loading",
      description:
        "Specific muscle testing identifies which rotator cuff muscles are weak or inhibited. Treatment combines hands-on facilitation with progressive loading exercises. Crucially, the shoulder blade stabilizers (serratus anterior, lower trapezius) are trained alongside the cuff — because cuff rehab without blade control is incomplete.",
    },
    {
      icon: Activity,
      title: "DNS for Upper Body Integration",
      subtitle: "Restoring core-to-shoulder connection",
      description:
        "DNS exercises retrain how the shoulder, trunk, and core work together as a system. For shoulder patients, this often means restoring the connection between deep core stabilization and shoulder blade positioning — a relationship that breaks down after injury and is rarely addressed in conventional rehab.",
      link: "/d-n-s",
      linkLabel: "Read about DNS",
    },
    {
      icon: Brain,
      title: "Soft Tissue & Fascial Work",
      subtitle: "Releasing the muscles around the shoulder",
      description:
        "Targeted treatment of the pectoral muscles, posterior capsule, and periscapular muscles that commonly tighten around a shoulder injury. This reduces pain and creates the mobility needed for effective strengthening.",
    },
  ];

  const whyUs = [
    {
      icon: Award,
      title: "Swedish-trained orthopedic manual therapy",
      description:
        "Eva's training includes advanced shoulder joint and shoulder blade assessment protocols that identify the mechanical cause of shoulder dysfunction.",
    },
    {
      icon: Activity,
      title: "Czech-trained DNS therapist",
      description:
        "DNS restores the trunk-to-shoulder connection that conventional rehab often overlooks, which is critical for preventing re-injury.",
      link: "/d-n-s",
    },
    {
      icon: Search,
      title: "Assessment-first approach",
      description:
        "Shoulder injuries have many possible causes, and effective treatment depends on identifying the right one before starting.",
    },
    {
      icon: Shield,
      title: "Covered by most insurance plans",
      description:
        "As a Registered Massage Therapist, treatments are eligible for extended health benefits.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Hero */}
        <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src={shoulderHero}
              alt="Active woman on a North Vancouver tennis court grimacing and gripping her painful shoulder, mountains and trees visible in the background."
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/75 to-primary/40" />
          </div>
          <div className="container mx-auto px-4 z-10 relative py-20">
            <div className="max-w-3xl animate-fade-in">
              <p className="text-sm uppercase tracking-widest text-accent mb-4 font-semibold">
                Your Shoulder Injury
              </p>
              <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
                Shoulder Injury Treatment in North Vancouver
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/90 mb-6 leading-relaxed">
                A shoulder injury changes what you can do with your hands. Reaching for a cupboard, pulling on a jacket, fastening a seatbelt — movements that should be automatic become painful and guarded. If you're active on the North Shore — swimming, climbing, paddling, or playing racquet sports — a shoulder problem can shut down the activities that matter most to you.
              </p>
              <p className="text-lg text-primary-foreground/90 mb-8 leading-relaxed">
                Shoulder injuries are frustrating because they often don't improve with rest alone. The shoulder is the most mobile joint in your body, and that mobility depends on muscles, tendons, and coordination working together precisely.
              </p>
              <Button asChild size="lg" variant="secondary" className="text-base">
                <Link to="/booking">Book Your Appointment</Link>
              </Button>
            </div>
          </div>
        </section>
        {/* Back to hub (top) */}
        <section className="pt-6 bg-background">
          <BackToConditionsLink />
        </section>



        {/* Understanding Shoulder Injuries */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <p className="text-sm uppercase tracking-widest text-accent mb-3 font-semibold">
              Understanding Shoulder Injuries
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
              Why Shoulders Are Vulnerable — and What Goes Wrong
            </h2>

            <div className="space-y-5 text-lg text-muted-foreground leading-relaxed mb-10">
              <p>
                The shoulder joint sacrifices stability for mobility. Unlike the hip, which is a deep ball-and-socket, the shoulder is more like a golf ball sitting on a tee. It relies heavily on the rotator cuff (four small muscles that hold the ball centered in the socket) and the shoulder blade muscles (which position the socket itself). When either group fails, problems develop.
              </p>
              <p className="font-semibold text-foreground">
                Common shoulder conditions we treat:
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-10">
              {conditions.map((c, i) => (
                <div key={i} className="flex items-start gap-3 p-5 bg-secondary/30 border border-border/40 rounded-xl">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-foreground mb-1">{c.title}</p>
                    <p className="text-muted-foreground leading-relaxed text-base">{c.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <figure className="mb-10">
              <div className="relative overflow-hidden rounded-2xl shadow-card bg-secondary/30 border border-border/40">
                <img
                  src={shoulderIllustration}
                  alt="Hand-drawn napkin sketch titled 'Understanding your shoulder injury: the shoulder blade connection' showing rotator cuff anatomy, glenohumeral joint, scapular rotation, and posture muscles including lower trapezius and serratus anterior."
                  loading="lazy"
                  className="w-full h-auto object-cover"
                />
              </div>
              <figcaption className="mt-3 text-sm text-muted-foreground text-center italic">
                Shoulder mechanics: how the rotator cuff, glenohumeral joint, and shoulder blade work together — and what goes wrong.
              </figcaption>
            </figure>

            <div className="space-y-5 text-lg text-muted-foreground leading-relaxed">
              <p>
                <span className="font-semibold text-foreground">A pattern worth noting:</span> Many shoulder injuries are not caused by the shoulder joint itself but by how the shoulder blade moves — or doesn't move — on the rib cage. If the blade doesn't rotate and tilt properly when you raise your arm, the rotator cuff gets overloaded. Treating the shoulder without addressing blade mechanics often means the problem returns.
              </p>
            </div>

            <Card className="mt-10 p-6 md:p-8 bg-secondary/40 border-l-4 border-l-accent">
              <p className="text-foreground">
                <span className="font-semibold">When to seek treatment:</span> If shoulder pain has lasted more than two weeks, if you're losing range of motion, if you have night pain, or if you've started avoiding certain movements or activities, an assessment will identify what's wrong and what the most effective treatment pathway is.
              </p>
            </Card>
          </div>
        </section>

        {/* How We Treat */}
        <section className="py-20 bg-secondary/20">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="max-w-3xl mb-12">
              <p className="text-sm uppercase tracking-widest text-accent mb-3 font-semibold">
                How We Treat Shoulder Injuries
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                The Shoulder Blade Connection — What Clinical RMT Reveals
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Eva's shoulder assessment starts further from the pain than most patients expect. Before testing the shoulder joint itself, she evaluates how the shoulder blade moves on the rib cage, how the thoracic spine contributes to overhead reach, and whether the rotator cuff muscles are activating in the right sequence.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {treatments.map((t, i) => {
                const Icon = t.icon;
                return (
                  <Card key={i} className="p-8 hover:shadow-lg transition-shadow bg-background">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground">{t.title}</h3>
                        <p className="text-sm text-accent font-medium">{t.subtitle}</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed mb-3">{t.description}</p>
                    {t.link && (
                      <Link to={t.link} className="text-primary font-medium hover:text-accent inline-flex items-center gap-1">
                        {t.linkLabel} →
                      </Link>
                    )}
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* What to Expect */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <p className="text-sm uppercase tracking-widest text-accent mb-3 font-semibold">
              What to Expect
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Rebuilding a Reliable Shoulder
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                Shoulder rehabilitation is typically longer than treatment for spinal conditions because the joint must regain both mobility and strength under load. Initial sessions focus on pain reduction and restoring range of motion. Later sessions shift to strengthening, functional loading, and sport-specific or activity-specific training.
              </p>
              <p>
                A straightforward impingement may improve substantially in four to six sessions. Frozen shoulder and post-surgical rehabilitation often require a longer course — Eva will give you an honest assessment of expected timelines at your first visit.
              </p>
              <p className="text-foreground font-medium">
                Home exercises are essential for shoulder recovery. You'll receive a progressive program that evolves as your shoulder improves, designed to be manageable and focused on the specific deficits identified in your assessment.
              </p>
            </div>
          </div>
        </section>

        {/* Why Scandinavian Clinic */}
        <section className="py-20 bg-secondary/20">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-12">
              <p className="text-sm uppercase tracking-widest text-accent mb-3 font-semibold">
                Why Scandinavian Clinic
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Specialized Shoulder Assessment and Treatment
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {whyUs.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="flex gap-4 p-6 bg-background rounded-xl">
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                      <Icon className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {item.description}{" "}
                        {item.link && (
                          <Link to={item.link} className="text-primary underline underline-offset-2 hover:text-accent">
                            Learn more
                          </Link>
                        )}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        {/* Back to hub (bottom) */}
        <section className="pb-6 bg-background">
          <BackToConditionsLink />
        </section>



        {/* Schedule Your Visit */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <p className="text-sm uppercase tracking-widest text-accent mb-3 font-semibold">
              Schedule Your Visit
            </p>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Book Your Appointment for Shoulder Injury Treatment
            </h2>
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              A shoulder injury that isn't improving won't fix itself. Book an RMT assessment to find out exactly what's wrong and what treatment will be most effective. Treatments are covered by most extended health insurance plans.
            </p>
            <Button asChild size="lg" variant="secondary" className="text-base">
              <Link to="/booking">Book Your Appointment</Link>
            </Button>
          </div>
        </section>

        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default ShoulderInjuryTreatmentNorthVancouver;
