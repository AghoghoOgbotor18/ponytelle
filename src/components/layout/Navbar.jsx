import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import {FiShoppingCart, FiMenu, FiX} from "react-icons/fi"

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen(!isOpen)
    }

    //change background on scroll
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 15)
        }
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);

    }, [])

    return (
        <div className={`fixed inset-0 z-50 h-14 md:h-15 ${isScrolled ? "bg-white shadow-2xl" : "bg-transparent"}`}>
            <div className='container mx-auto py-3 px-3'>
                {/* desktop navbar */}
                <div className='flex justify-between items-center'>
                    <div className='md:flex gap-10 items-center hidden'>
                        <NavLink to="/" className={({isActive}) => `text-lg font-semibold cursor-pointer ${isActive ? isScrolled ? "brand-color" : "text-white/80" : isScrolled ? "text-black" : "text-white"}`}>Home</NavLink>
                        <NavLink to="/shop" className={({isActive}) => `text-lg font-semibold cursor-pointer ${isActive ? isScrolled ? "brand-color" : "text-white/80" : isScrolled ? "text-black" : "text-white"}`}>Shop</NavLink>
                    </div>
                    <h1 className={`font-extrabold text-3xl md:text-4xl brand-name ${isScrolled ? "text-black" : "text-white"}`}>Ponytelle</h1>
                    <div className='flex items-center gap-10'>
                        <NavLink to="/shop" className={`text-sm font-semibold cursor-pointer ${isScrolled ? "text-black" : "text-white"}`}>
                            <FiShoppingCart size={22} />
                        </NavLink>

                        {/*menu button */}
                        <div className={`md:hidden cursor-pointer font-bold ${isScrolled ? "text-black" : "text-white"}`} onClick={toggleOpen}>
                            {isOpen ? <FiX size={22} /> : <FiMenu size={22} />}
                        </div>
                    </div>
                </div>
                
            </div>
            {/* Mobile Navbar */}
            {isOpen && (
                <div className='md:hidden bg-[#281a17] h-[40vh] duration-300 flex items-center justify-center'>
                    <div className='flex flex-col gap-14'>
                        <NavLink to="/" className={({isActive}) => `text-md font-semibold ${isActive ? "text-white/60" : "text-white"}`}  onClick={() => setIsOpen(false)}>Home</NavLink>
                        <NavLink to="/shop" className={({isActive}) => `text-md font-semibold ${isActive ? "text-white/60" : "text-white"}`}  onClick={() => setIsOpen(false)}>Shop</NavLink>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Navbar
