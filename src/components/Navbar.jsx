import { Moon, Sun, GitBranch, Package } from 'lucide-react'

const navLinks = [
    { label: 'Why', href: '#why' },
    { label: 'Features', href: '#features' },
    { label: 'Quick Start', href: '#quick-start' },
    { label: 'Grid', href: '#grid' },
    { label: 'Components', href: '#components' },
    { label: 'Animations', href: '#animations' },
    { label: 'Tokens', href: '#tokens' },
]

export default function Navbar({ theme, toggleTheme }) {
    return (
        <nav
            className="c-sticky c-top-0 c-z-100 c-border-b c-border-base"
            style={{
                backdropFilter: 'blur(12px)',
                backgroundColor: 'color-mix(in srgb, var(--c-bg) 85%, transparent)',
            }}
        >
            <div className="c-container c-flex c-items-center c-justify-between c-py-4">

                <a href="#hero" className="c-flex c-items-center c-gap-2">
                    <div className="c-size-8 c-rounded-md c-bg-primary-600 c-flex c-items-center c-justify-center">
                        <span className="c-text-white c-font-bold c-text-sm">F</span>
                    </div>
                    <span className="c-font-bold c-text-lg">
                        FluxGrid <span className="c-text-primary-500">CSS</span>
                    </span>
                </a>

                <div className="c-hidden c-md-d-flex c-items-center c-gap-8">
                    {navLinks.map((item) => (
                        <a
                            key={item.label}
                            href={item.href}
                            className="c-text-sm c-text-muted c-transition-colors c-cursor-pointer"
                        >
                            {item.label}
                        </a>
                    ))}
                </div>

                <div className="c-flex c-items-center c-gap-3">
                    <a
                        href="https://github.com/datafluxgrid/fluxgrid-css"
                        target="_blank"
                        rel="noreferrer"
                        className="c-btn c-btn-ghost c-btn-sm c-hidden c-md-d-flex c-items-center c-gap-2"
                    >
                        <GitBranch size={16} />
                        GitHub
                    </a>
                    <a
                        href="https://www.npmjs.com/package/@datafluxgrid/fluxgrid-css"
                        target="_blank"
                        rel="noreferrer"
                        className="c-btn c-btn-primary c-btn-sm c-flex c-items-center c-gap-2"
                    >
                        <Package size={16} />
                        npm
                    </a>
                    <button
                        onClick={toggleTheme}
                        className="c-btn c-btn-ghost c-btn-icon"
                        aria-label="Toggle theme"
                    >
                        {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
                    </button>
                </div>

            </div>
        </nav>
    )
}