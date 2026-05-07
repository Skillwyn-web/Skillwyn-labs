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
  Layers3,
  MonitorSmartphone,
  Rocket,
  Smartphone,
  Sparkles,
  Workflow,
} from 'lucide-react';
import './styles.css';

const capabilities = [
  'Autonomous AI agents',
  'Custom AI SaaS products',
  'Full-stack web apps',
  'Landing pages that convert',
  'Mobile app interfaces',
  'Business automations',
];

const services = [
  {
    icon: BrainCircuit,
    title: 'AI Product Systems',
    copy: 'We design AI-first products that can reason, automate workflows, answer users, and connect with real business tools.',
  },
  {
    icon: Bot,
    title: 'Autonomous Agents',
    copy: 'Custom agents for support, research, lead handling, operations, internal dashboards, and repetitive team tasks.',
  },
  {
    icon: Cpu,
    title: 'Custom AI SaaS',
    copy: 'From idea to launch-ready SaaS: auth, dashboards, AI features, payments, admin flows, and deployment.',
  },
  {
    icon: Code2,
    title: 'Full-Stack Builds',
    copy: 'Modern websites, web apps, landing pages, APIs, databases, and responsive frontends built cleanly.',
  },
  {
    icon: MonitorSmartphone,
    title: 'Websites and Apps',
    copy: 'Professional portfolio sites, business websites, client portals, mobile app screens, and product interfaces.',
  },
  {
    icon: Workflow,
    title: 'Automation Workflows',
    copy: 'Connect forms, CRMs, email, sheets, APIs, AI models, and internal tools into reliable workflows.',
  },
];

const productTypes = [
  'AI chatbot platforms',
  'Lead generation systems',
  'Client booking portals',
  'Internal team dashboards',
  'AI content tools',
  'Marketplace web apps',
  'Startup MVPs',
  'Automation control panels',
];

function App() {
  return (
    <main className="site-shell">
      <nav className="topbar" aria-label="Primary navigation">
        <a className="brand" href="#home" aria-label="Skillwyn Labs home">
          <span className="brand-mark">SL</span>
          <span>Skillwyn Labs</span>
        </a>
        <div className="nav-links">
          <a href="#services">Services</a>
          <a href="#products">Products</a>
          <a href="#process">Process</a>
          <a href="#contact">Contact</a>
        </div>
        <a className="nav-cta" href="mailto:hello@skillwynlabs.com">
          Build with us
        </a>
      </nav>

      <section id="home" className="hero">
        <div className="hero-copy">
          <p className="eyebrow">AI autonomous product studio</p>
          <h1>We build AI products, SaaS, apps, and automations.</h1>
          <p className="hero-text">
            Skillwyn Labs helps businesses turn ideas into polished digital
            products: autonomous AI systems, custom AI SaaS, full-stack
            websites, landing pages, web apps, mobile apps, and workflow
            automations.
          </p>

          <div className="hero-actions">
            <a className="button primary" href="mailto:hello@skillwynlabs.com">
              Start a Project <ArrowRight size={18} aria-hidden="true" />
            </a>
            <a className="button secondary" href="#services">
              Explore Services
            </a>
          </div>

          <div className="capability-strip" aria-label="What we build">
            {capabilities.map((item) => (
              <span key={item}>
                <Check size={15} aria-hidden="true" />
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="hero-stage" aria-label="AI product studio preview">
          <img src="/ai-product-hero.png" alt="3D AI product ecosystem" />
          <div className="glass-card card-one">
            <Sparkles size={18} aria-hidden="true" />
            <span>AI SaaS</span>
          </div>
          <div className="glass-card card-two">
            <Workflow size={18} aria-hidden="true" />
            <span>Automation</span>
          </div>
          <div className="glass-card card-three">
            <Rocket size={18} aria-hidden="true" />
            <span>Launch Ready</span>
          </div>
        </div>
      </section>

      <section className="proof-row" aria-label="Build focus">
        <div>
          <strong>AI-first</strong>
          <span>Products designed around intelligence, not just pages.</span>
        </div>
        <div>
          <strong>Full-stack</strong>
          <span>Frontend, backend, API, database, and deployment.</span>
        </div>
        <div>
          <strong>Client-ready</strong>
          <span>Clean UI, responsive layout, and business-focused flow.</span>
        </div>
      </section>

      <section id="services" className="section">
        <div className="section-heading">
          <p className="eyebrow">What we do</p>
          <h2>From AI idea to usable product.</h2>
          <p>
            We combine product thinking, UI/UX, development, AI integration,
            and automation so your product feels complete from day one.
          </p>
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
          <p className="eyebrow">Products we can build</p>
          <h2>Offer clients something more powerful than a basic website.</h2>
          <p>
            Whether you need a premium landing page or a complete AI SaaS MVP,
            we shape the experience, build the interface, connect the logic, and
            prepare it for launch.
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
          <p className="eyebrow">How we work</p>
          <h2>Clear steps, premium execution.</h2>
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
            <p>We develop, test, connect integrations, deploy, and prepare handoff.</p>
          </article>
        </div>
      </section>

      <section id="contact" className="cta-section">
        <div>
          <p className="eyebrow">Ready for gigs</p>
          <h2>Send clients a serious product studio.</h2>
          <p>
            Tell us what you want to build: AI SaaS, automation, app, web app,
            landing page, or a complete full-stack product.
          </p>
        </div>
        <a className="button primary" href="mailto:hello@skillwynlabs.com">
          Discuss a Build <ArrowRight size={18} aria-hidden="true" />
        </a>
      </section>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
