import { Terminal, FileCode, Play } from 'lucide-react'
import useInView from '../hooks/useInView'

const steps = [
    {
        step: '01', icon: Terminal, title: 'Install the package',
        desc: 'Install via npm or use the CDN link directly in your HTML.',
        tabs: [
            { label: 'npm', code: `npm install @datafluxgrid/fluxgrid-css` },
            { label: 'CDN', code: `<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@datafluxgrid/fluxgrid-css/src/css/index.css">` },
        ],
    },
    {
        step: '02', icon: FileCode, title: 'Import in your project',
        desc: 'Import the full bundle or only the modules you need.',
        tabs: [
            { label: 'React / Vite', code: `// main.jsx\nimport '@datafluxgrid/fluxgrid-css/src/css/index.css'` },
            { label: 'Modular', code: `import '@datafluxgrid/fluxgrid-css/src/css/tokens.css'\nimport '@datafluxgrid/fluxgrid-css/src/css/grid.css'\nimport '@datafluxgrid/fluxgrid-css/src/css/forms.css'` },
        ],
    },
    {
        step: '03', icon: Play, title: 'Start building',
        desc: 'Use c- prefixed utility classes directly in your HTML or JSX.',
        tabs: [
            {
                label: 'HTML', code: `<div class="c-container">
  <div class="c-row c-gap-4">
    <div class="c-col-12 c-col-md-6 c-col-lg-4">
      <div class="c-p-6 c-rounded-xl c-shadow c-border c-border-base c-hover-lift c-transition">
        <h2 class="c-text-xl c-font-bold c-mb-2">Card Title</h2>
        <p class="c-text-muted c-text-sm c-mb-4">Description here.</p>
        <button class="c-btn c-btn-primary">Get Started</button>
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
<!-- Works automatically, no setup needed -->

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
        <pre style={{ margin: 0, padding: '16px', backgroundColor: 'var(--c-gray-950)', color: 'var(--c-gray-100)', fontSize: '12px', fontFamily: 'monospace', lineHeight: 1.7, overflowX: 'auto', borderRadius: '10px' }}>
            <code>{code}</code>
        </pre>
    )
}

function StepCard({ step, index }) {
    const { ref, inView } = useInView()
    const [tab, setTab] = useState(0)

    return (
        <div
            ref={ref}
            className={inView ? 'c-animate-fade-in-left' : ''}
            style={{ opacity: inView ? undefined : 0, willChange: inView ? 'auto' : 'opacity, transform', display: 'flex', gap: '20px', animationDelay: `${index * 150}ms` }}
        >
            <div style={{ flexShrink: 0 }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '14px', backgroundColor: 'var(--c-primary-600)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <step.icon size={22} style={{ color: 'white' }} />
                </div>
                {index < 2 && (
                    <div style={{ width: '2px', height: '40px', backgroundColor: 'var(--c-border)', margin: '8px auto 0', borderRadius: '2px' }} />
                )}
            </div>
            <div style={{ flex: 1, paddingBottom: index < 2 ? '32px' : 0 }}>
                <div style={{ fontSize: '11px', fontWeight: 800, color: 'var(--c-primary-500)', letterSpacing: '0.08em', marginBottom: '6px' }}>STEP {step.step}</div>
                <h3 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '8px' }}>{step.title}</h3>
                <p style={{ fontSize: '14px', color: 'var(--c-muted)', marginBottom: '16px' }}>{step.desc}</p>

                <div style={{ display: 'flex', gap: '6px', marginBottom: '10px' }}>
                    {step.tabs.map((t, i) => (
                        <button
                            key={t.label}
                            onClick={() => setTab(i)}
                            style={{
                                padding: '4px 12px',
                                borderRadius: '6px',
                                border: '1px solid',
                                fontSize: '12px',
                                fontWeight: 500,
                                cursor: 'pointer',
                                transition: 'all 150ms',
                                borderColor: tab === i ? 'var(--c-primary-500)' : 'var(--c-border)',
                                backgroundColor: tab === i ? 'var(--c-primary-500)' : 'transparent',
                                color: tab === i ? 'white' : 'var(--c-muted)',
                            }}
                        >
                            {t.label}
                        </button>
                    ))}
                </div>
                <CodeBlock code={step.tabs[tab].code} />
            </div>
        </div>
    )
}

import { useState } from 'react'

export default function QuickStart() {
    const { ref: titleRef, inView: titleIn } = useInView()

    return (
        <section id="quick-start" style={{ padding: '96px 0', borderTop: '1px solid var(--c-border)' }}>
            <div className="c-container">
                <div
                    ref={titleRef}
                    className={titleIn ? 'c-animate-fade-in-up' : ''}
                    style={{ opacity: titleIn ? undefined : 0, willChange: titleIn ? 'auto' : 'opacity, transform', textAlign: 'center', marginBottom: '64px' }}
                >
                    <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 900, marginBottom: '16px' }}>
                        Up and running in <span className="c-text-primary-500">3 steps</span>
                    </h2>
                    <p style={{ fontSize: '1.125rem', color: 'var(--c-muted)', maxWidth: '480px', margin: '0 auto' }}>
                        No config files. No build pipeline. No decisions before your first line of CSS.
                    </p>
                </div>

                <div style={{ maxWidth: '680px', margin: '0 auto' }}>
                    {steps.map((step, i) => (
                        <StepCard key={step.step} step={step} index={i} />
                    ))}
                </div>
            </div>
        </section>
    )
}