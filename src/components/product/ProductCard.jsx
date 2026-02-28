// src/components/shared/ProductCard.jsx
import React, { useState } from "react";
import { FiShoppingBag } from "react-icons/fi";
import { FaFire, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import WishlistHeart from "./WishlistHeart";

const ProductCard = ({ product, variant = "shop", onAddToCart }) => {

  //show wishlist heart
  const [show, setShow] = useState(false);
  const toggleShow = () => setShow(true);

  //best seller cards
  const rating = Math.round(product.rating || 0);
  const oldPrice = product.price + 5000;

  const isSpecial = variant === "special";

  const navigate = useNavigate();

  return (
    <div
      className={`group bg-white border border-zinc-100/60 rounded-xl transition hover:shadow-lg active:shadow-lg ${
        isSpecial
          ? "min-w-[220px] p-1.5"
          : "p-2 h-[340px] flex flex-col"
      }`} 
    >
      <Link to={`/product/${product.id}`} className="block" onMouseEnter={toggleShow} onMouseLeave={() => setShow(false)}>
        {/* Image */}
        <div
          className={`relative overflow-hidden rounded-lg ${
            isSpecial ? "h-[220px]" : "h-44"
          }`}
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />

          {product.isBestSeller && (
            <span className="absolute top-3 left-3 bg-black text-white text-xs px-3 py-1 rounded-full">
              Best Seller
            </span>
          )}

          {/* wishlist heart */}
          {show && (
            <WishlistHeart product ={product} />
          )}
        </div>

        {/* Content */}
        <div className={`${isSpecial ? "py-3" : "py-2 flex-1 flex flex-col justify-between"}`}>
          <div>
            <h3 className={`font-semibold ${
                isSpecial ? "text-sm truncate w-[80%]" : "text-sm line-clamp-1"
              }`}
            >
              {product.name}
            </h3>

            {/* Shop Variant Only */}
            {!isSpecial && (
              <>
                <p className="text-xs text-gray-500 capitalize">
                  {product.category} • {product.length} inches
                </p>

                <div className="flex items-center gap-1 text-sm mt-1">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={
                        i < rating ? "text-yellow-400" : "text-gray-300"
                      }
                    />
                  ))}
                </div>
              </>
            )}
          </div>

          {/* sold items */}
          {product.isBestSeller && (
            <div className="flex items-center gap-1 mt-1 text-red-800 text-xs">
              <FaFire/>
              <p>{product.sold}</p>
            </div>
          )}

          {/* Price + Button */}
          <div className={`mt-2 ${
              isSpecial
                ? ""
                : "flex items-center justify-between pt-2"
            }`}
          >
            <div className="flex items-center gap-1">
              <span className="font-bold brand-color">
                &#8358;{product.price.toLocaleString()}
              </span>

              {product.isBestSeller && (
                <span className="text-xs text-gray-400 line-through pr-2">
                  &#8358;{oldPrice.toLocaleString()}
                </span>
              )}
            </div>

            {!isSpecial ? (
              <button
                onClick={(e) => {
                  e.preventDefault();
                  onAddToCart?.(product);
                }}
                className="p-2 rounded-full brand-bg text-white"
              >
                <FiShoppingBag onClick={() => navigate("/cart")} />
              </button>
            ) : (
              <button className="mt-3 w-full bg-black hover:bg-[#281a17] text-white rounded py-2 px-3 transition">
                Shop Now
              </button>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
