import { Package, Heart } from 'lucide-react'
import useInView from '../hooks/useInView'

// Inline SVG Icon Components
function GithubIcon({ size = 16 }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.605-2.665-.305-5.467-1.334-5.467-5.93 0-1.31.467-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
        </svg>
    )
}

function LinkedinIcon({ size = 16 }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
    )
}

const links = [
    {
        group: 'Package', items: [
            { label: 'npm', href: 'https://www.npmjs.com/package/@datafluxgrid/fluxgrid-css' },
            { label: 'GitHub', href: 'https://github.com/vimalkrml/Dev-Template' },
            { label: 'License (MIT)', href: 'https://github.com/vimalkrml/Dev-Template/blob/main/LICENSE' },
        ]
    },
    {
        group: 'Docs', items: [
            { label: 'Quick Start', href: '#quick-start' },
            { label: 'Grid System', href: '#grid' },
            { label: 'Components', href: '#components' },
            { label: 'Animations', href: '#animations' },
        ]
    },
    {
        group: 'Datafluxgrid', items: [
            { label: 'About', href: 'https://www.linkedin.com/company/datafluxgrid' },
            { label: 'LinkedIn', href: 'https://www.linkedin.com/company/datafluxgrid' },
            { label: 'Author', href: 'https://github.com/vimalkrml' },
        ]
    },
]

export default function Footer() {
    const { ref, inView } = useInView()

    return (
        <footer className="c-border-t c-border-base c-mt-20">
            <div className="c-container c-py-12 c-md-py-16">
                <div ref={ref} className={`c-grid c-gap-8 c-mb-10 ${inView ? 'c-animate-fade-in-up' : 'c-opacity-0'}`} style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))' }}>
                    <div>
                        <div className="c-flex c-items-center c-gap-2 c-mb-3">
                            <img src="/favicon.svg" alt="FluxGrid CSS" className="c-size-8" />
                            <span className="c-font-bold c-text-base">FluxGrid <span className="c-text-primary-500">CSS</span></span>
                        </div>
                        <p className="c-text-xs c-text-muted c-leading-relaxed c-mb-4">
                            A utility-first CSS framework with zero build step. Built by Datafluxgrid.
                        </p>
                        <div className="c-flex c-gap-2">
                            <a href="https://github.com/vimalkrml" target="_blank" rel="noreferrer" className="c-btn c-btn-ghost c-btn-icon-sm c-hover-scale c-transition" aria-label="GitHub">
                                <GithubIcon size={16} />
                            </a>
                            <a href="https://www.npmjs.com/package/@datafluxgrid/fluxgrid-css" target="_blank" rel="noreferrer" className="c-btn c-btn-ghost c-btn-icon-sm c-hover-scale c-transition" aria-label="npm">
                                <Package size={16} />
                            </a>
                            <a href="https://www.linkedin.com/company/datafluxgrid" target="_blank" rel="noreferrer" className="c-btn c-btn-ghost c-btn-icon-sm c-hover-scale c-transition" aria-label="LinkedIn">
                                <LinkedinIcon size={16} />
                            </a>
                        </div>
                    </div>

                    {links.map((group) => (
                        <div key={group.group}>
                            <h4 className="c-text-xs c-font-bold c-uppercase c-tracking-wide c-mb-3">{group.group}</h4>
                            <ul className="c-flex c-flex-col c-gap-2" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                {group.items.map((item) => (
                                    <li key={item.label}>
                                        <a
                                            href={item.href}
                                            target={item.href.startsWith('http') ? '_blank' : undefined}
                                            rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                                            className="c-text-xs c-text-muted c-transition-colors c-hover-opacity"
                                        >
                                            {item.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="c-border-t c-border-base c-pt-6 c-flex c-items-center c-justify-between c-gap-3" style={{ flexWrap: 'wrap' }}>
                    <p className="c-text-xs c-text-muted">© {new Date().getFullYear()} Datafluxgrid. All rights reserved.</p>
                    <p className="c-text-xs c-text-muted c-flex c-items-center c-gap-1">
                        Built with <Heart size={12} className="c-text-error-500" /> by{' '}
                        <a href="https://github.com/vimalkrml" target="_blank" rel="noreferrer" className="c-text-primary-500 c-font-medium">Vimal K R</a>
                    </p>
                </div>
            </div>
        </footer>
    )
}