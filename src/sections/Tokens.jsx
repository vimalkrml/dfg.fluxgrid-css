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
        label: 'Primary', shades: [
            { name: '50', var: 'var(--c-primary-50)', text: 'dark' }, { name: '100', var: 'var(--c-primary-100)', text: 'dark' },
            { name: '200', var: 'var(--c-primary-200)', text: 'dark' }, { name: '300', var: 'var(--c-primary-300)', text: 'dark' },
            { name: '400', var: 'var(--c-primary-400)', text: 'dark' }, { name: '500', var: 'var(--c-primary-500)', text: 'light' },
            { name: '600', var: 'var(--c-primary-600)', text: 'light' }, { name: '700', var: 'var(--c-primary-700)', text: 'light' },
            { name: '800', var: 'var(--c-primary-800)', text: 'light' }, { name: '900', var: 'var(--c-primary-900)', text: 'light' },
        ]
    },
    {
        label: 'Gray', shades: [
            { name: '50', var: 'var(--c-gray-50)', text: 'dark' }, { name: '100', var: 'var(--c-gray-100)', text: 'dark' },
            { name: '200', var: 'var(--c-gray-200)', text: 'dark' }, { name: '300', var: 'var(--c-gray-300)', text: 'dark' },
            { name: '400', var: 'var(--c-gray-400)', text: 'dark' }, { name: '500', var: 'var(--c-gray-500)', text: 'light' },
            { name: '600', var: 'var(--c-gray-600)', text: 'light' }, { name: '700', var: 'var(--c-gray-700)', text: 'light' },
            { name: '800', var: 'var(--c-gray-800)', text: 'light' }, { name: '900', var: 'var(--c-gray-900)', text: 'light' },
        ]
    },
    {
        label: 'Success', shades: [
            { name: '50', var: 'var(--c-success-50)', text: 'dark' }, { name: '100', var: 'var(--c-success-100)', text: 'dark' },
            { name: '500', var: 'var(--c-success-500)', text: 'light' }, { name: '600', var: 'var(--c-success-600)', text: 'light' },
            { name: '700', var: 'var(--c-success-700)', text: 'light' },
        ]
    },
    {
        label: 'Error', shades: [
            { name: '50', var: 'var(--c-error-50)', text: 'dark' }, { name: '100', var: 'var(--c-error-100)', text: 'dark' },
            { name: '500', var: 'var(--c-error-500)', text: 'light' }, { name: '600', var: 'var(--c-error-600)', text: 'light' },
            { name: '700', var: 'var(--c-error-700)', text: 'light' },
        ]
    },
    {
        label: 'Warning', shades: [
            { name: '50', var: 'var(--c-warning-50)', text: 'dark' }, { name: '100', var: 'var(--c-warning-100)', text: 'dark' },
            { name: '500', var: 'var(--c-warning-500)', text: 'light' }, { name: '600', var: 'var(--c-warning-600)', text: 'light' },
            { name: '700', var: 'var(--c-warning-700)', text: 'light' },
        ]
    },
    {
        label: 'Info', shades: [
            { name: '50', var: 'var(--c-info-50)', text: 'dark' }, { name: '100', var: 'var(--c-info-100)', text: 'dark' },
            { name: '500', var: 'var(--c-info-500)', text: 'light' }, { name: '600', var: 'var(--c-info-600)', text: 'light' },
            { name: '700', var: 'var(--c-info-700)', text: 'light' },
        ]
    },
]

const spacingScale = [0, 1, 2, 3, 4, 5, 6, 8, 10, 12, 14, 16, 20, 24, 28, 32]
const spacingPx = [0, 4, 8, 12, 16, 20, 24, 32, 40, 48, 56, 64, 80, 96, 112, 128]

const shadowTokens = [
    { name: 'shadow-xs', var: 'var(--c-shadow-xs)' }, { name: 'shadow-sm', var: 'var(--c-shadow-sm)' },
    { name: 'shadow-md', var: 'var(--c-shadow-md)' }, { name: 'shadow-lg', var: 'var(--c-shadow-lg)' },
    { name: 'shadow-xl', var: 'var(--c-shadow-xl)' }, { name: 'shadow-2xl', var: 'var(--c-shadow-2xl)' },
]

