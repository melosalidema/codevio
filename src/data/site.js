import webImg from '../assets/web.png';
import marketingImg from '../assets/marketing.png';
import brandingImg from '../assets/branding.png';
import workImg1 from '../assets/sidescroll1.jpg';
import workImg2 from '../assets/sidescroll2.jpg';
import workImg3 from '../assets/sidescroll3.jpg';
import entryImg from '../assets/sidescroll4.jpg';

export const SITE = {
  name: 'Codevio',
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
const formspreeFormId = import.meta.env.VITE_FORMSPREE_FORM_ID || 'xyeznlrj';

export const CONTACT_FORM = {
  provider: 'formspree',
  endpoint: `https://formspree.io/f/${formspreeFormId}`,
  fallbackAction: `https://formspree.io/f/${formspreeFormId}`,
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
    body: 'Every listed price is a starting point. Final pricing depends on functionality, integrations, users, and technical requirements.',
  },
  {
    title: 'Scope in the proposal',
    body: 'We define the exact deliverables and additional scope in your proposal before work begins.',
  },
  {
    title: 'Built around your needs',
    body: 'Page counts, features, integrations, and workflows are agreed around the actual requirements of your project.',
  },
  {
    title: 'Retainers have limits',
    body: 'Monthly retainers define the number of hours or tasks in the contract. We do not promise unlimited work.',
  },
];

