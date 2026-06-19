import { useState } from 'react'

const animations = [
    { name: 'fade-in', class: 'c-animate-fade-in', label: 'Fade In' },
    { name: 'slide-up', class: 'c-animate-slide-up', label: 'Slide Up' },
    { name: 'slide-down', class: 'c-animate-slide-down', label: 'Slide Down' },
    { name: 'slide-left', class: 'c-animate-slide-left', label: 'Slide Left' },
    { name: 'slide-right', class: 'c-animate-slide-right', label: 'Slide Right' },
    { name: 'scale-in', class: 'c-animate-scale-in', label: 'Scale In' },
    { name: 'spin', class: 'c-animate-spin', label: 'Spin' },
    { name: 'ping', class: 'c-animate-ping', label: 'Ping' },
    { name: 'pulse', class: 'c-animate-pulse', label: 'Pulse' },
    { name: 'bounce', class: 'c-animate-bounce', label: 'Bounce' },
    { name: 'shake', class: 'c-animate-shake', label: 'Shake' },
    { name: 'wiggle', class: 'c-animate-wiggle', label: 'Wiggle' },
    { name: 'float', class: 'c-animate-float', label: 'Float' },
    { name: 'heartbeat', class: 'c-animate-heartbeat', label: 'Heartbeat' },
    { name: 'blink', class: 'c-animate-blink', label: 'Blink' },
    { name: 'skeleton', class: 'c-animate-skeleton', label: 'Skeleton' },
]

function AnimCard({ anim }) {
    const [key, setKey] = useState(0)

    const replay = () => setKey((k) => k + 1)

    return (
        <div
            className="c-rounded-xl c-border c-border-base c-overflow-hidden c-shadow-sm c-cursor-pointer c-hover-lift c-transition"
            onClick={replay}
            title="Click to replay"
        >
            <div
                className="c-flex c-items-center c-justify-center c-py-8"
                style={{ backgroundColor: 'color-mix(in srgb, var(--c-primary-500) 5%, var(--c-bg))' }}
            >
                <div
                    key={key}
                    className={`c-size-10 c-rounded-lg c-bg-primary-500 ${anim.class}`}
                />
            </div>
            <div
                className="c-px-4 c-py-3 c-border-t c-border-base"
                style={{ backgroundColor: 'var(--c-bg)' }}
            >
                <div className="c-text-sm c-font-semibold c-mb-1">{anim.label}</div>
                <code className="c-text-xs c-text-primary-500 c-font-mono">.{anim.class}</code>
            </div>
        </div>
    )
}

export default function Animations() {
    return (
        <section id="animations" className="c-py-24 c-border-t c-border-base">
            <div className="c-container">
                <div className="c-text-center c-mb-16">
                    <h2 className="c-text-4xl c-font-black c-mb-4">
                        16 Built-in <span className="c-text-primary-500">Animations</span>
                    </h2>
                    <p className="c-text-lg c-text-muted c-max-w-prose c-mx-auto c-mb-4">
                        Ready-to-use keyframe animations with duration, delay, and iteration control.
                        No extra library needed.
                    </p>
                    <span className="c-text-sm c-text-muted c-bg-gray-100 c-px-3 c-py-1 c-rounded-full">
                        Click any card to replay the animation
                    </span>
                </div>

                <div
                    className="c-grid c-gap-4"
                    style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))' }}
                >
                    {animations.map((anim) => (
                        <AnimCard key={anim.name} anim={anim} />
                    ))}
                </div>

                <div
                    className="c-mt-12 c-rounded-xl c-border c-border-base c-overflow-hidden c-shadow-sm"
                >
                    <div
                        className="c-px-4 c-py-3 c-border-b c-border-base"
                        style={{ backgroundColor: 'color-mix(in srgb, var(--c-gray-100) 50%, transparent)' }}
                    >
                        <span className="c-text-xs c-font-semibold c-text-muted c-uppercase c-tracking-wide">
                            Animation Control
                        </span>
                    </div>
                    <pre
                        className="c-overflow-x-auto c-p-4 c-text-xs c-font-mono"
                        style={{
                            backgroundColor: 'var(--c-gray-950)',
                            color: 'var(--c-gray-100)',
                            lineHeight: '1.6',
                        }}
                    >
                        <code>{`<!-- Duration -->
<div class="c-animate-fade-in c-animate-duration-500">...</div>

<!-- Delay -->
<div class="c-animate-slide-up c-animate-delay-300">...</div>

<!-- Repeat -->
<div class="c-animate-pulse c-animate-infinite">...</div>
<div class="c-animate-bounce c-animate-repeat-3">...</div>

<!-- Pause / Play -->
<div class="c-animate-spin c-animate-paused">...</div>

<!-- Skeleton loader -->
<div class="c-animate-skeleton c-rounded c-h-4 c-w-100 c-mb-2"></div>
<div class="c-animate-skeleton c-rounded c-h-4 c-w-75 c-mb-2"></div>`}
                        </code>
                    </pre>
                </div>

            </div>
        </section>
    )
}