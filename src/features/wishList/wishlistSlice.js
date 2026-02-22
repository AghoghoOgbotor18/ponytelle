import { createSlice } from "@reduxjs/toolkit";

// Load from localStorage
const loadWishlist = () => {
  try {
    const stored = localStorage.getItem("wishlist");
    const parsed = stored ? JSON.parse(stored) : [];

    return Array.isArray(parsed)
      ? parsed.filter((item) => item && item.id)
      : [];
  } catch (error) {
    return [];
  }
};

const initialState = {
  items: loadWishlist(),
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist: (state, action) => {
      if (!action.payload || !action.payload.id) return;

      const exists = state.items.find(
        (item) => item && item.id === action.payload.id
      );

      if (!exists) {
        state.items.push(action.payload);
        localStorage.setItem(
          "wishlist",
          JSON.stringify(state.items)
        );
      }
    },

    removeFromWishlist: (state, action) => {
      state.items = state.items.filter(
        (item) => item.id !== action.payload
      );

      localStorage.setItem(
        "wishlist",
        JSON.stringify(state.items)
      );
    },

    clearWishlist: (state) => {
      state.items = [];
      localStorage.removeItem("wishlist");
      console.log(localStorage.removeItem("wishlist"))
    },
  },
});

export const {
  addToWishlist,
  removeFromWishlist,
  clearWishlist,
} = wishlistSlice.actions;

export default wishlistSlice.reducer;