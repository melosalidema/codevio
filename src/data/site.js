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
// already visible in the markup of the no-JS form fallback. It is read from
// VITE_FORMSPREE_FORM_ID so it stays out of the repository. Never put a
// Formspree API key, SMTP credential, or other secret in a VITE_* variable:
// those are inlined into the public client bundle.
const formspreeFormId = import.meta.env.VITE_FORMSPREE_FORM_ID || '';

export const CONTACT_FORM = {
  endpoint: formspreeFormId ? `https://formspree.io/f/${formspreeFormId}` : '',
  isConfigured: Boolean(formspreeFormId),
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
  statement: 'We compress the distance between “we have an idea” and “we’re live.”',
  body: 'Codevio is a two-to-three person studio of senior designers and engineers. We help early-stage founders in the EU and US look credible before launch or their next round — shipping brand, website, and working software in fixed sprints, weeks not quarters, without agency bloat, handoffs, or surprise invoices.',
  commitments: [
    'We only take work we can ship inside a fixed sprint.',
    'Scope is locked before we start — extras become the next sprint.',
    'Senior hands only: the people selling the work do the work.',
    'We measure ourselves on time-to-live, not billable hours.',
  ],
};

export const STATS = [
  { value: '2–3', label: 'week launch sprints' },
  { value: '3', label: 'senior makers, zero handoffs' },
  { value: '30', label: 'days post-launch support' },
];

export const VALUES = [
  {
    title: 'Speed is a process',
    body: 'Fixed scope, fixed timeline, a named ship date. Speed comes from discipline, not shortcuts.',
  },
  {
    title: 'Senior hands only',
    body: 'Two to three makers who design and build the work themselves. No juniors learning on your budget, no account managers in between.',
  },
  {
    title: 'Details others skip',
    body: 'Motion that feels intentional, interfaces that get out of the way, code built to survive past launch day.',
  },
  {
    title: 'One team, end to end',
    body: 'Strategy, design, and engineering in the same room, so nothing gets lost in translation.',
  },
  {
    title: 'Radical clarity',
    body: 'You always know what is shipping, when, and what it costs. Surprises belong in launches, not invoices.',
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
    title: 'Scope locks at kickoff',
    body: 'Deliverables, timeline, and ship date are agreed before we start. Anything outside scope becomes the next sprint — never an open-ended edit.',
  },
  {
    title: 'Fixed timeline, named date',
    body: 'Every sprint has a ship date written into the plan. We measure ourselves on hitting it.',
  },
  {
    title: 'Two rounds per phase',
    body: 'Feedback is consolidated and delivered within two business days, so momentum never stalls.',
  },
  {
    title: '30 days of support',
    body: 'Both sprints include 30 days of post-launch support. Keep going with the retainer when you need it.',
  },
];

