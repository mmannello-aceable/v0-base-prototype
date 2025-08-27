/*
 * Project Guardrails Documentation
 * 
 * This file documents architectural decisions, design patterns, and implementation
 * guidelines for maintaining consistency across prototype iterations.
 */

# Project Guardrails

This file contains architectural decisions, design patterns, and implementation guidelines for this prototype. Future AI assistants should reference this documentation when building features or making changes to ensure consistency with established patterns.

## Purpose
- Document key architectural decisions and rationale
- Define component usage patterns and conventions
- Establish design token usage and color schemes
- Record functionality patterns and data flow decisions
- Maintain consistency across prototype iterations

<!-- Adding focus clarification for documentation approach -->
**Focus**: Document patterns and rules, not specific implementation values.

---

<!-- Add new guardrails below this line -->

<!-- Adding design system architecture patterns -->
## Design Token System
- **Architecture**: CSS custom properties + TypeScript constants pattern for type safety
- **Organization**: Global tokens in globals.css, importable via TypeScript module
- **Priority**: Design tokens supersede framework utilities - use design system first, framework as fallback
- **Spacing**: Consistent grid system using rem units for accessibility
- **Naming**: Semantic prefixes for token categories, descriptive names for CSS classes

## CSS Organization
- **Global patterns**: Site-wide semantic classes in globals.css for common layouts
- **Component styles**: CSS modules for component-specific styling when complexity demands
- **Naming strategy**: Start general, get specific only when needed to avoid over-engineering
- **Token usage**: Components reference design tokens via semantic classes or direct imports
