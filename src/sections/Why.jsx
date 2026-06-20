import { useState } from 'react'
import { Check, X, Minus, Info } from 'lucide-react'
import useInView from '../hooks/useInView'

const features = [
    {
        label: 'Zero build step',
        tailwind: 'partial',
        bootstrap: true,
        bulma: true,
        pico: true,
        fluxgrid: true,
        note: 'Tailwind v4 still requires its CLI/Vite plugin to generate output CSS; a CDN script exists but is explicitly marked not for production by Tailwind\u2019s own docs.',
    },
    {
        label: 'CDN ready',
        tailwind: 'partial',
        bootstrap: true,
        bulma: true,
        pico: true,
        fluxgrid: true,
        note: 'Tailwind\u2019s Play CDN compiles in-browser at runtime \u2014 fine for prototyping, not recommended for production by Tailwind themselves.',
    },
    {
        label: 'Dark mode built-in',
        tailwind: 'partial',
        bootstrap: true,
        bulma: true,
        pico: true,
        fluxgrid: true,
        note: 'Tailwind v4 supports dark mode via a @variant directive you add yourself; Bootstrap, Bulma, Pico, and FluxGrid all ship it ready to use out of the box.',
    },
    {
        label: 'CSS Variable theming',
        tailwind: true,
        bootstrap: true,
        bulma: true,
        pico: true,
        fluxgrid: true,
        note: 'As of Tailwind v4 (CSS-first @theme config) and Bootstrap 5.3, every framework here is genuinely CSS-variable driven.',
    },
    {
        label: 'Form components',
        tailwind: 'partial',
        bootstrap: true,
        bulma: true,
        pico: true,
        fluxgrid: true,
        note: 'Tailwind ships no form styling by default \u2014 the official @tailwindcss/forms plugin is a separate install.',
    },
    {
        label: 'Custom select, no JS',
        tailwind: false,
        bootstrap: false,
        bulma: false,
        pico: 'partial',
        fluxgrid: true,
        note: 'Pico\u2019s dropdown markup is pure CSS (checkbox/radio based), but Pico\u2019s own docs say you will likely need JS to interact with it fully. FluxGrid\u2019s select works end-to-end with zero JS, including outside-click close.',
    },
    {
        label: '50+ animations',
        tailwind: false,
        bootstrap: false,
        bulma: false,
        pico: false,
        fluxgrid: true,
        note: 'Tailwind ships a handful (spin, ping, pulse, bounce). Bootstrap, Bulma, and Pico include none as first-class utility classes.',
    },
    {
        label: 'Modular CSS imports',
        tailwind: false,
        bootstrap: 'partial',
        bulma: 'partial',
        pico: true,
        fluxgrid: true,
        note: 'Bootstrap and Bulma support modular imports via Sass partials, which requires a Sass build step. Pico supports it via its Sass @use modules. FluxGrid\u2019s modules are plain CSS files you can import individually with zero build step.',
    },
    {
        label: 'Conflict-free prefix',
        tailwind: false,
        bootstrap: false,
        bulma: false,
        pico: true,
        fluxgrid: true,
        note: 'Pico prefixes its CSS variables with --pico-, similar in spirit to FluxGrid\u2019s c- class prefix. Tailwind, Bootstrap, and Bulma use common unprefixed class names.',
    },
    {
        label: 'Print utilities',
        tailwind: false,
        bootstrap: 'partial',
        bulma: false,
        pico: false,
        fluxgrid: true,
        note: 'Bootstrap has some print-specific utility classes. Bulma and Pico have none documented. FluxGrid ships a dedicated print module.',
    },
    {
        label: 'Built-in font plugin',
        tailwind: false,
        bootstrap: false,
        bulma: false,
        pico: false,
        fluxgrid: true,
        note: 'None of these frameworks bundle a Google Fonts plugin; you\u2019re expected to bring your own typography in all of them except FluxGrid\u2019s optional fonts.css.',
    },
    {
        label: 'No JS for core layout/components',
        tailwind: true,
        bootstrap: false,
        bulma: true,
        pico: 'partial',
        fluxgrid: true,
        note: 'Bootstrap\u2019s dropdowns, modals, and tooltips require its JS bundle or Popper.js. Bulma genuinely ships zero JS (its own docs confirm this) though things like the navbar burger need you to write a small toggle script. Pico is mostly JS-free but flags some components (like custom dropdowns) as needing it.',
    },
]

function Cell({ value }) {
    const cls = value === true ? 'c-bg-success-100' : value === false ? 'c-bg-error-100' : 'c-bg-warning-100'
    const iconColor = value === true ? 'c-text-success-600' : value === false ? 'c-text-error-600' : 'c-text-warning-600'
    const Icon = value === true ? Check : value === false ? X : Minus
    return (
        <td className="c-text-center c-py-3 c-px-2 c-md-px-4">
            <span className={`c-inline-flex c-items-center c-justify-center c-size-6 c-rounded-full ${cls}`}>
                <Icon size={13} className={iconColor} />
            </span>
        </td>
    )
}

