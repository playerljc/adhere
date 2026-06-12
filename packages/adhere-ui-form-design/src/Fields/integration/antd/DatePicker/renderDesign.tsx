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

export type DatePickerFieldProps = {
  isBirthday?: boolean;
  dateBoundMode?: 'none' | 'before' | 'after';
  dateBoundBaseValue?: string;
  dateBoundIncludeBase?: boolean;
};

function getDisabledDate(
  fieldProps: DatePickerProps & DatePickerFieldProps,
): DatePickerProps['disabledDate'] {
  const { isBirthday, dateBoundMode, dateBoundBaseValue, dateBoundIncludeBase } = fieldProps;
  if (isBirthday) {
    return (current) =>
      !!current && (current.isSame(dayjs(), 'day') || current.isAfter(dayjs(), 'day'));
  }
  if (dateBoundMode === 'before' || dateBoundMode === 'after') {
    const baseValue = dateBoundBaseValue ? dayjs(dateBoundBaseValue) : dayjs();
    const includeBase = dateBoundIncludeBase !== false;
    return (current) => {
      if (!current) return false;
      if (dateBoundMode === 'before') {
        if (includeBase)
          return current.isAfter(baseValue, 'day') || current.isSame(baseValue, 'day');
        return current.isAfter(baseValue, 'day');
      }
      if (includeBase)
        return current.isBefore(baseValue, 'day') || current.isSame(baseValue, 'day');
      return current.isBefore(baseValue, 'day');
    };
  }
  return undefined;
}

/**
 * renderDesign - DatePicker design mode (desktop)
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

  const fieldProps = value.props?.fieldProps as
    | (DatePickerProps & DatePickerFieldProps)
    | undefined;
  const disabledDate = getDisabledDate(fieldProps ?? {});

  return {
    key: id,
    require: formItemProps?.require ?? false,
    labelColSpan,
    valueColSpan,
    label: <LabelDesign formItemProps={formItemProps} styleProps={styleProps} />,
    value: (
      <ValueDesign value={value}>
        {({ fieldProps: fp, style, actions, lang, value, onChange, checked, targetKeys }) => {
          const dateControlProps =
            typeof onChange === 'function'
              ? {
                  ...getDesignFormControlProps(formItemProps, { value, onChange, checked, targetKeys }),
                  value: value ? dayjs(value as string) : null,
                }
              : {
                  defaultValue: (formItemProps as { initialValue?: string })?.initialValue
                    ? dayjs((formItemProps as { initialValue?: string }).initialValue as string)
                    : undefined,
                };

          return (
            <FieldWithTip tip={fp.tip as any} tipStyles={styleProps?.tipStyles} lang={lang}>
              <DatePicker
                {...(fp as DatePickerProps)}
                {...actions}
                {...dateControlProps}
                placeholder={resolveI18nText(fp.placeholder as any, lang) as any}
                disabledDate={disabledDate}
                style={style ?? {}}
              />
            </FieldWithTip>
          );
        }}
      </ValueDesign>
    ),
  };
}
