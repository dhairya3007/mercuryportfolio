import React, { useRef, useEffect } from 'react';
import './PortfolioFilters.css';

export default function PortfolioFilters({ 
  categories, 
  activeCategory, 
  onSelectCategory,
  counts 
}) {
  const containerRef = useRef(null);

  // Enable mouse drag scrolling for desktop & DevTools responsive view
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    let isDown = false;
    let startX = 0;
    let scrollLeft = 0;
    let dragged = false;

    const handleMouseDown = (e) => {
      // Only initiate drag on primary click inside container
      if (e.button !== 0) return;
      isDown = true;
      dragged = false;
      startX = e.pageX;
      scrollLeft = el.scrollLeft;
    };

    const handleMouseMove = (e) => {
      if (!isDown) return;
      const dx = e.pageX - startX;
      if (Math.abs(dx) > 6) {
        dragged = true;
        el.scrollLeft = scrollLeft - dx;
      }
    };

    const handleMouseUp = () => {
      isDown = false;
      // Reset dragged flag shortly so click can evaluate
      setTimeout(() => {
        dragged = false;
      }, 50);
    };

    // Horizontal wheel scroll support
    const handleWheel = (e) => {
      if (el.scrollWidth > el.clientWidth) {
        if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
          e.preventDefault();
          el.scrollLeft += e.deltaY;
        }
      }
    };

    el.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    el.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      el.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      el.removeEventListener('wheel', handleWheel);
    };
  }, []);

  const handleCategoryClick = (category, e) => {
    onSelectCategory(category);

    // Smoothly scroll the selected filter into view
    if (e.currentTarget && containerRef.current) {
      const container = containerRef.current;
      const target = e.currentTarget;
      const targetLeft = target.offsetLeft;
      const targetWidth = target.offsetWidth;
      const containerWidth = container.offsetWidth;

      container.scrollTo({
        left: targetLeft - (containerWidth / 2) + (targetWidth / 2),
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="portfolio-filters-wrapper">
      <div 
        className="portfolio-filters-container" 
        role="region" 
        aria-label="Portfolio Category Filters"
        ref={containerRef}
      >
        {categories.map((category) => {
          const isActive = activeCategory === category;
          const count = counts[category] || 0;

          return (
            <button
              key={category}
              type="button"
              className={`filter-btn ${isActive ? 'is-active' : ''}`}
              onClick={(e) => handleCategoryClick(category, e)}
              aria-pressed={isActive}
            >
              <span className="filter-name">{category}</span>
              <span className="filter-count">{count}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
