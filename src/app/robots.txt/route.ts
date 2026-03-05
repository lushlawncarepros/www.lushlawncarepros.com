import { NextResponse } from 'next/server';

// Next.js 13+ route handler for /robots.txt
export const GET = async () => {
    const text = `User-agent: *\nAllow: /\nSitemap: https://www.lushlawncarepros.com/sitemap.xml`;
    return new NextResponse(text, {
        headers: {
            'Content-Type': 'text/plain',
        },
    });
};
