const demos = [
    {
        title: 'Two Equal Columns',
        code: `<div class="c-row">
  <div class="c-col-6">Left</div>
  <div class="c-col-6">Right</div>
</div>`,
        preview: (
            <div className="c-row c-gap-2">
                <div className="c-col-6 c-p-4 c-rounded-lg c-bg-primary-100 c-text-primary-700 c-text-center c-text-sm c-font-medium">col-6</div>
                <div className="c-col-6 c-p-4 c-rounded-lg c-bg-primary-100 c-text-primary-700 c-text-center c-text-sm c-font-medium">col-6</div>
            </div>
        ),
    },
    {
        title: 'Three Equal Columns',
        code: `<div class="c-row">
  <div class="c-col-4">One</div>
  <div class="c-col-4">Two</div>
  <div class="c-col-4">Three</div>
</div>`,
        preview: (
            <div className="c-row c-gap-2">
                <div className="c-col-4 c-p-4 c-rounded-lg c-bg-success-100 c-text-success-700 c-text-center c-text-sm c-font-medium">col-4</div>
                <div className="c-col-4 c-p-4 c-rounded-lg c-bg-success-100 c-text-success-700 c-text-center c-text-sm c-font-medium">col-4</div>
                <div className="c-col-4 c-p-4 c-rounded-lg c-bg-success-100 c-text-success-700 c-text-center c-text-sm c-font-medium">col-4</div>
            </div>
        ),
    },
    {
        title: 'Sidebar Layout (4 + 8)',
        code: `<div class="c-row">
  <div class="c-col-4">Sidebar</div>
  <div class="c-col-8">Content</div>
</div>`,
        preview: (
            <div className="c-row c-gap-2">
                <div className="c-col-4 c-p-4 c-rounded-lg c-bg-warning-100 c-text-warning-700 c-text-center c-text-sm c-font-medium">col-4</div>
                <div className="c-col-8 c-p-4 c-rounded-lg c-bg-warning-100 c-text-warning-700 c-text-center c-text-sm c-font-medium">col-8</div>
            </div>
        ),
    },
    {
        title: 'Responsive Grid',
        code: `<div class="c-row">
  <div class="c-col-12 c-col-md-6 c-col-lg-4">Card</div>
  <div class="c-col-12 c-col-md-6 c-col-lg-4">Card</div>
  <div class="c-col-12 c-col-md-6 c-col-lg-4">Card</div>
</div>`,
        preview: (
            <div className="c-row c-gap-2">
                <div className="c-col-12 c-col-md-4 c-p-4 c-rounded-lg c-bg-error-100 c-text-error-700 c-text-center c-text-sm c-font-medium">col-12 / md-4</div>
                <div className="c-col-12 c-col-md-4 c-p-4 c-rounded-lg c-bg-error-100 c-text-error-700 c-text-center c-text-sm c-font-medium">col-12 / md-4</div>
                <div className="c-col-12 c-col-md-4 c-p-4 c-rounded-lg c-bg-error-100 c-text-error-700 c-text-center c-text-sm c-font-medium">col-12 / md-4</div>
            </div>
        ),
    },
    {
        title: 'CSS Grid — Auto Fill',
        code: `<div class="c-grid c-gap-4"
  style="grid-template-columns: repeat(auto-fill, minmax(200px, 1fr))">
  <div>Item</div>
  <div>Item</div>
  <div>Item</div>
  <div>Item</div>
</div>`,
        preview: (
            <div className="c-grid c-gap-2" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))' }}>
                {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="c-p-4 c-rounded-lg c-bg-info-100 c-text-info-700 c-text-center c-text-sm c-font-medium">
                        Item {i}
                    </div>
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
            <div className="c-flex c-items-center c-justify-center c-p-2">
                <div className="c-p-4 c-rounded-lg c-bg-primary-100 c-text-primary-700 c-text-center c-text-sm c-font-medium c-w-50">
                    Centered Content
                </div>
            </div>
        ),
    },
]

function CodeBlock({ code }) {
    return (
        <pre
            className="c-overflow-x-auto c-p-4 c-rounded-b-lg c-text-xs c-font-mono"
            style={{
                backgroundColor: 'var(--c-gray-950)',
                color: 'var(--c-gray-100)',
                lineHeight: '1.6',
                margin: 0,
            }}
        >
            <code>{code}</code>
        </pre>
    )
}

export default function GridDemo() {
    return (
        <section id="grid" className="c-py-24 c-border-t c-border-base">
            <div className="c-container">
                <div className="c-text-center c-mb-16">
                    <h2 className="c-text-4xl c-font-black c-mb-4">
                        Grid <span className="c-text-primary-500">System</span>
                    </h2>
                    <p className="c-text-lg c-text-muted c-max-w-prose c-mx-auto">
                        12-column responsive flexbox grid plus CSS Grid utilities — with breakpoints at md, lg, xl, and 2xl.
                    </p>
                </div>
                <div
                    className="c-grid c-gap-6"
                    style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))' }}
                >
                    {demos.map((demo) => (
                        <div
                            key={demo.title}
                            className="c-rounded-xl c-border c-border-base c-overflow-hidden c-shadow-sm"
                        >
                            <div
                                className="c-p-4 c-border-b c-border-base"
                                style={{ backgroundColor: 'color-mix(in srgb, var(--c-gray-100) 50%, transparent)' }}
                            >
                                <span className="c-text-xs c-font-semibold c-text-muted c-uppercase c-tracking-wide">
                                    {demo.title}
                                </span>
                            </div>
                            <div className="c-p-4 c-border-b c-border-base" style={{ backgroundColor: 'var(--c-bg)' }}>
                                {demo.preview}
                            </div>
                            <CodeBlock code={demo.code} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}