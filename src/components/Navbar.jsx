import { useState, useEffect } from 'react'
import { Moon, Sun, Package, Type, X, Menu } from 'lucide-react'

function GithubIcon({ size = 17 }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.605-2.665-.305-5.467-1.334-5.467-5.93 0-1.31.467-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
        </svg>
    )
}

const fonts = [
    { label: 'System', family: 'system-ui, -apple-system, sans-serif' },
    { label: 'Inter', family: '"Inter", sans-serif' },
    { label: 'Poppins', family: '"Poppins", sans-serif' },
    { label: 'Roboto', family: '"Roboto", sans-serif' },
    { label: 'Montserrat', family: '"Montserrat", sans-serif' },
    { label: 'DM Sans', family: '"DM Sans", sans-serif' },
    { label: 'Space Grotesk', family: '"Space Grotesk", sans-serif' },
    { label: 'Outfit', family: '"Outfit", sans-serif' },
    { label: 'Nunito', family: '"Nunito", sans-serif' },
    { label: 'Geist', family: '"Geist", sans-serif' },
    { label: 'Plus Jakarta', family: '"Plus Jakarta Sans", sans-serif' },
    { label: 'Playfair', family: '"Playfair Display", serif' },
    { label: 'Merriweather', family: '"Merriweather", serif' },
    { label: 'Fira Code', family: '"Fira Code", monospace' },
]

const navLinks = [
    { label: 'Why', href: '#why' },
    { label: 'Features', href: '#features' },
    { label: 'Quick Start', href: '#quick-start' },
    { label: 'Grid', href: '#grid' },
    { label: 'Components', href: '#components' },
    { label: 'Animations', href: '#animations' },
    { label: 'Tokens', href: '#tokens' },
]

function getIsMobile() {
    if (typeof window === 'undefined') return false
    return window.innerWidth < 1024
}

