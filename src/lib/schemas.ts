// Page-specific JSON-LD structured data schemas.
// All URLs use https://scandinavianclinic.com (no www).
// Business identity is shared via @id reference so Google treats all pages
// as belonging to the same MedicalBusiness entity.

const BUSINESS_ID = "https://scandinavianclinic.com/#business";
const EVA_ID = "https://scandinavianclinic.com/#eva";

const baseAddress = {
  "@type": "PostalAddress",
  streetAddress: "Suite 202, 101 West 16th Street",
  addressLocality: "North Vancouver",
  addressRegion: "BC",
  postalCode: "V7M 1T3",
  addressCountry: "CA",
};

const baseGeo = {
  "@type": "GeoCoordinates",
  latitude: 49.32305,
  longitude: -123.07229,
};

const openingHours = [
  {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Wednesday", "Thursday"],
    opens: "08:00",
    closes: "17:00",
  },
];

const areaServed = {
  "@type": "City",
  name: "North Vancouver",
  containedInPlace: {
    "@type": "AdministrativeArea",
    name: "British Columbia",
  },
};

const reserveAction = {
  "@type": "ReserveAction",
  target: {
    "@type": "EntryPoint",
    urlTemplate: "https://scandinavianclinic.com/booking",
  },
  result: {
    "@type": "Reservation",
    name: "Book an Appointment",
  },
};

// Canonical service catalog — used across all non-condition pages.
// Exactly three services. No Acupuncture. No Physiotherapy.
const serviceCatalog = {
  "@type": "OfferCatalog",
  name: "Clinical Services",
  itemListElement: [
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "MedicalTherapy",
        name: "Registered Massage Therapy",
        alternateName: "RMT",
        description:
          "Clinical Registered Massage Therapy for musculoskeletal conditions, injury recovery, and rehabilitation. ICBC and WSBC eligible.",
        url: "https://scandinavianclinic.com/r-m-t",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "MedicalTherapy",
        name: "Orthopedic Manual Therapy",
        description:
          "Assessment-based manual therapy for chronic pain, sports injuries, and complex musculoskeletal conditions.",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "MedicalTherapy",
        name: "Dynamic Neuromuscular Stabilization",
        alternateName: "DNS",
        description:
          "Rehabilitation approach targeting core stabilization and motor control, developed at the Prague School of Rehabilitation.",
        url: "https://scandinavianclinic.com/how-recovery-works/what-dns-is",
      },
    },
  ],
};

// Canonical MedicalBusiness block — identical across all pages.
// Pages reference it via @id; the home & contact pages emit it in full.
const medicalBusiness = {
  "@type": "MedicalBusiness",
  "@id": BUSINESS_ID,
  name: "Scandinavian Clinic",
  description:
    "Registered Massage Therapy and orthopedic manual therapy clinic in North Vancouver. Clinical assessment, musculoskeletal rehabilitation, and DNS therapy.",
  url: "https://scandinavianclinic.com",
  telephone: "+1-604-926-4883",
  email: "info@scandinavianclinic.com",
  address: baseAddress,
  geo: baseGeo,
  openingHoursSpecification: openingHours,
  hasOfferCatalog: serviceCatalog,
  medicalSpecialty: "Musculoskeletal",
  isAcceptingNewPatients: true,
  priceRange: "$$",
  areaServed,
  potentialAction: reserveAction,
};

// Lightweight @id reference used to link other schema nodes to the business.
const businessRef = { "@id": BUSINESS_ID };

const breadcrumb = (items: { name: string; url: string }[]) => ({
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
});


const conditionsItemList = {
  "@type": "ItemList",
  name: "Conditions Treated",
  itemListElement: [
    { "@type": "ListItem", position: 1, item: { "@type": "MedicalCondition", name: "Back Pain", url: "https://scandinavianclinic.com/conditions/back-pain-treatment-north-vancouver" } },
    { "@type": "ListItem", position: 2, item: { "@type": "MedicalCondition", name: "Sciatica", url: "https://scandinavianclinic.com/conditions/sciatica-treatment-north-vancouver" } },
    { "@type": "ListItem", position: 3, item: { "@type": "MedicalCondition", name: "Neck Pain & Whiplash", url: "https://scandinavianclinic.com/conditions/neck-pain-and-whiplash-treatment-north-vancouver" } },
    { "@type": "ListItem", position: 4, item: { "@type": "MedicalCondition", name: "Headaches", url: "https://scandinavianclinic.com/conditions/headache-treatment-north-vancouver" } },
    { "@type": "ListItem", position: 5, item: { "@type": "MedicalCondition", name: "Shoulder", url: "https://scandinavianclinic.com/conditions/shoulder-pain-treatment-north-vancouver" } },
    { "@type": "ListItem", position: 6, item: { "@type": "MedicalCondition", name: "Hip", url: "https://scandinavianclinic.com/conditions/hip-pain-treatment-north-vancouver" } },
    { "@type": "ListItem", position: 7, item: { "@type": "MedicalCondition", name: "Tennis Elbow", url: "https://scandinavianclinic.com/conditions/tennis-elbow-treatment-north-vancouver" } },
    { "@type": "ListItem", position: 8, item: { "@type": "MedicalCondition", name: "Foot & Ankle", url: "https://scandinavianclinic.com/conditions/foot-and-ankle-pain-treatment-north-vancouver" } }
  ]
};

// =====================================================================
// HOME
// =====================================================================
export const homeSchema = {
  "@context": "https://schema.org",
  "@graph": [
    medicalBusiness,
    {
      "@type": "WebSite",
      name: "Scandinavian Clinic",
      url: "https://scandinavianclinic.com",
    },
    {
      "@type": "Person",
      "@id": EVA_ID,
      name: "Eva Andersson",
      jobTitle: "Registered Massage Therapist",
      url: "https://scandinavianclinic.com/about-me"
    },
    conditionsItemList,
    breadcrumb([{ name: "Home", url: "https://scandinavianclinic.com/" }]),
  ],
};

