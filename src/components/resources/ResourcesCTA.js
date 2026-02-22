"use client";

import { motion } from 'framer-motion';

export default function ResourcesCTA() {
    return (
        <section className="bg-white pb-32">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: false, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="relative isolate overflow-hidden bg-blue-600 px-6 py-16 text-center shadow-2xl rounded-3xl sm:px-16"
                >
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl"
                    >
                        Ready to transform your SaaS infrastructure?
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-blue-100"
                    >
                        Join 2,000+ companies building their future on UMM. Get a personalized walkthrough of our platform today.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="mx-auto mt-10 flex max-w-md flex-col sm:flex-row gap-4 justify-center"
                    >
                        <a
                            href="#"
                            className="flex-none rounded-lg bg-white px-8 py-3.5 text-sm font-semibold text-blue-600 shadow-sm hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-colors"
                        >
                            Request a Demo
                        </a>
                        <a
                            href="#"
                            className="flex-none rounded-lg border border-blue-400 bg-transparent px-8 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-colors"
                        >
                            Talk to Sales
                        </a>
                    </motion.div>

                    {/* Decorative elements */}
                    <div className="absolute -top-24 -right-24 -z-10 transform-gpu blur-3xl opacity-30" aria-hidden="true">
                        <div className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#9089fc] to-[#4f46e5]"></div>
                    </div>
                    <div className="absolute -bottom-24 -left-24 -z-10 transform-gpu blur-3xl opacity-30" aria-hidden="true">
                        <div className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#80caff] to-[#4f46e5]"></div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
