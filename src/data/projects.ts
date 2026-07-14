export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  github?: string;
  live?: string;
  features: string[];
  challenges?: string;
  learnings?: string;
  category: "engineering" | "client";
}

export const projects: Project[] = [
  {
    slug: "chess-analyzer",
    title: "Chess Analyzer",
    description:
      "Lichess sync, pattern detection, and training engine. Rust workspace with core and web crates.",
    longDescription:
      "A systems-level chess analysis engine built in Rust. Syncs games from Lichess, runs pattern detection on move sequences, and produces training recommendations. Workspace architecture separates core logic from the web layer.",
    tags: ["Rust", "Systems", "WebAssembly", "Chess", "CLI"],
    github: "https://github.com/MinotaurG/chess-analyzer",
    features: [
      "Rust workspace with core + web crates",
      "Lichess API integration for game sync",
      "Pattern detection on move sequences",
      "Training recommendation engine",
      "WebAssembly compilation target for browser use",
    ],
    category: "engineering",
  },
  {
    slug: "mellow-nova",
    title: "Mellow Nova",
    description:
      "Personal finance mobile app. Bank statement ingestion, spending breakdown, bills tracking, AI chat.",
    longDescription:
      "A local-first personal finance app that ingests bank statements, categorizes transactions, tracks recurring bills, and offers an AI chat interface for querying your financial data naturally.",
    tags: ["React Native", "Expo", "TypeScript", "AI", "Mobile"],
    github: "https://github.com/MinotaurG/mellow-nova",
    features: [
      "Bank statement PDF/CSV ingestion",
      "Automatic transaction categorization",
      "Spending breakdown with visualizations",
      "Recurring bills detection and tracking",
      "AI chat interface for natural language financial queries",
      "Local-first architecture, no data leaves your device",
    ],
    category: "engineering",
  },
  {
    slug: "jobagent",
    title: "JobAgent",
    description:
      "AI-powered job search automation. Go rules engine paired with Python AI orchestrator.",
    longDescription:
      "A polyglot system that automates job searching. A Go rules engine handles filtering, scoring, and matching logic while a Python orchestrator manages AI-powered cover letter generation, application tracking, and multi-platform scraping.",
    tags: ["Go", "Python", "AI", "Automation", "Polyglot"],
    github: "https://github.com/MinotaurG/jobagent",
    features: [
      "Go rules engine for job filtering and scoring",
      "Python AI orchestrator for cover letter generation",
      "Multi-platform job board scraping",
      "Application tracking and status management",
      "Configurable matching criteria",
    ],
    category: "engineering",
  },
  {
    slug: "medusa-plugins",
    title: "Medusa Plugins (OSS)",
    description:
      "3 published npm packages for Indian e-commerce: Razorpay payments, Shiprocket fulfillment, Cash on Delivery.",
    longDescription:
      "A suite of open-source plugins extending Medusa.js for the Indian market. Handles UPI/card/wallet payments via Razorpay, multi-courier shipping via Shiprocket, and Cash on Delivery workflows. Published on npm and used in production.",
    tags: ["TypeScript", "Medusa.js", "npm", "Open Source", "Payments"],
    github: "https://github.com/MinotaurG/medusa-payment-razorpay",
    live: "https://www.npmjs.com/package/@minotaurg/medusa-payment-razorpay",
    features: [
      "@minotaurg/medusa-payment-razorpay: UPI, cards, wallets, net banking",
      "@minotaurg/medusa-fulfillment-shiprocket: multi-courier shipping",
      "medusa-payment-cod: Cash on Delivery with order verification",
      "Full webhook handling and idempotent processing",
      "Production-tested on live e-commerce store",
    ],
    category: "engineering",
  },
  {
    slug: "fb-flat-finder",
    title: "fb-flat-finder",
    description:
      "Facebook Marketplace flat scraper with ML classification and model fine-tuning.",
    longDescription:
      "An automated system for finding rental listings on Facebook Marketplace. Scrapes listings with Playwright, classifies them using a fine-tuned HuggingFace model, and surfaces matches through a Flask dashboard.",
    tags: ["Python", "Playwright", "ML", "Flask", "HuggingFace"],
    github: "https://github.com/MinotaurG/fb-flat-finder",
    features: [
      "Automated Playwright scraper for Facebook Marketplace",
      "ML classification of listing quality and relevance",
      "HuggingFace model fine-tuning on labeled listing data",
      "Flask dashboard for browsing and filtering matches",
      "Configurable search criteria and location targeting",
    ],
    category: "engineering",
  },
  {
    slug: "ctx",
    title: "ctx",
    description:
      "Project context tracker for AI chat continuity. Rust CLI, published via Homebrew.",
    longDescription:
      "A CLI tool that maintains project context across AI chat sessions. Captures directory structure, recent changes, and configuration to give AI assistants the context they need without re-explaining. Built in Rust, distributed via Homebrew.",
    tags: ["Rust", "CLI", "Homebrew", "Developer Tools"],
    github: "https://github.com/MinotaurG/ctx",
    features: [
      "Captures project structure and recent git changes",
      "Generates concise context summaries for AI chats",
      "Respects .gitignore and custom exclusion patterns",
      "Published via Homebrew for easy installation",
      "Fast execution, written in Rust",
    ],
    category: "engineering",
  },
  {
    slug: "sd18-store",
    title: "SD18 Store",
    description:
      "Full sports e-commerce platform built on Medusa v2 + Next.js. Includes the 3 OSS plugins built for this.",
    longDescription:
      "A production e-commerce platform for a sports brand. Built end-to-end on Medusa v2 with a Next.js storefront. The Razorpay, Shiprocket, and COD plugins were created specifically for this project and later extracted as open-source packages.",
    tags: ["Medusa v2", "Next.js", "TypeScript", "E-commerce"],
    live: "https://sd18store.com",
    features: [
      "Full storefront with product catalog and cart",
      "Razorpay payment integration (UPI, cards, wallets)",
      "Shiprocket multi-courier fulfillment",
      "Cash on Delivery with verification workflow",
      "Admin dashboard for inventory and order management",
    ],
    category: "client",
  },
  {
    slug: "siddhidatri",
    title: "Siddhidatri Website",
    description:
      "Corporate website with admin panel, careers, leadership, and CSR pages. Next.js + Sanity CMS.",
    longDescription:
      "A corporate website with a full admin panel powered by Sanity CMS. Covers careers, leadership profiles, CSR initiatives, and company information. Content team manages everything through the CMS without developer intervention.",
    tags: ["Next.js", "Sanity", "TypeScript", "CMS"],
    live: "https://www.siddhidatriaahar.com/",
    features: [
      "Sanity CMS for content management",
      "Careers page with job listings and applications",
      "Leadership and team profiles",
      "CSR and company initiatives section",
      "Fully editable by non-technical team",
    ],
    category: "client",
  },
  {
    slug: "finder-io",
    title: "finder.io (500apps)",
    description:
      "SEO growth from 300 to 900 signups/month. Custom ML model for keyword analysis and traffic forecasting.",
    longDescription:
      "Took a mid-tier product from 300 to 900 monthly signups through custom ML-driven SEO strategy. Built NLP and NeuralProphet models for keyword analysis and traffic forecasting. Product went from middle of the pack to #1 in a 40-product suite.",
    tags: ["Python", "NLP", "NeuralProphet", "SEO", "ML"],
    live: "https://finder.io",
    features: [
      "Custom ML model for keyword opportunity scoring",
      "NeuralProphet traffic forecasting",
      "NLP-based content gap analysis",
      "300 to 900 monthly signups (3x growth)",
      "Took product to #1 ranking in 40-product suite",
    ],
    category: "client",
  },
  {
    slug: "mulyam-jewels",
    title: "Mulyam Jewels",
    description:
      "D2C jewelry storefront. React SPA with mobile-first design.",
    longDescription:
      "A direct-to-consumer jewelry storefront built as a React single-page application. Mobile-first design with product catalogs, filtering, and a streamlined purchase flow.",
    tags: ["React", "Vite", "TypeScript", "D2C", "Mobile-first"],
    live: "https://mulyamjewels.com/",
    features: [
      "Mobile-first responsive design",
      "Product catalog with category filtering",
      "Image-heavy layout optimized for performance",
      "Streamlined purchase flow",
      "Built with Vite for fast development and builds",
    ],
    category: "client",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getEngineeringProjects(): Project[] {
  return projects.filter((p) => p.category === "engineering");
}

export function getClientProjects(): Project[] {
  return projects.filter((p) => p.category === "client");
}
