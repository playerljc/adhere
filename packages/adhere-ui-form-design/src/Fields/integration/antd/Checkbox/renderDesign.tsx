import { Checkbox } from 'antd';
import type { CheckboxProps } from 'antd';
import React from 'react';

import type { DataItemRow } from '@baifendian/adhere-ui-tablegridlayout';

import type { DesignContextType, DesignValue } from '../../../../types';
import { findDesignValueById } from '../../../../utils';
import { LabelDesign, ValueDesign } from '../Input/renderDesign';

/**
 * renderDesign - single Checkbox (no Group), Form uses valuePropName="checked"
 * @see https://ant.design/components/checkbox-cn#api
 */
export function renderDesign({
  parentId,
  value,
  context,
}: {
  parentId: string;
  value: DesignValue;
  context: DesignContextType;
}): DataItemRow {
  const {
    id,
    props: { formItemProps, styleProps },
  } = value;

  const { getDesignValue } = context;
  const designValue = getDesignValue() as DesignValue;
  const parent = findDesignValueById(parentId, designValue) as DesignValue;

  let labelColSpan = 1;
  let valueColSpan = 1;
  if (!!parent) {
    const fieldProps = parent.props.fieldProps;
    if (formItemProps?.colSpan) {
      if (fieldProps.layout === 'vertical') {
        labelColSpan = formItemProps.colSpan;
        valueColSpan = formItemProps.colSpan;
      } else if (fieldProps.layout === 'horizontal') {
        valueColSpan = formItemProps.colSpan;
      }
    }
  }

  return {
    key: id,
    require: true,
    labelColSpan,
    valueColSpan,
    label: <LabelDesign formItemProps={formItemProps} styleProps={styleProps} />,
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
