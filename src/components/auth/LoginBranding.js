"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { BarChart2 } from 'lucide-react';

export default function LoginBranding() {
    return (
        <div className="hidden lg:flex w-1/2 bg-blue-600 flex-col justify-between p-12 text-white overflow-hidden relative isolate">
            {/* Decorative gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/50 to-blue-700/50 mix-blend-multiply" />

            <div className="relative z-10">
                <Link href="/" className="inline-flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-blue-600 shadow-md">
                        <span className="font-bold text-xl">UM</span>
                    </div>
                    <span className="text-2xl font-bold tracking-tight text-white">UMM</span>
                </Link>
            </div>

            <div className="relative z-10 max-w-lg">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight mb-6"
                >
                    Empowering your digital workflow.
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-lg text-blue-100 leading-relaxed mb-12"
                >
                    Join thousands of technology firms using the UMM SaaS platform to scale their operations and automate complex processes.
                </motion.p>

                {/* Abstract UI Element representing the app */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="rounded-xl border border-blue-400/30 bg-white/10 p-6 backdrop-blur-sm"
                >
                    <div className="flex items-center gap-4 mb-6">
                        <div className="h-8 w-8 rounded-lg bg-blue-400/20 flex items-center justify-center">
                            <BarChart2 className="h-4 w-4 text-blue-100" />
                        </div>
                        <div className="h-2.5 w-32 rounded-full bg-white/20"></div>
                    </div>
                    <div className="space-y-3">
                        <div className="h-2 w-full rounded-full bg-white/20"></div>
                        <div className="h-2 w-5/6 rounded-full bg-white/10"></div>
                        <div className="h-2 w-4/6 rounded-full bg-white/10"></div>
                    </div>
                </motion.div>
            </div>

            <div className="relative z-10">
                <p className="text-sm text-blue-200">
                    © {new Date().getFullYear()} UMM Technology Inc.
                </p>
            </div>
        </div>
    );
}
