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

export default function ClientCard({ project, onOpenModal, index }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

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
                src={project.clientLogo} 
                alt={`${project.clientName} logo`} 
                className="front-logo-img" 
                width="190"
                height="48"
                loading="eager"
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
                src={project.clientLogo} 
                alt={`${project.clientName} logo`} 
                className="back-logo-img" 
                loading="lazy"
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
            {/* Overview */}
            <p className="back-overview-para">{project.overview}</p>

            {/* Deliverables */}
            <div className="back-spec-group">
              <h6 className="spec-group-title">Key Deliverables</h6>
              <ul className="spec-list">
                {project.features.slice(0, 3).map((feat, idx) => (
                  <li key={idx} className="spec-list-item">
                    <CheckCircle2 size={13} className="spec-check" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Deployed Tech Stack */}
            <div className="back-spec-group">
              <h6 className="spec-group-title">Architecture &amp; Stack</h6>
              <div className="spec-tags-wrap">
                {project.technologies.slice(0, 4).map((tech, idx) => (
                  <span key={idx} className="tech-tag-pill">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
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

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="back-icon-link"
                onClick={(e) => e.stopPropagation()}
                title="View live website"
              >
                <ExternalLink size={14} />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
