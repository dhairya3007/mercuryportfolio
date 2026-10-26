/**
 * Mercury Infotech - Central Dynamic Portfolio Data Source
 * 
 * ============================================================================
 * DYNAMIC FIELD ARCHITECTURE & TEAM GUIDELINES
 * ============================================================================
 * Every project in this portfolio supports FULLY DYNAMIC fields.
 * No field is rigidly fixed — any field can be added, customized, or omitted.
 * 
 * Supported Dynamic Fields:
 * ----------------------------------------------------------------------------
 * 1. CORE FIELDS (Recommended):
 *    - id: Unique string slug (e.g. "apex-logistics")
 *    - clientName: Company / Client name (e.g. "Apex Logistics UK")
 *    - clientLogo: Path to logo svg/png (e.g. "/assets/clients/apex-logistics.svg")
 *    - projectTitle: Descriptive headline (e.g. "Real-Time Fleet & Telematics Dispatch Platform")
 *    - category: Service category (e.g. "Web Applications", "Website Development")
 *    - overview: Paragraph explaining the challenge, solution, and engineering scope.
 * 
 * 2. DYNAMIC METRICS / KPIS (Optional, renders executive stat badges):
 *    metrics: [
 *      { label: "Dispatch Velocity", value: "+45%" },
 *      { label: "Position Latency", value: "<1.2s" }
 *    ]
 * 
 * 3. DYNAMIC ARBITRARY METADATA (Optional, renders in Project Overview sidebar):
 *    Supports either an Array:
 *    details: [
 *      { label: "Location", value: "London, UK" },
 *      { label: "Active Drivers", value: "450+ Daily Operatives" },
 *      { label: "Compliance", value: "DVSA Commercial Road Standards" },
 *      { label: "Infrastructure", value: "AWS London (eu-west-2)" }
 *    ]
 *    Or a simple Key-Value Object:
 *    details: {
 *      "Location": "London, UK",
 *      "Team Size": "5 Senior Engineers",
 *      "Budget Tier": "Enterprise Bespoke"
 *    }
 * 
 * 4. DYNAMIC DELIVERABLES & FEATURES (Optional):
 *    features: [ "Item 1", "Item 2", "Item 3" ]
 *    (Also accepts aliases: deliverables, highlights, outcomes)
 * 
 * 5. DYNAMIC TECH STACK (Optional):
 *    technologies: [ "React", "Node.js", "PostgreSQL" ]
 *    (Also accepts aliases: techStack, tools)
 * 
 * 6. DYNAMIC SERVICES (Optional):
 *    services: [ "Full-Stack Development", "UI/UX Design" ]
 *    (Also accepts alias: scope)
 * 
 * 7. DYNAMIC TESTIMONIAL / CLIENT QUOTE (Optional):
 *    testimonial: {
 *      quote: "Mercury Infotech transformed our dispatch pipeline completely...",
 *      author: "David Vance",
 *      role: "Operations Director",
 *      company: "Apex Logistics UK"
 *    }
 * 
 * 8. DYNAMIC SCREENSHOTS & GALLERY (Optional):
 *    screenshots: [ "/assets/projects/screen1.webp", "/assets/projects/screen2.webp" ]
 * 
 * 9. DYNAMIC EXTERNAL LINKS (Optional):
 *    liveUrl: "https://example.com",
 *    liveUrlText: "Launch Live App"
 * ============================================================================
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
    
    // Dynamic KPI / Metric Highlights
    metrics: [
      { label: "Dispatch Velocity", value: "+45%" },
      { label: "Fleet Telematics", value: "100% Live" },
      { label: "Position Latency", value: "<1.2s" }
    ],

    // Dynamic Specifications / Key-Value Details
    details: [
      { label: "Location", value: "Birmingham & London, UK" },
      { label: "Active Drivers", value: "450+ Daily Operatives" },
      { label: "Infrastructure", value: "AWS London (eu-west-2)" },
      { label: "Compliance", value: "DVSA Commercial Road Standards" }
    ],

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
    liveUrlText: "Official Link",
    featured: true,
    year: "2026",
    completionTime: "8 Weeks",
    clientIndustry: "Transport & Logistics",

    // Dynamic Testimonial
    testimonial: {
      quote: "Mercury Infotech transformed our dispatch pipeline from clunky spreadsheets to sub-second live GPS tracking across 450+ vehicles. Outstanding delivery speed and rock-solid architecture.",
      author: "David Vance",
      role: "Operations Director",
      company: "Apex Logistics UK"
    }
  },
  {
    id: "kenton-legal",
    clientName: "Kenton & Harrow Legal Chambers",
    clientLogo: "/assets/clients/kenton-legal.svg",
    projectTitle: "Barrister Practice Platform & Confidential Intake Portal",
    category: "Website Development",
    shortDescription: "High-trust digital presence with secure consultation booking and practice area discovery.",
    overview: "Designed for a distinguished London-based legal practice, this digital platform establishes immediate authority and trustworthiness. It features an encrypted case evaluation workflow, custom barrister profile directories, and an automated appointment scheduling pipeline built to stringent UK legal compliance standards.",
    
    // Dynamic KPI / Metric Highlights
    metrics: [
      { label: "Consultation Bookings", value: "+82%" },
      { label: "Intake Automation", value: "100% Digital" },
      { label: "Lighthouse Performance", value: "99/100" }
    ],

    // Dynamic Specifications / Key-Value Details
    details: [
      { label: "Location", value: "Chancery Lane, London" },
      { label: "Regulation", value: "SRA Digital Guidelines" },
      { label: "Encryption", value: "End-to-End AES-256" },
      { label: "Practice Areas", value: "Commercial & Chancery Law" }
    ],

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
    liveUrlText: "Official Link",
    featured: false,
    year: "2026",
    completionTime: "5 Weeks",
    clientIndustry: "Legal & Professional Services",

    // Dynamic Testimonial
    testimonial: {
      quote: "The confidential intake system gives our prospective clients instant confidence while saving our practice clerks hours every single day.",
      author: "Eleanor Kenton KC",
      role: "Senior Partner",
      company: "Kenton & Harrow Chambers"
    }
  },
  {
    id: "vanguard-crm",
    clientName: "Vanguard Health & Dental Clinic",
    clientLogo: "/assets/clients/vanguard-crm.svg",
    projectTitle: "Patient Relationship Management & Booking CRM",
    category: "CRM & Business Solutions",
    shortDescription: "Integrated clinic operations CRM reducing no-shows and automating patient care workflows.",
    overview: "Vanguard Clinic required a unified digital hub to streamline patient intake, practitioner calendars, and follow-up care reminders. We engineered a HIPAA/GDPR-compliant web CRM that connects the clinic's front-desk reception, clinical staff, and patients with instant SMS notifications and automated recalls.",
    
    // Dynamic KPI / Metric Highlights
    metrics: [
      { label: "Patient No-Show Rate", value: "-64%" },
      { label: "Online Self-Booking", value: "78%" },
      { label: "Recall Automation", value: "24/7 SMS" }
    ],

    // Dynamic Specifications / Key-Value Details
    details: [
      { label: "Clinic Network", value: "3 London Locations" },
      { label: "Data Protection", value: "GDPR & HIPAA Caldicott" },
      { label: "Daily Appointments", value: "350+ Bookings/Day" },
      { label: "Integration", value: "Twilio SMS & Stripe UK" }
    ],

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
    liveUrlText: "Official Link",
    featured: false,
    year: "2026",
    completionTime: "7 Weeks",
    clientIndustry: "Healthcare & Private Clinics",

    // Dynamic Testimonial
    testimonial: {
      quote: "Automated recalls and live SMS confirmations cut clinic no-shows by more than half within 60 days of launch. The clinical calendar is a joy to use.",
      author: "Dr. Marcus Thorne",
      role: "Clinical Director",
      company: "Vanguard Health Clinic"
    }
  },
  {
    id: "novapay-terminal",
    clientName: "NovaPay Merchant Gateway",
    clientLogo: "/assets/clients/novapay-terminal.svg",
    projectTitle: "Contactless NFC & Dynamic QR Merchant Terminal",
    category: "Web Applications",
    shortDescription: "Next-generation digital business card and QR code transaction terminal for UK merchants.",
    overview: "Drawing direct synergy with Mercury Infotech's innovative NFC and smart QR products, NovaPay enables modern brick-and-mortar merchants to share interactive business profiles and accept instant contactless payments. The web portal allows businesses to update offers, menus, and profile links in real time with zero reprint costs.",
    
    // Dynamic KPI / Metric Highlights
    metrics: [
      { label: "Tap Response", value: "<0.3s" },
      { label: "Merchant Onboarding", value: "5 Minutes" },
      { label: "Reprint Savings", value: "100% Digital" }
    ],

    // Dynamic Specifications / Key-Value Details
    details: [
      { label: "Compatibility", value: "iOS, Android & NFC Chips" },
      { label: "PWA Offline Mode", value: "Service Worker Cache" },
      { label: "QR Generation", value: "Vector SVG Dynamic Engine" }
    ],

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
    liveUrlText: "Explore Smart NFC",
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
    
    // Dynamic KPI / Metric Highlights
    metrics: [
      { label: "Client Inquiries", value: "+115%" },
      { label: "Core Web Vitals", value: "100/100" },
      { label: "Average Session", value: "4m 20s" }
    ],

    // Dynamic Specifications / Key-Value Details
    details: [
      { label: "Studio Location", value: "Mayfair, London" },
      { label: "Lookbooks", value: "Private VIP Access" },
      { label: "Imagery", value: "Next-Gen WebP Lossless" }
    ],

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
    liveUrlText: "Official Link",
    featured: true,
    year: "2026",
    completionTime: "4 Weeks",
    clientIndustry: "Architecture & Luxury Interiors",

    // Dynamic Testimonial
    testimonial: {
      quote: "Our website now communicates the same level of refined elegance as our multi-million pound Mayfair residential commissions.",
      author: "Julian St. Claire",
      role: "Design Principal",
      company: "Aura Living Interiors"
    }
  },
  {
    id: "pulsefit-mobile",
    clientName: "PulseFit Personal Training",
    clientLogo: "/assets/clients/pulsefit-mobile.svg",
    projectTitle: "Member Workout Tracking & Class Booking Mobile App",
    category: "Mobile Applications",
    shortDescription: "Cross-platform mobile application providing seamless class reservations and custom fitness tracking.",
    overview: "PulseFit is a premier training studio franchise. We developed an intuitive, highly energetic mobile experience enabling members to reserve studio classes, follow custom workout routines created by their trainers, and track physiological milestones.",
    
    // Dynamic KPI / Metric Highlights
    metrics: [
      { label: "Monthly Active Users", value: "12,500+" },
      { label: "Class Booking Speed", value: "1-Tap Sync" },
      { label: "App Store Rating", value: "4.9 ★" }
    ],

    // Dynamic Specifications / Key-Value Details
    details: [
      { label: "Platforms", value: "iOS & Android" },
      { label: "Wallet Integration", value: "Apple & Google Wallet" },
      { label: "Push Deliverability", value: "Firebase Cloud Messaging" }
    ],

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
    liveUrlText: "Official Link",
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
    
    // Dynamic KPI / Metric Highlights
    metrics: [
      { label: "Brand Asset Kit", value: "250+ Assets" },
      { label: "Guideline Scope", value: "40-Page Book" },
      { label: "Print Production", value: "300 DPI CMYK" }
    ],

    // Dynamic Specifications / Key-Value Details
    details: [
      { label: "Design Tools", value: "Figma & Adobe Illustrator" },
      { label: "Deliverables", value: "Vector Marks & Print Specs" },
      { label: "Asset Exports", value: "SVG, PNG, PDF, AI" }
    ],

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
    liveUrlText: "Official Link",
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
    
    // Dynamic KPI / Metric Highlights
    metrics: [
      { label: "Checkout Conversion", value: "+38%" },
      { label: "Carbon Offsetting", value: "100% Verified" },
      { label: "Mobile Page Load", value: "0.8s" }
    ],

    // Dynamic Specifications / Key-Value Details
    details: [
      { label: "Payment Gateways", value: "Apple Pay, Google Pay, Klarna" },
      { label: "Sustainability", value: "Certified B-Corp Compliant" },
      { label: "Fulfillment", value: "Automated Royal Mail API" }
    ],

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
    liveUrlText: "Official Link",
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
