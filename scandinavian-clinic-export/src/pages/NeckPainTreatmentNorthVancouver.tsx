import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { BackToConditionsLink } from "@/components/BackToConditionsLink";
import { Contact } from "@/components/Contact";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Activity, Hand, Sparkles, Search, Award, Shield, Zap } from "lucide-react";
import { usePageMeta } from "@/hooks/use-page-meta";
import neckPainIllustration from "@/assets/neck-pain-illustration.png";
import neckPainHero from "@/assets/neck-pain-hero.jpg";

const PAGE_URL = "https://scandinavianclinic.com/conditions/neck-pain-treatment-north-vancouver";

const NeckPainTreatmentNorthVancouver = () => {
  const today = new Date().toISOString().split("T")[0];

  usePageMeta({
    title: "Neck Pain Treatment in North Vancouver | Scandinavian Clinic",
    description:
      "Clinical RMT treatment for neck pain in North Vancouver. Thorough cervical and thoracic assessment, Registered Massage Therapy, and movement retraining for lasting relief. Most insurance accepted.",
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
          name: "Neck Pain Treatment in North Vancouver",
          description:
            "Clinical RMT treatment for neck pain in North Vancouver. Thorough cervical and thoracic assessment, Registered Massage Therapy, and movement retraining for lasting relief.",
          url: PAGE_URL,
          lastReviewed: today,
          mainEntity: {
            "@type": "MedicalCondition",
            name: "Neck Pain",
            alternateName: "Cervical Pain",
            associatedAnatomy: {
              "@type": "AnatomicalStructure",
              name: "Cervical Spine",
            },
            signOrSymptom: [
              { "@type": "MedicalSignOrSymptom", name: "Stiffness when turning head" },
              { "@type": "MedicalSignOrSymptom", name: "Pain radiating to shoulder or between shoulder blades" },
              { "@type": "MedicalSignOrSymptom", name: "Headaches originating from neck" },
              { "@type": "MedicalSignOrSymptom", name: "Numbness or tingling in arms" },
            ],
            possibleTreatment: [
              { "@type": "MedicalTherapy", name: "Registered Massage Therapy", alternateName: "RMT" },
              { "@type": "MedicalTherapy", name: "Cervical and Thoracic Joint Mobilization" },
              { "@type": "MedicalTherapy", name: "Neurodynamic Therapy" },
              { "@type": "MedicalTherapy", name: "Dynamic Neuromuscular Stabilization" },
            ],
          },
          about: { "@type": "MedicalCondition", name: "Neck Pain" },
          provider: { "@id": "https://scandinavianclinic.com/#business" },
        },
        {
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://scandinavianclinic.com/" },
            { "@type": "ListItem", position: 2, name: "Conditions", item: "https://scandinavianclinic.com/conditions" },
            { "@type": "ListItem", position: 3, name: "Neck Pain Treatment" },
          ],
        },
      ],
    },
  });

  const symptoms = [
    "Stiffness or pain when turning your head, especially to one side",
    "Aching at the base of the skull or behind the eyes",
    "Pain or tension radiating into the shoulder or between the shoulder blades",
    "Difficulty finding a comfortable sleeping position",
    "Headaches that start at the back of the head and move forward",
    "Numbness, tingling, or a 'heavy' feeling in one or both arms",
  ];

  const treatments = [
    {
      icon: Hand,
      title: "Cervical & Thoracic Joint Mobilization",
      subtitle: "Restoring movement where it's restricted",
      description:
        "Hands-on techniques restore normal movement to restricted joints. For many neck pain patients, mobilizing stiff thoracic vertebrae produces immediate improvement in neck mobility and pain — because the neck no longer has to compensate for a rigid upper back.",
    },
    {
      icon: Zap,
      title: "Neurodynamics",
      subtitle: "Addressing nerve-related arm symptoms",
      description:
        "When neck pain involves arm symptoms — tingling, numbness, or a heavy sensation — nerve tissue may be sensitized or mechanically restricted. Neurodynamic techniques gently restore normal nerve mobility through the neck, shoulder, and arm.",
    },
    {
      icon: Activity,
      title: "Postural Muscle Retraining with DNS",
      subtitle: "Reactivating deep stabilizers",
      description:
        "The deep stabilizers of the neck and upper body — including the deep cervical flexors and the muscles that anchor the shoulder blades — often become inhibited in chronic neck pain. DNS retraining targets these specific muscles to restore proper head and neck positioning without relying on bracing or forced 'good posture.'",
      link: "/d-n-s",
      linkLabel: "Learn more about DNS",
    },
    {
      icon: Sparkles,
      title: "Targeted Soft Tissue Work",
      subtitle: "Releasing overactive muscles",
      description:
        "Targeted release of the suboccipital muscles (at the skull base), upper trapezius, levator scapulae, and scalene muscles. These muscles commonly become overactive when deeper stabilizers stop working — lasting relief usually requires reactivating the muscles they're compensating for.",
    },
  ];

  const whyUs = [
    {
      icon: Award,
      title: "Swedish-trained orthopedic manual therapy",
      description:
        "Eva's education includes advanced assessment of the cervical and thoracic spine, going well beyond surface-level muscle treatment.",
    },
    {
      icon: Activity,
      title: "Czech-trained DNS therapist",
      description:
        "Retraining deep cervical and postural stabilizers is central to preventing neck pain recurrence — not just relieving it temporarily.",
      link: "/d-n-s",
    },
    {
      icon: Search,
      title: "Neurodynamic assessment",
      description:
        "When nerve symptoms accompany neck pain, Eva can identify and treat the supporting structures involved — rather than treating only muscles.",
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
              src={neckPainHero}
              alt="Woman seated in a clinic waiting room holding the side of her neck, expressing discomfort from neck pain."
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/75 to-primary/40" />
          </div>
          <div className="container mx-auto px-4 z-10 relative py-20">
            <div className="max-w-3xl animate-fade-in">
              <p className="text-sm uppercase tracking-widest text-accent mb-4 font-semibold">
                Your Neck Pain
              </p>
              <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
                Neck Pain Treatment in North Vancouver
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/90 mb-6 leading-relaxed">
                Neck pain rarely stays in one place. It creeps into your shoulders, wraps around the base of your skull, and may show up as tension headaches you blame on stress or screen time. Turning your head to check a blind spot becomes stiff and guarded. Sleep gets disrupted because no pillow position feels right.
              </p>
              <p className="text-lg text-primary-foreground/90 mb-8 leading-relaxed">
                Most people assume neck pain is caused by posture or stress. Sometimes that's part of it — but persistent neck pain usually involves joint restrictions and muscle imbalances. At Scandinavian Clinic, Eva Andersson, RMT, uses clinical Registered Massage Therapy to assess your neck pain properly and treat the mechanics behind it.
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



        {/* Understanding Neck Pain */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <p className="text-sm uppercase tracking-widest text-accent mb-3 font-semibold">
              Understanding Neck Pain
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
              Where Neck Pain Actually Comes From
            </h2>

            <figure className="mb-10">
              <div className="relative overflow-hidden rounded-2xl shadow-card bg-secondary/30 border border-border/40">
                <img
                  src={neckPainIllustration}
                  alt="Hand-drawn anatomical sketch of the cervical spine, trapezius and scalene muscles, and the mechanics behind neck pain and cervicogenic headaches."
                  loading="lazy"
                  className="w-full h-auto object-cover"
                />
              </div>
              <figcaption className="mt-3 text-sm text-muted-foreground text-center italic">
                The cervical spine, supporting musculature, and the upstream patterns that drive persistent neck pain.
              </figcaption>
            </figure>

            <div className="space-y-5 text-lg text-muted-foreground leading-relaxed">
              <p>
                The cervical spine — the seven vertebrae in your neck — is designed for mobility. It lets you look up, turn your head, and tilt to the side. But this mobility makes it vulnerable when the structures supporting it aren't working well.
              </p>
              <p>
                What many people don't realize is that neck pain frequently originates <em>below</em> the neck, in the thoracic spine (upper and mid back) and shoulder blade region. When your thoracic spine becomes stiff — common in desk workers, drivers, and anyone who spends hours looking at screens — your neck compensates by moving more than it should. Over time, this overwork creates strain, inflammation, and pain.
              </p>
              <p className="font-semibold text-foreground">Common symptoms we treat:</p>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mt-6">
              {symptoms.map((s, i) => (
                <div key={i} className="flex items-start gap-3 p-5 bg-secondary/30 border border-border/40 rounded-xl">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                  <span className="text-foreground leading-relaxed">{s}</span>
                </div>
              ))}
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed mt-8">
              Neck pain tends to build gradually. It may start as occasional stiffness and progress to constant tightness, reduced range of motion, and secondary headaches. Early treatment typically means faster recovery.
            </p>

            <Card className="mt-10 p-6 md:p-8 bg-secondary/40 border-l-4 border-l-accent">
              <p className="text-foreground">
                <span className="font-semibold">When to seek treatment:</span> If neck stiffness or pain has persisted for more than two weeks, if you've lost range of motion, or if you're getting headaches or arm symptoms alongside neck pain, a proper clinical assessment will clarify what's happening and what treatment is needed.
              </p>
            </Card>
          </div>
        </section>

        {/* How We Treat */}
        <section className="py-20 bg-secondary/20">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="max-w-3xl mb-12">
              <p className="text-sm uppercase tracking-widest text-accent mb-3 font-semibold">
                How We Treat Neck Pain
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Clinical RMT That Looks Beyond the Neck
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Eva's assessment of neck pain is deliberately broad. She evaluates not just the cervical spine, but also the thoracic spine, rib mobility, shoulder blade positioning, and jaw mechanics — because all of these can drive or maintain neck symptoms.
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
              From Assessment to Self-Management
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                Neck pain treatment typically begins with a 60-minute assessment and treatment session. Eva will explain her findings clearly — what's restricted, what's compensating, and what needs to change.
              </p>
              <p>
                Many patients with straightforward neck pain improve significantly within three to five sessions. Cases involving nerve symptoms, long-standing postural dysfunction, or jaw-related contributions may take longer. You'll receive an honest timeline based on your specific assessment.
              </p>
              <p className="text-foreground font-medium">
                Between sessions, you'll practice targeted exercises to maintain mobility gains and build strength in the right areas. The aim is independence — not an indefinite treatment schedule.
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
                Clinical Expertise in Neck and Upper Body Pain
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
              Book Your Appointment for Neck Pain Treatment
            </h2>
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              Persistent neck pain deserves more than stretching advice. Book an RMT assessment to find out what's actually driving your symptoms. Treatments are covered by most extended health insurance plans.
            </p>
            <Button asChild size="lg" variant="secondary" className="text-base">
              <Link to="/booking">Book Your Assessment</Link>
            </Button>
          </div>
        </section>

        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default NeckPainTreatmentNorthVancouver;
