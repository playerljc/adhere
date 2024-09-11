import type { CheckboxOptionType } from 'antd/es/checkbox';
import classNames from 'classnames';
import React, { memo, useMemo } from 'react';

import CheckAllWrapper from '../CheckAllWrapper';
import type { DisplayNameInternal, VerticalCheckableTagGroupProps } from '../types';
import VerticalCheckableTagGroup from './VerticalCheckableTagGroup';

const selectorPrefix = 'adhere-ui-ant-hoc-check-all-check-box';

/**
 * VerticalCheckAllCheckableTagGroup
 * @description 带有全选按钮的竖向VerticalCheckableTagGroup
 * @param checkAllWrapperClassName
 * @param checkAllWrapperStyle
 * @param dropdownWrapperClassName
 * @param dropdownWrapperStyle
 * @param props
 * @constructor
 */
const InternalVerticalCheckAllCheckableTagGroup = memo<VerticalCheckableTagGroupProps>(
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
      () => <VerticalCheckableTagGroup {...props} mode="multiple" />,
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

const VerticalCheckAllCheckableTagGroup =
  InternalVerticalCheckAllCheckableTagGroup as DisplayNameInternal<
    typeof InternalVerticalCheckAllCheckableTagGroup
  >;
VerticalCheckAllCheckableTagGroup.displayName = 'VerticalCheckAllCheckableTagGroup';

export default VerticalCheckAllCheckableTagGroup;
