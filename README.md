# Mercury Infotech — Dynamic Client Portfolio Website

A modern, fast, responsive single-page Client Portfolio Website built for **Mercury Infotech UK** using React, Vite, Framer Motion, and modern Vanilla CSS.

---

## 🚀 Features

- **Single-Page Portfolio Architecture**: Everything happens on a single, focused, responsive page. No separate routes or slow navigation.
- **Interactive Project Modals**: Clicking any client card opens a rich modal dialog displaying project overview, deliverables, tech stack, screenshots, and live links.
- **Dynamic Data-Driven Filtering**: Portfolio category filters automatically derive only from categories present in the data source (`src/data/portfolioData.js`).
- **Section 12 Premium Animated Cards**:
  - Restrained 3D tilt interaction on desktop pointer movement (disabled on touch devices).
  - Smooth image scale zoom (1.06x) and card lift on hover.
  - Dark gradient overlay reveal with "View Case Study" trigger.
  - Data-driven `featured: true` cards spanning prominent 2-column grid layouts.
- **Hero Showcase Collage**: Overlapping interactive browser mockups with direct click-to-modal triggers.
- **Fully Accessible**:
  - Keyboard navigation (Tab, Enter, Space).
  - Modal Escape key closure, focus restoration, and background scroll locking.
  - Respects `prefers-reduced-motion`.
- **Zero Third-Party Component Overhead**: Built with clean Vanilla CSS variables and Lucide icons for maximum speed and sub-second load times.

---

## 🛠️ Technology Stack

- **Framework**: [React 19](https://react.dev/) + [Vite](https://vite.dev/)
- **Styling**: Modern Vanilla CSS with CSS Variables & Tokens
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Typography**: Google Fonts (*Outfit*, *Plus Jakarta Sans*, *Space Grotesk*)

---

## 📂 Project Structure

```text
mercuryportfolio/
├── public/
│   ├── assets/
│   │   ├── clients/        # Client SVG logos (Apex, Kenton Legal, Vanguard, etc.)
│   │   ├── projects/       # High-resolution WebP project screenshots & UI mockups
│   │   └── logo.png        # Official Mercury Infotech logo
│   └── favicon.ico         # Official favicon
├── src/
│   ├── components/
│   │   ├── Header.jsx & Header.css
│   │   ├── Hero.jsx & Hero.css
│   │   ├── PortfolioSection.jsx & PortfolioSection.css
│   │   ├── PortfolioFilters.jsx & PortfolioFilters.css
│   │   ├── ClientCard.jsx & ClientCard.css
│   │   ├── ProjectModal.jsx & ProjectModal.css
│   │   ├── ServicesSection.jsx & ServicesSection.css
│   │   ├── ContactCTA.jsx & ContactCTA.css
│   │   └── Footer.jsx & Footer.css
│   ├── data/
│   │   └── portfolioData.js # Central data source for all projects & company details
│   ├── App.jsx & App.css
│   ├── index.css           # Global design system & tokens
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

---

## 🏃 Setup & Run Instructions

### 1. Install Dependencies
```bash
npm install
```

### 2. Start the Local Development Server
```bash
npm run dev
```
Then open your browser to `http://localhost:5173`.

### 3. Build for Production
```bash
npm run build
```
The optimized bundle will be created inside the `dist/` directory.

### 4. Preview the Production Build
```bash
npm run preview
```

---

## ➕ How to Add a New Client Project

Adding a new client project requires **no modification** to any React component! Simply add a new object to `portfolioProjects` in `src/data/portfolioData.js`:

```javascript
{
  id: "your-client-id",
  clientName: "Acme Corp",
  clientLogo: "/assets/clients/acme-logo.svg",
  projectTitle: "Next-Gen Enterprise Web Portal",
  category: "Web Applications",
  shortDescription: "Short one-sentence summary for the card preview.",
  overview: "Detailed paragraph explaining the challenges, solutions, and impact.",
  services: [
    "Custom Web Application",
    "UI/UX Design",
    "Cloud Architecture"
  ],
  technologies: ["React", "Node.js", "PostgreSQL"],
  features: [
    "Key deliverable 1",
    "Key deliverable 2",
    "Key deliverable 3"
  ],
  screenshots: [
    "/assets/projects/acme-desktop.webp"
  ],
  liveUrl: "https://acme-client.com",
  featured: false // Set to true for a prominent featured card
}
```

Categories will update dynamically in the filter bar, counts will refresh automatically, and clicking the card will instantly open the detailed modal.

---

## 🏢 Company Credentials & Contact Information

- **Company**: Mercury Infotech UK
- **Email**: [Info@mercuryinfotech.co.uk](mailto:Info@mercuryinfotech.co.uk)
- **Headquarters**: 11, Hillrise Court, 135 Kenton Rd, Harrow HA3 0AZ, United Kingdom
- **ICO Security Number**: CSN2076847
- **Official Website**: [https://mercuryinfotech.co.uk/](https://mercuryinfotech.co.uk/)
