# Design Guidelines: Ron Jones Professional Portfolio

## Design Approach
**Reference-Based**: Drawing inspiration from modern professional portfolios (Linear's typography confidence, Stripe's professional restraint, Notion's content balance) while maintaining personality and warmth. This is a personal brand site—professional credibility meets authentic human connection.

## Design Principles
- **Professional but Personal**: Balance technical expertise with approachable personality
- **Content-First**: Let Ron's experience and projects speak loudly
- **Visual Storytelling**: Use images decisively to humanize and demonstrate
- **Clear Hierarchy**: Distinct separation between professional work and personal interests

---

## Typography System

**Font Families** (Google Fonts):
- Primary: 'Inter' - Professional, clean, excellent readability
- Accent: 'Space Grotesk' - For hero headline and section titles (confident, modern)

**Hierarchy**:
- Hero Headline: Space Grotesk, 4xl/5xl/6xl (responsive), Bold (700)
- Hero Subtext: Inter, xl/2xl, Regular (400)
- Section Titles: Space Grotesk, 3xl/4xl, SemiBold (600)
- Subsection/Card Titles: Inter, xl/2xl, SemiBold (600)
- Body Text: Inter, base/lg, Regular (400)
- Small Text/Labels: Inter, sm, Medium (500)

---

## Layout & Spacing System

**Spacing Primitives** (Tailwind):
Core units: 4, 6, 8, 12, 16, 20, 24
- Component padding: p-6 to p-8
- Section spacing: py-16 to py-24 (desktop), py-12 (mobile)
- Card gaps: gap-6 to gap-8
- Element margins: mb-4, mb-6, mb-8

**Container Strategy**:
- Max width: max-w-6xl for content sections
- Full width: Hero and major section breaks
- Prose width: max-w-3xl for resume/bio text blocks

---

## Page Structure & Sections

### 1. Hero Section (80-90vh)
- Large professional photo of Ron (left or right 40% width on desktop)
- Hero content opposite photo:
  - Bold headline: "Ron Jones" + tagline combining both expertise areas
  - Brief value statement (2-3 lines)
  - Dual CTAs: "View SE Experience" / "View CS Leadership" (navigate to resume section with toggle state)
  - Subtle scroll indicator
- Desktop: Two-column split | Mobile: Stack photo above text

### 2. About Section
- Brief personal narrative (max-w-3xl centered)
- Blend professional philosophy with personality
- Include mention of dogs, hobbies as transition to next section
- Consider small photo grid or single accent image (dogs)

### 3. Professional Experience
- Toggle/Tab component at top: "Solutions Engineering Leader" | "Customer Success Leader"
- Display selected resume content in clean, scannable format:
  - Timeline-style layout for positions
  - Company cards with logo placeholders
  - Key achievements as bullet lists
  - Mermaid diagram showing career progression or technical stack evolution
- Use cards (hover lift effect) for each role

### 4. Hobbies & Projects (Full creative expression)
**Multi-column grid** (2-3 columns desktop, 1 mobile):

Cards for each hobby area:
- **3D Printing & Modeling**: Image placeholder, description, example projects
- **Drones**: Similar card treatment
- **Home Networking**: Mermaid network diagram showing setup
- **Media Server/Programming**: System architecture diagram (Mermaid)
- **DIY Projects**: Gallery-style grid or carousel of project images

Each card includes:
- Icon or image
- Title
- Brief description
- "Learn More" expansion or modal option

### 5. Contact/CTA Section
- Simple, direct
- Email, LinkedIn, phone
- Optional: "Let's Connect" headline
- Dog photos as humanizing footer element (small, tasteful)

---

## Component Library

**Navigation**: 
Fixed header, logo/name left, nav links right (About, Experience, Projects, Contact), mobile hamburger

**Buttons**:
- Primary: Medium size, rounded-lg, font-medium
- Secondary: Outlined variant
- On images: Backdrop blur (backdrop-blur-sm) + semi-transparent background

**Cards**:
- Rounded-xl borders
- Subtle shadow (shadow-sm), hover shadow-lg transition
- Padding: p-6 to p-8

**Tabs/Toggles**:
- Pill-style for resume switcher
- Active state clearly differentiated
- Smooth transition between content

**Timeline** (for experience):
- Vertical line connecting roles
- Dates left, content right
- Clean, minimal connector dots

---

## Images

**Required Images**:
1. **Hero**: Professional photo of Ron (high-quality, well-lit headshot or environmental portrait)
2. **About section**: Dog photo(s) - warm, friendly touch
3. **Hobby cards**: Placeholder images for each hobby category (3D prints, drone, home server setup, DIY project examples)

**Image Treatment**:
- Rounded corners (rounded-lg to rounded-xl)
- Aspect ratios: Hero (3:4 portrait), Cards (16:9 or 1:1)
- Subtle grayscale filter on hover for interactive elements

---

## Mermaid Diagrams

Use strategically in:
- Career journey/progression flow
- Technical architecture for media server
- Home network topology diagram
- Skills/expertise relationship map

Style: Clean, minimal, professional color palette alignment

---

## Animations

**Minimal and purposeful**:
- Subtle scroll-triggered fade-ins for sections
- Card hover lift (transform translateY)
- Smooth tab transitions
- NO distracting hero animations, parallax, or excessive motion

---

## Accessibility & Quality

- All images have descriptive alt text
- Sufficient contrast ratios (WCAG AA minimum)
- Focus states clearly visible
- Semantic HTML structure throughout
- Keyboard navigation support for all interactive elements