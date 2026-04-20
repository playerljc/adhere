import type { ReactNode } from 'react';

import type { DataSourceItem, DataSourceManagerFormItemValue } from '../components/DataSourceManagerFormItem';
import { SELECT_VALUE_KEY_NAME } from '../constant';
import type { DataSourceItemConfig, DesignValue, FieldProps, I18nValue } from '../types';
import { resolveI18nText } from './resolveI18nText';

/** 与设计器 antd Select / Radio 等 options 形态对齐的条目 */
export type DesignFieldDataSourceOption = {
  label: ReactNode;
  value: string | number;
};

/**
 * 静态数据源条目的 label 解析为当前语言展示文案
 */
export function resolveDataSourceOptionLabel(label: DataSourceItem['label'], lang: string): string {
  if (label && typeof label === 'object' && SELECT_VALUE_KEY_NAME in label) {
    const v = resolveI18nText(label as I18nValue, lang);
    if (typeof v === 'string' || typeof v === 'number') return String(v);
    return '';
  }
  if (typeof label === 'string' || typeof label === 'number') {
    return String(label);
  }
  return '';
}

/**
 * 从 fieldProps 上读取 DataSourceManagerFormItem 写入的配置（如 selectOptions、后续 radioOptions）
 */
export function parseDataSourceManagerValueFromFieldProps(
  fieldProps: FieldProps,
  fieldKey: string,
): DataSourceManagerFormItemValue | undefined {
  const raw = fieldProps[fieldKey];
  if (!raw || typeof raw !== 'object') {
    return undefined;
  }
  return raw as DataSourceManagerFormItemValue;
}

/**
 * 静态数据源 → options
 */
export function staticDataSourceToDesignOptions(
  source: DataSourceManagerFormItemValue | undefined,
  lang: string,
): DesignFieldDataSourceOption[] {
  if (source?.type !== 'static' || !source.dataSource?.length) {
    return [];
  }
  return source.dataSource.map((item) => ({
    label: resolveDataSourceOptionLabel(item.label, lang),
    value: item.value,
  }));
}

/**
 * 根据 dynamicConfigId 在根设计值的全局 dataSourceConfig 中查找条目
 */
export function findDataSourceItemConfigByDynamicId(
  root: DesignValue | undefined,
  dynamicConfigId: string,
): DataSourceItemConfig | undefined {
  return root?.dataSourceConfig?.find((c) => c.id === dynamicConfigId);
}

/**
 * 按数据源配置发起请求并映射为 options（设计器预览用）
 */
export async function fetchDataSourceItemConfigAsOptions(
  cfg: DataSourceItemConfig,
): Promise<DesignFieldDataSourceOption[]> {
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
    const json: Record<string, unknown> = await res.json();

    const code = json[request.codeKey];
    if (code !== request.codeSuccess) {
      return [];
    }

    const rawList = json[request.dataKey];
    const list = Array.isArray(rawList) ? rawList : [];
    return list.map((row: Record<string, unknown>) => ({
      label: row[labelKey] as ReactNode,
      value: row[valueKey] as string | number,
    }));
  } catch {
    return [];
  }
}

/**
 * 从 fieldProps 中移除设计器专用 key，避免透传给 antd 控件
 */
export function omitFieldPropsDesignKey(fieldProps: FieldProps, designOptionsKey: string): FieldProps {
  const next: FieldProps = { ...fieldProps };
  delete next[designOptionsKey];
  return next;
}
