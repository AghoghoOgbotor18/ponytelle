// src/components/shop/ProductGrid.jsx
import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";

const ProductGrid = ({products}) => {
  
  {products.map((product) => (
    <ProductCard key={product.id} product={product} />
  ))}

  return (
    <div className="w-full">
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-auto">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            variant="shop"
            onAddToCart={(item) => console.log("Add to cart:", item)}
            className="max-h-10"
          />
        ))}
      </div>
      {products.length === 0 && (
        <div className="px-10 py-20 text-center text-gray-600">
          No products match this filter.
        </div>
      )}
    </div>
  );
};

export default ProductGrid;
