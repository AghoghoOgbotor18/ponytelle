// src/components/shared/ProductCard.jsx
import React from "react";
import { FiShoppingBag } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProductCard = ({ product, variant = "shop", onAddToCart }) => {
  const rating = Math.round(product.rating); // 4.6 → 5

  return (
    <Link to={`/product/${product.id}`} className="block">
      <div className="group border border-zinc-100/60 rounded-xl p-2 hover:shadow-lg transition bg-white h-[340px] flex flex-col">
        <div className="relative overflow-hidden rounded-lg h-44">
          <img src={product.image} alt={product.name} className="h-full w-full object-cover group-hover:scale-105 group-active:scale-105 transition duration-300" />
        </div>

        <div className="p-3 space-y-2 flex-1 flex flex-col justify-between">
          <div>
            <h3 className="font-semibold text-sm line-clamp-1">{product.name}</h3>

            {variant === "shop" && (
              <p className="text-xs text-gray-500 capitalize">
                {product.category} • {product.length} inches
              </p>
            )}

            {variant === "shop" && (
              <div className="flex items-center gap-1 text-sm mt-1">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className={i < rating ? "text-yellow-400" : "text-gray-300"}
                  />
                ))}
              </div>
            )}
          </div>

          <div className="flex items-center justify-between pt-2">
            <span className="font-bold text-[#281a17]">
              &#8358;{product.price.toLocaleString()}
            </span>

            {variant === "shop" ? (
              <button className="bg-[#281a17] text-white p-2 rounded-full">
                <FiShoppingBag />
              </button>
            ) : (
              <button className="text-xs px-3 py-1.5 rounded bg-black text-white">
                Shop Now
              </button>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
