import { Input } from 'antd';
import type { OTPProps } from 'antd/es/input/OTP';
import React from 'react';

import type { DataItemRow } from '@baifendian/adhere-ui-tablegridlayout';

import type { DesignValue } from '../../../../types';
import { LabelDesign, ValueDesign } from '../Input/renderDesign';

const { OTP } = Input;

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
          <OTP
            {...(fieldProps as OTPProps)}
            style={style ?? {}}
            {...actions}
            value={(formItemProps as OTPProps)?.value}
          />
        )}
      </ValueDesign>
    ),
  };
}
