import React, { FC } from 'react';

import { Radio } from '@baifendian/adhere-ui-anthoc';

import { RadioCustomFormItemProps } from '../../types';

/***
 * RadioCustomFormItem
 * @param dataSource
 * @param props
 * @constructor
 */
const RadioCustomFormItem: FC<RadioCustomFormItemProps> = ({ dataSource, ...props }) => {
  return (
    <Radio.Group
      {...props}
      onChange={(e) => {
        props?.onChange?.(e.target.value);
      }}
    >
      {props?.children?.(
        dataSource.map((t) => ({
          data: t,
          item: (
            <Radio key={t.value} value={t.value} disabled={t.disabled}>
              {t.label}
            </Radio>
          ),
        })),
      )}
    </Radio.Group>
  );
};

export default RadioCustomFormItem;
