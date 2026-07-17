---
name: Architectural Logic
colors:
  surface: '#f7f9fb'
  surface-dim: '#d8dadc'
  surface-bright: '#f7f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f6'
  surface-container: '#eceef0'
  surface-container-high: '#e6e8ea'
  surface-container-highest: '#e0e3e5'
  on-surface: '#191c1e'
  on-surface-variant: '#45474c'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f3'
  outline: '#75777d'
  outline-variant: '#c5c6cd'
  surface-tint: '#545f73'
  primary: '#091426'
  on-primary: '#ffffff'
  primary-container: '#1e293b'
  on-primary-container: '#8590a6'
  inverse-primary: '#bcc7de'
  secondary: '#0058be'
  on-secondary: '#ffffff'
  secondary-container: '#2170e4'
  on-secondary-container: '#fefcff'
  tertiary: '#1e1200'
  on-tertiary: '#ffffff'
  tertiary-container: '#35260c'
  on-tertiary-container: '#a38c6a'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d8e3fb'
  primary-fixed-dim: '#bcc7de'
  on-primary-fixed: '#111c2d'
  on-primary-fixed-variant: '#3c475a'
  secondary-fixed: '#d8e2ff'
  secondary-fixed-dim: '#adc6ff'
  on-secondary-fixed: '#001a42'
  on-secondary-fixed-variant: '#004395'
  tertiary-fixed: '#fadfb8'
  tertiary-fixed-dim: '#ddc39d'
  on-tertiary-fixed: '#271902'
  on-tertiary-fixed-variant: '#564427'
  background: '#f7f9fb'
  on-background: '#191c1e'
  surface-variant: '#e0e3e5'
typography:
  display:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.4'
  code-sm:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '400'
    lineHeight: '1.5'
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  container-max: 1120px
  gutter: 24px
  section-gap: 80px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
---

## Brand & Style
The design system is engineered for a Java Backend Developer whose work emphasizes stability, performance, and structural integrity. The brand personality is authoritative and precise, reflecting the "logic-first" mindset of enterprise software development.

The visual style is **Corporate Minimalism** with a **Tech-Focused** edge. It avoids decorative fluff in favor of information density and high legibility. The aesthetic draws from modern IDEs and technical documentation—clean, structured, and intentional. The emotional response should be one of immediate trust and professional competence, signaling that the developer builds systems that are as robust as they are refined.

## Colors
This design system utilizes a high-contrast, professional palette grounded in deep slate and technical blues. 

- **Primary (#1e293b):** Used for primary text, headings, and heavy structural elements. It provides the "weight" necessary for a backend persona.
- **Secondary (#3b82f6):** The "Professional Blue" used for actions, syntax highlighting metaphors, and accenting key technical skills.
- **Neutral/Background (#f8fafc):** A clean, off-white background that reduces eye strain while maintaining a crisp, clinical look.
- **Borders (#e2e8f0):** Used extensively for "code-like" clarity to define sections without using heavy shadows.

## Typography
The typography system relies on **Inter** for its neutral, highly legible Swiss-style qualities, ensuring that complex project descriptions remain readable. 

To reinforce the developer theme, **JetBrains Mono** is introduced for labels, tech tags, and metadata. This font pairing distinguishes between "human narrative" and "technical data." 

Large headings use tight letter-spacing and heavy weights to create a sense of importance, while body text maintains generous line-height for long-form reading of technical summaries and project case studies.

## Layout & Spacing
The layout follows a **Fixed Grid** philosophy on desktop to ensure content remains centered and readable, reflecting the structured nature of backend architecture. 

- **Grid:** A 12-column grid system is used for project galleries and skill categorizations. 
- **Rhythm:** Vertical spacing is generous between major sections (`80px`) to provide "breathing room" and clear mental breaks between the Summary, Skills, and Projects.
- **Mobile:** On mobile devices, the grid collapses to a single column with `20px` side margins. Large display type scales down significantly to prevent awkward word breaks.

## Elevation & Depth
In line with the minimalist and high-contrast requirement, this design system avoids heavy shadows and skeuomorphism. Depth is achieved through **Tonal Layering** and **Low-Contrast Outlines**.

1.  **Level 0 (Background):** The neutral slate-white surface.
2.  **Level 1 (Cards/Sections):** White surfaces with a `1px` solid border in `border_subtle`.
3.  **Level 2 (Hover/Active):** A very soft, diffused shadow (0px 4px 12px rgba(30, 41, 59, 0.05)) and a border color shift to the accent blue.

This approach ensures the UI feels "flat" and "engineered" rather than "decorated."

## Shapes
The shape language is strictly **Soft (0.25rem)**. The small border radius maintains a professional, serious tone while removing the harshness of razor-sharp corners. 

- **Cards:** Use `rounded-lg` (0.5rem) for a slightly softer container feel.
- **Tech Tags & Buttons:** Use `rounded` (0.25rem) to keep them looking like UI "components" or "modules."
- **Inputs:** Use `rounded` (0.25rem) to mirror the professional aesthetic of IDE input fields.

## Components

### Buttons
- **Primary:** Solid `primary_color_hex` with white text. No gradients. High-contrast hover state (slight opacity change or slight darkening).
- **Secondary/Ghost:** `1px` border of `primary_color_hex` with matching text color.

### Tech Tags (Chips)
- Background: `neutral_color_hex`.
- Border: `1px solid border_subtle`.
- Font: `label-md` (JetBrains Mono).
- Use these for categorizing skills (e.g., Spring Boot, AWS, PostgreSQL).

### Project Cards
- High-contrast containers with a bold headline, a concise 2-line summary, and a footer containing a row of tech tags.
- The entire card should act as a subtle trigger, with the border changing to `secondary_color_hex` on hover.

### Lists (Technical Skills)
- Use a "Property: Value" layout for skill categories.
- Category headers should be `headline-md` with a small blue accent bar to the left.

### Code Blocks / Snippets
- Used sparingly for "Summary" or "Contact" sections to add a developer flair.
- Background: `primary_color_hex` (Deep Slate).
- Text: White or Light Blue syntax highlighting colors.