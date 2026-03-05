import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

// Helper to recursively collect all route paths from the app directory
function getRoutes(dir: string, basePath = ''): string[] {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    const routes: string[] = [];
    for (const entry of entries) {
        if (entry.name.startsWith('_') || entry.name.startsWith('.')) continue; // ignore private files
        const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory()) {
            // If the directory contains a page.tsx or page.ts, it's a route
            const hasPage = fs.existsSync(path.join(fullPath, 'page.tsx')) || fs.existsSync(path.join(fullPath, 'page.ts'));
            const newBase = `${basePath}/${entry.name}`;
            if (hasPage) routes.push(newBase);
            routes.push(...getRoutes(fullPath, newBase));
        }
    }
    return routes;
}

export const GET = async () => {
    const appDir = path.join(process.cwd(), 'src', 'app');
    const routes = getRoutes(appDir);
    const urls = routes.map((r) => `https://www.lushlawncarepros.com${r}`);
    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
            .map((url) => `  <url>\n    <loc>${url}</loc>\n    <changefreq>weekly</changefreq>\n    <priority>0.8</priority>\n  </url>`)
            .join('\n')}
</urlset>`;
    return new NextResponse(xml, {
        headers: { 'Content-Type': 'application/xml' },
    });
};
