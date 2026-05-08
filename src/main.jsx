import React, { useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import Lenis from 'lenis';
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
    backTitle: 'What flips live',
    backCopy: 'AI assistants, copilots, workflow agents, model routing, prompts, and admin dashboards ready for real users.',
    points: ['Agent flows', 'AI dashboards', 'Tool integrations'],
  },
  {
    label: 'SaaS',
    title: 'Custom AI SaaS for teams',
    meta: 'Auth • Data • AI workflows',
    status: 'MVP ready',
    backTitle: 'SaaS systems',
    backCopy: 'Authenticated products with data models, roles, dashboards, and AI-powered actions.',
    points: ['Auth & roles', 'Data layer', 'Team workflows'],
  },
  {
    label: 'Web',
    title: 'Websites that explain and convert',
    meta: 'Brand • Landing pages • Web apps',
    status: 'Launch ready',
    backTitle: 'Conversion builds',
    backCopy: 'Premium websites, landing pages, product pages, and web apps designed to turn attention into action.',
    points: ['Landing pages', 'Portfolio sites', 'Web apps'],
  },
  {
    label: 'Ops',
    title: 'Automation for daily business work',
    meta: 'CRM • Email • APIs • Sheets',
    status: 'Systemized',
    backTitle: 'Automated ops',
    backCopy: 'Connected workflows across CRMs, forms, sheets, email, APIs, and AI models so teams move faster.',
    points: ['API workflows', 'CRM automation', 'Internal tools'],
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
  {
    icon: MonitorSmartphone,
    title: 'Websites, Apps & Landing Pages',
    copy: 'High-converting portfolio sites, app interfaces, mobile-first web apps, and landing pages with polished responsive experiences.',
  },
  {
    icon: Bot,
    title: 'AI Agent Interfaces',
    copy: 'Interfaces for agents that plan, summarize, route, decide, and execute real business tasks with clear user control.',
  },
];

const featuredProducts = [
  {
    title: 'PRAMILA',
    sector: 'Fashion Ecommerce',
    image: '/product-pramila.png',
    url: 'https://pramila-chi.vercel.app/',
    summary:
      'A premium ecommerce storefront for modern Indian wear with an elegant hero, product-focused navigation, refined visuals, and a clean shopping experience designed to convert visitors into buyers.',
    tags: ['Ecommerce', 'Fashion UI', 'Landing Page', 'Responsive Website'],
  },
  {
    title: 'NEWATO',
    sector: 'AI Execution System',
    image: '/product-newato.png',
    url: 'https://newato.world/',
    summary:
      'A next-generation AI execution system designed around intelligent workflows, task orchestration, browser interaction, operational tooling, and autonomous multi-step actions across modern digital environments.',
    tags: ['AI Agent', 'Task Orchestration', 'Automation', 'Intelligent Workflows'],
  },
];

const processSteps = [
  {
    number: '01',
    title: 'Discover',
    copy: 'We understand the product vision, workflows, user experience, and technical requirements before defining the system architecture.',
  },
  {
    number: '02',
    title: 'Design',
    copy: 'We craft modern interfaces, scalable product flows, and intuitive user experiences focused on clarity and usability.',
  },
  {
    number: '03',
    title: 'Build',
    copy: 'We develop scalable systems, integrations, APIs, and production-ready applications optimized for real-world performance.',
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
    copy: 'From idea to deployment, building complete products across frontend, backend, AI, and infrastructure.',
  },
];

const portfolioRows = [
  ['AI', 'NEWATO', 'AI that executes across workflows', 'AI Experience • SaaS UI'],
  ['ECOM', 'PRAMILA', 'Modern Indian wear ecommerce presence', 'Website • Storefront'],
];