const radiusTokens = [
    { name: 'rounded-sm', value: '4px' }, { name: 'rounded', value: '8px' },
    { name: 'rounded-md', value: '12px' }, { name: 'rounded-lg', value: '16px' },
    { name: 'rounded-xl', value: '24px' }, { name: 'rounded-2xl', value: '32px' },
    { name: 'rounded-full', value: '9999px' },
]

const tabs = ['Fonts', 'Colors', 'Spacing', 'Shadows', 'Tokens']

export default function Tokens() {
    const [activeTab, setActiveTab] = useState('Fonts')
    const [selectedFont, setSelectedFont] = useState(fonts[0])

    useEffect(() => {
        document.documentElement.style.setProperty('--c-font-sans', selectedFont.family)
        return () => document.documentElement.style.removeProperty('--c-font-sans')
    }, [selectedFont])

    return (
        <section id="tokens" className="c-py-20 c-md-py-24 c-border-t c-border-base">
            <div className="c-container">

                <div className="c-text-center c-mb-10 c-md-mb-12">
                    <h2 className="c-text-3xl c-md-text-4xl c-font-black c-mb-4">
                        Design <span className="c-text-primary-500">Tokens</span>
                    </h2>
                    <p className="c-text-base c-md-text-lg c-text-muted c-max-w-prose c-mx-auto">
                        Every value in FluxGrid CSS is a CSS variable. Override anything with one line.
                    </p>
                </div>

                <div className="c-flex c-gap-1 c-p-1 c-rounded-lg c-bg-gray-100 c-mb-6 c-overflow-x-auto c-scrollbar-none">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`c-flex-1 c-px-4 c-py-2 c-rounded-md c-text-sm c-font-medium c-transition-colors c-flex-shrink-0 ${activeTab === tab ? 'c-bg-base c-shadow-sm c-text-primary-600' : 'c-text-muted'}`}
                            style={{ minWidth: '80px', border: 'none', cursor: 'pointer', whiteSpace: 'nowrap' }}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                <div className="c-rounded-2xl c-border c-border-base c-bg-base c-overflow-hidden">

                    {activeTab === 'Fonts' && (
                        <div className="c-p-4 c-md-p-6 c-flex c-flex-col c-gap-5">
                            <div className="c-flex c-flex-col c-gap-2">
                                <label className="c-label">Select a font — updates the entire site</label>
                                <div className="c-select-wrap">
                                    <input type="checkbox" className="c-select-toggle" id="tokens-font-toggle" />
                                    <label className="c-select-trigger" htmlFor="tokens-font-toggle">
                                        <span className="c-select-value" style={{ fontFamily: selectedFont.family }}>
                                            {selectedFont.label}
                                        </span>
                                        <svg className="c-select-arrow" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="m6 9 6 6 6-6" />
                                        </svg>
                                    </label>

                                    <label className="c-select-backdrop" htmlFor="tokens-font-toggle"></label>

                                    <ul className="c-select-dropdown">
                                        {fonts.map((f) => (
                                            <li
                                                key={f.class}
                                                className={`c-select-item${selectedFont.class === f.class ? ' c-select-item-active' : ''}`}
                                                style={{ fontFamily: f.family }}
                                                onClick={() => {
                                                    setSelectedFont(f)
                                                    document.getElementById('tokens-font-toggle').checked = false
                                                }}
                                            >
                                                {f.label}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <div className="c-px-4 c-py-3 c-rounded-lg c-text-xs c-font-mono c-bg-gray-950 c-text-gray-100 c-overflow-x-auto c-whitespace-nowrap">
                                --c-font-sans: {selectedFont.family};
                            </div>

                            <div className="c-border c-border-base c-rounded-xl c-p-4 c-md-p-5" style={{ fontFamily: selectedFont.family }}>
                                <div className="c-text-xs c-text-muted c-uppercase c-tracking-wide c-font-semibold c-mb-3">
                                    Preview — {selectedFont.label}
                                </div>
                                <p className="c-text-xl c-md-text-2xl c-font-bold c-mb-1">FluxGrid CSS</p>
                                <p className="c-text-sm c-font-medium c-mb-2">A utility-first CSS framework.</p>
                                <p className="c-text-sm c-text-muted c-mb-4">
                                    Zero build step. Dark mode. Animations. All in one.
                                </p>
                                <div className="c-flex c-gap-2" style={{ flexWrap: 'wrap' }}>
                                    <button className="c-btn c-btn-primary c-btn-sm">Get Started</button>
                                    <button className="c-btn c-btn-outline c-btn-sm">View Docs</button>
                                </div>
                            </div>

                            <div className="c-grid c-gap-2" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(110px, 1fr))' }}>
                                {fonts.map((f) => (
                                    <button
                                        key={f.class}
                                        onClick={() => setSelectedFont(f)}
                                        className={`c-p-3 c-rounded-lg c-border c-text-left c-transition-colors ${selectedFont.class === f.class ? 'c-border-primary-500 c-bg-primary-50 c-text-primary-700' : 'c-border-base c-text-fg'}`}
                                        style={{ fontFamily: f.family, cursor: 'pointer', backgroundColor: selectedFont.class === f.class ? undefined : 'transparent' }}
                                    >
                                        <div className="c-text-xs c-font-bold c-truncate">{f.label}</div>
                                        <div className="c-text-lg c-mt-1">Aa</div>
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {activeTab === 'Colors' && (
                        <div className="c-p-4 c-md-p-6 c-flex c-flex-col c-gap-6">
                            {colorGroups.map((group) => (
                                <div key={group.label}>
                                    <div className="c-text-sm c-font-semibold c-mb-2">{group.label}</div>
                                    <div className="c-flex c-gap-1">
                                        {group.shades.map((shade) => (
                                            <div
                                                key={shade.name}
                                                className="c-flex-1 c-rounded-md c-py-3 c-text-center"
                                                style={{ backgroundColor: shade.var, color: shade.text === 'light' ? 'white' : '#111827', minWidth: 0 }}
                                            >
                                                <div className="c-font-semibold" style={{ fontSize: '9px' }}>{shade.name}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {activeTab === 'Spacing' && (
                        <div className="c-p-4 c-md-p-6 c-flex c-flex-col c-gap-2">
                            {spacingScale.map((scale, i) => (
                                <div key={scale} className="c-flex c-items-center c-gap-3">
                                    <div className="c-text-xs c-font-mono c-text-muted c-flex-shrink-0" style={{ width: '48px' }}>{scale}</div>
                                    <div className="c-text-xs c-text-muted c-flex-shrink-0" style={{ width: '36px' }}>{spacingPx[i]}px</div>
                                    <div className="c-flex-1 c-overflow-hidden">
                                        <div
                                            className="c-rounded c-bg-primary-500"
                                            style={{ height: '10px', width: spacingPx[i] === 0 ? '3px' : `${Math.min((spacingPx[i] / 128) * 100, 100)}%` }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {activeTab === 'Shadows' && (
                        <div className="c-p-4 c-md-p-6 c-grid c-gap-8" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))' }}>
                            <div>
                                <div className="c-text-sm c-font-semibold c-mb-3">Box Shadows</div>
                                <div className="c-flex c-flex-col c-gap-3">
                                    {shadowTokens.map((s) => (
                                        <div key={s.name} className="c-p-4 c-rounded-lg c-text-center c-bg-white" style={{ boxShadow: s.var }}>
                                            <code className="c-text-xs c-font-mono c-text-muted">.c-{s.name}</code>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <div className="c-text-sm c-font-semibold c-mb-3">Border Radius</div>
                                <div className="c-flex c-flex-col c-gap-4">
                                    {radiusTokens.map((r) => (
                                        <div key={r.name} className="c-flex c-items-center c-gap-4">
                                            <div className="c-size-10 c-bg-primary-500 c-flex-shrink-0" style={{ borderRadius: r.value }} />
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

                    {activeTab === 'Tokens' && (
                        <div className="c-p-4 c-md-p-6 c-flex c-flex-col c-gap-4">
                            <p className="c-text-sm c-text-muted">
                                Override any token in your own stylesheet. Changes cascade through all utilities automatically.
                            </p>
                            <pre className="c-p-5 c-rounded-lg c-text-xs c-font-mono c-bg-gray-950 c-text-gray-100 c-overflow-x-auto" style={{ margin: 0, lineHeight: 1.8 }}>
                                <code>{`:root {
  --c-primary-500: #6C63FF;
  --c-primary-600: #5a52d5;
  --c-font-sans: "Inter", sans-serif;
  --c-font-mono: "Fira Code", monospace;
  --c-radius-md: 10px;
  --c-shadow-md: 0 4px 20px rgba(0,0,0,0.1);
  --c-bg: #0f172a;
  --c-fg: #f8fafc;
  --c-border: #1e293b;
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