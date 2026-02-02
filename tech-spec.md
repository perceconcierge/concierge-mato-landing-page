# Maggie App Landing Page - Technical Specification

## 1. Component Inventory

### shadcn/ui Components (Built-in)
- `button` - For all CTA buttons and nav pills

### Custom Components to Build

| Component | Purpose | Props |
|-----------|---------|-------|
| `Navigation` | Fixed nav bar with logo and buttons | - |
| `HeroSection` | Main hero with text and phones | - |
| `LogoReveal` | Animated maggie text reveal | - |
| `FeaturesSection` | Yellow section with phones and text | - |
| `FeatureCarousel` | "With Maggie You Can" carousel | slides: Slide[] |
| `MissionSection` | Light blue with floating items | - |
| `StorySection` | Cream background with family photo | - |
| `ForEveryParentSection` | Pink emotional message | - |
| `StatsSection` | Animated counter | - |
| `Footer` | CTA and footer content | - |
| `PhoneMockup` | Reusable phone frame | screen: string, variant: number |
| `FloatingItem` | Animated floating element | item: FloatingItem, position: string |
| `MaggieCharacter` | SVG character component | size: string, variant: string |
| `MaggieFace` | Large face with eyes/smile | size: string |
| `AppStoreButton` | App Store download button | variant: 'yellow' \| 'white' |
| `GooglePlayButton` | Google Play button | - |

### Animation Components

| Component | Purpose |
|-----------|---------|
| `FadeInUp` | Wrapper for fade + translateY animation |
| `StaggerChildren` | Container for staggered child animations |
| `CountUp` | Animated number counter |
| `FloatingAnimation` | Infinite floating bob animation |

---

## 2. Animation Implementation Table

| Animation | Library | Implementation Approach | Complexity |
|-----------|---------|------------------------|------------|
| Hero text reveal | Framer Motion | `initial={{ opacity: 0, y: 40 }}` `animate={{ opacity: 1, y: 0 }}` with stagger | Medium |
| Phone mockups float up | Framer Motion | `initial={{ y: 100, opacity: 0 }}` `animate={{ y: 0, opacity: 1 }}` with delay | Medium |
| Maggie character idle | CSS | `@keyframes blink` infinite animation | Low |
| Logo letters stagger rise | Framer Motion | `whileInView` with staggerChildren, y: 100 → 0 | High |
| Scroll-triggered sections | Framer Motion | `whileInView` with viewport once | Medium |
| Feature carousel slide | Framer Motion | `AnimatePresence` with slide transitions | High |
| Floating items bob | CSS + Framer | `animate={{ y: [0, -10, 0] }}` infinite | Low |
| "LIGHTER" fill animation | CSS/Framer | Text stroke to fill on scroll trigger | High |
| Stats counter | Custom hook | useCountUp with requestAnimationFrame | Medium |
| Button hover effects | Tailwind + Framer | `whileHover={{ scale: 1.05 }}` | Low |
| Card hover lift | Tailwind | `hover:-translate-y-2 hover:shadow-xl` | Low |

---

## 3. Animation Library Choices

### Primary: Framer Motion
- React-native integration
- Declarative animation API
- Built-in scroll triggers (`whileInView`)
- AnimatePresence for mount/unmount
- Gesture support (hover, tap)

### Secondary: CSS Animations
- Simple infinite loops (floating, blinking)
- Performance-critical micro-interactions
- `@keyframes` for repetitive motion

### Rationale:
- Framer Motion provides the best React integration for complex scroll-triggered animations
- CSS handles simple perpetual animations more efficiently
- No need for GSAP - Framer Motion covers all requirements

---

## 4. Project File Structure

```
/mnt/okcomputer/output/app/
├── public/
│   └── images/
│       ├── phones/
│       │   ├── phone-home.png
│       │   ├── phone-map.png
│       │   ├── phone-detail.png
│       │   ├── phone-filter.png
│       │   └── phone-favorites.png
│       ├── kids/
│       │   ├── kid-1.jpg
│       │   ├── kid-2.jpg
│       │   └── kid-3.jpg
│       ├── floating/
│       │   ├── bottle.png
│       │   ├── dress.png
│       │   ├── breakfast.png
│       │   ├── banana.png
│       │   ├── apple.png
│       │   └── dummy.png
│       ├── family-photo.jpg
│       └── app-icons.png
├── src/
│   ├── components/
│   │   ├── ui/
│   │   │   └── button.tsx (shadcn)
│   │   ├── Navigation.tsx
│   │   ├── PhoneMockup.tsx
│   │   ├── MaggieCharacter.tsx
│   │   ├── MaggieFace.tsx
│   │   ├── FloatingItem.tsx
│   │   ├── AppStoreButton.tsx
│   │   ├── GooglePlayButton.tsx
│   │   └── animations/
│   │       ├── FadeInUp.tsx
│   │       ├── StaggerChildren.tsx
│   │       └── CountUp.tsx
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── LogoReveal.tsx
│   │   ├── FeaturesSection.tsx
│   │   ├── FeatureCarousel.tsx
│   │   ├── MissionSection.tsx
│   │   ├── StorySection.tsx
│   │   ├── ForEveryParentSection.tsx
│   │   ├── StatsSection.tsx
│   │   └── Footer.tsx
│   ├── hooks/
│   │   └── useCountUp.ts
│   ├── lib/
│   │   └── utils.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── tailwind.config.js
├── vite.config.ts
└── package.json
```

---

## 5. Dependencies

### Core (from init)
- react
- react-dom
- typescript
- vite
- tailwindcss
- @radix-ui/react-slot (for shadcn)
- class-variance-authority
- clsx
- tailwind-merge
- lucide-react

### Additional Required
```bash
npm install framer-motion
```

### Fonts (Google Fonts via CDN)
- Paytone One (headings)
- Caveat (script text)
- Inter (body)

---

## 6. Tailwind Configuration Extensions

```javascript
// tailwind.config.js additions
{
  theme: {
    extend: {
      colors: {
        'maggie-green': '#6EE7B7',
        'maggie-yellow': '#FEF08A',
        'maggie-pink': '#F9A8D4',
        'maggie-orange': '#FDBA74',
        'maggie-blue': '#A5F3FC',
        'maggie-cream': '#FDF6F0',
        'maggie-emerald': '#064E3B',
        'maggie-teal': '#065F46',
        'maggie-button-yellow': '#FDE047',
        'maggie-nav-pink': '#FBCFE8',
        'maggie-nav-green': '#86EFAC',
        'maggie-nav-blue': '#BAE6FD',
      },
      fontFamily: {
        'heading': ['Paytone One', 'sans-serif'],
        'script': ['Caveat', 'cursive'],
        'body': ['Inter', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'blink': 'blink 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        blink: {
          '0%, 90%, 100%': { transform: 'scaleY(1)' },
          '95%': { transform: 'scaleY(0.1)' },
        },
      },
    },
  },
}
```

---

## 7. Key Implementation Notes

### Scroll Snap Behavior
- Optional: Add `scroll-snap-type: y mandatory` to container
- Each section has `scroll-snap-align: start`

### Performance Considerations
- Use `will-change: transform` on animated elements
- Lazy load images below the fold
- Use `transform` instead of `top/left` for animations
- Implement `prefers-reduced-motion` media query

### Responsive Breakpoints
- Mobile: < 640px (single column, stacked phones)
- Tablet: 640px - 1024px (adjusted spacing)
- Desktop: > 1024px (full layout)

### Accessibility
- Semantic HTML structure
- ARIA labels on interactive elements
- Keyboard navigation for carousel
- Focus visible states
- Color contrast compliance (4.5:1 minimum)
