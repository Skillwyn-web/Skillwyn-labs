import React, { useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import Lenis from 'lenis';
import {
  ArrowRight,
  BarChart3,
  Cpu,
  Globe,
  Layers3,
  Lightbulb,
  MessageSquare,
  MonitorSmartphone,
  PenTool,
  Plug,
  Repeat,
  Rocket,
  Smartphone,
  UsersRound,
  Workflow,
} from 'lucide-react';
import './styles.css';

const bookingUrl = 'https://calendar.app.google/vs4UnjU6yeEcChnL7';

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
    icon: MonitorSmartphone,
    title: 'Website design & development',
    copy: 'Fast, modern websites, landing pages, ecommerce stores, and company portfolios built to look polished and convert visitors.',
  },
  {
    icon: Smartphone,
    title: 'Mobile app development',
    copy: 'Android and iOS apps, plus white-label apps for companies that want their own branded app without building from scratch.',
  },
  {
    icon: MessageSquare,
    title: 'AI-powered tools & chatbots',
    copy: 'Customer support bots, lead qualification bots, internal AI tools, WhatsApp automation, auto-replies, and smart flows.',
  },
  {
    icon: Workflow,
    title: 'Business process automation',
    copy: 'Replace manual WhatsApp chains, Excel tracking, and phone coordination with automated digital systems that save daily hours.',
  },
  {
    icon: BarChart3,
    title: 'Dashboards & reporting systems',
    copy: "Live business dashboards for owners and managers to track sales, inventory, operations, and performance without asking anyone.",
  },
  {
    icon: UsersRound,
    title: 'CRM & lead management systems',
    copy: 'Track every lead, follow up automatically, and never lose customer inquiries. Especially useful for real estate, interiors, and hospitality.',
  },
  {
    icon: Layers3,
    title: 'White-label SaaS products',
    copy: 'Build one software product and sell it to multiple companies under their own branding, with subscriptions or one-time pricing.',
  },
  {
    icon: Repeat,
    title: 'Recurring revenue model',
    copy: 'Create products and systems that keep earning through monthly subscriptions, retainers, renewals, and long-term client accounts.',
  },
  {
    icon: Plug,
    title: 'Integrations & API connections',
    copy: "Connect systems that do not talk to each other, like Shopify to WhatsApp, CRM to email, or payments to accounting.",
  },
];

const featuredProducts = [
  {
    title: 'PRAMILA',
    sector: 'Fashion Ecommerce',
    image: '/product-pramila.png',
    url: 'https://pramila-chi.vercel.app/',
    cta: 'Open project',
    summary:
      'A premium ecommerce storefront for modern Indian wear with an elegant hero, product-focused navigation, refined visuals, and a clean shopping experience designed to convert visitors into buyers.',
    tags: ['Ecommerce', 'Fashion UI', 'Landing Page', 'Responsive Website'],
  },
  {
    title: 'NEWATO',
    sector: 'AI Execution System',
    image: '/product-newato.png',
    url: 'https://newato.world/',
    cta: 'Open project',
    summary:
      'A next-generation AI execution system designed around intelligent workflows, task orchestration, browser interaction, operational tooling, and autonomous multi-step actions across modern digital environments.',
    tags: ['AI Agent', 'Task Orchestration', 'Automation', 'Intelligent Workflows'],
  },
  {
    title: 'FLOWPILOT',
    sector: 'WhatsApp Automation',
    image: '/product-flowpilot.png',
    url: '#contact',
    cta: 'Plan similar',
    summary:
      'A smart automation dashboard for WhatsApp replies, lead qualification, customer support queues, and AI-powered message flows for service businesses.',
    tags: ['WhatsApp Automation', 'AI Replies', 'Lead Qualification', 'Smart Flows'],
  },
  {
    title: 'LEADNEST',
    sector: 'CRM System',
    image: '/product-leadnest.png',
    url: '#contact',
    cta: 'Plan similar',
    summary:
      'A CRM and lead management system for tracking inquiries, follow-ups, pipelines, reminders, and customer conversations from one clean workspace.',
    tags: ['CRM', 'Lead Tracking', 'Follow-ups', 'Sales Pipeline'],
  },
  {
    title: 'OPSBRIDGE',
    sector: 'Business Automation',
    image: '/product-opsbridge.png',
    url: '#contact',
    cta: 'Plan similar',
    summary:
      'An operations automation hub that connects WhatsApp, ecommerce, CRM, payments, inventory, email, and accounting into one workflow system.',
    tags: ['API Integrations', 'Business Automation', 'Operations', 'Sync Workflows'],
  },
  {
    title: 'BRANDSUITE',
    sector: 'White-label SaaS',
    image: '/product-brandsuite.png',
    url: '#contact',
    cta: 'Plan similar',
    summary:
      'A white-label SaaS admin system where companies can manage branding, client workspaces, subscriptions, mobile previews, and product settings.',
    tags: ['White-label SaaS', 'Subscriptions', 'Branding', 'Admin Dashboard'],
  },
];

