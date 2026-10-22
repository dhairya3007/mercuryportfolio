/**
 * Mercury Infotech - Central Dynamic Portfolio Data Source
 * 
 * Each entry adheres to the client portfolio specifications.
 * Adding a new project only requires adding an entry here and corresponding assets in public/assets.
 */

export const portfolioProjects = [
  {
    id: "apex-logistics",
    clientName: "Apex Logistics UK",
    clientLogo: "/assets/clients/apex-logistics.svg",
    projectTitle: "Real-Time Fleet & Telematics Dispatch Platform",
    category: "Web Applications",
    shortDescription: "End-to-end cloud dispatch and live telematics platform serving cross-UK freight operations.",
    overview: "We architected and engineered a mission-critical web application for Apex Logistics UK to replace legacy manual dispatch spreadsheets. The platform integrates live GPS telematics, predictive arrival windows, route optimisation, and automated proof-of-delivery processing into a responsive real-time operations console.",
    services: [
      "Full-Stack Web Application",
      "UI/UX Design & Prototyping",
      "Live GPS & WebSockets Integration",
      "Operations Dashboard & Reporting"
    ],
    technologies: ["React", "Node.js", "WebSockets", "Mapbox GL", "PostgreSQL", "Tailored CSS"],
    features: [
      "Real-time vehicle map tracking with sub-second position updates",
      "Dynamic driver schedule allocation & automated route dispatch",
      "Instant push notifications for delivery exceptions & delays",
      "Comprehensive fuel consumption and fleet KPI analytics suite",
      "Granular role-based access for dispatchers, drivers, and fleet managers"
    ],
    screenshots: [
      "/assets/projects/apex-logistics.webp"
    ],
    liveUrl: "https://mercuryinfotech.co.uk/",
    featured: true,
    year: "2026",
    completionTime: "8 Weeks",
    clientIndustry: "Transport & Logistics"
  },
  {
    id: "kenton-legal",
    clientName: "Kenton & Harrow Legal Chambers",
    clientLogo: "/assets/clients/kenton-legal.svg",
    projectTitle: "Barrister Practice Platform & Confidential Intake Portal",
    category: "Website Development",
    shortDescription: "High-trust digital presence with secure consultation booking and practice area discovery.",
    overview: "Designed for a distinguished London-based legal practice, this digital platform establishes immediate authority and trustworthiness. It features an encrypted case evaluation workflow, custom barrister profile directories, and an automated appointment scheduling pipeline built to stringent UK legal compliance standards.",
    services: [
      "Bespoke Responsive Website",
      "Confidential Intake Architecture",
      "Barrister Directory Engine",
      "SEO & High-Performance Optimization"
    ],
    technologies: ["React", "Vite", "Modern CSS", "Accessibility WCAG AA", "REST API"],
    features: [
      "Confidential multi-step legal inquiry and case pre-screening",
      "Interactive solicitor appointment booking calendar",
      "Searchable legal specialism catalog with case studies",
      "Full compliance with Solicitors Regulation Authority digital guidelines",
      "Sub-second load times on mobile devices across 4G and 5G networks"
    ],
    screenshots: [
      "/assets/projects/kenton-legal.webp"
    ],
    liveUrl: "https://mercuryinfotech.co.uk/",
    featured: false,
    year: "2026",
    completionTime: "5 Weeks",
    clientIndustry: "Legal & Professional Services"
  },
  {
    id: "vanguard-crm",
    clientName: "Vanguard Health & Dental Clinic",
    clientLogo: "/assets/clients/vanguard-crm.svg",
    projectTitle: "Patient Relationship Management & Booking CRM",
    category: "CRM & Business Solutions",
    shortDescription: "Integrated clinic operations CRM reducing no-shows and automating patient care workflows.",
    overview: "Vanguard Clinic required a unified digital hub to streamline patient intake, practitioner calendars, and follow-up care reminders. We engineered a HIPAA/GDPR-compliant web CRM that connects the clinic's front-desk reception, clinical staff, and patients with instant SMS notifications and automated recalls.",
    services: [
      "Custom CRM Development",
      "Appointment Scheduling Engine",
      "Automated SMS & Email Pipeline",
      "Data Migration & Staff Training"
    ],
    technologies: ["React", "Express", "PostgreSQL", "Twilio API", "Chart.js"],
    features: [
      "Multi-practitioner colour-coded weekly calendar with drag-and-drop rescheduling",
      "Automated SMS confirmation and 24-hour reminder triggers",
      "Secure digital patient medical history logs and intake notes",
      "Real-time revenue, patient retention, and appointment completion metrics",
      "GDPR-compliant data protection and encrypted access controls"
    ],
    screenshots: [
      "/assets/projects/vanguard-crm.webp"
    ],
    liveUrl: "https://mercuryinfotech.co.uk/",
    featured: false,
    year: "2026",
    completionTime: "7 Weeks",
    clientIndustry: "Healthcare & Private Clinics"
  },
  {
    id: "novapay-terminal",
    clientName: "NovaPay Merchant Gateway",
    clientLogo: "/assets/clients/novapay-terminal.svg",
    projectTitle: "Contactless NFC & Dynamic QR Merchant Terminal",
    category: "Web Applications",
    shortDescription: "Next-generation digital business card and QR code transaction terminal for UK merchants.",
    overview: "Drawing direct synergy with Mercury Infotech's innovative NFC and smart QR products, NovaPay enables modern brick-and-mortar merchants to share interactive business profiles and accept instant contactless payments. The web portal allows businesses to update offers, menus, and profile links in real time with zero reprint costs.",
    services: [
      "Progressive Web Application (PWA)",
      "Web NFC & Dynamic QR Generation",
      "Merchant Analytics Dashboard",
      "Interactive Digital Catalog Builder"
    ],
    technologies: ["React", "Web NFC API", "SVG QR Engine", "Node.js", "Web Crypto API"],
    features: [
      "Instant tap-to-profile NFC sync compatible with iOS and Android devices",
      "Real-time dynamic QR code generation with live link destination editing",
      "Interactive merchant catalog with instant menu item updating",
      "Tap metrics, unique visitor heatmaps, and conversion rate analytics",
      "Offline-first PWA caching for continuous operation during network drops"
    ],
    screenshots: [
      "/assets/projects/novapay-terminal.webp"
    ],
    liveUrl: "https://mercuryinfotech.co.uk/Service/Product",
    featured: false,
    year: "2026",
    completionTime: "6 Weeks",
    clientIndustry: "Fintech & Retail Tech"
  },
  {
    id: "aura-interiors",
    clientName: "Aura Living Interiors",
    clientLogo: "/assets/clients/aura-interiors.svg",
    projectTitle: "Luxury Bespoke Architectural Interior Portfolio",
    category: "Website Development",
    shortDescription: "Editorial luxury showcase featuring bespoke furniture collections and residential case studies.",
    overview: "Aura Living crafts high-end residential interiors across Mayfair, Kensington, and the Cotswolds. We created an immersive editorial website that mirrors their refined architectural aesthetic, incorporating smooth kinetic typography, responsive imagery grids, and private client project lookbooks.",
    services: [
      "Editorial Web Design & Branding",
      "Interactive Digital Catalog",
      "Bespoke Material Finish Visualizer",
      "Speed & Core Web Vitals Optimization"
    ],
    technologies: ["React", "CSS Variables", "Framer Motion", "WebP Picture Elements"],
    features: [
      "Editorial magazine layout with bespoke architectural typography",
      "Filterable residential and commercial project photo gallery",
      "Interactive swatch and stone finish selector with lighting simulation",
      "Private VIP client portal for bespoke furniture production tracking",
      "Perfect 100/100 Core Web Vitals score on mobile and desktop"
    ],
    screenshots: [
      "/assets/projects/aura-interiors.webp"
    ],
    liveUrl: "https://mercuryinfotech.co.uk/",
    featured: true,
    year: "2026",
    completionTime: "4 Weeks",
    clientIndustry: "Architecture & Luxury Interiors"
  },
  {
    id: "pulsefit-mobile",
    clientName: "PulseFit Personal Training",
    clientLogo: "/assets/clients/pulsefit-mobile.svg",
    projectTitle: "Member Workout Tracking & Class Booking Mobile App",
    category: "Mobile Applications",
    shortDescription: "Cross-platform mobile application providing seamless class reservations and custom fitness tracking.",
    overview: "PulseFit is a premier training studio franchise. We developed an intuitive, highly energetic mobile experience enabling members to reserve studio classes, follow custom workout routines created by their trainers, and track physiological milestones.",
    services: [
      "Mobile App UI/UX Design",
      "Cross-Platform App Development",
      "Push Notification Architecture",
      "Apple Health & Google Fit Sync"
    ],
    technologies: ["React Native", "Expo", "Redux Toolkit", "Node.js", "Firebase Cloud Messaging"],
    features: [
      "One-tap studio class reservations with dynamic waitlist promotion",
      "Interactive video workout library with trainer notes and rest timers",
      "Automated push reminders 2 hours prior to scheduled personal sessions",
      "In-app membership passes with Apple Wallet & Google Wallet pass integration",
      "Dark-mode optimised interface designed for high-contrast gym lighting"
    ],
    screenshots: [
      "/assets/projects/pulsefit-mobile.webp"
    ],
    liveUrl: "https://mercuryinfotech.co.uk/",
    featured: false,
    year: "2026",
    completionTime: "9 Weeks",
    clientIndustry: "Health, Fitness & Athletics"
  },
  {
    id: "elevate-branding",
    clientName: "Elevate Brand Studio & Co.",
    clientLogo: "/assets/clients/elevate-branding.svg",
    projectTitle: "Complete Visual Identity, Brand Guidelines & Print Collateral",
    category: "Branding & Graphic Design",
    shortDescription: "Strategic brand overhaul including monogram mark, packaging guidelines, and digital asset suite.",
    overview: "Elevate Brand Studio required a comprehensive brand identity system to accompany their commercial expansion. We crafted an enduring visual identity encompassing luxury gold foil print guidelines, custom typography treatments, iconography libraries, and social media production toolkits.",
    services: [
      "Brand Identity & Logo Design",
      "Typography & Colour System",
      "Packaging & Print Stationery",
      "Digital Social Media Toolkits"
    ],
    technologies: ["Figma", "Adobe Illustrator", "Vector SVG", "Print Spec 300DPI CMYK"],
    features: [
      "Scalable geometric monogram and responsive logo lockups",
      "40-page digital and print Brand Guideline Book with usage rules",
      "Luxury business card and stationery collateral with foil stamping specifications",
      "Turnkey social media template design system for Instagram, LinkedIn, and YouTube",
      "Custom icon set tailored for web and packaging applications"
    ],
    screenshots: [
      "/assets/projects/elevate-branding.webp"
    ],
    liveUrl: "https://mercuryinfotech.co.uk/",
    featured: false,
    year: "2026",
    completionTime: "3 Weeks",
    clientIndustry: "Creative Agencies & Fashion"
  },
  {
    id: "greensprout-store",
    clientName: "GreenSprout Eco Goods",
    clientLogo: "/assets/clients/greensprout-store.svg",
    projectTitle: "Sustainable Consumer Goods E-Commerce Platform",
    category: "Website Development",
    shortDescription: "Ultra-fast headless commerce platform with real-time carbon neutral calculation.",
    overview: "GreenSprout provides zero-waste, ethically sourced lifestyle products throughout the UK. We designed and built an e-commerce platform that pairs minimal, earthy design with high-conversion checkout flows and transparent sustainability metrics on every product page.",
    services: [
      "E-Commerce Architecture",
      "Custom Storefront UI/UX",
      "Stripe Payment & Klarna Integration",
      "Carbon Offset API Integration"
    ],
    technologies: ["React", "Vite", "Stripe API", "Node.js", "Redis Caching"],
    features: [
      "Instant frictionless checkout with Apple Pay and Google Pay",
      "Real-time carbon footprint calculation and certified tree planting per order",
      "Faceted product filtering by ethical certification, material, and packaging",
      "Automated stock level tracking and back-in-stock SMS alerts",
      "Optimised lightweight code ensuring minimal environmental hosting impact"
    ],
    screenshots: [
      "/assets/projects/greensprout-store.webp"
    ],
    liveUrl: "https://mercuryinfotech.co.uk/",
    featured: false,
    year: "2026",
    completionTime: "6 Weeks",
    clientIndustry: "E-Commerce & Retail"
  }
];

