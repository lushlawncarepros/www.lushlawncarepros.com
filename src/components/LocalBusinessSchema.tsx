import React from 'react';

/**
 * LocalBusinessSchema component injects JSON‑LD structured data for the lawn service.
 * It follows the schema.org LawnService type (a subtype of LocalBusiness).
 */
const LocalBusinessSchema: React.FC = () => {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name: 'Lush Lawn Care Pros',
        url: process.env.NEXT_PUBLIC_SITE_URL || 'https://www.lushlawncarepros.com',
        logo: 'https://www.lushlawncarepros.com/lush-logo.png',
        image: 'https://www.lushlawncarepros.com/lush-logo.png',
        description: 'Premium lawn care services in Boise and Meridian, Idaho.',
        telephone: '(208) 906-3220',
        priceRange: '$$',
        address: {
            '@type': 'PostalAddress',
            addressLocality: 'Boise',
            addressRegion: 'ID',
            postalCode: '83709',
            addressCountry: 'US',
        },
        serviceArea: [
            { '@type': 'Place', name: 'Boise' },
            { '@type': 'Place', name: 'Meridian' },
            { '@type': 'Place', name: 'Eagle' },
            { '@type': 'Place', name: 'Nampa' },
            { '@type': 'Place', name: 'Idaho' },
        ],
        aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: 4.8,
            reviewCount: 112,
        },
        makesOffer: [
            { '@type': 'Service', name: 'Lawn Mowing (Weekly)' },
            { '@type': 'Service', name: 'Lawn Fertilization' },
            { '@type': 'Service', name: 'Weed Control (Bed & Hardscape)' },
            { '@type': 'Service', name: 'Core Aeration' },
            { '@type': 'Service', name: 'Sprinkler Blowout / Winterization' },
            { '@type': 'Service', name: 'Shrub Pruning / Care' },
            { '@type': 'Service', name: 'Spring & Fall Clean‑Up (Seasonal)' },
        ],
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
};

export default LocalBusinessSchema;
