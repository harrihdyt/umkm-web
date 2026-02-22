"use client";

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function FeaturedResource() {
    return (
        <section className="bg-gray-50 pb-16">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 flex flex-col md:flex-row group"
                >
                    <div className="w-full md:w-1/2 relative min-h-[300px] md:min-h-full overflow-hidden bg-gray-900">
                        <div className="absolute top-6 left-6 z-10 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                            Featured Report
                        </div>
                        <img
                            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80"
                            alt="Global network illustration"
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-blue-900/20 mix-blend-multiply"></div>
                    </div>
                    <div className="w-full md:w-1/2 p-10 lg:p-14 flex flex-col justify-center">
                        <div className="flex items-center gap-2 text-sm font-semibold text-blue-600 mb-4">
                            <span>Industry Insights</span>
                            <span className="w-1 h-1 rounded-full bg-blue-300"></span>
                            <span>June 2024</span>
                        </div>
                        <h2 className="text-3xl font-extrabold text-gray-900 mb-6 leading-tight">
                            The Future of SaaS Infrastructure: 2024 Strategic Report
                        </h2>
                        <p className="text-gray-600 mb-8 leading-relaxed">
                            Explore the critical trends shaping the next decade of cloud computing, decentralized architecture, and the impact of generative AI on enterprise software scale.
                        </p>
                        <div className="flex items-center gap-6 mt-auto">
                            <a href="#" className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-sm font-medium text-white shadow-sm hover:bg-blue-700 transition-colors">
                                Read Full Report
                                <ArrowRight className="h-4 w-4" />
                            </a>
                            <span className="text-sm text-gray-500 font-medium">12 min read</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
