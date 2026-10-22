import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import PortfolioSection from './components/PortfolioSection';
import ServicesSection from './components/ServicesSection';
import ContactCTA from './components/ContactCTA';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';
import { portfolioProjects } from './data/portfolioData';

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [contactSubject, setContactSubject] = useState('');

  // Open modal by project object
  const handleOpenModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  // Open modal by project ID (e.g. from Hero mockups)
  const handleOpenProjectById = (projectId) => {
    const project = portfolioProjects.find((p) => p.id === projectId);
    if (project) {
      handleOpenModal(project);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleDiscussProject = (projectTitle) => {
    setContactSubject(`Inquiry regarding ${projectTitle}`);
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const headerOffset = 80;
      const elementPosition = contactSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="portfolio-app-root">
      {/* Top Header */}
      <Header />

      {/* Hero Showcase with Interactive Browser Mockups */}
      <Hero onOpenProject={handleOpenProjectById} />

      {/* Services Section ("What We Build") */}
      <ServicesSection />

      {/* Main Selected Work Section with Interactive Project Cards */}
      <PortfolioSection onOpenModal={handleOpenModal} />

      {/* Contact CTA Section */}
      <ContactCTA prefilledSubject={contactSubject} />

      {/* Footer */}
      <Footer />

      {/* Central Project Modal Popup */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onDiscussProject={handleDiscussProject}
      />
    </div>
  );
}
