// src/components/shop/FilterSidebar.jsx
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCategory, setRating, setLength, resetFilters } from "../../features/products/productsSlice";
import PriceFilter from "./PriceFilter";
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const FilterSidebar = () => {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.products.filters);
  const navigate = useNavigate();

  return (
    <div className="space-y-8 sticky top-14 md:shadow-xl py-4 px-6 rounded bg-white">
      
      {/* Category */}
      <div>
        <h3 className="font-semibold mb-3">Category</h3>
        {["all", "straight", "wavy", "curly", "kinky"].map((cat) => (
          <button
            key={cat}
            onClick={() => { dispatch(setCategory(cat)); navigate("/shop"); scrollTo({top: 0, behavior: "smooth"})}}
            className={`block text-left py-1 capitalize hover:brand-color ${
              filters.category === cat ? "brand-color font-semibold" : ""
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Price Range */}
      <PriceFilter />

      {/* Rating */}
      <div>
        <h3 className="font-semibold mb-3">Rating</h3>
        {[5, 4, 3, 2, 1].map((r) => (
          <label key={r} className="flex items-center gap-2 cursor-pointer mb-2">
            <input type="radio" name="rating" checked={filters.rating === r} onChange={() => dispatch(setRating(r))} onClick={() => scrollTo({top: 0, behavior: "smooth"})} />
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <span key={i} className={i < r ? "text-yellow-400" : "text-gray-300"}>
                  <FaStar />
                </span>
              ))}
            </div>
            <span className="text-sm">& above</span>
          </label>
        ))}
      </div>

      {/* Hair Length */}
      <div>
        <h3 className="font-semibold mb-3">Hair Length</h3>
        {[14, 16, 18, 20, 22, 24, 26].map((len) => (
          <label key={len} className="flex items-center gap-3 mb-2 cursor-pointer">
            <input type="radio" name="length" checked={filters.length === len} onClick={() => scrollTo({top: 0, behavior: "smooth"})} onChange={() => dispatch(setLength(len))} />
            <p>{len} inches</p>
          </label>
        ))}
      </div>

      {/* Reset All */}
      <button onClick={() => { dispatch(resetFilters()); navigate("/shop"); scrollTo({top: 0, behavior: "smooth"}) }} className="text-red-800 cursor-pointer hover:text-red-600">
        Reset All Filters
      </button>
    </div>
  );
};

export default FilterSidebar;
