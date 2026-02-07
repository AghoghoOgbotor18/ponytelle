import React from 'react';
import {createSlice} from "@reduxjs/toolkit";
import productData from "../../data/products.json"

const initialState = {
    items: productData,
    filteredItems: productData, //products after filter/search
    status: "idle"
};
const productsSlice = createSlice({
    name: "products", 
    initialState,
    reducers: {
        //search products

        //search by name
        searchProducts: (state, action) => {
            const query = action.payload.toLowerCase();
            
            state.filteredItems = state.items.filter((product) => (
                product.name.toLowerCase().includes(query)
            ))
        },

        //filter by category
        filterByCategory: (state, action) => {
            const category = action.payload;
            if(category === "all"){
                state.filteredItems = state.items
            } else{
                state.filteredItems = state.items.filter(
                    (product) => product.category === category
                )
            }
        },

        //Filter by price range
        filterByPriceRange: (state, action) => {
        const { min, max } = action.payload;

        state.filteredItems = state.items.filter(
            (product) => product.price >= min && product.price <= max
        );
        },

        //
        sortProducts: (state, action) => {
        const sortBy = action.payload;

            if (sortBy === "price-low-high") {
                state.filteredItems = [...state.filteredItems].sort(
                (a, b) => a.price - b.price
                );
            }

            if (sortBy === "price-high-low") {
                state.filteredItems = [...state.filteredItems].sort(
                (a, b) => b.price - a.price
                );
            }

            if (sortBy === "rating") {
                state.filteredItems = [...state.filteredItems].sort(
                (a, b) => b.rating - a.rating
                );
            }
        },

        //Reset filters
        resetFilters: (state) => {
        state.filteredItems = state.items;
        },
  
    }
});
export const { searchProducts, filterByCategory, filterByPriceRange, sortProducts, resetFilters, } = productsSlice.actions;
export default productsSlice.reducer;