import useTheme from './hooks/useTheme'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import Why from './sections/Why'
import Features from './sections/Features'
import QuickStart from './sections/QuickStart'
import GridDemo from './sections/GridDemo'
import Components from './sections/Components'
import Animations from './sections/Animations'
import Tokens from './sections/Tokens'

export default function App() {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className="c-min-h-screen c-bg-base c-text-fg c-transition-colors">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <Why />
        <Features />
        <QuickStart />
        <GridDemo />
        <Components />
        <Animations />
        <Tokens />
      </main>
      <Footer />
    </div>
  )
}