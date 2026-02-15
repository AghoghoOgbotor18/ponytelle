import { FaChevronLeft } from "react-icons/fa";
import CartItems from "../components/cart/CartItem";
import CartSummary from "../components/cart/CartSummary";
import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <>
      <Link to="/shop" className="text-gray-700 flex items-center gap-1 mt-20 ml-3">
        <FaChevronLeft /> Back to Shop
      </Link>
      <section className="pt-4 container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
        <div className="grid md:grid-cols-3 gap-10">
          <div className="md:col-span-2">
            <CartItems />
          </div>

          <div>
            <CartSummary />
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
