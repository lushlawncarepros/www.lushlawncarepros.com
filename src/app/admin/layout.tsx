import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Admin | Lush',
    robots: {
        index: false,
        follow: false,
    },
};

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-lush-slate pt-20 pb-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {children}
            </div>
        </div>
    );
}
