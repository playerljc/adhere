import type { CheckboxOptionType } from 'antd/es/checkbox';
import classNames from 'classnames';
import React, { memo, useMemo } from 'react';

import CheckAllWrapper from '../CheckAllWrapper';
import type { DisplayNameInternal, HorizontalCheckableTagGroupProps } from '../types';
import HorizontalCheckableTagGroup from './HorizontalCheckableTagGroup';

const selectorPrefix = 'adhere-ui-ant-hoc-check-all-check-box';

/**
 * HorizontalCheckAllCheckableTagGroup
 * @description 带有全选按钮的竖向HorizontalCheckableTagGroup
 * @param checkAllWrapperClassName
 * @param checkAllWrapperStyle
 * @param dropdownWrapperClassName
 * @param dropdownWrapperStyle
 * @param props
 * @constructor
 */
const InternalHorizontalCheckAllCheckableTagGroup = memo<HorizontalCheckableTagGroupProps>(
  ({
    checkAllWrapperClassName,
    checkAllWrapperStyle,
    dropdownWrapperClassName,
    dropdownWrapperStyle,
    render,
    ...props
  }) => {
    const CheckAllOrigin = useMemo(
      () => (
        <CheckAllWrapper
          value={props.value}
          onChange={(...arg) => props.onChange?.(...arg)}
          options={
            props?.options?.map((t) => {
              const option = t as CheckboxOptionType;

              return {
                label: option.label,
                value: option.value as string,
              };
            }) ?? []
          }
        />
      ),
      [props.value, props.onChange, props.options],
    );

    const ChildrenOrigin = useMemo(
      () => <HorizontalCheckableTagGroup {...props} mode="multiple" />,
      [props],
    );

    return (
      <div className={selectorPrefix}>
        {render?.(CheckAllOrigin, ChildrenOrigin) ?? (
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

const HorizontalCheckAllCheckableTagGroup =
  InternalHorizontalCheckAllCheckableTagGroup as DisplayNameInternal<
    typeof InternalHorizontalCheckAllCheckableTagGroup
  >;
HorizontalCheckAllCheckableTagGroup.displayName = 'HorizontalCheckAllCheckableTagGroup';

export default HorizontalCheckAllCheckableTagGroup;
