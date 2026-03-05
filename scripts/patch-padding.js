const fs = require('fs');
const path = require('path');

const srcAppDir = path.join(__dirname, '..', 'src', 'app');

function walkDir(dir, callback) {
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        if (fs.statSync(dirPath).isDirectory()) {
            walkDir(dirPath, callback);
        } else {
            callback(dirPath);
        }
    });
}

walkDir(srcAppDir, (filePath) => {
    if (filePath.endsWith('page.tsx')) {
        let content = fs.readFileSync(filePath, 'utf-8');
        let newContent = content;

        // Find the FIRST <section> tag
        const sectionMatch = newContent.match(/<section\s+[^>]*className=["']([^"']+)["'][^>]*>/);
        if (sectionMatch) {
            let className = sectionMatch[1];
            let newClassName = className;

            // Replace pt-X with pt-2
            if (newClassName.includes('pt-')) {
                newClassName = newClassName.replace(/pt-\d+/, 'pt-2');
            } else {
                newClassName += ' pt-2';
            }

            // If it has py-16, change to pb-16 and ensure pt-2 is present
            if (newClassName.includes('py-16')) {
                newClassName = newClassName.replace('py-16', 'pb-16 pt-2');
            } else if (newClassName.includes('py-')) {
                newClassName = newClassName.replace(/py-(\d+)/, 'pb-$1 pt-2');
            }

            // Deduplicate classes just in case
            const classes = Array.from(new Set(newClassName.split(/\s+/))).join(' ');

            newContent = newContent.replace(className, classes);

            if (newContent !== content) {
                fs.writeFileSync(filePath, newContent, 'utf-8');
                console.log('Updated padding in', filePath);
            }
        }
    }
});
