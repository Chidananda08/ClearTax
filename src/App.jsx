import ClearTaxHeader from "./components/ClearTaxHeader"
import FAQ from "./components/FAQ"
import Footer from "./components/Footer"
import HeroSection from "./components/HeroSection"
import Partners from "./components/Partners"
import PricingPlan2 from "./components/PricingPlan2"
import PricingPlans from "./components/PricingPlans"
import Sevices from "./components/Sevices"
import TestimonialCarousel from "./components/TestimonialCarousel"

function App() {
  return (
    <main className="min-h-screen bg-white">
      <ClearTaxHeader />
      <HeroSection />
      <PricingPlans />
      <PricingPlan2/>
      <Sevices/>
      <Partners/>
      <div className=" my-20 flex items-center justify-center">
            <TestimonialCarousel />
        </div>
        <div className=" my-20 flex items-center justify-center">
            <FAQ />
        </div>
      <Footer/>
    </main>
  )
}

export default App