function FeatureRow({ row }) {
    const [showNote, setShowNote] = useState(false)
    return (
        <>
            <tr className="c-border-b c-border-base">
                <td className="c-py-3 c-px-4 c-text-sm c-font-medium" style={{ position: 'sticky', left: 0, backgroundColor: 'var(--c-bg)' }}>
                    <button
                        onClick={() => setShowNote((v) => !v)}
                        className="c-flex c-items-center c-gap-1"
                        style={{ border: 'none', background: 'transparent', cursor: 'pointer', padding: 0, textAlign: 'left', color: 'inherit', font: 'inherit' }}
                    >
                        {row.label}
                        <Info size={12} className="c-text-muted c-flex-shrink-0" />
                    </button>
                </td>
                <Cell value={row.tailwind} />
                <Cell value={row.bootstrap} />
                <Cell value={row.bulma} />
                <Cell value={row.pico} />
                <Cell value={row.fluxgrid} />
            </tr>
            {showNote && (
                <tr>
                    <td colSpan={6} className="c-px-4 c-py-3 c-text-xs c-text-muted" style={{ backgroundColor: 'var(--c-gray-50)', borderBottom: '1px solid var(--c-border)', lineHeight: 1.6 }}>
                        {row.note}
                    </td>
                </tr>
            )}
        </>
    )
}

export default function Why() {
    const { ref: titleRef, inView: titleIn } = useInView()
    const { ref: tableRef, inView: tableIn } = useInView()

    return (
        <section id="why" className="c-py-20 c-md-py-24 c-border-t c-border-base">
            <div className="c-container">
                <div
                    ref={titleRef}
                    className={titleIn ? 'c-animate-fade-in-up' : ''}
                    style={{ opacity: titleIn ? undefined : 0, willChange: 'opacity, transform', textAlign: 'center', marginBottom: '40px' }}
                >
                    <h2 className="c-text-3xl c-md-text-4xl c-font-black c-mb-4">
                        Why <span className="c-text-primary-500">FluxGrid CSS</span>?
                    </h2>
                    <p className="c-text-base c-md-text-lg c-text-muted c-max-w-prose c-mx-auto">
                        An honest comparison against the most popular CSS frameworks, verified against their official docs.
                    </p>
                </div>

                <div
                    ref={tableRef}
                    className={tableIn ? 'c-animate-fade-in-up' : ''}
                    style={{ opacity: tableIn ? undefined : 0, willChange: 'opacity, transform' }}
                >
                    <div className="c-overflow-x-auto c-rounded-xl c-border c-border-base c-shadow-md c-scrollbar-thin">
                        <table style={{ borderCollapse: 'collapse', minWidth: '640px', width: '100%' }}>
                            <thead>
                                <tr className="c-border-b c-border-base c-bg-gray-100">
                                    <th className="c-text-left c-py-3 c-px-4 c-text-xs c-font-semibold c-text-muted" style={{ position: 'sticky', left: 0, backgroundColor: 'var(--c-gray-100)' }}>
                                        Feature
                                    </th>
                                    <th className="c-text-center c-py-3 c-px-2 c-text-xs c-font-semibold c-text-muted">Tailwind v4</th>
                                    <th className="c-text-center c-py-3 c-px-2 c-text-xs c-font-semibold c-text-muted">Bootstrap 5.3</th>
                                    <th className="c-text-center c-py-3 c-px-2 c-text-xs c-font-semibold c-text-muted">Bulma v1</th>
                                    <th className="c-text-center c-py-3 c-px-2 c-text-xs c-font-semibold c-text-muted">Pico v2</th>
                                    <th className="c-text-center c-py-3 c-px-2 c-text-xs c-font-semibold c-text-primary-600">FluxGrid</th>
                                </tr>
                            </thead>
                            <tbody>
                                {features.map((row) => (
                                    <FeatureRow key={row.label} row={row} />
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="c-flex c-items-center c-gap-2 c-text-xs c-text-muted c-mt-3">
                        <Info size={12} className="c-flex-shrink-0" />
                        Click any feature name for sourcing notes and nuance.
                    </div>
                    <div className="c-text-xs c-text-muted c-mt-1 c-md-hidden">
                        ← Scroll to see all frameworks
                    </div>
                </div>

                <div className="c-flex c-items-center c-justify-center c-gap-6 c-mt-6" style={{ flexWrap: 'wrap' }}>
                    <div className="c-flex c-items-center c-gap-2 c-text-xs c-text-muted">
                        <span className="c-inline-flex c-items-center c-justify-center c-size-5 c-rounded-full c-bg-success-100"><Check size={11} className="c-text-success-600" /></span>
                        Supported
                    </div>
                    <div className="c-flex c-items-center c-gap-2 c-text-xs c-text-muted">
                        <span className="c-inline-flex c-items-center c-justify-center c-size-5 c-rounded-full c-bg-warning-100"><Minus size={11} className="c-text-warning-600" /></span>
                        Partial / requires extra setup
                    </div>
                    <div className="c-flex c-items-center c-gap-2 c-text-xs c-text-muted">
                        <span className="c-inline-flex c-items-center c-justify-center c-size-5 c-rounded-full c-bg-error-100"><X size={11} className="c-text-error-600" /></span>
                        Not available
                    </div>
                </div>
            </div>
        </section>
    )
}