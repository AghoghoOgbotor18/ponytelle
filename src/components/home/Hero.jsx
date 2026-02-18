import React from 'react'
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section className='relative h-screen md:bg-[url("/images/ponytelle-wig.webp")] bg-[url("/images/ponytel.webp")] bg-cover bg-center bg-no-repeat flex items-end md:items-center'>
            <div className='bg-black/60 absolute inset-0 z-0'></div>
            <div className='container mx-auto text-white flex flex-col items-center md:items-start gap-6 z-10'>
                <h1 className='text-5xl text-center md:text-start'>Ponytelle - Effortless Glam in Seconds</h1>
                <div className='flex flex-col gap-4 items-center md:items-start text-center md:text-start mb-5 md:mb-0'>
                    <p className='md:w-[50%] text-lg'>Premium ponytail wigs designed for busy queens who want flawless hair without the stress. Lightweight, natural-looking, and easy to wear.</p>
                    <Link to="/shop" className='inline-block bg-white brand-color px-4 py-3 font-semibold rounded cursor-pointer hover:bg-white/90 transition z-30'>
                        Shop our Collections
                    </Link>

                </div>
            </div>
        </section>
    )
}

export default Hero
