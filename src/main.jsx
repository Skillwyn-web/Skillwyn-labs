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
    title: 'AI Product Development',
    copy: 'We build AI-powered products, intelligent tools, copilots, and scalable SaaS platforms designed around modern workflows and real business use cases.',
  },
  {
    icon: Code2,
    title: 'Full-Stack Applications',
    copy: 'Custom web platforms, dashboards, APIs, internal systems, and scalable backend architecture built for performance and long-term growth.',
  },
  {
    icon: Layers3,
    title: 'Product Design & User Experience',
    copy: 'Clean interfaces, product-focused UX, strong visual systems, and modern digital experiences designed for usability and conversion.',
  },
  {
    icon: Workflow,
    title: 'Intelligent Systems & Automation',
    copy: 'Execution-focused systems integrating AI models, workflows, APIs, and operational logic into streamlined digital experiences.',
  },
];

const featuredProducts = [
  {
    title: 'PRAMILA',
    sector: 'Fashion Ecommerce',
    image: '/product-pramila.png',
    summary:
      'A premium ecommerce storefront for modern Indian wear with an elegant hero, product-focused navigation, refined visuals, and a clean shopping experience designed to convert visitors into buyers.',
    tags: ['Ecommerce', 'Fashion UI', 'Landing Page', 'Responsive Website'],
  },
  {
    title: 'NEWATO',
    sector: 'AI Execution System',
    image: '/product-newato.png',
    summary:
      'A next-generation AI execution system designed around intelligent workflows, task orchestration, browser interaction, operational tooling, and autonomous multi-step actions across modern digital environments.',
    tags: ['AI Agent', 'Task Orchestration', 'Automation', 'Intelligent Workflows'],
  },
];

const results = [
  {
    title: 'Scalable Products',
    copy: 'Built modern platforms and systems designed for growth, usability, and long-term scalability.',
  },
  {
    title: 'Faster Execution',
    copy: 'Developed systems that streamline workflows and improve operational efficiency across teams.',
  },
  {
    title: 'Intelligent Experiences',
    copy: 'Created AI-powered tools and digital experiences focused on real-world usability and execution.',
  },
  {
    title: 'End-to-End Development',
    copy: 'From idea to deployment — building complete products across frontend, backend, AI, and infrastructure.',
  },
];

const portfolioRows = [
  ['AI', 'NEWATO', 'AI that executes across workflows', 'AI Experience • SaaS UI'],
  ['ECOM', 'PRAMILA', 'Modern Indian wear ecommerce presence', 'Website • Storefront'],
  ['SaaS', 'Skillwyn OS', 'Internal dashboards for product operations', 'Dashboard • Automation'],
  ['Web', 'Launch Labs', 'Landing pages for high-trust service businesses', 'Brand • Web'],
];

const capabilities = [
  'AI Products',
  'Scalable SaaS Platforms',
  'Full-Stack Applications',
  'Intelligent Systems',
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
          <a href="#work">Work</a>
          <a href="#process">Process</a>
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
            <span>Building AI Products, Scalable Platforms & Intelligent Systems</span>
          </h1>
          <p className="hero-text">
            Skillwyn Labs is a product engineering studio building AI-powered
            products, scalable SaaS platforms, full-stack applications, modern
            web experiences, and intelligent systems for startups and
            businesses.
          </p>

          <div className="capability-strip" aria-label="What we build">
            {capabilities.map((item) => (
              <span key={item}>
                <Check size={14} aria-hidden="true" />
                {item}
              </span>
            ))}
          </div>

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
          <p className="eyebrow">About us</p>
          <h2>We are a product studio for AI, software, websites, apps, and automation.</h2>
        </div>
        <p>
          Skillwyn Labs helps startups, founders, and businesses turn ideas into
          scalable digital products. We build AI-powered tools, SaaS platforms,
          full-stack web applications, intelligent systems, modern landing
          pages, and custom software focused on real-world usability,
          performance, and execution.
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
          <p className="eyebrow">Services</p>
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

      <section id="process" className="section process-section">
        <div className="section-heading">
          <p className="eyebrow">Process</p>
          <h2>Simple path from idea to launch.</h2>
        </div>
        <div className="process-grid">
          <article>
            <span>01</span>
            <h3>Discover</h3>
            <p>We understand the product vision, workflows, user experience, and technical requirements before defining the system architecture.</p>
          </article>
          <article>
            <span>02</span>
            <h3>Design</h3>
            <p>We craft modern interfaces, scalable product flows, and intuitive user experiences focused on clarity and usability.</p>
          </article>
          <article>
            <span>03</span>
            <h3>Build</h3>
            <p>We develop scalable systems, integrations, APIs, and production-ready applications optimized for real-world performance.</p>
          </article>
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

      <section className="results-section section light-section">
        <div className="section-heading">
          <p className="eyebrow">Execution Focused</p>
          <h2>Building systems that deliver results.</h2>
        </div>
        <div className="service-grid">
          {results.map((item) => (
            <article className="service-card" key={item.title}>
              <Check size={25} aria-hidden="true" color="#0b8d78" />
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
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
            Skillwyn Labs is focused on building modern AI products, scalable
            software platforms, intelligent systems, and digital experiences for
            ambitious startups and businesses. We combine product thinking,
            engineering, design, and AI capabilities to build systems that are
            scalable, practical, and execution-focused.
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
