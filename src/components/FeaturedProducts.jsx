import React from 'react';
import products from "../data/products.json"
import { Link } from 'react-router-dom';
import ProductCard from './product/ProductCard';
import { useSelector } from 'react-redux';

const FeaturedProducts = () => {
    const products = useSelector((state) => state.products.items)
    //only select six products
    const featuredProducts = products.slice(11,17);
    return (
        <div className="px-6 py-10">
            <div className='text-center mb-6'>
                <h2 className="text-4xl font-bold mb-3">Featured Ponytails</h2>
                <p className='text-md font-semibold'>Get Our Fast Selling Ponytails</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {featuredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    )
}

export default FeaturedProducts
