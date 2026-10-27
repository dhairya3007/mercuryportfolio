import React, { useState, useMemo, useRef, useEffect } from 'react';
import { portfolioProjects } from '../data/portfolioData';
import ClientCard from './ClientCard';
import { SlidersHorizontal, ChevronDown, Check, X, FolderKanban, RotateCcw } from 'lucide-react';
import './PortfolioSection.css';

export default function PortfolioSection({ onOpenModal }) {
  const [selectedCategory, setSelectedCategory] = useState('All Work');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Extract unique categories dynamically from data
  const categories = useMemo(() => {
    const rawCategories = portfolioProjects
      .map((p) => p.category)
      .filter(Boolean);
    const unique = Array.from(new Set(rawCategories));
    return ['All Work', ...unique];
  }, []);

  // Compute count of projects per category
  const categoryCounts = useMemo(() => {
    const counts = { 'All Work': portfolioProjects.length };
    portfolioProjects.forEach((p) => {
      if (p.category) {
        counts[p.category] = (counts[p.category] || 0) + 1;
      }
    });
    return counts;
  }, []);

  // Filter projects by category
  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'All Work') return portfolioProjects;
    return portfolioProjects.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  // Click outside listener & escape key to close dropdown
  useEffect(() => {
    if (!isDropdownOpen) return;

    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsDropdownOpen(false);
      }
    };

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isDropdownOpen]);

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

        {/* Dynamic Category Filter Toolbar */}
        <div className="portfolio-filter-toolbar">
          <div className="filter-top-row">
            {/* Category Dropdown Filter Box */}
            <div className="filter-dropdown-wrapper" ref={dropdownRef}>
              <div className="filter-label-group">
                <SlidersHorizontal size={14} className="filter-icon" />
                <span className="filter-label-text">Category Filter:</span>
              </div>

              <div className="custom-dropdown-box">
                <button
                  type="button"
                  className={`dropdown-trigger-btn ${isDropdownOpen ? 'active' : ''}`}
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  aria-haspopup="listbox"
                  aria-expanded={isDropdownOpen}
                  aria-label="Filter projects by category"
                >
                  <span className="dropdown-selected-name">{selectedCategory}</span>
                  <span className="dropdown-selected-count">
                    {categoryCounts[selectedCategory] || 0}
                  </span>
                  <ChevronDown size={15} className={`dropdown-chevron-icon ${isDropdownOpen ? 'open' : ''}`} />
                </button>

                {/* Dropdown Menu with Custom Scroller */}
                {isDropdownOpen && (
                  <div className="dropdown-options-menu" role="listbox">
                    <div className="dropdown-scroller">
                      {categories.map((cat) => (
                        <button
                          key={cat}
                          type="button"
                          role="option"
                          aria-selected={selectedCategory === cat}
                          className={`dropdown-option-row ${selectedCategory === cat ? 'selected' : ''}`}
                          onClick={() => {
                            setSelectedCategory(cat);
                            setIsDropdownOpen(false);
                          }}
                        >
                          <div className="option-title-wrap">
                            {selectedCategory === cat ? (
                              <Check size={14} className="option-check-icon" />
                            ) : (
                              <span className="option-bullet" />
                            )}
                            <span className="option-text">{cat}</span>
                          </div>
                          <span className="option-badge-count">{categoryCounts[cat] || 0}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Reset Button if filtered */}
              {selectedCategory !== 'All Work' && (
                <button
                  type="button"
                  className="btn-reset-filter"
                  onClick={() => setSelectedCategory('All Work')}
                  title="Reset to All Work"
                >
                  <RotateCcw size={12} />
                  <span>Reset</span>
                </button>
              )}
            </div>

            {/* Results Count Badge */}
            <div className="filter-summary-counter">
              <span>Showing <strong>{filteredProjects.length}</strong> of {portfolioProjects.length} projects</span>
            </div>
          </div>
        </div>

        {/* Selected Work Grid or Empty State */}
        {filteredProjects.length === 0 ? (
          <div className="portfolio-empty-state">
            <div className="empty-icon-wrap">
              <FolderKanban size={32} />
            </div>
            <h3>No Projects Found</h3>
            <p>There are currently no projects categorized under "{selectedCategory}".</p>
            <button
              type="button"
              className="btn btn-outline"
              onClick={() => setSelectedCategory('All Work')}
            >
              <span>Show All Projects</span>
            </button>
          </div>
        ) : (
          <div className="portfolio-grid">
            {filteredProjects.map((project, idx) => (
              <ClientCard
                key={project.id}
                project={project}
                onOpenModal={onOpenModal}
                index={idx}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

