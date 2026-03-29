import { TimePicker } from 'antd';
import dayjs from 'dayjs';
import React from 'react';

import type { DataItemRow } from '@baifendian/adhere-ui-tablegridlayout';

import { LabelDesign, ValueDesign } from '../../../../components';
import type { DesignContextType, DesignValue } from '../../../../types';
import { computeLabelValueColSpan, findDesignValueById } from '../../../../utils';

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
        {({ fieldProps: fp, style, actions }) => (
          <RangePicker
            {...(fp as TimeRangePickerProps)}
            style={style ?? {}}
            {...actions}
            defaultValue={valueRange}
          />
        )}
      </ValueDesign>
    ),
  };
}
