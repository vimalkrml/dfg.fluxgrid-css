const colorGroups = [
    {
        label: 'Primary',
        shades: [
            { name: '50', var: 'var(--c-primary-50)', text: 'dark' },
            { name: '100', var: 'var(--c-primary-100)', text: 'dark' },
            { name: '200', var: 'var(--c-primary-200)', text: 'dark' },
            { name: '300', var: 'var(--c-primary-300)', text: 'dark' },
            { name: '400', var: 'var(--c-primary-400)', text: 'dark' },
            { name: '500', var: 'var(--c-primary-500)', text: 'light' },
            { name: '600', var: 'var(--c-primary-600)', text: 'light' },
            { name: '700', var: 'var(--c-primary-700)', text: 'light' },
            { name: '800', var: 'var(--c-primary-800)', text: 'light' },
            { name: '900', var: 'var(--c-primary-900)', text: 'light' },
        ],
    },
    {
        label: 'Gray',
        shades: [
            { name: '50', var: 'var(--c-gray-50)', text: 'dark' },
            { name: '100', var: 'var(--c-gray-100)', text: 'dark' },
            { name: '200', var: 'var(--c-gray-200)', text: 'dark' },
            { name: '300', var: 'var(--c-gray-300)', text: 'dark' },
            { name: '400', var: 'var(--c-gray-400)', text: 'dark' },
            { name: '500', var: 'var(--c-gray-500)', text: 'light' },
            { name: '600', var: 'var(--c-gray-600)', text: 'light' },
            { name: '700', var: 'var(--c-gray-700)', text: 'light' },
            { name: '800', var: 'var(--c-gray-800)', text: 'light' },
            { name: '900', var: 'var(--c-gray-900)', text: 'light' },
        ],
    },
    {
        label: 'Success',
        shades: [
            { name: '50', var: 'var(--c-success-50)', text: 'dark' },
            { name: '100', var: 'var(--c-success-100)', text: 'dark' },
            { name: '500', var: 'var(--c-success-500)', text: 'light' },
            { name: '600', var: 'var(--c-success-600)', text: 'light' },
            { name: '700', var: 'var(--c-success-700)', text: 'light' },
        ],
    },
    {
        label: 'Error',
        shades: [
            { name: '50', var: 'var(--c-error-50)', text: 'dark' },
            { name: '100', var: 'var(--c-error-100)', text: 'dark' },
            { name: '500', var: 'var(--c-error-500)', text: 'light' },
            { name: '600', var: 'var(--c-error-600)', text: 'light' },
            { name: '700', var: 'var(--c-error-700)', text: 'light' },
        ],
    },
    {
        label: 'Warning',
        shades: [
            { name: '50', var: 'var(--c-warning-50)', text: 'dark' },
            { name: '100', var: 'var(--c-warning-100)', text: 'dark' },
            { name: '500', var: 'var(--c-warning-500)', text: 'light' },
            { name: '600', var: 'var(--c-warning-600)', text: 'light' },
            { name: '700', var: 'var(--c-warning-700)', text: 'light' },
        ],
    },
    {
        label: 'Info',
        shades: [
            { name: '50', var: 'var(--c-info-50)', text: 'dark' },
            { name: '100', var: 'var(--c-info-100)', text: 'dark' },
            { name: '500', var: 'var(--c-info-500)', text: 'light' },
            { name: '600', var: 'var(--c-info-600)', text: 'light' },
            { name: '700', var: 'var(--c-info-700)', text: 'light' },
        ],
    },
]

const spacingScale = [0, 1, 2, 3, 4, 5, 6, 8, 10, 12, 14, 16, 20, 24, 28, 32]
const spacingPx = [0, 4, 8, 12, 16, 20, 24, 32, 40, 48, 56, 64, 80, 96, 112, 128]

const shadowTokens = [
    { name: 'shadow-xs', var: 'var(--c-shadow-xs)' },
    { name: 'shadow-sm', var: 'var(--c-shadow-sm)' },
    { name: 'shadow-md', var: 'var(--c-shadow-md)' },
    { name: 'shadow-lg', var: 'var(--c-shadow-lg)' },
    { name: 'shadow-xl', var: 'var(--c-shadow-xl)' },
    { name: 'shadow-2xl', var: 'var(--c-shadow-2xl)' },
]

const radiusTokens = [
    { name: 'rounded-sm', value: '4px' },
    { name: 'rounded', value: '8px' },
    { name: 'rounded-md', value: '12px' },
    { name: 'rounded-lg', value: '16px' },
    { name: 'rounded-xl', value: '24px' },
    { name: 'rounded-2xl', value: '32px' },
    { name: 'rounded-full', value: '9999px' },
]