export const OFFERS = [
  {
    category: 'Websites',
    title: 'Landing Page',
    headline: 'A focused one-page website for your launch.',
    description: 'A custom, responsive landing page built to communicate your offer clearly and turn visitors into inquiries.',
    timeline: 'Website',
    price: 'From €400',
    priceNote: '',
    deliverables: [
      '1 page',
      'Custom design',
      'Responsive development',
      'Contact/CTA sections',
      'Basic SEO',
      'Deployment',
    ],
    forWho: 'For launches, campaigns, and early-stage ideas.',
    excludes: [],
    addOns: [],
    nextStep: 'Request a quote',
    image: entryImg,
    color: '#f5b8c4',
  },
  {
    category: 'Websites',
    title: 'Business Website',
    headline: 'A complete website for a growing business.',
    description: 'A custom multi-page website with the structure, polish, and essentials needed to make your business credible online.',
    timeline: 'Website',
    price: 'From €800',
    priceNote: '',
    deliverables: [
      '5–7 pages',
      'Custom UI/UX',
      'Responsive development',
      'Contact forms',
      'Basic SEO',
      'Analytics',
      'Deployment',
    ],
    forWho: 'For service businesses and growing teams.',
    excludes: [],
    addOns: [],
    nextStep: 'Request a quote',
    image: webImg,
    color: '#db364e',
  },
  {
    category: 'Websites',
    title: 'Premium Website',
    headline: 'A high-end website with deeper functionality and polish.',
    description: 'A premium web experience for brands that need advanced interaction, content management, and performance.',
    timeline: 'Website',
    price: 'From €1,500',
    priceNote: '',
    deliverables: [
      'Custom UI/UX',
      '8–15 pages',
      'Advanced animations',
      'CMS',
      'Integrations',
      'SEO',
      'Performance optimization',
      'Analytics',
    ],
    forWho: 'For ambitious brands and complex marketing sites.',
    excludes: [],
    addOns: [],
    nextStep: 'Request a quote',
    image: marketingImg,
    color: '#1a1a2e',
  },
  {
    category: 'Websites',
    title: 'E-commerce',
    headline: 'A complete online store built for selling.',
    description: 'A responsive commerce experience with the catalog, checkout, payments, CMS, and analytics your store needs.',
    timeline: 'Website',
    price: 'From €2,000',
    priceNote: '',
    deliverables: [
      'Product catalog',
      'Product pages',
      'Cart',
      'Checkout',
      'Payment integration',
      'Responsive design',
      'CMS',
      'Analytics',
    ],
    forWho: 'For product businesses ready to sell online.',
    excludes: [],
    addOns: [],
    nextStep: 'Request a quote',
    image: brandingImg,
    color: '#fcdfe4',
  },
  {
    category: 'SaaS',
    title: 'Custom SaaS',
    headline: 'A tailored platform for the way your business works.',
    description: 'Pricing depends on functionality, integrations, users, and technical requirements.',
    timeline: 'Product',
    price: 'From €3,000',
    priceNote: '',
    deliverables: [
      'Dashboards',
      'Customer portals',
      'Management platforms',
      'Booking systems',
      'Internal tools',
      'Subscription platforms',
    ],
    forWho: 'For teams building software around a real operational need.',
    excludes: [],
    addOns: [],
    nextStep: 'Discuss your requirements',
    image: webImg,
    color: '#f5b8c4',
  },
  {
    category: 'AI',
    title: 'AI Agent',
    headline: 'A simple AI assistant that handles repeatable conversations.',
    description: 'Useful AI support for your website, knowledge base, or lead qualification flow.',
    timeline: 'Automation',
    price: 'From €750',
    priceNote: '',
    deliverables: ['Website AI assistant', 'FAQ agent', 'Knowledge-base agent', 'Basic lead qualification'],
    forWho: 'For teams starting with a focused AI use case.',
    excludes: [],
    addOns: [],
    nextStep: 'Discuss your use case',
    image: marketingImg,
    color: '#db364e',
  },
  {
    category: 'AI',
    title: 'Advanced AI Automation',
    headline: 'Connected AI workflows that move work forward automatically.',
    description: 'AI automation connected to the tools, data, and workflows your team already uses.',
    timeline: 'Automation',
    price: 'From €1,500',
    priceNote: '',
    deliverables: ['CRM integration', 'Email', 'Calendar', 'Database', 'Multiple tools', 'Automated workflows', 'Custom knowledge base'],
    forWho: 'For teams ready to automate multi-step processes.',
    excludes: [],
    addOns: [],
    nextStep: 'Discuss your workflow',
    image: entryImg,
    color: '#1a1a2e',
  },
  {
    category: 'AI',
    title: 'AI Systems',
    headline: 'Complex multi-agent and workflow systems.',
    description: 'For more complex multi-agent and workflow systems that require deeper architecture and integration.',
    timeline: 'Automation',
    price: '€3,000+',
    priceNote: '',
    deliverables: ['Multi-agent systems', 'Complex workflows', 'Custom integrations', 'Knowledge and data systems'],
    forWho: 'For organizations with complex automation requirements.',
    excludes: [],
    addOns: [],
    nextStep: 'Discuss your system',
    image: brandingImg,
    color: '#fcdfe4',
  },
  {
    category: 'Branding',
    title: 'Logo & Starter Identity',
    headline: 'A clear visual starting point for your brand.',
    description: 'The essential logo and visual foundations needed to launch consistently.',
    timeline: 'Branding',
    price: 'From €400',
    priceNote: '',
    deliverables: ['Logo', 'Logo variations', 'Color palette', 'Typography', 'Basic usage guidelines'],
    forWho: 'For new businesses and early-stage launches.',
    excludes: [],
    addOns: [],
    nextStep: 'Start your identity',
    image: entryImg,
    color: '#f5b8c4',
  },
  {
    category: 'Branding',
    title: 'Complete Brand Identity',
    headline: 'A complete identity system built for everyday use.',
    description: 'A cohesive brand system with the guidelines and applications needed to show up professionally.',
    timeline: 'Branding',
    price: 'From €900',
    priceNote: '',
    deliverables: ['Logo system', 'Color system', 'Typography', 'Brand guidelines', 'Social media identity', 'Business card/stationery', 'Brand applications'],
    forWho: 'For businesses ready to establish a consistent brand.',
    excludes: [],
    addOns: [],
    nextStep: 'Build your identity',
    image: webImg,
    color: '#db364e',
  },
  {
    category: 'Branding',
    title: 'Full Brand System',
    headline: 'Strategic art direction for a brand with room to grow.',
    description: 'Everything in a complete identity, expanded into a full brand system for campaigns and applications.',
    timeline: 'Branding',
    price: 'From €1,500',
    priceNote: '',
    deliverables: ['Everything above', 'Art direction', 'Packaging/marketing applications', 'Social templates', 'Campaign direction', 'Extended brand guidelines'],
    forWho: 'For brands investing in a complete visual language.',
    excludes: [],
    addOns: [],
    nextStep: 'Build your brand system',
    image: brandingImg,
    color: '#1a1a2e',
  },
  {
    category: 'Graphic Design',
    title: 'Individual Design',
    headline: 'One polished design asset when you need it.',
    description: 'Flexible design support for individual marketing and communication pieces.',
    timeline: 'Design',
    price: 'From €50',
    priceNote: '',
    deliverables: ['Social media post', 'Ad', 'Poster', 'Banner', 'Presentation slide'],
    forWho: 'For one-off design needs.',
    excludes: [],
    addOns: [],
    nextStep: 'Request a design',
    image: marketingImg,
    color: '#fcdfe4',
  },
  {
    category: 'Graphic Design',
    title: 'Design Package',
    headline: 'A coordinated set of graphics for a campaign or launch.',
    description: 'A focused package of reusable and promotional marketing assets.',
    timeline: 'Design',
    price: 'From €250',
    priceNote: '',
    deliverables: ['Social media templates', 'Campaign graphics', 'Promotional materials', 'Marketing assets'],
    forWho: 'For campaigns and launches that need a consistent visual set.',
    excludes: [],
    addOns: [],
    nextStep: 'Plan your design package',
    image: webImg,
    color: '#f5b8c4',
  },
  {
    category: 'Graphic Design',
    title: 'Monthly Design Support',
    headline: 'Ongoing graphic design capacity without unlimited-work promises.',
    description: 'For clients who need ongoing graphics. The number of hours or tasks is defined in the contract.',
    timeline: 'Monthly',
    price: 'From €300/month',
    priceNote: '',
    deliverables: ['Ongoing graphic design', 'Agreed hours or task capacity', 'Marketing and campaign assets', 'Consistent creative support'],
    forWho: 'For teams that need recurring design support.',
    excludes: [],
    addOns: [],
    nextStep: 'Plan monthly support',
    image: brandingImg,
    color: '#db364e',
  },
  {
    category: 'Monthly Retainers',
    title: 'Website Care',
    headline: 'Reliable maintenance for a healthy website.',
    description: 'Ongoing care for websites that need regular attention and technical support.',
    timeline: 'Monthly',
    price: '€75/month',
    priceNote: '',
    deliverables: ['Updates', 'Monitoring', 'Backups', 'Minor changes', 'Technical support'],
    forWho: 'For businesses that need their website maintained.',
    excludes: [],
    addOns: [],
    nextStep: 'Set up website care',
    image: entryImg,
    color: '#f5b8c4',
  },
  {
    category: 'Monthly Retainers',
    title: 'Growth',
    headline: 'Maintenance, content, and performance support for growth.',
    description: 'A monthly support plan for teams improving their website and its results over time.',
    timeline: 'Monthly',
    price: '€150/month',
    priceNote: '',
    deliverables: ['Website maintenance', 'Content updates', 'Minor design changes', 'Analytics', 'Performance monitoring', 'Priority support'],
    forWho: 'For businesses actively improving their digital presence.',
    excludes: [],
    addOns: [],
    nextStep: 'Plan growth support',
    image: webImg,
    color: '#db364e',
  },
  {
    category: 'Monthly Retainers',
    title: 'Development Retainer',
    headline: 'Ongoing senior support across product and technology.',
    description: 'For ongoing development, design, SaaS improvements, AI automation, integrations, and technical support. Work is defined by hours or tasks in the contract.',
    timeline: 'Monthly',
    price: 'From €300/month',
    priceNote: '',
    deliverables: ['Development', 'Design', 'SaaS improvements', 'AI automation', 'Integrations', 'Technical support'],
    forWho: 'For teams that need ongoing technical momentum.',
    excludes: [],
    addOns: [],
    nextStep: 'Plan development support',
    image: marketingImg,
    color: '#1a1a2e',
  },
];

