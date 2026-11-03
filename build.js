const fs = require('fs');
const path = require('path');

const rootDir = __dirname;
const distDir = path.join(rootDir, 'dist');

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

console.log('Building static site for Vercel deployment...');

// 1. Clean and recreate dist directory
if (fs.existsSync(distDir)) {
  fs.rmSync(distDir, { recursive: true, force: true });
}
fs.mkdirSync(distDir, { recursive: true });

// 2. Copy pika.art directory contents to dist
const pikaArtDir = path.join(rootDir, 'pika.art');
if (fs.existsSync(pikaArtDir)) {
  console.log('Copying pika.art static assets...');
  copyDirSync(pikaArtDir, distDir);
}

// 3. Copy workspace.html
const workspaceHtml = path.join(rootDir, 'workspace.html');
if (fs.existsSync(workspaceHtml)) {
  fs.copyFileSync(workspaceHtml, path.join(distDir, 'workspace.html'));
  // Also create /workspace/index.html for direct routing
  const workspaceDir = path.join(distDir, 'workspace');
  fs.mkdirSync(workspaceDir, { recursive: true });
  fs.copyFileSync(workspaceHtml, path.join(workspaceDir, 'index.html'));
}

// 4. Copy hero-video.mp4 if present
const heroVideo = path.join(rootDir, 'hero-video.mp4');
if (fs.existsSync(heroVideo)) {
  fs.copyFileSync(heroVideo, path.join(distDir, 'hero-video.mp4'));
}

// 5. Copy cms assets from cdn.pika.art
const cmsSrc = path.join(rootDir, 'cdn.pika.art', 'v2', 'creation', 'cms');
const cmsDest = path.join(distDir, 'v2', 'creation', 'cms');
if (fs.existsSync(cmsSrc)) {
  console.log('Copying CMS showcase media...');
  copyDirSync(cmsSrc, cmsDest);
}

// 6. Copy profile assets
const profilesSrc = path.join(rootDir, 'cdn.pika.art', 'assets');
const profilesDest = path.join(distDir, 'assets');
if (fs.existsSync(profilesSrc)) {
  copyDirSync(profilesSrc, profilesDest);
}

// 7. Generate native .vercel/output for Build Output API v3
const vercelOutputDir = path.join(rootDir, '.vercel', 'output');
const vercelStaticDir = path.join(vercelOutputDir, 'static');
if (fs.existsSync(vercelOutputDir)) {
  fs.rmSync(vercelOutputDir, { recursive: true, force: true });
}
fs.mkdirSync(vercelStaticDir, { recursive: true });
copyDirSync(distDir, vercelStaticDir);
fs.writeFileSync(path.join(vercelOutputDir, 'config.json'), JSON.stringify({
  version: 3,
  routes: [
    { handle: 'filesystem' }
  ]
}, null, 2));

console.log('Build completed successfully with Build Output API v3!');
