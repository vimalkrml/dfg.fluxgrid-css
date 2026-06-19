import { Package, Heart } from 'lucide-react'
import useInView from '../hooks/useInView'

const links = [
    {
        group: 'Package',
        items: [
            { label: 'npm', href: 'https://www.npmjs.com/package/@datafluxgrid/fluxgrid-css' },
            { label: 'GitHub', href: 'https://github.com/vimalkrml/fluxgrid-css' },
            { label: 'Changelog', href: '#tokens' },
            { label: 'License (MIT)', href: 'https://github.com/vimalkrml/fluxgrid-css/blob/main/LICENSE' },
        ],
    },
    {
        group: 'Docs',
        items: [
            { label: 'Quick Start', href: '#quick-start' },
            { label: 'Grid System', href: '#grid' },
            { label: 'Components', href: '#components' },
            { label: 'Animations', href: '#animations' },
            { label: 'Tokens', href: '#tokens' },
        ],
    },
    {
        group: 'Datafluxgrid',
        items: [
            { label: 'About', href: 'https://www.linkedin.com/company/datafluxgrid' },
            { label: 'LinkedIn', href: 'https://www.linkedin.com/company/datafluxgrid' },
            { label: 'Author', href: 'https://github.com/vimalkrml' },
        ],
    },
]

const LinkedInIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="currentColor"
    >
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
)

const GitHubIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="currentColor"
    >
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.205 11.387.6.113.82-.26.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.468-2.38 1.235-3.22-.123-.3-.535-1.52.117-3.16 0 0 1.008-.322 3.3 1.23.96-.267 1.98-.399 3-.399s2.04.132 3 .399c2.292-1.552 3.3-1.23 3.3-1.23.653 1.64.24 2.86.118 3.16.768.84 1.233 1.91 1.233 3.22 0 4.61-2.804 5.62-5.476 5.92.43.37.824 1.102.824 2.22 0 1.602-.015 2.894-.015 3.287 0 .322.216.694.825.57C20.565 21.795 24 17.298 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
)

export default function Footer() {
    const { ref, inView } = useInView()

    return (
        <footer style={{ borderTop: '1px solid var(--c-border)', marginTop: '96px' }}>
            <div className="c-container" style={{ padding: '64px 0 32px' }}>
                <div
                    ref={ref}
                    className={inView ? 'c-animate-fade-in-up' : ''}
                    style={{
                        opacity: inView ? undefined : 0,
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
                        gap: '48px',
                        marginBottom: '48px'
                    }}
                >
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                            <div style={{
                                width: '32px',
                                height: '32px',
                                borderRadius: '8px',
                                backgroundColor: 'var(--c-primary-600)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <span style={{ color: 'white', fontWeight: 900, fontSize: '14px' }}>F</span>
                            </div>
                            <span style={{ fontWeight: 700, fontSize: '17px' }}>
                                FluxGrid <span style={{ color: 'var(--c-primary-500)' }}>CSS</span>
                            </span>
                        </div>
                        <p style={{
                            fontSize: '13px',
                            color: 'var(--c-muted)',
                            lineHeight: 1.7,
                            marginBottom: '20px'
                        }}>
                            A utility-first CSS framework with zero build step. Built by Datafluxgrid.
                        </p>
                        <div style={{ display: 'flex', gap: '8px' }}>
                            <a
                                href="https://github.com/datafluxgrid"
                                target="_blank"
                                rel="noreferrer"
                                className="c-btn c-btn-ghost c-btn-icon-sm c-hover-scale c-transition"
                                aria-label="GitHub"
                            >
                                <GitHubIcon />
                            </a>
                            <a
                                href="https://www.npmjs.com/package/@datafluxgrid/fluxgrid-css"
                                target="_blank"
                                rel="noreferrer"
                                className="c-btn c-btn-ghost c-btn-icon-sm c-hover-scale c-transition"
                                aria-label="npm"
                            >
                                <Package size={18} />
                            </a>
                            <a
                                href="https://www.linkedin.com/company/datafluxgrid"
                                target="_blank"
                                rel="noreferrer"
                                className="c-btn c-btn-ghost c-btn-icon-sm c-hover-scale c-transition"
                                aria-label="LinkedIn"
                            >
                                <LinkedInIcon />
                            </a>
                        </div>
                    </div>

                    {links.map((group) => (
                        <div key={group.group}>
                            <h4 style={{
                                fontSize: '12px',
                                fontWeight: 700,
                                textTransform: 'uppercase',
                                letterSpacing: '0.06em',
                                marginBottom: '16px',
                                color: 'var(--c-fg)'
                            }}>
                                {group.group}
                            </h4>
                            <ul style={{
                                listStyle: 'none',
                                padding: 0,
                                margin: 0,
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '10px'
                            }}>
                                {group.items.map((item) => (
                                    <li key={item.label}>
                                        <a
                                            href={item.href}
                                            target={item.href.startsWith('http') ? '_blank' : undefined}
                                            rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                                            style={{
                                                fontSize: '13px',
                                                color: 'var(--c-muted)',
                                                textDecoration: 'none',
                                                transition: 'color 200ms'
                                            }}
                                            onMouseEnter={(e) => (e.target.style.color = 'var(--c-fg)')}
                                            onMouseLeave={(e) => (e.target.style.color = 'var(--c-muted)')}
                                        >
                                            {item.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div style={{
                    borderTop: '1px solid var(--c-border)',
                    paddingTop: '24px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: '12px'
                }}>
                    <p style={{ fontSize: '13px', color: 'var(--c-muted)' }}>
                        © {new Date().getFullYear()} Datafluxgrid. All rights reserved.
                    </p>
                    <p style={{
                        fontSize: '13px',
                        color: 'var(--c-muted)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px'
                    }}>
                        Built with <Heart size={13} style={{ color: 'var(--c-error-500)' }} /> by{' '}
                        <a
                            href="https://github.com/datafluxgrid"
                            target="_blank"
                            rel="noreferrer"
                            style={{ color: 'var(--c-primary-500)', fontWeight: 500 }}
                        >
                            Datafluxgrid
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    )
}