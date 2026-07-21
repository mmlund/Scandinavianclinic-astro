import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { BackToConditionsLink } from "@/components/BackToConditionsLink";
import { Contact } from "@/components/Contact";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Activity, Hand, Sparkles, Search, Award, Shield, Zap } from "lucide-react";
import { usePageMeta } from "@/hooks/use-page-meta";
import sciaticaIllustration from "@/assets/sciatica-illustration.png";
import sciaticaHero from "@/assets/sciatica-hero.jpg";

const PAGE_URL = "https://scandinavianclinic.com/conditions/sciatica-treatment-north-vancouver";

const SciaticaTreatmentNorthVancouver = () => {
  const today = new Date().toISOString().split("T")[0];

  usePageMeta({
    title: "Sciatica Treatment in North Vancouver | Scandinavian Clinic",
    description:
      "Clinical RMT treatment for sciatica in North Vancouver. Nerve-specific assessment, neurodynamics, spinal mobilization, and core stabilization by a Registered Massage Therapist. Most insurance accepted.",
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
          name: "Sciatica Treatment in North Vancouver",
          description:
            "Clinical RMT treatment for sciatica in North Vancouver. Nerve-specific assessment, neurodynamics, spinal mobilization, and core stabilization by a Registered Massage Therapist.",
          url: PAGE_URL,
          lastReviewed: today,
          mainEntity: {
            "@type": "MedicalCondition",
            name: "Sciatica",
            alternateName: "Sciatic Nerve Pain",
            associatedAnatomy: {
              "@type": "AnatomicalStructure",
              name: "Sciatic Nerve",
            },
            signOrSymptom: [
              { "@type": "MedicalSignOrSymptom", name: "Shooting pain from lower back down leg" },
              { "@type": "MedicalSignOrSymptom", name: "Numbness or tingling in leg or foot" },
              { "@type": "MedicalSignOrSymptom", name: "Leg weakness" },
              { "@type": "MedicalSignOrSymptom", name: "Pain worsened by sitting" },
            ],
            possibleTreatment: [
              { "@type": "MedicalTherapy", name: "Registered Massage Therapy", alternateName: "RMT" },
              { "@type": "MedicalTherapy", name: "Neurodynamic Therapy" },
              { "@type": "MedicalTherapy", name: "Lumbar Spine Mobilization" },
              { "@type": "MedicalTherapy", name: "Dynamic Neuromuscular Stabilization" },
            ],
          },
          about: { "@type": "MedicalCondition", name: "Sciatica" },
          provider: { "@id": "https://scandinavianclinic.com/#business" },
        },
        {
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://scandinavianclinic.com/" },
            { "@type": "ListItem", position: 2, name: "Conditions", item: "https://scandinavianclinic.com/conditions" },
            { "@type": "ListItem", position: 3, name: "Sciatica Treatment" },
          ],
        },
      ],
    },
  });

  const causes = [
    {
      title: "Disc-related compression",
      description:
        "A bulging or herniated disc in the lower lumbar spine presses on a nerve root. Often produces pain that worsens with sitting, bending forward, or coughing/sneezing, and may include numbness or tingling in a specific area of the leg or foot.",
    },
    {
      title: "Spinal stenosis",
      description:
        "Narrowing of the nerve channel, more common in older adults. Typically produces leg symptoms during walking that ease when sitting or leaning forward.",
    },
    {
      title: "Piriformis-related irritation",
      description:
        "The sciatic nerve passes through or beside the piriformis muscle deep in the buttock. When this muscle tightens or spasms, it can compress the nerve — producing buttock and posterior thigh pain without significant lower back involvement.",
    },
    {
      title: "Neural sensitization",
      description:
        "Sometimes the nerve itself becomes hypersensitive without ongoing structural compression. The original irritation may have resolved, but the nerve continues to fire pain signals — requiring a different treatment approach than mechanical compression.",
    },
  ];

  const treatments = [
    {
      icon: Zap,
      title: "Neurodynamic Assessment & Treatment",
      subtitle: "Restoring nerve mobility",
      description:
        "This is where clinical RMT diverges most clearly from general massage. Neurodynamic testing identifies where along the nerve pathway restriction or sensitivity exists. Treatment uses precise, gentle techniques to restore normal nerve mobility — the nerve needs to slide and stretch freely through surrounding tissues. When it can't, pain persists even after the original cause improves.",
    },
    {
      icon: Hand,
      title: "Lumbar Spine Mobilization",
      subtitle: "Reducing nerve compression",
      description:
        "When disc-related or stenotic causes are identified, manual therapy targets the relevant spinal segments to reduce compression and improve spinal mechanics. Combined with positional strategies — specific positions and movements that reduce nerve loading — that you can use at home for pain management.",
    },
    {
      icon: Sparkles,
      title: "Piriformis & Deep Hip Rotator Treatment",
      subtitle: "Releasing the buttock muscles",
      description:
        "When the buttock muscles are compressing or irritating the nerve, targeted soft tissue work (including clinical massage) releases the piriformis and surrounding structures. But release alone is rarely enough — the reason the piriformis tightened must also be addressed, which often involves hip stability and lumbar spine mechanics.",
    },
    {
      icon: Activity,
      title: "DNS for Spinal Stability",
      subtitle: "Long-term resolution",
      description:
        "Sciatica frequently recurs because the underlying spinal instability that allowed the nerve irritation hasn't been addressed. DNS retrains the deep core — diaphragm, pelvic floor, and abdominal wall — to provide genuine spinal support. Often essential for both short-term relief and long-term resolution.",
      link: "/d-n-s",
      linkLabel: "Learn more about DNS",
    },
  ];

  const whyUs = [
    {
      icon: Award,
      title: "Swedish-trained orthopedic manual therapy",
      description:
        "Eva's education includes advanced neurodynamic assessment and treatment — a skillset essential for accurate sciatica diagnosis and effective nerve mobilization.",
    },
    {
      icon: Activity,
      title: "Czech-trained DNS therapist",
      description:
        "Sciatica recurrence is closely tied to spinal instability; DNS addresses this at the deepest level by retraining the core stabilization system.",
      link: "/d-n-s",
    },
    {
      icon: Search,
      title: "Clinical distinction",
      description:
        "Differentiating true sciatica from hip-referred or muscle-referred leg pain requires specific testing — and a different treatment plan for each.",
    },
    {
      icon: Shield,
      title: "Covered by most insurance plans",
      description:
        "As a Registered Massage Therapist, treatments are usually eligible for extended health benefits.",
    },
  ];

  const warningSigns = [
    "Pain radiating below the knee",
    "Numbness or tingling in the leg or foot",
    "Weakness in the leg muscles (e.g., difficulty lifting your foot)",
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Hero */}
        <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src={sciaticaHero}
              alt="Woman seated on a couch holding her lower back, experiencing sciatic nerve pain radiating into her leg."
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/75 to-primary/40" />
          </div>
          <div className="container mx-auto px-4 z-10 relative py-20">
            <div className="max-w-3xl animate-fade-in">
              <p className="text-sm uppercase tracking-widest text-accent mb-4 font-semibold">
                Your Sciatica
              </p>
              <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
                Sciatica Treatment in North Vancouver
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/90 mb-6 leading-relaxed">
                Sciatica is distinct. A sharp, burning, or electric pain that shoots from your lower back or buttock down into your leg — sometimes all the way to your foot. Sitting becomes the worst position. Driving is miserable. Getting out of a chair requires a strategy. Even a routine walk through Victoria Park or a commute across the Lions Gate Bridge becomes something you dread.
              </p>
              <p className="text-lg text-primary-foreground/90 mb-8 leading-relaxed">
                What makes sciatica particularly frustrating is the uncertainty. Is it a disc? Is it permanent? Will it come back? At Scandinavian Clinic, we assess where and why your sciatic nerve is being irritated and treat the cause — not just the pain traveling down your leg.
              </p>
              <Button asChild size="lg" variant="secondary" className="text-base">
                <Link to="/booking">Book Your Assessment</Link>
              </Button>
            </div>
          </div>
        </section>
        {/* Back to hub (top) */}
        <section className="pt-6 bg-background">
          <BackToConditionsLink />
        </section>



        {/* Understanding Sciatica */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <p className="text-sm uppercase tracking-widest text-accent mb-3 font-semibold">
              Understanding Sciatica
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
              Is It True Sciatica? — and Why That Matters
            </h2>

            <figure className="mb-10">
              <div className="relative overflow-hidden rounded-2xl shadow-card bg-secondary/30 border border-border/40">
                <img
                  src={sciaticaIllustration}
                  alt="Hand-drawn anatomical illustration showing the sciatic nerve pathway from the L4–S1 nerve roots in the lumbar spine, through the pelvis and posterior thigh, down to the calf and foot."
                  loading="lazy"
                  className="w-full h-auto object-cover"
                />
              </div>
              <figcaption className="mt-3 text-sm text-muted-foreground text-center italic">
                The sciatic nerve — the largest in the body — and the L4–S1 pathway we assess and treat.
              </figcaption>
            </figure>

            <div className="space-y-5 text-lg text-muted-foreground leading-relaxed">
              <p>
                Sciatica describes pain that follows the path of the sciatic nerve — the largest nerve in your body, running from the lower spine through the buttock and down each leg. The pain is a symptom, not a diagnosis. What matters is <em>why</em> the nerve is irritated, because different causes require different treatment.
              </p>
              <p>
                Pain from the hip joint, sacroiliac joint, or referred muscle pain (common with general{" "}
                <Link to="/conditions/back-pain-treatment-north-vancouver" className="text-primary underline underline-offset-4 hover:text-accent">
                  lower back pain
                </Link>
                ) can perfectly mimic sciatic symptoms. Accurate assessment is essential because true nerve irritation requires a completely different treatment approach than joint or muscle pain.
              </p>
              <p className="font-semibold text-foreground">Common causes of sciatic nerve irritation:</p>
            </div>

            <div className="grid md:grid-cols-2 gap-5 mt-6">
              {causes.map((c, i) => (
                <Card key={i} className="p-6 bg-secondary/30 border-border/40">
                  <h3 className="text-lg font-bold text-foreground mb-2 flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                    <span>{c.title}</span>
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-base">
                    {c.title === "Disc-related compression" ? (
                      <>
                        A bulging or herniated disc (see our{" "}
                        <Link to="/conditions/back-pain-treatment-north-vancouver" className="text-primary underline underline-offset-2 hover:text-accent">
                          back pain page
                        </Link>
                        ) in the lower lumbar spine presses on a nerve root. Often produces pain that worsens with sitting, bending forward, or coughing/sneezing, and may include numbness or tingling in a specific area of the leg or foot.
                      </>
                    ) : (
                      c.description
                    )}
                  </p>
                </Card>
              ))}
            </div>

            <Card className="mt-10 p-6 md:p-8 bg-secondary/40 border-l-4 border-l-accent">
              <p className="text-foreground mb-3">
                <span className="font-semibold">When to seek treatment:</span> If you experience any of the following, seek assessment promptly:
              </p>
              <ul className="space-y-2 mb-4">
                {warningSigns.map((s, i) => (
                  <li key={i} className="flex items-start gap-3 text-foreground">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
              <p className="text-foreground text-sm">
                <span className="font-semibold">Medical emergency:</span> If you experience sudden loss of bladder or bowel control alongside leg pain, go to the emergency department immediately.
              </p>
            </Card>
          </div>
        </section>

        {/* How We Treat Sciatica */}
        <section className="py-20 bg-secondary/20">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="max-w-3xl mb-12">
              <p className="text-sm uppercase tracking-widest text-accent mb-3 font-semibold">
                How We Treat Sciatica
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Finding Where the Nerve Is Irritated — and Why
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Eva's sciatica assessment identifies the specific mechanism irritating the nerve. This matters because treating a disc-related sciatica the same way as piriformis-related sciatica produces poor results.
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
              Treating the Whole Movement System, Not Just the Pain
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                Sciatica treatment varies more than most conditions because it depends on the cause. Disc-related sciatica may respond quickly to the right positioning and mobilization — some patients notice significant improvement within one to three sessions. Neural sensitization or chronic sciatica may take longer as the nervous system needs time to calm down.
              </p>
              <p>
                Eva will explain what she finds in your assessment, what's causing the nerve irritation, and what a realistic recovery timeline looks like for your specific situation. If imaging (MRI) or other expertise is warranted, she'll recommend it directly.
              </p>
              <p className="text-foreground font-medium">
                Home management is particularly important with sciatica. You'll learn which positions and movements reduce nerve loading and which aggravate it — this knowledge often makes the biggest difference in the early stages of recovery.
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
                Nerve-Specific Registered Massage Therapy Expertise
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
              Book Your RMT Assessment for Sciatica
            </h2>
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              Sciatica responds best to treatment that targets the right cause. Book an assessment to find out exactly where and why your nerve is being irritated.
            </p>
            <Button asChild size="lg" variant="secondary" className="text-base">
              <Link to="/booking">Schedule Your Assessment</Link>
            </Button>
          </div>
        </section>

        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default SciaticaTreatmentNorthVancouver;
