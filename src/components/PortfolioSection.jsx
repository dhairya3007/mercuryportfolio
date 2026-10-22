import React from 'react';
import { portfolioProjects } from '../data/portfolioData';
import ClientCard from './ClientCard';
import './PortfolioSection.css';

export default function PortfolioSection({ onOpenModal }) {
  return (
    <section className="section portfolio-section" id="work">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <h2 className="section-title">
            Bespoke Engineering. <br />
            <span className="gradient-text">Selected Client Work.</span>
          </h2>
          <p className="section-subtitle">
            Explore the bespoke web applications, enterprise portals, and digital client solutions engineered by Mercury Infotech for UK businesses.
          </p>
        </div>

        {/* Selected Work Grid */}
        <div className="portfolio-grid">
          {portfolioProjects.map((project, idx) => (
            <ClientCard
              key={project.id}
              project={project}
              onOpenModal={onOpenModal}
              index={idx}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
