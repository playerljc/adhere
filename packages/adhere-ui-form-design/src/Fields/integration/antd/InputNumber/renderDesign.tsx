import { InputNumber } from 'antd';
import type { InputNumberProps } from 'antd';
import React from 'react';

import type { DataItemRow } from '@baifendian/adhere-ui-tablegridlayout';

import type { DesignValue } from '../../../../types';
import { LabelDesign, ValueDesign } from '../Input/renderDesign';

/**
 * renderDesign
 * @param props
 */
export function renderDesign({ value }: { value: DesignValue }): DataItemRow {
  const {
    id,
    props: { formItemProps },
  } = value;

  return {
    key: id,
    require: true,
    label: <LabelDesign formItemProps={formItemProps} />,
    value: (
      <ValueDesign value={value}>
        {({ fieldProps, style, actions }) => (
          <InputNumber
            {...(fieldProps as InputNumberProps)}
            style={style ?? {}}
            {...actions}
            value={(formItemProps as { value?: InputNumberProps['value'] })?.value}
          />
        )}
      </ValueDesign>
    ),
  };
}
