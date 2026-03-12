import { Input } from 'antd-mobile';
import type { InputProps } from 'antd-mobile';
import React from 'react';

import type { DataItemRow } from '@baifendian/adhere-ui-tablegridlayout';

import { LabelDesign, ValueDesign } from '../../../../components';
import type { DesignValue } from '../../../../types';

/**
 * Mobile fallback: use Input (antd-mobile has no InputNumber), inputMode="decimal"
 */
export function renderDesignToMobile({ value }: { value: DesignValue }): DataItemRow {
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
          <Input {...(fieldProps as InputProps)} style={style ?? {}} {...actions} type="number" />
        )}
      </ValueDesign>
    ),
  };
}
