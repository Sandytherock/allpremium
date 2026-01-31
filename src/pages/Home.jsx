import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import FloatingButtons from '../components/FloatingButtons'
// Live notifications removed - static website
import HeroSection from '../components/HeroSection'
import FOMOSection from '../components/FOMOSection'
import PromoSection from '../components/PromoSection'
// Coaching section removed - product-only website
import PlansSection from '../components/PlansSection'
import ChatGLMSection from '../components/ChatGLMSection'
import HowToOrderSection from '../components/HowToOrderSection'
import PaymentProofsSection from '../components/PaymentProofsSection'
// About coach section removed - product-only website
import TestimonialsSection from '../components/TestimonialsSection'
import WhatsAppCommunity from '../components/WhatsAppCommunity'
import WhatsAppCommunityBanner from '../components/WhatsAppCommunityBanner'
import PriceComparisonTable from '../components/PriceComparisonTable'
import ExitIntentPopup from '../components/ExitIntentPopup'
import CountdownTimer from '../components/CountdownTimer'
// Live statistics removed - static website
import SecurityBadges from '../components/SecurityBadges'
import FAQSection from '../components/FAQSection'
import '../components/WhatsAppCommunity.css'
import '../components/WhatsAppCommunityBanner.css'

function Home() {
  return (
    <>
      <WhatsAppCommunityBanner />
      <Header />
      <HeroSection />
      <FOMOSection />
      <PromoSection />
      {/* Main Services - User sabse pehle yahi dekhna chahta hai */}
      <PlansSection />
      <PriceComparisonTable />
      <ChatGLMSection />
      {/* How to Order - Simple process */}
      <HowToOrderSection />
      {/* Trust Building - Payment Proofs */}
      <PaymentProofsSection />
      <TestimonialsSection />
      {/* Community & Support */}
      <WhatsAppCommunity />
      {/* FAQ - Last doubts clear */}
      <FAQSection />
      <Footer />
      <FloatingButtons />
      <ExitIntentPopup />
    </>
  )
}

export default Home
