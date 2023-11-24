import type { CheckboxOptionType } from 'antd/es/checkbox';
import classNames from 'classnames';
import React, { memo } from 'react';

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
    ...props
  }) => (
    <div className={selectorPrefix}>
      <div
        className={classNames(`${selectorPrefix}-check-all`, checkAllWrapperClassName ?? '')}
        style={checkAllWrapperStyle ?? {}}
      >
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
      </div>

      <div
        className={classNames(`${selectorPrefix}-body`, dropdownWrapperClassName ?? '')}
        style={dropdownWrapperStyle ?? {}}
      >
        <HorizontalCheckableTagGroup {...props} mode="multiple" />
      </div>
    </div>
  ),
);

const HorizontalCheckAllCheckableTagGroup =
  InternalHorizontalCheckAllCheckableTagGroup as DisplayNameInternal<
    typeof InternalHorizontalCheckAllCheckableTagGroup
  >;
HorizontalCheckAllCheckableTagGroup.displayName = 'HorizontalCheckAllCheckableTagGroup';

export default HorizontalCheckAllCheckableTagGroup;
