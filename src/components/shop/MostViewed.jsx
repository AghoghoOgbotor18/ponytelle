import React from 'react'
import { Link } from 'react-router-dom';
import { FiArrowRight } from "react-icons/fi";
import { useSelector } from "react-redux";

const MostViewed = () => {
    const products = useSelector((state) => state.products.items) || [];
    const bestSellers = products.slice(0, 8);

    return (
        <section className="container mx-auto py-10 px-2 md:px-0">
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-3xl md:text-4xl font-bold mb-3 pt-8">Most Viewed</h2>
                <Link to="/shop" className="group inline-flex items-center gap-2 text-sm font-medium cursor-pointer hover:brand-color">
                View all
                <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
            </div>

            {/* Scroll-X Wrapper */}
            <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-4">
                {bestSellers.map((product) => {
                const oldPrice = product.price + 5000;
                const newPrice = product.price;

                return (
                    <div key={product.id} className="min-w-[220px] group border border-zinc-100/50 rounded-lg p-1.5 hover:shadow-lg active:shadow-lg transitionn">
                    <div className="relative w-full h-[220px] overflow-hidden">
                        <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
                        <span className="absolute top-3 left-3 bg-black text-white text-xs px-3 py-1 rounded-full"> Best Seller</span>
                    </div>
                    <div className="p-3">
                        <h3 className="mt-2 font-semibold text-sm text-zinc-800 truncate w-[80%]">{product.name}</h3>
                        <div className="flex items-center gap-2 mt-2">
                        <span className="brand-color font-bold"> 
                            &#8358;{newPrice.toLocaleString()}
                        </span>
                        <span className="text-xs text-gray-400 line-through">
                            &#8358;{oldPrice.toLocaleString()}
                        </span>
                        </div>
                        <Link to={`/product/${product.id}`} className="mt-2 w-full bg-black text-white py-2 rounded hover:bg-[#281a17] active:bg-[#281a17] cursor-pointer flex justify-center items-center gap-2">
                            Shop Now
                        </Link>
                    </div>
                    </div>
                );
                })}
            </div>
        </section>
    )
}

export default MostViewed
