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

        const pattern = /[ \t]*<div className="flex justify-center w-full pt-8 pb-4">[\s\S]*?<Image src="\/lush-logo\.png"[\s\S]*?<\/Link>\s*<\/div>\n?/;

        let newContent = content.replace(pattern, '');
        if (newContent !== content) {
            fs.writeFileSync(filePath, newContent, 'utf-8');
            console.log('Stripped logo from', filePath);
        }
    }
});
