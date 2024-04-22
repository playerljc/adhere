import { CheckListValue } from 'antd-mobile/es/components/check-list';
import React, { memo, useMemo } from 'react';

import ListCheckAll from '../ListCheckAll';
import type { CheckAllCheckboxProps, DisplayNameInternal } from '../types';
import CheckboxGroup from './CheckboxGroup';

const selectorPrefix = 'adhere-mobile-ui-ant-hoc-check-all-check-box';

/**
 * CheckAllCheckBox
 * @description CheckAllCheckBox
 * @constructor
 */
const InternalCheckAllCheckBox = memo<CheckAllCheckboxProps>(
  ({
    checkAllWrapperClassName,
    checkAllWrapperStyle,
    checkAllBodyWrapperClassName,
    checkAllBodyWrapperStyle,
    renderCheckAll,
    checkAllLabel,
    // onCheckAllChange,
    ...checkboxGroupProps
  }) => {
    const childrenOrigin = useMemo(
      () => <CheckboxGroup {...checkboxGroupProps} />,
      [checkboxGroupProps],
    );

    return (
      <ListCheckAll
        {...{
          checkAllWrapperClassName,
          checkAllWrapperStyle,
          checkAllBodyWrapperClassName,
          checkAllBodyWrapperStyle,
          renderCheckAll,
          checkAllLabel,
          onCheckAllChange: checkboxGroupProps.onChange,
          value: checkboxGroupProps.value ?? [],
          options: checkboxGroupProps?.options?.map((t) => t.value as CheckListValue) ?? [],
          selectorPrefix,
          childrenOrigin,
        }}
      />
    );
  },
);

const CheckAllCheckBox = InternalCheckAllCheckBox as DisplayNameInternal<
  typeof InternalCheckAllCheckBox
>;
CheckAllCheckBox.displayName = 'CheckAllCheckBox';

export default CheckAllCheckBox;