function CardWrap({ title, children }) {
    return (
        <div className="c-rounded-xl c-border c-border-base c-overflow-hidden c-shadow-sm">
            <div
                className="c-px-4 c-py-3 c-border-b c-border-base"
                style={{ backgroundColor: 'color-mix(in srgb, var(--c-gray-100) 50%, transparent)' }}
            >
                <span className="c-text-xs c-font-semibold c-text-muted c-uppercase c-tracking-wide">
                    {title}
                </span>
            </div>
            <div className="c-p-6" style={{ backgroundColor: 'var(--c-bg)' }}>
                {children}
            </div>
        </div>
    )
}

export default function Tokens() {
    return (
        <section id="tokens" className="c-py-24 c-border-t c-border-base">
            <div className="c-container">
                <div className="c-text-center c-mb-16">
                    <h2 className="c-text-4xl c-font-black c-mb-4">
                        Design <span className="c-text-primary-500">Tokens</span>
                    </h2>
                    <p className="c-text-lg c-text-muted c-max-w-prose c-mx-auto">
                        Every value in FluxGrid CSS is a CSS variable. Override anything with one line.
                    </p>
                </div>

                <div className="c-flex c-flex-col c-gap-8">

                    <CardWrap title="Color Palette">
                        <div className="c-flex c-flex-col c-gap-6">
                            {colorGroups.map((group) => (
                                <div key={group.label}>
                                    <div className="c-text-sm c-font-semibold c-mb-2">{group.label}</div>
                                    <div className="c-flex c-gap-1" style={{ flexWrap: 'wrap' }}>
                                        {group.shades.map((shade) => (
                                            <div
                                                key={shade.name}
                                                className="c-flex-1 c-rounded-md c-p-2 c-text-center"
                                                style={{
                                                    backgroundColor: shade.var,
                                                    minWidth: '48px',
                                                    color: shade.text === 'light' ? 'white' : '#111827',
                                                }}
                                            >
                                                <div className="c-text-xs c-font-semibold">{shade.name}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardWrap>

                    <CardWrap title="Spacing Scale">
                        <div className="c-overflow-x-auto">
                            <div className="c-flex c-flex-col c-gap-2" style={{ minWidth: '400px' }}>
                                {spacingScale.map((scale, i) => (
                                    <div key={scale} className="c-flex c-items-center c-gap-4">
                                        <div className="c-text-xs c-font-mono c-text-muted" style={{ width: '60px' }}>
                                            space-{scale}
                                        </div>
                                        <div className="c-text-xs c-text-muted" style={{ width: '40px' }}>
                                            {spacingPx[i]}px
                                        </div>
                                        <div
                                            className="c-rounded c-bg-primary-500"
                                            style={{ height: '8px', width: `${spacingPx[i]}px`, minWidth: '2px' }}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </CardWrap>

                    <div className="c-grid c-gap-6" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))' }}>

                        <CardWrap title="Shadows">
                            <div className="c-flex c-flex-col c-gap-4">
                                {shadowTokens.map((s) => (
                                    <div
                                        key={s.name}
                                        className="c-p-4 c-rounded-lg c-text-center c-bg-white"
                                        style={{ boxShadow: s.var }}
                                    >
                                        <code className="c-text-xs c-font-mono c-text-gray-600">.c-{s.name}</code>
                                    </div>
                                ))}
                            </div>
                        </CardWrap>

                        <CardWrap title="Border Radius">
                            <div className="c-flex c-flex-col c-gap-4">
                                {radiusTokens.map((r) => (
                                    <div key={r.name} className="c-flex c-items-center c-gap-4">
                                        <div
                                            className="c-size-10 c-bg-primary-500 c-flex-shrink-0"
                                            style={{ borderRadius: r.value }}
                                        />
                                        <div>
                                            <div className="c-text-sm c-font-medium">.c-{r.name}</div>
                                            <div className="c-text-xs c-text-muted">{r.value}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </CardWrap>

                    </div>

                    <CardWrap title="Override Tokens">
                        <pre
                            className="c-overflow-x-auto c-text-xs c-font-mono"
                            style={{
                                backgroundColor: 'var(--c-gray-950)',
                                color: 'var(--c-gray-100)',
                                lineHeight: '1.6',
                                padding: '16px',
                                borderRadius: '8px',
                            }}
                        >
                            <code>{`:root {
  /* Brand color */
  --c-primary-500: #6C63FF;
  --c-primary-600: #5a52d5;

  /* Typography */
  --c-font-sans: "Inter", sans-serif;
  --c-font-mono: "Fira Code", monospace;

  /* Spacing */
  --c-radius-md: 10px;

  /* Shadows */
  --c-shadow-md: 0 4px 20px rgba(0,0,0,0.1);

  /* Semantic */
  --c-bg: #0f172a;
  --c-fg: #f8fafc;
  --c-border: #1e293b;
}`}
                            </code>
                        </pre>
                    </CardWrap>

                </div>
            </div>
        </section>
    )
}