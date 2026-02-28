import { FiFilter, FiChevronDown, FiX } from "react-icons/fi";
import { useState } from "react";
import FilterSidebar from "./FilterSidebar";
import { useDispatch } from "react-redux";
import { setSort } from "../../features/products/productsSlice";
import { FaArrowRight } from "react-icons/fa";

const MobileFilterBar = () => {
  const [openFilter, setOpenFilter] = useState(false);
  const [openSort, setOpenSort] = useState(false);
  const dispatch = useDispatch();

  
  return (
    <div className="flex justify-center items-center">
      {/* Fixed bottom bar */}
      <div className="fixed w-1/2 bottom-3 bg-black text-white flex md:hidden rounded-3xl py-1 z-40">
        <button className="flex-1 py-3 flex items-center justify-center gap-2 cursor-pointer" onClick={() => setOpenFilter(true)}>
          <FiFilter /> Filter
        </button>
        <button className="flex-1 py-3 flex items-center justify-center gap-2 border-l cursor-pointer" onClick={() => setOpenSort(true)}>
          <FiChevronDown /> Sort By
        </button>
      </div>

      {/* Filter Panel */}
      {openFilter && (
        <div className="fixed inset-0 bg-black/40 z-50 md:hidden">
          <div className="absolute bottom-0 left-0 right-0 bg-white h-[80%] rounded-t-2xl w-full flex flex-col"> 
            <div className="sticky top-0 z-10 bg-white flex items-center justify-between px-4 py-3 shadow-md">
              <h3 className="font-semibold text-lg">Filters</h3>
              <button onClick={() => setOpenFilter(false)} className="text-2xl p-1 rounded hover:bg-gray-100">
                <FiX />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-5">
              <FilterSidebar />
            </div>
          </div>
        </div>
      )}

      {/* Sort Panel */}
      {openSort && (
        <div className="fixed inset-0 bg-black/40 z-50 md:hidden">
          <div className="absolute bottom-0 left-0 right-0 bg-white h-[40%] rounded-t-2xl w-full flex flex-col">
            <div className="sticky top-0 z-10 bg-white flex items-center justify-between px-4 py-3 shadow-md">
              <h3 className="font-semibold text-lg">Sort By</h3>
              <button onClick={() => setOpenSort(false)} className="text-2xl p-1 rounded hover:bg-gray-100">
                <FiX />
              </button>
            </div>

            <div className="p-5 space-y-4">
              <button onClick={() => dispatch(setSort("price-low-high"))} className="flex w-full text-left py-2 cursor-pointer items-center gap-2">
                Price: Low <span><FaArrowRight size={12} /></span> High
              </button>
              <button onClick={() => dispatch(setSort("price-high-low"))} className="flex w-full text-left py-2 items-center gap-2">
                Price: High<span><FaArrowRight size={12} /></span>Low
              </button>
              <button onClick={() => dispatch(setSort("rating"))} className="block w-full text-left py-2">
                Top Rated
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileFilterBar;
