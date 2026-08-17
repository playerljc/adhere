import { useContext, useEffect, useMemo, useState } from 'react';

import { DesignContext } from '../Design/Context';
import type { TreeDataSourceManagerFormItemValue } from '../components/TreeDataSourceManagerFormItem';
import type { DataSourceItemConfig, FieldProps } from '../types';
import { findDataSourceItemConfigByDynamicId } from './dataSourceOptions';

export type TreeDataNode = Record<string, unknown>;

const DEFAULT_TREE_DATA_JSON = JSON.stringify(
  [
    {
      value: 'Option 1',
      label: 'Option 1',
      children: [
        {
          value: 'Option 1 - children',
          label: 'Option 1 - children',
        },
      ],
    },
    {
      value: 'Option 2',
      label: 'Option 2',
      children: [
        {
          value: 'Option 2 - children',
          label: 'Option 2 - children',
        },
      ],
    },
    {
      value: 'Option 3',
      label: 'Option 3',
    },
  ],
  null,
  2,
);

export function parseTreeDataSourceValueFromFieldProps(
  fieldProps: FieldProps,
  fieldKey: string = 'treeOptions',
): TreeDataSourceManagerFormItemValue | undefined {
  const raw = fieldProps[fieldKey];
  if (!raw || typeof raw !== 'object') {
    return undefined;
  }
  return raw as TreeDataSourceManagerFormItemValue;
}

export function staticTreeDataSourceToNodes(
  source: TreeDataSourceManagerFormItemValue | undefined,
): TreeDataNode[] {
  if (source?.type !== 'static') {
    return [];
  }
  const json = source.treeDataJson ?? DEFAULT_TREE_DATA_JSON;
  try {
    const parsed = JSON.parse(json);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export async function fetchDataSourceItemConfigAsTreeNodes(
  cfg: DataSourceItemConfig,
): Promise<TreeDataNode[]> {
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
    return Array.isArray(rawList) ? (rawList as TreeDataNode[]) : [];
  } catch {
    return [];
  }
}

export function omitFieldPropsTreeOptionsKey(
  fieldProps: FieldProps,
  designOptionsKey: string = 'treeOptions',
): FieldProps {
  const next: FieldProps = { ...fieldProps };
  delete next[designOptionsKey];
  return next;
}

export type UseDesignFieldTreeDataSourceResult = {
  source: TreeDataSourceManagerFormItemValue | undefined;
  treeData: TreeDataNode[];
  loading: boolean;
  restFieldProps: FieldProps;
};

export function useDesignFieldTreeDataSource(
  fieldProps: FieldProps,
  designOptionsKey: string = 'treeOptions',
): UseDesignFieldTreeDataSourceResult {
  const { getDesignValue } = useContext(DesignContext);

  const source = useMemo(
    () => parseTreeDataSourceValueFromFieldProps(fieldProps, designOptionsKey),
    [fieldProps, designOptionsKey],
  );

  const staticNodes = useMemo(() => staticTreeDataSourceToNodes(source), [source]);

  const [dynamicNodes, setDynamicNodes] = useState<TreeDataNode[]>([]);
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
      setDynamicNodes([]);
      setDynamicLoading(false);
      return;
    }

    const cfg = referencedConfig;
    if (!cfg?.request?.url?.trim()) {
      setDynamicNodes([]);
      setDynamicLoading(false);
      return;
    }

    let cancelled = false;
    setDynamicLoading(true);

    (async () => {
      try {
        const nodes = await fetchDataSourceItemConfigAsTreeNodes(cfg);
        if (!cancelled) {
          setDynamicNodes(nodes);
        }
      } catch {
        if (!cancelled) {
          setDynamicNodes([]);
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

  const treeData = source?.type === 'dynamic' ? dynamicNodes : staticNodes;
  const loading = source?.type === 'dynamic' ? dynamicLoading : false;
  const restFieldProps = useMemo(
    () => omitFieldPropsTreeOptionsKey(fieldProps, designOptionsKey),
    [fieldProps, designOptionsKey],
  );

  return {
    source,
    treeData,
    loading,
    restFieldProps,
  };
}
