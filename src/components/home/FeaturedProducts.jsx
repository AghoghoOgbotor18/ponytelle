    import React, { useRef, useState, useEffect } from "react";
    import ProductCard from "../product/ProductCard";
    import { useSelector } from "react-redux";
    import { Link } from "react-router-dom";
    import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

    const FeaturedProducts = () => {
    const products = useSelector((state) => state.products.items);
    const featuredProducts = products.slice(11, 17);

    const scrollRef = useRef(null);

    const [showLeft, setShowLeft] = useState(false);
    const [showRight, setShowRight] = useState(true);

    const checkScroll = () => {
        const el = scrollRef.current;

        if (!el) return;

        const isStart = el.scrollLeft <= 0;

        const isEnd =
            Math.ceil(el.scrollLeft + el.clientWidth) >= el.scrollWidth - 20;

        setShowLeft(!isStart);
        setShowRight(!isEnd);
    };

    const scroll = (direction) => {
        const el = scrollRef.current;
        const cardWidth = el.firstChild.offsetWidth + 20; // card + gap
        const scrollAmount = cardWidth * 2; // 2 cards each click

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
        <div className="px-6 py-10 relative">
        <div className="text-center mb-7">
            <h2 className="text-4xl font-bold mb-2">Featured Ponytails</h2>
            <p className="text-md">Get Our Fast Selling Ponytails</p>
        </div>

        {/* Left Arrow */}
        {showLeft && (
            <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-[45%] z-10 bg-white hover:bg-white/90 shadow-md p-2 rounded-full cursor-pointer m-3"
            >
            <FiChevronLeft size={22} />
            </button>
        )}

        {/* Right Arrow */}
        {showRight && (
            <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-[45%] z-10 bg-white hover:bg-white/90 shadow-md p-2 rounded-full cursor-pointer m-3"
            >
            <FiChevronRight size={22} />
            </button>
        )}

        {/* Carousel */}
        <div
            ref={scrollRef}
            className="flex gap-5 overflow-x-auto scroll-smooth scrollbar-hide"
        >
            {featuredProducts.map((product) => (
            <div key={product.id} className="min-w-[200px]">
                <ProductCard product={product} />
            </div>
            ))}
        </div>

        <div className="flex justify-center items-center">
            <Link
            to="/shop"
            className="px-4 mt-15 w-fit bg-black text-white py-2 rounded-3xl hover:bg-[#281a17] active:bg-[#281a17]"
            >
            View More Products
            </Link>
        </div>
        </div>
    );
    };

    export default FeaturedProducts;