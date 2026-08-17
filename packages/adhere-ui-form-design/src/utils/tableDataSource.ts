import { useContext, useEffect, useMemo, useState } from 'react';

import { DesignContext } from '../Design/Context';
import { DEFAULT_TABLE_DATA_SOURCE_JSON } from '../components/TableDataSourceManagerFormItem/constants';
import type { TableDataSourceManagerFormItemValue } from '../components/TableDataSourceManagerFormItem';
import type { DataSourceItemConfig, FieldProps } from '../types';
import { findDataSourceItemConfigByDynamicId } from './dataSourceOptions';

export type TableDataRow = Record<string, unknown>;

export function parseTableDataSourceValueFromFieldProps(
  fieldProps: FieldProps,
  fieldKey: string = 'tableOptions',
): TableDataSourceManagerFormItemValue | undefined {
  const raw = fieldProps[fieldKey];
  if (!raw || typeof raw !== 'object') {
    return undefined;
  }
  return raw as TableDataSourceManagerFormItemValue;
}

export function staticTableDataSourceToRows(
  source: TableDataSourceManagerFormItemValue | undefined,
): TableDataRow[] {
  if (source?.type !== 'static') {
    return [];
  }
  const json = source.dataSourceJson ?? DEFAULT_TABLE_DATA_SOURCE_JSON;
  try {
    const parsed = JSON.parse(json);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export async function fetchDataSourceItemConfigAsTableRows(
  cfg: DataSourceItemConfig,
): Promise<TableDataRow[]> {
  try {
    const { request } = cfg;
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
    return Array.isArray(rawList) ? (rawList as TableDataRow[]) : [];
  } catch {
    return [];
  }
}

export function omitFieldPropsTableOptionsKey(
  fieldProps: FieldProps,
  designOptionsKey: string = 'tableOptions',
): FieldProps {
  const next: FieldProps = { ...fieldProps };
  delete next[designOptionsKey];
  return next;
}

export type UseDesignFieldTableDataSourceResult = {
  source: TableDataSourceManagerFormItemValue | undefined;
  dataSource: TableDataRow[];
  loading: boolean;
  restFieldProps: FieldProps;
};

export function useDesignFieldTableDataSource(
  fieldProps: FieldProps,
  designOptionsKey: string = 'tableOptions',
): UseDesignFieldTableDataSourceResult {
  const { getDesignValue } = useContext(DesignContext);

  const source = useMemo(
    () => parseTableDataSourceValueFromFieldProps(fieldProps, designOptionsKey),
    [fieldProps, designOptionsKey],
  );

  const staticRows = useMemo(() => staticTableDataSourceToRows(source), [source]);

  const [dynamicRows, setDynamicRows] = useState<TableDataRow[]>([]);
  const [dynamicLoading, setDynamicLoading] = useState(false);

  const dynamicConfigId = source?.type === 'dynamic' ? source.dynamicConfigId : undefined;
  const dataSourceConfig = getDesignValue()?.dataSourceConfig;
  const referencedConfig = useMemo(
    () =>
      dynamicConfigId
        ? findDataSourceItemConfigByDynamicId(getDesignValue(), dynamicConfigId)
        : undefined,
    [dynamicConfigId, dataSourceConfig, getDesignValue],
  );

  useEffect(() => {
    if (source?.type !== 'dynamic' || !source.dynamicConfigId) {
      setDynamicRows([]);
      setDynamicLoading(false);
      return;
    }

    const cfg = referencedConfig;
    if (!cfg?.request?.url?.trim()) {
      setDynamicRows([]);
      setDynamicLoading(false);
      return;
    }

    let cancelled = false;
    setDynamicLoading(true);

    (async () => {
      try {
        const rows = await fetchDataSourceItemConfigAsTableRows(cfg);
        if (!cancelled) {
          setDynamicRows(rows);
        }
      } catch {
        if (!cancelled) {
          setDynamicRows([]);
        }
      } finally {
        if (!cancelled) {
          setDynamicLoading(false);
        }
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [source, referencedConfig]);

  const dataSource = source?.type === 'dynamic' ? dynamicRows : staticRows;
  const loading = source?.type === 'dynamic' ? dynamicLoading : false;
  const restFieldProps = useMemo(
    () => omitFieldPropsTableOptionsKey(fieldProps, designOptionsKey),
    [fieldProps, designOptionsKey],
  );

  return {
    source,
    dataSource,
    loading,
    restFieldProps,
  };
}
