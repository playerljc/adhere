import { useMount, useUpdateEffect } from 'ahooks';
import { PickerView } from 'antd-mobile';
import { PickerColumnItem, PickerValue } from 'antd-mobile/es/components/picker-view/picker-view';
import classNames from 'classnames';
import dayjs from 'dayjs';
import React, { memo, useMemo, useState } from 'react';
import type { FC } from 'react';

import { Format, TimePickerViewProps } from './types';

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
const TimePickerView: FC<TimePickerViewProps> = ({
  className,
  style,
  format = 'HH:mm:ss',
  onChange,
  value,
  ...props
}) => {
  const columns = useMemo<PickerColumnItem[][] | undefined>(() => timeMap.get(format), [format]);

  const [stateValues, setStateValues] = useState<PickerValue[] | undefined>(undefined);

  function changeValues() {
    let hour;
    let minute;
    let second;

    let dayIns = dayjs();

    if (value) {
      dayIns = value;
    }

    hour = dayIns.hour();
    minute = dayIns.minute();
    second = dayIns.second();

    const _values = [hour, minute, second];

    const map = new Map<Format, PickerValue[]>([
      ['HH:mm:ss', _values],
      ['HH:mm', [_values[0], _values[1]]],
      ['HH', [_values[0]]],
      ['mm:ss', [_values[1], _values[2]]],
      ['ss', [_values[2]]],
    ]);

    setStateValues(map.get(format) ?? []);
  }

  useMount(() => {
    changeValues();
  });

  useUpdateEffect(() => {
    changeValues();
  }, [value]);

  function valueToDayjs(values) {
    return dayjs().hour(values[0]).minute(values[1]).second(values[2]);
  }

  return (
    <div className={classNames(selectorPrefix, className ?? '')} style={style ?? {}}>
      {stateValues && (
        <PickerView
          columns={columns ?? []}
          onChange={(_values) => {
            setStateValues(_values);

            onChange?.(valueToDayjs(_values));
          }}
          {...props}
          value={stateValues as PickerValue[]}
        />
      )}
    </div>
  );
};

export default memo(TimePickerView);
