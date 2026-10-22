import React from 'react';
import { ExternalLink, ArrowUp } from 'lucide-react';
import { companyDetails } from '../data/portfolioData';
import './Footer.css';

// Crisp, harmonious vector brand icons
const LinkedInIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const InstagramIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const FacebookIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-main">
          {/* Brand & Purpose */}
          <div className="footer-brand-col">
            <a href="#top" className="footer-logo" onClick={scrollToTop}>
              <img
                src="/assets/logo.png"
                alt="Mercury Infotech"
                className="footer-logo-img"
              />
            </a>
            <p className="footer-desc">
              Empowering UK businesses with modern technology, bespoke software engineering, and result-driven digital solutions.
            </p>
          </div>

          {/* Quick Direct Links */}
          <div className="footer-links-col">
            <h4 className="footer-title">Official Links</h4>
            <ul className="footer-links-list">
              <li>
                <a
                  href={companyDetails.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link"
                >
                  <span>Official Website</span>
                  <ExternalLink size={13} />
                </a>
              </li>
              <li>
                <a
                  href="https://mercuryinfotech.co.uk/Home/Contact"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link"
                >
                  <span>Contact Headquarters</span>
                  <ExternalLink size={13} />
                </a>
              </li>
              <li>
                <a
                  href="https://mercuryinfotech.co.uk/Service/Product"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link"
                >
                  <span>Digital NFC Products</span>
                  <ExternalLink size={13} />
                </a>
              </li>
            </ul>
          </div>

          {/* Connect & Socials - Icons Only */}
          <div className="footer-social-col">
            <h4 className="footer-title">Connect</h4>
            <div className="footer-socials">
              <a
                href={companyDetails.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                aria-label="Mercury Infotech LinkedIn"
                title="LinkedIn"
              >
                <LinkedInIcon />
              </a>
              <a
                href={companyDetails.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                aria-label="Mercury Infotech Instagram"
                title="Instagram"
              >
                <InstagramIcon />
              </a>
              <a
                href={companyDetails.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                aria-label="Mercury Infotech Facebook"
                title="Facebook"
              >
                <FacebookIcon />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <p className="copyright-text">
            &copy; {companyDetails.copyrightYear} | Design By{' '}
            <a href={companyDetails.websiteUrl} target="_blank" rel="noopener noreferrer">
              Mercury Infotech
            </a>
            . All Rights Reserved.
          </p>

          <button
            type="button"
            className="scroll-top-btn"
            onClick={scrollToTop}
            aria-label="Scroll back to top"
          >
            <span>Back to Top</span>
            <ArrowUp size={15} />
          </button>
        </div>
      </div>
    </footer>
  );
}
