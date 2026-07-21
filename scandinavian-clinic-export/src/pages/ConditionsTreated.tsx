import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import {
  Calendar,
  Bone,
  Brain,
  Activity,
  Zap,
  Car,
  HeartPulse,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { usePageMeta } from "@/hooks/use-page-meta";
import { conditionsTreatedSchema } from "@/lib/schemas";
import bodyMap from "@/assets/conditions-body-map.png";

const ConditionsTreated = () => {
  usePageMeta({
    title: "Back, Neck, Shoulder, Elbow, Foot, Arm, & Hip Pain Treatment – RMT North Vancouver | Scandinavian Clinic",
    description:
      "Treatment for back pain, neck pain, shoulder injuries, hip dysfunction, postural strain, tennis elbow, sports injuries, and chronic pain through detailed assessment and clinical registered massage therapy in North Vancouver.",
    jsonLd: conditionsTreatedSchema,
  });

  const sections = [
    {
      icon: <Bone className="w-7 h-7" />,
      title: "Back and Neck Pain",
      intro:
        "Back and neck issues are the most common reasons patients seek RMT. We provide targeted treatment for:",
      items: [
        { term: "Lower Back Pain", desc: "Including muscle strains, disc-related issues, and stiffness from prolonged sitting." },
        { term: "Neck Pain & Stiffness", desc: 'Addressing "tech neck," reduced range of motion, and postural imbalances.' },
        { term: "Degenerative Changes", desc: "Managing symptoms related to osteoarthritis and spinal wear and tear." },
      ],
      links: [
        { label: "Read more about back pain treatment", to: "/conditions/back-pain-treatment-north-vancouver" },
        { label: "Read more about neck pain treatment", to: "/conditions/neck-pain-treatment-north-vancouver" },
      ],
    },
    {
      icon: <Brain className="w-7 h-7" />,
      title: "Headaches and Jaw Pain",
      intro:
        'Many headaches are "cervicogenic," meaning they originate from tension in the neck and shoulders.',
      items: [
        { term: "Tension Headaches", desc: "Releasing the myofascial triggers in the upper back and neck." },
        { term: "Migraine Support", desc: "Reducing the frequency and intensity of migraines by addressing physical triggers." },
        { term: "TMJ / Jaw Pain", desc: "Treating the muscles of mastication to relieve jaw clicking, locking, and facial pain." },
      ],
      links: [
        { label: "Read more about headache treatment", to: "/conditions/headaches-treatment-north-vancouver" },
      ],
    },
    {
      icon: <Activity className="w-7 h-7" />,
      title: "Sports & Activity Injuries",
      intro:
        "Whether you are a competitive athlete or a weekend warrior, we help you return to activity faster.",
      items: [
        { term: "Overuse Injuries", desc: "Tennis elbow, golfer's elbow, and repetitive strain from work or sport." },
        { term: "Strains and Sprains", desc: "Rehabilitation for muscle tears and ligament over-stretching." },
        { term: "Tendinopathy", desc: "Managing chronic tendon pain in the shoulders, hips, and ankles." },
        { term: "Post-Surgical Rehabilitation", desc: "Assisting in the recovery process after orthopedic surgeries." },
      ],
      links: [
        { label: "Read more about tennis elbow treatment", to: "/conditions/tennis-elbow-treatment-north-vancouver" },
        { label: "Read more about shoulder injury treatment", to: "/conditions/shoulder-injury-treatment-north-vancouver" },
        { label: "Read more about hip pain treatment", to: "/conditions/hip-pain-treatment-north-vancouver" },
      ],
    },
    {
      icon: <Zap className="w-7 h-7" />,
      title: "Nerve-Related Conditions",
      intro:
        "We treat conditions where nerve pathways are compressed or irritated:",
      items: [
        { term: "Sciatica", desc: "Relieving pressure on the sciatic nerve to reduce radiating leg pain." },
        { term: "Thoracic Outlet Syndrome", desc: "Addressing numbness or tingling in the arms and hands." },
        { term: "Carpal Tunnel Syndrome", desc: "Managing wrist and hand pain through forearm and hand treatments." },
      ],
      links: [
        { label: "Read more about sciatica treatment", to: "/conditions/sciatica-treatment-north-vancouver" },
      ],
    },
    {
      icon: <Car className="w-7 h-7" />,
      title: "ICBC",
      intro:
        "If you have been injured in a motor vehicle accident or at work, RMT can be a vital part of your recovery.",
      items: [
        { term: "Whiplash", desc: "Addressing the soft tissue damage and restricted motion common after a collision." },
        { term: "Concussion Support", desc: "Managing the neck tension and headaches often associated with head injuries." },
        { term: "Post-Accident Trauma", desc: "Reducing the global muscle guarding and pain following a traumatic event." },
      ],
      links: [
        { label: "Learn more about ICBC RMT treatment", to: "/icbc-rmt-north-vancouver" },
      ],
    },
    {
      icon: <HeartPulse className="w-7 h-7" />,
      title: "Chronic & Systemic Conditions",
      intro:
        "Massage therapy can provide symptomatic relief for long-term health challenges:",
      items: [
        { term: "Scoliosis", desc: "Managing the muscular imbalances and pain associated with spinal curvature." },
        { term: "Fibromyalgia & Chronic Pain", desc: "Using a systematic approach to modulate the body's pain response." },
        { term: "Arthritis", desc: "Improving joint mobility and reducing the muscle tension surrounding arthritic joints." },
      ],
      links: [],
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-primary via-primary to-primary/80 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-accent blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-accent/60 blur-3xl" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-3 animate-fade-in">
              <div className="inline-block px-4 py-1.5 rounded-full bg-accent/20 border border-accent/30 text-accent-foreground text-sm font-semibold mb-6 backdrop-blur-sm">
                Registered Massage Therapy · North Vancouver
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
                Conditions We Treat
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed">
                At Scandinavian Clinic, we use Registered Massage Therapy to address a
                wide range of musculoskeletal issues, from everyday aches and postural
                strain to complex injury recovery. Every treatment begins with a
                clinical assessment to ensure we are targeting the source of your
                discomfort.
              </p>
            </div>
            <div className="lg:col-span-2 flex justify-center animate-scale-in">
              <div className="relative bg-background/95 rounded-2xl p-6 shadow-2xl backdrop-blur-sm">
                <img
                  src={bodyMap}
                  alt="Visual guide to common musculoskeletal complaints: neck, shoulder, back, arm, leg, and foot pain"
                  className="w-full max-w-xs h-auto object-contain"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conditions */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-8">
            {sections.map((section, index) => (
              <Card
                key={index}
                className="p-8 md:p-10 border-0 shadow-card bg-background hover:shadow-lg transition-shadow animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="flex items-start gap-5 mb-6">
                  <div className="flex-shrink-0 w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    {section.icon}
                  </div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                      {section.title}
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                      {section.intro}
                    </p>
                  </div>
                </div>
                <ul className="space-y-3 md:pl-19">
                  {section.items.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 p-4 bg-muted/40 rounded-lg"
                    >
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <p className="text-foreground leading-relaxed">
                        <span className="font-semibold">{item.term}:</span>{" "}
                        <span className="text-muted-foreground">{item.desc}</span>
                      </p>
                    </li>
                  ))}
                </ul>
                {section.links && section.links.length > 0 && (
                  <div className="mt-6 pt-5 border-t border-border/60 flex flex-col sm:flex-row sm:flex-wrap gap-x-6 gap-y-2">
                    {section.links.map((l) => (
                      <Link
                        key={l.to}
                        to={l.to}
                        className="inline-flex items-center gap-1.5 text-primary font-semibold hover:text-accent transition-colors"
                      >
                        {l.label}
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    ))}
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-muted/40">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Book Your Appointment in North Vancouver
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              If you are experiencing a condition not listed above, please contact us
              to discuss how we can help.
            </p>
            <Button
              asChild
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-10 py-6 text-lg font-semibold transition-all hover:scale-105 shadow-lg"
            >
              <a href="/booking" className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                Book Your Appointment
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ConditionsTreated;
