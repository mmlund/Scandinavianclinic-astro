import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { BackToConditionsLink } from "@/components/BackToConditionsLink";
import { Contact } from "@/components/Contact";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Activity, Hand, Sparkles, Search, Award, Shield, Zap } from "lucide-react";
import { usePageMeta } from "@/hooks/use-page-meta";
import tennisElbowIllustration from "@/assets/tennis-elbow-illustration.png";
import tennisElbowHero from "@/assets/tennis-elbow-hero.jpg";

const PAGE_URL = "https://scandinavianclinic.com/conditions/tennis-elbow-treatment-north-vancouver";

const TennisElbowTreatmentNorthVancouver = () => {
  const today = new Date().toISOString().split("T")[0];

  usePageMeta({
    title: "Tennis Elbow Treatment in North Vancouver | Scandinavian Clinic",
    description:
      "Clinical RMT treatment for tennis elbow in North Vancouver. Registered Massage Therapy assessing elbow, forearm, and nerve pathways. Manual therapy, loading programs, and lasting recovery. Insurance accepted.",
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
          name: "Tennis Elbow Treatment in North Vancouver",
          description:
            "Clinical RMT treatment for tennis elbow in North Vancouver. Registered Massage Therapy assessing elbow, forearm, and nerve pathways for lasting recovery.",
          url: PAGE_URL,
          lastReviewed: today,
          mainEntity: {
            "@type": "MedicalCondition",
            name: "Tennis Elbow",
            alternateName: "Lateral Epicondylitis",
            associatedAnatomy: {
              "@type": "AnatomicalStructure",
              name: "Lateral Epicondyle of Elbow",
            },
            signOrSymptom: [
              { "@type": "MedicalSignOrSymptom", name: "Pain on outside of elbow when gripping" },
              { "@type": "MedicalSignOrSymptom", name: "Weak grip and dropping objects" },
              { "@type": "MedicalSignOrSymptom", name: "Pain with repetitive wrist movements" },
              { "@type": "MedicalSignOrSymptom", name: "Forearm aching extending toward wrist" },
            ],
            possibleTreatment: [
              { "@type": "MedicalTherapy", name: "Registered Massage Therapy", alternateName: "RMT" },
              { "@type": "MedicalTherapy", name: "Neurodynamic Therapy" },
              { "@type": "MedicalTherapy", name: "Progressive Tendon Loading Rehabilitation" },
              { "@type": "MedicalTherapy", name: "Cervical and Thoracic Mobilization" },
            ],
          },
          about: { "@type": "MedicalCondition", name: "Tennis Elbow" },
          provider: { "@id": "https://scandinavianclinic.com/#business" },
        },
        {
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://scandinavianclinic.com/" },
            { "@type": "ListItem", position: 2, name: "Conditions", item: "https://scandinavianclinic.com/conditions" },
            { "@type": "ListItem", position: 3, name: "Tennis Elbow Treatment" },
          ],
        },
      ],
    },
  });

  const symptoms = [
    "Pain on the outside of the elbow, especially when gripping or lifting with the palm facing down",
    "Weak grip — dropping objects, difficulty opening jars or bottles",
    "Pain that worsens with repetitive wrist movements — typing, using tools, cooking",
    "Tenderness directly over the bony point on the outside of the elbow",
    "Forearm aching or tightness extending toward the wrist",
    "Symptoms that improve with rest but return immediately upon activity",
  ];

  const treatments = [
    {
      icon: Zap,
      title: "Neurodynamic Testing & Treatment",
      subtitle: "Assessing the radial nerve from neck to hand",
      description:
        "Eva tests the radial nerve for sensitivity and restriction along its full pathway — from the neck through the arm to the hand. If nerve involvement is confirmed, neurodynamic techniques gently restore normal nerve sliding through the forearm muscles and surrounding tissues.",
    },
    {
      icon: Sparkles,
      title: "Soft Tissue & Fascial Work",
      subtitle: "Targeted release of forearm extensors",
      description:
        "Targeted treatment of the forearm extensor muscles — particularly the extensor carpi radialis brevis, the most commonly affected muscle. Deep tissue techniques and fascial release reduce tension and improve blood flow to the tendon attachment, extending to the supinator and the muscles surrounding the radial nerve tunnel.",
    },
    {
      icon: Activity,
      title: "Progressive Tendon Loading",
      subtitle: "Evidence-based rehabilitation, not rest",
      description:
        "Current evidence strongly supports eccentric and isometric loading exercises for tendon rehabilitation — not rest. Eva prescribes a graded loading program specific to your stage of recovery: pain-free isometric holds early on (which also have an analgesic effect), progressing to eccentric loading and functional, sport-specific strengthening.",
    },
    {
      icon: Hand,
      title: "Cervical & Thoracic Treatment",
      subtitle: "Addressing the upstream cause",
      description:
        "When nerve sensitivity traces back to the neck or upper body, manual therapy addresses the contributing spinal and postural factors — cervical joint mobilization, thoracic spine mobility work, and shoulder blade positioning — addressing the upstream cause that local elbow treatment alone would miss.",
      link: "/conditions/neck-pain-treatment-north-vancouver",
      linkLabel: "Read about neck pain treatment",
    },
  ];

  const whyUs = [
    {
      icon: Award,
      title: "Swedish-trained orthopedic manual therapy",
      description:
        "Eva's training includes neurodynamic assessment of the upper limb — essential for identifying the nerve component that causes tennis elbow to persist.",
    },
    {
      icon: Activity,
      title: "Czech-trained DNS therapist",
      description:
        "When upper body posture and shoulder blade mechanics contribute to nerve sensitization, DNS restores the postural foundation that supports lasting recovery.",
      link: "/d-n-s",
    },
    {
      icon: Search,
      title: "Beyond the elbow",
      description:
        "When tennis elbow hasn't responded to bracing, rest, or cortisone, the cause is usually not in the elbow alone. Eva's full-chain assessment identifies what's been missed.",
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
              src={tennisElbowHero}
              alt="Woman in a workshop wincing and holding her elbow while using a power drill — a common real-world scenario for tennis elbow from repetitive gripping."
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/75 to-primary/40" />
          </div>
          <div className="container mx-auto px-4 z-10 relative py-20">
            <div className="max-w-3xl animate-fade-in">
              <p className="text-sm uppercase tracking-widest text-accent mb-4 font-semibold">
                Your Tennis Elbow
              </p>
              <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
                Tennis Elbow Treatment in North Vancouver
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/90 mb-6 leading-relaxed">
                You don't need to play tennis to get tennis elbow. Gripping a coffee mug, turning a doorknob, shaking someone's hand, typing — any gripping or twisting motion sends a sharp pain through the outside of your elbow and down your forearm. It starts as a mild annoyance and escalates until you're dropping things and modifying how you use your hand.
              </p>
              <p className="text-lg text-primary-foreground/90 mb-8 leading-relaxed">
                Tennis elbow (lateral epicondylitis) is one of the most common repetitive strain injuries — and one of the most frequently mistreated. At Scandinavian Clinic, Eva Andersson, RMT, uses clinical Registered Massage Therapy to look beyond the elbow and treat the full chain of dysfunction.
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



        {/* Understanding Tennis Elbow */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <p className="text-sm uppercase tracking-widest text-accent mb-3 font-semibold">
              Understanding Tennis Elbow
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
              More Than a Tendon Problem
            </h2>

            <figure className="mb-10">
              <div className="relative overflow-hidden rounded-2xl shadow-card bg-secondary/30 border border-border/40">
                <img
                  src={tennisElbowIllustration}
                  alt="Hand-drawn anatomical sketch on a napkin showing a person gripping their elbow in pain, with annotations indicating lateral epicondyle pain and radiating forearm pain."
                  loading="lazy"
                  className="w-full h-auto object-cover"
                />
              </div>
              <figcaption className="mt-3 text-sm text-muted-foreground text-center italic">
                Tennis elbow: pain at the lateral epicondyle that radiates down the forearm extensors.
              </figcaption>
            </figure>

            <div className="space-y-5 text-lg text-muted-foreground leading-relaxed">
              <p>
                Tennis elbow involves the tendons of the forearm extensor muscles where they attach to the bony bump on the outside of the elbow (the lateral epicondyle). These muscles control wrist extension and grip — they work every time you lift, grip, type, or twist your forearm.
              </p>
              <p>
                The conventional view is that tennis elbow is simply tendon overuse: rest the tendon, reduce inflammation, and it heals. But if that were the full picture, most cases would resolve within a few weeks. In reality, many patients struggle for months or years, and here's why:
              </p>
              <p>
                <span className="font-semibold text-foreground">The nerve factor most people miss:</span> The radial nerve — which runs from the neck through the arm to the hand — passes directly through the forearm extensor muscles near the lateral epicondyle. When this nerve is sensitized or restricted, it creates pain that looks and feels exactly like tendon pain. Up to 40% of patients diagnosed with "tennis elbow" have a nerve component contributing to their symptoms. If the nerve isn't identified and treated, the elbow pain persists regardless of how much tendon rehab you do.
              </p>
              <p>
                <span className="font-semibold text-foreground">The neck and shoulder connection:</span> The radial nerve originates in the cervical spine. Neck stiffness, poor shoulder blade mechanics, and upper body postural dysfunction can all sensitize the nerve before it even reaches the elbow. This is why some tennis elbow cases respond poorly to local treatment — the driver is upstream.
              </p>
              <p className="font-semibold text-foreground">Common symptoms:</p>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mt-6">
              {symptoms.map((s, i) => (
                <div key={i} className="flex items-start gap-3 p-5 bg-secondary/30 border border-border/40 rounded-xl">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                  <span className="text-foreground leading-relaxed">{s}</span>
                </div>
              ))}
            </div>

            <Card className="mt-10 p-6 md:p-8 bg-secondary/40 border-l-4 border-l-accent">
              <p className="text-foreground">
                <span className="font-semibold">When to seek treatment:</span> If elbow pain has persisted for more than three to four weeks despite rest, if you've tried a brace without improvement, or if grip weakness is affecting your daily activities or work, an assessment will identify whether the issue is purely tendon, nerve, or both — which determines the right treatment.
              </p>
            </Card>
          </div>
        </section>

        {/* How We Treat */}
        <section className="py-20 bg-secondary/20">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="max-w-3xl mb-12">
              <p className="text-sm uppercase tracking-widest text-accent mb-3 font-semibold">
                How We Treat Tennis Elbow
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Following the Chain From Elbow to Neck
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Eva's assessment of tennis elbow is more extensive than most patients expect. She tests not just the elbow and forearm, but also the wrist, shoulder, and cervical spine — because effective treatment requires knowing where the dysfunction starts, not just where it hurts.
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
              Tendon Recovery Takes Time — But the Right Treatment Makes It Shorter
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                Tendons heal more slowly than muscles because of their limited blood supply. Expect treatment to unfold over weeks rather than days. Most patients with uncomplicated tennis elbow improve significantly within four to eight sessions, combined with consistent home exercise.
              </p>
              <p>
                Cases with a significant nerve component may resolve faster once the nerve is properly treated — some patients experience a notable shift within two to three sessions when the nerve factor is finally addressed after months of unsuccessful elbow-focused treatment.
              </p>
              <p className="text-foreground font-medium">
                Eva will be clear about expected timelines and will adjust the treatment plan as you progress. Home exercises — particularly the loading program — are critical. Tendon rehabilitation depends on progressive loading, and your consistency between sessions directly affects recovery speed.
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
                Finding What Other Treatment Missed
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
              Book Your Appointment for Tennis Elbow Treatment
            </h2>
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              If your tennis elbow keeps coming back or hasn't responded to rest and bracing, the problem may extend beyond the tendon. Book an RMT assessment to find the full picture. Treatments are covered by most extended health insurance plans.
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

export default TennisElbowTreatmentNorthVancouver;
