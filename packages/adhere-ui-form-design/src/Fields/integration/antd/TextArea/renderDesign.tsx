import { Input } from 'antd';
import type { TextAreaProps } from 'antd/es/input';
import React from 'react';

import type { DataItemRow } from '@baifendian/adhere-ui-tablegridlayout';

import type { DesignContextType, DesignValue } from '../../../../types';
import { findDesignValueById } from '../../../../utils';
import { LabelDesign, ValueDesign } from '../Input/renderDesign';

const { TextArea } = Input;

/**
 * renderDesign
 * @param props
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
          <TextArea
            {...(fieldProps as TextAreaProps)}
            style={style ?? {}}
            {...actions}
            value={(formItemProps as TextAreaProps)?.value}
          />
        )}
      </ValueDesign>
    ),
  };
}
