import { useState } from 'react'
import useInView from '../hooks/useInView'

const allAnimations = [
    { class: 'c-animate-fade-in', label: 'Fade In', category: 'Fade' },
    { class: 'c-animate-fade-in-up', label: 'Fade In Up', category: 'Fade' },
    { class: 'c-animate-fade-in-down', label: 'Fade In Down', category: 'Fade' },
    { class: 'c-animate-fade-in-left', label: 'Fade In Left', category: 'Fade' },
    { class: 'c-animate-fade-in-right', label: 'Fade In Right', category: 'Fade' },
    { class: 'c-animate-fade-out', label: 'Fade Out', category: 'Fade' },
    { class: 'c-animate-slide-up', label: 'Slide Up', category: 'Slide' },
    { class: 'c-animate-slide-down', label: 'Slide Down', category: 'Slide' },
    { class: 'c-animate-slide-left', label: 'Slide Left', category: 'Slide' },
    { class: 'c-animate-slide-right', label: 'Slide Right', category: 'Slide' },
    { class: 'c-animate-scale-in', label: 'Scale In', category: 'Scale' },
    { class: 'c-animate-scale-out', label: 'Scale Out', category: 'Scale' },
    { class: 'c-animate-zoom-in', label: 'Zoom In', category: 'Scale' },
    { class: 'c-animate-zoom-out', label: 'Zoom Out', category: 'Scale' },
    { class: 'c-animate-flip-x', label: 'Flip X', category: 'Flip' },
    { class: 'c-animate-flip-y', label: 'Flip Y', category: 'Flip' },
    { class: 'c-animate-rotate-in', label: 'Rotate In', category: 'Flip' },
    { class: 'c-animate-roll-in', label: 'Roll In', category: 'Flip' },
    { class: 'c-animate-spin', label: 'Spin', category: 'Continuous' },
    { class: 'c-animate-ping', label: 'Ping', category: 'Continuous' },
    { class: 'c-animate-pulse', label: 'Pulse', category: 'Continuous' },
    { class: 'c-animate-float', label: 'Float', category: 'Continuous' },
    { class: 'c-animate-glow', label: 'Glow', category: 'Continuous' },
    { class: 'c-animate-morph', label: 'Morph', category: 'Continuous' },
    { class: 'c-animate-bounce', label: 'Bounce', category: 'Attention' },
    { class: 'c-animate-shake', label: 'Shake', category: 'Attention' },
    { class: 'c-animate-wiggle', label: 'Wiggle', category: 'Attention' },
    { class: 'c-animate-heartbeat', label: 'Heartbeat', category: 'Attention' },
    { class: 'c-animate-rubber-band', label: 'Rubber Band', category: 'Attention' },
    { class: 'c-animate-jello', label: 'Jello', category: 'Attention' },
    { class: 'c-animate-tada', label: 'Tada', category: 'Attention' },
    { class: 'c-animate-swing', label: 'Swing', category: 'Attention' },
    { class: 'c-animate-drop-in', label: 'Drop In', category: 'Special' },
    { class: 'c-animate-blur-in', label: 'Blur In', category: 'Special' },
    { class: 'c-animate-ripple', label: 'Ripple', category: 'Special' },
    { class: 'c-animate-skeleton', label: 'Skeleton', category: 'Special' },
    { class: 'c-animate-shimmer', label: 'Shimmer', category: 'Special' },
]

const categories = ['All', 'Fade', 'Slide', 'Scale', 'Flip', 'Continuous', 'Attention', 'Special']
const PAGE_SIZE = 12

const EXIT_ANIMATIONS = new Set([
    'c-animate-fade-out',
    'c-animate-scale-out',
    'c-animate-zoom-out',
])

function AnimCard({ anim }) {
    const [key, setKey] = useState(0)
    const isExit = EXIT_ANIMATIONS.has(anim.class)

    return (
        <div
            onClick={() => setKey((k) => k + 1)}
            className="c-rounded-lg c-border c-border-base c-overflow-hidden c-cursor-pointer c-hover-shadow c-transition"
            title="Click to replay"
        >
            <div className="c-flex c-items-center c-justify-center c-py-6 c-bg-gray-50">
                <div
                    key={key}
                    className={`c-size-9 c-rounded-md c-bg-primary-500 ${anim.class}`}
                    style={isExit ? { animationFillMode: 'none' } : undefined}
                />
            </div>
            <div className="c-px-3 c-py-2 c-border-t c-border-base">
                <div className="c-text-xs c-font-semibold c-mb-1">{anim.label}</div>
                <div className="c-text-xs c-text-primary-500 c-font-mono c-truncate">.{anim.class}</div>
            </div>
        </div>
    )
}

