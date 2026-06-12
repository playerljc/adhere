import { TimePicker } from 'antd';
import type { TimePickerProps } from 'antd';
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

/**
 * renderDesign - TimePicker design mode (desktop)
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

  const initialValue = (formItemProps as { initialValue?: string })?.initialValue;
  const defaultValueDayjs = initialValue ? dayjs(initialValue, 'HH:mm:ss') : undefined;

  return {
    key: id,
    require: formItemProps?.require ?? false,
    labelColSpan,
    valueColSpan,
    label: <LabelDesign formItemProps={formItemProps} styleProps={styleProps} />,
    value: (
      <ValueDesign value={value}>
        {({ fieldProps: fp, style, actions, lang, value, onChange, checked, targetKeys }) => {
          const timeControlProps =
            typeof onChange === 'function'
              ? {
                  ...getDesignFormControlProps(formItemProps, { value, onChange, checked, targetKeys }),
                  value: value ? dayjs(value as string, 'HH:mm:ss') : null,
                }
              : { defaultValue: defaultValueDayjs };

          return (
            <FieldWithTip tip={fp.tip as any} tipStyles={styleProps?.tipStyles} lang={lang}>
              <TimePicker
                {...(fp as TimePickerProps)}
                {...actions}
                {...timeControlProps}
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