// =====================================================================
// ABOUT
// =====================================================================
export const aboutMeSchema = {
  "@context": "https://schema.org",
  "@graph": [
    medicalBusiness,
    {
      "@type": "Person",
      "@id": EVA_ID,
      name: "Eva Andersson",
      jobTitle: "Registered Massage Therapist",
      alternateName: "RMT",
      url: "https://scandinavianclinic.com/about-me",
      worksFor: businessRef,
      knowsAbout: [
        "Registered Massage Therapy",
        "Orthopedic Manual Therapy",
        "Dynamic Neuromuscular Stabilization",
        "Musculoskeletal Rehabilitation",
        "Sports Injury Treatment",
      ],
      hasCredential: [
        {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "Professional License",
          name: "Registered Massage Therapist (RMT)",
          recognizedBy: {
            "@type": "Organization",
            name: "College of Massage Therapists of British Columbia",
          },
        },
      ],
      qualification: [
        {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "Professional Training",
          name: "Swedish Orthopedic Manual Therapy Training",
          description:
            "Advanced clinical training in orthopedic manual therapy from Sweden, focused on assessment-based musculoskeletal treatment.",
        },
        {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "Professional Certification",
          name: "Dynamic Neuromuscular Stabilization (DNS) Certification",
          description:
            "Certified in Dynamic Neuromuscular Stabilization through the Prague School of Rehabilitation in the Czech Republic.",
        },
      ],
    },
    breadcrumb([
      { name: "Home", url: "https://scandinavianclinic.com/" },
      { name: "About", url: "https://scandinavianclinic.com/about-me" },
    ]),
  ],
};

// Education page reuses About-style Person schema with extended breadcrumb.
export const educationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    medicalBusiness,
    {
      "@type": "Person",
      "@id": EVA_ID,
      name: "Eva Andersson",
      jobTitle: "Registered Massage Therapist",
      alternateName: "RMT",
      description:
        "Registered Massage Therapist with 28+ years of clinical experience in orthopedic manual therapy and Dynamic Neuromuscular Stabilization (DNS).",
      url: "https://scandinavianclinic.com/education",
      worksFor: businessRef,
      knowsAbout: [
        "Registered Massage Therapy",
        "Orthopedic Manual Therapy",
        "Dynamic Neuromuscular Stabilization",
        "Musculoskeletal Rehabilitation",
      ],
    },
    breadcrumb([
      { name: "Home", url: "https://scandinavianclinic.com/" },
      { name: "About", url: "https://scandinavianclinic.com/about-me" },
      { name: "Training & Education", url: "https://scandinavianclinic.com/education" },
    ]),
  ],
};

// =====================================================================
// SERVICES
// =====================================================================
export const servicesSchema = {
  "@context": "https://schema.org",
  "@graph": [
    medicalBusiness,
    breadcrumb([
      { name: "Home", url: "https://scandinavianclinic.com/" },
      { name: "Services", url: "https://scandinavianclinic.com/services" },
    ]),
  ],
};

// =====================================================================
// FIRST VISIT
// =====================================================================
export const firstVisitSchema = {
  "@context": "https://schema.org",
  "@graph": [
    businessRef,
    {
      "@type": "MedicalWebPage",
      name: "Your First Visit",
      url: "https://scandinavianclinic.com/first-visit",
      description:
        "What to expect at your first Registered Massage Therapy appointment at Scandinavian Clinic — initial clinical assessment, health history review, physical evaluation, and treatment plan.",
      about: businessRef,
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What should I expect at my first Registered Massage Therapy appointment at Scandinavian Clinic?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Your first visit begins with a clinical assessment, including a health history review and physical evaluation. Treatment follows based on assessment findings. We recommend booking 45 to 60 minutes for your initial Registered Massage Therapy appointment.",
          },
        },
        {
          "@type": "Question",
          name: "What should I bring to my first Registered Massage Therapy appointment?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Please bring a tank top and shorts for assessment and treatment. If you have previous imaging such as X-rays or MRIs, bring those as well. You will complete an intake form on arrival, so please arrive 10 minutes early.",
          },
        },
        {
          "@type": "Question",
          name: "Is Registered Massage Therapy covered by insurance in BC?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most extended health plans in British Columbia cover Registered Massage Therapy. You pay at the time of your appointment and receive an official RMT receipt to submit to your insurance provider.",
          },
        },
        {
          "@type": "Question",
          name: "How do I book an ICBC or WCB Registered Massage Therapy appointment?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "If your Registered Massage Therapy visit is covered under ICBC, WCB, RCMP, DVA, or an MSP-exempt program, please call 604-926-4883 directly to schedule. Do not use online booking for these programs.",
          },
        },
      ],
    },
    breadcrumb([
      { name: "Home", url: "https://scandinavianclinic.com/" },
      { name: "Your First Visit", url: "https://scandinavianclinic.com/first-visit" },
    ]),
  ],
};

// =====================================================================
// FACILITIES
// =====================================================================
export const facilitiesSchema = {
  "@context": "https://schema.org",
  "@graph": [
    businessRef,
    {
      "@type": "Place",
      name: "Scandinavian Clinic — Treatment Facility",
      url: "https://scandinavianclinic.com/facilities",
      address: baseAddress,
      geo: baseGeo,
      containedInPlace: businessRef,
    },
    breadcrumb([
      { name: "Home", url: "https://scandinavianclinic.com/" },
      { name: "Facilities", url: "https://scandinavianclinic.com/facilities" },
    ]),
  ],
};

// =====================================================================
// RMT
// =====================================================================
export const rmtSchema = {
  "@context": "https://schema.org",
  "@graph": [
    businessRef,
    {
      "@type": "MedicalWebPage",
      name: "Registered Massage Therapy in North Vancouver",
      url: "https://scandinavianclinic.com/r-m-t",
      description:
        "Clinical Registered Massage Therapy in North Vancouver. Assessment-based treatment for musculoskeletal conditions, sports injuries, and rehabilitation. ICBC and WSBC eligible.",
      about: {
        "@type": "MedicalTherapy",
        name: "Registered Massage Therapy",
        alternateName: "RMT",
      },
      provider: businessRef,
    },
    breadcrumb([
      { name: "Home", url: "https://scandinavianclinic.com/" },
      { name: "RMT", url: "https://scandinavianclinic.com/r-m-t" },
    ]),
  ],
};

