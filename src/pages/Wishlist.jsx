import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";
import { removeFromWishlist } from "../features/wishList/wishlistSlice";
import { FaHeart } from "react-icons/fa";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const Wishlist = () => {
  const { items } = useSelector((state) => state.wishlist);
  const dispatch = useDispatch();

  const validItems = items?.filter(Boolean) || [];

  return (
    <div className="container mx-auto px-4 md:px-6 mt-25 mb-25">
      
      {/* Title */}
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl md:text-3xl font-bold">
          Wishlist ({validItems.length})
        </h1>
      </div>

      {/* Empty State */}
      {items.length === 0 ? (
        <div className="flex flex-col items-center justify-center text-center py-20">
          <FaHeart className="text-4xl text-gray-300 mb-2" />
          <p className="text-gray-500 text-lg">
            Your wishlist is empty
          </p>
          <Link to="/shop" className="bg-black py-2 px-3 text-white rounded hover:bg-[#281a17] mt-10">
            Shop Now
          </Link>
        </div>
      ) : (
        <div className="">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex flex-col md:flex-row justify-between items-between md:items-center shadow-xl p-4 rounded mb-10"
            >
              <div className="h-30 flex justify-between gap-4 rounded-lg mb-4 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-full object-contain rounded"
                />
                <div className="flex-1">
                  <h2 className="font-semibold text-lg mb-3 line-clamp-1">
                    {item.name}
                  </h2>
                  <div className="text-gray-600 font-medium">
                    <p className="mb-1">
                      &#8358;{item.price}
                    </p>
                    <p>
                      Length: {item.length}" | Color: {item.color}
                    </p>
                  </div>
                </div>
              </div>

              <hr className="text-slate-100 py-3 md:hidden" />
              {/* Actions */}
              <div className="flex justify-between md:justify-end gap-3 mt-auto">
                <button
                  onClick={() => {dispatch(addToCart(item)); toast.success(`${item.name} added to cart`)}}
                  className="bg-black hover:bg-[#281a17] text-white py-2 rounded text-sm hover:opacity-90 transition px-3 cursor-pointer"
                >
                  Add to Cart
                </button>

                <button
                  onClick={() =>{
                    dispatch(removeFromWishlist(item.id));
                    toast.success(`${item.name} removed from wishlist`)
                  }}
                  className="px-3 border rounded text-sm transition hover:bg-gray-100 cursor-pointer"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;