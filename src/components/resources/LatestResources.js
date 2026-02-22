"use client";

import { motion } from 'framer-motion';
import { ArrowRight, PlayCircle, Download, ExternalLink, FileText, ChevronDown } from 'lucide-react';

const resources = [
    {
        id: 1,
        type: 'Case Study',
        title: 'How FinTech Giants Scale with UMM Infrastructure',
        description: 'Discover how top financial institutions reduced latency by 60% and improved security compliance across global regions.',
        time: '5 min read',
        actionText: 'Read More',
        ActionIcon: ArrowRight,
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2015&q=80',
        color: 'emerald'
    },
    {
        id: 2,
        type: 'Webinar',
        title: 'Mastering Multi-Cloud Orchestration in 2024',
        description: 'Watch our technical engineering team dive deep into automated failover strategies and cost optimization.',
        time: 'On-demand',
        actionText: 'Watch Now',
        ActionIcon: PlayCircle,
        image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
        color: 'blue'
    },
    {
        id: 3,
        type: 'Whitepaper',
        title: 'Security-First Architecture for SaaS Platforms',
        description: 'A comprehensive guide to implementing Zero Trust security models in highly distributed cloud environments.',
        time: 'PDF Download',
        actionText: 'Download PDF',
        ActionIcon: Download,
        image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=2034&q=80',
        color: 'indigo'
    },
    {
        id: 4,
        type: 'Blog Post',
        title: 'Why AI is the New Backbone of Cloud Compute',
        description: 'How machine learning algorithms are autonomously managing server loads and predicting outages before they happen.',
        time: '8 min read',
        actionText: 'Read Article',
        ActionIcon: FileText,
        image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
        color: 'teal'
    },
    {
        id: 5,
        type: 'Product Update',
        title: 'Introducing UMM Analytics 2.0',
        description: 'Explore the new features in our latest release, including real-time cost visualization and automated compliance reporting.',
        time: 'New Release',
        actionText: "See What's New",
        ActionIcon: ArrowRight,
        image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80',
        color: 'blue'
    },
    {
        id: 6,
        type: 'Guide',
        title: 'The Ultimate SaaS Migration Checklist',
        description: 'Everything you need to know about migrating your legacy architecture to a modern, scalable cloud infrastructure.',
        time: '15 min read',
        actionText: 'Get the Guide',
        ActionIcon: ExternalLink,
        image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2055&q=80',
        color: 'purple'
    },
];

export default function LatestResources() {
    return (
        <section className="bg-gray-50 py-16">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-end mb-10">
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, margin: "-100px" }}
                        transition={{ duration: 0.5 }}
                        className="text-2xl font-bold tracking-tight text-gray-900"
                    >
                        Latest Resources
                    </motion.h2>
                    <motion.a
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, margin: "-100px" }}
                        transition={{ duration: 0.5 }}
                        href="#"
                        className="text-sm font-medium text-blue-600 hover:text-blue-700 flex items-center gap-1 group"
                    >
                        View all
                        <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                    </motion.a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {resources.map((resource, index) => (
                        <motion.div
                            key={resource.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -8 }}
                            className="flex flex-col bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300"
                        >
                            <div className="h-48 overflow-hidden relative">
                                <img
                                    src={resource.image}
                                    alt={resource.title}
                                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                                />
                            </div>
                            <div className="p-6 flex flex-col flex-1">
                                <div className="flex justify-between items-center mb-3">
                                    <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                                        {resource.type}
                                    </span>
                                    <span className="text-xs text-gray-500 font-medium">
                                        {resource.time}
                                    </span>
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">
                                    {resource.title}
                                </h3>
                                <p className="text-sm text-gray-600 mb-6 line-clamp-3 flex-1 leading-relaxed">
                                    {resource.description}
                                </p>
                                <div className="mt-auto">
                                    <a href="#" className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-800 group">
                                        {resource.actionText}
                                        <resource.ActionIcon className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, margin: "-50px" }}
                    transition={{ duration: 0.5 }}
                    className="mt-16 flex justify-center"
                >
                    <button className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-6 py-3 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 transition-colors">
                        Load More Resources
                        <ChevronDown className="h-4 w-4 text-gray-400" />
                    </button>
                </motion.div>
            </div>
        </section>
    );
}
