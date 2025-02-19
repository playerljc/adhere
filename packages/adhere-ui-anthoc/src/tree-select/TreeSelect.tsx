import { TreeSelect } from 'antd';
import type { TreeSelectProps } from 'antd';
import React, { useMemo } from 'react';

import type { TreeSelectHOCComponent } from '../types';
import { createFactory, getTreeValue } from '../util';

const InternalTreeSelect: TreeSelectHOCComponent = createFactory<
  TreeSelectProps & {
    isHideInvalidValue: true;
  }
>(
  TreeSelect,
  {
    showSearch: true,
    allowClear: true,
    treeNodeFilterProp: 'title',
    placement: 'bottomLeft',
  },
  (props) => ({
    ...props,
    // @ts-ignore
    value: props.realValue ?? props.value,
  }),
);

const TreeSelectHOC: TreeSelectHOCComponent = ({
  treeData,
  defaultValue,
  value,
  isHideInvalidValue = true,
  treeDataSimpleMode,
  ...restProps
}) => {
  const targetDefaultValue = useMemo(
    () =>
      isHideInvalidValue
        ? getTreeValue({ value: defaultValue, treeData, treeDataSimpleMode })
        : defaultValue,
    [defaultValue, treeData, treeDataSimpleMode, isHideInvalidValue],
  );

  const targetValue = useMemo(
    () => (isHideInvalidValue ? getTreeValue({ value, treeData, treeDataSimpleMode }) : value),
    [value, treeData, treeDataSimpleMode, isHideInvalidValue],
  );

  return (
    <InternalTreeSelect
      {...restProps}
      defaultValue={targetDefaultValue}
      value={targetValue}
      treeData={treeData}
      treeDataSimpleMode={treeDataSimpleMode}
    />
  );
};

TreeSelectHOC.displayName = 'TreeSelect';

export default TreeSelectHOC;
