import React from 'react';
import { useNavigate } from 'react-router-dom';
import { delay, easeOut, motion } from "framer-motion";

const Category = () => {

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.2
            }
        },
    }

    const itemVariants ={
        hidden: { opacity: 0, y:20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    }

    const categories = [
        {
            image: "https://res.cloudinary.com/dysyzuviq/image/upload/v1770454834/str_wig_yzixaf.jpg",
            name: "Straight Collections",
            slug: "straight"
        },
        {
            image: "https://res.cloudinary.com/dysyzuviq/image/upload/v1770454813/curly_cat_dmzcvr.jpg",
            name: "Wavy Collections",
            slug: "wavy"
        },
        {
            image: "https://res.cloudinary.com/dysyzuviq/image/upload/v1770454800/kinky-cat_yahcvj.jpg",
            name: "Kinky Collections",
            slug: "kinky"
        },
        {
            image: "https://res.cloudinary.com/dysyzuviq/image/upload/v1770454858/curly-cat_lpec0h.jpg",
            name: "Curly Collections",
            slug: "curly"
        },
    ];

    const navigate = useNavigate();
    const handleClick = (slug) => {
        navigate(`/shop?category=${slug}`)
    }

    return (
        <section className='container mx-auto my-18 flex flex-col gap-8 justify-center items-center'>
            <div className='text-center my-3'>
                <h2 className='font-black text-4xl mb-2'>Our Collections</h2>
                <p className='text-md'>Check out our Ponytail Collections</p>
            </div>
            <motion.div className='flex justify-center'  variants={containerVariants} initial="hidden" whileInView="visible" viewport={{once: true, amount: 0.3}}>
                <div className='md:w-[85%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-9 max-sm:gap-18'>
                    {categories.map((c, id) => (
                    <motion.div key={id} className='relative overflow-hidden max-sm:rounded-[35%] sm:rounded-full hover:-translate-y-2 duration-500 flex justify-center' variants={itemVariants} onClick={() => handleClick(c.slug)}>
                        <img src={c.image} alt={c.name} className='bg-center object-fit w-90 md:[w-65] h-90'/>
                        <div className='absolute inset-0 bg-linear-to-t from-black/80 hover:from-[#281a17] hover:via-[#3a2621]/30 active:from-[#281a17] active:via-[#3a2621]/30 to-transparent cursor-pointer'></div>
                        <p className='absolute bottom-10 flex justify-center items-center text-white text-lg font-semibold z-10 text-center'>
                            {c.name}
                        </p>
                    </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    )
}

export default Category
