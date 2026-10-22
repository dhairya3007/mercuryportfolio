import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  MapPin, 
  Send, 
  MessageSquare, 
  ExternalLink, 
  CheckCircle, 
  ArrowRight
} from 'lucide-react';
import { companyDetails } from '../data/portfolioData';
import './ContactCTA.css';

export default function ContactCTA({ prefilledSubject = '' }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Website Development',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate seamless client dispatch or launch mailto
    const subject = encodeURIComponent(`Project Inquiry: ${formData.service} — ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nService Interested: ${formData.service}\n\nProject Scope:\n${formData.message}`
    );
    
    // Set submitted state for friendly feedback
    setSubmitted(true);
    
    // Also trigger mailto so it directly opens default client with all fields filled
    window.location.href = `mailto:${companyDetails.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section className="section contact-section" id="contact">
      <div className="container">
        <div className="contact-card">
          <div className="contact-glow-shape"></div>

          <div className="contact-grid">
            {/* Left Column: Heading and Actual Company Details */}
            <div className="contact-info-col">
              <h2 className="contact-heading">
                Have a Project <br />
                <span className="gradient-text">in Mind?</span>
              </h2>

              <p className="contact-lead">
                Let's turn your next idea into something worth showcasing.
              </p>

              <div className="contact-details-list">
                <div className="contact-item">
                  <div className="contact-icon-box">
                    <Mail size={18} />
                  </div>
                  <div className="contact-item-text">
                    <span className="contact-label">Direct Email</span>
                    <a href={`mailto:${companyDetails.email}`} className="contact-link">
                      {companyDetails.email}
                    </a>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon-box">
                    <MapPin size={18} />
                  </div>
                  <div className="contact-item-text">
                    <span className="contact-label">Registered UK Office</span>
                    <p className="contact-address">{companyDetails.address}</p>
                  </div>
                </div>
              </div>

              {/* Official Link */}
              <div className="official-contact-link-wrap">
                <a 
                  href="https://mercuryinfotech.co.uk/Home/Contact" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="official-contact-link"
                >
                  <span>Open Official Contact Page</span>
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>

            {/* Right Column: Interactive Project Inquiry Form */}
            <div className="contact-form-col">
              {submitted ? (
                <motion.div 
                  className="contact-success-box"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <div className="success-icon-wrap">
                    <CheckCircle size={36} />
                  </div>
                  <h3>Thank You for Reaching Out!</h3>
                  <p>
                    Your message draft has been prepared for <strong>{companyDetails.email}</strong>. Our UK team typically responds within 1 business day.
                  </p>
                  <button
                    type="button"
                    className="btn btn-secondary mt-3"
                    onClick={() => setSubmitted(false)}
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form className="inquiry-form" onSubmit={handleSubmit}>
                  <div className="form-header">
                    <h3>Start a Conversation</h3>
                    <p>Tell us about your requirements or budget.</p>
                  </div>

                  <div className="form-group">
                    <label htmlFor="client-name">Your Name</label>
                    <input
                      id="client-name"
                      type="text"
                      required
                      placeholder="e.g. Sarah Jenkins"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="client-email">Email Address</label>
                    <input
                      id="client-email"
                      type="email"
                      required
                      placeholder="e.g. sarah@company.co.uk"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="service-select">Required Capability</label>
                    <select
                      id="service-select"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    >
                      <option value="Website Development">Website Development</option>
                      <option value="Web Applications & CRM">Web Applications &amp; CRM</option>
                      <option value="Mobile Applications">Mobile Applications</option>
                      <option value="Branding & Graphic Design">Branding &amp; Graphic Design</option>
                      <option value="Digital NFC & Dynamic QR Solution">Digital NFC &amp; Dynamic QR Solution</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="project-msg">Brief Project Scope</label>
                    <textarea
                      id="project-msg"
                      rows={4}
                      required
                      placeholder="What are your main goals, timeline, or reference ideas?"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  <button type="submit" className="btn btn-primary btn-block form-submit-btn">
                    <span>Send Project Inquiry</span>
                    <Send size={16} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