// =====================================================================
// DNS
// =====================================================================
export const dnsSchema = {
  "@context": "https://schema.org",
  "@graph": [
    businessRef,
    {
      "@type": "MedicalWebPage",
      name: "Dynamic Neuromuscular Stabilization (DNS) in North Vancouver",
      url: "https://scandinavianclinic.com/how-recovery-works/what-dns-is",
      description:
        "Clinical rehabilitation approach developed at the Prague School of Rehabilitation, targeting core stabilization and motor control for chronic pain, sports injuries, and complex musculoskeletal conditions.",
      about: {
        "@type": "MedicalTherapy",
        name: "Dynamic Neuromuscular Stabilization",
        alternateName: "DNS",
      },
      provider: businessRef,
    },
    breadcrumb([
      { name: "Home", url: "https://scandinavianclinic.com/" },
      { name: "DNS", url: "https://scandinavianclinic.com/how-recovery-works/what-dns-is" },
    ]),
  ],
};

// =====================================================================
// CONTACT
// Primary local-SEO signal — emit the full MedicalBusiness block here too.
// =====================================================================
export const contactSchema = {
  "@context": "https://schema.org",
  "@graph": [
    medicalBusiness,
    {
      "@type": "ContactPage",
      name: "Contact Scandinavian Clinic",
      url: "https://scandinavianclinic.com/contact",
      about: businessRef,
    },
    breadcrumb([
      { name: "Home", url: "https://scandinavianclinic.com/" },
      { name: "Contact", url: "https://scandinavianclinic.com/contact" },
    ]),
  ],
};

// =====================================================================
// CONDITION / OTHER PAGES (unchanged in scope of this update,
// but updated to use the new BUSINESS_ID reference)
// =====================================================================
export const conditionsTreatedSchema = {
  "@context": "https://schema.org",
  "@graph": [
    businessRef,
    {
      "@type": "MedicalWebPage",
      name: "Conditions Treated with Registered Massage Therapy at Scandinavian Clinic",
      about: [
        { "@type": "MedicalCondition", name: "Back Pain" },
        { "@type": "MedicalCondition", name: "Neck Pain" },
        { "@type": "MedicalCondition", name: "Sports Injuries" },
        { "@type": "MedicalCondition", name: "Sciatica" },
        { "@type": "MedicalCondition", name: "Headaches and Migraines" },
        { "@type": "MedicalCondition", name: "Shoulder Injuries" },
        { "@type": "MedicalCondition", name: "TMJ and Jaw Pain" },
        { "@type": "MedicalCondition", name: "Chronic Pain" },
        { "@type": "MedicalCondition", name: "Motor Vehicle Accident Injuries" },
        { "@type": "MedicalCondition", name: "Workplace Injuries" },
      ],
    },
    breadcrumb([
      { name: "Home", url: "https://scandinavianclinic.com/" },
      { name: "Conditions Treated", url: "https://scandinavianclinic.com/conditions" },
    ]),
  ],
};

export const bookingSchema = {
  "@context": "https://schema.org",
  "@graph": [
    businessRef,
    {
      "@type": "WebPage",
      name: "Book an Appointment",
      url: "https://scandinavianclinic.com/booking",
      potentialAction: reserveAction,
    },
    breadcrumb([
      { name: "Home", url: "https://scandinavianclinic.com/" },
      { name: "Book Appointment", url: "https://scandinavianclinic.com/booking" },
    ]),
  ],
};

export const athletesSchema = {
  "@context": "https://schema.org",
  "@graph": [
    businessRef,
    {
      "@type": "MedicalWebPage",
      name: "Athletes and Performance",
      url: "https://scandinavianclinic.com/athletes",
      description: "For North Shore trail runners, riders, skiers and climbers. Assessment of the movement patterns behind recurring overuse injuries.",
      about: businessRef,
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "I'm not injured. Is there any point coming in?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "That's often the better time. An assessment identifies where control runs out before it produces a problem, and changing a pattern is easier when it isn't also painful."
          }
        },
        {
          "@type": "Question",
          name: "Will this make me stronger?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Not directly — it isn't strength training. What it tends to change is how much of your existing strength reaches the movement, and how well the pattern holds under fatigue."
          }
        },
        {
          "@type": "Question",
          name: "Do I have to stop training?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Rarely. More often it's a matter of adjusting what and how much while the pattern is being changed. What that looks like depends on the assessment and on what you're training for."
          }
        },
        {
          "@type": "Question",
          name: "How long does it take?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The examination gives an answer in the first session. Changing a pattern usually needs ten to fifteen minutes of daily practice, and how long depends on how long the compensation has been in place."
          }
        },
        {
          "@type": "Question",
          name: "I've had this looked at and been told everything is fine.",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Structural assessment and movement assessment answer different questions. 'Nothing is torn' and 'the movement is well organised' aren't the same finding."
          }
        },
        {
          "@type": "Question",
          name: "Is this covered by insurance?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Treatment is Registered Massage Therapy and is covered by most BC extended health plans."
          }
        }
      ]
    },
    breadcrumb([
      { name: "Home", url: "https://scandinavianclinic.com/" },
      { name: "Athletes and Performance", url: "https://scandinavianclinic.com/athletes" },
    ]),
  ],
};

export const feesSchema = {
  "@context": "https://schema.org",
  "@graph": [
    businessRef,
    {
      "@type": "MedicalWebPage",
      name: "Fees and Insurance",
      url: "https://scandinavianclinic.com/fees",
      description: "Registered Massage Therapy fees and extended health insurance coverage information.",
      about: businessRef,
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Is the assessment charged separately?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. The assessment is part of your first appointment, not an additional fee. A 60-minute initial visit covers the history, the examination and treatment based on what's found."
          }
        },
        {
          "@type": "Question",
          name: "How many sessions will I need?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "It depends on what the examination finds. Some acute problems settle in two or three sessions; patterns built up over years take longer. You'll get a realistic estimate after the assessment rather than a package sold upfront."
          }
        },
        {
          "@type": "Question",
          name: "Do you offer packages or prepaid blocks?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. Sessions are booked and paid for individually, so the number of visits follows what you actually need."
          }
        },
        {
          "@type": "Question",
          name: "What if my plan covers less than the full fee?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You pay the full fee at the appointment and submit the receipt to your provider, who reimburses at whatever rate your plan allows. The difference is yours."
          }
        }
      ]
    },
    breadcrumb([
      { name: "Home", url: "https://scandinavianclinic.com/" },
      { name: "Fees and Insurance", url: "https://scandinavianclinic.com/fees" },
    ]),
  ],
};