export const companyDetails = {
  name: "Mercury Infotech UK",
  tagline: "Digital Work. Real Businesses. Meaningful Results.",
  logo: "/assets/logo.png",
  websiteUrl: "https://mercuryinfotech.co.uk/",
  email: "Info@mercuryinfotech.co.uk",
  address: "11, Hillrise Court, 135 Kenton Rd, Harrow HA3 0AZ, United Kingdom",
  icoNumber: "CSN2076847",
  copyrightYear: "2026",
  socials: {
    facebook: "https://www.facebook.com/profile.php?id=61583623924337",
    instagram: "https://www.instagram.com/mercuryinfotechuk/",
    linkedin: "https://www.linkedin.com/company/109994856/admin/dashboard/"
  },
  services: [
    {
      id: "web-dev",
      number: "01",
      title: "Website Development",
      category: "Website Development",
      description: "We create responsive, user-friendly websites that are fast, modern, and built to represent your brand professionally across all devices.",
      icon: "Globe"
    },
    {
      id: "crm-apps",
      number: "02",
      title: "Web Applications & CRM",
      category: "Web Applications",
      description: "Manage customers, track leads, and scale your business operations with custom web applications and intelligent CRM workflows.",
      icon: "Database"
    },
    {
      id: "mobile-apps",
      number: "03",
      title: "Mobile Applications",
      category: "Mobile Applications",
      description: "We build scalable, high-performance mobile apps for seamless Android and iOS experiences that keep customers engaged.",
      icon: "Smartphone"
    },
    {
      id: "branding",
      number: "04",
      title: "Branding & Graphic Design",
      category: "Branding & Graphic Design",
      description: "Professional logo, brand identity, and marketing collateral designs that enhance your reputation and make your business stand out.",
      icon: "Palette"
    }
  ]
};
