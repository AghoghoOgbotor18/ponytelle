import React, { useEffect, useState } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { FiShoppingCart, FiMenu, FiX, FiSearch } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { setSearch } from "../../features/products/productsSlice";
import { useSelector } from "react-redux";
import MobileSearchOverlay from './MobileSearchOverlay';


const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //navbar scroll effect
  const isHome = location.pathname === "/";
  const shouldBeTransparent = isHome && !isScrolled;

  //mobile menu
  const toggleOpen = () => setIsOpen(!isOpen);

  //search overlay
  const [isOverlay, setIsOverlay] = useState(false);

  //handleScroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    dispatch(setSearch(value));

     // live search and redirect to shop when searching from any page
    if (value && !location.pathname.startsWith("/shop")) {
      navigate("/shop");
    }
  };
  //clear search
  const clearSearch = () => {
    setQuery("");
    dispatch(setSearch(""));
  };

  //cart count
  const { items } = useSelector((state) => state.cart);
  const cartCount = items.reduce(
    (total, item) => total + item.quantity, 0
  );

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 h-13 md:h-14 transition-all duration-300 
      ${shouldBeTransparent ? "bg-transparent" : "bg-white shadow-2xl"}`}
    >
      <div className='container mx-auto py-2 px-3'>
        <div className='flex justify-between items-center gap-4'>
          <div className='md:flex gap-10 items-center hidden'>
            <NavLink to="/" className={({ isActive }) =>`text-lg font-semibold 
              ${isActive
                  ? shouldBeTransparent ? "text-white text-xl" : "text-black text-xl"
                  : shouldBeTransparent ? "text-white/80" : "brand-color"}`
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/shop" className={({ isActive }) => `text-lg font-semibold 
                ${isActive
                  ? shouldBeTransparent ? "text-white" : "text-black text-xl"
                  : shouldBeTransparent ? "text-white/80" : "brand-color"}`
              }
            >
              Shop
            </NavLink>
          </div>

          {/* Logo */}
          <h1 className={`font-extrabold text-2xl md:text-3xl brand-name 
            ${shouldBeTransparent ? "text-white" : "text-black"}`}>
            Ponytelle
          </h1>

          {/* Search*/}
          <div className='flex items-center gap-5'>
            {/* Search (Desktop) */}
            <div className="hidden md:flex items-center relative">
              <FiSearch className={`absolute left-3 text-sm ${shouldBeTransparent ? "text-white" : "text-gray-500"}`} />
              <input type="text" placeholder="Search wigs..." value={query} onChange={handleSearchChange} className={`pl-9 pr-9 py-1.5 rounded-full text-sm outline-none transition 
                ${shouldBeTransparent
                  ? "bg-white/20 placeholder-white/70 text-white border border-white/30"
                  : "bg-gray-100 placeholder-gray-500 text-black border border-gray-200"}`}
              />

              {/* Cancel icon */}
              {query && (
                <button onClick={clearSearch} className={`absolute right-3 text-sm 
                  ${shouldBeTransparent ? "text-white/70 hover:text-white" : "text-gray-500 hover:text-black"}`}
                >
                  <FiX />
                </button>
              )}
            </div>

            {/* mobile search */}
            <div className={`md:hidden relative cursor-pointer ${shouldBeTransparent ? "text-white hover:text-white" : "text-black hover:text-black/80"}`}>
              <FiSearch size={22} className="" onClick={() => setIsOverlay(true)} />
            </div>

            {/* Cart */}
            <NavLink to="/cart" className={`relative ${shouldBeTransparent ? "text-white" : "text-black"}`}>
              <FiShoppingCart size={22} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 brand-bg text-white text-xs px-2 py-0.5 rounded-full">
                  {cartCount}
                </span>
              )}
            </NavLink>

            {/* Mobile icons */}
            <div
              className={`md:hidden cursor-pointer ${shouldBeTransparent ? "text-white" : "text-black"}`}
              onClick={toggleOpen}
            >
              {isOpen ? <FiX size={22} /> : <FiMenu size={22} />}
            </div>
          </div>
        </div>
        {isOverlay && (
          <MobileSearchOverlay isOpen={isOverlay} onClose={() => setIsOverlay(false)} />
        )}
      </div>

      {/* Mobile navlinks */}
      {isOpen && (
        <div className='md:hidden brand-bg h-[50vh] flex flex-col items-center justify-center gap-8 p-6'>
          <NavLink to="/" onClick={() => setIsOpen(false)} className={({isActive}) => `text-white ${isActive ? "text-xl" : "text-lg"}`}>
            Home
          </NavLink>
          <NavLink to="/shop" onClick={() => setIsOpen(false)} className={({isActive}) => `text-white ${isActive ? "text-xl" : "text-lg"}`}>
            Shop
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default Navbar;
