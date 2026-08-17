import { useContext, useEffect, useMemo, useState } from 'react';

import ConfigProvider from '@baifendian/adhere-ui-configprovider';

import { DesignContext } from '../Design/Context';
import type { DataSourceManagerFormItemValue } from '../components/DataSourceManagerFormItem';
import type { FieldProps } from '../types';
import {
  type DesignFieldDataSourceOption,
  fetchDataSourceItemConfigAsOptions,
  findDataSourceItemConfigByDynamicId,
  omitFieldPropsDesignKey,
  parseDataSourceManagerValueFromFieldProps,
  staticDataSourceToDesignOptions,
} from './dataSourceOptions';

export type UseDesignFieldDataSourceOptionsResult = {
  /** DataSourceManager 配置 */
  source: DataSourceManagerFormItemValue | undefined;
  options: DesignFieldDataSourceOption[];
  /** 动态数据源请求中 */
  loading: boolean;
  /** 已去掉设计器专用 key 的 fieldProps，可透传给 antd */
  restFieldProps: FieldProps;
};

/**
 * 设计器内：根据 fieldProps 上的数据源配置（静态 / 动态）得到 options 与 loading
 * @param fieldProps
 * @param designOptionsKey 如 selectOptions、后续 radioOptions 等
 */
export function useDesignFieldDataSourceOptions(
  fieldProps: FieldProps,
  designOptionsKey: string = 'selectOptions',
): UseDesignFieldDataSourceOptionsResult {
  const { intl } = useContext(ConfigProvider.Context);
  const { getDesignValue } = useContext(DesignContext);
  const lang = intl.lang ?? '';

  const source = useMemo(
    () => parseDataSourceManagerValueFromFieldProps(fieldProps, designOptionsKey),
    [fieldProps, designOptionsKey],
  );

  const staticOptions = useMemo(
    () => staticDataSourceToDesignOptions(source, lang),
    [source, lang],
  );

  const [dynamicOptions, setDynamicOptions] = useState<DesignFieldDataSourceOption[]>([]);
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
      setDynamicOptions([]);
      setDynamicLoading(false);
      return;
    }

    const cfg = referencedConfig;
    if (!cfg?.request?.url?.trim()) {
      setDynamicOptions([]);
      setDynamicLoading(false);
      return;
    }

    let cancelled = false;
    setDynamicLoading(true);

    (async () => {
      try {
        const options = await fetchDataSourceItemConfigAsOptions(cfg);
        if (!cancelled) {
          setDynamicOptions(options);
        }
      } catch {
        if (!cancelled) {
          setDynamicOptions([]);
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

  const options = source?.type === 'dynamic' ? dynamicOptions : staticOptions;
  const loading = source?.type === 'dynamic' ? dynamicLoading : false;
  const restFieldProps = useMemo(
    () => omitFieldPropsDesignKey(fieldProps, designOptionsKey),
    [fieldProps, designOptionsKey],
  );

  return {
    source,
    options,
    loading,
    restFieldProps,
  };
}