const processSteps = [
  {
    number: '01',
    icon: Lightbulb,
    title: 'Discover',
    kicker: 'Clarity first',
    copy: 'We map the idea, users, workflow, business goal, and technical scope so the build starts with a clear direction.',
  },
  {
    number: '02',
    icon: PenTool,
    title: 'Design',
    kicker: 'Flows + UI',
    copy: 'We shape the screens, user journey, system logic, and visual direction before development begins.',
  },
  {
    number: '03',
    icon: Rocket,
    title: 'Build',
    kicker: 'Launch ready',
    copy: 'We develop, integrate, test, and deploy a clean working product that is ready for real users and daily operations.',
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
  ['AUTO', 'FLOWPILOT', 'WhatsApp replies and lead automation', 'AI Bots - Smart Flows'],
  ['CRM', 'LEADNEST', 'Lead tracking and follow-up system', 'CRM - Sales Pipeline'],
  ['OPS', 'OPSBRIDGE', 'Connected business workflow automation', 'APIs - Integrations'],
  ['SAAS', 'BRANDSUITE', 'White-label SaaS admin platform', 'Subscriptions - Branding'],
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

function ScrollReveal() {
  useEffect(() => {
    const autoRevealSelectors = [
      '.hero-copy',
      '.hero-visual',
      '.logo-cloud',
      '.post-chat-section > div',
      '.section-heading',
      '.service-card',
      '.process-grid article',
      '.result-card',
      '.product-card',
      '.resource-section > div',
      '.testimonial-section',
      '.cta-section > div',
      '.cta-section > a',
      '.site-footer',
    ].join(', ');

    document.querySelectorAll(autoRevealSelectors).forEach((element, index) => {
      if (!element.hasAttribute('data-reveal')) {
        element.setAttribute('data-reveal', '');
      }

      element.classList.add('scroll-reveal');

      if (!element.classList.contains('reveal-left') && !element.classList.contains('reveal-right')) {
        element.classList.add('reveal-up');
      }

      if (!element.style.getPropertyValue('--reveal-delay')) {
        const siblingIndex = Array.from(element.parentElement?.children || []).indexOf(element);
        const delayIndex = siblingIndex >= 0 ? siblingIndex : index;
        element.style.setProperty('--reveal-delay', `${Math.min(delayIndex, 5) * 75}ms`);
      }
    });

    const elements = document.querySelectorAll('[data-reveal]');
    if (!elements.length) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.22,
        rootMargin: '0px 0px -8% 0px',
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return null;
}

function App() {
  const [serviceIndex, setServiceIndex] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [schedulerOpen, setSchedulerOpen] = useState(false);

  const openScheduler = () => {
    setMobileMenuOpen(false);
    setSchedulerOpen(true);
  };

  const closeScheduler = () => setSchedulerOpen(false);

  useEffect(() => {
    if (mobileMenuOpen || schedulerOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen, schedulerOpen]);

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
      <ScrollReveal />
      <CustomCursor />

      <nav className={`topbar ${mobileMenuOpen ? 'mobile-open' : ''}`} aria-label="Primary navigation">
        <a className="brand" href="#home" aria-label="Skillwyn Labs home" onClick={() => setMobileMenuOpen(false)}>
          <img className="brand-logo brand-logo-wide" src="/skillwyn-white-logo.png" alt="Skillwyn" />
        </a>
        <div className="nav-links">
          <a href="#services">Things we do</a>
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
        <button className="nav-cta" type="button" onClick={openScheduler}>
          Book a call
        </button>
        <button 
          className="hamburger-toggle" 
          aria-label="Toggle menu" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </button>
      </nav>

      {/* Mobile Menu Drawer Overlay */}
      <div className={`mobile-menu-drawer ${mobileMenuOpen ? 'is-active' : ''}`}>
        <div className="mobile-menu-links">
          <a href="#services" onClick={() => setMobileMenuOpen(false)}>Things we do</a>
          <a href="#work" onClick={() => setMobileMenuOpen(false)}>Work</a>
          <a href="#about" onClick={() => setMobileMenuOpen(false)}>About</a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</a>
          <button className="mobile-cta" type="button" onClick={openScheduler}>
            Book a call
          </button>
        </div>
      </div>

      {schedulerOpen && (
        <div className="scheduler-modal" role="dialog" aria-modal="true" aria-labelledby="scheduler-title">
          <button className="scheduler-backdrop" type="button" aria-label="Close scheduler" onClick={closeScheduler} />
          <div className="scheduler-panel calendar-panel">
            <div className="scheduler-head">
              <div>
                <p className="eyebrow">Google Calendar</p>
                <h2 id="scheduler-title">Book your strategy call.</h2>
                <p>Choose an available slot below. Google Calendar will send the invite and confirmation.</p>
              </div>
              <button className="scheduler-close" type="button" aria-label="Close scheduler" onClick={closeScheduler}>
                ×
              </button>
            </div>
            <div className="scheduler-frame-wrap">
              <iframe className="scheduler-frame" src={bookingUrl} title="Skillwyn Labs Google Calendar booking" />
            </div>
            <div className="scheduler-footer">
              <span>Having trouble viewing the scheduler?</span>
              <a className="scheduler-open-link" href={bookingUrl} rel="noreferrer" target="_blank">
                Open in Google Calendar <ArrowRight size={16} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      )}

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
          <button className="hero-button" type="button" onClick={openScheduler}>
            Start a project <ArrowRight size={18} aria-hidden="true" />
          </button>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="work-showcase">
            <div className="showcase-glow" />
            <article className="showcase-frame pramila-frame" style={{ '--hover-glow': 'rgba(241, 210, 138, 0.3)' }}>
              <div className="window-header">
                <div className="window-dots">
                  <span className="dot dot-red" />
                  <span className="dot dot-yellow" />
                  <span className="dot dot-green" />
                </div>
                <div className="window-address">pramila.co</div>
              </div>
              <img src="/product-pramila.png" alt="Pramila Storefront" />
            </article>

            <article className="showcase-frame newato-frame" style={{ '--hover-glow': 'rgba(65, 170, 255, 0.3)' }}>
              <div className="window-header">
                <div className="window-dots">
                  <span className="dot dot-red" />
                  <span className="dot dot-yellow" />
                  <span className="dot dot-green" />
                </div>
                <div className="window-address">newato.world</div>
              </div>
              <img src="/product-newato.png" alt="Newato Dashboard" />
            </article>

            <article className="showcase-frame ai-frame" style={{ '--hover-glow': 'rgba(255, 255, 255, 0.25)' }}>
              <div className="window-header">
                <div className="window-dots">
                  <span className="dot dot-red" />
                  <span className="dot dot-yellow" />
                  <span className="dot dot-green" />
                </div>
                <div className="window-address">kaib.finance</div>
              </div>
              <img src="/product-kaib.svg" alt="Kaib App" />
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
        <div className="about-copy">
          <p>
            Skillwyn Labs helps startups, founders, and businesses turn ideas into
            scalable digital products. We build AI-powered tools, SaaS platforms,
            full-stack web applications, intelligent systems, modern landing
            pages, and custom software focused on real-world usability,
            performance, and execution.
          </p>
        </div>
      </section>

      <section id="services" className="section light-section">
        <div className="section-heading">
          <p className="eyebrow">Labs</p>
          <h2>Things we do.</h2>
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
              <div className="process-card-top">
                <span>{item.number}</span>
                <item.icon size={22} aria-hidden="true" />
              </div>
              <small>{item.kicker}</small>
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
          {featuredProducts.map((product, index) => (
            <a
              className={`product-card reveal-card reveal-${index % 2 === 0 ? 'left' : 'right'}`}
              data-reveal
              href={product.url}
              key={product.title}
              rel={product.url.startsWith('http') ? 'noreferrer' : undefined}
              style={{ '--reveal-delay': `${Math.min(index % 4, 3) * 120}ms` }}
              target={product.url.startsWith('http') ? '_blank' : undefined}
            >
              <div className="product-preview">
                <img src={product.image} alt={`${product.title} website preview`} />
                <div className="project-url-pop">
                  <span>{product.title}</span>
                  <strong>{product.cta}</strong>
                  <ArrowRight size={14} aria-hidden="true" />
                </div>
              </div>
              <div className="product-card-details">
                <div>
                  <span>{product.sector}</span>
                  <h3>{product.title}</h3>
                </div>
                <p>{product.summary}</p>
                <div className="product-tags">
                  {product.tags.map((tag) => (
                    <small key={tag}>{tag}</small>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="results-section section light-section">
        <div className="section-heading">
          <p className="eyebrow">Execution Focused</p>
          <h2>Building systems that deliver results.</h2>
        </div>
        <div className="results-grid">
          {results.map((item, index) => (
            <article
              className="result-card reveal-card reveal-left"
              data-reveal
              key={item.title}
              style={{ '--reveal-delay': `${index * 110}ms` }}
            >
              <span>{String(index + 1).padStart(2, '0')}</span>
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
          <img src="/useful-ai-visual.png" alt="AI automation dashboard and workflow visual" />
          <div className="resource-visual-badge">
            <Cpu size={18} aria-hidden="true" />
            <span>AI workflows</span>
          </div>
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
        <button className="hero-button" type="button" onClick={openScheduler}>
          Book a call <ArrowRight size={18} aria-hidden="true" />
        </button>
      </section>

      <footer className="site-footer">
        <div className="footer-inner">
          <div className="footer-brand">
            <a className="footer-logo" href="#home" aria-label="Skillwyn Labs home">
              <img src="/skillwyn-white-logo.png" alt="Skillwyn Labs" />
            </a>
            <p>
              AI products, websites, apps, dashboards, CRM systems, and
              automation workflows for modern businesses.
            </p>
            <a className="footer-social" href="https://www.instagram.com/codewithyash3/" rel="noreferrer" target="_blank">
              <Globe size={16} aria-hidden="true" />
              Codewithyash · 32K+ community
            </a>
          </div>

          <div className="footer-links">
            <div>
              <span>Navigate</span>
              <a href="#services">Things we do</a>
              <a href="#work">Work</a>
              <a href="#about">About</a>
              <a href="#contact">Contact</a>
            </div>
            <div>
              <span>Builds</span>
              <a href="#services">AI automation</a>
              <a href="#services">Web & mobile apps</a>
              <a href="#services">CRM dashboards</a>
              <a href="#services">White-label SaaS</a>
            </div>
            <div>
              <span>Contact</span>
              <a href="mailto:teams@skillwyn.com">teams@skillwyn.com</a>
              <a href="mailto:teams@skillwyn.com">Book a strategy call</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 Skillwyn Labs. All rights reserved.</span>
          <span>Designed and built for execution-focused teams.</span>
        </div>
      </footer>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
