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
    const preTreeData = useRef<InternalCascaderViewProps['options'] | undefined>(undefined);

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
          function loop(_treeData) {
            _treeData.forEach((_opition) => {
              if (renderLabel) {
                _opition[filterProps?.optionFilterProp ?? 'label'] = renderLabel(
                  _opition,
                  filterValue,
                );
              }

              if (_opition.children) {
                loop(_opition.children);
              }
            });
          }

          if (renderLabel) {
            if (!Object.is(preTreeData.current, treeData)) {
              loop(treeData);
            }
          }

          preTreeData.current = treeData;

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
