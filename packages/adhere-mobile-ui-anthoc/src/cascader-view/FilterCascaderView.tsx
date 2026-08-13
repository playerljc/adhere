import classNames from 'classnames';
import React, { memo, useRef } from 'react';

import TreeFilter from '../TreeFilter';
import type {
  DisplayNameInternal,
  FilterCascaderViewProps,
  InternalCascaderViewProps,
} from '../types';
import InternalCascaderView from './InternalCascaderView';

const selectorPrefix = 'adhere-mobile-ui-ant-hoc-filter-cascader-view';

const InternalFilterCascaderView = memo<FilterCascaderViewProps>(
  ({
    className,
    style,
    filterWrapperClassName,
    filterWrapperStyle,
    bodyWrapperClassName,
    bodyWrapperStyle,
    filterProps,
    renderEmpty,
    treeDataSimpleMode,
    renderLabel,
    ...cascaderViewProps
  }) => {
    const preTreeData = useRef<{
      input: InternalCascaderViewProps['options'];
      output: InternalCascaderViewProps['options'];
    } | undefined>(undefined);

    return (
      <TreeFilter
        treeData={cascaderViewProps?.options ?? []}
        treeDataSimpleMode={treeDataSimpleMode}
        filterProps={filterProps}
        wrapperClassName={classNames(selectorPrefix, className ?? '')}
        wrapperStyle={style ?? {}}
        filterWrapperClassName={classNames(
          `${selectorPrefix}-filter`,
          filterWrapperClassName ?? '',
        )}
        filterWrapperStyle={filterWrapperStyle ?? {}}
        bodyWrapperClassName={classNames(`${selectorPrefix}-body`, bodyWrapperClassName ?? '')}
        bodyWrapperStyle={bodyWrapperStyle ?? {}}
        renderEmpty={renderEmpty}
        children={(treeData, filterValue) => {
          let targetTreeData = treeData;

          if (renderLabel) {
            if (!Object.is(preTreeData.current?.input, treeData)) {
              const loop = (_treeData): any[] => {
                return _treeData.map((_option) => {
                  const labeled = {
                    ..._option,
                    [filterProps?.optionFilterProp ?? 'label']: renderLabel!(_option, filterValue),
                  };
                  if (labeled.children) {
                    labeled.children = loop(labeled.children);
                  }
                  return labeled;
                });
              };

              targetTreeData = loop(treeData) as InternalCascaderViewProps['options'];
              preTreeData.current = { input: treeData, output: targetTreeData };
            } else {
              targetTreeData = preTreeData.current!.output;
            }
          }

          return (
            <InternalCascaderView
              treeDataSimpleMode={treeDataSimpleMode}
              {...cascaderViewProps}
              options={targetTreeData}
            />
          );
        }}
      />
    );
  },
);

const FilterCascaderView = InternalFilterCascaderView as DisplayNameInternal<
  typeof InternalFilterCascaderView
>;
FilterCascaderView.displayName = 'FilterCascaderView';

export default FilterCascaderView;
