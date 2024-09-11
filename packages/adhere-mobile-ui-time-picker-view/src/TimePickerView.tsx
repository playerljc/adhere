import { PickerView, PickerViewProps } from 'antd-mobile';
import type { PickerColumnItem } from 'antd-mobile/es/components/picker-view/picker-view';
import classNames from 'classnames';
import dayjs from 'dayjs';
import React, { memo, useMemo } from 'react';

import type { Format, TimePickerViewProps } from './types';

const selectorPrefix = 'adhere-mobile-ui-time-picker-view';

const timeColumns = [
  Array.from({ length: 24 })
    .fill(0)
    .map((t, index) => ({ label: `${index < 10 ? '0' : ''}${index}`, value: index })),
  Array.from({ length: 60 })
    .fill(0)
    .map((t, index) => ({ label: `${index < 10 ? '0' : ''}${index}`, value: index })),
  Array.from({ length: 60 })
    .fill(0)
    .map((t, index) => ({ label: `${index < 10 ? '0' : ''}${index}`, value: index })),
];

const timeMap = new Map<Format, PickerColumnItem[][] | undefined>([
  ['HH:mm:ss', timeColumns],
  ['HH:mm', [timeColumns[0], timeColumns[1]]],
  ['HH', [timeColumns[0]]],
  ['mm:ss', [timeColumns[1], timeColumns[2]]],
  ['ss', [timeColumns[2]]],
]);

/**
 * TimePickerView
 * @param className
 * @param style
 * @param format
 * @param onChange
 * @param value
 * @param props
 */
const TimePickerView = memo<TimePickerViewProps>(
  ({
    className,
    style,
    defaultValue,
    value,
    onChange,
    format = 'HH:mm:ss',
    ...pickerViewProps
  }) => {
    function dataToPickerViewValue(
      date: Date | undefined | null,
    ): PickerViewProps['value'] | undefined {
      if (!date) return undefined;

      const hour = date.getHours();
      const minute = date.getMinutes();
      const second = date.getSeconds();

      const map = new Map<Format, PickerViewProps['value']>([
        ['HH:mm:ss', [hour, minute, second]],
        ['HH:mm', [hour, minute]],
        ['HH', [hour]],
        ['mm:ss', [minute, second]],
        ['ss', [second]],
      ]);

      return map.get(format);
    }

    function pickerViewValueToData(values: PickerViewProps['value']): Date {
      const map = new Map<Format, Date>([
        [
          'HH:mm:ss',
          dayjs()
            .hour(values?.[0] as number)
            .minute(values?.[1] as number)
            .second(values?.[2] as number)
            .toDate(),
        ],
        [
          'HH:mm',
          dayjs()
            .hour(values?.[0] as number)
            .minute(values?.[1] as number)
            .toDate(),
        ],
        [
          'HH',
          dayjs()
            .hour(values?.[0] as number)
            .toDate(),
        ],
        [
          'mm:ss',
          dayjs()
            .minute(values?.[1] as number)
            .second(values?.[2] as number)
            .toDate(),
        ],
        [
          'ss',
          dayjs()
            .second(values?.[2] as number)
            .toDate(),
        ],
      ]);

      return map.get(format) as Date;
    }

    const targetDefaultValue = useMemo<PickerViewProps['defaultValue']>(
      () => dataToPickerViewValue(defaultValue ?? new Date()),
      [defaultValue],
    );

    const targetValue = useMemo<PickerViewProps['value']>(
      () => dataToPickerViewValue(value),
      [value],
    );

    const columns = useMemo<PickerColumnItem[][] | undefined>(() => timeMap.get(format), [format]);

    return (
      <div className={classNames(selectorPrefix, className ?? '')} style={style ?? {}}>
        <PickerView
          {...pickerViewProps}
          columns={columns ?? []}
          defaultValue={targetDefaultValue}
          value={targetValue}
          onChange={(_values) => {
            onChange?.(pickerViewValueToData(_values));
          }}
        />
      </div>
    );
  },
);

TimePickerView.displayName = 'TimePickerView';

export default TimePickerView;
