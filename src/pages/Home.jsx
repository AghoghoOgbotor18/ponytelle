import React from 'react'
import Hero from '../components/Hero'
import PromoBar from '../components/PromoBar'
import Category from '../components/Category'
import FeaturedProducts from '../components/FeaturedProducts'

const Home = () => {
    return (
      <div>
        <Hero />
        <PromoBar />
        <Category />
        <FeaturedProducts />
      </div>
    )
}

export default Home
