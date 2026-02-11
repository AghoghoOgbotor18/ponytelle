import React from 'react'
import Hero from '../components/home/Hero'
import PromoBar from '../components/home/PromoBar'
import Category from '../components/home/Category'
import FeaturedProducts from '../components/home/FeaturedProducts'
import FlashSales from '../components/home/FlashSales'
import PonytelleSpecial from '../components/home/PonytelleSpecial'
import CTASection from '../components/home/CTASection'
import Testimonials from '../components/home/Testimonials'
import FAQSection from '../components/home/FAQSection'

const Home = () => {
    return (
      <div>
        <Hero />
        <PromoBar />
        <Category />
        <FeaturedProducts />
        <FlashSales />
        <PonytelleSpecial />
        <CTASection />
        <Testimonials />
        <FAQSection />
      </div>
    )
}

export default Home
