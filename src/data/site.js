import taraImg from '../assets/tara-jewellery.webp';
import taraImg_480 from '../assets/tara-jewellery-480.webp';
import taraImg_800 from '../assets/tara-jewellery-800.webp';
import taraImg_1200 from '../assets/tara-jewellery-1200.webp';
import workImg1 from '../assets/sidescroll1.jpg';
import workImg1_480 from '../assets/sidescroll1-480.jpg';
import workImg2 from '../assets/sidescroll2.jpg';
import workImg2_480 from '../assets/sidescroll2-480.jpg';
import workImg2_800 from '../assets/sidescroll2-800.jpg';
import workImg3 from '../assets/sidescroll3.jpg';
import workImg3_480 from '../assets/sidescroll3-480.jpg';
import workImg3_800 from '../assets/sidescroll3-800.jpg';

export const SITE_URL = import.meta.env.VITE_SITE_URL || 'https://codevio.net';

export const SITE = {
  name: 'Codevio',
  url: SITE_URL,
  tagline: 'From idea to launch, in weeks.',
  bottomLine: 'Launch partner for early-stage founders',
  email: 'info.codevio@gmail.com',
  phone: '+383 45 420 977',
  phoneHref: '+38345420977',
  responseTime: 'We reply within one business day.',
};

// The Formspree form ID is a public endpoint identifier, not a secret — it is
// already visible in the markup of the no-JS form fallback. Never put a
// Formspree API key, SMTP credential, or other secret in a VITE_* variable:
// those are inlined into the public client bundle.
export const FORMSPREE_FORM_ID = import.meta.env.VITE_FORMSPREE_FORM_ID || 'xyeznlrj';

export const CONTACT_FORM = {
  provider: 'formspree',
  endpoint: `https://formspree.io/f/${FORMSPREE_FORM_ID}`,
  fallbackAction: `https://formspree.io/f/${FORMSPREE_FORM_ID}`,
};

export const PAGE_THEME = {
  backgroundColor: '#0a0a0f',
  gradientColors: ['#0a0a0f', '#db364e', '#7b2233'],
  menuColors: ['#fcdfe4', '#f5b8c4'],
  menuButtonColor: '#fcdfe4',
  openMenuButtonColor: '#1c1210',
  menuTextColor: '#1c1210',
  menuHoverColor: '#db364e',
  accentColor: '#db364e',
};

export const SOCIAL_ITEMS = [
  { label: 'Instagram', link: 'https://www.instagram.com/codev.io/' },
  { label: 'LinkedIn', link: 'https://www.linkedin.com/company/codevio00/' },
  { label: 'X', link: 'https://x.com/codevio_agency' },
];

export const NAV_ITEMS = [
  { label: 'Home', link: '/' },
  { label: 'Mission', link: '/mission' },
  { label: 'Services', link: '/services' },
  { label: 'Work', link: '/work' },
  { label: 'About', link: '/about' },
  { label: 'Contact', link: '/contact' },
];

export const MISSION = {
  eyebrow: 'Our Mission',
  statement: 'We turn ideas into brands, products, and experiences that are ready for the real world.',
  body: 'Codevio is a digital studio combining design, development, branding, and AI to help businesses turn ideas into something people can see, use, and remember. From a new brand or website to a custom SaaS product or AI agent, we bring strategy, design, and technology together under one team — without unnecessary layers, endless meetings, or unclear timelines. We work in focused sprints, keep scope clear, and build with the goal of getting your project live.',
  commitments: [
    'Clear scope. You know exactly what we’re building before we start.',
    'Focused execution. Small teams, direct communication, and fewer unnecessary handoffs.',
    'Design + technology. Branding, design, development, and AI working together.',
    'Built to last. We don’t just make things look good — we build them to work.',
    'Straightforward pricing. Clear project costs and no surprise invoices.',
  ],
};

export const STATS = [
  { value: '2–3', label: 'week launch sprints' },
  { value: '3', label: 'senior makers, zero handoffs' },
  { value: '30', label: 'days post-launch support' },
];

