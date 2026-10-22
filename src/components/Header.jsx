import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Briefcase, 
  Layers,
  Send
} from 'lucide-react';
import './Header.css';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile sidebar is open to prevent background scrolling
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
    } else {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    };
  }, [mobileMenuOpen]);

  // Close sidebar on desktop resize or Escape key
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 960) {
        setMobileMenuOpen(false);
      }
    };
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const isMobile = window.innerWidth <= 960;
      const headerOffset = isMobile ? (isScrolled ? 64 : 72) : 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <header className={`site-header ${isScrolled ? 'is-scrolled' : ''}`}>
        <div className="container header-container">
          {/* Logo */}
          <a 
            href="#top" 
            className="header-logo" 
            onClick={(e) => scrollToSection(e, 'top')}
            aria-label="Mercury Infotech Home"
          >
            <img 
              src="/assets/logo.png" 
              alt="Mercury Infotech Logo" 
              className="logo-img" 
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="header-nav" aria-label="Main Navigation">
            <ul className="nav-list">
              <li>
                <a 
                  href="#services" 
                  className="nav-link"
                  onClick={(e) => scrollToSection(e, 'services')}
                >
                  Services
                </a>
              </li>
              <li>
                <a 
                  href="#work" 
                  className="nav-link"
                  onClick={(e) => scrollToSection(e, 'work')}
                >
                  Selected Work
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className="nav-link"
                  onClick={(e) => scrollToSection(e, 'contact')}
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          {/* Header Action Button & Bespoke Executive Toggle */}
          <div className="header-actions">
            <a 
              href="#contact" 
              className="btn btn-primary header-cta"
              onClick={(e) => scrollToSection(e, 'contact')}
            >
              <span>Start a Project</span>
              <ArrowRight size={16} />
            </a>

            {/* Professional Clean Navigation Toggle */}
            <button 
              type="button" 
              className={`mobile-toggle ${mobileMenuOpen ? 'is-active' : ''}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? "Close navigation sidebar" : "Open navigation sidebar"}
            >
              {mobileMenuOpen ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="4" x2="20" y1="6" y2="6" />
                  <line x1="4" x2="20" y1="12" y2="12" />
                  <line x1="4" x2="20" y1="18" y2="18" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Screen Dimming Backdrop */}
      <div 
        className={`mobile-backdrop ${mobileMenuOpen ? 'is-visible' : ''}`}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Off-Canvas Slide-Out Sidebar (Slides in from the side) */}
      <aside 
        className={`mobile-sidebar ${mobileMenuOpen ? 'is-open' : ''}`}
        aria-hidden={!mobileMenuOpen}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation Sidebar"
      >
        {/* Sidebar Header Bar with Logo and Custom Close Button */}
        <div className="sidebar-header">
          <a 
            href="#top" 
            className="sidebar-brand-link" 
            onClick={(e) => scrollToSection(e, 'top')}
          >
            <img 
              src="/assets/logo.png" 
              alt="Mercury Infotech Logo" 
              className="sidebar-logo-img" 
            />
          </a>

          <button
            type="button"
            className="sidebar-close-btn"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close sidebar navigation"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>
        </div>

        {/* Sidebar Body */}
        <div className="sidebar-body">
          <nav className="sidebar-nav" aria-label="Mobile Navigation Menu">
            <div className="sidebar-caption">Navigation</div>

            <ul className="sidebar-nav-list">
              <li>
                <a 
                  href="#services" 
                  className="sidebar-nav-link"
                  onClick={(e) => scrollToSection(e, 'services')}
                >
                  <span className="sidebar-link-content">
                    <span className="sidebar-icon-box">
                      <Layers size={18} />
                    </span>
                    <span className="sidebar-text-col">
                      <strong className="sidebar-link-title">Services &amp; Capabilities</strong>
                      <small className="sidebar-link-sub">What We Build &amp; Specialize In</small>
                    </span>
                  </span>
                  <ArrowRight size={16} className="sidebar-arrow" />
                </a>
              </li>
              <li>
                <a 
                  href="#work" 
                  className="sidebar-nav-link"
                  onClick={(e) => scrollToSection(e, 'work')}
                >
                  <span className="sidebar-link-content">
                    <span className="sidebar-icon-box">
                      <Briefcase size={18} />
                    </span>
                    <span className="sidebar-text-col">
                      <strong className="sidebar-link-title">Selected Client Work</strong>
                      <small className="sidebar-link-sub">Interactive Digital Portfolio</small>
                    </span>
                  </span>
                  <ArrowRight size={16} className="sidebar-arrow" />
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className="sidebar-nav-link"
                  onClick={(e) => scrollToSection(e, 'contact')}
                >
                  <span className="sidebar-link-content">
                    <span className="sidebar-icon-box">
                      <Send size={18} />
                    </span>
                    <span className="sidebar-text-col">
                      <strong className="sidebar-link-title">Contact &amp; Inquiries</strong>
                      <small className="sidebar-link-sub">Start Your Next Scope</small>
                    </span>
                  </span>
                  <ArrowRight size={16} className="sidebar-arrow" />
                </a>
              </li>
            </ul>

            {/* Sidebar CTA */}
            <div className="sidebar-cta-group">
              <a 
                href="#contact" 
                className="btn btn-primary btn-block sidebar-cta-btn"
                onClick={(e) => scrollToSection(e, 'contact')}
              >
                <span>Start a Project</span>
                <ArrowRight size={16} />
              </a>
            </div>
          </nav>
        </div>
      </aside>
    </>
  );
}
