/**
 * Design Token System
 * Complete design token exports for component imports
 * These tokens reference CSS custom properties defined in globals.css
 */
export const designTokens = {
  colors: {
    brand: "var(--color-brand)",
  },
  spacing: {
    0: "var(--sp-0)",
    4: "var(--sp-4)",
    8: "var(--sp-8)",
    12: "var(--sp-12)",
    16: "var(--sp-16)",
    20: "var(--sp-20)",
    24: "var(--sp-24)",
    28: "var(--sp-28)",
    32: "var(--sp-32)",
    36: "var(--sp-36)",
    40: "var(--sp-40)",
    44: "var(--sp-44)",
    48: "var(--sp-48)",
    52: "var(--sp-52)",
    56: "var(--sp-56)",
    60: "var(--sp-60)",
    64: "var(--sp-64)",
    68: "var(--sp-68)",
    72: "var(--sp-72)",
    76: "var(--sp-76)",
    80: "var(--sp-80)",
    84: "var(--sp-84)",
    88: "var(--sp-88)",
    92: "var(--sp-92)",
    96: "var(--sp-96)",
  },
  borderRadius: {
    4: "var(--rad-4)",
    8: "var(--rad-8)",
    16: "var(--rad-16)",
    24: "var(--rad-24)",
    round: "var(--rad-round)",
  },
} as const
