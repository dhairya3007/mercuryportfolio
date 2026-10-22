import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  ExternalLink, 
  CheckCircle2, 
  Code2, 
  Layers, 
  Sparkles, 
  Calendar, 
  Clock, 
  Building2,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import './ProjectModal.css';

export default function ProjectModal({ project, isOpen, onClose, onDiscussProject }) {
  const modalContentRef = useRef(null);
  const closeBtnRef = useRef(null);

  // Keyboard navigation & body scroll locking
  useEffect(() => {
    if (!isOpen) return;

    // Save previous active element to restore later
    const previousActiveElement = document.activeElement;

    // Prevent background scrolling
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = 'hidden';

    // Focus the close button for accessibility
    setTimeout(() => {
      closeBtnRef.current?.focus();
    }, 50);

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalStyle;
      window.removeEventListener('keydown', handleKeyDown);
      if (previousActiveElement && previousActiveElement.focus) {
        previousActiveElement.focus();
      }
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div 
          className="modal-overlay" 
          onClick={handleOverlayClick}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-project-title"
        >
          {/* Backdrop blur effect */}
          <motion.div 
            className="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          />

          <motion.div 
            className="modal-dialog"
            ref={modalContentRef}
            initial={{ opacity: 0, scale: 0.94, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 16 }}
            transition={{ type: "spring", damping: 28, stiffness: 350 }}
          >
            {/* Modal Header Bar */}
            <div className="modal-header-bar">
              <div className="modal-client-info">
                <div className="modal-logo-box">
                  <img 
                    src={project.clientLogo} 
                    alt={`${project.clientName} logo`} 
                    className="modal-client-logo"
                  />
                </div>
                <div>
                  <h3 className="modal-client-name">{project.clientName}</h3>
                  <span className="modal-category-badge">{project.category}</span>
                </div>
              </div>

              <div className="modal-actions-top">
                {project.liveUrl && (
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn btn-outline modal-live-btn"
                    title="Visit project live site"
                  >
                    <span>Official Link</span>
                    <ExternalLink size={14} />
                  </a>
                )}
                <button 
                  ref={closeBtnRef}
                  type="button" 
                  className="modal-close-btn" 
                  onClick={onClose}
                  aria-label="Close project modal"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Scrollable Modal Content Body */}
            <div className="modal-body-scrollable">
              {/* Project Hero Media Preview */}
              <div className="modal-media-banner">
                <img 
                  src={project.screenshots[0]} 
                  alt={project.projectTitle} 
                  className="modal-media-img"
                />
                <div className="modal-media-gradient"></div>
                <div className="modal-media-caption">
                  <span className="media-caption-badge">Production Showcase</span>
                  <span className="media-caption-title">{project.projectTitle}</span>
                </div>
              </div>

              {/* Two Column Details Grid */}
              <div className="modal-content-grid">
                {/* Left Column: Project Overview & Key Deliverables */}
                <div className="modal-main-column">
                  <div className="modal-block">
                    <h2 id="modal-project-title" className="modal-project-title">
                      {project.projectTitle}
                    </h2>
                    <p className="modal-overview-text">
                      {project.overview}
                    </p>
                  </div>

                  {/* Key Features & Deliverables */}
                  <div className="modal-block">
                    <div className="block-title-row">
                      <CheckCircle2 size={18} className="block-icon" />
                      <h4 className="block-title">Key Deliverables &amp; Outcomes</h4>
                    </div>
                    <ul className="deliverables-list">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="deliverable-item">
                          <span className="check-bullet"></span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Services Delivered */}
                  <div className="modal-block">
                    <div className="block-title-row">
                      <Layers size={18} className="block-icon" />
                      <h4 className="block-title">Services Delivered</h4>
                    </div>
                    <div className="services-delivered-tags">
                      {project.services.map((srv, idx) => (
                        <div key={idx} className="service-delivered-chip">
                          <CheckCircle2 size={13} className="chip-icon" />
                          <span>{srv}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Column: Project Meta Sidebar */}
                <div className="modal-sidebar-column">
                  {/* Project Metadata Card */}
                  <div className="meta-card">
                    <h5 className="meta-card-title">Project Overview</h5>

                    <div className="meta-item">
                      <Building2 size={16} className="meta-icon" />
                      <div>
                        <span className="meta-label">Client</span>
                        <strong className="meta-value">{project.clientName}</strong>
                      </div>
                    </div>

                    <div className="meta-item">
                      <Layers size={16} className="meta-icon" />
                      <div>
                        <span className="meta-label">Industry</span>
                        <strong className="meta-value">{project.clientIndustry || 'Commercial'}</strong>
                      </div>
                    </div>

                    <div className="meta-item">
                      <Calendar size={16} className="meta-icon" />
                      <div>
                        <span className="meta-label">Year Delivered</span>
                        <strong className="meta-value">{project.year || '2026'}</strong>
                      </div>
                    </div>

                    <div className="meta-item">
                      <Clock size={16} className="meta-icon" />
                      <div>
                        <span className="meta-label">Timeline</span>
                        <strong className="meta-value">{project.completionTime || '6 Weeks'}</strong>
                      </div>
                    </div>
                  </div>

                  {/* Technologies Used */}
                  <div className="meta-card">
                    <div className="block-title-row">
                      <Code2 size={16} className="block-icon" />
                      <h5 className="meta-card-title m-0">Technologies Used</h5>
                    </div>
                    <div className="tech-stack-pills">
                      {project.technologies.map((tech, idx) => (
                        <span key={idx} className="tech-pill">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Direct Contact Callout Box */}
                  <div className="modal-contact-callout">
                    <div className="callout-header">
                      <Sparkles size={18} className="callout-sparkle" />
                      <h6>Looking for similar results?</h6>
                    </div>
                    <p>Speak with our UK engineering team about scoping your next website or business application.</p>
                    <button 
                      type="button" 
                      className="btn btn-primary btn-block modal-cta-btn"
                      onClick={() => {
                        onClose();
                        onDiscussProject && onDiscussProject(project.projectTitle);
                      }}
                    >
                      <span>Inquire About Similar Work</span>
                      <ArrowRight size={15} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
