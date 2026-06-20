import { Zap, Moon, Palette, Package, Grid, Type, Layers, FormInput, Scroll, Printer, Shield, Blocks, Ruler, MousePointer, Film } from 'lucide-react'
import useInView from '../hooks/useInView'

const features = [
    { icon: Zap, title: 'Zero Build Step', desc: 'No CLI, no config, no PostCSS. One link tag and you are building.', bg: 'c-bg-warning-50', color: 'c-text-warning-600' },
    { icon: Moon, title: 'Dark Mode', desc: 'Toggle via data-theme or auto via prefers-color-scheme. Zero JS.', bg: 'c-bg-primary-50', color: 'c-text-primary-600' },
    { icon: Palette, title: 'CSS Variables', desc: 'Every token is a CSS variable. Override your theme in one line.', bg: 'c-bg-error-50', color: 'c-text-error-600' },
    { icon: Package, title: 'Modular Imports', desc: 'Import the full bundle or only the modules you need.', bg: 'c-bg-success-50', color: 'c-text-success-600' },
    { icon: Grid, title: 'Flexbox + Grid', desc: '12-column grid with responsive breakpoints and CSS Grid utilities.', bg: 'c-bg-info-50', color: 'c-text-info-600' },
    { icon: Ruler, title: 'Spacing System', desc: 'Complete margin and padding scale from 0 to 128px.', bg: 'c-bg-warning-50', color: 'c-text-warning-600' },
    { icon: Type, title: 'Typography', desc: 'Font size, weight, line height, tracking, transform utilities.', bg: 'c-bg-primary-50', color: 'c-text-primary-600' },
    { icon: Layers, title: 'Color System', desc: 'Full semantic palette for every state and context.', bg: 'c-bg-error-50', color: 'c-text-error-600' },
    { icon: Film, title: '50+ Animations', desc: 'Fade, slide, scale, flip, jello, rubber-band, typewriter and more.', bg: 'c-bg-success-50', color: 'c-text-success-600' },
    { icon: FormInput, title: 'Form Components', desc: 'Inputs, custom select, checkbox, radio, buttons. No JS.', bg: 'c-bg-info-50', color: 'c-text-info-600' },
    { icon: MousePointer, title: 'Effects & Hover', desc: 'Shadows, filters, backdrop-blur, hover-lift, hover-scale.', bg: 'c-bg-warning-50', color: 'c-text-warning-600' },
    { icon: Scroll, title: 'Scroll & Snap', desc: 'Scroll snap, custom scrollbars, touch-action utilities.', bg: 'c-bg-primary-50', color: 'c-text-primary-600' },
    { icon: Printer, title: 'Print Utilities', desc: 'Show, hide, page breaks for documents and reports.', bg: 'c-bg-error-50', color: 'c-text-error-600' },
    { icon: Shield, title: 'Conflict-Free', desc: 'Every class uses c- prefix. Safe for any existing project.', bg: 'c-bg-success-50', color: 'c-text-success-600' },
    { icon: Blocks, title: 'Font Plugin', desc: '15 Google Fonts via optional c-font-* classes.', bg: 'c-bg-info-50', color: 'c-text-info-600' },
]

function FeatureCard({ f, delay }) {
    const { ref, inView } = useInView()
    return (
        <div
            ref={ref}
            className={`c-p-5 c-md-p-6 c-rounded-xl c-border c-border-base c-hover-lift c-transition ${inView ? 'c-animate-fade-in-up' : 'c-opacity-0'}`}
            style={{ animationDelay: `${delay}ms` }}
        >
            <span className={`c-inline-flex c-items-center c-justify-center c-size-10 c-rounded-lg c-mb-4 ${f.bg}`}>
                <f.icon size={20} className={f.color} />
            </span>
            <h3 className="c-text-sm c-font-bold c-mb-2">{f.title}</h3>
            <p className="c-text-xs c-text-muted c-leading-relaxed">{f.desc}</p>
        </div>
    )
}

export default function Features() {
    const { ref: titleRef, inView: titleIn } = useInView()

    return (
        <section id="features" className="c-py-20 c-md-py-24 c-border-t c-border-base">
            <div className="c-container">
                <div ref={titleRef} className={`c-text-center c-mb-10 c-md-mb-16 ${titleIn ? 'c-animate-fade-in-up' : 'c-opacity-0'}`}>
                    <h2 className="c-text-3xl c-md-text-4xl c-font-black c-mb-4">
                        Everything you <span className="c-text-primary-500">need</span>
                    </h2>
                    <p className="c-text-base c-md-text-lg c-text-muted c-max-w-prose c-mx-auto">
                        16 modules covering every CSS utility — from reset to print.
                    </p>
                </div>

                <div className="c-grid c-gap-4" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))' }}>
                    {features.map((f, i) => (
                        <FeatureCard key={f.title} f={f} delay={(i % 4) * 50} />
                    ))}
                </div>
            </div>
        </section>
    )
}