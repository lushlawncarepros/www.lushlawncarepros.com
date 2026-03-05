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
    // Split the path and filter empty segments
    const segments = pathname.split('/').filter(Boolean);

    // Build breadcrumb items for JSON‑LD
    const itemListElement = segments.map((segment, index) => {
        const url = `${process.env.NEXT_PUBLIC_SITE_URL || ''}/${segments.slice(0, index + 1).join('/')}`;
        // Capitalize segment for display
        const name = segment.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
        return {
            '@type': 'ListItem',
            position: index + 1,
            name,
            item: url,
        };
    });

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement,
    };

    return (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    );
};

export default Breadcrumbs;
