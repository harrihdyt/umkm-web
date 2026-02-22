"use client";

import { ArrowRight } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Hero() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    // Parallax effects
    const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

    return (
        <section ref={ref} className="relative overflow-hidden bg-gray-50 pt-24 pb-32">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8 items-center">
                    <motion.div
                        style={{ y: textY, opacity }}
                        className="max-w-2xl"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="mb-6 inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600 uppercase tracking-wider"
                        >
                            <span className="mr-2 flex h-2 w-2 rounded-full bg-blue-600"></span>
                            Enterprise Ready
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl"
                        >
                            Powerful Solutions for Modern Enterprises
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="mt-6 text-lg text-gray-600 leading-relaxed"
                        >
                            Empower your business with UMM's cutting-edge SaaS platform designed for speed, security, and scalability. Streamline operations and drive growth with AI-driven insights.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="mt-8 flex flex-col sm:flex-row gap-4"
                        >
                            <a
                                href="#trial"
                                className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-blue-700 transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                            >
                                Start Free Trial
                                <ArrowRight className="ml-2 -mr-1 h-5 w-5" />
                            </a>
                            <a
                                href="#demo"
                                className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-6 py-3 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                            >
                                View Demo
                            </a>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        style={{ y: imageY }}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="relative mx-auto w-full max-w-lg lg:max-w-none"
                    >
                        <div className="relative rounded-2xl bg-white p-2 shadow-2xl ring-1 ring-gray-200">
                            <img
                                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                                alt="Dashboard preview"
                                className="w-full rounded-xl object-cover shadow-sm border border-gray-100"
                            />
                        </div>
                        {/* Decorative blob behind image */}
                        <div className="absolute -z-10 -right-12 -top-12 h-64 w-64 rounded-full bg-blue-100 blur-3xl opacity-50"></div>
                        <div className="absolute -z-10 -left-12 -bottom-12 h-64 w-64 rounded-full bg-indigo-50 blur-3xl opacity-50"></div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
