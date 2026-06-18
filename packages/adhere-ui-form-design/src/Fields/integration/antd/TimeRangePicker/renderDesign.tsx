import { TimePicker } from 'antd';
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

const { RangePicker } = TimePicker;
type TimeRangePickerProps = React.ComponentProps<typeof RangePicker>;

/**
 * renderDesign - TimeRangePicker design mode (desktop)
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
    ? [dayjs(initialRange[0], 'HH:mm:ss'), dayjs(initialRange[1], 'HH:mm:ss')]
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
                      ? ([
                          dayjs(value[0] as string, 'HH:mm:ss'),
                          dayjs(value[1] as string, 'HH:mm:ss'),
                        ] as [dayjs.Dayjs, dayjs.Dayjs])
                      : null,
                }
              : { defaultValue: defaultValueRange };

          return (
            <FieldWithTip tip={fp.tip as any} tipStyles={styleProps?.tipStyles} lang={lang}>
              <RangePicker
                {...(fp as TimeRangePickerProps)}
                {...actions}
                {...rangeControlProps}
                placeholder={resolveI18nText(fp.placeholder as any, lang) as any}
                style={style ?? {}}
              />
            </FieldWithTip>
          );
        }}
      </ValueDesign>
    ),
  };
}
