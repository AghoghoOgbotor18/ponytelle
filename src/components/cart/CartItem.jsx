import { useSelector, useDispatch } from "react-redux";
import { increaseQuantity, decreaseQuantity } from "../../features/cart/cartSlice";
import { FaMinus, FaTrash, FaPlus } from "react-icons/fa";
import Modal from "../common/Modal";
import { useState } from "react";
import { Link } from "react-router-dom";

const CartItems = () => {
    const { items } = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    //modal
    const [modalIndex, setModalIndex] = useState(null);

    if (items.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center gap-4">
                <p>Your cart is empty.</p>
                <Link to="/shop" className="py-2 px-5 rounded bg-black hover:bg-[#281a17] text-white text-sm">Shop Now</Link>
            </div>
        );
    }

    return (
        <div className="relative space-y-3 rounded-xl shadow-2xl p-3 ">
            {items.map((item, index) => (
                <div key={index} className={`flex flex-col ${index !== 0 ? "border-t border-gray-200 pt-4" : ""}`}>
                    <div className="flex gap-6 p-4">
                        <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded-lg" />
                        <div className="flex-1 space-y-2">
                            <h3 className="font-semibold">{item.name}</h3>
                            <p className="text-sm text-gray-600">
                                Length: {item.length}" | Color: {item.color}
                            </p>
                            <p className="font-medium">&#8358;{item.price.toLocaleString()}</p>
                        </div>
                        <div className="font-semibold">
                            &#8358;{(item.price * item.quantity).toLocaleString()}
                        </div>
                    </div>
                    <div className="flex justify-between items-center">
                        <button onClick={() => setModalIndex(index)} className="ml-4 text-red-500 hover:bg-red-100 py-1 px-2 rounded text-sm flex items-center gap-2 cursor-pointer">
                            <FaTrash /> Remove
                        </button>
                        <div className="flex items-center gap-5">
                            <button onClick={() => item.quantity > 1 && dispatch(decreaseQuantity(index))}className={`px-3 py-2 rounded transition cursor-pointer
                                ${
                                    item.quantity === 1
                                        ? "bg-gray-400 text-white cursor-not-allowed"
                                        : "bg-black hover:bg-[#281a17] text-white"
                                }`}
                            >
                                <FaMinus size={14} />
                            </button>
                            <span className="font-semibold">{item.quantity}</span>
                            <button onClick={() => dispatch(increaseQuantity(index))} className="px-3 py-2 rounded bg-black hover:bg-[#281a17] text-white cursor-pointer">
                                <FaPlus size={14} />
                            </button>
                        </div>
                    </div>
                    {modalIndex !== null && (
                        <Modal item={item} index={modalIndex} closeModal={() => setModalIndex(null)} />
                    )}
                </div>
            ))}
        </div>
    );
};

export default CartItems;
