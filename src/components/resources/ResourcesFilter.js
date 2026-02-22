"use client";

import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import { useState } from 'react';

const categories = ['All Resources', 'Blog', 'Whitepapers', 'Case Studies', 'Webinars', 'Product Updates'];

export default function ResourcesFilter() {
    const [activeCategory, setActiveCategory] = useState('All Resources');

    return (
        <section className="bg-gray-50 pt-24 pb-12">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl mb-4"
                >
                    Resource Center
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-lg text-gray-600 max-w-2xl mx-auto mb-10"
                >
                    Expert insights, detailed whitepapers, and technical guides to help you scale your SaaS infrastructure efficiently.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="max-w-3xl mx-auto bg-white rounded-full border border-gray-200 shadow-sm flex items-center px-4 py-2 mb-8 focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500 transition-shadow"
                >
                    <Search className="h-5 w-5 text-gray-400 mr-3" />
                    <input
                        type="text"
                        placeholder="Search for guides, articles, or case studies..."
                        className="flex-1 bg-transparent border-none focus:ring-0 text-sm outline-none py-2"
                    />
                    <div className="hidden sm:flex border border-gray-200 rounded-md px-2 py-1 bg-gray-50 text-xs text-gray-400 font-medium">
                        ⌘K
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-wrap justify-center gap-3"
                >
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${activeCategory === category
                                    ? 'bg-blue-600 text-white'
                                    : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50 hover:text-gray-900'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
