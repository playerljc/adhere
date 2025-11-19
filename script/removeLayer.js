const fs = require('fs');
const path = require('path');

const packagesDir = path.resolve(__dirname, '..', 'packages');

const prettier = require('prettier');
const prettierConfigPath = path.resolve(__dirname, '..', '.prettierrc.js');
let prettierConfig = {};
try {
  prettierConfig = require(prettierConfigPath);
} catch {}

function isDir(p) {
  try {
    return fs.statSync(p).isDirectory();
  } catch {
    return false;
  }
}

function walk(dir, out) {
  let entries;
  try {
    entries = fs.readdirSync(dir, { withFileTypes: true });
  } catch {
    return;
  }
  for (const ent of entries) {
    const full = path.join(dir, ent.name);
    if (ent.isDirectory()) {
      walk(full, out);
    } else if (ent.isFile() && full.endsWith('.less')) {
      out.push(full);
    }
  }
}

function processFile(file) {
  let content;
  try {
    content = fs.readFileSync(file, 'utf8');
  } catch {
    return { file, changed: false, skipped: true };
  }

  const eol = content.includes('\r\n') ? '\r\n' : '\n';
  const hasBOM = content.charCodeAt(0) === 0xfeff;

  let lines = content.split(/\r?\n/);
  if (hasBOM && lines.length) {
    lines[0] = lines[0].replace(/^\uFEFF/, '');
  }

  let importEnd = 0;
  while (importEnd < lines.length && /^\s*@import\s+.*;\s*$/.test(lines[importEnd])) {
    importEnd += 1;
  }

  const prefix = lines.slice(0, importEnd).join(eol);
  const body = lines.slice(importEnd).join(eol);

  if (!/^\s*@layer\s+adhere\s*\{/.test(body)) {
    return { file, changed: false, skipped: true };
  }

  const m = body.match(/^\s*@layer\s+adhere\s*\{\s*([\s\S]*)\s*\}\s*$/);
  if (!m) {
    return { file, changed: false, skipped: true };
  }

  const inner = m[1];
  const start = (hasBOM ? '\uFEFF' : '') + (prefix ? prefix + eol : '');
  const newContent = start + inner;

  try {
    const input = hasBOM ? newContent.replace(/^\uFEFF/, '') : newContent;
    const formatted = prettier.format(input, { ...prettierConfig, filepath: file });
    fs.writeFileSync(file, (hasBOM ? '\uFEFF' : '') + formatted, 'utf8');
    return { file, changed: true, skipped: false };
  } catch {
    return { file, changed: false, skipped: true };
  }
}

function main() {
  if (!isDir(packagesDir)) {
    console.error('packages dir not found:', packagesDir);
    process.exit(1);
  }
  const pkgEntries = fs.readdirSync(packagesDir, { withFileTypes: true });
  const files = [];
  const targets = ['src', 'es', 'lib'];
  for (const ent of pkgEntries) {
    if (!ent.isDirectory()) continue;
    for (const t of targets) {
      const dir = path.join(packagesDir, ent.name, t);
      if (isDir(dir)) walk(dir, files);
    }
  }
  let removed = 0;
  let skipped = 0;
  for (const f of files) {
    const res = processFile(f);
    if (res.changed) removed += 1;
    else skipped += 1;
  }
  console.log('LESS files found:', files.length);
  console.log('Removed @layer adhere:', removed);
  console.log('Skipped:', skipped);
}

if (require.main === module) {
  main();
}