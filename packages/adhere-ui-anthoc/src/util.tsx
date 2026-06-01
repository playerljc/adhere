import type { CascaderProps, SelectProps, TransferProps, TreeSelectProps } from 'antd';
import type { LabeledValue } from 'antd/es/select';
import React, { useEffect, useState } from 'react';

import type { ConfigProviderProps } from '@baifendian/adhere-ui-configprovider/es/types';
import FlexLayout from '@baifendian/adhere-ui-flexlayout';
import Util from '@baifendian/adhere-util';

const { useScrollLayout } = FlexLayout;

/**
 * createFactory
 * @description - 创建一个组件的包装
 * @param Component
 * @param defaultProps
 * @param override
 * @return {function(*)}
 */
export function createFactory<P>(
  Component: any,
  defaultProps: Partial<P>,
  override?: (props: Partial<P>) => Partial<P> | Promise<Partial<P>>,
): typeof Component & {
  defaultProps?: Partial<P>;
  override?: (props: Partial<P>) => Partial<P> | Promise<Partial<P>>;
} {
  const fn = (_props) => {
    const { getEl } = useScrollLayout();

    const [overrideProps, setOverrideProps] = useState<Partial<P> | undefined>(undefined);

    useEffect(() => {
      let cancelled = false;

      const run = async () => {
        if (!fn.override) {
          setOverrideProps(undefined);
          return;
        }

        try {
          const result = await fn.override({ ...(_props ?? {}) });
          if (!cancelled) {
            setOverrideProps(result ?? undefined);
          }
        } catch (e) {
          if (!cancelled) {
            setOverrideProps(undefined);
          }
        }
      };

      run();

      return () => {
        cancelled = true;
      };
    }, [_props]);

    const props = {
      ...fn.defaultProps,
      ..._props,
      ...(overrideProps ?? {}),
    };

    if (!('getPopupContainer' in props)) {
      props.getPopupContainer = (el) => {
        return getEl?.() || el?.parentElement || document.body;
      };
    }

    const { children, ...rest } = props;

    return <Component {...rest}>{children}</Component>;
  };

  Object.assign(fn, Component);

  fn.defaultProps = defaultProps;

  fn.override = override;

  return fn;
}

/**
 * @typedef {ConfigProviderProps['media]} Media
 */
/**
 * getValue
 * @param {Media} media
 * @param {number} size
 * @return {string}
 */
export function getValue(
  media: ConfigProviderProps['media'],
  size: number | string,
): number | string {
  if (Util.isNumber(size)) {
    if (media?.isUseMedia) {
      return Util.pxToRem(size as number, media?.designWidth as number);
    }

    return size;
  }

  return size;
}

export function existsValueInLabeledValueOptions(value: string | number, options: LabeledValue[]) {
  return options.findIndex(({ value: itemValue }) => value === itemValue) !== -1;
}

export function isLabeledValue(val: LabeledValue): boolean {
  return ('label' in val || 'title' in val) && 'value' in val;
}

export function checkLabeledValueExists(
  value: string | number | LabeledValue,
  options: LabeledValue[],
) {
  if (typeof value === 'string' || typeof value === 'number') {
    return existsValueInLabeledValueOptions(value, options);
  } else if (isLabeledValue(value)) {
    return existsValueInLabeledValueOptions(value.value, options);
  }
  return false;
}

export function getOptionsValue(value: SelectProps['value'], options: LabeledValue[]) {
  if (!value || !options) return value;

  if (typeof value === 'string' || typeof value === 'number' || isLabeledValue(value)) {
    return checkLabeledValueExists(value, options) ? value : undefined;
  }

  if (Array.isArray(value)) {
    return (value as LabeledValue[]).filter((_value) => checkLabeledValueExists(_value, options));
  }

  return value;
}

export function existsValueInSimpleTreeData({
  value,
  treeData,
  valueAttr = 'value',
}: {
  value: string;
  treeData: { value?: string | number }[];
  valueAttr?: string;
}): boolean {
  return treeData.findIndex(({ value: itemValue }) => value === itemValue) !== -1;
}

export function filterTreeValues(value: string | string[], treeData: any[], keyAttr: string) {
  if (typeof value === 'string') {
    return Util.findNodeByKey(treeData, value, { keyAttr }) ? value : undefined;
  } else if (Array.isArray(value)) {
    return value.filter((_value) => Util.findNodeByKey(treeData, _value, { keyAttr }));
  }

  return value;
}

