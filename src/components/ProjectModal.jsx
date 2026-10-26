import React, { useEffect, useRef, useState } from 'react';
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
  ShieldCheck,
  MapPin,
  Laptop,
  Users,
  Tag,
  Briefcase,
  TrendingUp,
  Quote,
  Server,
  Globe,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import './ProjectModal.css';

/**
 * Returns an icon component based on the icon name or metadata label keyword
 */
const getDetailIcon = (iconName, label = '') => {
  const l = (label || '').toLowerCase();
  const name = (iconName || '').toLowerCase();

  if (name === 'building' || l.includes('client') || l.includes('company')) return <Building2 size={16} className="meta-icon" />;
  if (name === 'layers' || l.includes('industry') || l.includes('sector')) return <Layers size={16} className="meta-icon" />;
  if (name === 'briefcase' || l.includes('category') || l.includes('service') || l.includes('specialism')) return <Briefcase size={16} className="meta-icon" />;
  if (name === 'calendar' || l.includes('year') || l.includes('date') || l.includes('launched')) return <Calendar size={16} className="meta-icon" />;
  if (name === 'clock' || l.includes('time') || l.includes('duration') || l.includes('timeline') || l.includes('turnaround')) return <Clock size={16} className="meta-icon" />;
  if (name === 'map-pin' || l.includes('location') || l.includes('city') || l.includes('country') || l.includes('region') || l.includes('chambers')) return <MapPin size={16} className="meta-icon" />;
  if (name === 'laptop' || l.includes('platform') || l.includes('device') || l.includes('system') || l.includes('portal')) return <Laptop size={16} className="meta-icon" />;
  if (name === 'users' || l.includes('user') || l.includes('team') || l.includes('staff') || l.includes('driver') || l.includes('operatives') || l.includes('members')) return <Users size={16} className="meta-icon" />;
  if (name === 'shield' || l.includes('security') || l.includes('compliance') || l.includes('privacy') || l.includes('gdpr') || l.includes('regulation') || l.includes('encryption')) return <ShieldCheck size={16} className="meta-icon" />;
  if (name === 'server' || l.includes('host') || l.includes('server') || l.includes('cloud') || l.includes('infra') || l.includes('database')) return <Server size={16} className="meta-icon" />;
  if (name === 'globe' || l.includes('web') || l.includes('domain') || l.includes('market') || l.includes('target')) return <Globe size={16} className="meta-icon" />;
  if (name === 'trending' || l.includes('metric') || l.includes('kpi') || l.includes('growth') || l.includes('roi') || l.includes('result')) return <TrendingUp size={16} className="meta-icon" />;
  if (name === 'sparkles') return <Sparkles size={16} className="meta-icon" />;

  return <Tag size={16} className="meta-icon" />;
};

/**
 * Normalizes all project metadata into a unified array of dynamic key-value pairs
 */
const extractProjectDetails = (project) => {
  if (!project) return [];
  const list = [];
  const seenLabels = new Set();

  const add = (label, value, iconName) => {
    if (value !== undefined && value !== null && String(value).trim() !== '' && !seenLabels.has(label.toLowerCase())) {
      seenLabels.add(label.toLowerCase());
      list.push({ label, value: String(value), iconName });
    }
  };

  // 1. Standard optional fields
  if (project.clientName) add('Client', project.clientName, 'building');
  if (project.clientIndustry || project.industry) add('Industry', project.clientIndustry || project.industry, 'layers');
  if (project.category) add('Category', project.category, 'briefcase');
  if (project.year || project.date) add('Year Delivered', project.year || project.date, 'calendar');
  if (project.completionTime || project.timeline || project.duration) add('Timeline', project.completionTime || project.timeline || project.duration, 'clock');
  if (project.location) add('Location', project.location, 'map-pin');
  if (project.platform || project.type) add('Platform', project.platform || project.type, 'laptop');
  if (project.teamSize) add('Team Size', project.teamSize, 'users');
  if (project.budget) add('Budget / Tier', project.budget, 'tag');
  if (project.compliance) add('Compliance', project.compliance, 'shield');
  if (project.hosting || project.deployment) add('Infrastructure', project.hosting || project.deployment, 'server');
  if (project.targetMarket) add('Target Market', project.targetMarket, 'globe');

  // 2. Custom dynamic fields (Array of { label, value, icon } or Key-Value Object)
  const custom = project.details || project.customFields || project.metadata;
  if (custom) {
    if (Array.isArray(custom)) {
      custom.forEach((item) => {
        if (item && item.label && item.value) {
          add(item.label, item.value, item.icon || item.iconName || 'tag');
        }
      });
    } else if (typeof custom === 'object') {
      Object.entries(custom).forEach(([key, val]) => {
        add(key, val, 'tag');
      });
    }
  }

  return list;
};

