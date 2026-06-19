const links = [
    {
        group: 'Package',
        items: [
            { label: 'npm', href: 'https://www.npmjs.com/package/@datafluxgrid/fluxgrid-css' },
            { label: 'GitHub', href: 'https://github.com/datafluxgrid/fluxgrid-css' },
            { label: 'Changelog', href: '#tokens' },
            { label: 'License (MIT)', href: 'https://github.com/datafluxgrid/fluxgrid-css/blob/main/LICENSE' },
        ],
    },
    {
        group: 'Docs',
        items: [
            { label: 'Quick Start', href: '#quick-start' },
            { label: 'Grid System', href: '#grid' },
            { label: 'Components', href: '#components' },
            { label: 'Animations', href: '#animations' },
        ],
    },
    {
        group: 'Datafluxgrid',
        items: [
            { label: 'About', href: 'https://www.linkedin.com/company/datafluxgrid' },
            { label: 'LinkedIn', href: 'https://www.linkedin.com/company/datafluxgrid' },
            { label: 'Author', href: 'https://github.com/datafluxgrid' },
        ],
    },
]

export default function Footer() {
    return (
        <footer className="c-border-t c-border-base c-mt-24">
            <div className="c-container c-py-16">

                <div className="c-grid c-gap-12" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))' }}>

                    <div>
                        <div className="c-flex c-items-center c-gap-2 c-mb-4">
                            <div className="c-size-8 c-rounded-md c-bg-primary-600 c-flex c-items-center c-justify-center">
                                <span className="c-text-white c-font-bold c-text-sm">F</span>
                            </div>
                            <span className="c-font-bold c-text-lg">
                                FluxGrid <span className="c-text-primary-500">CSS</span>
                            </span>
                        </div>
                        <p className="c-text-sm c-text-muted c-leading-relaxed c-mb-6">
                            A utility-first CSS framework with zero build step. Built by Datafluxgrid.
                        </p>
                        <div className="c-flex c-items-center c-gap-3">
                            <a
                                href="https://github.com/datafluxgrid/fluxgrid-css"
                                target="_blank"
                                rel="noreferrer"
                                className="c-btn c-btn-ghost c-btn-icon-sm"
                                aria-label="GitHub"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.205 11.387.6.113.82-.26.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.468-2.38 1.235-3.22-.123-.3-.535-1.52.117-3.16 0 0 1.008-.322 3.3 1.23.96-.267 1.98-.399 3-.399s2.04.132 3 .399c2.292-1.552 3.3-1.23 3.3-1.23.653 1.64.24 2.86.118 3.16.768.84 1.233 1.91 1.233 3.22 0 4.61-2.804 5.62-5.476 5.92.43.37.824 1.102.824 2.22 0 1.602-.015 2.894-.015 3.287 0 .322.216.694.825.57C20.565 21.795 24 17.298 24 12c0-6.627-5.373-12-12-12z" />
                                </svg>
                            </a>
                            <a
                                href="https://www.npmjs.com/package/@datafluxgrid/fluxgrid-css"
                                target="_blank"
                                rel="noreferrer"
                                className="c-btn c-btn-ghost c-btn-icon-sm"
                                aria-label="npm"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M0 7.334v8.332h4.723V8.985h2.07v6.681h1.468V7.334H0zm6.796 0v8.332h3.16V9.294h1.94v6.372h1.468V7.334H6.796zm7.344 0v8.332h4.722V8.985h2.07v6.681h1.468V7.334h-8.26z" />
                                </svg>
                            </a>
                            <a
                                href="https://www.linkedin.com/company/datafluxgrid"
                                target="_blank"
                                rel="noreferrer"
                                className="c-btn c-btn-ghost c-btn-icon-sm"
                                aria-label="LinkedIn"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {links.map((group) => (
                        <div key={group.group}>
                            <h4 className="c-text-sm c-font-semibold c-mb-4 c-tracking-wide c-uppercase">
                                {group.group}
                            </h4>
                            <ul className="c-flex c-flex-col c-gap-3">
                                {group.items.map((item) => (
                                    <li key={item.label}>
                                        <a
                                            href={item.href}
                                            target={item.href.startsWith('http') ? '_blank' : undefined}
                                            rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                                            className="c-text-sm c-text-muted c-transition-colors c-cursor-pointer"
                                        >
                                            {item.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                </div>

                <div className="c-border-t c-border-base c-mt-12 c-pt-8 c-flex c-items-center c-justify-between" style={{ flexWrap: 'wrap', gap: '12px' }}>
                    <p className="c-text-sm c-text-muted">
                        © {new Date().getFullYear()} Datafluxgrid. All rights reserved.
                    </p>
                    <p className="c-text-sm c-text-muted c-flex c-items-center c-gap-1">
                        Built with{' '}
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="c-text-error-500">
                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                        </svg>
                        {' '}by{' '}
                        <a
                            href="https://github.com/datafluxgrid"
                            target="_blank"
                            rel="noreferrer"
                            className="c-text-primary-500 c-font-medium"
                        >
                            Datafluxgrid
                        </a>
                    </p>
                </div>

            </div>
        </footer>
    )
}