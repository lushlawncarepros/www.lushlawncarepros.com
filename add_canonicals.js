const fs = require('fs');
const path = require('path');

function processDir(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
            processDir(fullPath);
        } else if (file === 'page.tsx') {
            let content = fs.readFileSync(fullPath, 'utf8');
            if (content.includes('export const metadata')) {
                if (!content.includes('alternates:')) {
                    let route = fullPath.split('src\\app')[1].replace('\\page.tsx', '').replace(/\\/g, '/');
                    if (route === '') route = '/';

                    const metaRegex = /(export const metadata\s*(?::\s*Metadata)?\s*=\s*{[\s\S]*?)(};)/;
                    const match = content.match(metaRegex);
                    if (match) {
                        let inner = match[1];
                        let cleanInner = inner.trimEnd();
                        if (cleanInner.endsWith(',')) {
                            cleanInner = cleanInner;
                        } else {
                            cleanInner += ',';
                        }
                        const newMeta = `${cleanInner}\n  alternates: { canonical: '${route}' }\n};`;
                        content = content.replace(metaRegex, newMeta);
                        fs.writeFileSync(fullPath, content);
                        console.log(`Updated ${route}`);
                    }
                }
            }
        }
    }
}

processDir(path.join(__dirname, 'src', 'app'));
