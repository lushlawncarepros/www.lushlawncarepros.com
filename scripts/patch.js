const fs = require('fs');
const path = require('path');

const srcAppDir = path.join(__dirname, '..', 'src', 'app');

function walkDir(dir, callback) {
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        if (fs.statSync(dirPath).isDirectory()) {
            walkDir(dirPath, callback);
        } else {
            callback(path.join(dir, f));
        }
    });
}

const logoSnippet = `
                <div className="flex justify-center w-full pt-8 pb-4">
                    <Link href="/" className="hover:scale-105 transition-transform duration-300 relative z-50">
                        <Image src="/lush-logo.png" alt="Lush Lawn Pros Logo" width={250} height={75} className="object-contain" priority />
                    </Link>
                </div>`;

walkDir(srcAppDir, (filePath) => {
    if (filePath.endsWith('page.tsx')) {
        let content = fs.readFileSync(filePath, 'utf-8');

        // skip the main landing page because it already has it specifically configured
        if (filePath.endsWith('src\\app\\page.tsx') || filePath.endsWith('src/app/page.tsx')) return;

        let needsSave = false;

        // Add imports if they don't exist
        if (!content.includes("from 'next/image'") && !content.includes('from "next/image"')) {
            content = content.replace(/(import.*?\n)/, "$1import Image from 'next/image';\n");
            needsSave = true;
        }

        if (!content.includes("from 'next/link'") && !content.includes('from "next/link"')) {
            content = content.replace(/(import.*?\n)/, "$1import Link from 'next/link';\n");
            needsSave = true;
        }

        // Add the logo block right after Navigation if it has one and doesn't already have the logo snippet
        if (content.includes('<Navigation />') && !content.includes('/lush-logo.png')) {
            content = content.replace('<Navigation />', `<Navigation />${logoSnippet}`);
            needsSave = true;
        }

        if (needsSave) {
            fs.writeFileSync(filePath, content, 'utf-8');
            console.log('Patched', filePath);
        }
    }
});
