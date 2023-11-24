import { CheckboxOptionType } from 'antd/es/checkbox';
import classNames from 'classnames';
import React, { memo } from 'react';

import CheckAllWrapper from '../CheckAllWrapper';
import type { CustomCheckAllCheckboxProps, DisplayNameInternal } from '../types';
import CustomCheckbox from './CustomCheckbox';

const selectorPrefix = 'adhere-ui-ant-hoc-check-all-check-box';

/**
 * CustomCheckAllCheckbox
 * @param checkAllWrapperClassName
 * @param checkAllWrapperStyle
 * @param dropdownWrapperClassName
 * @param dropdownWrapperStyle
 * @param props
 * @constructor
 */
const InternalCustomCheckAllCheckbox = memo<CustomCheckAllCheckboxProps>(
  ({
    checkAllWrapperClassName,
    checkAllWrapperStyle,
    dropdownWrapperClassName,
    dropdownWrapperStyle,
    ...props
  }) => {
    return (
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
          <CustomCheckbox {...props} />
        </div>
      </div>
    );
  },
);

const CustomCheckAllCheckbox = InternalCustomCheckAllCheckbox as DisplayNameInternal<
  typeof InternalCustomCheckAllCheckbox
>;
CustomCheckAllCheckbox.displayName = 'CustomCheckAllCheckbox';

export default CustomCheckAllCheckbox;
