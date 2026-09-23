import { useState } from 'react'
import { Benefits } from './components/Benefits.jsx'
import { Faq } from './components/Faq.jsx'
import { Footer } from './components/Footer.jsx'
import { Header } from './components/Header.jsx'
import { Hero } from './components/Hero.jsx'
import { Plans } from './components/Plans.jsx'
import { SecurityTools } from './components/SecurityTools.jsx'
import { SupportTrust } from './components/SupportTrust.jsx'
import { WpSquared } from './components/WpSquared.jsx'

export function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [selectedPlanId, setSelectedPlanId] = useState('m')
  const [compareOpen, setCompareOpen] = useState(false)

  return (
    <>
      <Header
        menuOpen={menuOpen}
        onToggleMenu={() => setMenuOpen((open) => !open)}
        onCloseMenu={() => setMenuOpen(false)}
      />
      <main id="top">
        <Hero />
        <Benefits />
        <Plans
          selectedPlanId={selectedPlanId}
          onSelectPlan={setSelectedPlanId}
          compareOpen={compareOpen}
          onToggleCompare={() => setCompareOpen((open) => !open)}
        />
        <WpSquared />
        <SecurityTools />
        <SupportTrust />
        <Faq />
      </main>
      <Footer />
    </>
  )
}
