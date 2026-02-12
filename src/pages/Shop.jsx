import React, { useEffect } from "react";
import FilterSidebar from "../components/shop/FilterSidebar";
import ProductGrid from "../components/product/ProductGrid";
import MobileFilterBar from "../components/shop/MobileFilterBar";
import { useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCategory } from "../features/products/productsSlice";
import SortBar from "../components/shop/SortBar";

const Shop = () => {

  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();

  const categoryFromUrl = searchParams.get("category");

  useEffect(() => {
    if (categoryFromUrl) {
      dispatch(setCategory(categoryFromUrl));
    }
  }, [categoryFromUrl, dispatch]);

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
          <ProductGrid />
        </div>
      </section>

      {/* Mobile filter bar */}
      <MobileFilterBar />
    </>
  );
};

export default Shop;