export const neckPainSchema = {
  "@context": "https://schema.org",
  "@graph": [
    businessRef,
    {
      "@type": "MedicalWebPage",
      name: "Neck Pain & Whiplash Treatment in North Vancouver",
      url: "https://scandinavianclinic.com/conditions/neck-pain-and-whiplash-treatment-north-vancouver",
      description: "Most neck pain comes from posture, muscle tension, and everyday load on the neck's joints. Whiplash is a distinct injury with its own recovery pattern. North Vancouver RMT.",
      about: {
        "@type": "MedicalCondition",
        name: "Neck Pain"
      }
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Can neck pain cause headaches?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Tight muscles and joint restriction at the base of the skull can produce cervicogenic headaches — distinct from migraine, though the two often overlap. Neck pain is actually a more common migraine symptom than nausea (Calhoun et al., 2010), so telling them apart is important."
          }
        },
        {
          "@type": "Question",
          name: "How long does whiplash take to heal?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most people improve within a few months, and ICBC notes most people recover within 12 weeks of a crash. More significant injuries can take longer, and early, active management helps."
          }
        },
        {
          "@type": "Question",
          name: "Should I rest my neck after a whiplash injury?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Generally no. Current guidance favours early, gentle movement and a return to normal activity over prolonged rest or a collar (Wong et al., 2014)."
          }
        },
        {
          "@type": "Question",
          name: "When should I see a doctor instead of booking massage therapy?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Seek immediate care for sudden severe neck pain or headache with dizziness, double vision, facial numbness, or difficulty speaking; for fever with neck stiffness; or for new numbness or weakness in the limbs. Neck pain after a car accident, fall, or significant trauma should be evaluated promptly."
          }
        },
        {
          "@type": "Question",
          name: "Is massage therapy safe and effective for neck pain?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "For most neck pain, yes. There is moderate evidence that massage improves neck pain compared with inactive treatment (Cheng & Huang, 2014). Gentle, assessment-guided treatment is the appropriate approach."
          }
        },
        {
          "@type": "Question",
          name: "Does ICBC cover treatment for whiplash from a car accident?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Registered Massage Therapy for whiplash following a motor vehicle accident in BC is commonly covered, though the specific claims process depends on your circumstances. Call the clinic and we can talk you through arranging an ICBC visit."
          }
        }
      ]
    },
    breadcrumb([
      { name: "Home", url: "https://scandinavianclinic.com/" },
      { name: "Conditions", url: "https://scandinavianclinic.com/conditions" },
      { name: "Neck Pain & Whiplash", url: "https://scandinavianclinic.com/conditions/neck-pain-and-whiplash-treatment-north-vancouver" },
    ]),
  ],
};

export const sciaticaSchema = {
  "@context": "https://schema.org",
  "@graph": [
    businessRef,
    {
      "@type": "MedicalWebPage",
      name: "Sciatica Treatment in North Vancouver",
      url: "https://scandinavianclinic.com/conditions/sciatica-treatment-north-vancouver",
      description: "Sciatica is nerve pain from the lower back down the leg — with several possible causes that need different treatment. What's actually driving it, what the evidence supports, and how assessment-based RMT care helps. North Vancouver.",
      about: {
        "@type": "MedicalCondition",
        name: "Sciatica"
      }
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Is sciatica the same as a slipped disc?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Not exactly. A herniated or bulging disc is one cause of sciatica, but \"sciatica\" describes the resulting nerve-pain pattern rather than the disc problem itself. Spinal stenosis, piriformis-related irritation, and a sensitized nerve can, at times, all produce similar symptoms."
          }
        },
        {
          "@type": "Question",
          name: "How do I know if my leg pain is sciatica or something else, like piriformis syndrome?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The location and pattern of pain, plus specific movement and positioning tests, help tell a spinal cause apart from a muscular one such as piriformis-related irritation. An in-person assessment is the most reliable way to know — the two can feel almost identical but respond to different treatment."
          }
        },
        {
          "@type": "Question",
          name: "Can massage by itself help with sciatica?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Massage may help reduce the muscle tension and restriction that contribute to nerve irritation, and some studies show benefits for pain and mobility [9]. It's generally most effective as part of a broader plan that includes movement-based rehabilitation, rather than on its own."
          }
        },
        {
          "@type": "Question",
          name: "Should I rest or stay active with sciatica?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "For most people, staying as active as symptoms allow is better than prolonged rest, which tends to prolong symptoms. Your assessment will include which specific positions and movements reduce nerve loading for you."
          }
        },
        {
          "@type": "Question",
          name: "When should I see a doctor instead of booking an appointment?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "If leg pain comes with new bladder or bowel changes, saddle numbness, or weakness in both legs, seek emergency care immediately. Outside of those red flags, sciatica is very treatable with conservative care."
          }
        },
        {
          "@type": "Question",
          name: "How many sessions will it take?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "It depends on the cause and how long symptoms have been present. After the initial visit, we can usually give you a realistic estimate."
          }
        }
      ]
    },
    breadcrumb([
      { name: "Home", url: "https://scandinavianclinic.com/" },
      { name: "Conditions", url: "https://scandinavianclinic.com/conditions" },
      { name: "Sciatica", url: "https://scandinavianclinic.com/conditions/sciatica-treatment-north-vancouver" },
    ]),
  ],
};

