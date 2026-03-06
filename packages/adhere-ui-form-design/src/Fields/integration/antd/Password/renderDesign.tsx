import { Input } from 'antd';
import type { PasswordProps } from 'antd/es/input';
import React from 'react';

import type { DataItemRow } from '@baifendian/adhere-ui-tablegridlayout';

import type { DesignValue } from '../../../../types';
import { LabelDesign, ValueDesign } from '../Input/renderDesign';

const { Password } = Input;

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
          <Password
            {...(fieldProps as PasswordProps)}
            style={style ?? {}}
            {...actions}
            value={(formItemProps as PasswordProps)?.value}
          />
        )}
      </ValueDesign>
    ),
  };
}
