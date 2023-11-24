import { CheckboxOptionType } from 'antd/es/checkbox';
import classNames from 'classnames';
import React, { memo } from 'react';

import CheckAllWrapper from '../CheckAllWrapper';
import type { DisplayNameInternal, HorizontalCheckAllCheckboxProps } from '../types';
import HorizontalCheckbox from './HorizontalCheckbox';

const selectorPrefix = 'adhere-ui-ant-hoc-check-all-check-box';

/**
 * HorizontalCheckAllCheckbox
 * @description 横向的可以多选的CheckboxGroup
 * @param checkAllWrapperClassName
 * @param checkAllWrapperStyle
 * @param dropdownWrapperClassName
 * @param dropdownWrapperStyle
 * @param props
 * @constructor
 */
const InternalHorizontalCheckAllCheckbox = memo<HorizontalCheckAllCheckboxProps>(
  ({
    checkAllWrapperClassName,
    checkAllWrapperStyle,
    dropdownWrapperClassName,
    dropdownWrapperStyle,
    ...props
  }) => (
    <div className={selectorPrefix}>
      <div
        className={classNames(`${selectorPrefix}-check-all`, checkAllWrapperClassName ?? '')}
        style={checkAllWrapperStyle ?? {}}
      >
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
      </div>

      <div
        className={classNames(`${selectorPrefix}-body`, dropdownWrapperClassName ?? '')}
        style={dropdownWrapperStyle ?? {}}
      >
        <HorizontalCheckbox {...props} />
      </div>
    </div>
  ),
);

const HorizontalCheckAllCheckbox = InternalHorizontalCheckAllCheckbox as DisplayNameInternal<
  typeof InternalHorizontalCheckAllCheckbox
>;
HorizontalCheckAllCheckbox.displayName = 'HorizontalCheckAllCheckbox';

export default HorizontalCheckAllCheckbox;
