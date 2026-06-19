import { useState } from 'react'

const allAnimations = [
    { name: 'fade-in', class: 'c-animate-fade-in', label: 'Fade In', category: 'Fade' },
    { name: 'fade-out', class: 'c-animate-fade-out', label: 'Fade Out', category: 'Fade' },
    { name: 'fade-in-up', class: 'c-animate-fade-in-up', label: 'Fade In Up', category: 'Fade' },
    { name: 'fade-in-down', class: 'c-animate-fade-in-down', label: 'Fade In Down', category: 'Fade' },
    { name: 'fade-in-left', class: 'c-animate-fade-in-left', label: 'Fade In Left', category: 'Fade' },
    { name: 'fade-in-right', class: 'c-animate-fade-in-right', label: 'Fade In Right', category: 'Fade' },
    { name: 'fade-out-up', class: 'c-animate-fade-out-up', label: 'Fade Out Up', category: 'Fade' },
    { name: 'fade-out-down', class: 'c-animate-fade-out-down', label: 'Fade Out Down', category: 'Fade' },
    { name: 'slide-up', class: 'c-animate-slide-up', label: 'Slide Up', category: 'Slide' },
    { name: 'slide-down', class: 'c-animate-slide-down', label: 'Slide Down', category: 'Slide' },
    { name: 'slide-left', class: 'c-animate-slide-left', label: 'Slide Left', category: 'Slide' },
    { name: 'slide-right', class: 'c-animate-slide-right', label: 'Slide Right', category: 'Slide' },
    { name: 'slide-out-up', class: 'c-animate-slide-out-up', label: 'Slide Out Up', category: 'Slide' },
    { name: 'slide-out-down', class: 'c-animate-slide-out-down', label: 'Slide Out Down', category: 'Slide' },
    { name: 'slide-out-left', class: 'c-animate-slide-out-left', label: 'Slide Out Left', category: 'Slide' },
    { name: 'slide-out-right', class: 'c-animate-slide-out-right', label: 'Slide Out Right', category: 'Slide' },
    { name: 'scale-in', class: 'c-animate-scale-in', label: 'Scale In', category: 'Scale' },
    { name: 'scale-out', class: 'c-animate-scale-out', label: 'Scale Out', category: 'Scale' },
    { name: 'scale-in-x', class: 'c-animate-scale-in-x', label: 'Scale In X', category: 'Scale' },
    { name: 'scale-in-y', class: 'c-animate-scale-in-y', label: 'Scale In Y', category: 'Scale' },
    { name: 'zoom-in', class: 'c-animate-zoom-in', label: 'Zoom In', category: 'Scale' },
    { name: 'zoom-out', class: 'c-animate-zoom-out', label: 'Zoom Out', category: 'Scale' },
    { name: 'flip-x', class: 'c-animate-flip-x', label: 'Flip X', category: 'Flip' },
    { name: 'flip-y', class: 'c-animate-flip-y', label: 'Flip Y', category: 'Flip' },
    { name: 'rotate-in', class: 'c-animate-rotate-in', label: 'Rotate In', category: 'Flip' },
    { name: 'rotate-out', class: 'c-animate-rotate-out', label: 'Rotate Out', category: 'Flip' },
    { name: 'flip-card', class: 'c-animate-flip-card', label: 'Flip Card', category: 'Flip' },
    { name: 'roll-in', class: 'c-animate-roll-in', label: 'Roll In', category: 'Flip' },
    { name: 'spin', class: 'c-animate-spin', label: 'Spin', category: 'Continuous' },
    { name: 'spin-reverse', class: 'c-animate-spin-reverse', label: 'Spin Reverse', category: 'Continuous' },
    { name: 'spin-slow', class: 'c-animate-spin-slow', label: 'Spin Slow', category: 'Continuous' },
    { name: 'ping', class: 'c-animate-ping', label: 'Ping', category: 'Continuous' },
    { name: 'pulse', class: 'c-animate-pulse', label: 'Pulse', category: 'Continuous' },
    { name: 'float', class: 'c-animate-float', label: 'Float', category: 'Continuous' },
    { name: 'float-x', class: 'c-animate-float-x', label: 'Float X', category: 'Continuous' },
    { name: 'glow', class: 'c-animate-glow', label: 'Glow', category: 'Continuous' },
    { name: 'morph', class: 'c-animate-morph', label: 'Morph', category: 'Continuous' },
    { name: 'blink', class: 'c-animate-blink', label: 'Blink', category: 'Continuous' },
    { name: 'bounce', class: 'c-animate-bounce', label: 'Bounce', category: 'Attention' },
    { name: 'shake', class: 'c-animate-shake', label: 'Shake', category: 'Attention' },
    { name: 'wiggle', class: 'c-animate-wiggle', label: 'Wiggle', category: 'Attention' },
    { name: 'heartbeat', class: 'c-animate-heartbeat', label: 'Heartbeat', category: 'Attention' },
    { name: 'rubber-band', class: 'c-animate-rubber-band', label: 'Rubber Band', category: 'Attention' },
    { name: 'jello', class: 'c-animate-jello', label: 'Jello', category: 'Attention' },
    { name: 'tada', class: 'c-animate-tada', label: 'Tada', category: 'Attention' },
    { name: 'swing', class: 'c-animate-swing', label: 'Swing', category: 'Attention' },
    { name: 'drop-in', class: 'c-animate-drop-in', label: 'Drop In', category: 'Special' },
    { name: 'blur-in', class: 'c-animate-blur-in', label: 'Blur In', category: 'Special' },
    { name: 'blur-out', class: 'c-animate-blur-out', label: 'Blur Out', category: 'Special' },
    { name: 'ripple', class: 'c-animate-ripple', label: 'Ripple', category: 'Special' },
    { name: 'skeleton', class: 'c-animate-skeleton', label: 'Skeleton', category: 'Special' },
    { name: 'shimmer', class: 'c-animate-shimmer', label: 'Shimmer', category: 'Special' },
]

