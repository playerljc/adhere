import React, { FC } from 'react';

import { Checkbox } from '../../AntFormItemNormalize';
import { CheckBoxHorizontalFormItemProps } from '../../types';

/**
 * CheckBoxHorizontalFormItem
 * @param dataSource
 * @param props
 * @constructor
 */
const CheckBoxHorizontalFormItem: FC<CheckBoxHorizontalFormItemProps> = ({
  dataSource,
  ...props
}) => {
  return (
    <Checkbox.Group
      options={dataSource}
      {...props}
      onChange={(values) => {
        props?.onChange?.(values);
      }}
    />
  );
};

export default CheckBoxHorizontalFormItem;
