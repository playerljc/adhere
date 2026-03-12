import { Checkbox } from 'antd-mobile';
import type { CheckboxProps } from 'antd-mobile/es/components/checkbox';
import React from 'react';

import type { DataItemRow } from '@baifendian/adhere-ui-tablegridlayout';

import { LabelDesign, ValueDesign } from '../../../../components';
import type { DesignValue } from '../../../../types';

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
          <Checkbox
            {...(fieldProps as CheckboxProps)}
            style={style ?? {}}
            {...actions}
            checked={(formItemProps as { value?: boolean })?.value}
          />
        )}
      </ValueDesign>
    ),
  };
}
