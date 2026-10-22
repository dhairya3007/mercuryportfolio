import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowDown, 
  MessageSquare, 
  ExternalLink, 
  ShieldCheck, 
  Zap, 
  Award, 
  Sparkles, 
  CheckCircle2,
  Lock,
  ArrowRight
} from 'lucide-react';
import { portfolioProjects } from '../data/portfolioData';
import './Hero.css';

const HERO_SHOWCASE = [
  {
    id: 'apex-logistics',
    name: 'Apex Logistics UK',
    category: 'Cloud TMS & Telematics',
    domain: 'dispatch.apexlogistics.co.uk',
    image: '/assets/projects/apex-logistics.webp',
    metric: 'Real-Time Dispatch',
    stat: 'Sub-second GPS Telematics'
  },
  {
    id: 'novapay-terminal',
    name: 'NovaPay Global',
    category: 'Fintech Terminal',
    domain: 'terminal.novapay.co.uk',
    image: '/assets/projects/novapay-terminal.webp',
    metric: 'PCI-DSS Compliant',
    stat: '99.99% Core Uptime'
  },
  {
    id: 'aura-interiors',
    name: 'Aura Living London',
    category: 'Luxury Architecture',
    domain: 'auraliving.co.uk',
    image: '/assets/projects/aura-interiors.webp',
    metric: '3D Spatial Visualiser',
    stat: '4K Architectural Renders'
  }
];

// Safe asset resolver supporting local dev, subroutes, and GitHub Pages
const resolveAssetUrl = (path) => {
  if (!path) return '';
  if (path.startsWith('http')) return path;
  const base = import.meta.env.BASE_URL || './';
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  const cleanBase = base.endsWith('/') ? base : `${base}/`;
  return `${cleanBase}${cleanPath}`;
};

