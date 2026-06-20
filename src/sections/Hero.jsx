import { Terminal, Zap, ArrowRight } from 'lucide-react'
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
        <section id="hero" className="c-relative c-overflow-hidden c-py-20 c-md-py-24">
            <div className="c-container c-text-center">

                <div ref={r1} className={`c-mb-6 ${v1 ? 'c-animate-fade-in-down' : 'c-opacity-0'}`}>
                    <span className="c-inline-flex c-items-center c-gap-2 c-bg-primary-50 c-text-primary-600 c-text-xs c-font-semibold c-px-3 c-py-2 c-rounded-full c-border c-border-primary-200">
                        <Zap size={12} />
                        Zero build step — just drop and go
                    </span>
                </div>

                <h1
                    ref={r2}
                    className={`c-text-3xl c-md-text-5xl c-font-black c-tracking-tight c-mb-6 c-leading-tight ${v2 ? 'c-animate-fade-in-up c-animate-delay-100' : 'c-opacity-0'}`}
                >
                    The CSS framework that
                    <br />
                    <span className="c-text-primary-500">ships faster</span> than setup
                </h1>

                <p
                    ref={r3}
                    className={`c-text-base c-md-text-lg c-text-muted c-max-w-prose c-mx-auto c-mb-10 ${v3 ? 'c-animate-fade-in-up c-animate-delay-200' : 'c-opacity-0'}`}
                >
                    FluxGrid CSS is a utility-first framework with dark mode, 50+ animations,
                    form components, custom select, and a full design token system — all with one{' '}
                    <code className="c-font-mono c-text-primary-500">npm install</code>.
                    No config. No CLI. No build step.
                </p>

                <div
                    ref={r4}
                    className={`c-flex c-items-center c-justify-center c-gap-3 c-mb-12 ${v4 ? 'c-animate-fade-in-up c-animate-delay-300' : 'c-opacity-0'}`}
                    style={{ flexWrap: 'wrap' }}
                >
                    <a href="#quick-start" className="c-btn c-btn-primary c-btn-lg c-hover-lift c-transition c-flex c-items-center c-gap-2">
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

                <div
                    className={`c-inline-flex c-items-center c-gap-3 c-bg-gray-900 c-text-gray-100 c-px-4 c-py-3 c-md-px-6 c-md-py-4 c-rounded-xl c-font-mono c-text-xs c-md-text-sm c-shadow-xl ${v4 ? 'c-animate-scale-in c-animate-delay-300' : 'c-opacity-0'}`}
                    style={{ maxWidth: '100%' }}
                >
                    <Terminal size={16} className="c-text-primary-400 c-flex-shrink-0" />
                    <span className="c-text-gray-500">$</span>
                    <span className="c-truncate">npm install @datafluxgrid/fluxgrid-css</span>
                </div>

                <div
                    ref={r5}
                    className={`c-flex c-items-center c-justify-center c-gap-6 c-md-gap-10 c-mt-16 ${v5 ? 'c-animate-fade-in-up c-animate-delay-500' : 'c-opacity-0'}`}
                    style={{ flexWrap: 'wrap' }}
                >
                    {stats.map((stat) => (
                        <div key={stat.label} className="c-text-center">
                            <div className="c-text-2xl c-md-text-3xl c-font-black c-text-primary-500">{stat.value}</div>
                            <div className="c-text-xs c-md-text-sm c-text-muted">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}