/*
 * Base Design System Initialization
 *
 * This page provides instructions for starting a new prototype using
 * the established design system foundation.
 */

"use client"

import { useState } from "react"

export default function HomePage() {
  const [copied, setCopied] = useState(false)

  const initPrompt = `Fresh Prototype Setup Instructions:

This base prototype provides a complete design system foundation. To start a new prototype:

1. **Replace this page content** (app/page.tsx) with your new prototype's main page
2. **Use established semantic classes**: .page-container, .content-text, .page-title (see globals.css)
3. **Reference design tokens**: Import from lib/design-tokens.ts for consistent spacing, colors, borders
4. **Follow documentation**: Check /docs/guardrails.md for patterns, /docs/debug-checklist.md for verification
5. **Build with existing foundation**: Use the design system as-is - no customization needed

The design system includes:
- Complete spacing scale (4pt grid, 0-96px)
- Brand color and border radius tokens
- Global semantic CSS classes
- TypeScript design token imports

Example new page structure:
<main className="page-container">
  <h1 className="page-title">Your New Prototype</h1>
  <p className="content-text">Start building here</p>
</main>`

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(initPrompt)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy text: ", err)
    }
  }

  return (
    <main className="page-container">
      <h1 className="page-title">Fresh Prototype Setup</h1>

      <section className="content-section">
        <div className="prompt-header">
          <h2>Initialization Instructions</h2>
          <button onClick={copyToClipboard} className="copy-button" aria-label="Copy setup instructions to clipboard">
            {copied ? "Copied!" : "Copy Instructions"}
          </button>
        </div>

        <div className="prompt-content">
          <p className="content-text">
            This base prototype provides a complete design system foundation. To start a new prototype:
          </p>

          <ol className="instruction-list">
            <li>
              <strong>Replace this page content</strong> (app/page.tsx) with your new prototype's main page
            </li>
            <li>
              <strong>Use established semantic classes</strong>: .page-container, .content-text, .page-title
            </li>
            <li>
              <strong>Reference design tokens</strong>: Import from lib/design-tokens.ts for consistency
            </li>
            <li>
              <strong>Follow documentation</strong>: Check /docs/guardrails.md and /docs/debug-checklist.md
            </li>
            <li>
              <strong>Build with existing foundation</strong>: Use the design system as-is
            </li>
          </ol>

          <div className="code-example">
            <h3>Example new page structure:</h3>
            <pre>
              <code>{`<main className="page-container">
  <h1 className="page-title">Your New Prototype</h1>
  <p className="content-text">Start building here</p>
</main>`}</code>
            </pre>
          </div>
        </div>
      </section>
    </main>
  )
}
