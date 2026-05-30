import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';

const siteUrl = 'https://labs.skillwyn.com';
const publicDir = path.resolve('public');
const lastmod = '2026-05-29';
const brandImage = `${siteUrl}/skillwyn-labs-preview.png`;
const brandLogo = `${siteUrl}/favicon-512.png`;

const pages = [
  {
    slug: 'ai-product-development',
    title: 'AI Product Development Company | Skillwyn Labs',
    description:
      'Skillwyn Labs builds AI products, AI SaaS platforms, chatbots, workflow agents, and internal AI tools for startups and businesses.',
    h1: 'AI product development for startups and modern businesses.',
    eyebrow: 'AI Product Development',
    intro:
      'We design and build useful AI products that move beyond demos: AI SaaS platforms, workflow agents, support bots, internal copilots, and automation tools connected to real business systems.',
    keywords: ['AI SaaS platforms', 'AI chatbots', 'workflow agents', 'internal AI tools'],
    outcomes: [
      'Customer support and lead qualification bots',
      'AI-powered dashboards and admin tools',
      'Workflow agents connected to CRMs, forms, email, sheets, and APIs',
      'MVPs that can be tested with real users and improved quickly',
    ],
    faqs: [
      ['What AI products can Skillwyn Labs build?', 'We build AI SaaS platforms, chatbots, internal tools, automated workflows, dashboards, and agent-style products that connect to real business systems.'],
      ['Can you build an AI MVP first?', 'Yes. We can start with a focused MVP, launch the core workflow, and then improve it with user feedback and better automation.'],
    ],
  },
  {
    slug: 'website-development',
    title: 'Website Design and Development Company | Skillwyn Labs',
    description:
      'Fast, modern website design and development for startups, businesses, ecommerce brands, SaaS products, and landing pages.',
    h1: 'Website design and development built to explain, convert, and scale.',
    eyebrow: 'Website Development',
    intro:
      'We build polished websites, landing pages, ecommerce storefronts, product pages, and company portfolios with strong messaging, responsive layouts, fast loading, and clear conversion paths.',
    keywords: ['business websites', 'landing pages', 'ecommerce websites', 'SaaS websites'],
    outcomes: [
      'Conversion-focused landing pages for offers and campaigns',
      'Company websites with clear service positioning',
      'Product and SaaS websites with strong feature storytelling',
      'Responsive frontend builds that look clean on mobile and desktop',
    ],
    faqs: [
      ['Do you build custom business websites?', 'Yes. We build custom websites for startups, service businesses, ecommerce brands, and software products.'],
      ['Can the website include SEO basics?', 'Yes. We add clean page structure, meta tags, schema, sitemap, robots file, headings, image alt text, and internal links.'],
    ],
  },
  {
    slug: 'app-development',
    title: 'Mobile App Development Company | Skillwyn Labs',
    description:
      'Mobile app development for Android and iOS apps, white-label apps, customer apps, internal apps, and business workflow products.',
    h1: 'Mobile app development for customer apps and business systems.',
    eyebrow: 'App Development',
    intro:
      'We build mobile app experiences for companies that need customer-facing apps, internal tools, white-label products, dashboards, booking flows, and connected business workflows.',
    keywords: ['Android apps', 'iOS apps', 'white-label apps', 'business apps'],
    outcomes: [
      'Customer apps with clean onboarding and useful workflows',
      'White-label app concepts for repeatable business models',
      'Internal mobile tools for teams and operations',
      'Connected app backends, dashboards, and automation flows',
    ],
    faqs: [
      ['Do you build Android and iOS apps?', 'Yes. We can build mobile app experiences for Android and iOS use cases, including customer apps and internal business tools.'],
      ['Can an app connect to dashboards or CRM systems?', 'Yes. We can connect apps with dashboards, CRMs, APIs, payments, messaging, and operational workflows.'],
    ],
  },
  {
    slug: 'business-automation',
    title: 'Business Automation Services | Skillwyn Labs',
    description:
      'Business automation for WhatsApp workflows, CRMs, spreadsheets, ecommerce, email, APIs, dashboards, and daily operations.',
    h1: 'Business automation that replaces repetitive manual work.',
    eyebrow: 'Business Automation',
    intro:
      'We connect the tools your business already uses and automate daily workflows across WhatsApp, CRMs, forms, email, spreadsheets, ecommerce, payments, dashboards, and internal operations.',
    keywords: ['WhatsApp automation', 'CRM automation', 'API integrations', 'operations automation'],
    outcomes: [
      'Lead capture and follow-up automation',
      'WhatsApp reply flows and customer support routing',
      'CRM, sheets, forms, email, ecommerce, and payment integrations',
      'Owner dashboards for tracking sales, tasks, inventory, and performance',
    ],
    faqs: [
      ['What business processes can be automated?', 'Lead capture, follow-ups, customer support, reporting, order tracking, task updates, CRM sync, WhatsApp replies, and recurring operations can be automated.'],
      ['Can automation work with existing tools?', 'Yes. We can connect existing CRMs, spreadsheets, forms, email tools, ecommerce platforms, APIs, and dashboards.'],
    ],
  },
  {
    slug: 'saas-development',
    title: 'Custom SaaS Development Company | Skillwyn Labs',
    description:
      'Custom SaaS development for MVPs, dashboards, subscriptions, admin systems, white-label products, and AI-powered platforms.',
    h1: 'Custom SaaS development for MVPs, platforms, and white-label products.',
    eyebrow: 'SaaS Development',
    intro:
      'We help founders and businesses turn software ideas into SaaS products with user accounts, dashboards, roles, subscriptions, admin panels, AI workflows, and scalable product foundations.',
    keywords: ['SaaS MVP', 'white-label SaaS', 'admin dashboards', 'subscription software'],
    outcomes: [
      'SaaS MVPs for validating product ideas',
      'Admin dashboards, roles, permissions, and user workflows',
      'White-label systems for selling one product to many clients',
      'Subscription-ready product architecture and operational tooling',
    ],
    faqs: [
      ['Can Skillwyn Labs build a SaaS MVP?', 'Yes. We can build a focused SaaS MVP with the core user flow, dashboard, data model, and launch-ready frontend.'],
      ['Do you build white-label SaaS products?', 'Yes. We build white-label SaaS systems where different clients can use the same product under their own branding.'],
    ],
  },
  {
    slug: 'crm-dashboard-development',
    title: 'CRM and Dashboard Development | Skillwyn Labs',
    description:
      'Custom CRM and dashboard development for lead management, sales tracking, operations, reports, inventory, and business performance.',
    h1: 'CRM and dashboard development for clearer business control.',
    eyebrow: 'CRM and Dashboards',
    intro:
      'We build custom CRM systems and live dashboards that help owners and teams track leads, follow-ups, sales, inventory, operations, and performance without scattered spreadsheets.',
    keywords: ['custom CRM', 'lead management system', 'business dashboards', 'sales dashboard'],
    outcomes: [
      'Lead management systems with reminders and follow-up tracking',
      'Sales, operations, inventory, and performance dashboards',
      'Customer records, pipeline stages, notes, tasks, and reporting',
      'Connected workflows across forms, WhatsApp, email, and internal teams',
    ],
    faqs: [
      ['Can you build a custom CRM for my business?', 'Yes. We can build a CRM around your exact lead flow, team process, follow-up system, and reporting needs.'],
      ['Can dashboards show live business data?', 'Yes. Dashboards can connect to forms, CRMs, spreadsheets, APIs, ecommerce systems, or databases depending on your setup.'],
    ],
  },
];

