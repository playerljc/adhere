import { Cascader, type CascaderProps } from 'antd';
import React from 'react';

import type { DataItemRow } from '@baifendian/adhere-ui-tablegridlayout';

import { FieldWithTip, LabelDesign, ValueDesign } from '../../../../components';
import { type TreeDataSourceManagerFormItemValue } from '../../../../components';
import type { DesignContextType, DesignValue } from '../../../../types';
import {
  computeLabelValueColSpan,
  findDesignValueById,
  getDesignFormControlProps,
  resolveI18nText,
} from '../../../../utils';

function parseTreeData(treeOptions: TreeDataSourceManagerFormItemValue | undefined): any[] {
  if (!treeOptions) return [];

  if (treeOptions.type === 'static' && treeOptions.treeDataJson) {
    try {
      return JSON.parse(treeOptions.treeDataJson);
    } catch {
      return [];
    }
  }

  return [];
}

/**
 * renderDesign
 */
export function renderDesign({
  parentId,
  value,
  context,
}: {
  parentId?: string;
  value: DesignValue;
  context: DesignContextType;
}): DataItemRow {
  const {
    id,
    props: { formItemProps, styleProps },
  } = value;

  const { getDesignValue } = context;

  const root = getDesignValue();
  const parent = parentId && root ? findDesignValueById(parentId, root) : undefined;

  const { labelColSpan, valueColSpan } = computeLabelValueColSpan(parent, formItemProps);

  return {
    key: id,
    require: formItemProps?.require ?? false,
    labelColSpan,
    valueColSpan,
    label: <LabelDesign formItemProps={formItemProps} styleProps={styleProps} />,
    value: (
      <ValueDesign value={value}>
        {({ fieldProps, style, lang, value, onChange, checked, targetKeys }) => {
          const { treeOptions, showCheckedStrategy, ...restFieldProps } =
            fieldProps as typeof fieldProps & {
              treeOptions?: TreeDataSourceManagerFormItemValue;
              showCheckedStrategy?: string;
            };
          const options = parseTreeData(treeOptions);

          // antd 的 CascaderProps 在 multiple=true 时会把泛型锁死为 true。
          // 这里仅在 multiple === true 时传入该属性，避免 boolean 导致类型不匹配。
          const { multiple, ...restCascaderProps } = restFieldProps as {
            multiple?: boolean;
          } & Omit<CascaderProps<any>, 'multiple'>;

          const checkedStrategyMap: Record<string, CascaderProps['showCheckedStrategy']> = {
            SHOW_PARENT: Cascader.SHOW_PARENT,
            SHOW_CHILD: Cascader.SHOW_CHILD,
          };
          const resolvedStrategy = showCheckedStrategy
            ? checkedStrategyMap[showCheckedStrategy]
            : undefined;

          return (
            <FieldWithTip tip={fieldProps.tip as any} tipStyles={styleProps?.tipStyles} lang={lang}>
              <Cascader
                {...(restCascaderProps as CascaderProps<any>)}
                {...(multiple === true ? ({ multiple: true } as const) : {})}
                {...getDesignFormControlProps(formItemProps, { value, onChange, checked, targetKeys })}
                placeholder={resolveI18nText(restCascaderProps.placeholder as any, lang)}
                options={options}
                showCheckedStrategy={resolvedStrategy}
                style={style}
              />
            </FieldWithTip>
          );
        }}
      </ValueDesign>
    ),
  };
}
