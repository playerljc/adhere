import { Slider } from 'antd';
import type { SliderSingleProps } from 'antd';
import type { SliderRangeProps } from 'antd/es/slider';
import React from 'react';

import type { DataItemRow } from '@baifendian/adhere-ui-tablegridlayout';

import type { DesignValue } from '../../../../types';
import { LabelDesign, ValueDesign } from '../Input/renderDesign';

/**
 * renderDesign - Slider, Form binds value (number or [number, number] when range)
 * @see https://ant.design/components/slider-cn#api
 */
export function renderDesign({ value }: { value: DesignValue }): DataItemRow {
  const {
    id,
    props: { formItemProps, fieldProps },
  } = value;
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
    label: <LabelDesign formItemProps={formItemProps} />,
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
