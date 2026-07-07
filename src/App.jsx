import { useEffect } from 'react'
import DemoBanner from './components/DemoBanner'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustBar from './components/TrustBar'
import Services from './components/Services'
import WhyUs from './components/WhyUs'
import Testimonials from './components/Testimonials'
import BeforeAfter from './components/BeforeAfter'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

export default function App() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    )
    document.querySelectorAll('.reveal').forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white">
      <DemoBanner />
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <WhyUs />
        <Testimonials />
        <BeforeAfter />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