export const VALUES = [
  {
    title: 'Speed without cutting corners',
    body: 'Good work doesn’t need to take months. We use focused sprints, clear decisions, and a defined scope to move projects from idea to launch quickly.',
  },
  {
    title: 'Design that has a purpose',
    body: 'Great design isn’t decoration. Every interface, identity, interaction, and visual decision should make the product clearer and the brand stronger.',
  },
  {
    title: 'Technology that works for you',
    body: 'From websites to SaaS platforms and AI agents, we choose the right technology for the problem — not technology for the sake of technology.',
  },
  {
    title: 'One team, end to end',
    body: 'Strategy, branding, design, development, and AI stay connected throughout the project. No endless handoffs between different teams.',
  },
  {
    title: 'Built for the next stage',
    body: 'We don’t just think about launch day. We build foundations that can evolve as your business, customers, and ideas grow.',
  },
];

export const CORE_SERVICES = [
  {
    title: 'Strategy & brand direction',
    summary:
      'Positioning, messaging, and the visual system that makes a launch look credible.',
    includes: [
      'Brand direction and visual system',
      'Copy support and content shaping',
      'Launch messaging',
    ],
  },
  {
    title: 'Product & interface design',
    summary:
      'The UX and UI work that turns an idea into an interface people can use.',
    includes: [
      'Product scoping and user flows',
      'Wireframes and design systems',
      'Motion and interaction design',
    ],
  },
  {
    title: 'Engineering',
    summary:
      'Production front-end and full-stack build on a stack you can keep building on.',
    includes: [
      'React and Next.js front-end',
      'Auth, payments, APIs, databases',
      'Deploy, handover, documentation',
    ],
  },
  {
    title: 'Launch & iteration support',
    summary:
      'The post-launch work that keeps momentum after v1 ships.',
    includes: [
      'Analytics and performance tuning',
      'Conversion improvements',
      'New pages and feature iterations',
    ],
  },
];

export const PACKAGE_RULES = [
  {
    title: 'Starting points',
    body: 'Every listed price is a starting point or a range. Final pricing depends on functionality, integrations, users, and technical requirements.',
  },
  {
    title: 'Payment plans',
    body: 'Starter sprints are 50% deposit and 50% on launch. Larger builds split 40 / 30 / 30 at deposit, design sign-off, and launch. MVPs bill against milestones. Retainers are billed in advance on the 1st of the month.',
  },
  {
    title: 'Scope in the proposal',
    body: 'We define the exact deliverables, revision rounds, and any additional scope in your proposal before work begins.',
  },
  {
    title: 'Retainers have limits',
    body: 'Retainers include a fixed number of hours with a 3-month minimum. Unused hours do not roll over, and all scope is agreed in writing.',
  },
];

