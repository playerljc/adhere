import { useContext, useEffect, useMemo, useState } from 'react';

import { DesignContext } from '../Design/Context';
import type { PhoneAreaCodeItem } from '../Dict/PhoneAreaCode';
import type { AreaCodePhoneDataSourceManagerFormItemValue } from '../components/AreaCodePhoneDataSourceManagerFormItem';
import type { FieldProps } from '../types';
import { fetchDataSourceItemConfigAsPhoneAreaCodeItems } from './usePhoneAreaCodeOptions';

export type UseDesignPhoneAreaCodeOptionsResult = {
  source: AreaCodePhoneDataSourceManagerFormItemValue | undefined;
  options: PhoneAreaCodeItem[];
  loading: boolean;
};

function parseSource(fieldProps: FieldProps, fieldKey: string) {
  const raw = fieldProps?.[fieldKey];
  if (!raw || typeof raw !== 'object') return undefined;
  return raw as AreaCodePhoneDataSourceManagerFormItemValue;
}

function safeParseJsonArray(json: string | undefined): any[] {
  if (!json?.trim()) return [];
  try {
    const v = JSON.parse(json);
    return Array.isArray(v) ? v : [];
  } catch {
    return [];
  }
}

function normalizeDialCode(raw: string): string {
  return `+${String(raw ?? '').replace(/-/g, '')}`;
}

function resolveRuleByIso2(iso2: string | undefined): PhoneAreaCodeItem['rule'] {
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

function sortByLabel(a: PhoneAreaCodeItem, b: PhoneAreaCodeItem): number {
  return String(a.label).localeCompare(String(b.label));
}

/**
 * 同一区号（如 +1）会对应多个国家/地区；Select 的 value 必须唯一，否则会出现重复与选中异常。
 * 合并为一条，保证 value 唯一；search 汇总全部国家名以便检索。
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
    group.sort(sortByLabel);

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

  merged.sort(sortByLabel);
  return merged;
}

function isRawGoogleAreaCodeRow(row: any): boolean {
  return !!row && typeof row === 'object' && Array.isArray(row.countryCodes) && typeof row.country === 'string';
}

function rawGoogleRowsToOptions(rows: any[]): PhoneAreaCodeItem[] {
  const items: PhoneAreaCodeItem[] = [];
  rows.forEach((r) => {
    if (!isRawGoogleAreaCodeRow(r)) return;
    const iso2 = r.isoCode2;
    const rule = resolveRuleByIso2(iso2);
    (r.countryCodes as any[]).forEach((code) => {
      const dial = normalizeDialCode(code);
      const label = `${r.country} (${dial})`;
      items.push({
        label,
        value: dial,
        iso2,
        rule,
        search: `${r.country} ${iso2} ${dial}`,
      });
    });
  });
  return dedupeByDial(items);
}

function mapRowToItem(row: any): PhoneAreaCodeItem | null {
  const value = row?.value;
  if (value === undefined || value === null || String(value).trim() === '') return null;
  return {
    label: row?.label ?? String(value),
    value: String(value),
    iso2: row?.iso2,
    rule: row?.rule,
    search: row?.search,
  } as PhoneAreaCodeItem;
}

/**
 * 设计器内：读取 area code 数据源配置，得到 PhoneAreaCodeItem[]（静态 JSON / 动态 dataSourceConfig）
 */
export function useDesignPhoneAreaCodeOptions(
  fieldProps: FieldProps,
  fieldKey: string = 'areaCodeOptionsSource',
): UseDesignPhoneAreaCodeOptionsResult {
  const { getDesignValue } = useContext(DesignContext);

  const source = useMemo(() => parseSource(fieldProps, fieldKey), [fieldProps, fieldKey]);

  const staticOptions = useMemo(() => {
    if (source?.type !== 'static') return [];
    const rows = safeParseJsonArray(source.areaCodeJson);
    if (rows.length > 0 && isRawGoogleAreaCodeRow(rows[0])) {
      return rawGoogleRowsToOptions(rows);
    }
    return rows.map(mapRowToItem).filter(Boolean) as PhoneAreaCodeItem[];
  }, [source]);

  const [dynamicOptions, setDynamicOptions] = useState<PhoneAreaCodeItem[]>([]);
  const [dynamicLoading, setDynamicLoading] = useState(false);

  useEffect(() => {
    if (source?.type !== 'dynamic' || !source.dynamicConfigId) {
      setDynamicOptions([]);
      setDynamicLoading(false);
      return;
    }

    const root = getDesignValue();
    const cfg = root?.dataSourceConfig?.find((c) => c.id === source.dynamicConfigId);
    if (!cfg?.request?.url?.trim()) {
      setDynamicOptions([]);
      setDynamicLoading(false);
      return;
    }

    let cancelled = false;
    setDynamicLoading(true);

    (async () => {
      try {
        const items = await fetchDataSourceItemConfigAsPhoneAreaCodeItems(cfg);
        if (!cancelled) setDynamicOptions(items);
      } catch {
        if (!cancelled) setDynamicOptions([]);
      } finally {
        if (!cancelled) setDynamicLoading(false);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [source, getDesignValue]);

  const options = source?.type === 'dynamic' ? dynamicOptions : staticOptions;
  const loading = source?.type === 'dynamic' ? dynamicLoading : false;

  return { source, options, loading };
}

