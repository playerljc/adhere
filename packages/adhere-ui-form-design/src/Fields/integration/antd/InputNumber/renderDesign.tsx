import { InputNumber } from 'antd';
import type { InputNumberProps } from 'antd';
import React from 'react';

import type { DataItemRow } from '@baifendian/adhere-ui-tablegridlayout';
import Util from '@baifendian/adhere-util';

import { FieldWithTip, LabelDesign, ValueDesign } from '../../../../components';
import type { DesignContextType, DesignValue } from '../../../../types';
import { computeLabelValueColSpan, findDesignValueById, resolveI18nText } from '../../../../utils';

export type InputNumberDesignProps = InputNumberProps & {
  thousands: 'French' | 'German' | 'US' | 'International';
};

/**
 * renderDesign
 * @param props
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
    props: { formItemProps, styleProps },
  } = value;

  const { getDesignValue } = context;
  const designValue = getDesignValue() as DesignValue;
  const parent = findDesignValueById(parentId as string, designValue) as DesignValue;

  const { labelColSpan, valueColSpan } = computeLabelValueColSpan(parent, formItemProps);

  return {
    key: id,
    require: formItemProps?.require ?? false,
    labelColSpan,
    valueColSpan,
    label: <LabelDesign formItemProps={formItemProps} styleProps={styleProps} />,
    value: (
      <ValueDesign value={value}>
        {({ fieldProps, style, actions, lang }) => {
          const { thousands, ...inputNumberProps } = fieldProps as InputNumberDesignProps;

          let thousandsProps = {};

          if (thousands === 'French') {
            thousandsProps = {
              formatter: (value) => Util.FrenchNumberFormatter(value ?? '', 0),
              parser: (value) => Util.FrenchNumberParse(value ?? ''),
            };
          } else if (thousands === 'US') {
            thousandsProps = {
              formatter: (value) => Util.USNumberFormatter(value ?? '', 0),
              parser: (value) => Util.USNumberParse(value ?? ''),
            };
          } else if (thousands === 'German') {
            thousandsProps = {
              formatter: (value) => Util.GermanNumberFormatter(value ?? '', 0),
              parser: (value) => Util.GermanNumberParse(value ?? ''),
            };
          } else if (thousands === 'International') {
            thousandsProps = {
              formatter: (value) => Util.InternationalNumberFormatter(value ?? '', 0),
              parser: (value) => Util.InternationalNumberParse(value ?? ''),
            };
          }

          return (
            <FieldWithTip tip={fieldProps.tip as any} tipStyles={styleProps?.tipStyles} lang={lang}>
              <InputNumber
                {...(inputNumberProps as InputNumberProps)}
                {...actions}
                placeholder={resolveI18nText(fieldProps.placeholder as any, lang) as any}
                style={style ?? {}}
                defaultValue={
                  (formItemProps as { initialValue?: InputNumberProps['defaultValue'] })?.initialValue
                }
                {...thousandsProps}
              />
            </FieldWithTip>
          );
        }}
      </ValueDesign>
    ),
  };
}
