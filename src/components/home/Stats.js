"use client";

import { ArrowUpRight } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const stats = [
    { id: 1, name: 'Active Users', value: '500K+', change: '+12%', changeType: 'increase' },
    { id: 2, name: 'Data Processed', value: '10PB+', change: '+25%', changeType: 'increase' },
    { id: 3, name: 'System Uptime', value: '99.9%', change: '+0.01%', changeType: 'increase' },
    { id: 4, name: 'Global Offices', value: '12+', change: '+29%', changeType: 'increase' },
];

export default function Stats() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.9]);
    const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

    return (
        <section ref={ref} className="bg-gray-50 py-24 sm:py-32 overflow-hidden">
            <motion.div style={{ scale, opacity }} className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:max-w-none text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-16"
                    >
                        Trusted by Industry Leaders
                    </motion.h2>

                    <dl className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {stats.map((stat, i) => (
                            <motion.div
                                key={stat.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="flex flex-col rounded-2xl bg-white p-8 text-center shadow-sm border border-gray-100 transition-all hover:shadow-md hover:-translate-y-1"
                            >
                                <dt className="order-2 mt-2 text-sm font-medium text-gray-500 whitespace-nowrap">
                                    {stat.name}
                                </dt>
                                <dd className="order-1 text-4xl font-extrabold text-blue-600 mb-2">
                                    {stat.value}
                                </dd>
                                <div className="order-3 mt-4 flex items-center justify-center text-sm font-medium text-green-600 gap-1 bg-green-50 w-fit mx-auto px-2 py-1 rounded-full">
                                    <ArrowUpRight className="h-4 w-4" />
                                    {stat.change}
                                </div>
                            </motion.div>
                        ))}
                    </dl>
                </div>
            </motion.div>
        </section>
    );
}
