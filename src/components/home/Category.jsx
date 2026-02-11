import React from 'react';
import { useNavigate } from 'react-router-dom';

const Category = () => {
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
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-7'>
            {categories.map((c, id) => (
            <div key={id} className='relative overflow-hidden rounded-md' onClick={() => handleClick(c.slug)}>
                <img src={c.image} alt={c.name} className='w-90 md:[w-60] h-90'/>
                <div className='absolute inset-0 bg-linear-to-t from-black/80 hover:from-[#281a17] hover:via-[#3a2621]/30 active:from-[#281a17] active:via-[#3a2621]/30 to-transparent cursor-pointer'></div>
                <p className='absolute bottom-4 left-15 md:left-18 text-white text-lg font-semibold z-10'>
                    {c.name}
                </p>
            </div>
            ))}
        </div>
    </section>
  )
}

export default Category
