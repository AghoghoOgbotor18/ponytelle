import { createSlice } from "@reduxjs/toolkit";
import { loadFromStorage, saveToStorage } from "../../utils/localStorage";

const initialState = {
  items: loadFromStorage("cart") || [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { id, name, price, image, length, color } = action.payload;

      const existingItem = state.items.find(
        (item) =>
          item.id === id &&
          item.length === length &&
          item.color === color
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({
          id,
          name,
          price,
          image,
          length,
          color,
          quantity: 1,
        });
      }

      saveToStorage("cart", state.items);
    },

    removeFromCart: (state, action) => {
      state.items.splice(action.payload, 1);
      saveToStorage("cart", state.items);
    },

    increaseQuantity: (state, action) => {
      state.items[action.payload].quantity += 1;
      saveToStorage("cart", state.items);
    },

    decreaseQuantity: (state, action) => {
        const item = state.items[action.payload];

        if (item.quantity > 1) {
            item.quantity -= 1;
            saveToStorage("cart", state.items);
        }
    },

    clearCart: (state) => {
      state.items = [];
      saveToStorage("cart", []);
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
