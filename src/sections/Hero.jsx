import { Terminal, Zap, ArrowRight } from 'lucide-react'

const stats = [
    { label: 'Zero Config', value: '0' },
    { label: 'CSS Modules', value: '14' },
    { label: 'Animations', value: '16' },
    { label: 'Utilities', value: '500+' },
]

export default function Hero() {
    return (
        <section id="hero" className="c-relative c-overflow-hidden c-py-28">
            <div
                className="c-absolute c-inset-0 c-z-neg-1"
                style={{
                    background:
                        'radial-gradient(ellipse 80% 60% at 50% 0%, color-mix(in srgb, var(--c-primary-500) 15%, transparent), transparent)',
                }}
            />
            <div className="c-container c-text-center">
                <div className="c-inline-flex c-items-center c-gap-2 c-bg-primary-50 c-text-primary-600 c-text-xs c-font-semibold c-px-3 c-py-2 c-rounded-full c-mb-6 c-border c-border-primary-200">
                    <Zap size={12} />
                    Zero build step — just drop and go
                </div>
                <h1
                    className="c-text-5xl c-font-black c-tracking-tight c-mb-6"
                    style={{ lineHeight: '1.1' }}
                >
                    The CSS framework that
                    <br />
                    <span className="c-text-primary-500">ships faster</span> than setup
                </h1>
                <p className="c-text-lg c-text-muted c-max-w-prose c-mx-auto c-mb-10">
                    FluxGrid CSS is a utility-first framework with dark mode, animations,
                    form components, and a full design token system — all with one{' '}
                    <code className="c-font-mono c-text-primary-500">npm install</code>.
                    No config. No CLI. No build step.
                </p>
                <div className="c-flex c-items-center c-justify-center c-gap-4 c-mb-12" style={{ flexWrap: 'wrap' }}>
                    <a
                        href="#quick-start"
                        className="c-btn c-btn-primary c-btn-lg c-flex c-items-center c-gap-2"
                    >
                        Get Started <ArrowRight size={18} />
                    </a>
                    <a
                        href="https://www.npmjs.com/package/@datafluxgrid/fluxgrid-css"
                        target="_blank"
                        rel="noreferrer"
                        className="c-btn c-btn-secondary c-btn-lg"
                    >
                        View on npm
                    </a>
                </div>
                <div className="c-inline-flex c-items-center c-gap-3 c-bg-gray-900 c-text-gray-100 c-px-6 c-py-4 c-rounded-xl c-font-mono c-text-sm c-shadow-xl">
                    <Terminal size={16} className="c-text-primary-400" />
                    <span className="c-text-gray-400">$</span>
                    <span>npm install @datafluxgrid/fluxgrid-css</span>
                </div>
                <div className="c-flex c-items-center c-justify-center c-gap-8 c-mt-16" style={{ flexWrap: 'wrap' }}>
                    {stats.map((stat) => (
                        <div key={stat.label} className="c-text-center">
                            <div className="c-text-3xl c-font-black c-text-primary-500">{stat.value}</div>
                            <div className="c-text-sm c-text-muted">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}