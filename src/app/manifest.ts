import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Lush Lawn Service',
        short_name: 'Lush',
        description: 'The lawn service you can set your watch by.',
        start_url: '/',
        display: 'standalone',
        background_color: '#36454F',
        theme_color: '#2E8B57',
        icons: [
            {
                src: '/icon-192x192.png',
                sizes: '192x192',
                type: 'image/png',
            },
            {
                src: '/icon-512x512.png',
                sizes: '512x512',
                type: 'image/png',
            },
        ],
    }
}
