import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import SkillsSection from './components/SkillsSection'
import ContactSection from './components/ContactSection'
import './App.css'

function App() {
  return (
    <main className="relative">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ContactSection />
    </main>
  )
}

export default App