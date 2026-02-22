"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function CTA() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
    const bottomBgY = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
    const contentY = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);

    return (
        <section ref={ref} className="bg-gray-50 py-16 sm:py-24 overflow-hidden">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <motion.div
                    style={{ y: contentY }}
                    className="relative isolate overflow-hidden bg-blue-600 px-6 py-24 text-center shadow-2xl rounded-3xl sm:px-16"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="mx-auto max-w-2xl text-4xl font-bold tracking-tight text-white sm:text-5xl">
                            Ready to scale your enterprise?
                        </h2>
                        <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-blue-100">
                            Join over 500,000 users worldwide and transform how you manage your business data and workflows with UMM.
                        </p>
                        <form className="mx-auto mt-10 max-w-md flex flex-col sm:flex-row gap-4 justify-center">
                            <input
                                type="email"
                                required
                                className="min-w-0 flex-auto rounded-lg border-0 bg-white/100 px-4 py-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-white/10 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6 w-full"
                                placeholder="Enter your work email"
                            />
                            <button
                                type="submit"
                                className="flex-none rounded-lg bg-white px-8 py-3.5 text-sm font-semibold text-blue-600 shadow-sm hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-colors"
                            >
                                Get Started Now
                            </button>
                        </form>
                        <p className="mt-6 text-sm text-blue-200">
                            No credit card required. 14-day free trial. Cancel anytime.
                        </p>
                    </motion.div>

                    {/* Decorative backgrounds with parallax */}
                    <motion.div
                        style={{ y: bgY }}
                        className="absolute -top-24 -right-24 -z-10 transform-gpu blur-3xl"
                        aria-hidden="true"
                    >
                        <div className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#9089fc] to-[#4f46e5] opacity-20"></div>
                    </motion.div>
                    <motion.div
                        style={{ y: bottomBgY }}
                        className="absolute -bottom-24 -left-24 -z-10 transform-gpu blur-3xl"
                        aria-hidden="true"
                    >
                        <div className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#80caff] to-[#4f46e5] opacity-20"></div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
