# Codevio — Core Services & Service Packages

Working doc for the two ClickUp tasks: **Define core services** and **Define service packages**.

Companion to `agency-strategy.md`. That doc sets mission, market, ICP, and positioning; this one defines *what we sell* (core services) and *how it is packaged* (service packages). Section 6 of the strategy doc summarizes the packages — this file is the source of truth.

Decisions locked in:

- Core services are described by **discipline** (strategy, design, engineering, iteration).
- Packages bundle disciplines into **fixed-scope, fixed-timeline outcomes**.
- Package menu stays at three: **Launch Site Sprint**, **MVP Sprint**, **Launch Retainer**.
- No prices published or defined yet — every engagement is quoted per project.
- Category vocabulary: **studio** (not "agency") everywhere.

---

## 1. Core services

Core services are the disciplines we sell. Every package is a bundle drawn from these.

### 1.1 Strategy & brand direction

- **What it is**: positioning, messaging, and the visual system that makes a launch look credible.
- **Included**: brand direction and visual system, logo / typography / color direction, copy support and content shaping, launch messaging.
- **Not included**: ongoing campaign strategy, paid media planning, research reports, print-heavy collateral.
- **Delivered by**: senior designer (with founder input at kickoff).
- **Feeds**: Launch Site Sprint, Launch Retainer.

### 1.2 Product & interface design

- **What it is**: the UX and UI work that turns an idea into an interface people can use.
- **Included**: product scoping, user flows, wireframes, UI design and design systems, motion and interaction design, clickable prototypes.
- **Not included**: native app design, illustration-only engagements, presentation/deck design.
- **Delivered by**: senior designer.
- **Feeds**: Launch Site Sprint, MVP Sprint, Launch Retainer.

### 1.3 Engineering

- **What it is**: production front-end and full-stack build, shipped on a stack the client can keep building on.
- **Included**: React / Next.js front-end, full-stack features (auth, payments, APIs, databases), integrations, deploy and handover, documentation, performance pass.
- **Not included**: native mobile apps, standalone infrastructure/DevOps contracts, legacy code rescue as a standalone offer.
- **Stack**: React, Next.js, TypeScript, Tailwind, Node, Supabase / Postgres, Figma. Python when the product calls for it.
- **Delivered by**: senior engineer.
- **Feeds**: Launch Site Sprint, MVP Sprint, Launch Retainer.

### 1.4 Launch & iteration support

- **What it is**: the post-launch work that keeps momentum after v1 ships.
- **Included**: analytics setup, performance and conversion tuning, new pages and feature iterations, design and engineering on demand.
- **Not included**: paid ads management, SEO content retainers, social media management.
- **Delivered by**: same team that shipped the sprint.
- **Feeds**: Launch Retainer (plus the 30-day support window in both sprints).

### Retired / not core

Say no to these, or route them to a partner:

- Paid ads and performance marketing
- SEO content retainers and social media management
- Generic "digital marketing" packages
- Native mobile development
- Print-heavy branding engagements
- Maintenance-only contracts and lowest-bidder work

---

## 2. Service packages

Three packages, all fixed scope and fixed timeline. Rules that apply to every package:

- **Scope locks at kickoff.** Deliverables, timeline, and ship date are agreed before we start.
- **Anything outside scope becomes the next sprint** — never an open-ended edit.
- **Two revision rounds per phase**, with feedback consolidated within two business days.
- **30 days of post-launch support** included in both sprints.
- **No published prices**: every engagement gets a written quote via `/contact`.
- **Payment milestones**: 50% at kickoff, 50% at ship (amounts per quote).
- We only book work we can ship inside the package timeline. No exceptions.

### 2.1 Launch Site Sprint

| | |
|---|---|
| **Promise** | Idea → live website in 2–3 weeks. |
| **Trigger** | Launching a product, a rebrand, or a first real website; demo day or conference deadline. |
| **Fit** | Founders who need to look credible on a fixed date. |
| **Fixed scope** | Brand direction and visual system · 5–7 page responsive site · copy support and content shaping · analytics and launch checklist · 30 days post-launch support. |
| **Client inputs** | One decision-maker on the kickoff call · copy and assets direction within 2 business days · domain and hosting access · one consolidated feedback pass per round. |
| **Excludes** | Logo-only or print-only projects · paid media and ongoing content · full e-commerce builds · multilingual sites (add-on). |
| **Add-ons** | Extra pages · blog / CMS setup · advanced motion pass · additional language. |
| **Next step** | Launch Retainer. |

### 2.2 MVP Sprint

| | |
|---|---|
| **Promise** | Idea → working product in 4–6 weeks. |
| **Trigger** | Pre-seed / seed round, upcoming demo day, pilot with design partners. |
| **Fit** | Teams that need working software before the next round. |
| **Fixed scope** | Product scoping and user flows · auth, payments, and the core feature set · admin or dashboard view · deploy, handover, and documentation · 30 days post-launch support. |
| **Client inputs** | Decision-maker available weekly · one core flow prioritized at kickoff · access to existing brand assets · feedback within 2 business days. |
| **Excludes** | Native mobile apps · unlimited feature lists (scope locks at kickoff) · integrations beyond the agreed set. |
| **Add-ons** | Additional user roles · extra integrations · landing pages · analytics dashboard. |
| **Next step** | Launch Retainer. |

### 2.3 Launch Retainer

| | |
|---|---|
| **Promise** | Keep shipping after launch. |
| **Trigger** | Launched and needs continuous iteration without hiring. |
| **Fit** | Teams that launched with us, or post-launch teams with an existing product. |
| **Monthly scope** | An agreed block of senior design + engineering capacity · new pages and product iterations · performance and conversion tuning · design and engineering on demand · priority turnaround, same team. |
| **Client inputs** | A prioritized backlog · one point of contact for requests · timely feedback on shipped increments. |
| **Term** | 3-month minimum, then month-to-month with 30 days notice. Capacity does not roll over between months. |
| **Excludes** | Paid media management · work beyond the agreed monthly capacity · staffing or body-shop arrangements. |
| **Add-ons** | Extra capacity block · dedicated sprint for a new initiative. |
| **Next step** | Renew monthly, or return to a sprint for a defined initiative. |

---

## 3. Core services × packages

| Discipline | Launch Site Sprint | MVP Sprint | Launch Retainer |
|---|---|---|---|
| Strategy & brand direction | ✓ | light | ✓ |
| Product & interface design | ✓ | ✓ | ✓ |
| Engineering | ✓ | ✓ | ✓ |
| Launch & iteration support | 30-day window | 30-day window | ✓ |

---

## 4. Qualification

Book a call when all of these are true (from the ICP checklist in `agency-strategy.md`):

- [ ] Budget in sprint range
- [ ] Decision-maker on the call
- [ ] A real launch date or trigger event
- [ ] Scope describable in one sentence
- [ ] Values speed over endless polish loops

Otherwise decline politely and, where possible, refer.

---

## 5. Open items

- Pricing: revisit once the first three case studies with ship-time metrics exist (see `agency-strategy.md` §9).
- Retainer capacity numbers: define the exact monthly hours/capacity block after the first two retainers.
- Add-on pricing: quote per request until further notice.
