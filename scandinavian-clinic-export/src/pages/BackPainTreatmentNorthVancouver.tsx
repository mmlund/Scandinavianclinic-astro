import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { BackToConditionsLink } from "@/components/BackToConditionsLink";
import { Contact } from "@/components/Contact";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Activity, Hand, Sparkles, Dumbbell, Search, Award, Shield } from "lucide-react";
import { usePageMeta } from "@/hooks/use-page-meta";
import backpainVideo from "@/assets/backpain-video.mp4";
import backPainIllustration from "@/assets/back-pain-illustration.png";
import backPainCausesIllustration from "@/assets/back-pain-causes-illustration.png";

const PAGE_URL = "https://scandinavianclinic.com/conditions/back-pain-treatment-north-vancouver";

const BackPainTreatmentNorthVancouver = () => {
  const today = new Date().toISOString().split("T")[0];

  usePageMeta({
    title: "Back Pain Treatment in North Vancouver | Scandinavian Clinic",
    description:
      "Assessment-based back pain treatment in North Vancouver. Swedish-trained RMT specializing in spinal mobilization, core stabilization, DNS, and lasting pain relief. Most insurance accepted.",
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
          name: "Back Pain Treatment in North Vancouver",
          description:
            "Clinical RMT treatment for back pain in North Vancouver. Assessment-based Registered Massage Therapy combining spinal mobilization, core stabilization, and active rehab.",
          url: PAGE_URL,
          lastReviewed: today,
          mainEntity: {
            "@type": "MedicalCondition",
            name: "Back Pain",
            alternateName: "Low Back Pain",
            associatedAnatomy: {
              "@type": "AnatomicalStructure",
              name: "Lumbar Spine",
            },
            signOrSymptom: [
              { "@type": "MedicalSignOrSymptom", name: "Lower back stiffness" },
              { "@type": "MedicalSignOrSymptom", name: "Pain when bending or lifting" },
              { "@type": "MedicalSignOrSymptom", name: "Difficulty standing after sitting" },
            ],
            possibleTreatment: [
              { "@type": "MedicalTherapy", name: "Registered Massage Therapy", alternateName: "RMT" },
              { "@type": "MedicalTherapy", name: "Spinal and Joint Mobilization" },
              { "@type": "MedicalTherapy", name: "Dynamic Neuromuscular Stabilization" },
            ],
          },
          about: { "@type": "MedicalCondition", name: "Back Pain" },
          provider: { "@id": "https://scandinavianclinic.com/#business" },
        },
        {
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://scandinavianclinic.com/" },
            { "@type": "ListItem", position: 2, name: "Conditions", item: "https://scandinavianclinic.com/conditions" },
            { "@type": "ListItem", position: 3, name: "Back Pain Treatment" },
          ],
        },
      ],
    },
  });

  const symptoms = [
    "Stiffness or aching in the lower back, especially in the morning or after sitting",
    "Sharp pain when bending, lifting, or twisting",
    "Pain that spreads into the buttock or upper leg",
    "Difficulty standing upright after sitting for long periods",
    'A feeling that your back "gives out" or lacks support during physical activity',
  ];

  const treatments = [
    {
      icon: Sparkles,
      title: "Massage, Soft Tissue & Fascia Work",
      subtitle: "Targeted release",
      description:
        "Targeted treatment of muscles that have tightened in response to spinal instability — commonly the quadratus lumborum, hip flexors, and thoracolumbar fascia. Massage and stretching often relieves pain and creates space for proper movement.",
    },
    {
      icon: Activity,
      title: "Deep Core Reactivation through DNS",
      subtitle: "Dynamic Neuromuscular Stabilization",
      description:
        "Many back pain patients have lost the ability to properly activate their deep stabilizing muscles — the diaphragm, pelvic floor, and deep abdominal wall. We retrain these muscles to stabilize your spine from the inside. Fundamentally different from crunches or planks, which often reinforce the compensation patterns causing your pain.",
      link: "/d-n-s",
      linkLabel: "Learn more about DNS",
    },
    {
      icon: Hand,
      title: "Spinal & Joint Mobilization",
      subtitle: "Low velocity only",
      description:
        "Hands-on manual therapy restores movement to stiff spinal segments. When vertebrae in the lower back lose their normal mobility, surrounding muscles tighten to compensate. Mobilizing these joints reduces muscle guarding and allows normal movement to return.",
    },
    {
      icon: Dumbbell,
      title: "Active Rehabilitation",
      subtitle: "Home practice that works",
      description:
        "You will leave each session with specific corrective movements chosen based on your assessment findings — not generic exercises. Your active participation is essential to lasting results.",
    },
  ];

  const whyUs = [
    {
      icon: Award,
      title: "Swedish-trained orthopedic manual therapy",
      description:
        "Eva's five-year Scandinavian education provides a high level of biomechanical assessment training.",
    },
    {
      icon: Activity,
      title: "Czech-trained in DNS",
      description:
        "DNS is particularly effective for back pain because it directly addresses the deep core stabilization failures that allow back pain to develop and recur.",
      link: "/d-n-s",
    },
    {
      icon: Search,
      title: "Assessment-first philosophy",
      description:
        "Treatment starts only after a thorough assessment, not based on assumptions about where it hurts.",
    },
    {
      icon: Shield,
      title: "Covered by most insurance plans",
      description:
        "As a Registered Massage Therapist, Eva's treatments are eligible for extended health benefits.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Hero */}
        <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            >
              <source src={backpainVideo} type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/75 to-primary/40" />
          </div>
          <div className="container mx-auto px-4 z-10 relative py-20">
            <div className="max-w-3xl animate-fade-in">
              <p className="text-sm uppercase tracking-widest text-accent mb-4 font-semibold">
                Your Back Pain
              </p>
              <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
                Back Pain Treatment in North Vancouver
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/90 mb-6 leading-relaxed">
                Back pain often changes the way you move through your day. Bending to tie your shoes becomes a negotiation. Sitting through a meeting turns into a countdown. A weekend hike on the North Shore trails — something you used to do without thinking — now requires recovery time you didn't plan for.
              </p>
              <p className="text-lg text-primary-foreground/90 mb-8 leading-relaxed">
                If your back pain has lasted more than a few weeks, or keeps coming back despite stretching and rest, the problem is usually deeper than tight muscles. At Scandinavian Clinic, we find and treat the root cause.
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



        {/* Understanding Back Pain */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <p className="text-sm uppercase tracking-widest text-accent mb-3 font-semibold">
              Understanding Back Pain
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
              Why Your Back Hurts — and Why It Keeps Coming Back
            </h2>

            <figure className="mb-10">
              <div className="relative overflow-hidden rounded-2xl shadow-card bg-secondary/30 border border-border/40">
                <img
                  src={backPainCausesIllustration}
                  alt="Hand-drawn clinical illustrations of three common back pain presentations: low back stiffness and dysfunction, chronic back pain syndrome, and active back strain with fascia tension."
                  loading="lazy"
                  className="w-full h-auto object-cover"
                />
              </div>
              <figcaption className="mt-3 text-sm text-muted-foreground text-center italic">
                Three common back pain presentations we assess and treat — each requiring a different approach.
              </figcaption>
            </figure>

            <div className="space-y-5 text-lg text-muted-foreground leading-relaxed">
              <p>
                Persistent back pain can be caused by many factors requiring a highly individualized approach. Massage is often a great treatment. But often pain develops from how your body has learned to move — or stopped moving — over time. Muscles that should stabilize your spine stop doing their job, and other muscles compensate. That compensation creates strain, stiffness, and eventually pain. It may create a complex pattern that has to be addressed systematically and stepwise where massage is just one component.
              </p>
              <p className="font-semibold text-foreground">Common symptoms of back pain we treat include:</p>
              <ul className="space-y-3">
                {symptoms.map((s, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
              <p>
                Back pain that radiates down the leg may indicate nerve involvement — see our{" "}
                <Link to="/conditions/sciatica-treatment-north-vancouver" className="text-primary underline underline-offset-4 hover:text-accent">
                  sciatica treatment page
                </Link>{" "}
                for nerve-related leg pain.
              </p>
              <p>
                Back pain often worsens with prolonged sitting, repetitive bending, poor sleeping positions, or sudden increases in physical activity. Many patients describe a pattern: it flares up, settles down, then returns — each time a little worse or a little more limiting.
              </p>
            </div>

            <Card className="mt-10 p-6 md:p-8 bg-secondary/40 border-l-4 border-l-accent">
              <p className="text-foreground">
                <span className="font-semibold">When to seek treatment:</span> If your back pain lasts beyond two to three weeks, limits your daily activities, disrupts your sleep, or has started affecting how much you move and exercise, it's worth getting a proper assessment rather than waiting it out.
              </p>
            </Card>
          </div>
        </section>

        {/* How We Treat Back Pain */}
        <section className="py-20 bg-secondary/20">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="max-w-3xl mb-12">
              <p className="text-sm uppercase tracking-widest text-accent mb-3 font-semibold">
                How We Treat Back Pain
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Assessment-Based Treatment, Not Guesswork
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Your first appointment begins with a thorough assessment. Eva evaluates how your spine moves, where your movement is restricted, and — critically — which stabilizing muscles have stopped activating properly. This is a biomechanical assessment that identifies the source of your pain, which is often different from the location of your pain.
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
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-sm uppercase tracking-widest text-accent mb-3 font-semibold">
                  What to Expect
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Your Path from Pain to Function
                </h2>
                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    For most back pain patients, treatment begins with 60-minute sessions focused on hands-on assessment and treatment. Early sessions prioritize reducing pain and restoring mobility. As your pain is reduced and stabilizing muscles reactivate, sessions shift toward movement training and self-management.
                  </p>
                  <p>
                    Most patients with uncomplicated back pain notice meaningful improvement within three to six sessions. Chronic or recurring back pain may require a longer treatment course. Eva will be direct with you about expected timelines based on your specific presentation.
                  </p>
                  <p className="text-foreground font-medium">
                    Your role matters: lasting results depend on consistent home practice between sessions. The goal is giving you the tools to manage and prevent recurrence yourself.
                  </p>
                </div>
              </div>
              <div className="relative rounded-2xl overflow-hidden aspect-square shadow-xl bg-secondary/30">
                <img
                  src={backPainIllustration}
                  alt="Illustration of back pain anatomy and stabilizing muscles"
                  className="w-full h-full object-contain"
                  loading="lazy"
                />
              </div>
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
                A Clinical Approach to Back Pain
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
              Book Your Appointment for Back Pain Treatment
            </h2>
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              Ready to find out what's actually causing your back pain? Book an assessment and start treatment based on answers, not guesswork.
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

export default BackPainTreatmentNorthVancouver;
