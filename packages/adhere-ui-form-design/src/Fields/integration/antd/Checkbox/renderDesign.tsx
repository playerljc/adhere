import { Checkbox } from 'antd';
import type { CheckboxProps } from 'antd';
import React from 'react';

import type { DataItemRow } from '@baifendian/adhere-ui-tablegridlayout';

import type { DesignValue } from '../../../../types';
import { LabelDesign, ValueDesign } from '../Input/renderDesign';

/**
 * renderDesign - single Checkbox (no Group), Form uses valuePropName="checked"
 * @see https://ant.design/components/checkbox-cn#api
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
