import React from 'react'
import Hero from '../components/Hero'
import PromoBar from '../components/PromoBar'
import Category from '../components/Category'
import FeaturedProducts from '../components/FeaturedProducts'
import FlashSales from '../components/FlashSales'
import PonytelleSpecial from '../components/PonytelleSpecial'
import CTASection from '../components/CTASection'
import Testimonials from '../components/Testimonials'

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
      </div>
    )
}

export default Home