export const shoulderPainSchema = {
  "@context": "https://schema.org",
  "@graph": [
    businessRef,
    {
      "@type": "MedicalWebPage",
      name: "Shoulder Pain Treatment in North Vancouver",
      url: "https://scandinavianclinic.com/conditions/shoulder-pain-treatment-north-vancouver",
      description: "Shoulder pain is not a single condition. The diagnosis matters because treatments diverge. Get a targeted assessment to find the root cause.",
      about: {
        "@type": "MedicalCondition",
        name: "Shoulder Pain"
      }
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Why does my shoulder hurt when I never injured it?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Because the shoulder relies heavily on the neck, mid-back, ribs, and shoulder blade to function properly. When those regions don't do their share, the shoulder carries more load than it was designed for. Gradual-onset shoulder pain usually follows this pattern rather than a single traumatic moment."
          }
        },
        {
          "@type": "Question",
          name: "Why do I need an assessment — isn't shoulder pain just shoulder pain?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. At least a dozen distinct conditions cause shoulder pain, and they require different approaches."
          }
        },
        {
          "@type": "Question",
          name: "Do I need surgery?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Usually not. Structured exercise-based rehabilitation is the recommended first-line approach for most rotator cuff–related shoulder pain, ahead of corticosteroid injections or surgery (Pieters et al., 2020)."
          }
        },
        {
          "@type": "Question",
          name: "Is my rotator cuff torn?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "It might be, but that may matter less than you think. Rotator cuff changes and asymptomatic tears are very common as we age. A finding on a scan does not automatically prove it is the primary source of your symptoms."
          }
        },
        {
          "@type": "Question",
          name: "Why would you treat my mid-back or neck for shoulder pain?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Because the arm cannot reach fully overhead without the mid-back extending and rotating, and because neck dysfunction frequently refers pain directly into the shoulder. Overhead reach often improves immediately after freeing up thoracic and rib restrictions."
          }
        },
        {
          "@type": "Question",
          name: "Why aren't you starting me on rotator cuff strengthening exercises right away?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Because loading a joint that isn't tracking properly reinforces the dysfunction that caused the pain. Restoring joint centration and movement quality comes first; strengthening follows."
          }
        },
        {
          "@type": "Question",
          name: "Can posture really affect my shoulder?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. The alignment of your ribcage directly dictates where your shoulder blade rests, changing muscle tension and limiting how far the blade can travel when you lift your arm."
          }
        },
        {
          "@type": "Question",
          name: "Does massage help shoulder pain?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Relieving tension in overactive muscles around the neck, chest, and shoulder blade is an effective part of treatment when combined with joint mobilization and movement retraining."
          }
        }
      ]
    },
    breadcrumb([
      { name: "Home", url: "https://scandinavianclinic.com/" },
      { name: "Conditions", url: "https://scandinavianclinic.com/conditions" },
      { name: "Shoulder Pain", url: "https://scandinavianclinic.com/conditions/shoulder-pain-treatment-north-vancouver" },
    ]),
  ],
};

export const tennisElbowSchema = {
  "@context": "https://schema.org",
  "@graph": [
    businessRef,
    {
      "@type": "MedicalWebPage",
      name: "Tennis Elbow Treatment in North Vancouver",
      url: "https://scandinavianclinic.com/conditions/tennis-elbow-treatment-north-vancouver",
      description: "Tennis elbow is pain on the outside of the elbow, felt most when you grip or twist. Commonly the elbow is the end point of a functional disturbance elsewhere.",
      about: {
        "@type": "MedicalCondition",
        name: "Tennis Elbow"
      }
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Why would my neck matter if my elbow is what hurts?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The nerves supplying your forearm come from the neck, and the shoulder blade sets the base your arm works from. In one study of people with tennis elbow who reported no neck symptoms, over a third still had measurable cervical dysfunction on examination and 41% had a positive nerve-tension test (Coombes et al., 2014)."
          }
        },
        {
          "@type": "Question",
          name: "Can you get tennis elbow without playing tennis?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes — most people who get it never have. Lifting, climbing, painting, trades work, mouse use and repetitive kitchen tasks all bring it on. Those activities provoke the pain; the reason your arm can't tolerate them is what the assessment looks for."
          }
        },
        {
          "@type": "Question",
          name: "Is tennis elbow an inflammation?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Not in the way most people assume. Where tendon change is present it is degenerative rather than actively inflamed — which is why rest and anti-inflammatories often don't resolve it."
          }
        },
        {
          "@type": "Question",
          name: "I had a scan that showed tendon damage. Doesn't that settle it?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Imaging findings in tennis elbow don't reliably track with how much pain or difficulty people have (Chourasia et al., 2013), and the same changes appear in a large share of people with no symptoms — around 60% of people aged 55 to 65 (Paluch et al., 2022)."
          }
        },
        {
          "@type": "Question",
          name: "Why does it keep coming back after it feels better?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Because what was driving it was still there. Pain settles when the tissue is rested; if the joint restrictions, muscle tone and grip pattern that overloaded the arm haven't changed, returning to the same demands reproduces the problem."
          }
        },
        {
          "@type": "Question",
          name: "Why didn't my brace or my injection work?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A brace changes where load falls; it doesn't change what's producing the load. A steroid injection gives good short-term relief and has been shown to produce worse long-term outcomes with a high recurrence rate (Bisset et al., BMJ, 2006)."
          }
        },
        {
          "@type": "Question",
          name: "Do I have to stop training or playing my sport?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Usually not entirely. Modifying the movement that aggravates it — grip, load, technique, equipment — while keeping the rest of your activity going is generally more workable than stopping."
          }
        }
      ]
    },
    breadcrumb([
      { name: "Home", url: "https://scandinavianclinic.com/" },
      { name: "Conditions", url: "https://scandinavianclinic.com/conditions" },
      { name: "Tennis Elbow", url: "https://scandinavianclinic.com/conditions/tennis-elbow-treatment-north-vancouver" },
    ]),
  ],
};

export const coreStabilitySchema = {
  "@context": "https://schema.org",
  "@graph": [
    businessRef,
    {
      "@type": "MedicalWebPage",
      name: "Core Stability and Breathing | Scandinavian Clinic",
      description: "What's the difference between core strength and core stability? Why breathing and intra-abdominal pressure matter for back pain and recovery.",
    },
    breadcrumb([
      { name: "Home", url: "https://scandinavianclinic.com/" },
      { name: "How Recovery Works", url: "https://scandinavianclinic.com/how-recovery-works" },
      { name: "Core Stability and Breathing", url: "https://scandinavianclinic.com/how-recovery-works/core-stability-and-breathing" },
    ]),
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Why don't my ab exercises help my back?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Because most of them train force production, and the problem is usually timing and pressure. An exercise can be done well and still leave the underlying pattern unchanged — the superficial muscles carry the load while the deep system stays late."
          }
        },
        {
          "@type": "Question",
          name: "So should I stop doing planks and crunches?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Not necessarily. They're not harmful, and strength has its place. They're just not the thing that changes stability. The order matters more than the exclusion: establish the pattern, then load it."
          }
        },
        {
          "@type": "Question",
          name: "I don't have any trouble breathing. Why would this apply to me?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most people with an inefficient breathing pattern breathe perfectly comfortably. Nothing feels wrong, because the pattern has been the normal one for years. What's affected isn't how breathing feels — it's how well the trunk is supported while you move."
          }
        },
        {
          "@type": "Question",
          name: "Isn't this just belly breathing?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. Pushing the abdomen forward while the lower ribs stay still is its own fault pattern. What's being trained is expansion of the lower ribcage in every direction — sides and back as well as front — with even pressure distribution."
          }
        },
        {
          "@type": "Question",
          name: "How is this different from breathing exercises for stress or relaxation?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Slow breathing for relaxation works on the nervous system's arousal level, and does that well. This work is about the mechanics of how the trunk is supported during movement and load. Both are useful; they're aimed at different things."
          }
        },
        {
          "@type": "Question",
          name: "Should I hollow or brace?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Neither, as a starting point. Both are conscious cues layered on top of a system that should be running by itself. The work is on restoring the automatic version first."
          }
        },
        {
          "@type": "Question",
          name: "How long does it take?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ten to fifteen minutes of daily practice is usually what's needed before the pattern starts running by itself. The timeline depends far more on the home practice than on how often you're seen."
          }
        }
      ]
    }
  ]
};

