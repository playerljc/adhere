import { ErrorBlock, SearchBar } from 'antd-mobile';
import classNames from 'classnames';
import React, { useCallback, useMemo, useState } from 'react';

import Util from '@baifendian/adhere-util';

import type { TreeFilterProps } from './types';

const selectorPrefix = 'adhere-mobile-ui-ant-hoc-tree-filter';

export const treeTransformConfig = {
  keyAttr: 'value',
  titleAttr: 'label',
  parentIdAttr: 'pId',
  rootParentId: 0,
};

function TreeFilter({
  treeData,
  treeDataSimpleMode = false,
  filterProps,
  wrapperClassName,
  wrapperStyle,
  filterWrapperClassName,
  filterWrapperStyle,
  bodyWrapperClassName,
  bodyWrapperStyle,
  renderEmpty,
  children,
}: TreeFilterProps) {
  const [filterValue, setFilterValue] = useState<string>('');

  function filter(_filterValue, option) {
    return option[filterProps?.optionFilterProp ?? 'label'].includes(_filterValue);
  }

  const flatTreeData = useMemo(
    () =>
      treeDataSimpleMode
        ? treeData
        : Util.treeToArray(
            treeData as any[],
            {
              parentIdAttr: treeTransformConfig.parentIdAttr,
              rootParentId: treeTransformConfig.rootParentId,
            },
            treeTransformConfig.keyAttr,
          ),
    [treeData, treeDataSimpleMode],
  );

  const targetTreeData = useMemo(() => {
    let _filterFlatTreeData: any[];

    // 对数据进行筛选

    if (!filterValue) {
      _filterFlatTreeData = flatTreeData ?? [];
    }
    // 是bool值
    else if (typeof filterProps?.filterOption === 'boolean' && filterProps.filterOption) {
      _filterFlatTreeData = (flatTreeData ?? []).filter((_option) => filter(filterValue, _option));
    }
    // 是函数
    else if (Util.isFunction(filterProps?.filterOption)) {
      _filterFlatTreeData = (flatTreeData ?? []).filter((_option) =>
        (filterProps?.filterOption as Function)(filterValue, _option),
      );
    } else {
      _filterFlatTreeData = (flatTreeData ?? []).filter((_option) => filter(filterValue, _option));
    }

    // 筛选完补全
    const fullTreeData = Util.completionIncompleteFlatArr(
      flatTreeData ?? [],
      _filterFlatTreeData,
      treeTransformConfig,
    );

    if (treeDataSimpleMode) {
      return Util.treeToArray(fullTreeData, treeTransformConfig, treeTransformConfig.keyAttr);
    }

    return fullTreeData;
  }, [filterValue, filterProps?.filterOption, filterProps?.optionFilterProp, flatTreeData]);

  const isEmpty = useCallback(() => !targetTreeData.length, [targetTreeData]);

  function onSearch(value) {
    setFilterValue(value);
  }

  function onClear() {
    setFilterValue('');
  }

  return (
    <div className={classNames(selectorPrefix, wrapperClassName ?? '')} style={wrapperStyle ?? {}}>
      <div
        className={classNames(`${selectorPrefix}-search`, filterWrapperClassName ?? '')}
        style={filterWrapperStyle ?? {}}
      >
        <SearchBar onSearch={onSearch} onClear={onClear} {...filterProps} />
      </div>

      <div
        className={classNames(`${selectorPrefix}-tree`, bodyWrapperClassName ?? '')}
        style={bodyWrapperStyle ?? {}}
      >
        {isEmpty() && (renderEmpty?.() ?? <ErrorBlock status="empty" />)}
        {children?.(targetTreeData, filterValue)}
      </div>
    </div>
  );
}

export default TreeFilter;
