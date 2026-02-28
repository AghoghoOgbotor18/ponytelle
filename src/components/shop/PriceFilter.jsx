// src/components/shop/PriceFilter.jsx
import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPriceMax } from "../../features/products/productsSlice";

const PriceFilter = () => {
    const dispatch = useDispatch();
    const allProducts = useSelector((state) => state.products.items);
    const priceMaxFromStore = useSelector(
        (state) => state.products.filters.priceMax
    );
    const filteredProducts = useSelector(
        (state) => state.products.filteredItems
    );

    // Calculate global min & max (constant range)
    const { minPrice, maxPrice } = useMemo(() => {
        const prices = allProducts.map((p) => p.price);
        const min = prices.length ? Math.min(...prices) : 0;
        const max = prices.length ? Math.max(...prices) + 10000 : 10000;
        return { minPrice: min, maxPrice: max };
    }, [allProducts]);

    const [selectedMax, setSelectedMax] = useState(maxPrice);

    //Sync slider when Redux filter changes (reset or category change)
    useEffect(() => {
        if (priceMaxFromStore === null) {
        setSelectedMax(maxPrice); // reset to full range
        } else {
        setSelectedMax(priceMaxFromStore);
        }
    }, [priceMaxFromStore, maxPrice]);

    const percentage = ((selectedMax - minPrice) / (maxPrice - minPrice)) * 100;

    return (
        <div>
            <h3 className="font-semibold mb-3">Price &#8358; (Up to)</h3>
            <div className="flex justify-between text-sm mb-2">
                <span>&#8358;{minPrice.toLocaleString()}</span>
                <span className="font-semibold brand-color">
                &#8358;{selectedMax.toLocaleString()}
                </span>
            </div>

            {/* Price range bar */}
            <input type="range" min={minPrice} max={maxPrice} value={selectedMax} onChange={(e) => setSelectedMax(+e.target.value)} className="w-full h-2 rounded-lg appearance-none cursor-pointer" style={{ background: `linear-gradient(to right, #281a17 0%, #281a17 ${percentage}%, #e5e7eb ${percentage}%, #e5e7eb 100%)` }} />
            <button onClick={() => {dispatch(setPriceMax(selectedMax)); scrollTo({top: 0, behavior: "smooth"})}} className="mt-3 w-full bg-black hover:bg-[#281a17] text-white py-2 rounded hover:opacity-90">
                Apply
            </button>

            <p className="text-xs text-gray-500 mt-2">
                Showing{" "}
                <span className="font-semibold text-gray-900">
                    {filteredProducts.length}
                </span>{" "}
                result{filteredProducts.length !== 1 ? "s" : ""}
            </p>
        </div>
    );
};

export default PriceFilter;
