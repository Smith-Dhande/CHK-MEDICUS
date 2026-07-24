"use client";

import { useState, useEffect } from "react";

import {
    Star,
    ChevronLeft,
    ChevronRight,
    BadgeCheck,
    Building2,
} from "lucide-react";

import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
    {
        id: 1,

        company: "Apex Distribution",

        location: "Pune, Maharashtra",

        rating: 5,

        quote:
            "CHK Medicus consistently supplies premium-quality formulations with exceptional packaging standards. Their professionalism, regulatory documentation, and timely deliveries have made them one of our most trusted pharmaceutical partners.",

        image:
            "https://ik.imagekit.io/clickinv/CHK-MEDICUS/bottel1.png",
    },

    {
        id: 2,

        company: "Med-Plus Enterprises",

        location: "Nagpur, Maharashtra",

        rating: 5,

        quote:
            "Their transparent documentation, product consistency and responsive support have significantly improved our distribution efficiency. We confidently recommend CHK Medicus for long-term pharmaceutical partnerships.",

        image:
            "https://ik.imagekit.io/clickinv/CHK-MEDICUS/bottle2.png",
    },

    {
        id: 3,

        company: "Saraswati Pharmaceuticals",

        location: "Mumbai, Maharashtra",

        rating: 5,

        quote:
            "Working with CHK Medicus has been an outstanding experience. Their quality assurance, reliable dispatch schedule and premium packaging standards have helped strengthen our business across multiple regions.",

        image:
            "https://ik.imagekit.io/clickinv/CHK-MEDICUS/bottle3.png",
    },
];

