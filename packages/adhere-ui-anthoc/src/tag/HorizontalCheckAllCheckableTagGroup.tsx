import type { CheckboxOptionType } from 'antd/es/checkbox';
import classNames from 'classnames';
import React, { memo } from 'react';
import type { FC } from 'react';

import CheckAllWrapper from '../CheckAllWrapper';
import type { HorizontalCheckableTagGroupProps } from '../types';
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
const HorizontalCheckAllCheckableTagGroup: FC<HorizontalCheckableTagGroupProps> = ({
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
        onChange={props.onChange}
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
);

export default memo(HorizontalCheckAllCheckableTagGroup);
