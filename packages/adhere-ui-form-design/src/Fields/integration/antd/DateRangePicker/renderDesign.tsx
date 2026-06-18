import { DatePicker } from 'antd';
import type { DatePickerProps } from 'antd';
import dayjs from 'dayjs';
import React from 'react';

import type { DataItemRow } from '@baifendian/adhere-ui-tablegridlayout';

import { FieldWithTip, LabelDesign, ValueDesign } from '../../../../components';
import type { DesignContextType, DesignValue } from '../../../../types';
import {
  computeLabelValueColSpan,
  findDesignValueById,
  getDesignFormControlProps,
  resolveI18nText,
} from '../../../../utils';

const { RangePicker } = DatePicker;
type RangePickerProps = React.ComponentProps<typeof RangePicker>;

/**
 * renderDesign - DateRangePicker design mode (desktop)
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

  const initialRange = (formItemProps as { initialValue?: [string, string] })?.initialValue;
  const defaultValueRange: [dayjs.Dayjs, dayjs.Dayjs] | undefined = initialRange
    ? [dayjs(initialRange[0]), dayjs(initialRange[1])]
    : undefined;

  return {
    key: id,
    require: formItemProps?.require ?? false,
    labelColSpan,
    valueColSpan,
    label: <LabelDesign formItemProps={formItemProps} styleProps={styleProps} />,
    value: (
      <ValueDesign value={value}>
        {({ fieldProps: fp, style, actions, lang, value, onChange, checked, targetKeys }) => {
          const rangeControlProps =
            typeof onChange === 'function'
              ? {
                  ...getDesignFormControlProps(formItemProps, { value, onChange, checked, targetKeys }),
                  value:
                    Array.isArray(value) && value[0] && value[1]
                      ? ([dayjs(value[0] as string), dayjs(value[1] as string)] as [
                          dayjs.Dayjs,
                          dayjs.Dayjs,
                        ])
                      : null,
                }
              : { defaultValue: defaultValueRange };

          return (
            <FieldWithTip tip={fp.tip as any} tipStyles={styleProps?.tipStyles} lang={lang}>
              <RangePicker
                {...(fp as RangePickerProps)}
                {...actions}
                {...rangeControlProps}
                style={style ?? {}}
                placeholder={resolveI18nText(fp.placeholder as any, lang) as any}
              />
            </FieldWithTip>
          );
        }}
      </ValueDesign>
    ),
  };
}
