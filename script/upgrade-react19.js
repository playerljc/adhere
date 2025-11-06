/*
 * Upgrade all package peerDependencies to support React 19
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const PACKAGES_DIR = path.join(ROOT, 'packages');

/**
 * Recursively walk a directory and return paths to files named package.json
 */
function findPackageJsonFiles(startDir) {
  const results = [];
  const stack = [startDir];
  while (stack.length) {
    const dir = stack.pop();
    if (!fs.existsSync(dir)) continue;
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        stack.push(full);
      } else if (entry.isFile() && entry.name === 'package.json') {
        results.push(full);
      }
    }
  }
  return results;
}

function updateRange(range) {
  if (typeof range !== 'string') return range;
  // Only bump upper bound from <19.x to <20.0.0
  if (/<\s*19\.0\.0/.test(range)) {
    return range.replace(/<\s*19\.0\.0/g, '<20.0.0');
  }
  return range;
}

function run() {
  const files = findPackageJsonFiles(PACKAGES_DIR);
  let updatedCount = 0;
  files.push(path.join(ROOT, 'package.json'));

  for (const file of files) {
    const raw = fs.readFileSync(file, 'utf8');
    let json;
    try {
      json = JSON.parse(raw);
    } catch (e) {
      continue;
    }

    const peer = json.peerDependencies;
    if (!peer || typeof peer !== 'object') continue;

    const next = { ...peer };
    if (next.react) next.react = updateRange(next.react);
    if (next['react-dom']) next['react-dom'] = updateRange(next['react-dom']);

    const changed = JSON.stringify(peer) !== JSON.stringify(next);
    if (!changed) continue;

    json.peerDependencies = next;

    const endsWithNewline = raw.endsWith('\n');
    const text = JSON.stringify(json, null, 2) + (endsWithNewline ? '\n' : '');
    fs.writeFileSync(file, text, 'utf8');
    updatedCount += 1;
    console.log('Updated:', path.relative(ROOT, file));
  }

  console.log(`Done. Updated ${updatedCount} package.json files.`);
}

run();


