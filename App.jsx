import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Hero from './components/Hero';
import AboutSection from "@/components/AboutSection";
import PracticeAreas from "@/components/PracticeAreas";
import ClientTestimonials from "@/components/ClientTestimonials";
import ContactSection from './components/ContactSection';
import OurTeam from "@/components/OurTeam";
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <Navbar />
      <div className="pt-20">
        <Hero />
        <AboutSection />
        <PracticeAreas />
        <ClientTestimonials />
      <OurTeam />
      <ContactSection />
      </div>

    </>
  )
}

export default App
