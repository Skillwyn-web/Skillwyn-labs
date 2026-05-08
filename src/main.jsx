import React, { useEffect, useState } from 'react';
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
  Workflow,
} from 'lucide-react';
import './styles.css';

const typedServices = [
  'autonomous AI products',
  'custom AI SaaS platforms',
  'full-stack websites',
  'landing pages',
  'web apps',
  'mobile apps',
  'business automations',
];

const aiExperiences = [
  {
    label: 'AI',
    title: 'Autonomous product agents',
    meta: 'Agent design • Automation • Dashboards',
    status: 'Live builds',
  },
  {
    label: 'SaaS',
    title: 'Custom AI SaaS for teams',
    meta: 'Auth • Data • AI workflows',
    status: 'MVP ready',
  },
  {
    label: 'Web',
    title: 'Websites that explain and convert',
    meta: 'Brand • Landing pages • Web apps',
    status: 'Launch ready',
  },
  {
    label: 'Ops',
    title: 'Automation for daily business work',
    meta: 'CRM • Email • APIs • Sheets',
    status: 'Systemized',
  },
];

const services = [
  {
    icon: BrainCircuit,
    title: 'AI vision sprint',
    copy: 'Map opportunities, use-cases, AI behavior, tone, flows, and product direction.',
  },
  {
    icon: Layers3,
    title: 'Product design partner',
    copy: 'Senior UI/UX, product thinking, motion, visual systems, and weekly iteration.',
  },
  {
    icon: Code2,
    title: 'Design to build',
    copy: 'React frontends, APIs, dashboards, databases, auth, integrations, and deployment.',
  },
  {
    icon: Workflow,
    title: 'Automation systems',
    copy: 'Connect business tools, forms, CRMs, sheets, AI models, and internal processes.',
  },
  {
    icon: MonitorSmartphone,
    title: 'Brand and web design',
    copy: 'Portfolio websites, SaaS landing pages, launch visuals, mobile app UI, and product sites.',
  },
  {
    icon: Bot,
    title: 'AI agent interfaces',
    copy: 'Interfaces for agents that plan, decide, summarize, route, and execute real tasks.',
  },
];

const featuredProducts = [
  {
    title: 'PRAMILA',
    sector: 'Fashion Ecommerce',
    image: '/product-pramila.png',
    summary:
      'Modern Indian wear storefront with refined navigation, premium visuals, and a conversion-led shopping flow.',
    tags: ['Ecommerce', 'Fashion UI', 'Landing Page'],
  },
  {
    title: 'NEWATO',
    sector: 'AI Agent Platform',
    image: '/product-newato.png',
    summary:
      'Computer-native AI agent platform for planning, automation, timeline tracking, and execution workflows.',
    tags: ['AI Agent', 'Automation', 'SaaS'],
  },
];

const portfolioRows = [
  ['AI', 'NEWATO', 'AI that executes across workflows', 'AI Experience • SaaS UI'],
  ['ECOM', 'PRAMILA', 'Modern Indian wear ecommerce presence', 'Website • Storefront'],
  ['SaaS', 'Skillwyn OS', 'Internal dashboards for product operations', 'Dashboard • Automation'],
  ['Web', 'Launch Labs', 'Landing pages for high-trust service businesses', 'Brand • Web'],
];

