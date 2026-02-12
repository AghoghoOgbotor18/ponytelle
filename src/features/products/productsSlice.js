// src/features/products/productsSlice.js
import { createSlice } from "@reduxjs/toolkit";
import productData from "../../data/products.json";

const initialState = {
  items: productData,
  filteredItems: productData,
  filters: {
    category: "all",
    rating: null,
    length: null,
    priceMax: null,
    sort: null,
    search:""
  },
};

const applyFilters = (items, filters) => {
    let result = [...items];

    //search
    if (filters.search) {
        const q = filters.search.toLowerCase();
        result = result.filter((p) =>
        p.name.toLowerCase().includes(q)
        );
    }

    //category filtering
    if (filters.category && filters.category !== "all") {
        result = result.filter((p) => p.category === filters.category);
    }

    //rating filtering
    if (filters.rating) {
        result = result.filter((p) => p.rating >= filters.rating);
    }

    //hair length filtering
    if (filters.length) {
        result = result.filter((p) => p.length === filters.length);
    }

    //price filtering
    if (filters.priceMax) {
        result = result.filter((p) => p.price <= filters.priceMax);
    }

    //sorting
    if (filters.sort === "price-low-high") {
        result.sort((a, b) => a.price - b.price);
    }

    if (filters.sort === "price-high-low") {
        result.sort((a, b) => b.price - a.price);
    }

    if (filters.sort === "rating") {
        result.sort((a, b) => b.rating - a.rating);
    }

    return result;
    };

    const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        setCategory: (state, action) => {
            state.filters.category = action.payload;
            state.filteredItems = applyFilters(state.items, state.filters);
        },

        setRating: (state, action) => {
            state.filters.rating = action.payload;
            state.filteredItems = applyFilters(state.items, state.filters);
        },

        setLength: (state, action) => {
            state.filters.length = action.payload;
            state.filteredItems = applyFilters(state.items, state.filters);
        },

        setPriceMax: (state, action) => {
            state.filters.priceMax = action.payload;
            state.filteredItems = applyFilters(state.items, state.filters);
        },

        setSort: (state, action) => {
            state.filters.sort = action.payload;
            state.filteredItems = applyFilters(state.items, state.filters);
        },

        setSearch: (state, action) => {
            state.filters.search = action.payload;
            state.filteredItems = applyFilters(state.items, state.filters);
        },

        resetFilters: (state) => {
        state.filters = {
            category: "all",
            rating: null,
            length: null,
            priceMax: null,
            sort: null,
        };
        state.filteredItems = state.items;
        },
    },
});

export const { setCategory, setRating, setLength, setPriceMax, setSort, setSearch, resetFilters } = productsSlice.actions;

export default productsSlice.reducer;
