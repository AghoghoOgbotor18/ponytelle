import { createSlice } from "@reduxjs/toolkit";

// Load from localStorage
const loadWishlist = () => {
  try {
    const stored = localStorage.getItem("wishlist");
    return stored ? JSON.parse(stored) : [];
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
      const exists = state.items.find(
        (item) => item.id === action.payload.id
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
    },
  },
});

export const {
  addToWishlist,
  removeFromWishlist,
  clearWishlist,
} = wishlistSlice.actions;

export default wishlistSlice.reducer;