function App() {
  const [serviceIndex, setServiceIndex] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = typedServices[serviceIndex];
    const isComplete = typedText === current;
    const isEmpty = typedText === '';
    const delay = isComplete && !isDeleting ? 2100 : isDeleting ? 58 : 110;

    const timer = window.setTimeout(() => {
      if (!isDeleting && isComplete) {
        setIsDeleting(true);
        return;
      }

      if (isDeleting && isEmpty) {
        setIsDeleting(false);
        setServiceIndex((index) => (index + 1) % typedServices.length);
        return;
      }

      setTypedText((value) =>
        isDeleting ? current.slice(0, value.length - 1) : current.slice(0, value.length + 1)
      );
    }, delay);

    return () => window.clearTimeout(timer);
  }, [isDeleting, serviceIndex, typedText]);

  return (
    <main className="site-shell">
      <nav className="topbar" aria-label="Primary navigation">
        <a className="brand" href="#home" aria-label="Skillwyn Labs home">
          <span className="brand-mark">S</span>
          <span>Skillwyn Labs</span>
        </a>
        <div className="nav-links">
          <a href="#services">Services</a>
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
        <a className="nav-cta" href="mailto:hello@skillwynlabs.com">
          Book a call
        </a>
      </nav>

      <section id="home" className="hero">
        <div className="hero-copy">
          <p className="availability">
            <span aria-hidden="true" /> Available for selected client builds
          </p>
          <h1 className="hero-heading">
            <span>We build</span>
            <span className="typed-line">
              <strong>{typedText}</strong>
              <i className="heading-caret" aria-hidden="true" />
            </span>
          </h1>
          <p className="hero-text">
            Skillwyn Labs builds AI products, custom AI SaaS products,
            full-stack websites, landing pages, web apps, mobile apps, and
            automations for businesses that want modern digital systems.
          </p>
          <a className="hero-button" href="mailto:hello@skillwynlabs.com">
            Start a project <ArrowRight size={18} aria-hidden="true" />
          </a>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="visual-glow" />
          <div className="build-system">
            <div className="system-ring ring-one" />
            <div className="system-ring ring-two" />
            <div className="system-core">
              <BrainCircuit size={46} />
              <span>Skillwyn Labs</span>
            </div>

            <div className="system-card web-card">
              <Globe size={19} />
              <strong>Website</strong>
              <span>Brand, landing, portfolio</span>
            </div>
            <div className="system-card saas-card">
              <Layers3 size={19} />
              <strong>AI SaaS</strong>
              <span>Dashboard, auth, workflows</span>
            </div>
            <div className="system-card app-card">
              <MonitorSmartphone size={19} />
              <strong>Apps</strong>
              <span>Mobile and web apps</span>
            </div>
            <div className="system-card ops-card">
              <Workflow size={19} />
              <strong>Automation</strong>
              <span>APIs, CRM, daily ops</span>
            </div>

            <div className="mini-preview">
              <div className="preview-top">
                <span />
                <span />
                <span />
              </div>
              <div className="preview-grid">
                <i />
                <i />
                <i />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="logo-cloud" aria-label="Capabilities">
        {['AI Products', 'Custom SaaS', 'Full Stack', 'Landing Pages', 'Web Apps', 'Mobile Apps', 'Automation'].map(
          (item) => (
            <span key={item}>{item}</span>
          )
        )}
      </section>

      <section id="about" className="post-chat-section">
        <div>
          <p className="eyebrow">Interfaces for the post-chat era</p>
          <h2>AI demos impress, then stall. Adoption needs clarity, rhythm, and taste.</h2>
        </div>
        <p>
          At Skillwyn Labs, we build AI that moves beyond chat: guiding
          decisions, reducing manual work, and making intelligence feel embedded
          in real business workflows.
        </p>
      </section>

      <section className="ai-experience-grid">
        {aiExperiences.map((item) => (
          <article key={item.title}>
            <span>{item.label}</span>
            <h3>{item.title}</h3>
            <p>{item.meta}</p>
            <small>{item.status}</small>
          </article>
        ))}
      </section>

      <section id="services" className="section light-section">
        <div className="section-heading">
          <p className="eyebrow">Everything you need</p>
          <h2>Everything you need to build great products.</h2>
        </div>
        <div className="service-grid">
          {services.map(({ icon: Icon, title, copy }) => (
            <article className="service-card" key={title}>
              <Icon size={25} aria-hidden="true" />
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="work" className="section portfolio-section">
        <div className="section-heading align-left">
          <p className="eyebrow">Featured Products</p>
          <h2>Shaping products from early ideas to client-ready builds.</h2>
        </div>
        <div className="featured-grid">
          {featuredProducts.map((product) => (
            <article className="product-card" key={product.title}>
              <img src={product.image} alt={`${product.title} website preview`} />
              <div>
                <span>{product.sector}</span>
                <h3>{product.title}</h3>
                <p>{product.summary}</p>
                <div className="brief-tags">
                  {product.tags.map((tag) => (
                    <small key={tag}>{tag}</small>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="portfolio-list">
          {portfolioRows.map(([type, name, title, meta]) => (
            <article key={name}>
              <span>{type}</span>
              <strong>{name}</strong>
              <p>{title}</p>
              <small>{meta}</small>
            </article>
          ))}
        </div>
      </section>

      <section className="resource-section">
        <div>
          <p className="eyebrow">Useful AI</p>
          <h2>Our obsession with AI, made useful.</h2>
          <p>
            We combine product thinking, design systems, automation, and
            engineering so AI features become useful experiences, not just demos.
          </p>
          <a href="#contact">Explore a build</a>
        </div>
        <div className="resource-visual">
          <Cpu size={70} />
          <Globe size={44} />
          <Workflow size={54} />
        </div>
      </section>

      <section className="testimonial-section">
        <blockquote>
          “Skillwyn Labs helps teams move from idea to product with the speed of
          a startup and the polish clients expect.”
        </blockquote>
        <div>
          <strong>Skillwyn Labs</strong>
          <span>AI Product Studio</span>
        </div>
      </section>

      <section id="contact" className="cta-section">
        <div>
          <p className="eyebrow">Book a strategy call</p>
          <h2>Bring your product vision and we’ll shape the build path.</h2>
          <p>
            Tell us what you want to build: AI SaaS, automation, app, landing
            page, website, or full-stack platform.
          </p>
        </div>
        <a className="hero-button" href="mailto:hello@skillwynlabs.com">
          Book a call <ArrowRight size={18} aria-hidden="true" />
        </a>
      </section>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