export const OFFERS = [
  {
    category: 'Launch',
    title: 'Starter — Landing',
    headline: 'A focused one-page website for your launch.',
    description: 'One custom, responsive landing page built to communicate your offer clearly — with analytics, deployment, and 30 days of post-launch support.',
    price: '€1,200',
    priceNote: '',
    timeline: '1–2 weeks',
    deliverables: [
      '1 page, custom design',
      'Responsive build',
      'Contact/CTA sections',
      'Analytics',
      'Deploy',
      '30-day support',
    ],
    forWho: 'For launches, campaigns, and early-stage ideas.',
  },
  {
    category: 'Launch',
    title: 'Starter — Brand',
    headline: 'The essential identity to launch consistently.',
    description: 'A compact brand starter with the logo, palette, and type foundations your launch needs to show up consistently everywhere.',
    price: '€1,200',
    priceNote: '',
    timeline: '1–2 weeks',
    deliverables: [
      'Logo system',
      'Color palette',
      'Typography',
      'Basic usage guide',
      'Social avatar set',
    ],
    forWho: 'For new businesses and early-stage launches.',
  },
  {
    category: 'Launch',
    title: 'Launch Lite',
    headline: 'Brand and landing page in one coherent launch.',
    description: 'Starter Brand + Starter Landing with one shared direction — a single, coherent launch instead of two disconnected pieces.',
    price: '€2,400',
    priceNote: 'bundle',
    timeline: '2–3 weeks',
    deliverables: [
      'Starter — Brand',
      'Starter — Landing',
      'Shared creative direction',
      'One coherent launch',
    ],
    forWho: 'For first launches that need both brand and page.',
  },
  {
    category: 'Launch',
    title: 'Launch Pro',
    headline: 'Website, brand identity, and 3 months of care.',
    description: 'Standard Website + Complete Brand Identity + 3 months of Website Care — the full credible presence in one bundle.',
    price: '€6,500',
    priceNote: 'bundle',
    badge: 'Most popular',
    timeline: '3–5 weeks',
    deliverables: [
      'Standard — Website',
      'Complete brand identity',
      '3 months Website Care',
      'One team end to end',
    ],
    forWho: 'For businesses that need the complete package.',
  },
  {
    category: 'Websites',
    title: 'Standard — Website',
    headline: 'A complete website for a growing business.',
    description: 'A custom multi-page website with CMS, forms, and the SEO basics needed to make your business credible online.',
    price: '€3,500–5,000',
    priceNote: '',
    timeline: '2–3 weeks',
    deliverables: [
      '5–7 pages',
      'Custom UI/UX',
      'CMS',
      'Forms',
      'Analytics',
      'SEO basics',
      'Deploy',
    ],
    forWho: 'For service businesses and growing teams.',
  },
  {
    category: 'Websites',
    title: 'Premium — Website',
    headline: 'A high-end website with deeper functionality and polish.',
    description: 'A premium web experience for brands that need advanced interaction, integrations, and accessibility built in.',
    price: '€7,500–12,000',
    priceNote: '',
    timeline: '3–5 weeks',
    deliverables: [
      '8–15 pages',
      'Advanced interactions',
      'CMS',
      'Integrations',
      'Performance + WCAG 2.2 baseline',
    ],
    forWho: 'For ambitious brands and complex marketing sites.',
  },
  {
    category: 'Websites',
    title: 'E-commerce',
    headline: 'A complete online store built for selling.',
    description: 'A responsive commerce build with the catalog, checkout, payments, and shipping your store needs to run.',
    price: '€4,500–8,000',
    priceNote: '',
    timeline: '3–5 weeks',
    deliverables: [
      'Product catalog',
      'Product pages',
      'Cart + checkout',
      'Payments',
      'Shipping',
      'Admin training',
    ],
    forWho: 'For product businesses ready to sell online.',
  },
  {
    category: 'AI',
    title: 'AI Sprint',
    headline: 'One focused agent, shipped and tuned.',
    description: 'A single-purpose agent — assistant, FAQ, or lead qualification — integrated with guardrails and a clean handover.',
    price: '€2,500–4,500',
    priceNote: '',
    timeline: '1–3 weeks',
    deliverables: [
      'One focused agent (assistant / FAQ / lead qualification)',
      'Integration',
      'Guardrails',
      'Handover',
      '30-day tuning',
    ],
    forWho: 'For teams starting with a focused AI use case.',
  },
  {
    category: 'AI',
    title: 'AI Automation',
    headline: 'Connected workflows that move work forward automatically.',
    description: 'AI automation connected to the tools, data, and workflows your team already uses.',
    price: '€5,500–12,000',
    priceNote: '',
    timeline: '3–5 weeks',
    deliverables: [
      '2–4 connected workflows',
      'CRM / email / calendar integrations',
      'Dashboards',
      'Team training',
    ],
    forWho: 'For teams ready to automate multi-step processes.',
  },
  {
    category: 'Product',
    title: 'MVP Sprint',
    headline: 'From idea to a working product.',
    description: 'Scoping, core user flows, and a production build your first users can actually use — documented, deployed, and supported for 30 days.',
    price: '€9,000–25,000',
    priceNote: '',
    timeline: '4–8 weeks',
    deliverables: [
      'Scoping + core UX flows',
      'Auth',
      'Database',
      'Payments',
      'Admin',
      'Deploy + docs',
      '30-day support',
    ],
    forWho: 'For founders building their first real product.',
  },
  {
    category: 'Custom',
    title: 'Custom / Enterprise',
    headline: 'Defined in a statement of work.',
    description: 'Day-rate engagement for complex or undefined scope, agreed in a statement of work.',
    price: '€480/day',
    priceNote: 'or €70/hour',
    timeline: 'Agreed per SOW',
    deliverables: [
      'Scope defined in the SOW',
      'Complex or undefined work',
      'Monthly or milestone billing',
    ],
    forWho: 'For enterprise or open-ended engagements.',
  },
  {
    category: 'Monthly Retainers',
    title: 'Care',
    headline: 'Reliable maintenance for a healthy website.',
    description: 'Updates, monitoring, backups, and technical support, three hours a month.',
    price: '€150/month',
    priceNote: '',
    timeline: 'Monthly · 3-month minimum',
    deliverables: [
      '3 hours / month',
      'Updates',
      'Monitoring',
      'Backups',
      'Minor changes',
      'Technical support',
    ],
    forWho: 'For businesses that need their website maintained.',
  },
  {
    category: 'Monthly Retainers',
    title: 'AI Care',
    headline: 'Keep your AI agents sharp.',
    description: 'Monthly tuning, guardrail updates, and monitoring for the AI agents we ship with you.',
    price: '€350/month',
    priceNote: '',
    timeline: 'Monthly · 3-month minimum',
    deliverables: [
      '3–5 hours / month',
      'Agent tuning',
      'Guardrail updates',
      'Monitoring + support',
    ],
    forWho: 'For teams running a Codevio AI agent.',
  },
  {
    category: 'Monthly Retainers',
    title: 'Growth',
    headline: 'Content and performance support that compounds.',
    description: 'Content updates, minor design changes, and performance work for teams improving their website over time.',
    price: '€450/month',
    priceNote: '',
    timeline: 'Monthly · 3-month minimum',
    deliverables: [
      '6 hours / month',
      'Content updates',
      'Minor design changes',
      'Analytics',
      'Performance monitoring',
      'Priority support',
    ],
    forWho: 'For businesses actively improving their digital presence.',
  },
  {
    category: 'Monthly Retainers',
    title: 'Development Partner',
    headline: 'Ongoing senior support across product and technology.',
    description: 'Development, design, and AI work on tap every month — your senior team on call without hiring one.',
    price: '€1,200/month',
    priceNote: '',
    timeline: 'Monthly · 3-month minimum',
    deliverables: [
      '10 hours / month',
      'Development + design',
      'SaaS improvements',
      'AI automation',
      'Technical support',
    ],
    forWho: 'For teams that need ongoing technical momentum.',
  },
];