function CustomCursor() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor || window.matchMedia('(pointer: coarse)').matches) {
      return undefined;
    }

    const moveCursor = (event) => {
      cursor.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`;
    };

    const updateHover = (event) => {
      const isInteractive = event.target.closest('a, button, [role="button"]');
      cursor.classList.toggle('is-hovering', Boolean(isInteractive));
    };

    const pressCursor = () => cursor.classList.add('is-pressed');
    const releaseCursor = () => cursor.classList.remove('is-pressed');

    window.addEventListener('pointermove', moveCursor);
    window.addEventListener('pointerover', updateHover);
    window.addEventListener('pointerdown', pressCursor);
    window.addEventListener('pointerup', releaseCursor);

    return () => {
      window.removeEventListener('pointermove', moveCursor);
      window.removeEventListener('pointerover', updateHover);
      window.removeEventListener('pointerdown', pressCursor);
      window.removeEventListener('pointerup', releaseCursor);
    };
  }, []);

  return <span className="custom-cursor" ref={cursorRef} aria-hidden="true" />;
}

function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.25,
      easing: (time) => Math.min(1, 1.001 - 2 ** (-10 * time)),
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.15,
    });

    let frameId = 0;
    const raf = (time) => {
      lenis.raf(time);
      frameId = window.requestAnimationFrame(raf);
    };

    frameId = window.requestAnimationFrame(raf);

    const handleAnchorClick = (event) => {
      const link = event.target.closest('a[href^="#"]');
      if (!link) {
        return;
      }

      const target = document.querySelector(link.getAttribute('href'));
      if (!target) {
        return;
      }

      event.preventDefault();
      lenis.scrollTo(target, {
        offset: -84,
        duration: 1.15,
      });
    };

    document.addEventListener('click', handleAnchorClick);

    return () => {
      window.cancelAnimationFrame(frameId);
      document.removeEventListener('click', handleAnchorClick);
      lenis.destroy();
    };
  }, []);

  return null;
}

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
      <SmoothScroll />
      <CustomCursor />

      <nav className="topbar" aria-label="Primary navigation">
        <a className="brand" href="#home" aria-label="Skillwyn Labs home">
          <img className="brand-logo brand-logo-wide" src="/skillwyn-white-logo.png" alt="Skillwyn" />
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
          <div className="work-showcase">
            <div className="showcase-glow" />
            <article className="showcase-frame pramila-frame">
              <img src="/product-pramila.png" alt="" />
            </article>

            <article className="showcase-frame newato-frame">
              <img src="/product-newato.png" alt="" />
            </article>

            <article className="showcase-frame ai-frame">
              <img src="/product-kaib.svg" alt="" />
            </article>
          </div>
        </div>
      </section>

      <section className="logo-cloud" aria-label="Capabilities">
        <div className="marquee-track">
          {[...typedServices, ...typedServices].map((item, index) => (
            <span key={`${item}-${index}`}>{item}</span>
          ))}
        </div>
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
            <div className="flip-card-inner">
              <div className="flip-face flip-front">
                <span>{item.label}</span>
                <h3>{item.title}</h3>
                <p>{item.meta}</p>
                <small>{item.status}</small>
              </div>
              <div className="flip-face flip-back">
                <span>{item.label}</span>
                <h3>{item.backTitle}</h3>
                <p>{item.backCopy}</p>
                <ul>
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        ))}
      </section>

      <section id="services" className="section light-section">
        <div className="section-heading">
          <p className="eyebrow">Services</p>
          <h2>Everything you need to build great products.</h2>
        </div>
        <div className="service-grid">
          {services.map(({ icon: Icon, title, copy }, index) => (
            <article className="service-card" key={title}>
              <div className="service-card-top">
                <Icon size={25} aria-hidden="true" />
                <span>{String(index + 1).padStart(2, '0')}</span>
              </div>
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
          {processSteps.map((item) => (
            <article key={item.number}>
              <span>{item.number}</span>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
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
            <a
              className="product-card"
              href={product.url}
              key={product.title}
              rel="noreferrer"
              target="_blank"
            >
              <img src={product.image} alt={`${product.title} website preview`} />
              <div className="project-url-pop">
                <span>{product.title}</span>
                <strong>Open project</strong>
                <ArrowRight size={14} aria-hidden="true" />
              </div>
            </a>
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
              <Check size={25} aria-hidden="true" />
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

