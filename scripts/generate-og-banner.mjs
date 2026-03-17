import sharp from 'sharp';
import { readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');

const width = 1200;
const height = 630;

const backgroundSvg = `
<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1800E7"/>
      <stop offset="60%" stop-color="#180092"/>
      <stop offset="100%" stop-color="#0a0050"/>
    </linearGradient>
  </defs>
  <rect width="${width}" height="${height}" fill="url(#bg)"/>

  <!-- Decorative circles -->
  <circle cx="1180" cy="-60" r="320" fill="rgba(255,122,0,0.08)"/>
  <circle cx="1280" cy="700" r="260" fill="rgba(255,255,255,0.03)"/>

  <!-- Orange accent bar at bottom -->
  <rect x="0" y="${height - 6}" width="${width}" height="6" fill="#FF7A00"/>

  <!-- Left text block -->
  <text x="80" y="200" font-family="Arial Black, Arial, sans-serif" font-weight="900" font-size="56" fill="white">Unifi Authorized</text>
  <text x="80" y="272" font-family="Arial Black, Arial, sans-serif" font-weight="900" font-size="56" fill="white">Reseller Malaysia</text>

  <text x="80" y="340" font-family="Arial, sans-serif" font-weight="300" font-size="26" fill="rgba(255,255,255,0.72)">Pakej broadband rumah &amp; perniagaan</text>
  <text x="80" y="380" font-family="Arial, sans-serif" font-weight="300" font-size="26" fill="rgba(255,255,255,0.72)">Free installation • Free Wi-Fi router</text>

  <!-- Price badge -->
  <rect x="80" y="418" width="268" height="52" rx="26" fill="rgba(255,122,0,0.18)" stroke="#FF7A00" stroke-width="1.5"/>
  <text x="214" y="450" font-family="Arial, sans-serif" font-weight="700" font-size="20" fill="#FF7A00" text-anchor="middle">From RM89/mth</text>

  <!-- Domain tag -->
  <text x="80" y="560" font-family="Arial, sans-serif" font-weight="400" font-size="18" fill="rgba(255,255,255,0.45)">unifi.co.com</text>
</svg>
`;

const iconResized = await sharp(join(root, 'public', 'unifi-icon.png'))
  .resize(280, 320, { fit: 'inside', withoutEnlargement: false })
  .toBuffer();

const iconMeta = await sharp(iconResized).metadata();
const iconW = iconMeta.width;
const iconH = iconMeta.height;

await sharp(Buffer.from(backgroundSvg))
  .composite([
    {
      input: iconResized,
      top: Math.round((height - iconH) / 2),
      left: width - iconW - 100,
    },
  ])
  .png()
  .toFile(join(root, 'public', 'og-banner.png'));

console.log('Generated public/og-banner.png (1200x630)');
