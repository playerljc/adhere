import type { DataItemRow } from '@baifendian/adhere-ui-tablegridlayout';
import { Cascader, type CascaderProps } from 'antd';
import React from 'react';

import { LabelDesign, ValueDesign } from '../../../../components';
import type { DesignContextType, DesignValue } from '../../../../types';
import { computeLabelValueColSpan, findDesignValueById } from '../../../../utils';
import { type TreeDataSourceManagerFormItemValue } from '../../../../components/TreeDataSourceManagerFormItem';

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
        {({ fieldProps, style }) => {
          const { treeOptions, showCheckedStrategy, ...restFieldProps } = fieldProps as typeof fieldProps & {
            treeOptions?: TreeDataSourceManagerFormItemValue;
            showCheckedStrategy?: string;
          };
          const options = parseTreeData(treeOptions);

          const checkedStrategyMap: Record<string, CascaderProps['showCheckedStrategy']> = {
            SHOW_PARENT: Cascader.SHOW_PARENT,
            SHOW_CHILD: Cascader.SHOW_CHILD,
          };
          const resolvedStrategy = showCheckedStrategy
            ? checkedStrategyMap[showCheckedStrategy]
            : undefined;

          return (
            <Cascader
              {...(restFieldProps as CascaderProps)}
              options={options}
              showCheckedStrategy={resolvedStrategy}
              style={style}
            />
          );
        }}
      </ValueDesign>
    ),
  };
}
