import type { CheckboxOptionType } from 'antd/es/checkbox';
import classNames from 'classnames';
import React, { memo, useMemo } from 'react';

import CheckAllWrapper from '../CheckAllWrapper';
import type { DisplayNameInternal, VerticalCheckAllCheckboxProps } from '../types';
import VerticalCheckbox from './VerticalCheckbox';

const selectorPrefix = 'adhere-ui-ant-hoc-check-all-check-box';

/**
 * VerticalCheckAllCheckbox
 * @description 带有全选按钮的竖向CheckboxGroup
 * @param checkAllWrapperClassName
 * @param checkAllWrapperStyle
 * @param dropdownWrapperClassName
 * @param dropdownWrapperStyle
 * @param props
 * @constructor
 */
const InternalVerticalCheckAllCheckbox = memo<VerticalCheckAllCheckboxProps>(
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
          onChange={(...arg) => {
            props.onChange?.(...arg);
          }}
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
      [props.value, props.options, props.onChange],
    );

    const ChildrenOrigin = useMemo(() => <VerticalCheckbox {...props} />, [props]);

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

const VerticalCheckAllCheckbox = InternalVerticalCheckAllCheckbox as DisplayNameInternal<
  typeof InternalVerticalCheckAllCheckbox
>;
VerticalCheckAllCheckbox.displayName = 'VerticalCheckAllCheckbox';

export default VerticalCheckAllCheckbox;
