/**
 * 生成 src/tag/docs/assets 下各 type 截图。
 * 前置：在 packages/adhere-ui-anthoc 目录启动 e2e（npm run e2e），并确保 index 支持 ?tagGallery=1
 *
 * 用法：node src/tag/scripts/capture-screenshots.mjs [port]
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const assetsDir = path.join(__dirname, '../docs/assets');
const port = Number(process.argv[2]) || 8080;
const baseUrl = `http://127.0.0.1:${port}/?tagGallery=1`;

const SEMANTIC_TYPES = [
  'success',
  'info',
  'warning',
  'error',
  'primary',
  'default',
  'processing',
  'danger',
  'pink',
  'red',
  'orange',
  'yellow',
  'green',
  'cyan',
  'blue',
  'purple',
  'geekblue',
  'magenta',
  'volcano',
  'gold',
  'lime',
  'secondary',
  'neutral',
  'disabled',
];

const EXTRA = ['custom-colors', 'radius-padding', 'antd-color', 'plain'];

async function loadPuppeteer() {
  try {
    return await import('puppeteer');
  } catch {
    console.error('请先安装 puppeteer: npx --yes puppeteer@23 node src/tag/scripts/capture-screenshots.mjs');
    throw new Error('puppeteer not found');
  }
}

async function waitForServer(page, url, attempts = 60) {
  for (let i = 0; i < attempts; i += 1) {
    try {
      await page.goto(url, { waitUntil: 'networkidle0', timeout: 5000 });
      await page.waitForSelector('[data-tag-type]', { timeout: 5000 });
      return;
    } catch {
      await new Promise((r) => setTimeout(r, 2000));
    }
  }
  throw new Error(`无法在 ${url} 加载 TagTypesGallery，请先运行: cd packages/adhere-ui-anthoc && npm run e2e`);
}

async function main() {
  fs.mkdirSync(assetsDir, { recursive: true });

  const puppeteer = await loadPuppeteer();
  const browser = await puppeteer.default.launch({ headless: true });
  const page = await browser.newPage();
  await page.setViewport({ width: 1200, height: 900 });

  await waitForServer(page, baseUrl);

  for (const type of [...SEMANTIC_TYPES, ...EXTRA]) {
    const host = await page.$(`[data-tag-type="${type}"]`);
    if (!host) {
      console.warn(`skip: ${type}`);
      continue;
    }
    const tag =
      type === 'plain' || type === 'antd-color' || type.startsWith('custom') || type === 'radius-padding'
        ? await host.$('.ant-tag, span.ant-tag')
        : await host.$('.ant-tag');
    const target = tag || host;
    const out = path.join(assetsDir, `${type}.png`);
    await target.screenshot({ path: out, type: 'png' });
    console.log(`wrote ${out}`);
  }

  await page.screenshot({
    path: path.join(assetsDir, 'overview.png'),
    fullPage: true,
    type: 'png',
  });
  console.log('wrote overview.png');

  await browser.close();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
