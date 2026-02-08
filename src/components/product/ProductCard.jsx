import React from 'react';
import { useDispatch } from "react-redux";

const ProductCard = ({product}) => {
    const dispatch = useDispatch();
    return (
        <div className="border border-zinc-100/50 rounded-lg p-1.5 hover:shadow-lg active:shadow-lg transition">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-md" />
            <h3 className="mt-2 font-semibold text-sm text-zinc-800 truncate w-[80%]">{product.name}</h3>
            <p className="brand-color font-bold">&#8358;{product.price.toLocaleString()}</p>
            <button  className="mt-2 w-full bg-black text-white py-2 rounded hover:bg-[#281a17] active:bg-[#281a17] cursor-pointer">
                Shop Now
            </button>
        </div>
    )
}

export default ProductCard
