import { useState, useEffect } from 'react'

export default function useTheme() {
    const [theme, setTheme] = useState(() => localStorage.getItem('fluxgrid-theme') || 'light')

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme)
        localStorage.setItem('fluxgrid-theme', theme)
    }, [theme])

    const toggleTheme = () => setTheme((t) => (t === 'light' ? 'dark' : 'light'))

    return { theme, toggleTheme }
}