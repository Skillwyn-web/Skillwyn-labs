import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowRight,
  Bot,
  BrainCircuit,
  Check,
  Code2,
  Cpu,
  Globe,
  MonitorSmartphone,
  Smartphone,
  Workflow,
} from 'lucide-react';
import './styles.css';

const capabilities = [
  'AI agents',
  'Custom SaaS',
  'Web apps',
  'Landing pages',
  'Mobile apps',
  'Automations',
];

const services = [
  {
    icon: BrainCircuit,
    title: 'AI Product Systems',
    copy: 'AI-first products that reason, automate workflows, answer users, and connect with business tools.',
  },
  {
    icon: Bot,
    title: 'Autonomous Agents',
    copy: 'Agents for support, research, lead handling, operations, dashboards, and repetitive team tasks.',
  },
  {
    icon: Cpu,
    title: 'Custom AI SaaS',
    copy: 'Auth, dashboards, AI features, payments, admin flows, integrations, and production deployment.',
  },
  {
    icon: Code2,
    title: 'Full-Stack Builds',
    copy: 'Modern websites, web apps, landing pages, APIs, databases, and responsive frontends.',
  },
  {
    icon: MonitorSmartphone,
    title: 'Websites and Apps',
    copy: 'Portfolio sites, business websites, client portals, mobile screens, and product interfaces.',
  },
  {
    icon: Workflow,
    title: 'Automation Workflows',
    copy: 'Forms, CRMs, email, sheets, APIs, AI models, and internal tools connected into systems.',
  },
];

const productTypes = [
  'AI chatbot platforms',
  'Lead generation systems',
  'Client booking portals',
  'Internal dashboards',
  'AI content tools',
  'Marketplace web apps',
  'Startup MVPs',
  'Automation panels',
];

function App() {
  return (
    <main className="site-shell">
      <nav className="topbar" aria-label="Primary navigation">
        <a className="brand" href="#home" aria-label="Skillwyn Labs home">
          <span className="brand-mark">SL</span>
        </a>
        <div className="nav-links">
          <a href="#services">Services</a>
          <a href="#products">Products</a>
          <a href="#process">Process</a>
          <a href="#contact">Contact</a>
        </div>
        <a className="nav-cta" href="mailto:hello@skillwynlabs.com">
          Contact
        </a>
      </nav>

      <section id="home" className="hero">
        <div className="hero-copy">
          <p className="availability">
            <span aria-hidden="true" /> Available for new builds
          </p>
          <p className="eyebrow">Skillwyn Labs</p>
          <h1>
            We build AI products, SaaS platforms, websites and automations.
          </h1>
          <p className="hero-text">
            We are a product studio that builds autonomous AI tools, custom AI
            SaaS products, full-stack websites, landing pages, web apps, mobile
            apps, and business automation systems for modern brands and
            founders.
          </p>

          <div className="hero-actions">
            <a className="button primary" href="mailto:hello@skillwynlabs.com">
              Get in touch <ArrowRight size={17} aria-hidden="true" />
            </a>
            <a className="button secondary" href="#services">
              What we build
            </a>
          </div>

          <div className="capability-strip" aria-label="What we build">
            {capabilities.map((item) => (
              <span key={item}>
                <Check size={14} aria-hidden="true" />
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="showcase-wall" aria-label="Product previews">
          <article className="preview-card analytics-card">
            <span>Automation System</span>
            <strong>Lead engine</strong>
            <div className="bars">
              <i />
              <i />
              <i />
            </div>
          </article>
          <article className="preview-card phone-card">
            <Smartphone size={28} aria-hidden="true" />
            <strong>App UI</strong>
            <span>Mobile-first product flows</span>
          </article>
          <article className="preview-card hero-preview">
            <img src="/ai-product-hero.png" alt="AI product ecosystem preview" />
            <div>
              <span>AI SaaS Platform</span>
              <strong>Custom product dashboard</strong>
            </div>
          </article>
          <article className="preview-card automation-card">
            <Workflow size={26} aria-hidden="true" />
            <strong>Automation</strong>
            <span>APIs, CRMs, AI models</span>
          </article>
          <article className="preview-card compact-card">
            <Bot size={24} aria-hidden="true" />
            <strong>AI Agent</strong>
            <span>Always-on assistant</span>
          </article>
          <div className="cursor-tag">Skillwyn</div>
        </div>
      </section>

      <section className="about-panel">
        <div>
          <p className="eyebrow">About us</p>
          <h2>We are a product studio for AI, software, websites, apps, and automation.</h2>
        </div>
        <p>
          Skillwyn Labs helps brands, founders, and businesses turn ideas into
          working products. We build autonomous AI tools, AI-powered SaaS
          products, full-stack websites, high-converting landing pages, custom
          web apps, mobile app interfaces, and automation workflows that save
          time and create real business value.
        </p>
      </section>

      <section id="services" className="section">
        <div className="section-heading">
          <p className="eyebrow">Services</p>
          <h2>Built for founders, creators, and modern businesses.</h2>
        </div>

        <div className="service-grid">
          {services.map(({ icon: Icon, title, copy }) => (
            <article className="service-card" key={title}>
              <div className="icon-box">
                <Icon size={24} aria-hidden="true" />
              </div>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="products" className="product-section">
        <div className="product-copy">
          <p className="eyebrow">Product types</p>
          <h2>Send clients a studio that can build the whole thing.</h2>
          <p>
            Not just static pages. We build the product layer, automation layer,
            AI layer, and the interface clients actually use.
          </p>
        </div>

        <div className="product-orbit">
          {productTypes.map((item, index) => (
            <div className="orbit-item" key={item} style={{ '--i': index }}>
              <Globe size={17} aria-hidden="true" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>

      <section id="process" className="section process-section">
        <div className="section-heading">
          <p className="eyebrow">Process</p>
          <h2>Simple path from idea to launch.</h2>
        </div>
        <div className="process-grid">
          <article>
            <span>01</span>
            <h3>Map the product</h3>
            <p>We define users, workflows, features, pages, data, and AI behavior.</p>
          </article>
          <article>
            <span>02</span>
            <h3>Design the experience</h3>
            <p>We create clean layouts, strong sections, product flows, and visual polish.</p>
          </article>
          <article>
            <span>03</span>
            <h3>Build and launch</h3>
            <p>We develop, connect integrations, deploy, and prepare handoff.</p>
          </article>
        </div>
      </section>

      <section id="contact" className="cta-section">
        <div>
          <p className="eyebrow">Ready for gigs</p>
          <h2>Have a product idea? Let's build it properly.</h2>
          <p>
            Send your idea for an AI SaaS, automation, website, app, landing
            page, or full-stack product.
          </p>
        </div>
        <a className="button primary" href="mailto:hello@skillwynlabs.com">
          Start a build <ArrowRight size={17} aria-hidden="true" />
        </a>
      </section>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
