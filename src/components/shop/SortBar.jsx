// src/components/shop/SortBar.jsx
import { useDispatch } from "react-redux";
import { setSort } from "../../features/products/productsSlice";

const SortBar = () => {
  const dispatch = useDispatch();

  return (
    <div className="flex justify-end mb-5 mt-3">
      <select
        onChange={(e) => dispatch(setSort(e.target.value))}
        className="hidden md:block border border-gray-300 shadow-md px-4 py-2 rounded-md focus:outline-none  outline-none"
      >
        <option value="">Sort By</option>
        <option value="price-low-high">Price: Low → High</option>
        <option value="price-high-low">Price: High → Low</option>
        <option value="rating">Top Rated</option>
      </select>
    </div>
  );
};

export default SortBar;
