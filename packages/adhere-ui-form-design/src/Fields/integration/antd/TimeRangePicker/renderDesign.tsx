import { TimePicker } from 'antd';
import dayjs from 'dayjs';
import React from 'react';

import type { DataItemRow } from '@baifendian/adhere-ui-tablegridlayout';

import { FieldWithTip, LabelDesign, ValueDesign } from '../../../../components';
import type { DesignContextType, DesignValue } from '../../../../types';
import { computeLabelValueColSpan, findDesignValueById, resolveI18nText } from '../../../../utils';

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

  const rawValue = (formItemProps as { initialValue?: [string, string] })?.initialValue;
  const valueRange: [dayjs.Dayjs, dayjs.Dayjs] | undefined = rawValue
    ? [dayjs(rawValue[0], 'HH:mm:ss'), dayjs(rawValue[1], 'HH:mm:ss')]
    : undefined;

  return {
    key: id,
    require: formItemProps?.require ?? false,
    labelColSpan,
    valueColSpan,
    label: <LabelDesign formItemProps={formItemProps} styleProps={styleProps} />,
    value: (
      <ValueDesign value={value}>
        {({ fieldProps: fp, style, actions, lang }) => (
          <FieldWithTip tip={fp.tip as any} tipStyles={styleProps?.tipStyles} lang={lang}>
            <RangePicker
              {...(fp as TimeRangePickerProps)}
              {...actions}
              placeholder={resolveI18nText(fp.placeholder as any, lang) as any}
              style={style ?? {}}
              defaultValue={valueRange}
            />
          </FieldWithTip>
        )}
      </ValueDesign>
    ),
  };
}