export const postureSchema = {
  "@context": "https://schema.org",
  "@graph": [
    businessRef,
    {
      "@type": "MedicalWebPage",
      name: "Posture | Scandinavian Clinic",
      description: "Why 'Sit Up Straight' doesn't work long-term. Learn how the deep stabilising system affects posture.",
    },
    breadcrumb([
      { name: "Home", url: "https://scandinavianclinic.com/" },
      { name: "How Recovery Works", url: "https://scandinavianclinic.com/how-recovery-works" },
      { name: "Posture", url: "https://scandinavianclinic.com/how-recovery-works/posture" },
    ]),
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Do posture correctors and braces work?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "They hold you in a shape while you wear them. What they don't do is change how the deep system organises stabilisation, so the effect tends to stop when the brace comes off. Some people find them useful as a short-term reminder; they aren't a way of retraining the pattern."
          }
        },
        {
          "@type": "Question",
          name: "Will a standing desk fix this?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "It changes what you're loading rather than removing the load. Standing all day produces its own pattern. What helps more than either is variety — changing position regularly, which most people find easier with a desk that adjusts than without one."
          }
        },
        {
          "@type": "Question",
          name: "Is bad posture the cause of my neck and shoulder pain?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sometimes it's part of it, and it's rarely the whole story. What an assessment establishes is which findings actually relate to your symptoms, rather than assuming the connection. See the neck pain page."
          }
        },
        {
          "@type": "Question",
          name: "How long does it take to change?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The pattern usually needs ten to fifteen minutes of daily practice before it starts running by itself, and that timeline depends far more on the home practice than on how often you're seen."
          }
        },
        {
          "@type": "Question",
          name: "Do I need to think about my posture during the day?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "That's what the work is trying to make unnecessary. Consciously holding a position is the thing that hasn't worked; the aim is for upright posture to require no attention."
          }
        },
        {
          "@type": "Question",
          name: "My posture looks fine but I'm still in pain. Is this still relevant?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "It can be. How a posture looks from the outside and how it's being held from the inside are different questions — someone can look well aligned while the superficial muscles are doing all the work to keep it that way."
          }
        }
      ]
    }
  ]
};

export const whatDnsIsSchema = {
  "@context": "https://schema.org",
  "@graph": [
    businessRef,
    {
      "@type": "MedicalWebPage",
      name: "What is DNS? | Scandinavian Clinic",
      description: "What is Dynamic Neuromuscular Stabilisation (DNS) and how is it used to treat pain?",
    },
    breadcrumb([
      { name: "Home", url: "https://scandinavianclinic.com/" },
      { name: "How Recovery Works", url: "https://scandinavianclinic.com/how-recovery-works" },
      { name: "What is DNS?", url: "https://scandinavianclinic.com/how-recovery-works/what-dns-is" },
    ]),
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Is DNS the same as physiotherapy?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No — DNS isn't a profession. It's a training that clinicians from a range of backgrounds take: physiotherapists, massage therapists, chiropractors, athletic trainers and physicians all attend the same courses. At Scandinavian Clinic it's used within Registered Massage Therapy, alongside manual treatment."
          }
        },
        {
          "@type": "Question",
          name: "Is it the same as Pilates or core training?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. Pilates and core training build strength and control through exercise. DNS works on the timing and coordination underneath — whether the deep system activates before you move, and whether pressure is generated evenly. The two aren't in conflict; they're aimed at different things."
          }
        },
        {
          "@type": "Question",
          name: "Do I need to be in pain to benefit?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. Plenty of people come because a movement doesn't feel right, because performance has plateaued, or because they want to keep doing something for another twenty years."
          }
        },
        {
          "@type": "Question",
          name: "Are the exercises hard?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Not in the way you'd expect. They're low-load and slow, and most people find them surprisingly demanding anyway — holding a precise pattern is different from working hard."
          }
        },
        {
          "@type": "Question",
          name: "Do I need to keep doing them forever?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. The aim is for the pattern to become automatic, at which point it runs without practice. How long that takes depends on how long the compensation has been in place."
          }
        },
        {
          "@type": "Question",
          name: "Is DNS covered by insurance?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Treatment at Scandinavian Clinic is Registered Massage Therapy, and DNS is used within it. Sessions are covered as RMT by most BC extended health plans. Fees and insurance"
          }
        },
        {
          "@type": "Question",
          name: "Where does DNS come from?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "It was developed at the Prague School of Rehabilitation Medicine in the Czech Republic, from research into developmental kinesiology — how movement control emerges in infancy."
          }
        }
      ]
    }
  ]
};