const categories = ['All', 'Fade', 'Slide', 'Scale', 'Flip', 'Continuous', 'Attention', 'Special']
const PAGE_SIZE = 12

function AnimCard({ anim }) {
    const [key, setKey] = useState(0)
    return (
        <div
            onClick={() => setKey((k) => k + 1)}
            style={{
                borderRadius: '12px',
                border: '1px solid var(--c-border)',
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'box-shadow 200ms',
                backgroundColor: 'var(--c-bg)',
            }}
            title="Click to replay"
        >
            <div
                style={{
                    height: '100px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'color-mix(in srgb, var(--c-primary-500) 6%, var(--c-bg))',
                }}
            >
                <div
                    key={key}
                    className={anim.class}
                    style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '8px',
                        backgroundColor: 'var(--c-primary-500)',
                    }}
                />
            </div>
            <div style={{ padding: '10px 12px', borderTop: '1px solid var(--c-border)' }}>
                <div style={{ fontSize: '13px', fontWeight: 600, marginBottom: '2px' }}>{anim.label}</div>
                <div style={{ fontSize: '11px', color: 'var(--c-primary-500)', fontFamily: 'monospace' }}>
                    .{anim.class}
                </div>
            </div>
        </div>
    )
}

export default function Animations() {
    const [activeCategory, setActiveCategory] = useState('All')
    const [page, setPage] = useState(1)

    const filtered = activeCategory === 'All'
        ? allAnimations
        : allAnimations.filter((a) => a.category === activeCategory)

    const totalPages = Math.ceil(filtered.length / PAGE_SIZE)
    const paginated = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE)

    const handleCategory = (cat) => {
        setActiveCategory(cat)
        setPage(1)
    }

    return (
        <section id="animations" style={{ padding: '96px 0', borderTop: '1px solid var(--c-border)' }}>
            <div className="c-container">

                <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                    <h2 className="c-text-4xl c-font-black c-mb-4">
                        50+ Built-in <span className="c-text-primary-500">Animations</span>
                    </h2>
                    <p className="c-text-lg c-text-muted c-max-w-prose c-mx-auto c-mb-3">
                        Ready-to-use keyframe animations with duration, delay, and iteration control.
                    </p>
                    <span
                        style={{
                            display: 'inline-block',
                            fontSize: '12px',
                            color: 'var(--c-muted)',
                            backgroundColor: 'var(--c-gray-100)',
                            padding: '4px 12px',
                            borderRadius: '999px',
                        }}
                    >
                        Click any card to replay
                    </span>
                </div>

                {/* Category filter */}
                <div
                    style={{
                        display: 'flex',
                        gap: '6px',
                        flexWrap: 'wrap',
                        marginBottom: '24px',
                    }}
                >
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => handleCategory(cat)}
                            style={{
                                padding: '6px 14px',
                                borderRadius: '999px',
                                fontSize: '13px',
                                fontWeight: 500,
                                cursor: 'pointer',
                                border: '1px solid',
                                transition: 'all 200ms',
                                borderColor: activeCategory === cat ? 'var(--c-primary-500)' : 'var(--c-border)',
                                backgroundColor: activeCategory === cat ? 'var(--c-primary-500)' : 'transparent',
                                color: activeCategory === cat ? 'white' : 'var(--c-muted)',
                            }}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Count */}
                <div style={{ fontSize: '13px', color: 'var(--c-muted)', marginBottom: '16px' }}>
                    Showing {(page - 1) * PAGE_SIZE + 1}–{Math.min(page * PAGE_SIZE, filtered.length)} of {filtered.length} animations
                </div>

                {/* Grid */}
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))',
                        gap: '12px',
                        marginBottom: '32px',
                    }}
                >
                    {paginated.map((anim) => (
                        <AnimCard key={anim.name} anim={anim} />
                    ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
                        <button
                            onClick={() => setPage((p) => Math.max(1, p - 1))}
                            disabled={page === 1}
                            style={{
                                padding: '8px 16px',
                                borderRadius: '8px',
                                border: '1px solid var(--c-border)',
                                backgroundColor: 'transparent',
                                color: page === 1 ? 'var(--c-muted)' : 'var(--c-fg)',
                                cursor: page === 1 ? 'not-allowed' : 'pointer',
                                fontSize: '13px',
                                opacity: page === 1 ? 0.4 : 1,
                            }}
                        >
                            Prev
                        </button>

                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                            <button
                                key={p}
                                onClick={() => setPage(p)}
                                style={{
                                    width: '36px',
                                    height: '36px',
                                    borderRadius: '8px',
                                    border: '1px solid',
                                    fontSize: '13px',
                                    fontWeight: 500,
                                    cursor: 'pointer',
                                    transition: 'all 200ms',
                                    borderColor: page === p ? 'var(--c-primary-500)' : 'var(--c-border)',
                                    backgroundColor: page === p ? 'var(--c-primary-500)' : 'transparent',
                                    color: page === p ? 'white' : 'var(--c-fg)',
                                }}
                            >
                                {p}
                            </button>
                        ))}

                        <button
                            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                            disabled={page === totalPages}
                            style={{
                                padding: '8px 16px',
                                borderRadius: '8px',
                                border: '1px solid var(--c-border)',
                                backgroundColor: 'transparent',
                                color: page === totalPages ? 'var(--c-muted)' : 'var(--c-fg)',
                                cursor: page === totalPages ? 'not-allowed' : 'pointer',
                                fontSize: '13px',
                                opacity: page === totalPages ? 0.4 : 1,
                            }}
                        >
                            Next
                        </button>
                    </div>
                )}

                {/* Code example */}
                <div
                    style={{
                        marginTop: '48px',
                        borderRadius: '16px',
                        border: '1px solid var(--c-border)',
                        overflow: 'hidden',
                    }}
                >
                    <div
                        style={{
                            padding: '10px 16px',
                            borderBottom: '1px solid var(--c-border)',
                            backgroundColor: 'color-mix(in srgb, var(--c-gray-100) 50%, transparent)',
                            fontSize: '11px',
                            fontWeight: 600,
                            color: 'var(--c-muted)',
                            textTransform: 'uppercase',
                            letterSpacing: '0.05em',
                        }}
                    >
                        Animation Control
                    </div>
                    <pre
                        style={{
                            margin: 0,
                            padding: '20px',
                            backgroundColor: 'var(--c-gray-950)',
                            color: 'var(--c-gray-100)',
                            fontSize: '13px',
                            fontFamily: 'monospace',
                            lineHeight: '1.8',
                            overflowX: 'auto',
                        }}
                    >
                        <code>{`<!-- Duration -->
<div class="c-animate-fade-in c-animate-duration-700">...</div>

<!-- Delay -->
<div class="c-animate-slide-up c-animate-delay-300">...</div>

<!-- Repeat -->
<div class="c-animate-pulse c-animate-infinite">...</div>
<div class="c-animate-bounce c-animate-repeat-3">...</div>

<!-- Easing -->
<div class="c-animate-scale-in c-animate-ease-bounce">...</div>
<div class="c-animate-drop-in c-animate-ease-spring">...</div>

<!-- Pause on hover -->
<div class="c-animate-spin c-animate-infinite c-animate-paused">...</div>

<!-- Skeleton loader -->
<div class="c-animate-skeleton c-rounded c-h-4 c-mb-2" style="width: 100%"></div>
<div class="c-animate-skeleton c-rounded c-h-4 c-mb-2" style="width: 75%"></div>`}
                        </code>
                    </pre>
                </div>

            </div>
        </section>
    )
}