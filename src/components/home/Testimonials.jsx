import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";

const TestimonialSection = () => {

    const testimonials = [
        {
            id: 1,
            name: "Aisha Bello",
            role: "Beauty Influencer",
            photo: "https://randomuser.me/api/portraits/women/68.jpg",
            rating: 5,
            text: "Ponytelle ponytails changed my daily style! Sleek, effortless, and so easy to wear.",
        },
        {
            id: 2,
            name: "Chioma Okafor",
            role: "Stylist",
            photo: "https://randomuser.me/api/portraits/women/65.jpg",
            rating: 4,
            text: "I love how versatile and high-quality the Ponytelle hairpieces are. My clients adore them!",
        },
        {
            id: 3,
            name: "Kemi Adedayo",
            role: "Entrepreneur",
            photo: "https://randomuser.me/api/portraits/women/72.jpg",
            rating: 5,
            text: "From casual to professional, Ponytelle ponytails make my look stand out effortlessly.",
        },
        {
            id: 4,
            name: "Funke Adeoye",
            role: "Content Creator",
            photo: "https://randomuser.me/api/portraits/women/77.jpg",
            rating: 5,
            text: "The hair is soft, bouncy, and perfect for any occasion. I'm obsessed with Ponytelle!",
        },
        {
            id: 5,
            name: "Sandra Goodnews",
            role: "Beauty Influencer",
            photo: "https://randomuser.me/api/portraits/women/68.jpg",
            rating: 5,
            text: "Ponytelle ponytails changed my daily style! Sleek, effortless, and so easy to wear.",
        },
        {
            id: 6,
            name: "Favour Odili",
            role: "Stylist",
            photo: "https://randomuser.me/api/portraits/women/65.jpg",
            rating: 4,
            text: "I love how versatile and high-quality the Ponytelle hairpieces are. My clients adore them!",
        },
        {
            id: 7,
            name: "Tessa Michael",
            role: "Entrepreneur",
            photo: "https://randomuser.me/api/portraits/women/72.jpg",
            rating: 5,
            text: "From casual to professional, Ponytelle ponytails make my look stand out effortlessly.",
        },
        {
            id: 8,
            name: "Sylvia Charles",
            role: "Content Creator",
            photo: "https://randomuser.me/api/portraits/women/77.jpg",
            rating: 5,
            text: "The hair is soft, bouncy, and perfect for any occasion. Imm obsessed with Ponytelle!",
        },
    ];

    //testimonial card
    const cardsPerView = 3; // desktop
    const [index, setIndex] = useState(0);
    const [enableTransition, setEnableTransition] = useState(true);

    const slides = [...testimonials, ...testimonials.slice(0, cardsPerView)];
    const totalRealSlides = Math.ceil(testimonials.length / cardsPerView);

    useEffect(() => {
        const timer = setInterval(() => {
        setIndex((prev) => prev + 1);
        }, 4000);

        return () => clearInterval(timer);
    }, []);

    // When we reach the cloned slides, jump back silently
    useEffect(() => {
        if (index === totalRealSlides) {
        setTimeout(() => {
            setEnableTransition(false);
            setIndex(0);
        }, 700); // same as transition duration
        } else {
        setEnableTransition(true);
        }
    }, [index, totalRealSlides]);

    return (
        <section className="container mx-auto py-16 px-4">
            <div className="text-center mb-10">
                <h2 className="text-4xl font-bold mb-2">What Our Customers Say</h2>
                <p className="text-gray-500">Real people. Real Ponytelle glow-ups</p>
            </div>

            <div className="overflow-hidden">
                <div
                className={`flex pt-10 pb-20 ${enableTransition ? "transition-transform duration-700 ease-in-out" : ""}`}
                style={{ transform: `translateX(-${index * 100}%)` }}
                >
                {slides.map((t, i) => (
                    <div key={i} className="w-full md:w-1/3 px-3 flex-shrink-0">
                    <div className="bg-white/70 backdrop-blur-lg p-6 rounded-2xl shadow-xl h-full">
                        <div className="flex items-center gap-4 mb-4">
                        <img src={t.photo} alt={t.name} className="w-12 h-12 rounded-full object-cover border-3 border-amber-950"/>
                        <div>
                            <h3 className="font-semibold">{t.name}</h3>
                            <p className="text-xs text-gray-500">{t.role}</p>
                        </div>
                        </div>

                        <div className="flex gap-1 mb-3">
                        {Array.from({ length: t.rating }).map((_, i) => (
                            <FaStar key={i} className="text-yellow-400" />
                        ))}
                        </div>

                        <p className="text-sm text-gray-700">{t.text}</p>
                    </div>
                    </div>
                ))}
                </div>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-6">
                {Array.from({ length: totalRealSlides }).map((_, i) => (
                    <button key={i} onClick={() => setIndex(i)} className={`w-2 h-2 rounded-full transition-all ${index === i ? "bg-black/70 scale-110" : "bg-gray-300"}`}/>
                ))}
            </div>
        </section>
    );
};

export default TestimonialSection;

