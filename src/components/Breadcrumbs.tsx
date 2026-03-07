"use client";
import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

/**
 * Breadcrumbs component generates a JSON‑LD BreadcrumbList based on the current pathname.
 * It also renders a visual breadcrumb trail using Tailwind classes.
 */
const Breadcrumbs: React.FC = () => {
    const pathname = usePathname();
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.lushlawncarepros.com';

    // Don't render breadcrumbs on the homepage
    if (pathname === '/') return null;

    // Split the path and filter empty segments
    const segments = pathname.split('/').filter(Boolean);

    // Build breadcrumb items for JSON‑LD and Visual display
    // Always start with "Home"
    const breadcrumbItems = [
        {
            name: 'Home',
            item: siteUrl,
            position: 1
        },
        ...segments.map((segment, index) => {
            const url = `${siteUrl}/${segments.slice(0, index + 1).join('/')}`;
            // Capitalize segment for display
            const name = segment.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
            return {
                name,
                item: url,
                position: index + 2,
            };
        })
    ];

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumbItems.map(item => ({
            '@type': 'ListItem',
            position: item.position,
            name: item.name,
            item: item.item,
        })),
    };

    return (
        <div className="bg-slate-50 border-b border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
                <nav className="flex items-center space-x-2 text-sm text-slate-500 font-medium" aria-label="Breadcrumb">
                    {breadcrumbItems.map((item, index) => (
                        <React.Fragment key={item.item}>
                            {index > 0 && <span className="text-slate-300">/</span>}
                            <Link
                                href={item.item}
                                className={`hover:text-[#39B54A] transition-colors duration-200 ${index === breadcrumbItems.length - 1 ? 'text-slate-900 pointer-events-none' : ''
                                    }`}
                                aria-current={index === breadcrumbItems.length - 1 ? 'page' : undefined}
                            >
                                {item.name}
                            </Link>
                        </React.Fragment>
                    ))}
                </nav>
            </div>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
        </div>
    );
};

export default Breadcrumbs;
