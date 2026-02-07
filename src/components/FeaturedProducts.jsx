import React from 'react';
import ProductCard from './product/ProductCard';
import { useSelector } from 'react-redux';

const FeaturedProducts = () => {
    const products = useSelector((state) => state.products.items)
    //only select six products
    const featuredProducts = products.slice(11,17);
    return (
        <div className="px-6 py-10">
            <div className='text-center mb-7'>
                <h2 className="text-4xl font-bold mb-2">Featured Ponytails</h2>
                <p className='text-md'>Get Our Fast Selling Ponytails</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5">
                {featuredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    )
}

export default FeaturedProducts
