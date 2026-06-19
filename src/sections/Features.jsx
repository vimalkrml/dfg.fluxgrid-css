import { Zap, Moon, Palette, Package, Grid, Type, Layers, FormInput, Scroll, Printer, Shield, Blocks, Ruler, MousePointer, Film } from 'lucide-react'
import useInView from '../hooks/useInView'

const features = [
    { icon: Zap, title: 'Zero Build Step', desc: 'No CLI, no config, no PostCSS. One link tag and you are building instantly.', color: '#f59e0b', bg: 'var(--c-warning-50)' },
    { icon: Moon, title: 'Dark Mode', desc: 'Toggle via data-theme="dark" or auto via prefers-color-scheme. Zero JS.', color: 'var(--c-primary-500)', bg: 'var(--c-primary-50)' },
    { icon: Palette, title: 'CSS Variables', desc: 'Every token is a CSS variable. Override your entire theme in one line.', color: 'var(--c-error-500)', bg: 'var(--c-error-50)' },
    { icon: Package, title: 'Modular Imports', desc: 'Import the full bundle or only the modules you need.', color: 'var(--c-success-500)', bg: 'var(--c-success-50)' },
    { icon: Grid, title: 'Flexbox + CSS Grid', desc: '12-column grid with sm/md/lg/xl/2xl breakpoints and full CSS Grid utils.', color: 'var(--c-info-500)', bg: 'var(--c-info-50)' },
    { icon: Ruler, title: 'Spacing System', desc: 'Complete margin and padding scale from 0 to 128px in every direction.', color: '#f59e0b', bg: 'var(--c-warning-50)' },
    { icon: Type, title: 'Typography', desc: 'Font size, weight, line height, tracking, transform, truncation.', color: 'var(--c-primary-600)', bg: 'var(--c-primary-50)' },
    { icon: Layers, title: 'Color System', desc: 'Full semantic palette for primary, success, error, warning, info states.', color: 'var(--c-error-600)', bg: 'var(--c-error-50)' },
    { icon: Film, title: '50+ Animations', desc: 'Fade, slide, scale, zoom, flip, jello, rubber-band, typewriter and more.', color: 'var(--c-success-600)', bg: 'var(--c-success-50)' },
    { icon: FormInput, title: 'Form Components', desc: 'Inputs, textarea, custom select, checkbox, radio, buttons. No JS.', color: 'var(--c-info-600)', bg: 'var(--c-info-50)' },
    { icon: MousePointer, title: 'Effects & Hover', desc: 'Shadows, filters, backdrop-blur, transforms, hover-lift, hover-scale.', color: '#f59e0b', bg: 'var(--c-warning-50)' },
    { icon: Scroll, title: 'Scroll & Snap', desc: 'Scroll snap, custom scrollbars, overscroll, touch-action utilities.', color: 'var(--c-primary-500)', bg: 'var(--c-primary-50)' },
    { icon: Printer, title: 'Print Utilities', desc: 'Show/hide on print, page breaks, print-only content for reports.', color: 'var(--c-error-500)', bg: 'var(--c-error-50)' },
    { icon: Shield, title: 'Conflict-Free', desc: 'Every class uses c- prefix. Safe to add to any existing project.', color: 'var(--c-success-500)', bg: 'var(--c-success-50)' },
    { icon: Blocks, title: 'Font Plugin', desc: '15 Google Fonts via optional c-font-* classes. Zero core impact.', color: 'var(--c-info-500)', bg: 'var(--c-info-50)' },
    { icon: Zap, title: 'Reduced Motion', desc: 'All animations auto-disabled for users who prefer reduced motion.', color: 'var(--c-primary-600)', bg: 'var(--c-primary-50)' },
]

export default function Features() {
    const { ref: titleRef, inView: titleIn } = useInView()

    return (
        <section id="features" style={{ padding: '96px 0', borderTop: '1px solid var(--c-border)', background: 'color-mix(in srgb, var(--c-gray-50) 50%, var(--c-bg))' }}>
            <div className="c-container">
                <div
                    ref={titleRef}
                    className={titleIn ? 'c-animate-fade-in-up' : ''}
                    style={{ opacity: titleIn ? undefined : 0, willChange: titleIn ? 'auto' : 'opacity, transform', textAlign: 'center', marginBottom: '56px' }}
                >
                    <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 900, marginBottom: '16px' }}>
                        Everything you <span className="c-text-primary-500">need</span>
                    </h2>
                    <p style={{ fontSize: '1.125rem', color: 'var(--c-muted)', maxWidth: '520px', margin: '0 auto' }}>
                        16 modules covering every CSS utility — from reset to print, grid to animation.
                    </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '16px' }}>
                    {features.map((f, i) => (
                        <FeatureCard key={f.title} f={f} delay={i * 40} />
                    ))}
                </div>
            </div>
        </section>
    )
}

function FeatureCard({ f, delay }) {
    const { ref, inView } = useInView()

    return (
        <div
            ref={ref}
            className={inView ? 'c-animate-fade-in-up c-hover-lift' : ''}
            style={{
                opacity: inView ? undefined : 0,
                willChange: inView ? 'auto' : 'opacity, transform',
                animationDelay: `${delay}ms`,
                padding: '24px',
                borderRadius: '16px',
                border: '1px solid var(--c-border)',
                backgroundColor: 'var(--c-bg)',
                transition: 'box-shadow 300ms, transform 300ms',
                cursor: 'default',
            }}
        >
            <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '44px', height: '44px', borderRadius: '12px', backgroundColor: f.bg, marginBottom: '16px' }}>
                <f.icon size={22} style={{ color: f.color }} />
            </div>
            <h3 style={{ fontSize: '15px', fontWeight: 700, marginBottom: '8px' }}>{f.title}</h3>
            <p style={{ fontSize: '13px', color: 'var(--c-muted)', lineHeight: 1.6 }}>{f.desc}</p>
        </div>
    )
}