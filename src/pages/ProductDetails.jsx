import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaChevronLeft, FaStar } from "react-icons/fa";

const ProductDetails = () => {
  const { id } = useParams();
  const [selectedLength, setSelectedLength] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [error, setError] = useState("");

  const product = useSelector((state) =>
    state.products.items.find((p) => String(p.id) === id)
  );

  // scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return (
      <div className="pt-24 container mx-auto text-center">
        <h2 className="text-2xl font-semibold">Product not found</h2>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (!selectedLength || !selectedColor) {
      setError("Please select a length and color before adding to cart.");
      return;
    }

    setError("");
    console.log("Added to cart:", {
      ...product,
      selectedLength,
      selectedColor,
    });

  };

  return (
    <section className="pt-20 container mx-auto">
      <Link
        to="/shop"
        className="flex items-center gap-2 pb-10 text-gray-800 hover:text-gray-600"
      >
        <FaChevronLeft /> Back to Shop
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-3">
        {/* Image */}
        <div>
          <img
            src={product.image}
            alt={product.name}
            className="w-full rounded-2xl shadow-lg"
          />
        </div>

        {/* Details */}
        <div className="space-y-5">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-xl font-semibold">
            &#8358;{product.price.toLocaleString()}
          </p>

          <div className="text-sm text-gray-600 space-y-1">
            <p>
              <span className="font-medium">Category:</span> {product.category}
            </p>
            <p className="flex items-center gap-1">
              <span className="font-medium">Rating:</span>{" "}
              <FaStar className="text-yellow-500" /> {product.rating}
            </p>
          </div>

          {/* Length Selector */}
          {product.availableLengths && (
            <div>
              <p className="font-medium mb-2">Select Length</p>
              <div className="flex gap-2 flex-wrap">
                {product.availableLengths.map((len) => (
                  <button
                    key={len}
                    onClick={() => setSelectedLength(len)}
                    className={`px-4 py-2 rounded-full border text-sm transition
                      ${
                        selectedLength === len
                          ? "bg-black text-white border-[#281a17]"
                          : "border-gray-300 hover:border-[#281a17]"
                      }`}
                  >
                    {len} inches
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Color Selector */}
          {product.availableColors && (
            <div>
              <p className="font-medium mb-2">Select Color</p>
              <div className="flex gap-2 flex-wrap">
                {product.availableColors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-4 py-2 rounded-full border text-sm transition
                      ${
                        selectedColor === color
                          ? "bg-black text-white border-[#281a17]"
                          : "border-gray-300 hover:border-[#281a17]"
                      }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>
          )}

          {error && (
            <p className="text-red-500 text-sm font-medium">{error}</p>
          )}

          <p className="text-gray-700 leading-relaxed">
            {product.description ||
              "This premium wig is crafted with high-quality fibers for a natural look and long-lasting comfort."}
          </p>

          <button
            onClick={handleAddToCart}
            className="mt-4 px-6 py-3 rounded-full bg-black text-white hover:bg-[#281a17] transition"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