/**
 * Normalizes metrics/KPIs from array or object
 */
const extractProjectMetrics = (project) => {
  if (!project) return [];
  if (Array.isArray(project.metrics)) {
    return project.metrics.filter((m) => m && (m.value || m.val));
  }
  if (Array.isArray(project.kpis)) {
    return project.kpis.filter((m) => m && (m.value || m.val));
  }
  if (typeof project.metrics === 'object' && project.metrics !== null) {
    return Object.entries(project.metrics).map(([label, value]) => ({ label, value }));
  }
  return [];
};

export default function ProjectModal({ project, isOpen, onClose, onDiscussProject }) {
  const modalContentRef = useRef(null);
  const closeBtnRef = useRef(null);
  const [activeImageIdx, setActiveImageIdx] = useState(0);

  // Reset active image when project changes
  useEffect(() => {
    setActiveImageIdx(0);
  }, [project]);

  // Keyboard navigation & body scroll locking
  useEffect(() => {
    if (!isOpen) return;

    const previousActiveElement = document.activeElement;
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = 'hidden';

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

  // Safe dynamic extraction
  const dynamicDetails = extractProjectDetails(project);
  const dynamicMetrics = extractProjectMetrics(project);

  const deliverables = Array.isArray(project.features) ? project.features
    : Array.isArray(project.deliverables) ? project.deliverables
    : Array.isArray(project.highlights) ? project.highlights
    : Array.isArray(project.outcomes) ? project.outcomes
    : [];
  const deliverablesTitle = project.deliverablesTitle || project.featuresTitle || 'Key Deliverables & Outcomes';

  const services = Array.isArray(project.services) ? project.services
    : Array.isArray(project.scope) ? project.scope
    : [];
  const servicesTitle = project.servicesTitle || 'Services Delivered';

  const technologies = Array.isArray(project.technologies) ? project.technologies
    : Array.isArray(project.techStack) ? project.techStack
    : Array.isArray(project.tools) ? project.tools
    : [];
  const techTitle = project.techTitle || 'Technologies & Architecture';

  const testimonial = project.testimonial || project.review || project.quote;
  const customSections = Array.isArray(project.customSections) ? project.customSections : [];

  const screenshots = (Array.isArray(project.screenshots) && project.screenshots.length > 0)
    ? project.screenshots
    : (project.image ? [project.image] : [project.clientLogo || '/assets/logo.png']);

  const activeMediaSrc = screenshots[activeImageIdx] || screenshots[0];
  const liveUrl = project.liveUrl || project.link || project.demoUrl;
  const liveUrlText = project.liveUrlText || 'Official Link';

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
                {project.clientLogo && (
                  <div className="modal-logo-box">
                    <img 
                      src={project.clientLogo} 
                      alt={`${project.clientName || 'Client'} logo`} 
                      className="modal-client-logo"
                    />
                  </div>
                )}
                <div>
                  <h3 className="modal-client-name">{project.clientName}</h3>
                  {project.category && (
                    <span className="modal-category-badge">{project.category}</span>
                  )}
                </div>
              </div>

              <div className="modal-actions-top">
                {liveUrl && (
                  <a 
                    href={liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn btn-outline modal-live-btn"
                    title="Visit project live site"
                  >
                    <span>{liveUrlText}</span>
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
                  src={activeMediaSrc} 
                  alt={project.projectTitle} 
                  className="modal-media-img"
                />
                <div className="modal-media-gradient"></div>
                <div className="modal-media-caption">
                  <span className="media-caption-badge">
                    {project.category || 'Production Showcase'}
                  </span>
                  <span className="media-caption-title">{project.projectTitle}</span>
                </div>

                {/* Multi-image thumbnail controls if more than 1 screenshot */}
                {screenshots.length > 1 && (
                  <div className="media-gallery-nav">
                    {screenshots.map((thumb, idx) => (
                      <button
                        key={idx}
                        type="button"
                        className={`gallery-thumb-dot ${idx === activeImageIdx ? 'active' : ''}`}
                        onClick={() => setActiveImageIdx(idx)}
                        aria-label={`View image ${idx + 1}`}
                      />
                    ))}
                  </div>
                )}
              </div>

              {/* Dynamic KPI / Metrics Banner (Rendered whenever metrics are provided) */}
              {dynamicMetrics.length > 0 && (
                <div className="modal-metrics-strip">
                  <div className="modal-metrics-grid">
                    {dynamicMetrics.map((metric, idx) => (
                      <div key={idx} className="modal-metric-card">
                        <div className="metric-header-row">
                          <TrendingUp size={15} className="metric-icon" />
                          <span className="metric-value">{metric.value || metric.val}</span>
                        </div>
                        <span className="metric-label">{metric.label || metric.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Two Column Details Grid */}
              <div className="modal-content-grid">
                {/* Left Column: Project Overview, Deliverables, Testimonial, Custom Sections */}
                <div className="modal-main-column">
                  {/* Overview Text */}
                  {(project.overview || project.shortDescription) && (
                    <div className="modal-block">
                      <h2 id="modal-project-title" className="modal-project-title">
                        {project.projectTitle}
                      </h2>
                      <p className="modal-overview-text">
                        {project.overview || project.shortDescription}
                      </p>
                    </div>
                  )}

                  {/* Key Deliverables & Outcomes */}
                  {deliverables.length > 0 && (
                    <div className="modal-block">
                      <div className="block-title-row">
                        <CheckCircle2 size={18} className="block-icon" />
                        <h4 className="block-title">{deliverablesTitle}</h4>
                      </div>
                      <ul className="deliverables-list">
                        {deliverables.map((item, idx) => (
                          <li key={idx} className="deliverable-item">
                            <span className="check-bullet"></span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Services Delivered */}
                  {services.length > 0 && (
                    <div className="modal-block">
                      <div className="block-title-row">
                        <Layers size={18} className="block-icon" />
                        <h4 className="block-title">{servicesTitle}</h4>
                      </div>
                      <div className="services-delivered-tags">
                        {services.map((srv, idx) => (
                          <div key={idx} className="service-delivered-chip">
                            <CheckCircle2 size={13} className="chip-icon" />
                            <span>{srv}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Dynamic Testimonial / Client Quote */}
                  {testimonial && (
                    <div className="modal-block modal-testimonial-wrap">
                      <div className="testimonial-card">
                        <Quote size={22} className="testimonial-quote-icon" />
                        <p className="testimonial-quote-text">
                          "{typeof testimonial === 'string' ? testimonial : testimonial.quote || testimonial.text}"
                        </p>
                        {typeof testimonial === 'object' && (testimonial.author || testimonial.role) && (
                          <div className="testimonial-author-meta">
                            <div className="testimonial-avatar">
                              {(testimonial.author || 'C')[0]}
                            </div>
                            <div>
                              <strong className="testimonial-author-name">{testimonial.author}</strong>
                              <span className="testimonial-author-title">
                                {testimonial.role}{testimonial.company ? ` · ${testimonial.company}` : ''}
                              </span>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Any custom arbitrary sections provided dynamically */}
                  {customSections.map((sec, idx) => (
                    <div key={idx} className="modal-block">
                      {sec.title && (
                        <div className="block-title-row">
                          <Sparkles size={18} className="block-icon" />
                          <h4 className="block-title">{sec.title}</h4>
                        </div>
                      )}
                      {sec.content && (
                        <p className="modal-overview-text">{sec.content}</p>
                      )}
                      {Array.isArray(sec.items) && (
                        <ul className="deliverables-list">
                          {sec.items.map((it, i) => (
                            <li key={i} className="deliverable-item">
                              <span className="check-bullet"></span>
                              <span>{it}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>

                {/* Right Column: Dynamic Project Metadata Sidebar */}
                <div className="modal-sidebar-column">
                  {/* Dynamic Project Metadata Card (Only renders fields that actually exist) */}
                  {dynamicDetails.length > 0 && (
                    <div className="meta-card">
                      <h5 className="meta-card-title">Project Overview</h5>

                      {dynamicDetails.map((detail, idx) => (
                        <div key={idx} className="meta-item">
                          {getDetailIcon(detail.iconName, detail.label)}
                          <div>
                            <span className="meta-label">{detail.label}</span>
                            <strong className="meta-value">{detail.value}</strong>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Technologies Used (Renders dynamically if provided) */}
                  {technologies.length > 0 && (
                    <div className="meta-card">
                      <div className="block-title-row">
                        <Code2 size={16} className="block-icon" />
                        <h5 className="meta-card-title m-0">{techTitle}</h5>
                      </div>
                      <div className="tech-stack-pills">
                        {technologies.map((tech, idx) => (
                          <span key={idx} className="tech-pill">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

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

