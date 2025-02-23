import { TreeSelect } from 'antd';
import React, { memo, useMemo } from 'react';

import Util from '@baifendian/adhere-util';

import AutoCompleteTreeMultiSelect from '../tree-select/AutoCompleteTreeMultiSelect';
import AutoCompleteTreeSelect from '../tree-select/AutoCompleteTreeSelect';
import type { AutoCompleteTreeTableSelectProps, DisplayNameInternal } from '../types';
import useAutoCompleteFetchLoading from '../useAutoCompleteFetchLoading';
import CheckboxTreeTable from './CheckboxTreeTable';
import RadioTreeTable from './RadioTreeTable';
import useTreeRender from './useTreeRenderProps';

/**
 * AutoCompleteTreeTableSelect
 * @description ListSelect，单选或多选
 * @param listProps
 * @param props
 * @constructor
 */
const InternalAutoCompleteTreeTableSelect = memo<AutoCompleteTreeTableSelectProps>(
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
      return !targetCheckStrictly;
    }, [targetCheckStrictly]);

    const renderProps = useTreeRender(tableProps);

    const fetchLoading = useAutoCompleteFetchLoading(props.renderLoading);

    const Component = useMemo(
      () => (isMultiple ? AutoCompleteTreeMultiSelect : AutoCompleteTreeSelect),
      [isMultiple],
    );

    return (
      <Component {...props} treeCheckable={treeCheckable} showCheckedStrategy={showCheckedStrategy}>
        {({ originNode, loading, ...rest }) => {
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
              {loading && fetchLoading}
              {!loading && isMultiple && (
                <CheckboxTreeTable checkStrictly={targetCheckStrictly} {...tableProps} />
              )}
              {!loading && !isMultiple && <RadioTreeTable {...tableProps} />}
            </>
          );
        }}
      </Component>
    );
  },
);

const AutoCompleteTreeTableSelect = InternalAutoCompleteTreeTableSelect as DisplayNameInternal<
  typeof InternalAutoCompleteTreeTableSelect
>;
AutoCompleteTreeTableSelect.displayName = 'AutoCompleteTreeTableSelect';

export default AutoCompleteTreeTableSelect;
