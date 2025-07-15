import { PickerView, PickerViewProps } from 'antd-mobile';
import type { PickerColumnItem } from 'antd-mobile/es/components/picker-view/picker-view';
import classNames from 'classnames';
import dayjs from 'dayjs';
import React, { memo, useMemo, useRef, useCallback } from 'react';

import ConfigProvider from '@baifendian/adhere-ui-configprovider';

import type { Format, TimePickerViewProps } from './types';

const selectorPrefix = 'adhere-mobile-ui-time-picker-view';

const { useTheme } = ConfigProvider;

/**
 * 时间列数据生成器
 * 生成小时、分钟、秒的选项数据
 */
const timeColumns: PickerColumnItem[][] = [
  // 小时列 (0-23)
  Array.from({ length: 24 }, (_, index) => ({
    label: `${index.toString().padStart(2, '0')}`,
    value: index,
  })),
  // 分钟列 (0-59)
  Array.from({ length: 60 }, (_, index) => ({
    label: `${index.toString().padStart(2, '0')}`,
    value: index,
  })),
  // 秒列 (0-59)
  Array.from({ length: 60 }, (_, index) => ({
    label: `${index.toString().padStart(2, '0')}`,
    value: index,
  })),
];

/**
 * 时间格式到列数据的映射
 * 根据不同的时间格式返回对应的列配置
 */
const timeMap = new Map<Format, PickerColumnItem[][]>([
  ['HH:mm:ss', timeColumns],
  ['HH:mm', [timeColumns[0], timeColumns[1]]],
  ['HH', [timeColumns[0]]],
  ['mm:ss', [timeColumns[1], timeColumns[2]]],
  ['ss', [timeColumns[2]]],
]);

/**
 * 将Date对象转换为PickerView的值格式
 * @param date - 要转换的日期对象
 * @param format - 时间格式
 * @returns PickerView的值数组，如果date为空则返回undefined
 */
function dataToPickerViewValue(
  date: Date | undefined | null,
  format: Format,
): PickerViewProps['value'] | undefined {
  if (!date) return undefined;

  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();

  const valueMap = new Map<Format, PickerViewProps['value']>([
    ['HH:mm:ss', [hour, minute, second]],
    ['HH:mm', [hour, minute]],
    ['HH', [hour]],
    ['mm:ss', [minute, second]],
    ['ss', [second]],
  ]);

  return valueMap.get(format);
}

/**
 * 将PickerView的值格式转换为Date对象
 * @param values - PickerView的值数组
 * @param format - 时间格式
 * @returns 转换后的Date对象
 */
function pickerViewValueToData(values: PickerViewProps['value'], format: Format): Date {
  const dateMap = new Map<Format, () => Date>([
    [
      'HH:mm:ss',
      () => dayjs()
        .hour((values?.[0] as number) ?? 0)
        .minute((values?.[1] as number) ?? 0)
        .second((values?.[2] as number) ?? 0)
        .toDate(),
    ],
    [
      'HH:mm',
      () => dayjs()
        .hour((values?.[0] as number) ?? 0)
        .minute((values?.[1] as number) ?? 0)
        .toDate(),
    ],
    [
      'HH',
      () => dayjs()
        .hour((values?.[0] as number) ?? 0)
        .toDate(),
    ],
    [
      'mm:ss',
      () => dayjs()
        .minute((values?.[0] as number) ?? 0)
        .second((values?.[1] as number) ?? 0)
        .toDate(),
    ],
    [
      'ss',
      () => dayjs()
        .second((values?.[0] as number) ?? 0)
        .toDate(),
    ],
  ]);

  const dateGenerator = dateMap.get(format);
  return dateGenerator ? dateGenerator() : new Date();
}

/**
 * TimePickerView 时间选择器组件
 * 
 * 基于 antd-mobile 的 PickerView 组件封装的时间选择器，
 * 支持多种时间格式的选择，包括时:分:秒、时:分、时、分:秒、秒等格式。
 * 
 * @example
 * ```tsx
 * import TimePickerView from '@baifendian/adhere-mobile-ui-time-picker-view';
 * 
 * function App() {
 *   const [time, setTime] = useState(new Date());
 * 
 *   return (
 *     <TimePickerView
 *       value={time}
 *       onChange={setTime}
 *       format="HH:mm:ss"
 *     />
 *   );
 * }
 * ```
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
    const wrapperRef = useRef<HTMLDivElement>(null);

    // 使用主题配置
    useTheme<HTMLDivElement>({
      elRef: wrapperRef,
      group: 'mobile',
      displayName: 'TimePickerView',
    });

    // 计算默认值
    const targetDefaultValue = useMemo<PickerViewProps['defaultValue']>(
      () => dataToPickerViewValue(defaultValue ?? new Date(), format),
      [defaultValue, format],
    );

    // 计算当前值
    const targetValue = useMemo<PickerViewProps['value']>(
      () => dataToPickerViewValue(value, format),
      [value, format],
    );

    // 获取列配置
    const columns = useMemo<PickerColumnItem[][]>(
      () => timeMap.get(format) ?? [],
      [format],
    );

    // 处理值变化
    const handleChange = useCallback(
      (values: PickerViewProps['value']) => {
        onChange?.(pickerViewValueToData(values, format));
      },
      [onChange, format],
    );

    return (
      <div
        ref={wrapperRef}
        className={classNames(selectorPrefix, className)}
        style={style}
      >
        <PickerView
          {...pickerViewProps}
          columns={columns}
          defaultValue={targetDefaultValue}
          value={targetValue}
          onChange={handleChange}
        />
      </div>
    );
  },
);

TimePickerView.displayName = 'TimePickerView';

export default TimePickerView;
