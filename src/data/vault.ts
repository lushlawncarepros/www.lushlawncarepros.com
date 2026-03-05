export interface Article {
    id: string;
    title: string;
    slug: string;
    category: string;
    excerpt: string;
    author: string;
    readTime: string;
}

export const vaultArticles: Article[] = [
    {
        id: '1',
        title: 'The 3-Inch Rule: Why Mowing Height is the Secret to a Weed-Free Lawn',
        slug: '3-inch-rule',
        category: 'Mowing Science',
        excerpt: 'In the 100°F Boise heat, your lawn is a thermal buffer. Discover why a 2-inch cut is cooking your roots and fueling Puncturevine growth.',
        author: 'Ethan Petersen, Chief Turf Strategist',
        readTime: '8 Min'
    },
    {
        id: '2',
        title: 'The Deep & Infrequent Protocol: Mastering the Golden Ratio for Boise Turf',
        slug: 'watering-protocol',
        category: 'Irrigation Science',
        excerpt: 'In a 105°F Boise July, your lawn is a high-demand engine. Discover the "Golden Ratio" of 1.5 inches over 3 days and why 10 minutes is the "tipping point" for water waste.',
        author: 'Ethan Petersen, Chief Turf Strategist',
        readTime: '10 Min'
    },
    {
        id: '3',
        title: 'The Pest Audit: Precision Diagnostics for Treasure Valley Turf',
        slug: 'pest-audit',
        category: 'Entomology',
        excerpt: 'Don\'t mistake Billbugs for drought stress. Learn the "Tug Test" diagnostic protocol and how we protect the Boise soil microbiome using "Soft Chemistry" standards.',
        author: 'Ethan Petersen, Chief Turf Strategist',
        readTime: '12 Min'
    },
    {
        id: '4',
        title: 'The Alkaline Battle: Bypassing the Boise Soil Lock-out',
        slug: 'soil-chemistry',
        category: 'Soil Chemistry',
        excerpt: 'Boise soil is a chemical bank vault. Discover why 60% of standard fertilizer vanishes into thin air and how "Chelated" science unlocks hidden nutrients.',
        author: 'Ethan Petersen, Chief Turf Strategist',
        readTime: '11 Min'
    },
    {
        id: '5',
        title: 'Beyond N-P-K: The Hidden "Growth Tax" of Standard Fertilizers',
        slug: 'nutrient-management',
        category: 'Nutrient Science',
        excerpt: 'Stop paying the "Growth Tax." Discover why cheap urea is the most expensive habit in Boise and how our microbial "Safe Crackers" unlock your soil’s hidden gold.',
        author: 'Ethan Petersen, Chief Turf Strategist',
        readTime: '12 Min'
    },
    {
        id: '6',
        title: 'The Precision Clockwork: Boise’s Truth-Based Turf Calendar',
        slug: 'seasonal-calendar',
        category: 'Agronomy',
        excerpt: 'The grass doesn’t have a calendar; it has a thermometer. Discover why the "55°F Threshold" and seasonal height shifts are the difference between a $450 season and a $3,200 renovation tax.',
        author: 'Ethan Petersen, Chief Turf Strategist',
        readTime: '14 Min'
    },
    {
        id: '7',
        title: 'The Fall-Only Mandate',
        slug: 'fall-only-mandate',
        category: 'Cultural Controls',
        excerpt: 'Stop paying to break your own lawn. Discover why spring aeration destroys your weed barrier and why the "9.2% Disruption" costs Boise homeowners $648 every year.',
        author: 'Ethan Petersen, Chief Turf Strategist',
        readTime: '13 Min'
    },
    {
        id: '8',
        title: 'The Bluegrass vs. Fescue Ultimatum: Surviving the Boise Micro-Climate',
        slug: 'bluegrass-vs-fescue',
        category: 'Turf Genetics',
        excerpt: 'Boise’s 100°F summers and alkaline clay soils demand a specific biological response. Discover why the deep roots of modern Turf-Type Tall Fescue (TTTF) provide a massive evolutionary advantage.',
        author: 'Ethan Petersen, Chief Turf Strategist',
        readTime: '15 Min'
    }
];

export const getArticleBySlug = (slug: string): Article | undefined => {
    return vaultArticles.find(article => article.slug === slug);
};
