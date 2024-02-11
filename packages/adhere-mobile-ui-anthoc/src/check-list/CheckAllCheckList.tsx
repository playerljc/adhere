import classNames from 'classnames';
import React, { memo, useMemo } from 'react';

import CheckAllWrapper from '../CheckAllWrapper';
import type { CheckAllCheckListProps, DisplayNameInternal } from '../types';
import CheckList from './CheckList';

const selectorPrefix = 'adhere-mobile-ui-ant-hoc-check-all-check-list';

/**
 * CheckAllCheckList
 * @description 带有全选按钮的竖向CheckboxGroup
 * @param checkAllWrapperClassName
 * @param checkAllWrapperStyle
 * @param dropdownWrapperClassName
 * @param dropdownWrapperStyle
 * @param props
 * @constructor
 */
const InternalCheckAllCheckList = memo<CheckAllCheckListProps>(
  ({
    checkAllWrapperClassName,
    checkAllWrapperStyle,
    dropdownWrapperClassName,
    dropdownWrapperStyle,
    renderCheckAll,
    ...props
  }) => {
    const CheckAllOrigin = useMemo(
      () => (
        <CheckAllWrapper
          value={props.value}
          onChange={(...arg) => {
            props.onChange?.(...arg);
          }}
          options={props?.options?.map((t) => t.value) ?? []}
        />
      ),
      [props.value, props.options, props.onChange],
    );

    const ChildrenOrigin = useMemo(() => <CheckList {...props} />, [props]);

    return (
      <div className={selectorPrefix}>
        {renderCheckAll?.(CheckAllOrigin, ChildrenOrigin) ?? (
          <>
            <div
              className={classNames(`${selectorPrefix}-check-all`, checkAllWrapperClassName ?? '')}
              style={checkAllWrapperStyle ?? {}}
            >
              {CheckAllOrigin}
            </div>

            <div
              className={classNames(`${selectorPrefix}-body`, dropdownWrapperClassName ?? '')}
              style={dropdownWrapperStyle ?? {}}
            >
              {ChildrenOrigin}
            </div>
          </>
        )}
      </div>
    );
  },
);

const CheckAllCheckList = InternalCheckAllCheckList as DisplayNameInternal<
  typeof InternalCheckAllCheckList
>;
CheckAllCheckList.displayName = 'CheckAllCheckList';

export default CheckAllCheckList;
