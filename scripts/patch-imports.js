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

walkDir(srcAppDir, (filePath) => {
    if (filePath.endsWith('page.tsx')) {
        let content = fs.readFileSync(filePath, 'utf-8');

        // skip the main landing page
        if (filePath.endsWith('src\\app\\page.tsx') || filePath.endsWith('src/app/page.tsx')) return;

        let needsSave = false;

        let headerImports = "";

        if (!content.includes("from 'next/image'") && !content.includes('from "next/image"')) {
            headerImports += "import Image from 'next/image';\n";
            needsSave = true;
        }

        if (!content.includes("from 'next/link'") && !content.includes('from "next/link"')) {
            headerImports += "import Link from 'next/link';\n";
            needsSave = true;
        }

        if (needsSave) {
            content = headerImports + content;
            fs.writeFileSync(filePath, content, 'utf-8');
            console.log('Fixed imports for', filePath);
        }
    }
});
