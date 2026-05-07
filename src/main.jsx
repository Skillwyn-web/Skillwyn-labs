import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowRight,
  Check,
  Code2,
  Layers3,
  Rocket,
  ShieldCheck,
  Sparkles,
  Star,
} from 'lucide-react';
import './styles.css';

const services = [
  {
    icon: Layers3,
    title: 'Product Strategy',
    copy: 'Clear scope, feature priority, user journeys, and launch roadmap before design starts.',
  },
  {
    icon: Sparkles,
    title: 'UI/UX Design',
    copy: 'Premium interfaces for SaaS, portfolio, marketplace, dashboards, and client portals.',
  },
  {
    icon: Code2,
    title: 'Web Development',
    copy: 'Fast React websites with clean code, responsive layouts, SEO basics, and deployment.',
  },
  {
    icon: Rocket,
    title: 'Launch Support',
    copy: 'GitHub, Vercel, analytics, performance checks, and post-launch polish handled end to end.',
  },
];

const products = [
  'Business portfolio websites',
  'Landing pages for ads',
  'Booking and lead forms',
  'Admin dashboards',
  'SaaS MVP interfaces',
  'E-commerce storefronts',
];

const work = [
  {
    name: 'NovaLaunch',
    type: 'Startup Landing Page',
    metric: '+42% demo requests',
  },
  {
    name: 'AtlasOps',
    type: 'Operations Dashboard',
    metric: '3x faster reporting',
  },
  {
    name: 'Maison Retail',
    type: 'Premium Storefront',
    metric: '+28% checkout flow',
  },
];

function App() {
  return (
    <main className="site-shell">
      <nav className="topbar" aria-label="Primary navigation">
        <a className="brand" href="#home" aria-label="Skillwyn Labs home">
          <span className="brand-mark">S</span>
          <span>Skillwyn Labs</span>
        </a>
        <div className="nav-links">
          <a href="#services">Services</a>
          <a href="#products">Products</a>
          <a href="#work">Work</a>
          <a href="#contact">Contact</a>
        </div>
        <a className="nav-cta" href="mailto:hello@skillwynlabs.com">
          Start a Project
        </a>
      </nav>

      <section id="home" className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Web design and product studio</p>
          <h1>Premium websites that turn visitors into clients.</h1>
          <p className="hero-text">
            We design and build sharp portfolio sites, product pages, dashboards,
            and launch-ready web apps for founders, creators, and growing teams.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="mailto:hello@skillwynlabs.com">
              Get a Proposal <ArrowRight size={18} aria-hidden="true" />
            </a>
            <a className="button secondary" href="#work">
              View Work
            </a>
          </div>
          <div className="trust-row" aria-label="Highlights">
            <span>
              <Star size={16} aria-hidden="true" /> Client-ready design
            </span>
            <span>
              <ShieldCheck size={16} aria-hidden="true" /> Deployment included
            </span>
          </div>
        </div>
        <div className="hero-visual" aria-label="Digital product studio preview">
          <img src="/studio-hero.png" alt="Premium digital product studio desk" />
          <div className="floating-panel">
            <span>Launch score</span>
            <strong>98%</strong>
            <small>Performance-ready build</small>
          </div>
        </div>
      </section>

      <section className="metrics" aria-label="Studio metrics">
        <div>
          <strong>15+</strong>
          <span>Project types supported</span>
        </div>
        <div>
          <strong>7 day</strong>
          <span>Fast landing page sprints</span>
        </div>
        <div>
          <strong>100%</strong>
          <span>Responsive builds</span>
        </div>
      </section>

      <section id="services" className="section">
        <div className="section-heading">
          <p className="eyebrow">Services</p>
          <h2>Everything needed to look serious online.</h2>
          <p>
            From first idea to polished deployment, we package strategy, design,
            development, and launch work into one calm process.
          </p>
        </div>
        <div className="service-grid">
          {services.map(({ icon: Icon, title, copy }) => (
            <article className="service-card" key={title}>
              <Icon size={24} aria-hidden="true" />
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="products" className="product-band">
        <div className="product-copy">
          <p className="eyebrow">Products</p>
          <h2>Web products clients can understand in one scroll.</h2>
          <p>
            We create sites that explain your value clearly, build trust fast,
            and make it easy for a client to message, book, or buy.
          </p>
        </div>
        <div className="product-list">
          {products.map((product) => (
            <div className="product-item" key={product}>
              <Check size={18} aria-hidden="true" />
              <span>{product}</span>
            </div>
          ))}
        </div>
      </section>

      <section id="work" className="section">
        <div className="section-heading">
          <p className="eyebrow">Selected concepts</p>
          <h2>Portfolio formats built to win gigs.</h2>
        </div>
        <div className="work-grid">
          {work.map((item) => (
            <article className="work-card" key={item.name}>
              <div>
                <span>{item.type}</span>
                <h3>{item.name}</h3>
              </div>
              <strong>{item.metric}</strong>
            </article>
          ))}
        </div>
      </section>

      <section className="process-section">
        <div className="section-heading">
          <p className="eyebrow">Process</p>
          <h2>Simple, direct, and built for momentum.</h2>
        </div>
        <div className="process-grid">
          <div>
            <span>01</span>
            <h3>Discover</h3>
            <p>We define offer, audience, pages, and the strongest conversion path.</p>
          </div>
          <div>
            <span>02</span>
            <h3>Design</h3>
            <p>We shape a polished interface with content hierarchy and visual trust.</p>
          </div>
          <div>
            <span>03</span>
            <h3>Develop</h3>
            <p>We build responsive React pages and prepare them for production deploy.</p>
          </div>
        </div>
      </section>

      <section id="contact" className="cta-section">
        <div>
          <p className="eyebrow">Book a build</p>
          <h2>Send this site to clients with confidence.</h2>
          <p>
            Need a portfolio, business website, product page, or MVP interface?
            Tell us what you are selling and we will shape the web experience.
          </p>
        </div>
        <a className="button primary" href="mailto:hello@skillwynlabs.com">
          hello@skillwynlabs.com <ArrowRight size={18} aria-hidden="true" />
        </a>
      </section>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
