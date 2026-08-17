const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const prodUrl = 'http://localhost:3000';
const artifactDir = 'C:\\Users\\kauan.pereira\\.gemini\\antigravity\\brain\\fde5c98b-7aac-4d43-883e-7d0ef1d1a34b';

const prodTargets = [
  { name: 'production-desktop.png', w: 1440, h: 900 },
  { name: 'production-mobile.png', w: 390, h: 844 },
  { name: 'production-full-desktop.png', w: 1440, h: 5100 },
  { name: 'production-full-mobile.png', w: 390, h: 6500 }
];

console.log('Capturing production screenshots against http://localhost:3000...');

prodTargets.forEach(target => {
  const outPath = path.resolve(__dirname, 'reports', target.name);
  console.log(`Capturing ${target.name} (${target.w}x${target.h})...`);
  execSync(`"${chromePath}" --headless --disable-gpu --screenshot="${outPath}" --window-size=${target.w},${target.h} --hide-scrollbars "${prodUrl}"`, { timeout: 35000 });
  
  const destArtifact = path.join(artifactDir, target.name);
  fs.copyFileSync(outPath, destArtifact);
  console.log(`Captured and copied ${target.name} (${fs.statSync(outPath).size} bytes)`);
});

console.log('All production screenshots captured successfully!');
