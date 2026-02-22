"use client";

import { motion } from 'framer-motion';

const faqs = [
    {
        question: "Can I switch plans anytime?",
        answer: "Yes, you can upgrade or downgrade your plan at any time. Changes are reflected in your billing cycle immediately.",
    },
    {
        question: "What payment methods do you accept?",
        answer: "We accept all major credit cards, PayPal, and bank transfers for Enterprise customers.",
    },
    {
        question: "Is there a free trial?",
        answer: "All our paid plans come with a 14-day free trial. No credit card is required to start.",
    },
    {
        question: "Do you offer discounts for non-profits?",
        answer: "Yes! We offer a 50% discount for registered non-profit organizations. Contact our support team to learn more.",
    },
];

export default function FAQ() {
    return (
        <section className="bg-white py-16 sm:py-24">
            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Frequently Asked Questions
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <h3 className="text-base font-bold text-gray-900">{faq.question}</h3>
                            <p className="mt-3 text-sm text-gray-600 leading-relaxed">{faq.answer}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
