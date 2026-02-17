// src/pages/Checkout.jsx
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import SignupForm from "../components/checkout/SignupForm";
import { clearCart } from "../features/cart/cartSlice";

const Checkout = () => {
  const { items } = useSelector((state) => state.cart);

  const subtotal = items.reduce(
    (acc, item) => acc + (item.price * item.quantity), 0
  );

  const delivery = items.length > 0 ? 3000 : 0;
  const totalAmount = subtotal + delivery;

  return (
    <div className="max-w-6xl mx-auto px-6 pt-25 py-12 grid md:grid-cols-2 gap-10">
      
      {/* Shipping Form */}
      <div>
        <SignupForm />
      </div>

      {/* Order Summary */}
      <div className="bg-gray-50 p-6 rounded-lg h-fit shadow-2xl">
        <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>

        {items.map((item) => (
          <div key={item.id} className="flex justify-between mb-3 text-gray-800">
            <p>{item.name} * {item.quantity}</p>
            
            <p>&#8358;{(item.price * item.quantity).toLocaleString()}</p>
          </div>
        ))}

        <hr className="my-4 text-gray-300" />

        {/* Subtotal */}
        <div className="flex justify-between mb-2">
          <span className="text-gray-900">Subtotal</span>
          <span>&#8358;{subtotal.toLocaleString()}</span>
        </div>

        {/* Delivery */}
        <div className="flex justify-between mb-2">
          <span className="text-gray-900">Delivery</span>
          <span>&#8358;{delivery.toLocaleString()}</span>
        </div>

        <hr className="my-4 text-gray-300" />

        <div className="flex justify-between font-bold text-lg">
          <span>Total</span>
          <span>&#8358;{totalAmount.toLocaleString()}</span>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
