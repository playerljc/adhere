import { Input, type InputProps } from 'antd-mobile';
import React from 'react';

import type { DataItemRow } from '@baifendian/adhere-ui-tablegridlayout';

import type { DesignValue } from '../../../../types';
import { LabelDesign, ValueDesign } from './renderDesign';

/**
 * renderDesignToMobile
 * @param props
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
          <Input {...(fieldProps as InputProps)} style={style ?? {}} {...actions} />
        )}
      </ValueDesign>
    ),
  };
}
