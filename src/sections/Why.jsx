import { Check, X, Minus } from 'lucide-react'

const features = [
    { label: 'Zero build step', tailwind: false, bootstrap: true, fluxgrid: true },
    { label: 'CDN ready', tailwind: 'partial', bootstrap: true, fluxgrid: true },
    { label: 'Dark mode built-in', tailwind: 'partial', bootstrap: false, fluxgrid: true },
    { label: 'CSS Variable theming', tailwind: false, bootstrap: false, fluxgrid: true },
    { label: 'Form components', tailwind: 'partial', bootstrap: true, fluxgrid: true },
    { label: 'Animation library', tailwind: false, bootstrap: false, fluxgrid: true },
    { label: 'Modular imports', tailwind: false, bootstrap: false, fluxgrid: true },
    { label: 'Conflict-free prefix', tailwind: false, bootstrap: false, fluxgrid: true },
    { label: 'Reduced motion support', tailwind: false, bootstrap: false, fluxgrid: true },
    { label: 'Print utilities', tailwind: false, bootstrap: 'partial', fluxgrid: true },
    { label: 'Scroll snap utilities', tailwind: true, bootstrap: false, fluxgrid: true },
    { label: 'No JS required', tailwind: true, bootstrap: false, fluxgrid: true },
]

function Cell({ value }) {
    if (value === true) {
        return (
            <td className="c-text-center c-py-3 c-px-4">
                <div className="c-inline-flex c-items-center c-justify-center c-size-6 c-rounded-full c-bg-success-100">
                    <Check size={14} className="c-text-success-600" />
                </div>
            </td>
        )
    }
    if (value === false) {
        return (
            <td className="c-text-center c-py-3 c-px-4">
                <div className="c-inline-flex c-items-center c-justify-center c-size-6 c-rounded-full c-bg-error-100">
                    <X size={14} className="c-text-error-600" />
                </div>
            </td>
        )
    }
    return (
        <td className="c-text-center c-py-3 c-px-4">
            <div className="c-inline-flex c-items-center c-justify-center c-size-6 c-rounded-full c-bg-warning-100">
                <Minus size={14} className="c-text-warning-600" />
            </div>
        </td>
    )
}

export default function Why() {
    return (
        <section id="why" className="c-py-24 c-border-t c-border-base">
            <div className="c-container">
                <div className="c-text-center c-mb-16">
                    <h2 className="c-text-4xl c-font-black c-mb-4">
                        Why <span className="c-text-primary-500">FluxGrid CSS</span>?
                    </h2>
                    <p className="c-text-lg c-text-muted c-max-w-prose c-mx-auto">
                        See how FluxGrid CSS compares to the most popular CSS frameworks.
                    </p>
                </div>
                <div className="c-overflow-x-auto c-rounded-xl c-border c-border-base c-shadow-md">
                    <table className="c-w-100" style={{ width: '100%', borderCollapse: 'collapse' }}>
                        <thead>
                            <tr className="c-border-b c-border-base" style={{ backgroundColor: 'var(--c-gray-50)' }}>
                                <th className="c-text-left c-py-4 c-px-4 c-text-sm c-font-semibold c-text-muted">
                                    Feature
                                </th>
                                <th className="c-text-center c-py-4 c-px-4 c-text-sm c-font-semibold c-text-muted">
                                    Tailwind
                                </th>
                                <th className="c-text-center c-py-4 c-px-4 c-text-sm c-font-semibold c-text-muted">
                                    Bootstrap
                                </th>
                                <th className="c-text-center c-py-4 c-px-4 c-text-sm c-font-semibold c-text-primary-600">
                                    FluxGrid CSS ✦
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {features.map((row, i) => (
                                <tr
                                    key={row.label}
                                    className="c-border-b c-border-base"
                                    style={{
                                        backgroundColor: i % 2 === 0 ? 'transparent' : 'color-mix(in srgb, var(--c-gray-100) 50%, transparent)',
                                    }}
                                >
                                    <td className="c-py-3 c-px-4 c-text-sm c-font-medium">{row.label}</td>
                                    <Cell value={row.tailwind} />
                                    <Cell value={row.bootstrap} />
                                    <Cell value={row.fluxgrid} />
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="c-flex c-items-center c-gap-6 c-mt-6 c-justify-center" style={{ flexWrap: 'wrap' }}>
                    <div className="c-flex c-items-center c-gap-2 c-text-sm c-text-muted">
                        <div className="c-inline-flex c-items-center c-justify-center c-size-5 c-rounded-full c-bg-success-100">
                            <Check size={12} className="c-text-success-600" />
                        </div>
                        Supported
                    </div>
                    <div className="c-flex c-items-center c-gap-2 c-text-sm c-text-muted">
                        <div className="c-inline-flex c-items-center c-justify-center c-size-5 c-rounded-full c-bg-warning-100">
                            <Minus size={12} className="c-text-warning-600" />
                        </div>
                        Partial / Config needed
                    </div>
                    <div className="c-flex c-items-center c-gap-2 c-text-sm c-text-muted">
                        <div className="c-inline-flex c-items-center c-justify-center c-size-5 c-rounded-full c-bg-error-100">
                            <X size={12} className="c-text-error-600" />
                        </div>
                        Not supported
                    </div>
                </div>
            </div>
        </section>
    )
}