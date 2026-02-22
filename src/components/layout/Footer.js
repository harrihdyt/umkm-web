import Link from 'next/link';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-white" aria-labelledby="footer-heading">
            <h2 id="footer-heading" className="sr-only">
                Footer
            </h2>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-8 pt-16 sm:pt-24 lg:pt-32">
                <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                    <div className="space-y-8">
                        <Link href="/" className="flex items-center gap-2">
                            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white">
                                <span className="font-bold text-lg">UM</span>
                            </div>
                            <span className="text-xl font-bold tracking-tight text-gray-900">UMKM</span>
                        </Link>
                        <p className="text-sm leading-6 text-gray-600 max-w-xs">
                            The world's most advanced SaaS platform for modern enterprise growth and data management.
                        </p>
                        <div className="flex space-x-6">
                            {/* Fake social placeholder icons */}
                            <a href="#" className="text-gray-400 hover:text-gray-500">
                                <span className="sr-only">Twitter</span>
                                <div className="h-8 w-8 rounded-full border border-gray-200 flex items-center justify-center text-xs">𝕏</div>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-gray-500">
                                <span className="sr-only">GitHub</span>
                                <div className="h-8 w-8 rounded-full border border-gray-200 flex items-center justify-center text-xs">&lt;/&gt;</div>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-gray-500">
                                <span className="sr-only">LinkedIn</span>
                                <div className="h-8 w-8 rounded-full border border-gray-200 flex items-center justify-center text-xs">in</div>
                            </a>
                        </div>
                    </div>
                    <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3 className="text-sm font-semibold leading-6 text-gray-900">Product</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    <li>
                                        <a href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900">Features</a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900">Integrations</a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900">Pricing</a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900">Changelog</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="mt-10 md:mt-0">
                                <h3 className="text-sm font-semibold leading-6 text-gray-900">Company</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    <li>
                                        <a href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900">About</a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900">Careers</a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900">Blog</a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900">Contact</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3 className="text-sm font-semibold leading-6 text-gray-900">Legal</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    <li>
                                        <a href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900">Privacy</a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900">Terms</a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900">Security</a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900">Cookies</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-16 border-t border-gray-100 pt-8 sm:mt-20 lg:mt-24 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs leading-5 text-gray-500">
                        &copy; {currentYear} UMKM Technology Inc. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6 text-xs text-gray-500">
                        <span className="flex items-center gap-1">🌐 English (US)</span>
                        <span className="flex items-center gap-1">🟢 System Status: Operational</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
