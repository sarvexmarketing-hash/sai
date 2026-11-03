const fs = require('fs');
const path = require('path');

const rootDir = __dirname;
const publicDir = path.join(rootDir, 'public');

function copyDirSync(src, dest) {
  if (!fs.existsSync(src)) return;
  fs.mkdirSync(dest, { recursive: true });
  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDirSync(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

console.log('Building public directory for Vercel deployment...');

// 1. Recreate clean public directory
if (fs.existsSync(publicDir)) {
  fs.rmSync(publicDir, { recursive: true, force: true });
}
fs.mkdirSync(publicDir, { recursive: true });

// 2. Copy root files to public/ (without duplicate workspace.html)
const filesToCopy = [
  'index.html',
  'hero-video.mp4',
  'icons.svg',
  'icon.svg',
  'gsap.min.js',
  'ScrollTrigger.min.js'
];
for (const file of filesToCopy) {
  const src = path.join(rootDir, file);
  const dest = path.join(publicDir, file);
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, dest);
  }
}

// 3. Copy asset directories to public/
const dirsToCopy = ['_next', 'marketing', 'v2', 'assets', 'showcase', 'pika-fonts', 'unleash'];
for (const dir of dirsToCopy) {
  const src = path.join(rootDir, dir);
  const dest = path.join(publicDir, dir);
  if (fs.existsSync(src)) {
    copyDirSync(src, dest);
  }
}

// 4. Finished
console.log('Build completed successfully into public/ directory!');