const escapeHtml = (value) =>
  value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;');

const pageHtml = (page) => {
  const canonical = `${siteUrl}/${page.slug}/`;
  const relatedLinks = pages
    .filter((item) => item.slug !== page.slug)
    .slice(0, 5)
    .map((item) => `<a href="/${item.slug}/">${escapeHtml(item.eyebrow)}</a>`)
    .join('');
  const faqSchema = page.faqs.map(([question, answer]) => ({
    '@type': 'Question',
    name: question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: answer,
    },
  }));

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${siteUrl}/#organization`,
        name: 'Skillwyn Labs',
        url: `${siteUrl}/`,
        logo: brandLogo,
        image: brandImage,
        email: 'teams@skillwyn.com',
      },
      {
        '@type': 'Service',
        name: page.eyebrow,
        provider: { '@id': `${siteUrl}/#organization` },
        areaServed: 'Worldwide',
        url: canonical,
        description: page.description,
        serviceType: page.eyebrow,
      },
      {
        '@type': 'FAQPage',
        mainEntity: faqSchema,
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${siteUrl}/` },
          { '@type': 'ListItem', position: 2, name: page.eyebrow, item: canonical },
        ],
      },
    ],
  };

  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${escapeHtml(page.title)}</title>
    <meta name="description" content="${escapeHtml(page.description)}" />
    <meta name="robots" content="index, follow" />
    <link rel="canonical" href="${canonical}" />
    <link rel="shortcut icon" href="/favicon.ico" />
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />
    <link rel="icon" type="image/png" sizes="48x48" href="/favicon-48.png" />
    <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96.png" />
    <link rel="apple-touch-icon" sizes="180x180" href="/favicon-180.png" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="${canonical}" />
    <meta property="og:site_name" content="Skillwyn Labs" />
    <meta property="og:title" content="${escapeHtml(page.title)}" />
    <meta property="og:description" content="${escapeHtml(page.description)}" />
    <meta property="og:image" content="${brandImage}" />
    <meta property="og:image:secure_url" content="${brandImage}" />
    <meta property="og:image:alt" content="Skillwyn Labs brand preview" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:image" content="${brandImage}" />
    <meta name="twitter:image:alt" content="Skillwyn Labs brand preview" />
    <script type="application/ld+json">${JSON.stringify(schema)}</script>
    <style>
      :root { color: #111; background: #f4efe6; font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; }
      * { box-sizing: border-box; }
      body { margin: 0; background: #f4efe6; }
      a { color: inherit; text-decoration: none; }
      .shell { width: min(1120px, calc(100% - 36px)); margin: 0 auto; }
      .nav { display: flex; align-items: center; justify-content: space-between; gap: 18px; padding: 24px 0; }
      .brand { display: inline-flex; align-items: center; gap: 10px; font-weight: 900; }
      .brand img { width: 34px; height: 34px; }
      .nav-links { display: flex; flex-wrap: wrap; gap: 14px; color: #5f5b52; font-size: 0.94rem; font-weight: 800; }
      .hero { display: grid; grid-template-columns: minmax(0, 1.15fr) minmax(280px, 0.85fr); gap: 48px; align-items: center; padding: 58px 0 72px; }
      .eyebrow { color: #74746f; font-size: 0.78rem; font-weight: 900; letter-spacing: 0.14em; text-transform: uppercase; }
      h1 { max-width: 830px; margin: 14px 0 20px; font-size: clamp(3.2rem, 8vw, 6.8rem); line-height: 0.88; letter-spacing: -0.045em; }
      .intro { color: #5f5b52; font-size: 1.16rem; line-height: 1.75; }
      .panel { border: 1px solid #dfd8ca; border-radius: 22px; padding: 24px; background: rgba(255,255,255,0.72); box-shadow: 0 22px 70px rgba(17,17,17,0.07); }
      .panel h2 { margin: 0 0 14px; font-size: 1.2rem; }
      .tags, .related { display: flex; flex-wrap: wrap; gap: 10px; }
      .tags span, .related a { border: 1px solid #dfd8ca; border-radius: 999px; padding: 9px 12px; background: #fff; color: #5f5b52; font-weight: 800; font-size: 0.88rem; }
      .section { padding: 54px 0; border-top: 1px solid #dfd8ca; }
      .grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 16px; }
      .card { min-height: 150px; border: 1px solid #e7dfd1; border-radius: 18px; padding: 22px; background: #fff; }
      .card strong { display: block; margin-bottom: 10px; font-size: 1.05rem; }
      .card p, .faq p { margin: 0; color: #5f5b52; line-height: 1.68; }
      .cta { display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 20px; padding: 32px; border-radius: 24px; background: #111; color: #fff; }
      .cta p { max-width: 660px; margin: 8px 0 0; color: #d8d2c7; line-height: 1.65; }
      .button { display: inline-flex; min-height: 46px; align-items: center; border-radius: 999px; padding: 0 18px; background: #fff; color: #111; font-weight: 900; }
      footer { padding: 34px 0 42px; color: #5f5b52; }
      @media (max-width: 820px) {
        .hero, .grid { grid-template-columns: 1fr; }
        h1 { font-size: clamp(3rem, 16vw, 5.4rem); }
        .nav { align-items: flex-start; flex-direction: column; }
      }
    </style>
  </head>
  <body>
    <main class="shell">
      <nav class="nav" aria-label="Primary">
        <a class="brand" href="/"><img src="/skillwyn-symbol.png" alt="" />Skillwyn Labs</a>
        <div class="nav-links">
          <a href="/">Home</a>
          <a href="/#work">Work</a>
          <a href="/#contact">Contact</a>
        </div>
      </nav>
      <section class="hero">
        <div>
          <p class="eyebrow">${escapeHtml(page.eyebrow)}</p>
          <h1>${escapeHtml(page.h1)}</h1>
          <p class="intro">${escapeHtml(page.intro)}</p>
        </div>
        <aside class="panel">
          <h2>Focused service areas</h2>
          <div class="tags">${page.keywords.map((keyword) => `<span>${escapeHtml(keyword)}</span>`).join('')}</div>
        </aside>
      </section>
      <section class="section">
        <p class="eyebrow">What We Build</p>
        <div class="grid">${page.outcomes.map((item) => `<article class="card"><strong>${escapeHtml(item)}</strong><p>Planned, designed, built, integrated, and launched with a practical product workflow.</p></article>`).join('')}</div>
      </section>
      <section class="section">
        <p class="eyebrow">Questions</p>
        <div class="grid">${page.faqs.map(([question, answer]) => `<article class="card faq"><strong>${escapeHtml(question)}</strong><p>${escapeHtml(answer)}</p></article>`).join('')}</div>
      </section>
      <section class="section">
        <div class="cta">
          <div>
            <p class="eyebrow">Start A Build</p>
            <p>Share your product idea, workflow problem, or website goal. Skillwyn Labs can help shape the first useful version and the path to launch.</p>
          </div>
          <a class="button" href="mailto:teams@skillwyn.com">teams@skillwyn.com</a>
        </div>
      </section>
      <section class="section">
        <p class="eyebrow">Related Services</p>
        <div class="related">${relatedLinks}</div>
      </section>
      <footer>© 2026 Skillwyn Labs. AI products, software, websites, apps, and automation.</footer>
    </main>
  </body>
</html>`;
};

await Promise.all(
  pages.map(async (page) => {
    const dir = path.join(publicDir, page.slug);
    await mkdir(dir, { recursive: true });
    await writeFile(path.join(dir, 'index.html'), pageHtml(page), 'utf8');
  }),
);

const sitemapUrls = [`${siteUrl}/`, ...pages.map((page) => `${siteUrl}/${page.slug}/`)];
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapUrls
  .map(
    (url) => `  <url>
    <loc>${url}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${url === `${siteUrl}/` ? '1.0' : '0.8'}</priority>
  </url>`,
  )
  .join('\n')}
</urlset>
`;

await writeFile(path.join(publicDir, 'sitemap.xml'), sitemap, 'utf8');
await writeFile(path.join(publicDir, 'robots.txt'), `User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap.xml
`, 'utf8');
