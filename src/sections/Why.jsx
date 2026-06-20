import { Check, X, Minus } from 'lucide-react'
import useInView from '../hooks/useInView'

const features = [
    { label: 'Zero build step', tailwind: false, bootstrap: true, fluxgrid: true },
    { label: 'CDN ready', tailwind: 'partial', bootstrap: true, fluxgrid: true },
    { label: 'Dark mode built-in', tailwind: 'partial', bootstrap: false, fluxgrid: true },
    { label: 'CSS Variable theming', tailwind: false, bootstrap: false, fluxgrid: true },
    { label: 'Form components', tailwind: 'partial', bootstrap: true, fluxgrid: true },
    { label: 'Custom select (pure CSS)', tailwind: false, bootstrap: false, fluxgrid: true },
    { label: '50+ Animations', tailwind: false, bootstrap: false, fluxgrid: true },
    { label: 'Modular imports', tailwind: false, bootstrap: false, fluxgrid: true },
    { label: 'Conflict-free prefix', tailwind: false, bootstrap: false, fluxgrid: true },
    { label: 'Print utilities', tailwind: false, bootstrap: 'partial', fluxgrid: true },
    { label: 'Font plugin', tailwind: false, bootstrap: false, fluxgrid: true },
    { label: 'No JS required', tailwind: true, bootstrap: false, fluxgrid: true },
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

export default function Why() {
    const { ref: titleRef, inView: titleIn } = useInView()
    const { ref: tableRef, inView: tableIn } = useInView()

    return (
        <section id="why" className="c-py-20 c-md-py-24 c-border-t c-border-base">
            <div className="c-container">
                <div ref={titleRef} className={`c-text-center c-mb-10 c-md-mb-12 ${titleIn ? 'c-animate-fade-in-up' : 'c-opacity-0'}`}>
                    <h2 className="c-text-3xl c-md-text-4xl c-font-black c-mb-4">
                        Why <span className="c-text-primary-500">FluxGrid CSS</span>?
                    </h2>
                    <p className="c-text-base c-md-text-lg c-text-muted c-max-w-prose c-mx-auto">
                        See how FluxGrid CSS compares to the most popular CSS frameworks.
                    </p>
                </div>

                <div
                    ref={tableRef}
                    className={`c-overflow-x-auto c-rounded-xl c-border c-border-base c-shadow-md ${tableIn ? 'c-animate-fade-in-up' : 'c-opacity-0'}`}
                >
                    <table className="c-w-100" style={{ borderCollapse: 'collapse', minWidth: '480px' }}>
                        <thead>
                            <tr className="c-border-b c-border-base c-bg-gray-100">
                                <th className="c-text-left c-py-3 c-px-4 c-text-xs c-font-semibold c-text-muted">Feature</th>
                                <th className="c-text-center c-py-3 c-px-2 c-text-xs c-font-semibold c-text-muted">Tailwind</th>
                                <th className="c-text-center c-py-3 c-px-2 c-text-xs c-font-semibold c-text-muted">Bootstrap</th>
                                <th className="c-text-center c-py-3 c-px-2 c-text-xs c-font-semibold c-text-primary-600">FluxGrid</th>
                            </tr>
                        </thead>
                        <tbody>
                            {features.map((row) => (
                                <tr key={row.label} className="c-border-b c-border-base">
                                    <td className="c-py-3 c-px-4 c-text-sm c-font-medium">{row.label}</td>
                                    <Cell value={row.tailwind} />
                                    <Cell value={row.bootstrap} />
                                    <Cell value={row.fluxgrid} />
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="c-flex c-items-center c-justify-center c-gap-6 c-mt-6" style={{ flexWrap: 'wrap' }}>
                    <div className="c-flex c-items-center c-gap-2 c-text-xs c-text-muted">
                        <span className="c-inline-flex c-items-center c-justify-center c-size-5 c-rounded-full c-bg-success-100"><Check size={11} className="c-text-success-600" /></span>
                        Supported
                    </div>
                    <div className="c-flex c-items-center c-gap-2 c-text-xs c-text-muted">
                        <span className="c-inline-flex c-items-center c-justify-center c-size-5 c-rounded-full c-bg-warning-100"><Minus size={11} className="c-text-warning-600" /></span>
                        Partial
                    </div>
                    <div className="c-flex c-items-center c-gap-2 c-text-xs c-text-muted">
                        <span className="c-inline-flex c-items-center c-justify-center c-size-5 c-rounded-full c-bg-error-100"><X size={11} className="c-text-error-600" /></span>
                        Not supported
                    </div>
                </div>
            </div>
        </section>
    )
}