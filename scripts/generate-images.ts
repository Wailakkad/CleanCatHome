import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { articleImagePrompts } from '../src/data/imagePrompts';

const publicDir = path.resolve('public');
const pinsDir = path.join(publicDir, 'images', 'pins');

if (!fs.existsSync(pinsDir)) {
  fs.mkdirSync(pinsDir, { recursive: true });
}

// Color palettes for different roles to give visual distinction
const roleThemes: Record<string, { bg: string; border: string; accent: string; badge: string }> = {
  cover: { bg: '#F8F5F0', border: '#E2D9CC', accent: '#8F6D48', badge: 'COVER EDITORIAL' },
  problem: { bg: '#FAF2EE', border: '#E8D4C8', accent: '#B9593E', badge: 'PROBLEM ANALYSIS' },
  'step-1': { bg: '#F2F6F3', border: '#D0DDD2', accent: '#46624C', badge: 'STEP 1 • SOLUTION' },
  'step-2': { bg: '#F6F4F0', border: '#DDD6C9', accent: '#7E6850', badge: 'STEP 2 • METHOD' },
  'step-3': { bg: '#F5F5F3', border: '#D8D8D3', accent: '#535850', badge: 'STEP 3 • PRACTICAL DETAIL' },
  prevention: { bg: '#F1F5F4', border: '#CCE0DC', accent: '#3C675F', badge: 'PREVENTION & ROUTINE' },
  'final-result': { bg: '#FAF8F4', border: '#E5DCB8', accent: '#8E6E32', badge: 'FINAL RESULT & TAKEAWAY' },
};

function generateWebP(
  filepath: string,
  width: number,
  height: number,
  themeKey: string,
  badgeText: string,
  titleText: string,
  subText: string
) {
  const dir = path.dirname(filepath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  const theme = roleThemes[themeKey] || roleThemes.cover;
  const safeBadge = badgeText.replace(/["\\]/g, '');
  const safeTitle = titleText.replace(/["\\]/g, '').substring(0, 48);
  const safeSub = subText.replace(/["\\]/g, '').substring(0, 75);

  // Use ImageMagick convert to build a crisp editorial graphic
  const cmd = [
    'convert',
    `-size ${width}x${height}`,
    `xc:"${theme.bg}"`,
    `-stroke "${theme.border}"`,
    `-strokewidth 2`,
    `-fill none`,
    `-draw "roundrectangle 24,24 ${width - 24},${height - 24} 16,16"`,
    `-stroke none`,
    `-fill "${theme.accent}"`,
    `-pointsize ${Math.round(height * 0.028)}`,
    `-gravity northwest`,
    `-annotate +60+60 "CLEAN CAT HOME • EDITORIAL"`,
    `-fill "#5C5852"`,
    `-pointsize ${Math.round(height * 0.024)}`,
    `-gravity northeast`,
    `-annotate +60+60 "${safeBadge}"`,
    `-fill "#252422"`,
    `-pointsize ${Math.round(height * 0.052)}`,
    `-gravity center`,
    `-annotate +0-20 "${safeTitle}"`,
    `-fill "#706B63"`,
    `-pointsize ${Math.round(height * 0.028)}`,
    `-gravity center`,
    `-annotate +0+50 "${safeSub}"`,
    `-fill "#9C9488"`,
    `-pointsize ${Math.round(height * 0.022)}`,
    `-gravity south`,
    `-annotate +0+50 "${width} × ${height} • Scandinavian Living Series"`,
    `"${filepath}"`,
  ].join(' ');

  try {
    execSync(cmd, { stdio: 'pipe' });
  } catch (err) {
    console.error(`Error generating ${filepath}:`, err);
  }
}

console.log('Generating WebP images for all articles...');

for (const [slug, data] of Object.entries(articleImagePrompts)) {
  const articleFolder = path.join(publicDir, data.folder);
  if (!fs.existsSync(articleFolder)) {
    fs.mkdirSync(articleFolder, { recursive: true });
  }

  // 1. Cover
  const coverPath = path.join(articleFolder, data.cover.filename);
  generateWebP(
    coverPath,
    data.cover.width,
    data.cover.height,
    'cover',
    'ARTICLE COVER',
    data.articleTitle,
    data.cover.alt
  );

  // 2. Supporting (6 images)
  for (const sup of data.supporting) {
    const supPath = path.join(articleFolder, sup.filename);
    generateWebP(
      supPath,
      sup.width,
      sup.height,
      sup.role,
      sup.role.toUpperCase(),
      sup.alt,
      sup.caption || 'Practical home solution'
    );
  }

  // 3. Pinterest Pin
  if (data.pinterestImage) {
    const pinPath = path.join(pinsDir, `${slug}-pin-01.webp`);
    generateWebP(
      pinPath,
      data.pinterestImage.width,
      data.pinterestImage.height,
      'cover',
      'PINTEREST EDITORIAL PIN',
      data.articleTitle,
      'Clean Cat Home • Home Care Guide'
    );
  }

  console.log(`Generated all 7 images + pin for: ${slug}`);
}

console.log('Successfully generated all WebP images!');
