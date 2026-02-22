import SignupBranding from '@/components/auth/SignupBranding';
import SignupForm from '@/components/auth/SignupForm';

export const metadata = {
    title: "Create an Account - UMM",
    description: "Start your 14-day free trial today.",
};

export default function SignupPage() {
    return (
        <div className="flex min-h-screen font-sans selection:bg-blue-100 selection:text-blue-900 bg-gray-50">
            <SignupBranding />
            <SignupForm />
        </div>
    );
}
