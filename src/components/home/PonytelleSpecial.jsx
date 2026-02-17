import React from "react";
import { useSelector } from "react-redux";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import ProductCard from "../product/ProductCard";

const PonytelleSpecial = () => {
    const products = useSelector((state) => state.products.items) || [];
    const bestSellers = products.filter(
        (product) => product.isBestSeller
    );


    return (
        <section className="container mx-auto py-10 px-2 md:px-0">
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl md:text-4xl font-bold mb-3">Ponytelle Specials</h2>
                <Link to="/shop?filter=bestsellers" className="group inline-flex items-center gap-2 text-sm font-medium cursor-pointer hover:brand-color">
                View all
                <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
            </div>

            {/* Scroll-X Wrapper */}
            <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-4">
                {bestSellers.map((product) => (
                    <ProductCard key={product.id} product={product} variant="special" />
                ))}
            </div>
        </section>
    );
};

export default PonytelleSpecial;
