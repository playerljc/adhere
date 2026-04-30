// 国家/地区电话区号（Google 注册页风格：国家/地区名 + 区号，可搜索）
import type { ICountryCodeItem } from './_countryCallingCodeRaw';
import { codes } from './_countryCallingCodeRaw';

export type PhoneAreaCodeRule = 'digits' | 'digits_and_space_dash';

export type PhoneAreaCodeItem = {
  /** 下拉展示：Country (+Code) */
  label: string;
  /** 选中回填：+Code */
  value: string;
  /** 搜索关键字 */
  search?: string;
  /** ISO2 */
  iso2?: string;
  /** 输入规则（用于 PhoneWithAreaCode 字段根据区号决定过滤策略） */
  rule?: PhoneAreaCodeRule;
};

function normalizeDialCode(raw: string): string {
  return `+${String(raw ?? '').replace(/-/g, '')}`;
}

function resolveRuleByIso2(iso2: string | undefined): PhoneAreaCodeRule {
  // 更偏向“纯数字”的地区
  if (!iso2) return 'digits_and_space_dash';
  if (
    [
      'CN',
      'HK',
      'MO',
      'TW',
      'JP',
      'KR',
      'SG',
      'MY',
      'TH',
      'VN',
      'PH',
      'ID',
      'IN',
      'AE',
      'SA',
    ].includes(iso2)
  )
    return 'digits';
  return 'digits_and_space_dash';
}

const priorityIso2 = new Map<string, number>([
  ['CN', 0],
  ['HK', 1],
  ['MO', 2],
  ['TW', 3],
  ['US', 4],
  ['CA', 5],
  ['GB', 6],
  ['AU', 7],
  ['NZ', 8],
  ['JP', 9],
  ['KR', 10],
  ['SG', 11],
  ['MY', 12],
  ['TH', 13],
  ['VN', 14],
  ['PH', 15],
  ['ID', 16],
  ['IN', 17],
  ['DE', 18],
  ['FR', 19],
]);

function sortByPriorityThenLabel(a: PhoneAreaCodeItem, b: PhoneAreaCodeItem): number {
  const pa = priorityIso2.has(a.iso2 ?? '') ? (priorityIso2.get(a.iso2 ?? '') as number) : 9999;
  const pb = priorityIso2.has(b.iso2 ?? '') ? (priorityIso2.get(b.iso2 ?? '') as number) : 9999;
  if (pa !== pb) return pa - pb;
  return String(a.label).localeCompare(String(b.label));
}

/**
 * 同一区号（如 +1）会对应多个国家/地区；Select 的 value 必须唯一，否则会出现重复与选中异常。
 * 合并为一条：展示前几名国家名 + 其余数量，搜索词保留全部以便检索。
 */
function dedupeByDial(items: PhoneAreaCodeItem[]): PhoneAreaCodeItem[] {
  const groups = new Map<string, PhoneAreaCodeItem[]>();
  items.forEach((it) => {
    const dial = it.value;
    const arr = groups.get(dial) ?? [];
    arr.push(it);
    groups.set(dial, arr);
  });

  const merged: PhoneAreaCodeItem[] = [];
  groups.forEach((group, dial) => {
    group.sort(sortByPriorityThenLabel);

    const countryNames = group.map((g) => {
      const m = String(g.label).match(/^(.*)\s\((\+\d+)\)$/);
      return m ? m[1].trim() : String(g.label).replace(/\s*\(\+\d+\)\s*$/, '').trim();
    });

    const head = countryNames.slice(0, 3).join(' / ');
    const rest = countryNames.length > 3 ? ` …` : '';
    const label = `${head}${rest} (${dial})`;

    const search = group.map((g) => g.search ?? `${g.label} ${g.iso2 ?? ''} ${g.value}`).join(' ');
    const iso2 = group[0]?.iso2;
    const rule = group.some((g) => g.rule === 'digits') ? 'digits' : 'digits_and_space_dash';

    merged.push({
      label,
      value: dial,
      iso2,
      rule,
      search: `${search} ${countryNames.join(' ')}`,
    });
  });

  merged.sort((a, b) => {
    const pa = priorityIso2.has(a.iso2 ?? '') ? (priorityIso2.get(a.iso2 ?? '') as number) : 9999;
    const pb = priorityIso2.has(b.iso2 ?? '') ? (priorityIso2.get(b.iso2 ?? '') as number) : 9999;
    if (pa !== pb) return pa - pb;
    return String(a.label).localeCompare(String(b.label));
  });

  return merged;
}

function mapToItems(raw: ICountryCodeItem[]): PhoneAreaCodeItem[] {
  const items: PhoneAreaCodeItem[] = [];

  raw.forEach((item) => {
    const iso2 = item.isoCode2;
    const rule = resolveRuleByIso2(iso2);

    item.countryCodes.forEach((code) => {
      const dial = normalizeDialCode(code);
      const label = `${item.country} (${dial})`;
      items.push({
        label,
        value: dial,
        iso2,
        rule,
        search: `${item.country} ${iso2} ${dial}`,
      });
    });
  });

  items.sort(sortByPriorityThenLabel);
  return dedupeByDial(items);
}

export const PhoneAreaCode = {
  handler: (): PhoneAreaCodeItem[] => {
    return mapToItems(codes);
  },
};

