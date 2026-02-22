import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import PricingCards from '@/components/pricing/PricingCards';
import FAQ from '@/components/pricing/FAQ';
import PricingCTA from '@/components/pricing/PricingCTA';

export const metadata = {
    title: "Pricing - Flexible plans for every stage",
    description: "Scale your operations with confidence. Choose a plan that fits your current needs and upgrade as you grow.",
};

export default function PricingPage() {
    return (
        <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-blue-100 selection:text-blue-900">
            <Navbar />
            <main>
                <PricingCards />
                <FAQ />
                <PricingCTA />
            </main>
            <Footer />
        </div>
    );
}
