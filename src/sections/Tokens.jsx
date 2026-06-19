import { useState, useEffect } from 'react'

const fonts = [
    { label: 'Inter', class: 'c-font-inter', family: '"Inter", sans-serif' },
    { label: 'Poppins', class: 'c-font-poppins', family: '"Poppins", sans-serif' },
    { label: 'Roboto', class: 'c-font-roboto', family: '"Roboto", sans-serif' },
    { label: 'Montserrat', class: 'c-font-montserrat', family: '"Montserrat", sans-serif' },
    { label: 'Open Sans', class: 'c-font-open-sans', family: '"Open Sans", sans-serif' },
    { label: 'Lato', class: 'c-font-lato', family: '"Lato", sans-serif' },
    { label: 'Nunito', class: 'c-font-nunito', family: '"Nunito", sans-serif' },
    { label: 'Merriweather', class: 'c-font-merriweather', family: '"Merriweather", serif' },
    { label: 'Playfair', class: 'c-font-playfair', family: '"Playfair Display", serif' },
    { label: 'Fira Code', class: 'c-font-fira-code', family: '"Fira Code", monospace' },
    { label: 'DM Sans', class: 'c-font-dm-sans', family: '"DM Sans", sans-serif' },
    { label: 'Space Grotesk', class: 'c-font-space-grotesk', family: '"Space Grotesk", sans-serif' },
    { label: 'Outfit', class: 'c-font-outfit', family: '"Outfit", sans-serif' },
    { label: 'Jakarta', class: 'c-font-jakarta', family: '"Plus Jakarta Sans", sans-serif' },
    { label: 'Geist', class: 'c-font-geist', family: '"Geist", sans-serif' },
]

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

const tabs = ['Fonts', 'Colors', 'Spacing', 'Shadows', 'Tokens']

