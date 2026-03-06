import { Radio } from 'antd-mobile';
import type { RadioProps } from 'antd-mobile/es/components/radio';
import React from 'react';

import type { DataItemRow } from '@baifendian/adhere-ui-tablegridlayout';

import type { DesignValue } from '../../../../types';
import { LabelDesign, ValueDesign } from '../Input/renderDesign';

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
          <Radio
            {...(fieldProps as RadioProps)}
            style={style ?? {}}
            {...actions}
            checked={(formItemProps as { value?: boolean })?.value}
          />
        )}
      </ValueDesign>
    ),
  };
}
