import { chromium } from 'playwright';

const BASE_URL = 'http://localhost:5173';
const VIEWPORT = { width: 1280, height: 800 }; // Desktop size for consistent screenshots

const screenshots = [
  // Programme Discovery
  { url: '/discover', name: 'discover-search', dir: '03-discovery' },
  { url: '/browse', name: 'browse-programs', dir: '03-discovery' },
  { url: '/smart-search', name: 'smart-search', dir: '03-discovery' },
  { url: '/programs/PRG-002', name: 'program-details', dir: '03-discovery' }, // Bachelor of Software Engineering
  { url: '/universities/utoronto', name: 'university-details', dir: '03-discovery' },
  { url: '/categories', name: 'program-categories', dir: '03-discovery' },
  { url: '/deadlines', name: 'upcoming-deadlines', dir: '03-discovery' },
];

async function takeScreenshots() {
  console.log('Starting screenshot automation...');
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  await page.setViewportSize(VIEWPORT);

  for (const shot of screenshots) {
    const fullUrl = `${BASE_URL}${shot.url}`;
    const outputPath = `screenshots/${shot.dir}/${shot.name}.png`;
    console.log(`Screenshotting ${fullUrl} -> ${outputPath}`);
    try {
      await page.goto(fullUrl, { waitUntil: 'networkidle', timeout: 10000 });
      await page.waitForTimeout(500); // Wait for any animations/loads
      await page.screenshot({ path: outputPath, fullPage: true });
      console.log(`  ✓ Saved ${outputPath}`);
    } catch (err) {
      console.error(`  ✗ Failed for ${fullUrl}: ${err.message}`);
    }
  }

  await browser.close();
  console.log('Screenshot automation complete!');
}

takeScreenshots().catch(console.error);
