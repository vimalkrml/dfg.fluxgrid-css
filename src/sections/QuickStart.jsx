import { useState } from 'react'
import { Terminal, FileCode, Play } from 'lucide-react'
import useInView from '../hooks/useInView'

const steps = [
    {
        step: '01', icon: Terminal, title: 'Install the package',
        desc: 'Install via npm or use the CDN link directly in your HTML. Both src and dist paths are supported.',
        tabs: [
            { label: 'npm', code: `npm install @datafluxgrid/fluxgrid-css` },
            {
                label: 'CDN (dist)', code: `<!-- Recommended: minified production bundle -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@datafluxgrid/fluxgrid-css/dist/fluxgrid.min.css">` },
            {
                label: 'CDN (src)', code: `<!-- Also works: unminified source -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@datafluxgrid/fluxgrid-css/src/css/index.css">` },
        ],
    },
    {
        step: '02', icon: FileCode, title: 'Import in your project',
        desc: 'Drop the import into your entry point — works the same way everywhere.',
        tabs: [
            {
                label: 'React', code: `// main.jsx (Vite) or index.js (CRA)
import '@datafluxgrid/fluxgrid-css/src/css/index.css'

// Need only specific modules? Swap index.css for individual files:
// import '@datafluxgrid/fluxgrid-css/src/css/tokens.css'
// import '@datafluxgrid/fluxgrid-css/src/css/grid.css'`,
            },
            {
                label: 'Next.js', code: `// app/layout.js (App Router)
import '@datafluxgrid/fluxgrid-css/src/css/index.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

// Pages Router? Import it in pages/_app.js instead.
// Global CSS can only be imported at this top level in Next.js.`,
            },
            {
                label: 'Vue', code: `// main.js
import { createApp } from 'vue'
import App from './App.vue'
import '@datafluxgrid/fluxgrid-css/src/css/index.css'

createApp(App).mount('#app')`,
            },
            {
                label: 'Angular', code: `/* src/styles.css */
@import '@datafluxgrid/fluxgrid-css/src/css/index.css';

/* Or register it directly in angular.json instead: */
/* "styles": [
     "node_modules/@datafluxgrid/fluxgrid-css/src/css/index.css",
     "src/styles.css"
   ] */`,
            },
        ],
    },
    {
        step: '03', icon: Play, title: 'Start building',
        desc: 'Use c- prefixed classes directly in your HTML or JSX.',
        tabs: [
            {
                label: 'HTML', code: `<div class="c-container">
  <div class="c-row">
    <div class="c-col-12 c-col-md-6">
      <div class="c-p-6 c-rounded-xl c-shadow c-hover-lift c-transition">
        <h2 class="c-text-xl c-font-bold">Card Title</h2>
        <button class="c-btn c-btn-primary c-mt-4">
          Get Started
        </button>
      </div>
    </div>
  </div>
</div>`,
            },
            {
                label: 'Dark Mode', code: `<!-- Manual toggle -->
<html data-theme="dark">

<!-- Auto via system preference -->
<html>

<!-- Override tokens -->
<style>
  :root {
    --c-primary-500: #6C63FF;
  }
</style>`,
            },
        ],
    },
]

function StepCard({ step, index, isLast }) {
    const { ref, inView } = useInView()
    const [tab, setTab] = useState(0)

    return (
        <div
            ref={ref}
            className={`c-row ${inView ? 'c-animate-fade-in-up' : 'c-opacity-0'}`}
            style={{ animationDelay: `${index * 100}ms` }}
        >
            <div className="c-col-auto c-flex c-flex-col c-items-center" style={{ width: 'auto', padding: 0, marginLeft: '1rem' }}>
                <span className="c-size-12 c-rounded-xl c-bg-primary-600 c-flex c-items-center c-justify-center c-flex-shrink-0">
                    <step.icon size={20} className="c-text-white" />
                </span>
                {!isLast && <span className="c-flex-1 c-mt-2" style={{ width: '2px', backgroundColor: 'var(--c-border)', minHeight: '40px' }} />}
            </div>

            <div className="c-flex-1 c-pl-4 c-pb-10" style={{ minWidth: 0 }}>
                <div className="c-text-xs c-font-black c-text-primary-500 c-tracking-widest c-mb-1">
                    STEP {step.step}
                </div>
                <h3 className="c-text-lg c-md-text-xl c-font-bold c-mb-2">{step.title}</h3>
                <p className="c-text-sm c-text-muted c-mb-4">{step.desc}</p>

                <div className="c-flex c-gap-2 c-mb-2" style={{ flexWrap: 'wrap' }}>
                    {step.tabs.map((t, i) => (
                        <button
                            key={t.label}
                            onClick={() => setTab(i)}
                            className={`c-px-3 c-py-1 c-rounded-md c-text-xs c-font-medium c-border c-transition-colors ${tab === i ? 'c-bg-primary-500 c-text-white c-border-primary-500' : 'c-text-muted c-border-base'}`}
                            style={{ cursor: 'pointer' }}
                        >
                            {t.label}
                        </button>
                    ))}
                </div>

                <div className="c-rounded-lg c-overflow-hidden c-border c-border-base">
                    <pre className="c-overflow-x-auto c-p-4 c-text-xs c-font-mono c-bg-gray-950 c-text-gray-100" style={{ margin: 0, lineHeight: 1.7 }}>
                        <code>{step.tabs[tab].code}</code>
                    </pre>
                </div>
            </div>
        </div>
    )
}

export default function QuickStart() {
    const { ref: titleRef, inView: titleIn } = useInView()

    return (
        <section id="quick-start" className="c-py-20 c-md-py-24 c-border-t c-border-base">
            <div className="c-container">
                <div
                    ref={titleRef}
                    className={`c-text-center c-mb-12 c-md-mb-16 ${titleIn ? 'c-animate-fade-in-up' : 'c-opacity-0'}`}
                >
                    <h2 className="c-text-3xl c-md-text-4xl c-font-black c-mb-4">
                        Up and running in <span className="c-text-primary-500">3 steps</span>
                    </h2>
                    <p className="c-text-base c-md-text-lg c-text-muted c-max-w-prose c-mx-auto">
                        No config files. No build pipeline. No decisions before your first line of CSS.
                    </p>
                </div>

                <div className="c-max-w-3xl c-mx-auto">
                    {steps.map((step, i) => (
                        <StepCard key={step.step} step={step} index={i} isLast={i === steps.length - 1} />
                    ))}
                </div>
            </div>
        </section>
    )
}