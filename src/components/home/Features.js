"use client";

import { BarChart3, Zap, ShieldCheck, Cloud, Expand, HeadphonesIcon, ChevronRight } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const features = [
    {
        name: 'Real-time Analytics',
        description: 'Monitor your data streams as they happen with millisecond latency and deep insights that drive better decision making.',
        icon: BarChart3,
    },
    {
        name: 'Automated Workflow',
        description: 'Eliminate manual tasks with our AI-driven orchestration engine and smart triggers that optimize your daily routines.',
        icon: Zap,
    },
    {
        name: 'Secure Data Management',
        description: 'Enterprise-grade encryption and compliance out of the box. Your sensitive data is protected by the highest industry standards.',
        icon: ShieldCheck,
    },
    {
        name: 'Cloud Integration',
        description: 'Seamlessly connect with your existing tech stack through our robust API and library of pre-built native connectors.',
        icon: Cloud,
    },
    {
        name: 'Scalable Infrastructure',
        description: 'Built to grow with your business, our infrastructure handles millions of requests without breaking a sweat or losing speed.',
        icon: Expand,
    },
    {
        name: '24/7 Priority Support',
        description: 'Dedicated experts available around the clock to ensure your business-critical operations always run smoothly.',
        icon: HeadphonesIcon,
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { type: 'spring', damping: 20, stiffness: 100 }
    },
};

export default function Features() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    // Parallax effect for the background or entire section
    const y = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);

    return (
        <section id="features" ref={ref} className="bg-white py-24 sm:py-32 overflow-hidden">
            <motion.div style={{ y }} className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="max-w-2xl"
                    >
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                            Core Features & Solutions
                        </h2>
                        <p className="mt-4 text-lg text-gray-600">
                            Discover how UMM transforms your operational efficiency with our suite of enterprise tools built for the next generation of business.
                        </p>
                    </motion.div>

                    <motion.a
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        href="#all-features"
                        className="group hidden md:inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-700"
                    >
                        Explore all features
                        <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </motion.a>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, margin: "-100px" }}
                    className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
                >
                    {features.map((feature) => (
                        <motion.div
                            key={feature.name}
                            variants={itemVariants}
                            whileHover={{ y: -5, transition: { duration: 0.2 } }}
                            className="flex flex-col rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-shadow hover:shadow-md"
                        >
                            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                                <feature.icon className="h-6 w-6" aria-hidden="true" />
                            </div>
                            <h3 className="mb-3 text-xl font-bold text-gray-900">{feature.name}</h3>
                            <p className="text-gray-600 leading-relaxed text-sm flex-1">{feature.description}</p>
                        </motion.div>
                    ))}
                </motion.div>

                <div className="mt-8 text-center md:hidden">
                    <a href="#all-features" className="group inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-700">
                        Explore all features
                        <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </a>
                </div>
            </motion.div>
        </section>
    );
}
