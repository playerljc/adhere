import { Switch } from 'antd';
import type { SwitchProps } from 'antd';
import React from 'react';

import type { DataItemRow } from '@baifendian/adhere-ui-tablegridlayout';

import type { DesignValue } from '../../../../types';
import { LabelDesign, ValueDesign } from '../Input/renderDesign';

/**
 * renderDesign - single Switch, Form uses valuePropName="checked"
 * @see https://ant.design/components/switch-cn#api
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
          <Switch
            {...(fieldProps as SwitchProps)}
            style={style ?? {}}
            {...actions}
            checked={(formItemProps as { value?: boolean })?.value}
          />
        )}
      </ValueDesign>
    ),
  };
}
