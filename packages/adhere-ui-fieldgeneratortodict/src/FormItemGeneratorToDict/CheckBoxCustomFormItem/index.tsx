import React, { FC } from 'react';

import { Checkbox } from '@baifendian/adhere-ui-anthoc';

import { CheckBoxCustomFormItemProps } from '../../types';

/**
 * CheckBoxCustomFormItem
 * @param dataSource
 * @param props
 * @constructor
 */
const CheckBoxCustomFormItem: FC<CheckBoxCustomFormItemProps> = ({ dataSource, ...props }) => {
  return (
    <Checkbox.Group
      {...props}
      onChange={(values) => {
        props?.onChange?.(values);
      }}
    >
      {props?.children?.(
        dataSource.map((t) => ({
          data: t,
          item: (
            <Checkbox key={t.value} value={t.value} disabled={t.disabled}>
              {t.label}
            </Checkbox>
          ),
        })),
      )}
    </Checkbox.Group>
  );
};

export default CheckBoxCustomFormItem;