export const whyPainReturnsSchema = {
  "@context": "https://schema.org",
  "@graph": [
    businessRef,
    {
      "@type": "MedicalWebPage",
      name: "Why Pain Keeps Coming Back | Scandinavian Clinic",
      description: "Understanding why muscle and joint pain returns after treatment, and what an assessment finds that treating only the painful area misses.",
    },
    breadcrumb([
      { name: "Home", url: "https://scandinavianclinic.com/" },
      { name: "How Recovery Works", url: "https://scandinavianclinic.com/how-recovery-works" },
      { name: "Why Pain Keeps Coming Back", url: "https://scandinavianclinic.com/how-recovery-works/why-pain-keeps-coming-back" },
    ]),
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Should I see a chiropractor, physiotherapist or massage therapist for pain that keeps coming back?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Any of them can help — they're different tools and the right one depends on your situation. What matters more than the profession is whether the driver gets assessed rather than only the painful area. Recurring pain in particular tends to need a look at how you move and stabilise as a whole."
          }
        },
        {
          "@type": "Question",
          name: "My physiotherapy isn't helping my sciatica. What should I do?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sciatica is often produced by patterns in the back, pelvis and hips rather than at the point where the pain is felt. If treatment hasn't reached lasting relief, it's worth having the whole pattern assessed to find what's loading the nerve upstream."
          }
        },
        {
          "@type": "Question",
          name: "Does \"the nervous system has become more sensitive\" mean it's in my head?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. Central sensitisation is a physical change in how the nervous system processes signals (Woolf, 2011). The pain is real. It explains why pain can persist after an injury has healed, and why retraining and desensitising the system can matter alongside treating tissue."
          }
        },
        {
          "@type": "Question",
          name: "How long until it stops coming back?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "It depends on what the assessment finds and how long the pattern has been there. Some things settle quickly; long-standing patterns need consistent retraining, usually with short daily practice. You'll get a realistic picture after the examination rather than a standard package."
          }
        },
        {
          "@type": "Question",
          name: "Can I just do the exercises from a video?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The exercises look simple, and their value depends on the activation being correct — it's easy to reproduce the old compensatory pattern without realising. Real-time correction is what makes the difference, at least until the pattern is established."
          }
        },
        {
          "@type": "Question",
          name: "Is it too late if this has been going on for years?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. The motor-pattern research above was done in people with recurrent pain, some long-standing, and the pattern still changed in two weeks of specific training. Long-standing problems take longer, but duration on its own doesn't rule out change."
          }
        },
        {
          "@type": "Question",
          name: "Is this covered by insurance?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Eva is a Registered Massage Therapist, so sessions are covered as RMT by most BC extended health plans, and you'll receive an official RMT receipt. For ICBC, WorkSafeBC or similar, call (604) 926-4883 before booking."
          }
        }
      ]
    }
  ]
};

export const backPainSchema = {
  "@context": "https://schema.org",
  "@graph": [
    businessRef,
    {
      "@type": "MedicalWebPage",
      name: "Back Pain Treatment in North Vancouver | Scandinavian Clinic",
      url: "https://scandinavianclinic.com/conditions/back-pain-treatment-north-vancouver",
      description: "For most back pain, no single damaged structure can be identified. What can usually be found is a movement problem.",
      about: {
        "@type": "MedicalCondition",
        name: "Back Pain"
      }
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Is my back pain serious?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most back pain is not dangerous, even when it's very painful. The signs that need urgent care are new bladder or bowel changes, numbness around the groin or inner thighs, or new weakness in both legs. Back pain after a major injury, or with fever or unexplained weight loss, needs prompt medical review."
          }
        },
        {
          "@type": "Question",
          name: "Do I need an MRI or X-ray?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Usually not, early on. Degenerative findings are present in most people without pain — disc degeneration in 37% of asymptomatic 20-year-olds and 96% of asymptomatic 80-year-olds (Brinjikji et al., 2015) — so a scan often reports changes that aren't causing the symptoms. Guidelines advise against routine early imaging for ordinary back pain (Foster et al., 2018)."
          }
        },
        {
          "@type": "Question",
          name: "My scan showed disc degeneration. Isn't that the cause?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Not necessarily. Those changes are largely part of getting older and are found in the great majority of people over fifty who have no back pain at all. What the assessment looks for is what's actually loading the area now."
          }
        },
        {
          "@type": "Question",
          name: "Should I rest or stay active?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Stay as active as your pain allows. Guidelines favour movement and a return to normal activity over rest (Foster et al., 2018)."
          }
        },
        {
          "@type": "Question",
          name: "Why would you look at my breathing for back pain?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Because the diaphragm helps stabilise the lumbar spine, not just move air. People with chronic low back pain show measurably smaller diaphragm movement during arm and leg loading than people without it (Kolář et al., 2012)."
          }
        },
        {
          "@type": "Question",
          name: "Is massage enough on its own?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Massage relieves pain and tension and is a key part of the treatment. For back pain that lasts or recurs, it works alongside restoring movement and retraining how the area is loaded."
          }
        }
      ]
    },
    breadcrumb([
      { name: "Home", url: "https://scandinavianclinic.com/" },
      { name: "Conditions", url: "https://scandinavianclinic.com/conditions" },
      { name: "Back Pain", url: "https://scandinavianclinic.com/conditions/back-pain-treatment-north-vancouver" },
    ]),
  ],
};

export const footAndAnklePainSchema = {
  "@context": "https://schema.org",
  "@graph": [
    businessRef,
    {
      "@type": "MedicalWebPage",
      name: "Foot and Ankle Pain Treatment in North Vancouver | Scandinavian Clinic",
      url: "https://scandinavianclinic.com/conditions/foot-and-ankle-pain-treatment-north-vancouver",
      description: "The most common cause of heel and foot pain is plantar fasciitis. Learn how foot mechanics affect your knees, hips, and back, and how orthotics can help.",
      about: {
        "@type": "MedicalCondition",
        name: "Foot and Ankle Pain"
      }
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Why does my heel hurt most in the morning?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "That first-step pain is classic plantar fasciitis: the fascia tightens overnight, and the first steps after rest load it suddenly. It usually eases with movement and returns after long standing."
          }
        },
        {
          "@type": "Question",
          name: "Why didn't my orthotics fix my foot pain?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Orthotics usually work best combined with exercise and the right footwear, and first fittings often need adjustment. Many people get relief only after professional follow-up and refinement — not from a one-time, off-the-shelf insert."
          }
        },
        {
          "@type": "Question",
          name: "Can foot problems really cause knee or hip pain?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "There's a well-documented biomechanical chain: foot overpronation is linked to inward rotation of the shin and increased pelvic tilt, which can add strain at the knee and hip. It's a real contributing factor worth assessing — strongest for the knee."
          }
        },
        {
          "@type": "Question",
          name: "Will orthotics fix my back pain if it's caused by my feet?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Honestly, that's uncertain. The theory is reasonable, but trials haven't shown a clear benefit of foot orthotics for low-back pain specifically — so we'd treat your feet as one part of a broader assessment, not an assumed fix."
          }
        },
        {
          "@type": "Question",
          name: "Do I need custom orthotics, or will store-bought inserts work?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Custom-fitted orthotics have stronger evidence than generic inserts, particularly when properly fitted and followed up by a trained pedorthist. For milder cases, supportive footwear and exercise sometimes do the job."
          }
        },
        {
          "@type": "Question",
          name: "When should I see someone about foot pain instead of treating it myself?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Seek prompt evaluation for inability to bear weight after an injury, significant swelling or fever, or numbness and tingling — and consider a professional assessment if heel pain hasn't improved after a few months of self-care."
          }
        }
      ]
    },
    breadcrumb([
      { name: "Home", url: "https://scandinavianclinic.com/" },
      { name: "Conditions", url: "https://scandinavianclinic.com/conditions" },
      { name: "Foot and Ankle Pain", url: "https://scandinavianclinic.com/conditions/foot-and-ankle-pain-treatment-north-vancouver" },
    ]),
  ],
};

