import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Projects from './components/Projects'
import WhySameek from './components/WhySameek'
import Process from './components/Process'
import CTA from './components/CTA'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-paper">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <WhySameek />
        <Process />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
