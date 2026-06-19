import { useState, useEffect } from 'react'
import { Moon, Sun, GitBranch, Package, Type, X, Menu } from 'lucide-react'

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

export default function Navbar({ theme, toggleTheme }) {
    const [selectedFont, setSelectedFont] = useState(fonts[1])
    const [menuOpen, setMenuOpen] = useState(false)
    const [fontOpen, setFontOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1024)

    useEffect(() => {
        document.documentElement.style.setProperty('--c-font-sans', selectedFont.family)
        document.body.style.fontFamily = 'var(--c-font-sans)'
    }, [selectedFont])

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20)
        const onResize = () => {
            setIsMobile(window.innerWidth < 1024)
            if (window.innerWidth >= 1024) setMenuOpen(false)
        }
        window.addEventListener('scroll', onScroll)
        window.addEventListener('resize', onResize)
        return () => {
            window.removeEventListener('scroll', onScroll)
            window.removeEventListener('resize', onResize)
        }
    }, [])

    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = ''
        }
        return () => { document.body.style.overflow = '' }
    }, [menuOpen])

    const handleFontChange = (f) => {
        setSelectedFont(f)
        setFontOpen(false)
    }

    return (
        <>
            <nav
                className="c-sticky c-top-0 c-z-100 c-transition-all"
                style={{
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)',
                    backgroundColor: scrolled
                        ? 'color-mix(in srgb, var(--c-bg) 95%, transparent)'
                        : 'color-mix(in srgb, var(--c-bg) 85%, transparent)',
                    borderBottom: `1px solid ${scrolled ? 'var(--c-border)' : 'transparent'}`,
                    boxShadow: scrolled ? 'var(--c-shadow-sm)' : 'none',
                }}
            >
                <div
                    style={{
                        maxWidth: '1200px',
                        margin: '0 auto',
                        padding: '0 24px',
                        height: '60px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: '16px',
                    }}
                >
                    {/* Logo with favicon SVG */}
                    <a
                        href="#hero"
                        style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none', flexShrink: 0 }}
                    >
                        <div
                            className="c-animate-pulse-scale"
                            style={{
                                width: '32px',
                                height: '32px',
                                borderRadius: '8px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexShrink: 0,
                                overflow: 'hidden',
                            }}
                        >
                            <img
                                src="/favicon.svg"
                                alt="FluxGrid CSS Logo"
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'contain',
                                }}
                            />
                        </div>
                        <span style={{ fontWeight: 700, fontSize: '17px', color: 'var(--c-fg)', whiteSpace: 'nowrap' }}>
                            FluxGrid <span style={{ color: 'var(--c-primary-500)' }}>CSS</span>
                        </span>
                    </a>

                    {/* Desktop nav links — only on lg+ */}
                    {!isMobile && (
                        <div style={{ display: 'flex', alignItems: 'center', gap: '4px', flex: 1, justifyContent: 'center' }}>
                            {navLinks.map((item) => (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    style={{
                                        padding: '6px 10px',
                                        fontSize: '13px',
                                        fontWeight: 500,
                                        color: 'var(--c-muted)',
                                        textDecoration: 'none',
                                        borderRadius: '6px',
                                        transition: 'color 200ms, background 200ms',
                                        whiteSpace: 'nowrap',
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.color = 'var(--c-fg)'
                                        e.currentTarget.style.backgroundColor = 'var(--c-gray-100)'
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.color = 'var(--c-muted)'
                                        e.currentTarget.style.backgroundColor = 'transparent'
                                    }}
                                >
                                    {item.label}
                                </a>
                            ))}
                        </div>
                    )}

                    {/* Right actions */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexShrink: 0 }}>

                        {/* Font picker — desktop only */}
                        {!isMobile && (
                            <div style={{ position: 'relative' }}>
                                <button
                                    onClick={() => setFontOpen((v) => !v)}
                                    style={{
                                        display: 'flex', alignItems: 'center', gap: '5px',
                                        padding: '6px 10px', borderRadius: '8px',
                                        border: '1px solid var(--c-border)',
                                        backgroundColor: fontOpen ? 'var(--c-gray-100)' : 'transparent',
                                        color: 'var(--c-muted)', cursor: 'pointer',
                                        fontSize: '12px', fontWeight: 500,
                                        transition: 'all 200ms',
                                    }}
                                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--c-gray-100)'}
                                    onMouseLeave={(e) => { if (!fontOpen) e.currentTarget.style.backgroundColor = 'transparent' }}
                                >
                                    <Type size={13} />
                                    <span style={{ fontFamily: selectedFont.family }}>{selectedFont.label}</span>
                                </button>

                                {fontOpen && (
                                    <>
                                        <div
                                            onClick={() => setFontOpen(false)}
                                            style={{ position: 'fixed', inset: 0, zIndex: 98 }}
                                        />
                                        <div
                                            className="c-animate-fade-in-down"
                                            style={{
                                                position: 'absolute', top: 'calc(100% + 8px)', right: 0,
                                                width: '200px', zIndex: 99,
                                                backgroundColor: 'var(--c-bg)',
                                                border: '1px solid var(--c-border)',
                                                borderRadius: '12px',
                                                boxShadow: 'var(--c-shadow-xl)',
                                                padding: '6px',
                                                maxHeight: '320px',
                                                overflowY: 'auto',
                                            }}
                                        >
                                            {fonts.map((f) => (
                                                <button
                                                    key={f.label}
                                                    onClick={() => handleFontChange(f)}
                                                    style={{
                                                        display: 'block', width: '100%',
                                                        padding: '8px 12px', textAlign: 'left',
                                                        borderRadius: '6px', border: 'none', cursor: 'pointer',
                                                        fontFamily: f.family, fontSize: '13px',
                                                        backgroundColor: selectedFont.label === f.label ? 'var(--c-primary-50)' : 'transparent',
                                                        color: selectedFont.label === f.label ? 'var(--c-primary-700)' : 'var(--c-fg)',
                                                        fontWeight: selectedFont.label === f.label ? 600 : 400,
                                                        transition: 'background 150ms',
                                                    }}
                                                    onMouseEnter={(e) => { if (selectedFont.label !== f.label) e.currentTarget.style.backgroundColor = 'var(--c-gray-100)' }}
                                                    onMouseLeave={(e) => { if (selectedFont.label !== f.label) e.currentTarget.style.backgroundColor = 'transparent' }}
                                                >
                                                    {f.label}
                                                </button>
                                            ))}
                                        </div>
                                    </>
                                )}
                            </div>
                        )}

                        {/* GitHub — desktop only */}
                        {!isMobile && (
                            <a
                                href="https://github.com/vimalkrml/Dev-Template"
                                target="_blank"
                                rel="noreferrer"
                                style={{
                                    display: 'flex', alignItems: 'center', gap: '5px',
                                    padding: '6px 10px', borderRadius: '8px',
                                    border: '1px solid var(--c-border)',
                                    backgroundColor: 'transparent',
                                    color: 'var(--c-muted)',
                                    fontSize: '13px', fontWeight: 500,
                                    textDecoration: 'none',
                                    transition: 'all 200ms',
                                }}
                                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'var(--c-gray-100)'; e.currentTarget.style.color = 'var(--c-fg)' }}
                                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = 'var(--c-muted)' }}
                            >
                                <GitBranch size={15} />
                                GitHub
                            </a>
                        )}

                        {/* npm — always visible */}
                        <a
                            href="https://www.npmjs.com/package/@datafluxgrid/fluxgrid-css"
                            target="_blank"
                            rel="noreferrer"
                            className="c-btn c-btn-primary c-btn-sm"
                            style={{ display: 'flex', alignItems: 'center', gap: '5px' }}
                        >
                            <Package size={14} />
                            {!isMobile && 'npm'}
                        </a>

                        {/* Theme toggle — always visible */}
                        <button
                            onClick={toggleTheme}
                            style={{
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                width: '36px', height: '36px', borderRadius: '8px',
                                border: '1px solid var(--c-border)',
                                backgroundColor: 'transparent', cursor: 'pointer',
                                color: 'var(--c-muted)', transition: 'all 200ms',
                            }}
                            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'var(--c-gray-100)'; e.currentTarget.style.color = 'var(--c-fg)' }}
                            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = 'var(--c-muted)' }}
                            aria-label="Toggle theme"
                        >
                            {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
                        </button>

                        {/* Hamburger — mobile only */}
                        {isMobile && (
                            <button
                                onClick={() => setMenuOpen((v) => !v)}
                                style={{
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    width: '36px', height: '36px', borderRadius: '8px',
                                    border: '1px solid var(--c-border)',
                                    backgroundColor: menuOpen ? 'var(--c-gray-100)' : 'transparent',
                                    cursor: 'pointer', color: 'var(--c-fg)', transition: 'all 200ms',
                                }}
                                aria-label="Menu"
                            >
                                {menuOpen ? <X size={18} /> : <Menu size={18} />}
                            </button>
                        )}
                    </div>
                </div>
            </nav>

            {/* Mobile drawer */}
            {isMobile && menuOpen && (
                <>
                    <div
                        onClick={() => setMenuOpen(false)}
                        className="c-animate-fade-in"
                        style={{
                            position: 'fixed', inset: 0, zIndex: 98,
                            backgroundColor: 'rgba(0,0,0,0.4)',
                            backdropFilter: 'blur(4px)',
                        }}
                    />
                    <div
                        className="c-animate-slide-in-right"
                        style={{
                            position: 'fixed', top: 0, right: 0, bottom: 0,
                            width: 'min(320px, 85vw)', zIndex: 99,
                            backgroundColor: 'var(--c-bg)',
                            borderLeft: '1px solid var(--c-border)',
                            boxShadow: 'var(--c-shadow-2xl)',
                            display: 'flex', flexDirection: 'column',
                            overflowY: 'auto',
                        }}
                    >
                        {/* Drawer header */}
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 20px', borderBottom: '1px solid var(--c-border)' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <img
                                    src="/favicon.svg"
                                    alt="FluxGrid CSS Logo"
                                    style={{
                                        width: '28px',
                                        height: '28px',
                                        objectFit: 'contain',
                                    }}
                                />
                                <span style={{ fontWeight: 700, fontSize: '16px' }}>
                                    FluxGrid <span style={{ color: 'var(--c-primary-500)' }}>CSS</span>
                                </span>
                            </div>
                            <button
                                onClick={() => setMenuOpen(false)}
                                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '32px', height: '32px', borderRadius: '8px', border: '1px solid var(--c-border)', backgroundColor: 'transparent', cursor: 'pointer', color: 'var(--c-fg)' }}
                            >
                                <X size={16} />
                            </button>
                        </div>

                        {/* Nav links */}
                        <div style={{ padding: '12px 12px' }}>
                            {navLinks.map((item) => (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    onClick={() => setMenuOpen(false)}
                                    style={{
                                        display: 'block', padding: '12px 12px',
                                        fontSize: '15px', fontWeight: 500,
                                        color: 'var(--c-fg)', textDecoration: 'none',
                                        borderRadius: '8px', transition: 'background 150ms',
                                        marginBottom: '2px',
                                    }}
                                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--c-gray-100)'}
                                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                                >
                                    {item.label}
                                </a>
                            ))}
                        </div>

                        {/* Font selector */}
                        <div style={{ padding: '16px 20px', borderTop: '1px solid var(--c-border)' }}>
                            <div style={{ fontSize: '11px', fontWeight: 700, color: 'var(--c-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '10px' }}>
                                Font
                            </div>
                            <select
                                className="c-select"
                                value={selectedFont.label}
                                onChange={(e) => {
                                    const f = fonts.find((f) => f.label === e.target.value)
                                    if (f) setSelectedFont(f)
                                }}
                            >
                                {fonts.map((f) => (
                                    <option key={f.label} value={f.label}>{f.label}</option>
                                ))}
                            </select>
                        </div>

                        {/* Bottom links */}
                        <div style={{ marginTop: 'auto', padding: '16px 20px', borderTop: '1px solid var(--c-border)', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                            <a
                                href="https://github.com/vimalkrml/Dev-Template"
                                target="_blank"
                                rel="noreferrer"
                                style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: 'var(--c-muted)', textDecoration: 'none' }}
                            >
                                <GitBranch size={16} /> GitHub
                            </a>
                            <a
                                href="https://www.npmjs.com/package/@datafluxgrid/fluxgrid-css"
                                target="_blank"
                                rel="noreferrer"
                                style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: 'var(--c-muted)', textDecoration: 'none' }}
                            >
                                <Package size={16} /> npm package
                            </a>
                        </div>
                    </div>
                </>
            )}
        </>
    )
}