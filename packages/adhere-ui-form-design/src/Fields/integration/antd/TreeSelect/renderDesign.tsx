import { TreeSelect, type TreeSelectProps } from 'antd';
import React from 'react';

import type { DataItemRow } from '@baifendian/adhere-ui-tablegridlayout';

import { LabelDesign, ValueDesign } from '../../../../components';
import { type TreeDataSourceManagerFormItemValue } from '../../../../components/TreeDataSourceManagerFormItem';
import type { DesignContextType, DesignValue } from '../../../../types';
import { computeLabelValueColSpan, findDesignValueById } from '../../../../utils';

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
          const treeData = parseTreeData(treeOptions);

          const checkedStrategyMap: Record<string, TreeSelectProps['showCheckedStrategy']> = {
            SHOW_ALL: TreeSelect.SHOW_ALL,
            SHOW_PARENT: TreeSelect.SHOW_PARENT,
            SHOW_CHILD: TreeSelect.SHOW_CHILD,
          };
          const resolvedStrategy = showCheckedStrategy
            ? checkedStrategyMap[showCheckedStrategy]
            : undefined;

          return (
            <TreeSelect
              {...(restFieldProps as TreeSelectProps)}
              treeData={treeData}
              fieldNames={{ label: 'label', value: 'value', children: 'children' }}
              showCheckedStrategy={resolvedStrategy}
              style={style}
            />
          );
        }}
      </ValueDesign>
    ),
  };
}
