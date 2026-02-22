import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ResourcesFilter from '@/components/resources/ResourcesFilter';
import FeaturedResource from '@/components/resources/FeaturedResource';
import LatestResources from '@/components/resources/LatestResources';
import ResourcesCTA from '@/components/resources/ResourcesCTA';

export const metadata = {
    title: "Resource Center - UMM",
    description: "Expert insights, detailed whitepapers, and technical guides to help you scale your SaaS infrastructure efficiently.",
};

export default function ResourcesPage() {
    return (
        <div className="min-h-screen bg-gray-50 font-sans text-gray-900 selection:bg-blue-100 selection:text-blue-900">
            <Navbar />
            <main>
                <ResourcesFilter />
                <FeaturedResource />
                <LatestResources />
                <ResourcesCTA />
            </main>
            <Footer />
        </div>
    );
}
