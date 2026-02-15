import { useSelector } from "react-redux";

const CartSummary = () => {
    const { items } = useSelector((state) => state.cart);

    const subtotal = items.reduce(
        (total, item) => total + item.price * item.quantity, 0);

    const shipping = subtotal > 0 ? 3000 : 0;
    const total = subtotal + shipping;

    return (
        <div className="p-6 rounded-xl shadow-2xl space-y-4">
        <h2 className="text-xl font-semibold">Order Summary</h2>

        <div className="flex justify-between">
            <span>Subtotal</span>
            <span>&#8358;{subtotal.toLocaleString()}</span>
        </div>

        <div className="flex justify-between">
            <span>Shipping</span>
            <span>&#8358;{shipping.toLocaleString()}</span>
        </div>

        <hr />

        <div className="flex justify-between font-bold text-lg">
            <span>Total</span>
            <span>&#8358;{total.toLocaleString()}</span>
        </div>

        <button className="w-full bg-black text-white py-3 rounded-full hover:bg-[#281a17] transition">
            Checkout
        </button>
        </div>
    );
};

export default CartSummary;
