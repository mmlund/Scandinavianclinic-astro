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
  latitude: 49.3231,
  longitude: -123.0726,
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
        url: "https://scandinavianclinic.com/d-n-s",
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

const videoObject = (v: {
  name: string;
  description: string;
  thumbnailUrl: string;
  embedUrl: string;
}) => ({
  "@type": "VideoObject",
  name: v.name,
  description: v.description,
  thumbnailUrl: v.thumbnailUrl,
  embedUrl: v.embedUrl,
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
      url: "https://scandinavianclinic.com/about-me"
    },
    conditionsItemList,
    videoObject({
      name: "Dynamic Neuromuscular Stabilization",
      description: "Fast-growing active treatment method for training and pain prevention, rehabilitation and and athletic performance improvement. DNS stabilizes core muscles: diaphragm, pelvic floor, and all parts of the abdominal wall.",
      thumbnailUrl: "https://i.ytimg.com/vi/Dt-hermwK3U/hqdefault.jpg",
      embedUrl: "https://www.youtube-nocookie.com/embed/Dt-hermwK3U"
    }),
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
      url: "https://scandinavianclinic.com/d-n-s",
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
      { name: "DNS", url: "https://scandinavianclinic.com/d-n-s" },
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
