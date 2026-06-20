import { useState } from 'react'
import useInView from '../hooks/useInView'

const demos = [
    {
        title: 'Two Columns',
        code: `<div class="c-row">\n  <div class="c-col-6">Left</div>\n  <div class="c-col-6">Right</div>\n</div>`,
        preview: (
            <div className="c-row c-gap-2">
                <div className="c-col-6 c-p-3 c-rounded-lg c-text-center c-text-xs c-font-medium c-bg-primary-100 c-text-primary-700">col-6</div>
                <div className="c-col-6 c-p-3 c-rounded-lg c-text-center c-text-xs c-font-medium c-bg-primary-100 c-text-primary-700">col-6</div>
            </div>
        ),
    },
    {
        title: 'Three Columns',
        code: `<div class="c-row">\n  <div class="c-col-4">One</div>\n  <div class="c-col-4">Two</div>\n  <div class="c-col-4">Three</div>\n</div>`,
        preview: (
            <div className="c-row c-gap-2">
                {['One', 'Two', 'Three'].map((c) => (
                    <div key={c} className="c-col-4 c-p-3 c-rounded-lg c-text-center c-text-xs c-font-medium c-bg-primary-100 c-text-primary-700">col-4</div>
                ))}
            </div>
        ),
    },
    {
        title: 'Sidebar Layout',
        code: `<div class="c-row">\n  <div class="c-col-4">Sidebar</div>\n  <div class="c-col-8">Content</div>\n</div>`,
        preview: (
            <div className="c-row c-gap-2">
                <div className="c-col-4 c-p-3 c-rounded-lg c-text-center c-text-xs c-font-medium c-bg-primary-100 c-text-primary-700">col-4</div>
                <div className="c-col-8 c-p-3 c-rounded-lg c-text-center c-text-xs c-font-medium c-bg-primary-100 c-text-primary-700">col-8</div>
            </div>
        ),
    },
    {
        title: 'Responsive Grid',
        code: `<div class="c-row">\n  <div class="c-col-12 c-col-md-6 c-col-lg-4">...</div>\n</div>`,
        preview: (
            <div className="c-row c-gap-2">
                {[1, 2, 3].map((i) => (
                    <div key={i} className="c-col-4 c-p-3 c-rounded-lg c-text-center c-text-xs c-font-medium c-bg-primary-100 c-text-primary-700">lg-4</div>
                ))}
            </div>
        ),
    },
    {
        title: 'CSS Grid',
        code: `<div class="c-grid c-grid-cols-4 c-gap-4">\n  <div>Item</div>\n</div>`,
        preview: (
            <div className="c-grid c-gap-2" style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
                {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="c-p-3 c-rounded-lg c-text-center c-text-xs c-font-medium c-bg-primary-100 c-text-primary-700">{i}</div>
                ))}
            </div>
        ),
    },
    {
        title: 'Centered',
        code: `<div class="c-flex c-items-center c-justify-center">\n  <div class="c-col-md-8">Centered</div>\n</div>`,
        preview: (
            <div className="c-flex c-items-center c-justify-center c-py-2">
                <div className="c-p-3 c-rounded-lg c-text-center c-text-xs c-font-medium c-bg-primary-100 c-text-primary-700 c-w-50">Centered</div>
            </div>
        ),
    },
]

function DemoCard({ demo, delay }) {
    const { ref, inView } = useInView()
    const [show, setShow] = useState(false)
    return (
        <div ref={ref} className={`c-rounded-xl c-border c-border-base c-overflow-hidden ${inView ? 'c-animate-fade-in-up' : 'c-opacity-0'}`} style={{ animationDelay: `${delay}ms` }}>
            <div className="c-px-4 c-py-2 c-border-b c-border-base c-bg-gray-100 c-flex c-items-center c-justify-between">
                <span className="c-text-xs c-font-semibold c-text-muted c-uppercase c-tracking-wide">{demo.title}</span>
                <button onClick={() => setShow((v) => !v)} className="c-btn c-btn-ghost c-btn-xs c-font-mono">{show ? 'hide' : '</>'}</button>
            </div>
            <div className="c-p-4">{demo.preview}</div>
            {show && (
                <pre className="c-overflow-x-auto c-p-3 c-text-xs c-font-mono c-bg-gray-950 c-text-gray-100 c-border-t c-border-base" style={{ margin: 0, lineHeight: 1.7 }}>
                    <code>{demo.code}</code>
                </pre>
            )}
        </div>
    )
}

export default function GridDemo() {
    const { ref: titleRef, inView: titleIn } = useInView()
    return (
        <section id="grid" className="c-py-20 c-md-py-24 c-border-t c-border-base">
            <div className="c-container">
                <div ref={titleRef} className={`c-text-center c-mb-10 c-md-mb-12 ${titleIn ? 'c-animate-fade-in-up' : 'c-opacity-0'}`}>
                    <h2 className="c-text-3xl c-md-text-4xl c-font-black c-mb-4">Grid <span className="c-text-primary-500">System</span></h2>
                    <p className="c-text-base c-md-text-lg c-text-muted c-max-w-prose c-mx-auto">12-column responsive flexbox grid plus CSS Grid utilities.</p>
                </div>
                <div className="c-grid c-gap-4" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))' }}>
                    {demos.map((demo, i) => (
                        <DemoCard key={demo.title} demo={demo} delay={i * 60} />
                    ))}
                </div>
            </div>
        </section>
    )
}