// Fills the last cell of the Services pricing grid. Deliberately a brand
// promise rather than a testimonial: the site has no real client quotes yet
// (see docs/agency-strategy.md "Proof checklist"), so nothing here is
// attributed to a person or company.
export const PRICING_PROMISE = {
  eyebrow: 'Why Codevio',
  quote: 'Fixed scope. Fixed price. Fixed launch date.',
  support:
    'Every price here is a starting point. What you sign is a fixed scope, a fixed cost, and a launch date in the calendar.',
  points: [
    'Senior hands only — 2–3 makers, zero handoffs',
    'One team across brand, design, and engineering',
    'Scope locked before we start, not after',
    'Post-launch support included in every sprint',
  ],
};

// The home page keeps its original four-card teaser; the full pricing catalog
// lives on the Services page.
export const HOME_OFFERS = [
  {
    title: 'Starter — Brand',
    headline: 'From idea → recognizable brand.',
    description:
      'A compact identity — logo system, palette, typography, usage guide, and social avatars — so your launch shows up consistently everywhere.',
    timeline: '1–2 weeks',
    price: '€1,200',
    priceNote: 'one-time',
  },
  {
    title: 'Standard — Website',
    headline: 'From idea → live website.',
    description:
      'A custom 5–7 page website with CMS, forms, analytics, and SEO basics — built to look credible and turn visitors into customers.',
    timeline: '2–3 weeks',
    price: '€3,500–5,000',
    priceNote: 'one-time',
  },
  {
    title: 'AI Sprint',
    headline: 'From problem → working AI agent.',
    description:
      'One focused agent — assistant, FAQ, or lead qualification — integrated into your stack with guardrails and 30 days of tuning.',
    timeline: '1–3 weeks',
    price: '€2,500–4,500',
    priceNote: 'one-time',
  },
  {
    title: 'MVP Sprint',
    headline: 'From idea → working product.',
    description:
      'Core UX flows, auth, database, payments, and admin — scoped, built, documented, and supported for 30 days after launch.',
    timeline: '4–8 weeks',
    price: '€9,000–25,000',
    priceNote: 'one-time',
  },
];

export const PROCESS = [
  {
    step: 'Week 0',
    title: 'Discovery & Scope',
    body: 'We start by understanding what you’re trying to achieve. We define the goals, requirements, deliverables, timeline, and scope before development begins.',
  },
  {
    step: 'Week 1',
    title: 'Direction & Structure',
    body: 'We establish the creative and technical direction. Depending on the project, this can include brand direction, UX, wireframes, architecture, or product planning.',
  },
  {
    step: 'Week 2',
    title: 'Build',
    body: 'Design becomes reality. We develop the website, product, SaaS platform, AI system, or brand assets while keeping you involved throughout the process.',
  },
  {
    step: 'Week 3',
    title: 'Polish & Launch',
    body: 'We refine the details, test everything, optimize performance, and prepare the final product for launch.',
  },
  {
    step: 'After',
    title: 'Support & Growth',
    body: 'Launch isn’t the end. We can continue with maintenance, new features, design work, AI improvements, or ongoing development when you need it.',
  },
];

