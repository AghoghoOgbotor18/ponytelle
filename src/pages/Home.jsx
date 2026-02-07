import React from 'react'
import Hero from '../components/Hero'
import PromoBar from '../components/PromoBar'
import Category from '../components/Category'
import FeaturedProducts from '../components/FeaturedProducts'
import FlashSales from '../components/FlashSales'

const Home = () => {
    return (
      <div>
        <Hero />
        <PromoBar />
        <Category />
        <FeaturedProducts />
        <FlashSales />
      </div>
    )
}

export default Home
