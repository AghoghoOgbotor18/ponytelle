import React from "react";
import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";

const OrderSuccess = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-6 mt-18">
      <div className="bg-white shadow-2xl rounded-3xl p-10 text-center max-w-md w-full">
        
        <div className="flex justify-center mb-6">
          <CheckCircle size={70} className="text-green-500" />
        </div>

        <h1 className="text-3xl font-bold mb-4">
          Order Successful
        </h1>

        <p className="text-gray-600 mb-6">
          Thank you for your purchase. Your order has been received
          and is now being processed.
        </p>

        <div className="bg-gray-50 p-4 rounded-xl mb-6">
          <p className="text-sm text-gray-500">
            A confirmation email will be sent shortly.
          </p>
        </div>

        <Link
          to="/shop"
          className="inline-block w-full bg-black hover:bg-[#281a17] text-white py-3 rounded-xl font-semibold hover:brand-bg transition"
        >
          Continue Shopping
        </Link>
      </div>
    </div>
  );
};

export default OrderSuccess;