export default function Tokens() {
    const [activeTab, setActiveTab] = useState('Fonts')
    const [selectedFont, setSelectedFont] = useState(fonts[0])

    useEffect(() => {
        document.documentElement.style.setProperty('--c-font-sans', selectedFont.family)
        return () => {
            document.documentElement.style.removeProperty('--c-font-sans')
        }
    }, [selectedFont])

    return (
        <section id="tokens" style={{ padding: '96px 0', borderTop: '1px solid var(--c-border)' }}>
            <div className="c-container">

                <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                    <h2 className="c-text-4xl c-font-black c-mb-4">
                        Design <span className="c-text-primary-500">Tokens</span>
                    </h2>
                    <p className="c-text-lg c-text-muted c-max-w-prose c-mx-auto">
                        Every value in FluxGrid CSS is a CSS variable. Override anything with one line.
                    </p>
                </div>

                {/* Tab bar */}
                <div
                    style={{
                        display: 'flex',
                        gap: '4px',
                        padding: '4px',
                        borderRadius: '12px',
                        backgroundColor: 'var(--c-gray-100)',
                        marginBottom: '32px',
                        overflowX: 'auto',
                    }}
                >
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            style={{
                                flex: 1,
                                minWidth: '80px',
                                padding: '8px 16px',
                                borderRadius: '8px',
                                fontSize: '0.875rem',
                                fontWeight: 500,
                                cursor: 'pointer',
                                border: 'none',
                                transition: 'all 200ms',
                                whiteSpace: 'nowrap',
                                backgroundColor: activeTab === tab ? 'var(--c-bg)' : 'transparent',
                                color: activeTab === tab ? 'var(--c-primary-600)' : 'var(--c-muted)',
                                boxShadow: activeTab === tab ? 'var(--c-shadow-sm)' : 'none',
                            }}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* Tab content */}
                <div
                    style={{
                        borderRadius: '16px',
                        border: '1px solid var(--c-border)',
                        backgroundColor: 'var(--c-bg)',
                        overflow: 'hidden',
                    }}
                >

                    {/* Fonts tab */}
                    {activeTab === 'Fonts' && (
                        <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                                <label className="c-label">Select a font — updates the entire site</label>
                                <select
                                    className="c-select"
                                    value={selectedFont.class}
                                    onChange={(e) => {
                                        const found = fonts.find((f) => f.class === e.target.value)
                                        if (found) setSelectedFont(found)
                                    }}
                                >
                                    {fonts.map((f) => (
                                        <option key={f.class} value={f.class}>{f.label}</option>
                                    ))}
                                </select>
                            </div>

                            <div
                                style={{
                                    padding: '12px 16px',
                                    borderRadius: '8px',
                                    backgroundColor: 'var(--c-gray-950)',
                                    color: 'var(--c-gray-100)',
                                    fontFamily: 'monospace',
                                    fontSize: '13px',
                                    overflowX: 'auto',
                                    whiteSpace: 'nowrap',
                                }}
                            >
                                --c-font-sans: {selectedFont.family};
                            </div>

                            <div
                                style={{
                                    border: '1px solid var(--c-border)',
                                    borderRadius: '12px',
                                    padding: '20px',
                                    fontFamily: selectedFont.family,
                                }}
                            >
                                <div style={{ fontSize: '11px', color: 'var(--c-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600, marginBottom: '12px' }}>
                                    Preview — {selectedFont.label}
                                </div>
                                <p style={{ fontSize: '28px', fontWeight: 700, marginBottom: '4px' }}>FluxGrid CSS</p>
                                <p style={{ fontSize: '15px', fontWeight: 500, marginBottom: '8px' }}>A utility-first CSS framework.</p>
                                <p style={{ fontSize: '14px', color: 'var(--c-muted)', marginBottom: '16px' }}>
                                    Zero build step. Dark mode. Animations. All in one.
                                </p>
                                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                                    <button className="c-btn c-btn-primary c-btn-sm">Get Started</button>
                                    <button className="c-btn c-btn-outline c-btn-sm">View Docs</button>
                                </div>
                            </div>

                            <div
                                style={{
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))',
                                    gap: '8px',
                                }}
                            >
                                {fonts.map((f) => (
                                    <button
                                        key={f.class}
                                        onClick={() => setSelectedFont(f)}
                                        style={{
                                            fontFamily: f.family,
                                            padding: '10px 8px',
                                            textAlign: 'left',
                                            borderRadius: '8px',
                                            border: '1px solid',
                                            cursor: 'pointer',
                                            transition: 'all 200ms',
                                            borderColor: selectedFont.class === f.class ? 'var(--c-primary-500)' : 'var(--c-border)',
                                            backgroundColor: selectedFont.class === f.class ? 'var(--c-primary-50)' : 'transparent',
                                            color: selectedFont.class === f.class ? 'var(--c-primary-700)' : 'var(--c-fg)',
                                        }}
                                    >
                                        <div style={{ fontSize: '11px', fontWeight: 700, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                                            {f.label}
                                        </div>
                                        <div style={{ fontSize: '18px', marginTop: '2px' }}>Aa</div>
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Colors tab */}
                    {activeTab === 'Colors' && (
                        <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
                            {colorGroups.map((group) => (
                                <div key={group.label}>
                                    <div className="c-text-sm c-font-semibold c-mb-2">{group.label}</div>
                                    <div style={{ display: 'flex', gap: '4px' }}>
                                        {group.shades.map((shade) => (
                                            <div
                                                key={shade.name}
                                                style={{
                                                    flex: 1,
                                                    minWidth: 0,
                                                    backgroundColor: shade.var,
                                                    color: shade.text === 'light' ? 'white' : '#111827',
                                                    borderRadius: '6px',
                                                    padding: '10px 2px',
                                                    textAlign: 'center',
                                                }}
                                            >
                                                <div style={{ fontSize: '9px', fontWeight: 600 }}>{shade.name}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Spacing tab */}
                    {activeTab === 'Spacing' && (
                        <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                            {spacingScale.map((scale, i) => (
                                <div key={scale} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                    <div style={{ width: '48px', flexShrink: 0, fontSize: '12px', fontFamily: 'monospace', color: 'var(--c-muted)' }}>
                                        {scale}
                                    </div>
                                    <div style={{ width: '40px', flexShrink: 0, fontSize: '12px', color: 'var(--c-muted)' }}>
                                        {spacingPx[i]}px
                                    </div>
                                    <div style={{ flex: 1, overflow: 'hidden' }}>
                                        <div
                                            style={{
                                                height: '10px',
                                                borderRadius: '4px',
                                                backgroundColor: 'var(--c-primary-500)',
                                                width: spacingPx[i] === 0 ? '3px' : `${Math.min((spacingPx[i] / 128) * 100, 100)}%`,
                                            }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Shadows tab */}
                    {activeTab === 'Shadows' && (
                        <div style={{ padding: '24px', display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '32px' }}>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                                <div className="c-text-sm c-font-semibold c-mb-3">Box Shadows</div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                    {shadowTokens.map((s) => (
                                        <div
                                            key={s.name}
                                            style={{
                                                padding: '16px',
                                                borderRadius: '10px',
                                                textAlign: 'center',
                                                boxShadow: s.var,
                                                backgroundColor: 'var(--c-white)',
                                            }}
                                        >
                                            <code style={{ fontSize: '12px', color: 'var(--c-muted)', fontFamily: 'monospace' }}>
                                                .c-{s.name}
                                            </code>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                                <div className="c-text-sm c-font-semibold c-mb-3">Border Radius</div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                                    {radiusTokens.map((r) => (
                                        <div key={r.name} style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                                            <div
                                                style={{
                                                    width: '40px',
                                                    height: '40px',
                                                    flexShrink: 0,
                                                    backgroundColor: 'var(--c-primary-500)',
                                                    borderRadius: r.value,
                                                }}
                                            />
                                            <div>
                                                <div className="c-text-sm c-font-medium">.c-{r.name}</div>
                                                <div className="c-text-xs c-text-muted">{r.value}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Tokens tab */}
                    {activeTab === 'Tokens' && (
                        <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                            <p className="c-text-sm c-text-muted">
                                Override any token in your own stylesheet. Changes cascade through all utilities automatically.
                            </p>
                            <pre
                                style={{
                                    backgroundColor: 'var(--c-gray-950)',
                                    color: 'var(--c-gray-100)',
                                    padding: '20px',
                                    borderRadius: '10px',
                                    fontSize: '13px',
                                    fontFamily: 'monospace',
                                    lineHeight: '1.8',
                                    overflowX: 'auto',
                                    margin: 0,
                                }}
                            >
                                <code>{`:root {
  /* Brand */
  --c-primary-500: #6C63FF;
  --c-primary-600: #5a52d5;

  /* Typography */
  --c-font-sans: "Inter", sans-serif;
  --c-font-mono: "Fira Code", monospace;

  /* Shape */
  --c-radius-md: 10px;
  --c-radius-lg: 16px;

  /* Elevation */
  --c-shadow-md: 0 4px 20px rgba(0,0,0,0.1);

  /* Semantic */
  --c-bg: #0f172a;
  --c-fg: #f8fafc;
  --c-muted: #94a3b8;
  --c-border: #1e293b;
  --c-accent: #6C63FF;
}`}
                                </code>
                            </pre>
                        </div>
                    )}

                </div>
            </div>
        </section>
    )
}