export function filterCascaderValues(
  value: CascaderProps['value'],
  options: CascaderProps['options'],
) {
  return (value ?? [])
    .filter((_value) => !!_value)
    .filter((_value) => Util.findNodeByKey((options ?? []) as any[], _value, { keyAttr: 'value' }));
}

export function getTreeValue({
  value,
  treeData,
  treeDataSimpleMode,
}: {
  value: TreeSelectProps['value'];
  treeData: TreeSelectProps['treeData'];
  treeDataSimpleMode: TreeSelectProps['treeDataSimpleMode'];
}) {
  if (!value || !treeData) return value;

  // 简单数据
  if (treeDataSimpleMode) {
    const valueAttr =
      typeof treeDataSimpleMode === 'boolean' ? 'value' : treeDataSimpleMode['value'];

    // 单值
    if (typeof value === 'string') {
      return existsValueInSimpleTreeData({ value, treeData: treeData ?? [], valueAttr })
        ? value
        : undefined;
    }
    // 多值
    else if (Array.isArray(value)) {
      return value.filter((_value) =>
        existsValueInSimpleTreeData({ value: _value, treeData: treeData ?? [], valueAttr }),
      );
    }
  }
  // 带有children的数据
  else {
    return filterTreeValues(value, treeData ?? [], 'value');
  }

  return value;
}

export function getCascaderValue({
  value,
  options,
}: {
  value: CascaderProps['value'];
  options: CascaderProps['options'];
}) {
  if (!value || !options) return value;

  return filterCascaderValues(value, options);
}

export function getTransferValue({
  value,
  dataSource,
}: {
  value: TransferProps['selectedKeys'];
  dataSource: TransferProps['dataSource'];
}) {
  if (!value || !dataSource) return value;

  return (value ?? []).filter(
    (_value) => (dataSource ?? []).findIndex(({ key }) => key === _value) !== -1,
  );
}

/**
 * GermanNumberFormatter
 * @description 德国数字格式化（千分位: `.`, 小数点: `,`）
 * @param {string | number} value - 要格式化的数值
 * @param {number} precision - 小数精度
 * @return {string}
 */
export function GermanNumberFormatter(value: string | number, precision?: number) {
  return Util.GermanNumberFormatter(value, precision);
}

/**
 * GermanNumberParse
 * @description 解析德国格式的数字字符串
 * @param {string} value
 * @return {string}
 */
export function GermanNumberParse(value: string) {
  return Util.GermanNumberParse(value);
}

/**
 * USNumberFormatter
 * @description 美国/中国数字格式化（千分位: `,`, 小数点: `.`）
 * @param {string | number} value - 要格式化的数值
 * @param {number} precision - 小数精度
 * @return {string}
 */
export function USNumberFormatter(value: string | number, precision?: number) {
  return Util.USNumberFormatter(value, precision);
}

/**
 * USNumberParse
 * @description 解析美国/中国格式的数字字符串
 * @param {string} value
 * @return {string}
 */
export function USNumberParse(value: string) {
  return Util.USNumberParse(value);
}

/**
 * FrenchNumberFormatter
 * @description 法国数字格式化（千分位: 空格, 小数点: `,`）
 * @param {string | number} value - 要格式化的数值
 * @param {number} precision - 小数精度
 * @return {string}
 */
export function FrenchNumberFormatter(value: string | number, precision?: number) {
  return Util.FrenchNumberFormatter(value, precision);
}

/**
 * FrenchNumberParse
 * @description 解析法国格式的数字字符串
 * @param {string} value
 * @return {string}
 */
export function FrenchNumberParse(value: string) {
  return Util.FrenchNumberParse(value);
}

/**
 * InternationalNumberFormatter
 * @description 国际标准数字格式化（千分位: 空格, 小数点: `.`）
 * @param {string | number} value - 要格式化的数值
 * @param {number} precision - 小数精度
 * @return {string}
 */
export function InternationalNumberFormatter(value: string | number, precision?: number) {
  return Util.InternationalNumberFormatter(value, precision);
}

/**
 * InternationalNumberParse
 * @description 解析国际标准格式的数字字符串
 * @param {string} value
 * @return {string}
 */
export function InternationalNumberParse(value: string) {
  return Util.InternationalNumberParse(value);
}

// 保持向后兼容
/** @deprecated 请使用 GermanNumberFormatter */
export const EuroNumberFormatter = GermanNumberFormatter;
/** @deprecated 请使用 GermanNumberParse */
export const EuroNumberParse = GermanNumberParse;
