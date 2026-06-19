import { Terminal, Zap, ArrowRight, Star } from 'lucide-react'
import useInView from '../hooks/useInView'

const stats = [
    { label: 'Zero Config', value: '0' },
    { label: 'CSS Modules', value: '14' },
    { label: 'Animations', value: '50+' },
    { label: 'Utilities', value: '500+' },
]

export default function Hero() {
    const { ref: r1, inView: v1 } = useInView()
    const { ref: r2, inView: v2 } = useInView()
    const { ref: r3, inView: v3 } = useInView()
    const { ref: r4, inView: v4 } = useInView()
    const { ref: r5, inView: v5 } = useInView()

    return (
        <section id="hero" style={{ position: 'relative', overflow: 'hidden', padding: '112px 0 80px' }}>
            <div style={{
                position: 'absolute', inset: 0, zIndex: -1,
                background: 'radial-gradient(ellipse 80% 60% at 50% -10%, color-mix(in srgb, var(--c-primary-500) 18%, transparent), transparent)',
            }} />
            <div style={{
                position: 'absolute', top: '20%', left: '5%', width: '300px', height: '300px',
                borderRadius: '50%', filter: 'blur(80px)',
                background: 'color-mix(in srgb, var(--c-primary-400) 8%, transparent)',
                animation: 'c-float 6s ease-in-out infinite', zIndex: -1,
            }} />
            <div style={{
                position: 'absolute', top: '30%', right: '5%', width: '200px', height: '200px',
                borderRadius: '50%', filter: 'blur(60px)',
                background: 'color-mix(in srgb, var(--c-info-400) 8%, transparent)',
                animation: 'c-float 8s ease-in-out infinite reverse', zIndex: -1,
            }} />

            <div className="c-container c-text-center">
                <div
                    ref={r1}
                    className={v1 ? 'c-animate-fade-in-down' : ''}
                    style={{ opacity: v1 ? undefined : 0, willChange: v1 ? 'auto' : 'opacity, transform', marginBottom: '24px' }}
                >
                    <span className="c-inline-flex c-items-center c-gap-2 c-bg-primary-50 c-text-primary-600 c-text-xs c-font-semibold c-px-4 c-py-2 c-rounded-full c-border c-border-primary-200 c-shadow-sm">
                        <Zap size={12} />
                        Zero build step — just drop and go
                        <Star size={10} fill="currentColor" />
                    </span>
                </div>

                <h1
                    ref={r2}
                    className={v2 ? 'c-animate-fade-in-up' : ''}
                    style={{
                        opacity: v2 ? undefined : 0,
                        fontSize: 'clamp(2.5rem, 6vw, 4rem)',
                        fontWeight: 900,
                        letterSpacing: '-0.03em',
                        lineHeight: 1.1,
                        marginBottom: '24px',
                        animationDelay: '100ms',
                    }}
                >
                    The CSS framework that
                    <br />
                    <span className="c-text-primary-500">ships faster</span> than setup
                </h1>

                <p
                    ref={r3}
                    className={v3 ? 'c-animate-fade-in-up' : ''}
                    style={{
                        opacity: v3 ? undefined : 0,
                        fontSize: '1.125rem',
                        color: 'var(--c-muted)',
                        maxWidth: '580px',
                        margin: '0 auto 40px',
                        lineHeight: 1.7,
                        animationDelay: '200ms',
                    }}
                >
                    FluxGrid CSS is a utility-first framework with dark mode, 50+ animations,
                    form components, custom select, and a full design token system — all with one{' '}
                    <code style={{ fontFamily: 'monospace', color: 'var(--c-primary-500)', fontSize: '0.9em' }}>
                        npm install
                    </code>.
                    No config. No CLI. No build step.
                </p>

                <div
                    ref={r4}
                    className={v4 ? 'c-animate-fade-in-up' : ''}
                    style={{
                        opacity: v4 ? undefined : 0,
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '12px',
                        flexWrap: 'wrap',
                        marginBottom: '48px',
                        animationDelay: '300ms',
                    }}
                >
                    <a href="#quick-start" className="c-btn c-btn-primary c-btn-lg c-hover-lift c-transition c-flex c-items-center c-gap-2">
                        Get Started <ArrowRight size={18} />
                    </a>
                    <a
                        href="https://www.npmjs.com/package/@datafluxgrid/fluxgrid-css"
                        target="_blank"
                        rel="noreferrer"
                        className="c-btn c-btn-secondary c-btn-lg c-hover-lift c-transition"
                    >
                        View on npm
                    </a>
                </div>

                <div
                    className={v4 ? 'c-animate-scale-in' : ''}
                    style={{
                        opacity: v4 ? undefined : 0,
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '12px',
                        backgroundColor: 'var(--c-gray-950)',
                        color: 'var(--c-gray-100)',
                        padding: '14px 24px',
                        borderRadius: '12px',
                        fontFamily: 'monospace',
                        fontSize: '14px',
                        boxShadow: 'var(--c-shadow-xl)',
                        animationDelay: '400ms',
                        border: '1px solid var(--c-gray-800)',
                    }}
                >
                    <Terminal size={16} style={{ color: 'var(--c-primary-400)', flexShrink: 0 }} />
                    <span style={{ color: 'var(--c-gray-500)' }}>$</span>
                    <span>npm install @datafluxgrid/fluxgrid-css</span>
                </div>

                <div
                    ref={r5}
                    className={v5 ? 'c-animate-fade-in-up' : ''}
                    style={{
                        opacity: v5 ? undefined : 0,
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '48px',
                        marginTop: '64px',
                        flexWrap: 'wrap',
                        animationDelay: '500ms',
                    }}
                >
                    {stats.map((stat) => (
                        <div key={stat.label} style={{ textAlign: 'center' }}>
                            <div className="c-animate-pulse-scale" style={{ fontSize: '2rem', fontWeight: 900, color: 'var(--c-primary-500)' }}>
                                {stat.value}
                            </div>
                            <div style={{ fontSize: '13px', color: 'var(--c-muted)', marginTop: '4px' }}>{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}