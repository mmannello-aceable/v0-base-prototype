/*
 * Debug Checklist Documentation
 * 
 * This file contains verification steps for ensuring quality, consistency,
 * and adherence to established patterns when making changes.
 */

# Debug Checklist

This file contains verification steps that AI assistants should follow when making changes to ensure quality, consistency, and adherence to established patterns. Check these items before finalizing any modifications to the prototype.

## Purpose
- Verify changes follow established design patterns
- Ensure new components use existing design tokens
- Validate functionality against architectural decisions
- Check for consistency with documented guardrails
- Prevent breaking changes to established patterns

<!-- Adding focus clarification for documentation approach -->
**Focus**: Document patterns and rules, not specific implementation values.

---

<!-- Add new checklist items below this line -->

<!-- Adding design system verification steps -->
## Design Token Compliance
- [ ] New components use established design tokens instead of hardcoded values
- [ ] Spacing follows the established grid system (no arbitrary spacing values)
- [ ] Colors reference design token variables, not hex/rgb values directly
- [ ] Border radius uses design system tokens for consistency
- [ ] CSS class names follow established semantic naming patterns

## Architecture Consistency
- [ ] Global patterns use semantic classes in globals.css
- [ ] Component-specific styles use appropriate organization (modules vs global)
- [ ] Design system takes priority over framework utilities where overlap exists
