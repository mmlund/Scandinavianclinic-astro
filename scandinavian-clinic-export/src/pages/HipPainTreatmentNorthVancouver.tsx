import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { BackToConditionsLink } from "@/components/BackToConditionsLink";
import { Contact } from "@/components/Contact";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Activity, Hand, Sparkles, Search, Award, Shield, Brain } from "lucide-react";
import { usePageMeta } from "@/hooks/use-page-meta";
import hipIllustration from "@/assets/hip-pain-illustration.png";
import hipHero from "@/assets/hip-pain-hero.jpg";

const PAGE_URL = "https://scandinavianclinic.com/conditions/hip-pain-treatment-north-vancouver";

const HipPainTreatmentNorthVancouver = () => {
  const today = new Date().toISOString().split("T")[0];

  usePageMeta({
    title: "Hip Pain Treatment in North Vancouver | Scandinavian Clinic",
    description:
      "Clinical RMT treatment for hip pain in North Vancouver. Assessment-based Registered Massage Therapy for hip impingement, bursitis, arthritis, and movement dysfunction. Insurance accepted.",
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
          name: "Hip Pain Treatment in North Vancouver",
          description:
            "Clinical RMT treatment for hip pain in North Vancouver. Assessment-based Registered Massage Therapy for hip impingement, bursitis, arthritis, and movement dysfunction.",
          url: PAGE_URL,
          lastReviewed: today,
          mainEntity: {
            "@type": "MedicalCondition",
            name: "Hip Pain",
            associatedAnatomy: {
              "@type": "AnatomicalStructure",
              name: "Hip Joint",
            },
            signOrSymptom: [
              { "@type": "MedicalSignOrSymptom", name: "Deep groin pain when stepping or squatting" },
              { "@type": "MedicalSignOrSymptom", name: "Pain on outside of hip, worse lying on that side" },
              { "@type": "MedicalSignOrSymptom", name: "Stiffness and loss of hip rotation" },
              { "@type": "MedicalSignOrSymptom", name: "Clicking or catching during hip movement" },
              { "@type": "MedicalSignOrSymptom", name: "Pain getting in and out of car" },
            ],
            possibleTreatment: [
              { "@type": "MedicalTherapy", name: "Registered Massage Therapy", alternateName: "RMT" },
              { "@type": "MedicalTherapy", name: "Hip Joint Mobilization" },
              { "@type": "MedicalTherapy", name: "Gluteal Stabilizer Rehabilitation" },
              { "@type": "MedicalTherapy", name: "Dynamic Neuromuscular Stabilization" },
            ],
          },
          about: { "@type": "MedicalCondition", name: "Hip Pain" },
          provider: { "@id": "https://scandinavianclinic.com/#business" },
        },
        {
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://scandinavianclinic.com/" },
            { "@type": "ListItem", position: 2, name: "Conditions", item: "https://scandinavianclinic.com/conditions" },
            { "@type": "ListItem", position: 3, name: "Hip Pain Treatment" },
          ],
        },
      ],
    },
  });

  const symptoms = [
    "Deep groin pain when stepping forward, squatting, or pivoting",
    "Pain on the outside of the hip that's worse lying on that side at night",
    "Stiffness or loss of rotation — putting on socks and shoes becomes difficult",
    "Clicking, catching, or pinching at the front of the hip during movement",
    "Pain getting in and out of the car or rising from a low chair",
    "Aching that builds during walking, hiking, or cycling and lingers afterwards",
    "Buttock or low back pain that is actually being driven by the hip joint",
  ];

  const conditions = [
    {
      title: "Femoroacetabular impingement (FAI) & labral irritation",
      description:
        "Pinching at the front of the hip when squatting, sitting low, or rotating. Often presents in active people in their 30s and 40s and is closely tied to how the hip and pelvis move under load.",
    },
    {
      title: "Gluteal tendinopathy & trochanteric bursitis",
      description:
        "Pain on the outside of the hip, worse with side-lying, climbing stairs, or standing on one leg. Driven by gluteus medius weakness and poor pelvic control rather than just inflammation.",
    },
    {
      title: "Hip osteoarthritis",
      description:
        "Progressive stiffness and groin pain, often worse in the morning or after long sitting. Targeted manual therapy and loading can significantly improve function and delay or reduce reliance on surgery.",
    },
    {
      title: "Deep gluteal & sciatic-type referral",
      description:
        "Buttock pain that radiates down the leg from tightness or compression around piriformis and the deep hip rotators — frequently mistaken for true sciatica.",
    },
    {
      title: "Post-surgical & post-injury recovery",
      description:
        "Restoring mobility, strength, and confidence after hip arthroscopy, labral repair, or replacement, and after acute strains in cyclists, runners, and hikers.",
    },
  ];

  const treatments = [
    {
      icon: Hand,
      title: "Hip Joint Mobilization",
      subtitle: "Restoring capsular glide and rotation",
      description:
        "Targeted manual therapy to the hip joint capsule restores the rotation and extension that are almost always lost in impingement, arthritis, and post-surgical hips. When the joint moves properly, pain reduces and the surrounding muscles can finally do their job.",
    },
    {
      icon: Sparkles,
      title: "Gluteal & Deep Rotator Treatment",
      subtitle: "Releasing what's tight, activating what's weak",
      description:
        "Soft tissue work for the deep external rotators, TFL, and lateral hip — combined with specific testing to identify which gluteal muscles are actually inhibited. Treatment is followed immediately by reactivation work so the corrections hold.",
    },
    {
      icon: Activity,
      title: "DNS for Hip & Pelvic Control",
      subtitle: "Retraining how you load the joint",
      description:
        "DNS exercises retrain the relationship between deep core stabilization, pelvic position, and hip movement. For most hip patients this is the missing piece — the hip cannot stay healthy without a stable pelvis above it.",
      link: "/d-n-s",
      linkLabel: "Read about DNS",
    },
    {
      icon: Brain,
      title: "Lumbar–Pelvic–Hip Integration",
      subtitle: "Treating the chain, not just the joint",
      description:
        "The hip rarely fails in isolation. Stiffness in the low back, poor thoracic rotation, and foot mechanics all change how the hip is loaded. Eva assesses the full chain and treats the structures actually driving your symptoms.",
    },
  ];

  const whyUs = [
    {
      icon: Award,
      title: "Swedish-trained orthopedic manual therapy",
      description:
        "Eva's training includes specific hip joint and pelvic assessment protocols that distinguish true intra-articular hip pain from referred and soft-tissue sources.",
    },
    {
      icon: Activity,
      title: "Czech-trained DNS therapist",
      description:
        "DNS restores the deep core and pelvic control that underlies every healthy hip — and that conventional rehab routinely misses.",
      link: "/d-n-s",
    },
    {
      icon: Search,
      title: "Assessment-first approach",
      description:
        "Hip pain has many possible sources — joint, tendon, bursa, nerve, or referred from the spine. Effective treatment depends on identifying the right one before starting.",
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
              src={hipHero}
              alt="Active woman cyclist on a North Vancouver bike path stopping to grimace and hold her painful hip, mountains and forest in the background."
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/75 to-primary/40" />
          </div>
          <div className="container mx-auto px-4 z-10 relative py-20">
            <div className="max-w-3xl animate-fade-in">
              <p className="text-sm uppercase tracking-widest text-accent mb-4 font-semibold">
                Your Hip Pain
              </p>
              <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
                Hip Pain Treatment in North Vancouver
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/90 mb-6 leading-relaxed">
                Hip pain creeps in quietly. A twinge in the groin getting out of the car. A deep ache after a long hike on the North Shore. Pain on the outside of the hip that wakes you up the moment you roll onto that side. Eventually, the activities you rely on — cycling, hiking, climbing stairs, even sitting through a workday — start to revolve around protecting your hip.
              </p>
              <p className="text-lg text-primary-foreground/90 mb-8 leading-relaxed">
                Hip pain rarely improves with rest alone, because the hip is a deeply loaded joint that depends on precise muscular control. At Scandinavian Clinic, Eva Andersson, RMT, identifies what is actually generating your hip pain and treats it directly.
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



        {/* Understanding Hip Pain */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <p className="text-sm uppercase tracking-widest text-accent mb-3 font-semibold">
              Understanding Hip Pain
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
              Why the Hip Hurts — and What's Usually Behind It
            </h2>

            <figure className="mb-10">
              <div className="relative overflow-hidden rounded-2xl shadow-card bg-secondary/30 border border-border/40">
                <img
                  src={hipIllustration}
                  alt="Hand-drawn napkin sketch of a person clutching the side of their hip, with notes labelling hip pain, possible bursitis, and referral patterns, alongside a small anatomical diagram of the hip joint."
                  loading="lazy"
                  className="w-full h-auto object-cover"
                />
              </div>
              <figcaption className="mt-3 text-sm text-muted-foreground text-center italic">
                Hip pain rarely comes from one place — joint, bursa, tendon, and referral patterns all need to be considered.
              </figcaption>
            </figure>

            <div className="space-y-5 text-lg text-muted-foreground leading-relaxed mb-8">
              <p>
                The hip is a deep ball-and-socket joint built for both stability and load. That makes it durable — but when it starts to hurt, the cause is rarely obvious from the symptoms alone. Pain in the groin, the side of the hip, the buttock, or even the front of the thigh can all originate from the hip joint, and pain that <em>feels</em> like it's coming from the hip is sometimes referred from the lumbar spine or sacroiliac joint.
              </p>
              <p>
                <span className="font-semibold text-foreground">The pattern that drives most non-traumatic hip pain:</span> the deep gluteal stabilizers (especially gluteus medius) lose the ability to keep the pelvis level when you stand on one leg. The hip joint is forced to compensate, the lateral structures become overloaded, and over months or years, tendons, the bursa, and the joint capsule start to complain. Treating the painful tissue without correcting the control problem is why hip pain so often returns.
              </p>
              <p className="font-semibold text-foreground">
                Common signs your hip needs a clinical assessment:
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-10">
              {symptoms.map((s, i) => (
                <div key={i} className="flex items-start gap-3 p-5 bg-secondary/30 border border-border/40 rounded-xl">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                  <span className="text-foreground leading-relaxed">{s}</span>
                </div>
              ))}
            </div>

            <h3 className="text-2xl font-bold text-foreground mb-6">Conditions we treat</h3>
            <div className="grid md:grid-cols-2 gap-4">
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

            <Card className="mt-10 p-6 md:p-8 bg-secondary/40 border-l-4 border-l-accent">
              <p className="text-foreground">
                <span className="font-semibold">When to seek treatment:</span> If hip pain has lasted more than two weeks, if you're losing range of motion, if you have night pain on the affected side, or if you're starting to limp or modify activities you used to do without thinking, an assessment will identify the source and the most effective treatment pathway.
              </p>
            </Card>
          </div>
        </section>

        {/* How We Treat */}
        <section className="py-20 bg-secondary/20">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="max-w-3xl mb-12">
              <p className="text-sm uppercase tracking-widest text-accent mb-3 font-semibold">
                How We Treat Hip Pain
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Treating the Joint, the Muscles, and the Control
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Eva's hip assessment evaluates the joint itself, the gluteal and deep rotator muscles that control it, the lumbar spine and pelvis above it, and how all of these work together when you load the leg. Treatment then targets the structures actually driving your symptoms — not just the spot that hurts.
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

            <div className="max-w-3xl mt-10 text-lg text-muted-foreground leading-relaxed">
              <p>
                <span className="font-semibold text-foreground">Hip pain that isn't from the hip:</span> a meaningful proportion of patients sent for "hip pain" are actually experiencing referral from the lumbar spine or sacroiliac joint. Eva assesses both at every hip evaluation.{" "}
                <Link to="/conditions/back-pain-treatment-north-vancouver" className="text-primary underline underline-offset-2 hover:text-accent">
                  Read about back pain treatment
                </Link>
                .
              </p>
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
              Getting Your Hip Back Under You
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                Initial sessions focus on reducing pain, restoring joint range of motion, and releasing the tissues that have become overprotective. As pain settles, treatment shifts toward strengthening the gluteal stabilizers, retraining single-leg control, and progressively reloading the activities that matter to you — walking the seawall, hiking the North Shore, cycling, climbing stairs, returning to sport.
              </p>
              <p>
                A straightforward gluteal tendinopathy or impingement often improves substantially within four to six sessions. Hip osteoarthritis and post-surgical recovery typically need a longer course. Eva will give you an honest expected timeline at the first visit based on what she finds.
              </p>
              <p className="text-foreground font-medium">
                Home exercises are essential for hip recovery. You'll receive a focused, progressive program — not a long generic list — built around the specific deficits identified in your assessment.
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
                Specialized Hip Assessment and Treatment
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
              Book Your Appointment for Hip Pain Treatment
            </h2>
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              Hip pain that isn't improving on its own won't fix itself with rest. Book an RMT assessment to find out exactly what's wrong and what treatment will be most effective. Treatments are covered by most extended health insurance plans.
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

export default HipPainTreatmentNorthVancouver;
