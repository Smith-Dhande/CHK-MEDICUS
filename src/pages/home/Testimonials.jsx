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
            "https://ik.imagekit.io/clickinv/CHK-MEDICUS/bottel1.png",
    },

    {
        id: 3,

        company: "Saraswati Pharmaceuticals",

        location: "Mumbai, Maharashtra",

        rating: 5,

        quote:
            "Working with CHK Medicus has been an outstanding experience. Their quality assurance, reliable dispatch schedule and premium packaging standards have helped strengthen our business across multiple regions.",

        image:
            "https://ik.imagekit.io/clickinv/CHK-MEDICUS/bottel1.png",
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
            className="relative h-screen overflow-hidden bg-gradient-to-b from-white via-[#fcfcfc] to-[#fff8f8]"
        >
            {/* Background Blur */}

            <div className="absolute -left-40 top-1/2 h-[500px] w-[500px] rounded-full bg-primary/5 blur-[160px]" />

            <div className="absolute right-0 top-0 h-[650px] w-[650px] rounded-full bg-red-100/40 blur-[180px]" />

            {/* Reserved Navbar Space */}

            <div className="h-[10vh]" />

            {/* Content Area: 80vh */}

            <div className="h-[80vh] flex justify-center">

                {/* Main Container */}

                <div className="w-full max-w-7xl h-full flex flex-col">

                    {/* ================= HEADING ================= */}

                    <div className="h-[20%] flex flex-col items-center justify-center text-center">

                        <p className="uppercase tracking-[6px] text-primary font-semibold text-sm">

                            Trusted Across India

                        </p>

                        <h2 className="mt-4 text-4xl font-bold text-slate-900">

                            What Our{" "}

                            <span className="text-primary">

                                Distribution Partners

                            </span>{" "}

                            Say

                        </h2>

                    </div>

                    {/* ================= CARD AREA ================= */}

                    <div className="relative h-[80%] flex items-center justify-center">

                        <AnimatePresence mode="wait">

                            <motion.div
                                key={testimonials[current].id}
                                initial={{
                                    opacity: 0,
                                    y: 50,
                                }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                exit={{
                                    opacity: 0,
                                    y: -50,
                                }}
                                transition={{
                                    duration: .6,
                                }}
                                className="relative w-full h-[85%] flex items-center justify-center"
                            >
                                {/* Stacked paper sheets behind */}
                                <div className="absolute ml-auto w-[78%] h-[72%] bg-white border border-[#e8e3d3] rotate-1.5 translate-x-1.5 translate-y-1.5 z-0 rounded-sm shadow-md" />
                                <div className="absolute ml-auto w-[78%] h-[72%] bg-white border border-[#e8e3d3] -rotate-1 -translate-x-1 translate-y-1 z-0 shadow-md rounded-sm" />

                                {/* ==========================================
                                    TESTIMONIAL CARD ( Ruled Paper Sheet )
                                ========================================== */}
                                <div
                                    className="relative ml-auto w-[78%] h-[72%] border border-[#e8e3d3]/80 rounded-sm z-10 transition-all"
                                    style={{
                                        backgroundColor: "#fffdf8",
                                        backgroundImage: "repeating-linear-gradient(#fffdf8, #fffdf8 31px, #f2edd9 32px)",
                                        boxShadow: "0 25px 60px -15px rgba(0,0,0,0.1), inset 0 0 40px rgba(0,0,0,0.02)",
                                    }}
                                >
                                    {/* Notebook red margin line */}
                                    <div className="absolute top-0 bottom-0 left-[30%] w-px bg-rose-300/60 z-10" />

                                    {/* Paper Tack Pin at the top */}
                                    <div className="absolute -top-3 left-[65%] -translate-x-1/2 z-20 h-5 w-5 rounded-full bg-medical shadow-md border-2 border-white" />

                                    {/* Decorative Quotes */}
                                    <div className="absolute left-[33%] top-4 text-[100px] leading-none font-serif text-primary/10 select-none pointer-events-none z-0">
                                        “
                                    </div>
                                    <div className="absolute right-12 bottom-0 text-[100px] leading-none font-serif text-primary/10 select-none pointer-events-none z-0">
                                        ”
                                    </div>

                                    {/* ==========================================
                                        MEDICINE BOTTLE (Overflows card container, but stays inside JSX hierarchy)
                                    ========================================== */}
                                    <img
                                        src={testimonials[current].image}
                                        alt=""
                                        className="absolute -left-16 bottom-[-15%] h-[130%] object-contain pointer-events-none select-none z-20"
                                    />

                                    {/* =======================================
                                        CONTENT STARTS HERE
                                    ======================================= */}
                                    <div className="h-full pl-[34%] pr-12 py-10 flex flex-col justify-between relative z-10">
                                        {/* ==========================
                                            Rating
                                        ========================== */}
                                        <div className="flex gap-1 shrink-0">
                                            {[...Array(testimonials[current].rating)].map(
                                                (_, index) => (
                                                    <Star
                                                        key={index}
                                                        size={16}
                                                        className="fill-amber-400 text-amber-400"
                                                    />
                                                )
                                            )}
                                        </div>

                                        {/* ==========================
                                            Quote
                                        ========================== */}
                                        <p className="mt-4 text-base md:text-lg leading-relaxed text-slate-700 max-w-2xl font-serif italic flex-grow">
                                            "{testimonials[current].quote}"
                                        </p>

                                        {/* ==========================
                                            Company Details & Verified Badge
                                        ========================== */}
                                        <div className="flex flex-wrap items-center justify-between gap-4 mt-4 shrink-0">
                                            <div className="flex items-center gap-4">
                                                <div className="h-12 w-12 rounded-full bg-primary text-white flex items-center justify-center shadow-sm">
                                                    <Building2 size={20} />
                                                </div>
                                                <div>
                                                    <h3 className="text-lg font-bold text-primary">
                                                        {testimonials[current].company}
                                                    </h3>
                                                    <p className="text-slate-500 text-xs">
                                                        {testimonials[current].location}
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3.5 py-1.5 border border-emerald-100/50 shadow-sm">
                                                <BadgeCheck size={14} className="text-emerald-600" />
                                                <span className="font-semibold text-[10px] text-emerald-700 uppercase tracking-wider">
                                                    Verified Partner
                                                </span>
                                            </div>
                                        </div>

                                        {/* ==========================
                                            Bottom Navigation
                                        ========================== */}
                                        <div className="flex items-center justify-between mt-6 pt-4 border-t border-dashed border-slate-200 shrink-0">
                                            {/* Indicators */}
                                            <div className="flex gap-2">
                                                {testimonials.map((item, index) => (
                                                    <button
                                                        key={item.id}
                                                        onClick={() => setCurrent(index)}
                                                        className={`h-2 rounded-full transition-all duration-300 ${
                                                            current === index
                                                                ? "w-8 bg-primary"
                                                                : "w-2 bg-slate-300 hover:bg-slate-400"
                                                        }`}
                                                    />
                                                ))}
                                            </div>

                                            {/* Navigation */}
                                            <div className="flex gap-3">
                                                <button
                                                    onClick={prevSlide}
                                                    className="h-10 w-10 rounded-full border border-slate-200 flex items-center justify-center transition-all duration-300 hover:bg-primary hover:text-white"
                                                >
                                                    <ChevronLeft size={18} />
                                                </button>
                                                <button
                                                    onClick={nextSlide}
                                                    className="h-10 w-10 rounded-full border border-slate-200 flex items-center justify-center transition-all duration-300 hover:bg-primary hover:text-white"
                                                >
                                                    <ChevronRight size={18} />
                                                </button>
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