import { useEffect, useRef, useState } from 'react'

export default function useInView(threshold = 0.1) {
    const ref = useRef(null)
    const hasAnimatedRef = useRef(false)
    const [inView, setInView] = useState(false)

    useEffect(() => {
        const el = ref.current
        if (!el) return

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimatedRef.current) {
                    hasAnimatedRef.current = true
                    setInView(true)
                    observer.unobserve(el)
                }
            },
            { threshold, rootMargin: '0px 0px 15% 0px' }
        )

        observer.observe(el)
        return () => observer.disconnect()
    }, [threshold])

    return { ref, inView }
}