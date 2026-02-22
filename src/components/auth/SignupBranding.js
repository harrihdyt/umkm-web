"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Zap, HeadphonesIcon, ShieldCheck } from 'lucide-react';

export default function SignupBranding() {
    return (
        <div className="hidden lg:flex w-[45%] bg-blue-600 flex-col py-12 px-16 text-white overflow-hidden relative isolate">
            {/* Subtle background color variations instead of complex gradients */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-blue-700/80 mix-blend-multiply" />

            <div className="relative z-10 mb-24">
                <Link href="/" className="inline-flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/20 text-white backdrop-blur-sm">
                        <span className="font-bold text-sm">UM</span>
                    </div>
                    <span className="text-xl font-bold tracking-tight text-white">UMM</span>
                </Link>
            </div>

            <div className="relative z-10 max-w-lg flex-1">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-[1.1] mb-6"
                >
                    Join the future of<br />technology.
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-lg text-blue-100 leading-relaxed mb-16"
                >
                    Experience the most advanced SaaS platform designed for high-growth tech firms.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="space-y-10"
                >
                    {/* Feature 1 */}
                    <div className="flex gap-5">
                        <div className="flex-shrink-0 flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 border border-white/20 backdrop-blur-sm">
                            <Zap className="h-6 w-6 text-white" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-1">Instant Setup</h3>
                            <p className="text-sm text-blue-200 leading-relaxed">
                                Get your workspace running in under 2 minutes with automated provisioning.
                            </p>
                        </div>
                    </div>

                    {/* Feature 2 */}
                    <div className="flex gap-5">
                        <div className="flex-shrink-0 flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 border border-white/20 backdrop-blur-sm">
                            <HeadphonesIcon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-1">24/7 Expert Support</h3>
                            <p className="text-sm text-blue-200 leading-relaxed">
                                Our world-class engineering team is always here to help you scale your infra.
                            </p>
                        </div>
                    </div>

                    {/* Feature 3 */}
                    <div className="flex gap-5">
                        <div className="flex-shrink-0 flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 border border-white/20 backdrop-blur-sm">
                            <ShieldCheck className="h-6 w-6 text-white" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-1">Enterprise Security</h3>
                            <p className="text-sm text-blue-200 leading-relaxed">
                                Bank-grade encryption and SOC2 compliance for all your company data.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>

            <div className="relative z-10 mt-auto pt-12">
                <p className="text-sm text-blue-300">
                    © {new Date().getFullYear()} UMM Technology Inc. All rights reserved.
                </p>
            </div>
        </div>
    );
}