export const headacheSchema = {
  "@context": "https://schema.org",
  "@graph": [
    businessRef,
    {
      "@type": "MedicalWebPage",
      name: "Headache Treatment in North Vancouver | Scandinavian Clinic",
      url: "https://scandinavianclinic.com/conditions/headache-treatment-north-vancouver",
      description: "Can your neck cause headaches? Often, yes. Eva Andersson, RMT, uses clinical massage therapy to assess and treat the neck contributors to your headaches.",
      about: {
        "@type": "MedicalCondition",
        name: "Headache"
      }
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How do I know if my headache is coming from my neck?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Features that point toward a neck source include one-sided pain that starts at the base of the skull, headaches brought on by certain neck movements or sustained positions, and reduced neck movement. An assessment helps clarify whether the neck is contributing."
          }
        },
        {
          "@type": "Question",
          name: "Why do I keep getting confused between headache types?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "It's a genuinely common problem: neck-related headache, tension headache, and migraine share overlapping symptoms because their pain pathways converge on the same brainstem relay (the trigeminocervical nucleus)."
          }
        },
        {
          "@type": "Question",
          name: "Can poor posture from desk work really cause headaches?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "It can contribute. Prolonged forward-head posture loads the upper neck and commonly goes with weak deep neck flexors — both associated with neck-related headache."
          }
        },
        {
          "@type": "Question",
          name: "Does massage or manual therapy actually help headaches?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "It depends on the type. Hands-on treatment (with exercise) has strong evidence for neck-related headache, and soft-tissue techniques help tension-type headache. It's most effective combined with deep neck flexor exercise rather than on its own (Jull et al., 2002)."
          }
        },
        {
          "@type": "Question",
          name: "When should I see a doctor instead of starting treatment myself?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Seek prompt medical care for a sudden, severe \"worst-ever\" headache, a headache after a head or neck injury, or a headache with fever, confusion, vision changes, or one-sided weakness."
          }
        }
      ]
    },
    breadcrumb([
      { name: "Home", url: "https://scandinavianclinic.com/" },
      { name: "Conditions", url: "https://scandinavianclinic.com/conditions" },
      { name: "Headache", url: "https://scandinavianclinic.com/conditions/headache-treatment-north-vancouver" },
    ]),
  ],
};

export const hipPainSchema = {
  "@context": "https://schema.org",
  "@graph": [
    businessRef,
    {
      "@type": "MedicalWebPage",
      name: "Hip Pain Treatment in North Vancouver | Scandinavian Clinic",
      url: "https://scandinavianclinic.com/conditions/hip-pain-treatment-north-vancouver",
      description: "Hip pain quietly reshapes your day. At Scandinavian Clinic, Eva Andersson, RMT, addresses the movement patterns contributing to your symptoms. North Vancouver RMT.",
      about: {
        "@type": "MedicalCondition",
        name: "Hip Pain"
      }
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Why does my hip hurt after sitting all day, even without an injury?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "It's commonly linked to a muscle-imbalance pattern from prolonged sitting — tight hip flexors with weaker, underactive glutes (lower crossed syndrome) — which changes how load moves through the hip and lower back. It's a useful lens, though the exact mechanism is still debated, so it's assessed individually."
          }
        },
        {
          "@type": "Question",
          name: "Is my hip pain bursitis or arthritis?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Pain over the point of the hip, worse lying on that side, is usually a lateral-hip tendon problem (greater trochanteric pain syndrome, often called bursitis); deeper groin pain with morning stiffness is more typical of arthritis. An assessment helps tell them apart, because they're managed differently."
          }
        },
        {
          "@type": "Question",
          name: "Does hip pain affect my lower back, or vice versa?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Often, yes — the hip and lower back work as a connected system, and addressing hip and pelvic function alongside back care has been shown to improve outcomes more than treating the back alone."
          }
        },
        {
          "@type": "Question",
          name: "Does massage or manual therapy help with hip pain?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "It can, particularly in the short term and combined with exercise. For arthritic hip pain, the evidence for long-term added benefit of manual therapy over exercise alone is limited, so a lasting plan should also include strengthening (Sampath et al., 2016; JOSPT, 2022)."
          }
        },
        {
          "@type": "Question",
          name: "Can strengthening my glutes actually fix hip pain?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "For pain linked to sitting and muscle imbalance, rebuilding gluteal strength and activation (alongside easing hip-flexor tightness) is a reasonable, evidence-consistent approach — best guided by an assessment rather than a generic routine."
          }
        },
        {
          "@type": "Question",
          name: "When should I see a doctor instead of starting treatment myself?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Seek prompt care for sudden inability to bear weight after a fall, significant swelling or fever, or hip pain with unexplained weight loss."
          }
        }
      ]
    },
    breadcrumb([
      { name: "Home", url: "https://scandinavianclinic.com/" },
      { name: "Conditions", url: "https://scandinavianclinic.com/conditions" },
      { name: "Hip Pain", url: "https://scandinavianclinic.com/conditions/hip-pain-treatment-north-vancouver" },
    ]),
  ],
};
