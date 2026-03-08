import React, { useRef, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { FiArrowRight, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import ProductCard from "../product/ProductCard";

const PonytelleSpecial = () => {

    const products = useSelector((state) => state.products.items) || [];
        const bestSellers = products.filter(
            (product) => product.isBestSeller
        );

        const scrollRef = useRef(null);

        const [showLeft, setShowLeft] = useState(false);
        const [showRight, setShowRight] = useState(true);

        const checkScroll = () => {
        const el = scrollRef.current;

        if (!el) return;

        const isStart = el.scrollLeft <= 0;

        const isEnd = Math.ceil(el.scrollLeft + el.clientWidth) >= el.scrollWidth - 20;

        setShowLeft(!isStart);
        setShowRight(!isEnd);
    };

    const scroll = (direction) => {
        const el = scrollRef.current;
        const cardWidth = el.firstChild.offsetWidth + 20;
        const scrollAmount = cardWidth * 2;

        if (direction === "left") {
            el.scrollBy({ left: -scrollAmount, behavior: "smooth" });
        } else {
            el.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
    };

    useEffect(() => {
        const el = scrollRef.current;
        el.addEventListener("scroll", checkScroll);
        checkScroll();

        return () => el.removeEventListener("scroll", checkScroll);
    }, []);

    return (
        <section className="px-6 py-10 relative">

            <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl md:text-4xl font-bold mb-3">
                    Ponytelle Specials
                </h2>

                <Link
                    to="/shop?filter=bestsellers"
                    className="group inline-flex items-center gap-2 text-sm font-medium hover:brand-color"
                >
                    View all
                    <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
            </div>

            {/* Left Arrow */}
            {showLeft && (
                <button
                    onClick={() => scroll("left")}
                    className="absolute left-0 top-[55%] z-10 bg-white hover:bg-white/90 shadow-md p-2 rounded-full cursor-pointer m-3"
                >
                    <FiChevronLeft size={20} />
                </button>
            )}

            {/* Right Arrow */}
            {showRight && (
                <button
                    onClick={() => scroll("right")}
                    className="absolute right-0 top-[55%] z-10 bg-white hover:bg-white/90 shadow-md p-2 rounded-full m-3 cursor-pointer"
                >
                    <FiChevronRight size={20} />
                </button>
            )}

            {/* Carousel */}
            <div
                ref={scrollRef}
                className="flex gap-4 overflow-x-auto scroll-smooth scrollbar-hide pb-4"
            >
                {bestSellers.map((product) => (
                    <div key={product.id} className="w-[48%] md:w-[200px] flex-shrink-0">
                        <ProductCard product={product} variant="special" />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default PonytelleSpecial;