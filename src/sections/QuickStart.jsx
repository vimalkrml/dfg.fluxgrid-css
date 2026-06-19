import { Terminal, FileCode, Play } from 'lucide-react'

const steps = [
    {
        step: '01',
        icon: Terminal,
        title: 'Install the package',
        desc: 'Install via npm or use the CDN link directly in your HTML.',
        tabs: [
            {
                label: 'npm',
                code: `npm install @datafluxgrid/fluxgrid-css`,
            },
            {
                label: 'CDN',
                code: `<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@datafluxgrid/fluxgrid-css/src/css/index.css">`,
            },
        ],
    },
    {
        step: '02',
        icon: FileCode,
        title: 'Import in your project',
        desc: 'Import the full bundle or only the modules you need.',
        tabs: [
            {
                label: 'React / Vite',
                code: `// main.jsx or _app.jsx
import '@datafluxgrid/fluxgrid-css/src/css/index.css'`,
            },
            {
                label: 'Modular',
                code: `import '@datafluxgrid/fluxgrid-css/src/css/tokens.css'
import '@datafluxgrid/fluxgrid-css/src/css/grid.css'
import '@datafluxgrid/fluxgrid-css/src/css/spacing.css'`,
            },
        ],
    },
    {
        step: '03',
        icon: Play,
        title: 'Start building',
        desc: 'Use c- prefixed utility classes directly in your HTML or JSX.',
        tabs: [
            {
                label: 'HTML',
                code: `<div class="c-container">
  <div class="c-row c-gap-4">
    <div class="c-col-12 c-col-md-6 c-col-lg-4">
      <div class="c-p-6 c-rounded-xl c-shadow c-border c-border-base">
        <h2 class="c-text-xl c-font-bold c-mb-2">Card Title</h2>
        <p class="c-text-muted c-text-sm">Card description here.</p>
        <button class="c-btn c-btn-primary c-mt-4">Get Started</button>
      </div>
    </div>
  </div>
</div>`,
            },
            {
                label: 'Dark Mode',
                code: `<!-- Manual toggle -->
<html data-theme="dark">

<!-- Auto system preference -->
<html>
<!-- No setup needed — works automatically -->

<!-- Override tokens -->
<style>
  :root {
    --c-primary-500: #6C63FF;
    --c-font-sans: "Inter", sans-serif;
  }
</style>`,
            },
        ],
    },
]

function CodeBlock({ code }) {
    return (
        <pre
            className="c-overflow-x-auto c-p-4 c-rounded-lg c-text-sm c-font-mono"
            style={{
                backgroundColor: 'var(--c-gray-950)',
                color: 'var(--c-gray-100)',
                lineHeight: '1.6',
            }}
        >
            <code>{code}</code>
        </pre>
    )
}

function StepCard({ step }) {
    return (
        <div className="c-flex c-gap-6">
            <div className="c-flex-shrink-0">
                <div className="c-size-12 c-rounded-xl c-bg-primary-600 c-flex c-items-center c-justify-center">
                    <step.icon size={22} className="c-text-white" />
                </div>
            </div>
            <div className="c-flex-1">
                <div className="c-flex c-items-center c-gap-3 c-mb-2">
                    <span className="c-text-xs c-font-black c-text-primary-500 c-tracking-widest">
                        STEP {step.step}
                    </span>
                </div>
                <h3 className="c-text-xl c-font-bold c-mb-2">{step.title}</h3>
                <p className="c-text-muted c-text-sm c-mb-4">{step.desc}</p>
                <div className="c-flex c-flex-col c-gap-3">
                    {step.tabs.map((tab) => (
                        <div key={tab.label}>
                            <div className="c-text-xs c-font-semibold c-text-muted c-mb-1 c-uppercase c-tracking-wide">
                                {tab.label}
                            </div>
                            <CodeBlock code={tab.code} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default function QuickStart() {
    return (
        <section id="quick-start" className="c-py-24 c-border-t c-border-base">
            <div className="c-container">
                <div className="c-text-center c-mb-16">
                    <h2 className="c-text-4xl c-font-black c-mb-4">
                        Up and running in{' '}
                        <span className="c-text-primary-500">3 steps</span>
                    </h2>
                    <p className="c-text-lg c-text-muted c-max-w-prose c-mx-auto">
                        No config files. No build pipeline. No decisions to make before writing your first line of CSS.
                    </p>
                </div>
                <div className="c-max-w-3xl c-mx-auto c-flex c-flex-col c-gap-12">
                    {steps.map((step) => (
                        <StepCard key={step.step} step={step} />
                    ))}
                </div>
            </div>
        </section>
    )
}