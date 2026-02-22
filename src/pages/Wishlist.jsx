import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";
import { removeFromWishlist } from "../features/wishList/wishlistSlice";

const Wishlist = () => {
  const { items } = useSelector((state) => state.wishlist);
  const dispatch = useDispatch();

  if (items.length === 0) {
    return <p className="p-6 text-center">Your wishlist is empty</p>;
  }

  return (
    <div className="container mx-auto p-6 grid gap-6">
      {items.map((item) => (
        <div
          key={item.id}
          className="flex justify-between items-center border p-4 rounded"
        >
          <div>
            <p className="font-semibold">{item.name}</p>
            <p className="text-sm text-gray-500">${item.price}</p>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => dispatch(addToCart(item))}
              className="brand-bg text-white px-4 py-2 rounded"
            >
              Add to Cart
            </button>

            <button
              onClick={() =>
                dispatch(removeFromWishlist(item.id))
              }
              className="border px-4 py-2 rounded"
            >
              Remove
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Wishlist;