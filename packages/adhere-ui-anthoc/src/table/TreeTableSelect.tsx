import { TreeSelect } from 'antd';
import React, { memo, useMemo } from 'react';

import Util from '@baifendian/adhere-util';

import TreeDropdownRenderSelect from '../tree-select/DropdownRenderSelect';
import type { DisplayNameInternal, TreeTableSelectProps } from '../types';
import CheckboxTreeTable from './CheckboxTreeTable';
import RadioTreeTable from './RadioTreeTable';
import useTreeRender from './useTreeRenderProps';

const InternalTreeTableSelect = memo<TreeTableSelectProps>(
  ({ tableProps, treeDataSimpleModeConfig, checkStrictly, ...props }) => {
    const isMultiple = useMemo(() => 'multiple' in props && props.multiple, [props.multiple]);

    const isTreeDataSimpleMode = useMemo(
      () => !!props.treeDataSimpleMode,
      [props.treeDataSimpleMode],
    );

    const targetCheckStrictly = useMemo(() => {
      if (checkStrictly === undefined) return true;

      return checkStrictly;
    }, [checkStrictly]);

    const showCheckedStrategy = useMemo(() => {
      if (targetCheckStrictly) return TreeSelect.SHOW_CHILD;

      return TreeSelect.SHOW_ALL;
    }, [targetCheckStrictly]);

    const treeCheckable = useMemo(() => {
      return isMultiple ? !targetCheckStrictly : false;
    }, [isMultiple, targetCheckStrictly]);

    const renderProps = useTreeRender(tableProps);

    return (
      <TreeDropdownRenderSelect
        treeCheckable={treeCheckable}
        showCheckedStrategy={showCheckedStrategy}
        {...props}
      >
        {({ originNode, ...rest }) => {
          const { treeData, ...tablePropsRest } = rest;

          const options = isTreeDataSimpleMode
            ? Util.arrayToAntdTreeSelect(treeData ?? [], {
                keyAttr: treeDataSimpleModeConfig?.keyAttr ?? 'value',
                titleAttr: treeDataSimpleModeConfig?.titleAttr ?? 'title',
                rootParentId: treeDataSimpleModeConfig?.rootParentId ?? 0,
                parentIdAttr: treeDataSimpleModeConfig?.parentIdAttr ?? 'pId',
              })
            : treeData;

          const tableProps = renderProps({
            options,
            ...tablePropsRest,
          });

          return (
            <>
              {isMultiple && (
                <CheckboxTreeTable checkStrictly={targetCheckStrictly} {...tableProps} />
              )}
              {!isMultiple && <RadioTreeTable {...tableProps} />}
            </>
          );
        }}
      </TreeDropdownRenderSelect>
    );
  },
);

const TreeTableSelect = InternalTreeTableSelect as DisplayNameInternal<
  typeof InternalTreeTableSelect
>;
TreeTableSelect.displayName = 'TreeTableSelect';

export default TreeTableSelect;