export default function Navbar({ theme, toggleTheme }) {
    const [selectedFont, setSelectedFont] = useState(fonts[1])
    const [menuOpen, setMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const [isMobile, setIsMobile] = useState(getIsMobile)

    useEffect(() => {
        document.documentElement.style.setProperty('--c-font-sans', selectedFont.family)
    }, [selectedFont])

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20)
        const onResize = () => {
            const mobile = window.innerWidth < 1024
            setIsMobile(mobile)
            if (!mobile) setMenuOpen(false)
        }
        window.addEventListener('scroll', onScroll, { passive: true })
        window.addEventListener('resize', onResize)
        return () => {
            window.removeEventListener('scroll', onScroll)
            window.removeEventListener('resize', onResize)
        }
    }, [])

    useEffect(() => {
        document.body.style.overflow = menuOpen ? 'hidden' : ''
        return () => { document.body.style.overflow = '' }
    }, [menuOpen])

    const handleFontChange = (f) => {
        setSelectedFont(f)
    }

    return (
        <>
            <nav className={`c-sticky c-top-0 c-z-100 c-transition-colors c-border-b ${scrolled ? 'c-bg-base c-shadow-sm c-border-base' : 'c-border-transparent'}`}>
                <div className="c-container c-flex c-items-center c-justify-between c-gap-4 c-py-3">

                    <a href="#hero" className="c-flex c-items-center c-gap-2 c-flex-shrink-0">
                        <img src="/favicon.svg" alt="FluxGrid CSS" className="c-size-8 c-flex-shrink-0" />
                        <span className="c-font-bold c-text-lg c-whitespace-nowrap">
                            FluxGrid <span className="c-text-primary-500">CSS</span>
                        </span>
                    </a>

                    {!isMobile && (
                        <div className="c-flex c-items-center c-gap-1 c-flex-1 c-justify-center">
                            {navLinks.map((item) => (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    className="c-px-2 c-py-1 c-text-xs c-font-medium c-text-muted c-rounded-md c-transition-colors c-hover-opacity"
                                >
                                    {item.label}
                                </a>
                            ))}
                        </div>
                    )}

                    <div className="c-flex c-items-center c-gap-2 c-flex-shrink-0">

                        {!isMobile && (
                            <div className="c-relative">
                                <div className="c-select-wrap" style={{ width: '190px' }}>
                                    <input type="checkbox" className="c-select-toggle" id="desktop-font-toggle" />
                                    <label className="c-select-trigger c-btn-sm" htmlFor="desktop-font-toggle">
                                        <Type size={13} />
                                        <span className="c-select-value" style={{ fontFamily: selectedFont.family }}>
                                            {selectedFont.label}
                                        </span>
                                        <svg className="c-select-arrow" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="m6 9 6 6 6-6" />
                                        </svg>
                                    </label>

                                    <label className="c-select-backdrop" htmlFor="desktop-font-toggle"></label>

                                    <ul className="c-select-dropdown">
                                        {fonts.map((f) => (
                                            <li
                                                key={f.label}
                                                className={`c-select-item${selectedFont.label === f.label ? ' c-select-item-active' : ''}`}
                                                style={{ fontFamily: f.family }}
                                                onClick={() => {
                                                    handleFontChange(f)
                                                    document.getElementById('desktop-font-toggle').checked = false
                                                }}
                                            >
                                                {f.label}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        )}

                        {!isMobile && (
                            <a
                                href="https://github.com/vimalkrml/Dev-Template"
                                target="_blank"
                                rel="noreferrer"
                                className="c-flex c-items-center c-gap-2 c-px-3 c-py-2 c-rounded-lg c-border c-border-base c-text-xs c-font-medium c-text-muted c-transition-colors c-hover-opacity"
                            >
                                <GithubIcon size={15} />
                                GitHub
                            </a>
                        )}

                        <a
                            href="https://www.npmjs.com/package/@datafluxgrid/fluxgrid-css"
                            target="_blank"
                            rel="noreferrer"
                            className="c-btn c-btn-primary c-btn-sm c-flex c-items-center c-gap-1"
                        >
                            <Package size={14} />
                            {!isMobile && 'npm'}
                        </a>

                        <button onClick={toggleTheme} className="c-btn c-btn-ghost c-btn-icon" aria-label="Toggle theme">
                            {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
                        </button>

                        {isMobile && (
                            <button
                                onClick={() => setMenuOpen((v) => !v)}
                                className={`c-btn c-btn-icon c-border c-border-base ${menuOpen ? 'c-bg-gray-100' : ''}`}
                                aria-label="Menu"
                            >
                                {menuOpen ? <X size={18} /> : <Menu size={18} />}
                            </button>
                        )}
                    </div>
                </div>
            </nav>

            {isMobile && menuOpen && (
                <>
                    <div
                        onClick={() => setMenuOpen(false)}
                        className="c-fixed c-inset-0 c-z-50 c-animate-fade-in"
                        style={{ backgroundColor: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(4px)' }}
                    />
                    <div
                        className="c-fixed c-top-0 c-right-0 c-bottom-0 c-z-100 c-animate-slide-in-right c-bg-base c-shadow-2xl c-overflow-y-auto c-flex c-flex-col c-border-l c-border-base"
                        style={{ width: 'min(320px, 85vw)' }}
                    >
                        <div className="c-flex c-items-center c-justify-between c-px-5 c-py-4 c-border-b c-border-base">
                            <div className="c-flex c-items-center c-gap-2">
                                <span className="c-size-7 c-rounded-md c-flex c-items-center c-justify-center c-bg-primary-600">
                                    <span className="c-text-white c-font-black c-text-sm">F</span>
                                </span>
                                <span className="c-font-bold c-text-base">FluxGrid <span className="c-text-primary-500">CSS</span></span>
                            </div>
                            <button onClick={() => setMenuOpen(false)} className="c-btn c-btn-icon-sm c-border c-border-base" aria-label="Close menu">
                                <X size={16} />
                            </button>
                        </div>

                        <div className="c-p-3">
                            {navLinks.map((item) => (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    onClick={() => setMenuOpen(false)}
                                    className="c-block c-text-fg c-rounded-lg c-text-base c-font-medium c-px-3 c-py-3 c-mb-1 c-hover-opacity"
                                >
                                    {item.label}
                                </a>
                            ))}
                        </div>

                        <div className="c-px-5 c-py-4 c-border-t c-border-base">
                            <div className="c-text-xs c-font-bold c-text-muted c-uppercase c-tracking-wide c-mb-3">Font</div>
                            <div className="c-select-wrap">
                                <input type="checkbox" className="c-select-toggle" id="mobile-font-toggle" />
                                <label className="c-select-trigger" htmlFor="mobile-font-toggle">
                                    <span className="c-select-value" style={{ fontFamily: selectedFont.family }}>
                                        {selectedFont.label}
                                    </span>
                                    <svg className="c-select-arrow" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="m6 9 6 6 6-6" />
                                    </svg>
                                </label>

                                <label className="c-select-backdrop" htmlFor="mobile-font-toggle"></label>

                                <ul className="c-select-dropdown">
                                    {fonts.map((f) => (
                                        <li
                                            key={f.label}
                                            className={`c-select-item${selectedFont.label === f.label ? ' c-select-item-active' : ''}`}
                                            style={{ fontFamily: f.family }}
                                            onClick={() => {
                                                setSelectedFont(f)
                                                document.getElementById('mobile-font-toggle').checked = false
                                            }}
                                        >
                                            {f.label}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="c-px-5 c-py-4 c-border-t c-border-base c-flex c-flex-col c-gap-3" style={{ marginTop: 'auto' }}>
                            <a href="https://github.com/vimalkrml/Dev-Template" target="_blank" rel="noreferrer" className="c-flex c-items-center c-gap-2 c-text-sm c-text-muted">
                                <GithubIcon size={16} /> GitHub
                            </a>
                            <a href="https://www.npmjs.com/package/@datafluxgrid/fluxgrid-css" target="_blank" rel="noreferrer" className="c-flex c-items-center c-gap-2 c-text-sm c-text-muted">
                                <Package size={16} /> npm package
                            </a>
                        </div>
                    </div>
                </>
            )}
        </>
    )
}