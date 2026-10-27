import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  RotateCw, 
  ExternalLink, 
  CheckCircle2, 
  ArrowLeft, 
  ArrowUpRight,
  ArrowRight
} from 'lucide-react';
import './ClientCard.css';

const InstagramIcon = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const FacebookIcon = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

/**
 * Safely resolves client logo paths across environments, handling spaces (e.g. 'HVC logo.png'),
 * subpaths, BASE_URL, and accidental 'public/' prefixes.
 */
const resolveLogoPath = (path) => {
  if (!path) return '/assets/logo.png';
  if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('data:')) {
    return path;
  }
  const base = import.meta.env.BASE_URL || '/';
  const cleanBase = base.endsWith('/') ? base : `${base}/`;
  let cleanPath = path.replace(/^\/?public\//, '');
  if (cleanPath.startsWith('/')) {
    cleanPath = cleanPath.slice(1);
  }
  if (!cleanPath.includes('/')) {
    cleanPath = `assets/clients/${cleanPath}`;
  }
  return encodeURI(`${cleanBase}${cleanPath}`);
};

export default function ClientCard({ project, onOpenModal, index }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const instagramUrl = project.socials?.instagram || project.socialLinks?.instagram || project.instagramUrl || project.instagram;
  const facebookUrl = project.socials?.facebook || project.socialLinks?.facebook || project.facebookUrl || project.facebook;

  // Escape key & Click-outside listener to collapse back when flipped
  useEffect(() => {
    if (!isFlipped) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsFlipped(false);
      }
    };

    const handleClickOutside = (e) => {
      if (cardRef.current && !cardRef.current.contains(e.target)) {
        setIsFlipped(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    const timer = setTimeout(() => {
      document.addEventListener('click', handleClickOutside);
    }, 20);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      clearTimeout(timer);
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isFlipped]);

  // Subtle 3D tilt calculation on desktop pointer move (disabled when flipped or on reduced motion)
  const handleMouseMove = (e) => {
    if (isFlipped || !cardRef.current || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotX = ((y - centerY) / centerY) * -3.5;
    const rotY = ((x - centerX) / centerX) * 3.5;
    setTilt({ x: rotX, y: rotY });
  };

  const handleMouseEnter = () => {
    if (!isFlipped) setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0 });
  };

  const handleCardClick = (e) => {
    // Prevent flip if clicking an active action link or button
    if (e.target.closest('button') || e.target.closest('a')) {
      return;
    }
    setIsFlipped(!isFlipped);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setIsFlipped(!isFlipped);
    }
  };

  const projectCode = `MCR · 0${index + 1}`;

  return (
    <motion.div
      className={`digital-card-container ${isFlipped ? 'is-active' : ''}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.45, 
        delay: Math.min(index * 0.05, 0.3),
        ease: [0.16, 1, 0.3, 1] 
      }}
    >
      <div
        ref={cardRef}
        className={`digital-card-wrapper ${isFlipped ? 'is-flipped' : ''} ${isHovered && !isFlipped ? 'is-hovered' : ''}`}
        onClick={handleCardClick}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onKeyDown={handleKeyDown}
        role="button"
        tabIndex={0}
        aria-label={`${project.clientName} - ${project.projectTitle}. ${isFlipped ? 'Specifications view. Click to flip back.' : 'Preview view. Click to flip for technical specifications.'}`}
        style={{
          transform: !isFlipped && isHovered
            ? `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translateY(-5px)`
            : undefined
        }}
      >
        {/* ========================================================
            CARD FRONT: ONLY Body (Company Logo, Company Name, Product Name)
           ======================================================== */}
        <div className="card-side card-front">
          {/* Centered Main Brand Identity Body */}
          <div className="front-identity-wrap">
            <div className="front-logo-stage">
              <div className="logo-glow-halo" />
              <img 
                src={resolveLogoPath(project.clientLogo)} 
                alt={`${project.clientName} logo`} 
                className="front-logo-img" 
                width="190"
                height="48"
                loading="eager"
                onError={(e) => {
                  if (!e.target.dataset.fallback) {
                    e.target.dataset.fallback = 'true';
                    e.target.src = '/assets/logo.png';
                  }
                }}
              />
            </div>
            
            <h3 className="front-client-name">{project.clientName}</h3>
            
            <div className="front-product-wrap">
              <h4 className="front-product-name">{project.projectTitle}</h4>
            </div>
          </div>
        </div>

        {/* ========================================================
            CARD BACK (Technical Specifications & Primary Case Study)
           ======================================================== */}
        <div className="card-side card-back">
          {/* Header */}
          <div className="back-header-row">
            <div className="back-brand-info">
              <img 
                src={resolveLogoPath(project.clientLogo)} 
                alt={`${project.clientName} logo`} 
                className="back-logo-img" 
                loading="lazy"
                onError={(e) => {
                  if (!e.target.dataset.fallback) {
                    e.target.dataset.fallback = 'true';
                    e.target.src = '/assets/logo.png';
                  }
                }}
              />
              <div className="back-title-wrap">
                <h4 className="back-client-title">{project.clientName}</h4>
                <span className="back-spec-pill">{project.category}</span>
              </div>
            </div>

            <button
              type="button"
              className="back-close-flip-btn"
              onClick={(e) => {
                e.stopPropagation();
                setIsFlipped(false);
              }}
              title="Flip back to front"
              aria-label="Flip back to front"
            >
              <RotateCw size={13} />
            </button>
          </div>

          {/* Details Scroll Area */}
          <div className="back-scroll-area">
            {/* Overview / Description */}
            <p className="back-overview-para">
              {project.overview || project.shortDescription || ''}
            </p>

            {/* Dynamic Metric Highlight if present */}
            {Array.isArray(project.metrics) && project.metrics.length > 0 && (
              <div className="back-metric-badge">
                <span className="back-metric-val">{project.metrics[0].value || project.metrics[0].val}</span>
                <span className="back-metric-lbl">{project.metrics[0].label || project.metrics[0].name}</span>
              </div>
            )}

            {/* Deliverables / Features (Safely guarded) */}
            {(project.features || project.deliverables || project.highlights) && (project.features || project.deliverables || project.highlights).length > 0 && (
              <div className="back-spec-group">
                <h6 className="spec-group-title">Key Deliverables</h6>
                <ul className="spec-list">
                  {(project.features || project.deliverables || project.highlights).slice(0, 3).map((feat, idx) => (
                    <li key={idx} className="spec-list-item">
                      <CheckCircle2 size={13} className="spec-check" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Deployed Tech Stack / Architecture (Safely guarded) */}
            {(project.technologies || project.techStack || project.tools) && (project.technologies || project.techStack || project.tools).length > 0 && (
              <div className="back-spec-group">
                <h6 className="spec-group-title">Architecture &amp; Stack</h6>
                <div className="spec-tags-wrap">
                  {(project.technologies || project.techStack || project.tools).slice(0, 4).map((tech, idx) => (
                    <span key={idx} className="tech-tag-pill">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Clean Single Action Bar */}
          <div className="back-footer-row">
            <button
              type="button"
              className="btn btn-primary back-primary-action"
              onClick={(e) => {
                e.stopPropagation();
                onOpenModal(project);
              }}
            >
              <span>Explore Full Case Study</span>
              <ArrowUpRight size={14} />
            </button>

            <div className="back-actions-cluster">
              {instagramUrl && (
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="back-icon-link instagram-link"
                  onClick={(e) => e.stopPropagation()}
                  title={`${project.clientName} on Instagram`}
                  aria-label={`${project.clientName} on Instagram`}
                >
                  <InstagramIcon size={14} />
                </a>
              )}

              {facebookUrl && (
                <a
                  href={facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="back-icon-link facebook-link"
                  onClick={(e) => e.stopPropagation()}
                  title={`${project.clientName} on Facebook`}
                  aria-label={`${project.clientName} on Facebook`}
                >
                  <FacebookIcon size={14} />
                </a>
              )}

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="back-icon-link"
                  onClick={(e) => e.stopPropagation()}
                  title="View live website"
                  aria-label="View live website"
                >
                  <ExternalLink size={14} />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
