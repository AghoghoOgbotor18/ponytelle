import React, { useEffect } from "react";
import FilterSidebar from "../components/shop/FilterSidebar";
import ProductGrid from "../components/product/ProductGrid";
import MobileFilterBar from "../components/shop/MobileFilterBar";
import { useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCategory } from "../features/products/productsSlice";
import SortBar from "../components/shop/SortBar";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const Shop = () => {
  const products = useSelector((state) => state.products.items) || [];

  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();

  const categoryFromUrl = searchParams.get("category");

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const filter = queryParams.get("filter");

  //show product according to category
  useEffect(() => {
    if (categoryFromUrl) {
      dispatch(setCategory(categoryFromUrl));
    }
  }, [categoryFromUrl, dispatch]);

  let filteredProducts = products;

  //show products by filter
  if (filter === "bestsellers") {
    filteredProducts = products.filter(
      (product) => product.isBestSeller
    );
  }


  return (
    <>
      <section className="container mx-auto grid grid-cols-1 md:grid-cols-[280px_1fr] gap-10 py-10 md:pt-20 pt-12">
        {/* Filters */}
        <aside className="hidden md:block">
          <FilterSidebar />
        </aside>

        {/* Products */}
        <div>
          <SortBar />
          <ProductGrid products={filteredProducts} />
        </div>
      </section>

      {/* Mobile filter bar */}
      <MobileFilterBar />
    </>
  );
};

export default Shop;
