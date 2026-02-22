"use client";

import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

export default function PricingCTA() {
    return (
        <section className="bg-white pb-24">
            <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, margin: "-50px" }}
                    transition={{ duration: 0.6 }}
                    className="rounded-3xl bg-blue-50 p-8 sm:p-12 flex flex-col md:flex-row md:items-center justify-between gap-6 border border-blue-100"
                >
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900">Still have questions?</h2>
                        <p className="mt-2 text-gray-600">
                            Our team is here to help you find the perfect solution for your business.
                        </p>
                    </div>
                    <button className="flex-shrink-0 inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 transition-colors">
                        <Mail className="h-4 w-4" />
                        Talk to an Expert
                    </button>
                </motion.div>
            </div>
        </section>
    );
}
