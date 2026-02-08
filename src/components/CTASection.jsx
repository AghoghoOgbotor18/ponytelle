import React from 'react';
import { FiArrowRight } from 'react-icons/fi';

const CTASection = () => {
    return (
        <section className='relative w-full h-[420px] md:h-[600px] overflow-hidden rounded-2xl my-16'>
            <video autoPlay loop muted playsInline preload="auto" className="hidden md:block absolute inset-0 w-full h-full object-cover object-[50%_20%] ">
                <source src="https://res.cloudinary.com/dysyzuviq/video/upload/v1770509667/From_KlickPin_CF_Sleek_Ponytail___Beauty_Works_Video___Low_ponytail_hairstyles_Sleek_ponytail_hairstyles_Ponytail_hairstyles_easy_ljng3w.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <img src="https://res.cloudinary.com/dysyzuviq/image/upload/v1770454858/curly-cat_lpec0h.jpg"
            alt="Ponytelle ponytail styles" className="md:hidden absolute inset-0 w-full h-full object-[50%_30%]" />
            <div className="absolute inset-0 bg-black/70"></div>
            <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
                <span className="mb-3 inline-block text-3xl tracking-widest text-white brand-name">
                    Ponytelle
                </span>

                <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight max-w-3xl">
                    Transform Your Look in Minutes
                </h2>

                <p className="mt-4 text-white/80 max-w-xl">
                    Sleek. Bouncy. Effortless ponytails made to elevate your everyday style.
                </p>

                <button className="group mt-6 inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-black hover:text-white active:bg-black active:text-white transition-all duration-300">
                    Shop Ponytelle
                    <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                </button>
            </div>
        </section>
    )
}

export default CTASection
