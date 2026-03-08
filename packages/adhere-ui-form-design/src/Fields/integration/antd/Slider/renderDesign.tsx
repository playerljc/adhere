import { Slider } from 'antd';
import type { SliderSingleProps } from 'antd';
import type { SliderRangeProps } from 'antd/es/slider';
import React from 'react';

import type { DataItemRow } from '@baifendian/adhere-ui-tablegridlayout';

import type { DesignContextType, DesignValue } from '../../../../types';
import { findDesignValueById } from '../../../../utils';
import { LabelDesign, ValueDesign } from '../Input/renderDesign';

/**
 * renderDesign - Slider, Form binds value (number or [number, number] when range)
 * @see https://ant.design/components/slider-cn#api
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
    props: { formItemProps, styleProps, fieldProps },
  } = value;

  const { getDesignValue } = context;
  const designValue = getDesignValue() as DesignValue;
  const parent = findDesignValueById(parentId, designValue) as DesignValue;

  let labelColSpan = 1;
  let valueColSpan = 1;
  if (!!parent) {
    const parentFieldProps = parent.props.fieldProps;
    if (formItemProps?.colSpan) {
      if (parentFieldProps.layout === 'vertical') {
        labelColSpan = formItemProps.colSpan;
        valueColSpan = formItemProps.colSpan;
      } else if (parentFieldProps.layout === 'horizontal') {
        valueColSpan = formItemProps.colSpan;
      }
    }
  }

  const range = (fieldProps as { range?: boolean })?.range;
  const rawValue = (formItemProps as { value?: number | [number, number] })?.value;
  const sliderValueSingle =
    typeof rawValue === 'number' ? rawValue : Array.isArray(rawValue) ? rawValue[0] : 0;
  const sliderValueRange: [number, number] = Array.isArray(rawValue)
    ? rawValue
    : [sliderValueSingle, sliderValueSingle];

  return {
    key: id,
    require: true,
    labelColSpan,
    valueColSpan,
    label: <LabelDesign formItemProps={formItemProps} styleProps={styleProps} />,
    value: (
      <ValueDesign value={value}>
        {({ fieldProps: fp, style, actions }) =>
          range ? (
            <Slider
              {...(fp as SliderRangeProps)}
              style={style ?? {}}
              {...actions}
              range
              value={sliderValueRange}
            />
          ) : (
            <Slider
              {...(fp as SliderSingleProps)}
              style={style ?? {}}
              {...actions}
              value={sliderValueSingle}
            />
          )
        }
      </ValueDesign>
    ),
  };
}
