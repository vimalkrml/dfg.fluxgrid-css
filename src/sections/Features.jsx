import {
    Zap,
    Moon,
    Palette,
    Package,
    Grid,
    Type,
    Layers,
    Sparkles,
    FormInput,
    Scroll,
    Printer,
    Shield,
    Blocks,
    Ruler,
} from 'lucide-react'

const features = [
    {
        icon: Zap,
        title: 'Zero Build Step',
        desc: 'No CLI, no config, no PostCSS. One link tag and you are building.',
        color: 'c-text-warning-500',
        bg: 'c-bg-warning-50',
    },
    {
        icon: Moon,
        title: 'Dark Mode Built-in',
        desc: 'Toggle via data-theme="dark" or auto-detect via prefers-color-scheme.',
        color: 'c-text-primary-500',
        bg: 'c-bg-primary-50',
    },
    {
        icon: Palette,
        title: 'CSS Variable Theming',
        desc: 'Every token is a CSS variable. Override your brand color in one line.',
        color: 'c-text-error-500',
        bg: 'c-bg-error-50',
    },
    {
        icon: Package,
        title: 'Modular Imports',
        desc: 'Import the full bundle or only the modules you need — grid, spacing, forms.',
        color: 'c-text-success-500',
        bg: 'c-bg-success-50',
    },
    {
        icon: Grid,
        title: 'Flexbox + CSS Grid',
        desc: '12-column responsive grid with sm, md, lg, xl, 2xl breakpoints built in.',
        color: 'c-text-info-500',
        bg: 'c-bg-info-50',
    },
    {
        icon: Ruler,
        title: 'Full Spacing System',
        desc: 'Complete margin and padding scale from 0 to 128px in every direction.',
        color: 'c-text-warning-600',
        bg: 'c-bg-warning-50',
    },
    {
        icon: Type,
        title: 'Typography Utilities',
        desc: 'Font size, weight, line height, tracking, transform, truncate and more.',
        color: 'c-text-primary-600',
        bg: 'c-bg-primary-50',
    },
    {
        icon: Layers,
        title: 'Color System',
        desc: 'Full palette for text, background, border with semantic tokens per state.',
        color: 'c-text-error-600',
        bg: 'c-bg-error-50',
    },
    {
        icon: Sparkles,
        title: '16 Animations',
        desc: 'Fade, slide, scale, spin, pulse, skeleton, float and more with delay control.',
        color: 'c-text-success-600',
        bg: 'c-bg-success-50',
    },
    {
        icon: FormInput,
        title: 'Form Components',
        desc: 'Inputs, textarea, select, checkbox, radio and button variants — no JS needed.',
        color: 'c-text-info-600',
        bg: 'c-bg-info-50',
    },
    {
        icon: Scroll,
        title: 'Scroll & Snap',
        desc: 'Scroll snap, custom scrollbar, overscroll and touch-action utilities.',
        color: 'c-text-warning-500',
        bg: 'c-bg-warning-50',
    },
    {
        icon: Printer,
        title: 'Print Utilities',
        desc: 'Show, hide, page breaks and print-only elements for documents and reports.',
        color: 'c-text-primary-500',
        bg: 'c-bg-primary-50',
    },
    {
        icon: Shield,
        title: 'Conflict-Free Prefix',
        desc: 'Every class uses c- prefix — safe to drop into any existing project.',
        color: 'c-text-success-500',
        bg: 'c-bg-success-50',
    },
    {
        icon: Blocks,
        title: 'Effects & Filters',
        desc: 'Shadows, blur, brightness, contrast, backdrop-blur and hover utilities.',
        color: 'c-text-error-500',
        bg: 'c-bg-error-50',
    },
]

export default function Features() {
    return (
        <section id="features" className="c-py-24 c-border-t c-border-base">
            <div className="c-container">
                <div className="c-text-center c-mb-16">
                    <h2 className="c-text-4xl c-font-black c-mb-4">
                        Everything you <span className="c-text-primary-500">need</span>
                    </h2>
                    <p className="c-text-lg c-text-muted c-max-w-prose c-mx-auto">
                        14 modules covering every CSS utility you will ever need — from reset to print.
                    </p>
                </div>
                <div className="c-grid c-grid-cols-1 c-gap-4" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))' }}>
                    {features.map((f) => (
                        <div
                            key={f.title}
                            className="c-p-6 c-rounded-xl c-border c-border-base c-transition c-hover-lift"
                            style={{ backgroundColor: 'var(--c-bg)' }}
                        >
                            <div className={`c-inline-flex c-items-center c-justify-center c-size-10 c-rounded-lg c-mb-4 ${f.bg}`}>
                                <f.icon size={20} className={f.color} />
                            </div>
                            <h3 className="c-font-semibold c-text-base c-mb-2">{f.title}</h3>
                            <p className="c-text-sm c-text-muted c-leading-relaxed">{f.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}