export default function Testimonials() {
    const [current, setCurrent] = useState(0);

    const nextSlide = () => {
        setCurrent((prev) => (prev + 1) % testimonials.length);
    };

    const prevSlide = () => {
        setCurrent((prev) =>
            prev === 0 ? testimonials.length - 1 : prev - 1
        );
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 7000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section
            id="testimonials"
            className="relative min-h-screen lg:h-screen lg:overflow-hidden py-12 lg:py-0 bg-gradient-to-b from-white via-[#fcfcfc] to-[#fff8f8]"
        >
            {/* Background Blur */}

            <div className="absolute -left-40 top-1/2 h-[500px] w-[500px] rounded-full bg-primary/5 blur-[160px] pointer-events-none" />

            <div className="absolute right-0 top-0 h-[650px] w-[650px] rounded-full bg-red-100/40 blur-[180px] pointer-events-none" />

            {/* Reserved Navbar Space */}

            <div className="h-[76px] lg:h-[10vh] shrink-0" />

            {/* Content Area */}

            <div className="min-h-[70vh] lg:h-[80vh] flex justify-center items-center">

                {/* Main Container */}

                <div className="w-full max-w-7xl h-full flex flex-col justify-between">

                    {/* ================= HEADING ================= */}

                    <div className="h-auto lg:h-[20%] flex flex-col items-center justify-center text-center mb-6 lg:mb-0 px-4">

                        <p className="uppercase tracking-[4px] md:tracking-[6px] text-primary font-semibold text-xs md:text-sm">

                            Trusted Across India

                        </p>

                        <h2 className="mt-2 md:mt-4 text-2xl md:text-4xl font-bold text-slate-900 leading-tight">

                            What Our{" "}

                            <span className="text-primary">

                                Distribution Partners

                            </span>{" "}

                            Say

                        </h2>

                    </div>

                    {/* ================= CARD AREA ================= */}
                    <div className="relative h-auto lg:h-[80%] flex items-center justify-center py-6 w-full">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={testimonials[current].id}
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -50 }}
                                transition={{ duration: 0.6 }}
                                className="w-full flex justify-center"
                            >
                                {/* Desktop View Card */}
                                <div className="hidden lg:flex relative w-full h-[68vh] items-center justify-center">
                                    {/* Stacked paper sheets behind */}
                                    <div className="absolute ml-auto w-[78%] h-[60%] bg-white border border-[#e8e3d3] rotate-1.5 translate-x-1.5 translate-y-1.5 z-0 rounded-sm shadow-md" />
                                    <div className="absolute ml-auto w-[78%] h-[60%] bg-white border border-[#e8e3d3] -rotate-1 -translate-x-1 translate-y-1 z-0 shadow-md rounded-sm" />

                                    {/* Testimonial Card */}
                                    <div
                                        className="relative ml-auto w-[78%] h-[60%] border border-[#e8e3d3]/80 rounded-sm z-10 transition-all flex flex-col justify-between"
                                        style={{
                                            backgroundColor: "#fffdf8",
                                            backgroundImage: "repeating-linear-gradient(#fffdf8, #fffdf8 31px, #f2edd9 32px)",
                                            boxShadow: "0 25px 60px -15px rgba(0,0,0,0.1), inset 0 0 40px rgba(0,0,0,0.02)",
                                        }}
                                    >
                                        <div className="absolute top-0 bottom-0 left-[30%] w-px bg-rose-300/60 z-10" />
                                        <div className="absolute -top-3 left-[65%] -translate-x-1/2 z-20 h-5 w-5 rounded-full bg-medical shadow-md border-2 border-white" />
                                        
                                        <div className="absolute left-[33%] top-4 text-[100px] leading-none font-serif text-primary/10 select-none pointer-events-none z-0">
                                            “
                                        </div>
                                        <div className="absolute right-12 bottom-0 text-[100px] leading-none font-serif text-primary/10 select-none pointer-events-none z-0">
                                            ”
                                        </div>

                                        <img
                                            src={testimonials[current].image}
                                            alt="Medicus product bottle formulation"
                                            loading="lazy"
                                            className="absolute -left-16 bottom-[-15%] h-[130%] object-contain pointer-events-none select-none z-30"
                                        />

                                        <div className="h-full pl-[34%] pr-12 py-10 flex flex-col justify-between relative z-10">
                                            <div className="flex gap-1 shrink-0">
                                                {[...Array(testimonials[current].rating)].map((_, index) => (
                                                    <Star key={index} size={16} className="fill-amber-400 text-amber-400" />
                                                ))}
                                            </div>

                                            <p className="mt-4 text-lg leading-relaxed text-slate-700 max-w-2xl font-serif italic flex-grow">
                                                "{testimonials[current].quote}"
                                            </p>

                                            <div className="flex items-center justify-between mt-4 shrink-0">
                                                <div className="flex items-center gap-3">
                                                    <div className="h-12 w-12 rounded-full bg-primary text-white flex items-center justify-center shadow-sm">
                                                        <Building2 size={16} />
                                                    </div>
                                                    <div>
                                                        <h3 className="text-lg font-bold text-primary">{testimonials[current].company}</h3>
                                                        <p className="text-slate-500 text-[10px]">{testimonials[current].location}</p>
                                                    </div>
                                                </div>
                                                <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 border border-emerald-100/50 shadow-sm">
                                                    <BadgeCheck size={12} className="text-emerald-600" />
                                                    <span className="font-semibold text-[10px] text-emerald-700 uppercase tracking-wider">
                                                        Verified Partner
                                                    </span>
                                                </div>
                                            </div>

                                            <div className="flex items-center justify-between mt-4 pt-3 border-t border-dashed border-slate-200 shrink-0">
                                                <div className="flex gap-4 items-center">
                                                    {testimonials.map((item, index) => (
                                                        <button
                                                            key={item.id}
                                                            onClick={() => setCurrent(index)}
                                                            className="p-2 -m-2 cursor-pointer flex items-center justify-center"
                                                            aria-label={`Go to slide ${index + 1}`}
                                                        >
                                                            <span className={`h-1.5 rounded-full transition-all duration-300 ${current === index ? "w-6 bg-primary" : "w-1.5 bg-slate-300 hover:bg-slate-400"}`} />
                                                        </button>
                                                    ))}
                                                </div>
                                                <div className="flex gap-2">
                                                    <button onClick={prevSlide} aria-label="Previous testimonial" className="h-8 w-8 rounded-full border border-slate-200 flex items-center justify-center transition-all duration-300 hover:bg-primary hover:text-white">
                                                        <ChevronLeft size={14} />
                                                    </button>
                                                    <button onClick={nextSlide} aria-label="Next testimonial" className="h-8 w-8 rounded-full border border-slate-200 flex items-center justify-center transition-all duration-300 hover:bg-primary hover:text-white">
                                                        <ChevronRight size={14} />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Mobile/Tablet View Card */}
                                <div className="lg:hidden relative w-full h-auto flex items-center justify-center min-h-[425px] px-4">
                                    {/* Stacked paper sheets behind */}
                                    <div className="absolute ml-auto w-[90%] md:w-[78%] h-full bg-white border border-[#e8e3d3] rotate-1.5 translate-x-1.5 translate-y-1.5 z-0 rounded-sm shadow-md" />
                                    <div className="absolute ml-auto w-[90%] md:w-[78%] h-full bg-white border border-[#e8e3d3] -rotate-1 -translate-x-1 translate-y-1 z-0 shadow-md rounded-sm" />

                                    {/* Testimonial Card */}
                                    <div
                                        className="relative ml-auto w-[90%] md:w-[78%] h-full border border-[#e8e3d3]/80 rounded-sm z-10 transition-all flex flex-col justify-between"
                                        style={{
                                            backgroundColor: "#fffdf8",
                                            backgroundImage: "repeating-linear-gradient(#fffdf8, #fffdf8 31px, #f2edd9 32px)",
                                            boxShadow: "0 25px 60px -15px rgba(0,0,0,0.1), inset 0 0 40px rgba(0,0,0,0.02)",
                                        }}
                                    >
                                        <div className="absolute top-0 bottom-0 left-6 md:left-[30%] w-px bg-rose-300/60 z-10" />
                                        <div className="absolute -top-3 left-[85%] md:left-[65%] -translate-x-1/2 z-20 h-5 w-5 rounded-full bg-medical shadow-md border-2 border-white" />
                                        
                                        <div className="absolute left-8 md:left-[33%] top-2 text-[50px] md:text-[100px] leading-none font-serif text-primary/10 select-none pointer-events-none z-0">
                                            “
                                        </div>
                                        <div className="absolute right-4 md:right-12 bottom-2 text-[50px] md:text-[100px] leading-none font-serif text-primary/10 select-none pointer-events-none z-0">
                                            ”
                                        </div>

                                        <img
                                            src={testimonials[current].image}
                                            alt="Medicus product bottle formulation"
                                            loading="lazy"
                                            className="absolute -left-6 -top-16 h-28 md:-left-16 md:top-auto md:bottom-[-15%] md:h-[130%] object-contain pointer-events-none select-none z-30"
                                        />

                                        <div className="flex flex-col justify-between pl-10 pr-6 py-6 md:pl-[34%] md:pr-12 md:py-10 flex-grow relative z-10 min-h-[390px]">
                                            <div className="flex gap-1 shrink-0">
                                                {[...Array(testimonials[current].rating)].map((_, index) => (
                                                    <Star key={index} size={14} className="fill-amber-400 text-amber-400" />
                                                ))}
                                            </div>

                                            <p className="mt-3 text-xs md:text-lg leading-relaxed text-slate-700 max-w-2xl font-serif italic flex-grow">
                                                "{testimonials[current].quote}"
                                            </p>

                                            <div className="flex flex-wrap items-center justify-between gap-4 mt-3 shrink-0">
                                                <div className="flex items-center gap-3">
                                                    <div className="h-9 w-9 md:h-12 md:w-12 rounded-full bg-primary text-white flex items-center justify-center shadow-sm">
                                                        <Building2 size={16} />
                                                    </div>
                                                    <div>
                                                        <h3 className="text-sm md:text-lg font-bold text-primary">{testimonials[current].company}</h3>
                                                        <p className="text-slate-500 text-[10px]">{testimonials[current].location}</p>
                                                    </div>
                                                </div>
                                                <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 border border-emerald-100/50 shadow-sm">
                                                    <BadgeCheck size={12} className="text-emerald-600" />
                                                    <span className="font-semibold text-[8px] md:text-[10px] text-emerald-700 uppercase tracking-wider">
                                                        Verified Partner
                                                    </span>
                                                </div>
                                            </div>

                                            <div className="flex items-center justify-between mt-4 pt-3 border-t border-dashed border-slate-200 shrink-0">
                                                <div className="flex gap-4 items-center">
                                                    {testimonials.map((item, index) => (
                                                        <button
                                                            key={item.id}
                                                            onClick={() => setCurrent(index)}
                                                            className="p-2 -m-2 cursor-pointer flex items-center justify-center"
                                                            aria-label={`Go to slide ${index + 1}`}
                                                        >
                                                            <span className={`h-1.5 rounded-full transition-all duration-300 ${current === index ? "w-6 bg-primary" : "w-1.5 bg-slate-300 hover:bg-slate-400"}`} />
                                                        </button>
                                                    ))}
                                                </div>
                                                <div className="flex gap-2">
                                                    <button onClick={prevSlide} aria-label="Previous testimonial" className="h-8 w-8 rounded-full border border-slate-200 flex items-center justify-center transition-all duration-300 hover:bg-primary hover:text-white">
                                                        <ChevronLeft size={14} />
                                                    </button>
                                                    <button onClick={nextSlide} aria-label="Next testimonial" className="h-8 w-8 rounded-full border border-slate-200 flex items-center justify-center transition-all duration-300 hover:bg-primary hover:text-white">
                                                        <ChevronRight size={14} />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                </div>

            </div>

        </section>

    );

}