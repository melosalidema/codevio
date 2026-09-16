# Codevio — Agency Strategy

Working strategy doc for the four ClickUp tasks: **Mission**, **Target market / niche**, **Ideal client profile**, **Positioning**.

Decisions locked in:

- Team: 2–3 person studio (senior designers/engineers, no handoffs)
- Market: EU / US remote clients
- Positioning angle: **launch partner (speed)** — fixed sprints, weeks not months
- Pricing: not published yet; offers lead with scope + timeline

---

## 1. Mission

> **We compress the distance between "we have an idea" and "we're live."**

Long form:

> Codevio is a two-to-three person studio of senior designers and engineers. We help early-stage founders in the EU and US ship brand, website, and working software in fixed sprints — weeks, not quarters — without agency bloat, handoffs, or surprise invoices.

Short forms (for site/hero/footer):

- "From idea to launch, in weeks."
- "Built sharp. Built to last."

What the mission commits us to:

- We only take work we can ship inside a fixed sprint or a short series of them.
- Scope is locked before we start; changes become a new sprint, not an open-ended edit.
- Senior hands only. The people selling the work are the people doing the work.
- We measure ourselves on time-to-live, not billable hours.

---

## 2. Target market / niche

Lead with a **problem niche**, backed by a **vertical beachhead**:

| Layer | Definition | Why |
|---|---|---|
| Problem niche | "Idea → launched" — brand, site, MVP | Repeatable, sellable with a timeline, fits a small senior team |
| Primary beachhead | Pre-seed / seed startups (SaaS, AI tools, fintech) in the EU/US | They buy fast, refer each other, and our stack (React/Next/Supabase) is directly relevant |
| Secondary | Creator / coach personal brands needing brand + funnel site | Fast decisions, pays upfront, one-off but good cash flow |
| Expand later | DTC / e-commerce launches, B2B SaaS marketing sites | Adjacent; use once proof exists |
| Avoid for now | Local service businesses (that is a *growth/results* positioning), enterprise, lowest-bidder work | Wrong buying process for a speed offer |

Where to start geographically: **UK / DACH / Nordics** first (time zone overlap and buying culture), US second.

---

## 3. Ideal client profile (ICP)

**Company**

- 1–15 employees, pre-seed to seed stage, or revenue-positive small brands
- EU / US based
- Has a launch or funding deadline driving urgency

**Buyer**

- Founder / CEO (decides in one call) or head of marketing
- No procurement, no committees
- Values communication and proof over credentials

**Trigger events**

- Raised a round, launching a product, rebrand, conference/demo day deadline, competitor just relaunched

**Budget**

- €5–15k per sprint; €15–40k for multi-sprint engagements

**Pains**

- Agencies quote 3 months and €50k
- Freelancers vanish mid-project
- No-code tools hit a ceiling right when things get serious
- Time-zone ghosting

**Where they are**

- LinkedIn, X, startup Discords/Slacks, Product Hunt, accelerator and founder networks

**Buying behavior**

- Wants a fixed price, a visible timeline, and a process — not an open retainer
- Decides based on trust signals: previous launches, speed metrics, clear communication

---

## 4. Anti-ICP (who we say no to)

- "Make it cheap, just like this template"
- Open-ended scope with no decision-maker in the room
- 40-revision feedback loops
- Projects below the sprint minimum, or "exposure" work
- Clients who need a full procurement process before a kickoff call

**Qualification checklist** (green = book a call, red = decline politely):

- [ ] Budget in sprint range
- [ ] Decision-maker on the call
- [ ] A real launch date or trigger event
- [ ] Scope describable in one sentence
- [ ] Values speed over endless polish loops

---

## 5. Positioning

> **For early-stage founders in the EU and US who need to look credible before launch or their next round, Codevio is the launch studio that ships brand, website, and MVP in fixed 2–4 week sprints — senior design and engineering, zero handoffs.**

Positioning pillars:

1. **Fixed sprints, not open retainers** — scope and timeline locked up front
2. **Senior-only team** — 2–3 makers, no juniors, no account managers
3. **One team end-to-end** — strategy, design, and engineering in the same room
4. **Async-first with EU/US overlap hours** — clear updates, no time-zone ghosting

Category vocabulary: **studio** (not "agency"). Keep this consistent everywhere.

Competitive frame:

| Against | Our answer |
|---|---|
| Freelancers | A team, a process, and a guaranteed ship date |
| Big agencies | Same senior output, a fraction of the time and overhead |
| No-code builders | Real engineering that does not hit a ceiling at launch |

**Objection to pre-arm:** "Fast means cheap." Answer: speed is a *process* claim, not a quality discount — fixed sprints, senior hands, and a public ship date.

---

## 6. Productized offers

Canonical definitions — core services, full package specs, exclusions, add-ons, and package rules — live in [`services.md`](./services.md). Summary table:

| Offer | Promise | Timeline | Core deliverables |
|---|---|---|---|
| Launch Site Sprint | Idea → live website | 2–3 weeks | Brand direction, 5–7 page responsive site, copy support, analytics, launch checklist, 30-day support |
| MVP Sprint | Idea → working product | 4–6 weeks | Auth, payments, core flow, dashboard, deploy + handover, 30-day support |
| Launch Retainer | Keep shipping after launch | Monthly | Iteration capacity, new pages/features, performance + conversion tuning |

Rules:

- Every offer has a fixed scope, fixed timeline, and a named ship date.
- No prices on the site yet: "Request a quote" CTA that routes to Contact.
- Anything outside scope becomes the next sprint by default.

---

## 7. Proof checklist (highest-leverage gap)

The site shows case-study placeholders and no real projects yet. Priority order:

- [ ] 3 case studies, each with an **"idea → live in X days"** metric
- [ ] A "How it works" process page (week-by-week) — covered by `/services`
- [ ] 2 testimonials that explicitly mention speed or communication
- [ ] Site performance pass: a "launch in weeks" studio cannot ship a slow site
- [ ] Trust signals for EU/US buyers: contract terms, payment methods, working-hours overlap

---

## 8. Website alignment

| Page | What it carries |
|---|---|
| `/` | Positioning strip ("From idea to launch, in weeks.") + offers teaser |
| `/mission` | Mission statement, values, how we work |
| `/services` | The three productized offers, process timeline, who it's for / not for |
| `/work` | Case studies with ship-time metrics (placeholder data until real projects are added) |
| `/about` | Team + craft story aligned to the launch positioning |
| `/contact` | Single email + phone, response-time promise |

All content lives in `src/data/site.js` so copy can be edited without touching components.

---

## 9. Review cadence

- Revisit niche + ICP after the first 10 inbound leads: which sources converted?
- Revisit positioning once 3 case studies with real ship-time metrics exist.
- Then decide whether to publish pricing.
