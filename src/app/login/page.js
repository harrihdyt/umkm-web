import LoginBranding from '@/components/auth/LoginBranding';
import LoginForm from '@/components/auth/LoginForm';

export const metadata = {
    title: "Sign In - UMM",
    description: "Sign in to your UMM account.",
};

export default function LoginPage() {
    return (
        <div className="flex min-h-screen bg-white font-sans selection:bg-blue-100 selection:text-blue-900">
            <LoginBranding />
            <LoginForm />
        </div>
    );
}
