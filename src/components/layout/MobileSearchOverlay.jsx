import { useState } from "react";
import { useDispatch } from "react-redux";
import { setSearch } from "../../features/products/productsSlice";
import { useNavigate } from "react-router-dom";
import { FaChevronLeft, FaSearch } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import { useSelector } from "react-redux";

const MobileSearchOverlay = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const products = useSelector((state) => state.products.items);

  if (!isOpen) return null;

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(setSearch(query));
    navigate("/shop");
    onClose();
  };

  //clear search
  const clearSearch = () => {
    setQuery("");
    dispatch(setSearch(""));
  };

  //search suggestions
  const suggestions = query.length > 0 ? 
    products.filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    ).slice(0, 5)
    : [];

  return (
    <div className="fixed inset-0 bg-white z-50">
      <form onSubmit={handleSearch} className="relative flex items-center gap-3 border-b px-4 py-2 border-gray-200 shadow-sm">
        
        {/* Back Button */}
        <button
          type="button"
          onClick={onClose}
          className="text-xl"
        >
          <FaChevronLeft />
        </button>

        {/* Input */}
        <input
          type="text"
          placeholder="Search products..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-1 focus:outline-none py-2 border-r border-gray-200"
          autoFocus
        />

        {/* Cancel icon */}
          {query && (
            <button onClick={clearSearch} className='absolute right-15 text-sm text-gray-400'>
              <FiX size={22} />
            </button>
          )}

        {/* Search Button */}
        <button type="submit"><FaSearch /></button>
      </form>

      {/* suggestion ui */}
      {query && suggestions.length > 0 && (
        <div className="px-4 py-2">
          {suggestions.map((product) => (
            <div
              key={product.id}
              onClick={() => {
                dispatch(setSearch(product.name));
                navigate("/shop");
                onClose();
              }}
              className="py-4 text-sm text-gray-500 cursor-pointer hover:text-gray-400"
            >
              {product.name}
            </div>
          ))}
        </div>

      )}
    </div>
  );
};

export default MobileSearchOverlay;
