import { Slider } from 'antd';
import type { SliderSingleProps } from 'antd';
import type { SliderRangeProps } from 'antd/es/slider';
import React from 'react';

import type { DataItemRow } from '@baifendian/adhere-ui-tablegridlayout';

import { FieldWithTip, LabelDesign, ValueDesign } from '../../../../components';
import type { DesignContextType, DesignValue } from '../../../../types';
import { computeLabelValueColSpan, findDesignValueById, getDesignFormControlProps } from '../../../../utils';

/**
 * renderDesign - Slider, Form binds value (number or [number, number] when range)
 * @see https://ant.design/components/slider-cn#api
 */
export function renderDesign({
  parentId,
  value,
  context,
}: {
  parentId?: string;
  value: DesignValue;
  context: DesignContextType;
}): DataItemRow {
  const {
    id,
    props: { formItemProps, styleProps, fieldProps },
  } = value;

  const { getDesignValue } = context;
  const designValue = getDesignValue() as DesignValue;
  const parent = findDesignValueById(parentId as string, designValue) as DesignValue;

  const { labelColSpan, valueColSpan } = computeLabelValueColSpan(parent, formItemProps);

  const range = (fieldProps as { range?: boolean })?.range;

  return {
    key: id,
    require: formItemProps?.require ?? false,
    labelColSpan,
    valueColSpan,
    label: <LabelDesign formItemProps={formItemProps} styleProps={styleProps} />,
    value: (
      <ValueDesign value={value}>
        {({ fieldProps: fp, style, actions, lang, value, onChange, checked, targetKeys }) => (
          <FieldWithTip tip={fp.tip as any} tipStyles={styleProps?.tipStyles} lang={lang}>
            {range ? (
              <Slider
                {...(fp as SliderRangeProps)}
                style={style ?? {}}
                {...actions}
                {...getDesignFormControlProps(formItemProps, { value, onChange, checked, targetKeys })}
                range
              />
            ) : (
              <Slider
                {...(fp as SliderSingleProps)}
                style={style ?? {}}
                {...actions}
                {...getDesignFormControlProps(formItemProps, { value, onChange, checked, targetKeys })}
              />
            )}
          </FieldWithTip>
        )}
      </ValueDesign>
    ),
  };
}
