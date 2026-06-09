/**
 * 补全 UserRegisterInfo.json 中缺失的 en_US / pt_PT / ar_EG 翻译
 *
 * 用法：node packages/adhere-ui-form-design/json/scripts/completeUserRegisterInfoI18n.mjs
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

import { USER_REGISTER_INFO_TRANSLATIONS } from '../i18n/userRegisterInfoTranslations.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const jsonPath = path.join(__dirname, '../UserRegisterInfo.json');

const LOCALE_KEYS = ['en_US', 'pt_PT', 'ar_EG'];

function isI18nValue(obj) {
  return obj && typeof obj === 'object' && 'selectValue' in obj && 'zh_CN' in obj;
}

function walk(node) {
  if (Array.isArray(node)) {
    node.forEach(walk);
    return;
  }
  if (!node || typeof node !== 'object') return;

  if (isI18nValue(node)) {
    const zh = node.zh_CN;
    if (typeof zh === 'string') {
      const trans = USER_REGISTER_INFO_TRANSLATIONS[zh];
      for (const loc of LOCALE_KEYS) {
        if (node[loc] == null && trans?.[loc]) {
          node[loc] = trans[loc];
        }
      }
    }
    return;
  }

  Object.values(node).forEach(walk);
}

const data = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
walk(data);
fs.writeFileSync(jsonPath, `${JSON.stringify(data, null, 2)}\n`);
console.log(`Updated i18n in ${jsonPath}`);
