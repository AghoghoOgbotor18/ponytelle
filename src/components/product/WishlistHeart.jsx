import React from 'react'
import { addToWishlist, removeFromWishlist } from "../../features/wishList/wishlistSlice";
import { useSelector } from "react-redux";
import { FaHeart } from 'react-icons/fa';
import { FiHeart } from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

const WishlistHeart = ({product}) => {
    const dispatch = useDispatch();
    const wishlistItems = useSelector((state) => state.wishlist.items);
      const isInWishlist = wishlistItems.some(
        (item) => item.id === product.id
    );

    return (
        <div className={`absolute top-3 right-3 z-10 opacity-0 group-hover:opacity-100 active:opacity-100 md:opacity-0 transition ${isInWishlist ? "opacity-100" : ""}`}
        >
            <button onClick={(e) => {
                e.preventDefault();
                e.stopPropagation(); //prevents opening product page

                if (isInWishlist) {
                    dispatch(removeFromWishlist(product.id));
                    toast.success(`${product.name} removed from wishlist`)
                } else {
                    dispatch(addToWishlist(product));
                    toast.success(`${product.name} added to wishlist`)
                }
                }}
                className={`w-9 h-9 flex items-center justify-center rounded-full shadow-md transition
                ${isInWishlist ? "text-red-600 bg-white/50 scale-110" : "bg-white/50 text-black hover:scale-110"
                }`}
            >
                {isInWishlist ? <FaHeart size={16} /> : <FiHeart size={16} />}
            </button>
        </div>
    )
}

export default WishlistHeart