export const OFFERS = [
  {
    title: 'Landing Page Sprint',
    headline: 'Idea → live landing page in 1 week.',
    description:
      'One sharp, fast-loading page that puts your idea in front of real people — and a low-risk way to see how we work before a full sprint.',
    timeline: '1 week',
    price: '€500',
    priceNote: 'one-time',
    deliverables: [
      'One high-converting landing page',
      'Copy shaping and messaging',
      'Responsive build and analytics',
      'Deploy and launch checklist',
      '7 days post-launch support',
    ],
    forWho: 'Founders validating an idea or testing messaging before a full sprint.',
    clientInputs: [
      'One decision-maker on the kickoff call',
      'Copy and asset direction within 1 business day',
      'Domain and hosting access',
    ],
    excludes: [
      'Multi-page sites',
      'Brand identity from scratch',
      'Paid media and ongoing content',
    ],
    addOns: [
      'Extra page',
      'Blog or CMS setup',
      'Advanced motion pass',
    ],
    nextStep: 'Website Sprint or MVP Sprint',
    image: entryImg,
    color: '#f5b8c4',
  },
  {
    title: 'Website Sprint',
    headline: 'Idea → live site in 2–3 weeks.',
    description:
      'A brand-sharp, fast-loading website that makes you look credible from day one. Built to convert visitors into early users, customers, and investors.',
    timeline: '2–3 weeks',
    price: '€750',
    priceNote: 'one-time',
    deliverables: [
      'Brand direction and visual system',
      '5–7 page responsive site',
      'Copy support and content shaping',
      'Analytics and launch checklist',
      '30 days post-launch support',
    ],
    forWho: 'Founders launching a product, a rebrand, or a first real website.',
    clientInputs: [
      'One decision-maker on the kickoff call',
      'Copy and asset direction within 2 business days',
      'Domain and hosting access',
    ],
    excludes: [
      'Logo-only or print-only projects',
      'Paid media and ongoing content',
      'Full e-commerce builds',
      'Multilingual sites',
    ],
    addOns: [
      'Extra pages',
      'Blog or CMS setup',
      'Advanced motion pass',
      'Additional language',
    ],
    nextStep: 'Launch Retainer',
    image: webImg,
    color: '#db364e',
  },
  {
    title: 'MVP Sprint',
    headline: 'Idea → working product in 4–6 weeks.',
    description:
      'Your core product built for real users: the flow that proves the idea, shipped on a modern stack you can keep building on.',
    timeline: '4–6 weeks',
    price: '€1,000',
    priceNote: 'one-time',
    deliverables: [
      'Product scoping and user flows',
      'Auth, payments, and core feature set',
      'Admin or dashboard view',
      'Deploy, handover, and documentation',
      '30 days post-launch support',
    ],
    forWho: 'Pre-seed and seed teams that need a working product before the next round.',
    clientInputs: [
      'Decision-maker available weekly',
      'One core flow prioritized at kickoff',
      'Consolidated feedback within 2 business days',
    ],
    excludes: [
      'Native mobile apps',
      'Unlimited feature lists — scope locks at kickoff',
      'Integrations beyond the agreed set',
    ],
    addOns: [
      'Additional user roles',
      'Extra integrations',
      'Landing pages',
      'Analytics dashboard',
    ],
    nextStep: 'Launch Retainer',
    image: marketingImg,
    color: '#1a1a2e',
  },
  {
    title: 'Launch Retainer',
    headline: 'Keep shipping after launch.',
    description:
      'A monthly slice of senior design and engineering capacity for the pages, features, and tuning that come after v1.',
    timeline: 'Monthly',
    price: '€1,500–2,000',
    priceNote: 'per month',
    deliverables: [
      'New pages and product iterations',
      'Performance and conversion tuning',
      'Design and engineering on demand',
      'Priority turnaround, same team',
    ],
    forWho: 'Teams that launched with us and want to keep momentum.',
    clientInputs: [
      'A prioritized backlog',
      'One point of contact for requests',
      'Timely feedback on shipped increments',
    ],
    excludes: [
      'Paid media management',
      'Work beyond the agreed monthly capacity',
      'Staffing or body-shop arrangements',
    ],
    addOns: [
      'Extra capacity block',
      'Dedicated sprint for a new initiative',
    ],
    nextStep: 'Renew or return to a sprint',
    image: brandingImg,
    color: '#fcdfe4',
  },
];

export const PROCESS = [
  {
    step: 'Week 0',
    title: 'Kickoff & scope lock',
    body: 'One call. We map the goal, lock scope, timeline, and ship date. You get a written plan before any invoice.',
  },
  {
    step: 'Week 1',
    title: 'Direction & structure',
    body: 'Brand direction, UX wireframes, and technical architecture. Fast decisions, no committees.',
  },
  {
    step: 'Week 2',
    title: 'Build sprint',
    body: 'Design system and working build, shipped in daily increments you can see and react to.',
  },
  {
    step: 'Week 3',
    title: 'Polish & launch',
    body: 'QA, motion polish, performance pass, deploy. Your product goes live on the agreed date.',
  },
  {
    step: 'After',
    title: 'Support & iterate',
    body: '30 days of post-launch support included. Keep momentum with the retainer when you need it.',
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

// ILLUSTRATIVE examples — not real client work yet. Replace with real case
// studies (name, metric, image, tags) and remove `illustrative: true`.
export const CASE_STUDIES = [
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
