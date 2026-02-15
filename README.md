# TQ_Rating Server Dashboard

A React dashboard for the TQ_Trust Platform - telecommunications fraud detection system by Teraquant Corporation.

## Features

- **Fraud Type Analysis** - Donut chart visualization of fraud categories
- **Severity Levels** - Critical, Significant, and Suspicious threat breakdown
- **Call Treatment** - Allowed vs blocked call metrics
- **Carrier Analysis** - Threat distribution across carriers with filtering
- **Phone Threats** - Top 15 threatening phone numbers
- **Global Threat Map** - Interactive world map with geographic threat origins
- **Real-time Filtering** - Dynamic data filtering by severity levels
- **Responsive Design** - Works on desktop, tablet, and mobile

## Tech Stack

- React 19 + Vite
- Recharts for charts
- React-Leaflet for maps
- Tailwind CSS v4 for styling

## Quick Start

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```

## Live Demo

View the live dashboard: [GitHub Pages URL]

## Project Structure

```
src/
├── components/          # Dashboard components
│   ├── Dashboard.jsx
│   ├── FraudTypeChart.jsx
│   ├── SeverityChart.jsx
│   ├── CallTreatmentChart.jsx
│   ├── ThreatInfoPanel.jsx
│   ├── CarrierChart.jsx
│   ├── ThreatsListChart.jsx
│   └── ThreatMap.jsx
└── data/
    └── dummyData.js     # Dummy data for POC
```

## About

Developed for Teraquant Corporation
Boulder, Colorado
Proof of Concept Dashboard
