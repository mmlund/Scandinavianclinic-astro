import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { BackToConditionsLink } from "@/components/BackToConditionsLink";
import { Contact } from "@/components/Contact";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Activity, Hand, Sparkles, Search, Award, Shield, Brain } from "lucide-react";
import { usePageMeta } from "@/hooks/use-page-meta";
import headachesIllustration from "@/assets/headaches-illustration.png";
import headachesHero from "@/assets/headaches-hero.jpg";

const PAGE_URL = "https://scandinavianclinic.com/conditions/headaches-treatment-north-vancouver";

const HeadachesTreatmentNorthVancouver = () => {
  const today = new Date().toISOString().split("T")[0];

  usePageMeta({
    title: "Headache Treatment in North Vancouver | Scandinavian Clinic",
    description:
      "Clinical RMT treatment for cervicogenic and tension headaches in North Vancouver. Registered Massage Therapy targeting neck, jaw, and upper back to treat the source. Most insurance accepted.",
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
          name: "Headache Treatment in North Vancouver",
          description:
            "Clinical RMT treatment for cervicogenic and tension headaches in North Vancouver. Registered Massage Therapy targeting neck, jaw, and upper back to treat the source.",
          url: PAGE_URL,
          lastReviewed: today,
          mainEntity: {
            "@type": "MedicalCondition",
            name: "Cervicogenic Headache",
            alternateName: "Tension Headache",
            associatedAnatomy: {
              "@type": "AnatomicalStructure",
              name: "Upper Cervical Spine",
            },
            signOrSymptom: [
              { "@type": "MedicalSignOrSymptom", name: "Pain starting at base of skull spreading forward" },
              { "@type": "MedicalSignOrSymptom", name: "One-sided headache associated with neck stiffness" },
              { "@type": "MedicalSignOrSymptom", name: "Headache triggered by sustained neck positions" },
              { "@type": "MedicalSignOrSymptom", name: "Tenderness at skull base muscles" },
            ],
            possibleTreatment: [
              { "@type": "MedicalTherapy", name: "Registered Massage Therapy", alternateName: "RMT" },
              { "@type": "MedicalTherapy", name: "Upper Cervical Mobilization" },
              { "@type": "MedicalTherapy", name: "Temporomandibular Joint Treatment" },
              { "@type": "MedicalTherapy", name: "Dynamic Neuromuscular Stabilization" },
            ],
          },
          about: { "@type": "MedicalCondition", name: "Headache" },
          provider: { "@id": "https://scandinavianclinic.com/#business" },
        },
        {
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://scandinavianclinic.com/" },
            { "@type": "ListItem", position: 2, name: "Conditions", item: "https://scandinavianclinic.com/conditions" },
            { "@type": "ListItem", position: 3, name: "Headache Treatment" },
          ],
        },
      ],
    },
  });

  const symptoms = [
    "Pain typically starts at the back of the head or base of the skull and spreads forward",
    "One-sided or significantly worse on one side",
    "Associated with neck stiffness or reduced ability to turn your head",
    "Triggered or worsened by sustained neck positions — desk work, driving, reading",
    "Respond temporarily to neck massage or heat, then return",
    "Accompanied by tenderness when pressing on the muscles at the base of the skull",
    "Not associated with visual aura, nausea, or light sensitivity (which suggest migraine)",
  ];

  const treatments = [
    {
      icon: Hand,
      title: "Upper Cervical Mobilization",
      subtitle: "Restoring mobility at C1–C3",
      description:
        "Gentle, precise hands-on techniques restore mobility to the joints at C1–C3 — the vertebrae with the strongest connection to headache pain referral. When these joints move properly, the nerve irritation driving the headache pattern diminishes. This is technically demanding work that requires specific training in upper cervical assessment and treatment.",
    },
    {
      icon: Sparkles,
      title: "Suboccipital Muscle Release",
      subtitle: "Targeted relief at the base of the skull",
      description:
        "Four small muscles at the base of the skull (the suboccipitals) connect the upper cervical spine to the skull. In headache patients, these muscles are almost always tight, tender, and overactive. Targeted soft tissue work releases them — but lasting relief requires also addressing the deep cervical flexor weakness and thoracic stiffness driving overactivity.",
    },
    {
      icon: Brain,
      title: "Jaw Assessment & Treatment",
      subtitle: "Addressing TMJ contributions to headache",
      description:
        "When jaw clenching or grinding contributes to the headache pattern, Eva assesses the temporomandibular joint and the muscles of mastication (masseter, temporalis, pterygoids). Treatment may include intraoral techniques and jaw mobility work — addressing a headache contributor that's frequently overlooked.",
    },
    {
      icon: Activity,
      title: "DNS for Head & Neck Position",
      subtitle: "Retraining automatic posture",
      description:
        "Many headache patients hold their head in a forward position — chin poking forward, upper cervical spine hyperextended. DNS retrains the deep cervical flexors and postural muscles that control head position through developmental movement exercises — fundamentally different from telling someone to 'sit up straight.'",
      link: "/d-n-s",
      linkLabel: "Read about DNS",
    },
  ];

  const whyUs = [
    {
      icon: Award,
      title: "Swedish-trained orthopedic manual therapy",
      description:
        "Eva's education includes specialized upper cervical assessment and mobilization techniques critical for accurate cervicogenic headache treatment.",
    },
    {
      icon: Activity,
      title: "Czech-trained DNS therapist",
      description:
        "DNS retrains the automatic head positioning patterns that allow cervicogenic headaches to develop and recur.",
      link: "/d-n-s",
    },
    {
      icon: Search,
      title: "Jaw assessment capability",
      description:
        "Including intraoral techniques for temporomandibular joint dysfunction, addressing a headache contributor that's frequently overlooked.",
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
              src={headachesHero}
              alt="Woman in a North Vancouver clinical office grimacing and holding the back of her neck, with a cervicogenic headache referral chart and CGH symptoms whiteboard visible behind her."
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/75 to-primary/40" />
          </div>
          <div className="container mx-auto px-4 z-10 relative py-20">
            <div className="max-w-3xl animate-fade-in">
              <p className="text-sm uppercase tracking-widest text-accent mb-4 font-semibold">
                Your Headaches
              </p>
              <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
                Headache Treatment in North Vancouver
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/90 mb-6 leading-relaxed">
                You've tried everything for your headaches. Painkillers take the edge off but don't stop them from coming back. Massage gives temporary relief. You've adjusted your screen height, bought a new pillow, drunk more water. And yet the headaches keep returning — tightness at the back of your skull, pressure behind your eyes, dull aching that builds through the afternoon until concentration becomes impossible.
              </p>
              <p className="text-lg text-primary-foreground/90 mb-8 leading-relaxed">
                Many chronic or recurring headaches are not "just stress" or "just tension." They originate from mechanical problems in the neck — and they respond to clinical Registered Massage Therapy that addresses the neck, not the head.
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



        {/* Understanding Headaches */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <p className="text-sm uppercase tracking-widest text-accent mb-3 font-semibold">
              Understanding Your Headaches
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
              When the Problem Is Your Neck, Not Your Head
            </h2>

            <figure className="mb-10">
              <div className="relative overflow-hidden rounded-2xl shadow-card bg-secondary/30 border border-border/40">
                <img
                  src={headachesIllustration}
                  alt="Hand-drawn napkin sketch titled 'When the problem is your neck, not your head: cervicogenic headaches' showing the upper cervical joints, suboccipital muscles, and headache referral patterns into the head."
                  loading="lazy"
                  className="w-full h-auto object-cover"
                />
              </div>
              <figcaption className="mt-3 text-sm text-muted-foreground text-center italic">
                Cervicogenic headaches: pain referred from the upper cervical spine and suboccipital muscles into the head.
              </figcaption>
            </figure>

            <div className="space-y-5 text-lg text-muted-foreground leading-relaxed">
              <p>
                Cervicogenic headaches — headaches originating from the neck — are among the most underdiagnosed and undertreated headache types. They are frequently mistaken for tension headaches or migraines, which means patients often receive medication for a problem that could respond to clinical RMT and manual therapy.
              </p>
              <p>
                <span className="font-semibold text-foreground">How cervicogenic headaches work:</span> the upper three cervical vertebrae (C1, C2, C3) share nerve pathways with the head and face. When joints at this level are stiff, or when the muscles attached to the skull base are chronically tight, these nerves become irritated and send pain signals to the head. The pain feels like it's in your head, but it may be generated by your neck.
              </p>
              <p className="font-semibold text-foreground">
                Characteristics that suggest your headaches may be cervicogenic:
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mt-6">
              {symptoms.map((s, i) => (
                <div key={i} className="flex items-start gap-3 p-5 bg-secondary/30 border border-border/40 rounded-xl">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                  <span className="text-foreground leading-relaxed">{s}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 space-y-5 text-lg text-muted-foreground leading-relaxed">
              <p>
                <span className="font-semibold text-foreground">Jaw contribution:</span> Some patients with chronic headaches also have jaw (temporomandibular joint) dysfunction — clenching, grinding, or jaw tension that adds another layer of muscle overactivity and pain referral into the temples and face. Eva assesses jaw mechanics as part of the headache evaluation.
              </p>
            </div>

            <Card className="mt-10 p-6 md:p-8 bg-secondary/40 border-l-4 border-l-accent">
              <p className="text-foreground">
                <span className="font-semibold">When to seek treatment:</span> If you experience headaches more than twice a week, if your headaches are always accompanied by neck stiffness, if over-the-counter medication has stopped being effective, or if your headaches are interfering with work, sleep, or daily activities, a clinical assessment can determine whether your neck is the source.
              </p>
            </Card>
          </div>
        </section>

        {/* How We Treat */}
        <section className="py-20 bg-secondary/20">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="max-w-3xl mb-12">
              <p className="text-sm uppercase tracking-widest text-accent mb-3 font-semibold">
                How We Treat Headaches
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Treating the Neck That's Causing the Head Pain
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Eva's headache assessment focuses on the structures most likely to generate head pain: the upper cervical joints, the suboccipital muscles, the jaw, and the upper thoracic spine.
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
                <span className="font-semibold text-foreground">Thoracic spine mobilization:</span> A stiff upper back forces the neck to overwork. Restoring thoracic mobility reduces the load on the cervical spine and is often a critical piece of lasting headache management that gets missed when treatment focuses only on the neck and skull.{" "}
                <Link to="/conditions/neck-pain-treatment-north-vancouver" className="text-primary underline underline-offset-2 hover:text-accent">
                  Read about neck pain treatment
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
              Breaking the Headache Cycle
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                Headache treatment follows a pattern: initial sessions focus on identifying and treating the mechanical sources — upper cervical joints, suboccipital muscles, jaw, and thoracic spine. As pain frequency and intensity reduce, sessions shift toward postural retraining and self-management strategies.
              </p>
              <p>
                Many patients with cervicogenic headaches notice a reduction in headache frequency within three to four sessions. Longstanding daily headaches or headaches with a jaw component may take longer. Eva will tell you what she expects based on your specific assessment findings.
              </p>
              <p className="text-foreground font-medium">
                Self-management is particularly important for headache patients. You'll learn targeted exercises for the deep neck muscles, strategies for managing desk-related posture, and techniques for identifying and interrupting your headache triggers before they build.
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
                Headache Treatment Beyond Medication
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
              Book Your Appointment for Headache Treatment
            </h2>
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              If your headaches keep coming back despite medication and stretching, the cause may be in your neck. Book an RMT assessment to find out. Treatments are covered by most extended health insurance plans.
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

export default HeadachesTreatmentNorthVancouver;
