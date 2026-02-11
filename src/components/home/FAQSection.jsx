import React, { useState } from "react";
import { FiPlus, FiMinus, FiMail } from "react-icons/fi";
import NewsLetter from "./NewsLetter";

const faqs = [
  {
    q: "How long does Ponytelle hair last?",
    a: "With proper care, Ponytelle ponytails can last 6–12 months or more depending on usage and maintenance.",
  },
  {
    q: "Can I style the ponytail with heat?",
    a: "Yes, our ponytails are heat-friendly up to a recommended temperature. Always use heat protectant.",
  },
  {
    q: "Do you offer nationwide delivery?",
    a: "Yes, we deliver across Nigeria with fast and secure shipping options.",
  },
  {
    q: "What if I receive the wrong product?",
    a: "No worries! Contact our support within 48 hours and we’ll resolve it quickly.",
  },
];

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState(null);

    return (
        <section className="container mx-auto py-20 px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

                {/* FAQ */}
                <div>
                    <h2 className="text-4xl font-bold mb-6">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        {faqs.map((faq, i) => (
                            <div key={i} className="border border-zinc-200/60 rounded-xl p-5 cursor-pointer group hover:shadow-md transition" onClick={() => setOpenIndex(openIndex === i ? null : i)}>
                                <div className="flex justify-between items-center">
                                    <h3 className="font-medium text-zinc-800 group-hover:text-black">
                                        {faq.q}
                                    </h3>
                                    {openIndex === i ? (
                                        <FiMinus className="text-lg" />
                                    ) : (
                                        <FiPlus className="text-lg" />
                                    )}
                                </div>

                                <div className={`grid transition-all duration-300 ease-in-out ${openIndex === i ? "grid-rows-[1fr] mt-3" : "grid-rows-[0fr]"}`}>
                                    <p className="overflow-hidden text-sm text-zinc-600">
                                        {faq.a}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <NewsLetter />
            </div>
        </section>
    );
};

export default FAQSection;
