import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import SkillsSection from './components/SkillsSection'
import ContactSection from './components/ContactSection'
import './App.css'

function App() {
  // Keep the dynamic key to prevent caching issues
  const forceKey = Date.now().toString();

  return (
    <main className="relative">
      <Navbar />
      <HeroSection key={forceKey} />
      <AboutSection />
      <SkillsSection />
      <ContactSection />
    </main>
  )
}

export default App