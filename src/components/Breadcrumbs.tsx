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
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
};

export default Breadcrumbs;