export const ICP = {
  builtFor: [
    'Founders and small teams, 1–15 people, in the EU or US',
    'Pre-seed and seed startups that need to look credible before the next round',
    'Product launches, rebrands, and demo-day deadlines',
    'Teams that value clear communication over account management',
  ],
  notFor: [
    '“Make it cheap, just like this template” projects',
    'Open-ended scope without a decision-maker in the room',
    'Endless revision loops',
    'Work we cannot ship inside a fixed sprint',
  ],
};

// Project examples marked `illustrative` are representative mock case studies.
export const CASE_STUDIES = [
  {
    slug: 'tara-jewellery',
    name: 'Tara Jewellery',
    metric: 'Live Shopify storefront',
    description:
      'An e-commerce storefront for everyday gold and silver jewellery, with curated categories, featured pieces, and a direct shopping flow.',
    challenge:
      'Make it easy for shoppers to discover Tara Jewellery’s everyday gold and silver pieces and move from browsing to purchase.',
    approach:
      'Organize the Shopify store around necklace, bracelet, earring, and ring collections, highlight featured products, and connect the catalogue to cart and checkout.',
    deliverables: [
      'Shopify storefront',
      'Collection and product pages',
      'Featured product sections',
      'Cart and checkout flow',
      'Responsive shopping experience',
    ],
    outcome:
      'A live online store where customers can browse Tara Jewellery’s collections and shop directly.',
    tags: ['E-commerce', 'Shopify', 'Jewellery'],
    image: taraImg,
    imageSrcSet: `${taraImg_480} 480w, ${taraImg_800} 800w, ${taraImg_1200} 1200w, ${taraImg} 1600w`,
    externalUrl: 'https://www.tarajewellery.org/',
  },
  {
    slug: 'saas-waitlist-launch',
    name: 'SaaS waitlist launch',
    metric: 'Idea → live in 14 days',
    description:
      'Brand direction, landing page, and waitlist flow for a seed-stage B2B tool ahead of its demo day.',
    challenge:
      'The team had a strong product idea but needed a clear story and a credible launch presence before demo day.',
    approach:
      'We clarified the positioning, created a compact visual direction, and built a focused landing page around one conversion path: joining the waitlist.',
    deliverables: ['Positioning and messaging', 'Visual direction', 'Responsive landing page', 'Waitlist flow'],
    outcome: 'A focused launch presence, live in two weeks and ready to collect early demand.',
    tags: ['Brand', 'Website'],
    image: workImg1,
    imageSrcSet: `${workImg1_480} 480w, ${workImg1} 720w`,
    illustrative: true,
  },
  {
    slug: 'marketplace-mvp',
    name: 'Marketplace MVP',
    metric: 'Prototype → product in 31 days',
    description:
      'Two-sided marketplace MVP with payments and admin tooling, shipped on React and Supabase.',
    challenge:
      'The founders needed to test the complete marketplace loop with real users, not just present another clickable prototype.',
    approach:
      'We reduced the product to its essential buyer and seller flows, then built the core experience with payments and lightweight admin tooling.',
    deliverables: ['Product scoping', 'Buyer and seller flows', 'Payments integration', 'Admin tooling'],
    outcome: 'A working MVP that could support the first real marketplace transactions in 31 days.',
    tags: ['MVP', 'Full-stack'],
    image: workImg2,
    imageSrcSet: `${workImg2_480} 480w, ${workImg2_800} 800w, ${workImg2} 1080w`,
    illustrative: true,
  },
  {
    slug: 'rebrand-and-relaunch',
    name: 'Rebrand & relaunch',
    metric: 'Rebrand → relaunch in 21 days',
    description:
      'New identity system and site for an established brand that had outgrown its first website.',
    challenge:
      'The existing brand had grown beyond its original website, making the business look less established than it really was.',
    approach:
      'We sharpened the identity, organized the content around the customer journey, and rebuilt the site as a faster, clearer sales tool.',
    deliverables: ['Identity refresh', 'Content structure', 'Responsive website', 'Launch and QA'],
    outcome: 'A more confident brand and a relaunch shipped in three weeks.',
    tags: ['Branding', 'Website'],
    image: workImg3,
    imageSrcSet: `${workImg3_480} 480w, ${workImg3_800} 800w, ${workImg3} 1080w`,
    illustrative: true,
  },
];
