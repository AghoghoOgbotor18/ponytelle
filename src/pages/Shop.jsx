import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import {
  filterByCategory,
  sortProducts,
  resetFilters,
} from "../features/products/productsSlice";
import ProductCard from "../components/product/ProductCard";

const Shop = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const categoryFromUrl = searchParams.get("category");

  const products = useSelector((state) => state.products.filteredItems);
  const allProducts = useSelector((state) => state.products.items);

  // Apply category from URL when coming from Home page
  useEffect(() => {
    if (categoryFromUrl) {
      dispatch(filterByCategory(categoryFromUrl));
    } else {
      dispatch(resetFilters());
    }
  }, [categoryFromUrl, dispatch]);

  return (
    <div className="container mx-auto px-4 py-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
        <div>
          <h1 className="text-3xl font-black">Shop Ponytail Wigs</h1>
          <p className="text-sm text-gray-500 mt-1">
            Showing {products.length} of {allProducts.length} products
          </p>
        </div>

        {/* Sort */}
        <select
          onChange={(e) => dispatch(sortProducts(e.target.value))}
          className="mt-4 md:mt-0 border rounded-md px-3 py-2"
          defaultValue=""
        >
          <option value="" disabled>
            Sort by
          </option>
          <option value="price-low-high">Price: Low → High</option>
          <option value="price-high-low">Price: High → Low</option>
          <option value="rating">Top Rated</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Filters */}
        <aside className="md:col-span-1 border rounded-lg p-5 h-fit sticky top-24">
          <h3 className="font-semibold text-lg mb-4">Filter By</h3>

          {/* Categories */}
          <div className="mb-6">
            <h4 className="font-medium mb-2">Category</h4>
            <div className="flex flex-col gap-2">
              <button
                onClick={() => dispatch(filterByCategory("all"))}
                className="text-left hover:underline"
              >
                All
              </button>
              <button
                onClick={() => dispatch(filterByCategory("straight"))}
                className="text-left hover:underline"
              >
                Straight
              </button>
              <button
                onClick={() => dispatch(filterByCategory("curly"))}
                className="text-left hover:underline"
              >
                Curly
              </button>
              <button
                onClick={() => dispatch(filterByCategory("kinky"))}
                className="text-left hover:underline"
              >
                Kinky
              </button>
              <button
                onClick={() => dispatch(filterByCategory("wavy"))}
                className="text-left hover:underline"
              >
                Wavy
              </button>
            </div>
          </div>

          {/* Clear Filters */}
          <button
            onClick={() => dispatch(resetFilters())}
            className="mt-4 text-sm text-red-500 hover:underline"
          >
            Clear Filters
          </button>
        </aside>

        {/* Products Grid */}
        <section className="md:col-span-3">
          {products.length === 0 ? (
            <div className="py-20 text-center text-gray-500">
              No products found for this category.
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default Shop;
