import React from 'react';
import { motion } from 'framer-motion';
import { 
  Globe, 
  Database, 
  Smartphone, 
  Palette, 
  ArrowRight
} from 'lucide-react';
import { companyDetails } from '../data/portfolioData';
import './ServicesSection.css';

const iconMap = {
  Globe: Globe,
  Database: Database,
  Smartphone: Smartphone,
  Palette: Palette
};

const servicePills = {
  'web-dev': ['Next.js / React', 'Core Web Vitals', 'Responsive UI'],
  'crm-apps': ['Custom Workflows', 'Encrypted Intake', 'Cloud Telematics'],
  'mobile-apps': ['Cross-Platform', 'Web NFC & QR', 'Progressive Web Apps'],
  'branding': ['Brand Architecture', 'Vector Systems', 'UI/UX Prototypes']
};

export default function ServicesSection({ onFilterCategory }) {
  const handleServiceClick = (category) => {
    if (onFilterCategory) {
      onFilterCategory(category);
    }
    const workSection = document.getElementById('work');
    if (workSection) {
      const headerOffset = 80;
      const elementPosition = workSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="section services-section" id="services">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <h2 className="section-title">
            Strategic Engineering. <br />
            <span className="gradient-text">What We Build.</span>
          </h2>
          <p className="section-subtitle">
            Strategic digital capabilities tailored to help UK businesses automate operations, strengthen online authority, and scale with confidence.
          </p>
        </div>

        {/* 4 Compact Services Cards */}
        <div className="services-grid">
          {companyDetails.services.map((service, idx) => {
            const IconComponent = iconMap[service.icon] || Globe;
            const pills = servicePills[service.id] || [];

            return (
              <motion.div
                key={service.id}
                className="service-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                onClick={() => handleServiceClick(service.category)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleServiceClick(service.category);
                  }
                }}
                title={`Filter portfolio by ${service.title}`}
              >
                <div className="service-card-top">
                  <div className="service-icon-box">
                    <IconComponent size={22} className="service-icon" />
                  </div>
                  <span className="service-number">{service.number}</span>
                </div>

                <h3 className="service-title">{service.title}</h3>
                <p className="service-desc">{service.description}</p>

                <div className="service-pills-wrap">
                  {pills.map((pill, pIdx) => (
                    <span key={pIdx} className="service-pill">{pill}</span>
                  ))}
                </div>

                <div className="service-card-cta">
                  <span>Explore Deliveries</span>
                  <ArrowRight size={15} className="service-arrow" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
