import React from 'react'
import ProductCard from './ProductCard'

const ProductGrid = () => {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5'>
            <ProductCard product={product} />
        </div>
    )
}

export default ProductGrid
