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

    reduxDispatch(clearCart());
    navigate("/order-success");
    formDispatch({ type: "reset" });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-8 rounded-2xl shadow-xl space-y-6"
    >
      <h2 className="text-2xl font-semibold">Shipping Details</h2>

      {/* Name */}
      <div>
        <label className="block text-sm mb-1 font-medium">Full Name</label>
        <input
          name="name"
          value={state.name}
          onChange={handleChange}
          placeholder="Enter your full name"
          className="w-full border border-gray-300 p-3 rounded-lg outline-none focus:ring-2 focus:ring-black"
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
      <button
        type="submit"
        className="w-full bg-black text-white py-3 rounded-xl font-semibold hover:bg-[#281a17] transition duration-300"
      >
        Place Order
      </button>
    </form>
  );
}

export default SignupForm;