export default function Hero({ onOpenProject }) {
  const [activeTab, setActiveTab] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Preload all showcase images on mount so they appear instantly without latency or 404s
  useEffect(() => {
    HERO_SHOWCASE.forEach((item) => {
      const img = new Image();
      img.src = resolveAssetUrl(item.image);
    });
  }, []);

  // Auto-cycle tabs every 4.5s unless hovered
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % HERO_SHOWCASE.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [isPaused]);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const currentShowcase = HERO_SHOWCASE[activeTab];

  return (
    <section className="hero-section" id="top">
      <div className="ambient-glow glow-blue hero-glow-1"></div>
      <div className="ambient-glow glow-red hero-glow-2"></div>
      
      <div className="container hero-container">
        {/* Left Column: Text Content */}
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="hero-headline">
            <span className="headline-block">Digital Work.</span>{' '}
            <span className="headline-block gradient-text">Real Businesses.</span>{' '}
            <span className="headline-block">Meaningful Results.</span>
          </h1>

          <p className="hero-description">
            Explore the bespoke web applications, enterprise platforms, and digital client solutions engineered by Mercury Infotech for UK businesses.
          </p>

          <div className="hero-actions">
            <a 
              href="#work" 
              className="btn btn-primary hero-btn-main"
              onClick={(e) => scrollToSection(e, 'work')}
            >
              <span>Explore Client Work</span>
              <ArrowDown size={18} />
            </a>
            <a 
              href="#contact" 
              className="btn btn-secondary hero-btn-sub"
              onClick={(e) => scrollToSection(e, 'contact')}
            >
              <span>Discuss Your Project</span>
              <MessageSquare size={18} />
            </a>
          </div>

          {/* Trust Highlights */}
          <div className="hero-metrics">
            <div className="metric-item">
              <div className="metric-icon-wrap">
                <ShieldCheck size={20} className="metric-icon" />
              </div>
              <div className="metric-text">
                <span className="metric-value">13+</span>
                <span className="metric-label">Delivered Projects</span>
              </div>
            </div>

            <div className="metric-divider"></div>

            <div className="metric-item">
              <div className="metric-icon-wrap">
                <Zap size={20} className="metric-icon" />
              </div>
              <div className="metric-text">
                <span className="metric-value">23+</span>
                <span className="metric-label">UK Engagements</span>
              </div>
            </div>

            <div className="metric-divider"></div>

            <div className="metric-item">
              <div className="metric-icon-wrap">
                <Award size={20} className="metric-icon" />
              </div>
              <div className="metric-text">
                <span className="metric-value">100%</span>
                <span className="metric-label">Tailored Solutions</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Interactive Live Showcase Stage */}
        <motion.div 
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div 
            className="mockup-stage"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Interactive Tab Switcher */}
            <div className="showcase-switcher" role="tablist" aria-label="Featured Client Projects">
              {HERO_SHOWCASE.map((item, idx) => (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  aria-selected={activeTab === idx}
                  className={`showcase-tab ${activeTab === idx ? 'is-active' : ''}`}
                  onClick={() => {
                    setActiveTab(idx);
                    setIsPaused(true);
                  }}
                >
                  <span className="tab-dot" />
                  <span className="tab-name">{item.name}</span>
                </button>
              ))}
            </div>

            {/* Main Interactive Browser Mockup */}
            <div 
              className="browser-mockup main-mockup"
              onClick={() => onOpenProject && onOpenProject(currentShowcase.id)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onOpenProject && onOpenProject(currentShowcase.id);
                }
              }}
              title={`Click to view ${currentShowcase.name} full study`}
            >
              <div className="browser-chrome">
                <div className="chrome-dots">
                  <span className="dot dot-red"></span>
                  <span className="dot dot-yellow"></span>
                  <span className="dot dot-green"></span>
                </div>
                <div className="chrome-address-bar">
                  <Lock size={11} className="chrome-lock-icon" />
                  <span className="address-domain">{currentShowcase.domain}</span>
                  <span className="chrome-latency">
                    <span className="latency-dot"></span>
                    <span>98ms UK Edge</span>
                  </span>
                </div>
                <span className="chrome-badge">
                  <Sparkles size={11} />
                  <span>Verified System</span>
                </span>
              </div>

              <div className="browser-viewport">
                <AnimatePresence mode="wait">
                  <motion.img 
                    key={currentShowcase.id}
                    src={resolveAssetUrl(currentShowcase.image)} 
                    alt={`${currentShowcase.name} Preview`} 
                    className="mockup-img"
                    initial={{ opacity: 0, scale: 1.02 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.35 }}
                    loading="eager"
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (!target.dataset.fallbackLevel) {
                        target.dataset.fallbackLevel = '1';
                        // Try direct relative path
                        target.src = `assets/projects/${currentShowcase.id}.webp`;
                      } else if (target.dataset.fallbackLevel === '1') {
                        target.dataset.fallbackLevel = '2';
                        // Try root-relative path
                        target.src = `/assets/projects/${currentShowcase.id}.webp`;
                      }
                    }}
                  />
                </AnimatePresence>

                <div className="mockup-hover-overlay">
                  <span className="overlay-pill">
                    <span>Explore Full Case Study</span>
                    <ExternalLink size={14} />
                  </span>
                </div>
              </div>
            </div>

            {/* Floating Live Badge Card */}
            <div className="floating-card status-card">
              <div className="status-indicator">
                <span className="pulse-ring"></span>
                <span className="pulse-dot"></span>
              </div>
              <div className="status-text">
                <div className="status-row">
                  <strong>{currentShowcase.metric}</strong>
                  <CheckCircle2 size={13} className="status-check" />
                </div>
                <small>{currentShowcase.stat}</small>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Interactive Client Trust Strip */}
      <div className="hero-trust-marquee-wrapper">
        <div className="container">
          <div className="marquee-header">
            <span className="marquee-label">Trusted By Innovative UK Businesses &amp; Professional Practices</span>
          </div>
          <div className="marquee-track-container">
            <div className="marquee-track">
              {[...portfolioProjects, ...portfolioProjects].map((proj, idx) => (
                <div 
                  key={`${proj.id}-${idx}`} 
                  className="marquee-client-item"
                  onClick={() => {
                    const el = document.getElementById('work');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  title={`View ${proj.clientName} delivered platform`}
                >
                  <img 
                    src={resolveAssetUrl(proj.clientLogo)} 
                    alt={proj.clientName} 
                    className="marquee-logo-img" 
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
