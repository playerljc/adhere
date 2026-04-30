import type { DataSourceItemConfig } from '../types';
import type { PhoneAreaCodeItem } from '../Dict/PhoneAreaCode';

/**
 * 根据数据源配置发起请求并映射为 PhoneAreaCodeItem（设计器预览用）
 *
 * 约定：
 * - labelKey / valueKey 沿用 dataSourceConfig.response 配置（缺省 label/value）
 * - 其他字段默认读取 iso2 / rule / search
 */
export async function fetchDataSourceItemConfigAsPhoneAreaCodeItems(
  cfg: DataSourceItemConfig,
): Promise<PhoneAreaCodeItem[]> {
  try {
    const { request, response } = cfg;
    const labelKey = response.labelKey ?? 'label';
    const valueKey = response.valueKey ?? 'value';

    let url = request.url;
    const upper = request.method.toUpperCase();
    const headers: Record<string, string> = {
      ...(request.headers as Record<string, string> | undefined),
    };
    const init: RequestInit = {
      method: upper,
      headers,
    };

    if (upper === 'GET' && request.data && Object.keys(request.data).length > 0) {
      const sp = new URLSearchParams();
      Object.entries(request.data).forEach(([k, v]) => {
        if (v !== undefined && v !== null) {
          sp.append(k, String(v));
        }
      });
      const q = sp.toString();
      if (q) {
        url += (url.includes('?') ? '&' : '?') + q;
      }
    } else if (upper !== 'GET' && request.data) {
      if (!headers['Content-Type'] && !headers['content-type']) {
        headers['Content-Type'] = 'application/json';
      }
      init.body = JSON.stringify(request.data);
    }

    const res = await fetch(url, init);
    const json: Record<string, any> = await res.json();

    const code = json[request.codeKey];
    if (code !== request.codeSuccess) {
      return [];
    }

    const rawList = json[request.dataKey];
    const list = Array.isArray(rawList) ? rawList : [];

    return list
      .map((row: Record<string, any>) => {
        const v = row[valueKey];
        if (v === undefined || v === null || String(v).trim() === '') return null;

        return {
          label: row[labelKey] ?? String(v),
          value: String(v),
          iso2: row.iso2,
          rule: row.rule,
          search: row.search,
        } as PhoneAreaCodeItem;
      })
      .filter(Boolean) as PhoneAreaCodeItem[];
  } catch {
    return [];
  }
}

