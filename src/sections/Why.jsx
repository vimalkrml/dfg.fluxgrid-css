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
    { label: 'Scroll snap utilities', tailwind: true, bootstrap: false, fluxgrid: true },
    { label: 'Print utilities', tailwind: false, bootstrap: 'partial', fluxgrid: true },
    { label: 'Font plugin', tailwind: false, bootstrap: false, fluxgrid: true },
    { label: 'Reduced motion support', tailwind: false, bootstrap: false, fluxgrid: true },
    { label: 'No JS required', tailwind: true, bootstrap: false, fluxgrid: true },
]

function Cell({ value }) {
    if (value === true) return (
        <td style={{ textAlign: 'center', padding: '12px 16px' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '24px', height: '24px', borderRadius: '50%', backgroundColor: 'var(--c-success-100)' }}>
                <Check size={13} style={{ color: 'var(--c-success-600)' }} />
            </span>
        </td>
    )
    if (value === false) return (
        <td style={{ textAlign: 'center', padding: '12px 16px' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '24px', height: '24px', borderRadius: '50%', backgroundColor: 'var(--c-error-100)' }}>
                <X size={13} style={{ color: 'var(--c-error-600)' }} />
            </span>
        </td>
    )
    return (
        <td style={{ textAlign: 'center', padding: '12px 16px' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '24px', height: '24px', borderRadius: '50%', backgroundColor: 'var(--c-warning-100)' }}>
                <Minus size={13} style={{ color: 'var(--c-warning-600)' }} />
            </span>
        </td>
    )
}

export default function Why() {
    const { ref: titleRef, inView: titleIn } = useInView()
    const { ref: tableRef, inView: tableIn } = useInView()

    return (
        <section id="why" style={{ padding: '96px 0', borderTop: '1px solid var(--c-border)' }}>
            <div className="c-container">
                <div
                    ref={titleRef}
                    className={titleIn ? 'c-animate-fade-in-up' : ''}
                    style={{ opacity: titleIn ? undefined : 0, willChange: titleIn ? 'auto' : 'opacity, transform', textAlign: 'center', marginBottom: '48px' }}
                >
                    <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 900, marginBottom: '16px' }}>
                        Why <span className="c-text-primary-500">FluxGrid CSS</span>?
                    </h2>
                    <p style={{ fontSize: '1.125rem', color: 'var(--c-muted)', maxWidth: '520px', margin: '0 auto' }}>
                        See how FluxGrid CSS compares to the most popular CSS frameworks.
                    </p>
                </div>

                <div
                    ref={tableRef}
                    className={tableIn ? 'c-animate-fade-in-up' : ''}
                    style={{ opacity: tableIn ? undefined : 0, willChange: tableIn ? 'auto' : 'opacity, transform', overflowX: 'auto', borderRadius: '16px', border: '1px solid var(--c-border)', boxShadow: 'var(--c-shadow-md)', animationDelay: '150ms' }}
                >
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                        <thead>
                            <tr style={{ borderBottom: '2px solid var(--c-border)', backgroundColor: 'color-mix(in srgb, var(--c-gray-100) 60%, transparent)' }}>
                                <th style={{ textAlign: 'left', padding: '14px 20px', fontSize: '13px', fontWeight: 600, color: 'var(--c-muted)' }}>Feature</th>
                                <th style={{ textAlign: 'center', padding: '14px 16px', fontSize: '13px', fontWeight: 600, color: 'var(--c-muted)' }}>Tailwind</th>
                                <th style={{ textAlign: 'center', padding: '14px 16px', fontSize: '13px', fontWeight: 600, color: 'var(--c-muted)' }}>Bootstrap</th>
                                <th style={{ textAlign: 'center', padding: '14px 16px', fontSize: '13px', fontWeight: 700, color: 'var(--c-primary-600)' }}>FluxGrid ✦</th>
                            </tr>
                        </thead>
                        <tbody>
                            {features.map((row, i) => (
                                <tr
                                    key={row.label}
                                    style={{
                                        borderBottom: i < features.length - 1 ? '1px solid var(--c-border)' : 'none',
                                        backgroundColor: i % 2 === 0 ? 'transparent' : 'color-mix(in srgb, var(--c-gray-100) 30%, transparent)',
                                        transition: 'background 200ms',
                                    }}
                                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'color-mix(in srgb, var(--c-primary-500) 4%, transparent)'}
                                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = i % 2 === 0 ? 'transparent' : 'color-mix(in srgb, var(--c-gray-100) 30%, transparent)'}
                                >
                                    <td style={{ padding: '12px 20px', fontSize: '14px', fontWeight: 500 }}>{row.label}</td>
                                    <Cell value={row.tailwind} />
                                    <Cell value={row.bootstrap} />
                                    <Cell value={row.fluxgrid} />
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div style={{ display: 'flex', gap: '24px', justifyContent: 'center', marginTop: '20px', flexWrap: 'wrap' }}>
                    {[
                        { icon: <Check size={12} style={{ color: 'var(--c-success-600)' }} />, bg: 'var(--c-success-100)', label: 'Supported' },
                        { icon: <Minus size={12} style={{ color: 'var(--c-warning-600)' }} />, bg: 'var(--c-warning-100)', label: 'Partial' },
                        { icon: <X size={12} style={{ color: 'var(--c-error-600)' }} />, bg: 'var(--c-error-100)', label: 'Not supported' },
                    ].map((item) => (
                        <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', color: 'var(--c-muted)' }}>
                            <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '20px', height: '20px', borderRadius: '50%', backgroundColor: item.bg }}>
                                {item.icon}
                            </span>
                            {item.label}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}