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
            if(window.scrollY > 15){
                setIsScrolled(true)
            } else{
                setIsScrolled(false)
            }
        }
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);

    }, [])

    return (
        <div className={`${isScrolled && "bg-white"}`}>
            <div className='container mx-auto py-2 px-3'>
                {/* desktop navbar */}
                <div className='flex justify-between items-center'>
                    <div className='md:flex gap-10 items-center hidden'>
                        <NavLink to="/" className={({isActive}) => `text-lg font-semibold cursor-pointer ${isActive ? "text-amber-950" : "text-black"} ${isScrolled ? "text-black" : "text-black"}`}>Home</NavLink>
                        <NavLink to="/shop" className={({isActive}) => `text-lg font-semibold cursor-pointer ${isActive ? "text-amber-950" : "text-black"} ${isScrolled ? "text-black" : "text-black"}`}>Shop</NavLink>
                    </div>
                    <h1 className='font-extrabold text-4xl brand-name'>Ponytelle</h1>
                    <div className='flex items-center gap-10'>
                        <NavLink to="/shop" className={({isActive}) => `text-sm font-semibold cursor-pointer ${isActive ? "text-amber-950" : "text-black"} ${isScrolled ? "text-black" : "text-black"}`}>
                            <FiShoppingCart size={22} />
                        </NavLink>
                        <div className='md:hidden cursor-pointer font-bold' onClick={toggleOpen}>
                            {isOpen ? <FiX size={22} /> : <FiMenu size={22} />}
                        </div>
                    </div>
                </div>
                
            </div>
            {/* Mobile Navbar */}
            {isOpen && (
                <div className='md:hidden bg-amber-950 h-[40vh] duration-300 flex items-center justify-center'>
                    <div className='flex flex-col gap-14'>
                        <NavLink to="/" className={({isActive}) => `text-md font-semibold ${isActive ? "text-white/60" : "text-white"}`}>Home</NavLink>
                        <NavLink to="/shop" className={({isActive}) => `text-md font-semibold ${isActive ? "text-white/60" : "text-white"}`}>Shop</NavLink>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Navbar
