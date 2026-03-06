import { Rate } from 'antd';
import type { RateProps } from 'antd';
import React from 'react';

import type { DataItemRow } from '@baifendian/adhere-ui-tablegridlayout';

import type { DesignValue } from '../../../../types';
import { LabelDesign, ValueDesign } from '../Input/renderDesign';

/**
 * renderDesign - Rate, Form binds value (number)
 * @see https://ant.design/components/rate-cn#api
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
          <Rate
            {...(fieldProps as RateProps)}
            style={style ?? {}}
            {...actions}
            value={(formItemProps as { value?: number })?.value}
          />
        )}
      </ValueDesign>
    ),
  };
}
