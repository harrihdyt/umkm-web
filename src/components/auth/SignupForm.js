"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Eye, EyeOff, User, Mail, Building, Lock, ArrowRight, Github } from 'lucide-react';

export default function SignupForm() {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="flex w-full lg:w-[55%] flex-col justify-center px-4 sm:px-12 lg:px-20 xl:px-28 py-12 bg-gray-50 overflow-y-auto">
            <div className="mx-auto w-full max-w-md">

                {/* Mobile Header */}
                <div className="lg:hidden mb-12 flex justify-center">
                    <Link href="/" className="inline-flex items-center gap-2">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white shadow-md">
                            <span className="font-bold text-lg">UM</span>
                        </div>
                        <span className="text-2xl font-bold tracking-tight text-gray-900">UMM</span>
                    </Link>
                </div>

                <div>
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-2">
                        Create your free account
                    </h2>
                    <p className="text-sm text-gray-500">
                        Start your 14-day trial today. No credit card required.
                    </p>
                </div>

                <div className="mt-8">
                    <form className="space-y-5" action="#" method="POST">
                        {/* Full Name */}
                        <div>
                            <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-1.5">
                                Full Name
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <User className="h-5 w-5 text-gray-400" />
                                </div>
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    autoComplete="name"
                                    placeholder="John Doe"
                                    required
                                    className="block w-full rounded-lg border-0 py-3 pl-10 pr-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm bg-white"
                                />
                            </div>
                        </div>

                        {/* Work Email */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-1.5">
                                Work Email
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Mail className="h-5 w-5 text-gray-400" />
                                </div>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    placeholder="john@company.com"
                                    required
                                    className="block w-full rounded-lg border-0 py-3 pl-10 pr-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm bg-white"
                                />
                            </div>
                        </div>

                        {/* Company Name */}
                        <div>
                            <label htmlFor="company" className="block text-sm font-semibold text-gray-900 mb-1.5">
                                Company Name
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Building className="h-5 w-5 text-gray-400" />
                                </div>
                                <input
                                    id="company"
                                    name="company"
                                    type="text"
                                    placeholder="Acme Inc."
                                    required
                                    className="block w-full rounded-lg border-0 py-3 pl-10 pr-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm bg-white"
                                />
                            </div>
                        </div>

                        {/* Password */}
                        <div>
                            <label htmlFor="password" className="block text-sm font-semibold text-gray-900 mb-1.5">
                                Password
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Lock className="h-5 w-5 text-gray-400" />
                                </div>
                                <input
                                    id="password"
                                    name="password"
                                    type={showPassword ? "text" : "password"}
                                    autoComplete="new-password"
                                    placeholder="••••••••"
                                    required
                                    className="block w-full rounded-lg border-0 py-3 pl-10 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm bg-white"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-500 transition-colors"
                                >
                                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                                </button>
                            </div>
                            <p className="mt-2 text-[11px] text-gray-500">
                                Must be at least 8 characters including a number.
                            </p>
                        </div>

                        <div className="pt-2">
                            <button
                                type="submit"
                                className="group flex w-full items-center justify-center rounded-lg bg-blue-600 px-3 py-3.5 text-sm font-bold text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-colors"
                            >
                                Create Account
                                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </button>
                        </div>
                    </form>

                    <p className="mt-4 text-center text-[11px] text-gray-500">
                        By clicking "Create Account", you agree to our <a href="#" className="text-blue-600 hover:underline">Terms of Service</a> and <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>.
                    </p>

                    <div className="mt-8 text-center">
                        <p className="text-sm text-gray-600">
                            Already have an account?{' '}
                            <Link href="/login" className="font-bold text-blue-600 hover:text-blue-500 transition-colors">
                                Sign In
                            </Link>
                        </p>
                    </div>

                    <div className="mt-8">
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center" aria-hidden="true">
                                <div className="w-full border-t border-gray-200" />
                            </div>
                            <div className="relative flex justify-center text-xs font-medium uppercase tracking-wider">
                                <span className="bg-gray-50 px-4 text-gray-400">Or continue with</span>
                            </div>
                        </div>

                        <div className="mt-6 grid grid-cols-2 gap-4">
                            <button className="flex w-full items-center justify-center gap-2 rounded-lg bg-white border border-gray-200 px-3 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-50 transition-colors focus-visible:ring-transparent">
                                <svg className="h-4 w-4" viewBox="0 0 24 24">
                                    <path
                                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                        fill="#4285F4"
                                    />
                                    <path
                                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                        fill="#34A853"
                                    />
                                    <path
                                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                                        fill="#FBBC05"
                                    />
                                    <path
                                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                                        fill="#EA4335"
                                    />
                                </svg>
                                <span className="text-sm font-bold text-gray-700">Google</span>
                            </button>

                            <button className="flex w-full items-center justify-center gap-2 rounded-lg bg-white border border-gray-200 px-3 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-50 transition-colors focus-visible:ring-transparent">
                                <Github className="h-4 w-4 text-gray-700" />
                                <span className="text-sm font-bold text-gray-700">GitHub</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
