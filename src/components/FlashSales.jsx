import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {FaArrowRight} from "react-icons/fa"

const FlashSales = () => {
    const [timeLeft, setTimeLeft] = useState({
        days: 5, hours: 15, minutes: 35, seconds: 60,
    });

    const products = useSelector((state) => state.products.items) || [];
    //only select six products
    const flashProducts = products.length ? products.slice(6, 11) : [];
    const [currentIndex, setCurrentIndex] = useState(0);
    console.log("Products:", products);
console.log("Flash Products:", flashProducts);
console.log("Current Product:", flashProducts[currentIndex]);


    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % flashProducts.length )
        }, 3000);
        return () => clearInterval(interval);
    }, [flashProducts.length])

    //countdown timer
    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prev) => {
                let {days, hours, minutes, seconds} = prev;
                if(seconds > 0){
                    seconds--
                } else if(minutes > 0){
                    minutes--;
                    seconds = 59;
                } else if(hours > 0) {
                    hours--;
                    minutes = 59;
                    seconds = 59;
                } else if(days > 0) {
                    days--;
                    hours = 23;
                    minutes = 59;
                    seconds = 59;
                } else {
                    clearInterval(timer)
                }
                return {days, hours, minutes, seconds}
            })
        }, 1000);
    }, []);

    return (
        <section className='container mx-auto my-13'>
            <div className='flex justify-center items-center'>
                <div className='flex flex-col sm:flex-row jusitfy-center items-center shadow-lg'>
                    <div className="backdrop-blur-md bg-zinc-100 border border-white/30 shadow-lg py-5 px-8 text-black w-[350px] md:w-[500px] h-[300px] flex flex-col justify-center items-center rounded-tl rounded-bl">
                        <div className='my-3 mb-5 text-center'>
                            <h2 className='text-3xl font-bold'>Flash <span className='text-[#281a17]'>Sales!!!</span></h2>
                            <p>Check out some of our Products on Sales</p>
                        </div>
                        <div className='flex gap-4'>
                            <div className='flex flex-col gap-2 justify-center items-center'>
                                <strong className='text-3xl'>{String(timeLeft.days).padStart(2, "0")}</strong>
                                <p className='text-sm'>Days</p>
                            </div>
                            <p className='text-3xl font-black'>:</p>
                            <div className='flex flex-col gap-2 justify-center items-center'>
                                <strong className='text-3xl'>{String(timeLeft.hours).padStart(2, "0")}</strong>
                                <p className='text-sm'>Hours</p>
                            </div>
                            <p className='text-3xl font-black'>:</p>
                            <div className='flex flex-col gap-2 justify-center items-center'>
                                <strong className='text-3xl'>{String(timeLeft.minutes).padStart(2, "0")}</strong>
                                <p className='text-sm'>Mins</p>
                            </div>
                            <p className='text-3xl font-black'>:</p>
                            <div className='flex flex-col gap-2 justify-center items-center'>
                                <strong className='text-3xl'>{String(timeLeft.seconds).padStart(2, "0")}</strong>
                                <p className='text-sm'>Secs</p>
                            </div>
                        </div>
                        <button className="group mt-4 w-full bg-black text-white py-2 rounded hover:bg-[#281a17] active:bg-[#281a17] cursor-pointer flex justify-center items-center gap-2">
                            <span className='group-hover:-translate-x-1'>Buy Now</span>
                            <FaArrowRight className='group-hover:translate-x-1'/>
                        </button>
                    </div>
                    <div>
                        {flashProducts.length > 0 && (
                            <img src={flashProducts[currentIndex]?.image} alt={flashProducts[currentIndex]?.title}className="w-[350px] h-[300px] object-cover rounded" />
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FlashSales
