"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, HelpCircle } from 'lucide-react';

const plans = [
    {
        name: 'STARTER',
        price: '$0',
        description: 'Perfect for individuals and side projects.',
        buttonText: 'Get Started for Free',
        buttonVariant: 'secondary',
        features: [
            { name: '1 Workspace User', included: true },
            { name: 'Up to 5 Active Projects', included: true },
            { name: 'Basic Data Exports', included: true },
            { name: 'Custom Integrations', included: false },
        ],
    },
    {
        name: 'PROFESSIONAL',
        price: '$49',
        description: 'Best for growing teams and small businesses.',
        buttonText: 'Start 14-day Free Trial',
        buttonVariant: 'primary',
        popular: true,
        features: [
            { name: 'Up to 20 Workspace Users', included: true },
            { name: 'Unlimited Projects', included: true },
            { name: 'Advanced Analytics Suite', included: true },
            { name: 'API Access & Integrations', included: true },
            { name: 'Priority Email Support', included: true },
        ],
    },
    {
        name: 'ENTERPRISE',
        price: 'Custom',
        description: 'Advanced control and security for organizations.',
        buttonText: 'Contact Sales',
        buttonVariant: 'dark',
        features: [
            { name: 'Single Sign-On (SSO) & SAML', included: true },
            { name: 'Advanced Security & Governance', included: true },
            { name: 'Dedicated Account Manager', included: true },
            { name: 'Custom SLA & Contracts', included: true },
        ],
    },
];

export default function PricingCards() {
    const [billingCycle, setBillingCycle] = useState('Monthly');

    return (
        <section className="bg-gray-50 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-3xl text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, margin: "-100px" }}
                        transition={{ duration: 0.5 }}
                        className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl"
                    >
                        Flexible plans for every stage
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, margin: "-100px" }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="mt-6 text-xl text-gray-500"
                    >
                        Scale your operations with confidence. Choose a plan that fits your current needs and upgrade as you grow.
                    </motion.p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mt-12 flex justify-center"
                >
                    <div className="relative flex items-center rounded-full bg-gray-100 p-1">
                        <button
                            onClick={() => setBillingCycle('Monthly')}
                            className={`relative w-32 rounded-full py-2 text-sm font-semibold transition-colors focus:outline-none ${billingCycle === 'Monthly' ? 'text-blue-600 shadow-sm' : 'text-gray-500 hover:text-gray-900'
                                }`}
                        >
                            {billingCycle === 'Monthly' && (
                                <motion.div
                                    layoutId="active-pill"
                                    className="absolute inset-0 rounded-full bg-white shadow-sm"
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                />
                            )}
                            <span className="relative z-10">Monthly</span>
                        </button>
                        <button
                            onClick={() => setBillingCycle('Yearly')}
                            className={`relative w-32 rounded-full py-2 text-sm font-semibold transition-colors focus:outline-none ${billingCycle === 'Yearly' ? 'text-blue-600 shadow-sm' : 'text-gray-500 hover:text-gray-900'
                                }`}
                        >
                            <div className="absolute -top-3 -right-3 z-20 rounded-full bg-green-500 px-2 py-0.5 text-[10px] font-bold text-white uppercase tracking-wider">
                                Save 20%
                            </div>
                            {billingCycle === 'Yearly' && (
                                <motion.div
                                    layoutId="active-pill"
                                    className="absolute inset-0 rounded-full bg-white shadow-sm"
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                />
                            )}
                            <span className="relative z-10">Yearly</span>
                        </button>
                    </div>
                </motion.div>

                <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3 max-w-5xl mx-auto">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={plan.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{
                                scale: 1.05,
                                y: -10,
                                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                            }}
                            className={`relative flex flex-col rounded-3xl bg-white p-8 shadow-sm transition-all duration-300 border ${plan.popular ? 'border-blue-500 border-2' : 'border-gray-200'
                                }`}
                        >
                            {plan.popular && (
                                <div className="absolute -top-5 left-0 right-0 mx-auto w-32 rounded-full bg-blue-600 px-3 py-1.5 text-center text-xs font-bold text-white uppercase tracking-wider">
                                    Most Popular
                                </div>
                            )}

                            <div className="mb-6">
                                <h3 className={`text-sm font-bold tracking-widest uppercase ${plan.popular ? 'text-blue-600' : 'text-gray-900'}`}>
                                    {plan.name}
                                </h3>
                                <div className="mt-4 flex items-baseline text-5xl font-extrabold text-gray-900">
                                    {plan.price === 'Custom' ? 'Custom' : (
                                        <>
                                            {plan.price}
                                            <span className="ml-1 text-xl font-medium text-gray-500">/mo</span>
                                        </>
                                    )}
                                </div>
                                <p className="mt-4 text-sm text-gray-500 leading-relaxed h-10">
                                    {plan.description}
                                </p>
                            </div>

                            <button
                                className={`mt-4 w-full rounded-lg py-3 px-4 text-sm font-semibold transition-colors
                  ${plan.buttonVariant === 'primary' ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-sm' : ''}
                  ${plan.buttonVariant === 'secondary' ? 'bg-gray-50 text-gray-900 hover:bg-gray-100 border border-gray-200' : ''}
                  ${plan.buttonVariant === 'dark' ? 'bg-gray-900 text-white hover:bg-gray-800 shadow-sm' : ''}
                `}
                            >
                                {plan.buttonText}
                            </button>

                            <div className="mt-8 flex-1">
                                <h4 className="text-xs font-bold uppercase tracking-wider text-gray-900 bg-white">
                                    {plan.popular ? 'EVERYTHING IN STARTER, PLUS:' : (plan.name === 'ENTERPRISE' ? 'CORPORATE-GRADE FEATURES:' : 'INCLUDED FEATURES:')}
                                </h4>
                                <ul className="mt-6 space-y-4">
                                    {plan.features.map((feature) => (
                                        <li key={feature.name} className="flex items-start">
                                            <div className={`mt-0.5 flex-shrink-0 flex items-center justify-center p-0.5 rounded-full ${feature.included
                                                    ? 'text-blue-600 bg-blue-50'
                                                    : 'text-gray-300'
                                                }`}>
                                                {feature.included ? (
                                                    <Check className="h-4 w-4" strokeWidth={3} />
                                                ) : (
                                                    <div className="h-4 w-4 rounded-full border-2 border-gray-200 flex items-center justify-center">
                                                        <div className="h-1.5 w-1.5 rounded-full bg-gray-200"></div>
                                                    </div>
                                                )}
                                            </div>
                                            <span className={`ml-3 text-sm ${feature.included ? 'text-gray-600' : 'text-gray-400 line-through'}`}>
                                                {feature.name}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