export default function Animations() {
    const { ref: titleRef, inView: titleIn } = useInView()
    const [activeCategory, setActiveCategory] = useState('All')
    const [page, setPage] = useState(1)

    const filtered = activeCategory === 'All' ? allAnimations : allAnimations.filter((a) => a.category === activeCategory)
    const totalPages = Math.ceil(filtered.length / PAGE_SIZE)
    const paginated = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE)

    const handleCategory = (cat) => { setActiveCategory(cat); setPage(1) }

    return (
        <section id="animations" className="c-py-20 c-md-py-24 c-border-t c-border-base">
            <div className="c-container">
                <div ref={titleRef} className={`c-text-center c-mb-8 c-md-mb-12 ${titleIn ? 'c-animate-fade-in-up' : 'c-opacity-0'}`}>
                    <h2 className="c-text-3xl c-md-text-4xl c-font-black c-mb-4">50+ Built-in <span className="c-text-primary-500">Animations</span></h2>
                    <p className="c-text-base c-md-text-lg c-text-muted c-max-w-prose c-mx-auto c-mb-3">Ready-to-use keyframe animations with full control.</p>
                    <span className="c-inline-block c-text-xs c-text-muted c-bg-gray-100 c-px-3 c-py-1 c-rounded-full">Click any card to replay</span>
                </div>

                <div className="c-flex c-gap-2 c-mb-6 c-overflow-x-auto c-scrollbar-none" style={{ flexWrap: 'nowrap' }}>
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => handleCategory(cat)}
                            className={`c-px-3 c-py-1 c-rounded-full c-text-xs c-font-medium c-border c-transition-colors c-flex-shrink-0 ${activeCategory === cat ? 'c-bg-primary-500 c-text-white c-border-primary-500' : 'c-text-muted c-border-base'}`}
                            style={{ cursor: 'pointer', whiteSpace: 'nowrap' }}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <div className="c-text-xs c-text-muted c-mb-4">
                    Showing {(page - 1) * PAGE_SIZE + 1}–{Math.min(page * PAGE_SIZE, filtered.length)} of {filtered.length}
                </div>

                <div className="c-grid c-gap-3 c-mb-8" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(130px, 1fr))' }}>
                    {paginated.map((anim) => (
                        <AnimCard key={anim.class} anim={anim} />
                    ))}
                </div>

                {totalPages > 1 && (
                    <div className="c-flex c-items-center c-justify-center c-gap-1" style={{ flexWrap: 'wrap' }}>
                        <button
                            onClick={() => setPage((p) => Math.max(1, p - 1))}
                            disabled={page === 1}
                            className="c-btn c-btn-secondary c-btn-sm c-border c-border-base"
                        >
                            Prev
                        </button>
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                            <button
                                key={p}
                                onClick={() => setPage(p)}
                                className={`c-size-9 c-rounded-md c-text-xs c-font-medium c-border c-transition-colors ${page === p ? 'c-bg-primary-500 c-text-white c-border-primary-500' : 'c-border-base c-text-fg'}`}
                                style={{ cursor: 'pointer' }}
                            >
                                {p}
                            </button>
                        ))}
                        <button
                            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                            disabled={page === totalPages}
                            className="c-btn c-btn-secondary c-btn-sm c-border c-border-base"
                        >
                            Next
                        </button>
                    </div>
                )}

                <div className="c-mt-12 c-rounded-xl c-border c-border-base c-overflow-hidden">
                    <div className="c-px-4 c-py-2 c-border-b c-border-base c-bg-gray-100 c-text-xs c-font-semibold c-text-muted c-uppercase c-tracking-wide">
                        Animation Control
                    </div>
                    <pre className="c-overflow-x-auto c-p-4 c-bg-gray-950 c-text-gray-100 c-text-xs c-font-mono" style={{ margin: 0, lineHeight: 1.8 }}>
                        <code>{`<div class="c-animate-fade-in c-animate-duration-700">...</div>
<div class="c-animate-slide-up c-animate-delay-300">...</div>
<div class="c-animate-pulse c-animate-infinite">...</div>
<div class="c-animate-spin c-animate-paused">...</div>
<div class="c-animate-skeleton c-rounded c-h-4 c-w-100"></div>`}</code>
                    </pre>
                </div>
            </div>
        </section>
    )
}