// The home page keeps its original four-card teaser; the full pricing catalog
// lives on the Services page.
export const HOME_OFFERS = [
  {
    title: 'Brand Sprint',
    headline: 'From idea → recognizable brand.',
    description:
      'A focused visual identity that gives your business a clear direction across your website, social media, marketing, and customer experience.',
    timeline: '1–3 weeks',
    price: '€400+',
    priceNote: 'one-time',
  },
  {
    title: 'Website Sprint',
    headline: 'From idea → live website.',
    description:
      'A fast, polished website designed around your brand, built to look credible, perform well, and turn visitors into customers.',
    timeline: '2–3 weeks',
    price: '€750+',
    priceNote: 'one-time',
  },
  {
    title: 'AI Agent Sprint',
    headline: 'From problem → working AI agent.',
    description:
      'An AI agent built around your business, capable of answering questions, qualifying leads, automating tasks, and connecting with your existing tools.',
    timeline: '2–4 weeks',
    price: '€750+',
    priceNote: 'one-time',
  },
  {
    title: 'SaaS Sprint',
    headline: 'From idea → working SaaS.',
    description:
      'We design and build the core product your users actually need — from the first flow to a functional, scalable MVP.',
    timeline: '4–8 weeks',
    price: '€3,000+',
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
    image:
      'https://www.tarajewellery.org/cdn/shop/files/angel_background1.png?v=1790331865&width=1600',
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
    illustrative: true,
  },
];
