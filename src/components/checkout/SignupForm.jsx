import { useReducer } from "react";
import { useDispatch, useSelector } from "react-redux";
import { formReducer } from "../../reducers/formReducer";
import { clearCart } from "../../features/cart/cartSlice";
import { useNavigate } from "react-router-dom";

const initialState = {
  name: "",
  email: "",
  phone: "",
  address: "",
  city: "",
  errors: {},
  isSubmitting: false,
};

function SignupForm() {
  const [state, formDispatch] = useReducer(formReducer, initialState);
  const reduxDispatch = useDispatch();
  const navigate = useNavigate();
  const { items } = useSelector((state) => state.cart);

  const handleChange = (e) => {
    formDispatch({
      type: "update_form",
      field: e.target.name,
      value: e.target.value,
    });
  };

  const validate = () => {
    let errors = {};

    if (!state.name.trim()) errors.name = "Full name is required";
    if (!state.email.includes("@")) errors.email = "Invalid email address";
    if (!state.phone.trim()) errors.phone = "Phone number is required";
    if (!state.address.trim()) errors.address = "Address is required";
    if (!state.city.trim()) errors.city = "City is required";

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = validate();

    if (Object.keys(errors).length > 0) {
      formDispatch({ type: "set_errors", payload: errors });
      return;
    }

    if (!items.length) return;

    formDispatch({ type: "set_submitting", payload: true });

    //Processing delay
    setTimeout(() => {
      reduxDispatch(clearCart());
      formDispatch({ type: "set_submitting", payload: false });
      formDispatch({ type: "reset" });
      navigate("/order-success");
    }, 2000);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-xl space-y-6">
      <h2 className="text-2xl font-semibold">Shipping Details</h2>

      {/* Name */}
      <div>
        <label className="block text-sm mb-1 font-medium">Full Name</label>
        <input
          name="name"
          value={state.name}
          onChange={handleChange}
          placeholder="Enter your full name"
          className="w-full border border-gray-300 p-3 rounded-lg outline-none focus:ring-2 focus:ring-black text-black"
        />
        {state.errors.name && (
          <p className="text-red-500 text-sm mt-1">{state.errors.name}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm mb-1 font-medium">Email</label>
        <input
          name="email"
          value={state.email}
          onChange={handleChange}
          placeholder="Enter your email"
          className="w-full border border-gray-300 p-3 rounded-lg outline-none focus:ring-2 focus:ring-black"
        />
        {state.errors.email && (
          <p className="text-red-500 text-sm mt-1">{state.errors.email}</p>
        )}
      </div>

      {/* Phone */}
      <div>
        <label className="block text-sm mb-1 font-medium">Phone Number</label>
        <input
          type="tel"
          name="phone"
          value={state.phone}
          onChange={handleChange}
          placeholder="Enter your phone number"
          className="w-full border border-gray-300 p-3 rounded-lg outline-none focus:ring-2 focus:ring-black"
        />
        {state.errors.phone && (
          <p className="text-red-500 text-sm mt-1">{state.errors.phone}</p>
        )}
      </div>

      {/* Address */}
      <div>
        <label className="block text-sm mb-1 font-medium">Address</label>
        <input
          type="text"
          name="address"
          value={state.address}
          onChange={handleChange}
          placeholder="Enter full address"
          className="w-full border border-gray-300 p-3 rounded-lg outline-none focus:ring-2 focus:ring-black"
        />
        {state.errors.address && (
          <p className="text-red-500 text-sm mt-1">{state.errors.address}</p>
        )}
      </div>

      {/* City */}
      <div>
        <label className="block text-sm mb-1 font-medium">City</label>
        <input
          type="text"
          name="city"
          value={state.city}
          onChange={handleChange}
          placeholder="Enter your city"
          className="w-full border border-gray-300 p-3 rounded-lg outline-none focus:ring-2 focus:ring-black"
        />
        {state.errors.city && (
          <p className="text-red-500 text-sm mt-1">{state.errors.city}</p>
        )}
      </div>

      {/* Button */}
      <button type="submit" disabled={state.isSubmitting} className={`w-full py-3 rounded-xl font-semibold transition duration-300 flex items-center justify-center gap-2 
      ${state.isSubmitting
        ? "bg-gray-400 cursor-not-allowed"
        : "bg-black text-white hover:bg-[#281a17]"
      }`}
      >
        {state.isSubmitting ? (
          <>
            <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
            Processing...
          </>
          ) : (
            "Place Order"
          )}
      </button>

    </form>
  );
}

export default SignupForm;
