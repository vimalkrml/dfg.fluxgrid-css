import useInView from '../hooks/useInView'

const demos = [
    {
        title: 'Two Equal Columns',
        code: `<div class="c-row">
  <div class="c-col-6">Left</div>
  <div class="c-col-6">Right</div>
</div>`,
        preview: (
            <div className="c-row c-gap-2">
                {['Left', 'Right'].map((c) => (
                    <div key={c} className="c-col-6 c-p-3 c-rounded-lg c-text-center c-text-sm c-font-medium" style={{ backgroundColor: 'var(--c-primary-100)', color: 'var(--c-primary-700)' }}>{c}</div>
                ))}
            </div>
        ),
    },
    {
        title: 'Three Columns',
        code: `<div class="c-row">
  <div class="c-col-4">One</div>
  <div class="c-col-4">Two</div>
  <div class="c-col-4">Three</div>
</div>`,
        preview: (
            <div className="c-row c-gap-2">
                {['One', 'Two', 'Three'].map((c) => (
                    <div key={c} className="c-col-4 c-p-3 c-rounded-lg c-text-center c-text-sm c-font-medium" style={{ backgroundColor: 'var(--c-success-100)', color: 'var(--c-success-700)' }}>col-4</div>
                ))}
            </div>
        ),
    },
    {
        title: 'Sidebar Layout',
        code: `<div class="c-row">
  <div class="c-col-4">Sidebar</div>
  <div class="c-col-8">Content</div>
</div>`,
        preview: (
            <div className="c-row c-gap-2">
                <div className="c-col-4 c-p-3 c-rounded-lg c-text-center c-text-sm c-font-medium" style={{ backgroundColor: 'var(--c-warning-100)', color: 'var(--c-warning-700)' }}>col-4</div>
                <div className="c-col-8 c-p-3 c-rounded-lg c-text-center c-text-sm c-font-medium" style={{ backgroundColor: 'var(--c-warning-100)', color: 'var(--c-warning-700)' }}>col-8</div>
            </div>
        ),
    },
    {
        title: 'Responsive Grid',
        code: `<div class="c-row">
  <div class="c-col-12 c-col-md-6 c-col-lg-4">...</div>
  <div class="c-col-12 c-col-md-6 c-col-lg-4">...</div>
  <div class="c-col-12 c-col-md-6 c-col-lg-4">...</div>
</div>`,
        preview: (
            <div className="c-row c-gap-2">
                {[1, 2, 3].map((i) => (
                    <div key={i} className="c-col-4 c-p-3 c-rounded-lg c-text-center c-text-sm c-font-medium" style={{ backgroundColor: 'var(--c-error-100)', color: 'var(--c-error-700)' }}>col-lg-4</div>
                ))}
            </div>
        ),
    },
    {
        title: 'CSS Grid Auto-fill',
        code: `<div class="c-grid c-gap-4"
  style="grid-template-columns:
    repeat(auto-fill, minmax(150px,1fr))">
  <div>Item</div>
</div>`,
        preview: (
            <div className="c-grid c-gap-2" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(80px, 1fr))' }}>
                {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="c-p-3 c-rounded-lg c-text-center c-text-sm c-font-medium" style={{ backgroundColor: 'var(--c-info-100)', color: 'var(--c-info-700)' }}>Item {i}</div>
                ))}
            </div>
        ),
    },
    {
        title: 'Centered Content',
        code: `<div class="c-flex c-items-center c-justify-center">
  <div class="c-col-md-8 c-col-lg-6">
    Centered
  </div>
</div>`,
        preview: (
            <div className="c-flex c-items-center c-justify-center c-py-2">
                <div className="c-p-3 c-rounded-lg c-text-center c-text-sm c-font-medium c-w-50" style={{ backgroundColor: 'var(--c-primary-100)', color: 'var(--c-primary-700)' }}>Centered</div>
            </div>
        ),
    },
]

function DemoCard({ demo, delay }) {
    const { ref, inView } = useInView()
    const [show, setShow] = useState(false)

    return (
        <div
            ref={ref}
            className={inView ? 'c-animate-fade-in-up' : ''}
            style={{ opacity: inView ? undefined : 0, willChange: inView ? 'auto' : 'opacity, transform', borderRadius: '14px', border: '1px solid var(--c-border)', overflow: 'hidden', animationDelay: `${delay}ms` }}
        >
            <div style={{ padding: '10px 16px', borderBottom: '1px solid var(--c-border)', backgroundColor: 'color-mix(in srgb, var(--c-gray-100) 50%, transparent)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--c-muted)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>{demo.title}</span>
                <button onClick={() => setShow((v) => !v)} style={{ fontSize: '11px', padding: '3px 8px', borderRadius: '5px', border: '1px solid var(--c-border)', backgroundColor: 'transparent', color: 'var(--c-muted)', cursor: 'pointer', fontFamily: 'monospace' }}>
                    {show ? 'Hide' : '</>'}
                </button>
            </div>
            <div style={{ padding: '16px', backgroundColor: 'var(--c-bg)' }}>{demo.preview}</div>
            {show && (
                <pre className="c-animate-fade-in" style={{ margin: 0, padding: '14px 16px', backgroundColor: 'var(--c-gray-950)', color: 'var(--c-gray-100)', fontSize: '11px', fontFamily: 'monospace', lineHeight: 1.7, overflowX: 'auto', borderTop: '1px solid var(--c-border)' }}>
                    <code>{demo.code}</code>
                </pre>
            )}
        </div>
    )
}

import { useState } from 'react'

export default function GridDemo() {
    const { ref: titleRef, inView: titleIn } = useInView()

    return (
        <section id="grid" style={{ padding: '96px 0', borderTop: '1px solid var(--c-border)', background: 'color-mix(in srgb, var(--c-gray-50) 50%, var(--c-bg))' }}>
            <div className="c-container">
                <div
                    ref={titleRef}
                    className={titleIn ? 'c-animate-fade-in-up' : ''}
                    style={{ opacity: titleIn ? undefined : 0, willChange: titleIn ? 'auto' : 'opacity, transform', textAlign: 'center', marginBottom: '48px' }}
                >
                    <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 900, marginBottom: '16px' }}>
                        Grid <span className="c-text-primary-500">System</span>
                    </h2>
                    <p style={{ fontSize: '1.125rem', color: 'var(--c-muted)', maxWidth: '520px', margin: '0 auto' }}>
                        12-column responsive flexbox grid plus CSS Grid utilities. Click {`</>`} to see the code.
                    </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '16px' }}>
                    {demos.map((demo, i) => (
                        <DemoCard key={demo.title} demo={demo} delay={i * 60} />
                    ))}
                </div>
            </div>
        </section>
    )
}