import React from "react";
import { Link } from "react-router-dom";

const OrderSuccess = () => {
  return (
    <div className="min-h-[60vh] flex flex-col justify-center items-center text-center">
      <h1 className="text-3xl font-bold mb-4">Order Successful 🎉</h1>
      <p className="text-gray-600 mb-6">
        Thank you for your purchase. Your order is being processed.
      </p>
      <Link
        to="/shop"
        className="bg-black text-white px-6 py-3 rounded hover:bg-[#281a17]"
      >
        Continue Shopping
      </Link>
    </div>
  );
};

export default OrderSuccess;
