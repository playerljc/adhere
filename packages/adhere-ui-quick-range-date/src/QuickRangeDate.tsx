import { useUpdateEffect } from 'ahooks';
import { DatePicker, Radio } from 'antd';
import classNames from 'classnames';
import dayjs, { UnitType } from 'dayjs';
import quarterOfYear from 'dayjs/plugin/quarterOfYear';
import React, { type RefObject, forwardRef, memo, useMemo, useRef, useState } from 'react';

import ConfigProvider from '@baifendian/adhere-ui-configprovider';
import Intl from '@baifendian/adhere-util-intl';

import type {
  ConfigItem,
  DateType,
  DateValue,
  QuickRangeDateComponent,
  QuickRangeDateProps,
} from './types';

dayjs.extend(quarterOfYear);

const selectorPrefix = 'adhere-ui-quick-range-date';

const { useTheme } = ConfigProvider;

/**
 * 日期类型对应的标签生成函数映射
 */
const labelByTypeMap = new Map<DateType, (value?: number) => string>([
  ['a-d', (value) => Intl.getHTML('past_days', { value })],
  ['a-w', (value) => Intl.getHTML('past_weeks', { value })],
  ['a-M', (value) => Intl.getHTML('past_months', { value })],
  ['a-Q', (value) => Intl.getHTML('past_quarters', { value })],
  ['a-y', (value) => Intl.getHTML('past_years', { value })],
  ['a-h', (value) => Intl.getHTML('past_hours', { value })],
  ['a-m', (value) => Intl.getHTML('past_minutes', { value })],
  ['a-s', (value) => Intl.getHTML('past_seconds', { value })],
  ['a-ms', (value) => Intl.getHTML('past_milliseconds', { value })],
  ['b-d', (value) => Intl.getHTML('future_days', { value })],
  ['b-w', (value) => Intl.getHTML('future_weeks', { value })],
  ['b-M', (value) => Intl.getHTML('future_months', { value })],
  ['b-Q', (value) => Intl.getHTML('future_quarters', { value })],
  ['b-y', (value) => Intl.getHTML('future_years', { value })],
  ['b-h', (value) => Intl.getHTML('future_hours', { value })],
  ['b-m', (value) => Intl.getHTML('future_minutes', { value })],
  ['b-s', (value) => Intl.getHTML('future_seconds', { value })],
  ['b-ms', (value) => Intl.getHTML('future_milliseconds', { value })],
  ['custom', () => Intl.get('custom')],
]);

/**
 * 判断是否为自定义类型
 * @param type - 日期类型
 * @returns 是否为自定义类型
 */
export const isCustomByType = (type?: DateType): boolean => {
  return type === 'custom';
};

/**
 * 同步日期值，确保 start 和 end 字段存在
 * @param dateValue - 日期值对象
 * @returns 同步后的日期值对象，如果输入为空则返回 undefined
 */
export function sync(dateValue: DateValue | undefined): DateValue | undefined {
  if (!dateValue) return undefined;

  const { type, value } = dateValue;

  // 如果是自定义类型或已有 start/end 字段，直接返回
  if (isCustomByType(type) || (dateValue?.start && dateValue?.end)) {
    return dateValue;
  }

  // 根据类型和值计算时间范围
  const dataRange = getDataRangeByValue(type, value as number);

  return {
    ...dateValue,
    start: dataRange[0],
    end: dataRange[1],
  };
}

/**
 * 将日期值转换为字符串
 * @param dateValue - 日期值对象
 * @returns 字符串表示，如果输入为空则返回 undefined
 */
export const stringValue = (dateValue: DateValue | undefined): string | undefined => {
  if (!dateValue) return undefined;

  const { type, value } = dateValue;

  if (isCustomByType(type)) return type;

  return [type, value].toString();
};

/**
 * 将数字时间戳转换为 dayjs 对象数组
 * @param dateValue - 时间戳数组 [start, end]
 * @returns dayjs 对象数组，如果输入无效则返回 null
 */
export const numberToDayjs = (
  dateValue: [number | undefined, number | undefined],
): [dayjs.Dayjs, dayjs.Dayjs] | null => {
  if (!dateValue.filter((t) => !!t).length) return null;

  return dateValue.map((_v) => dayjs(_v as number)) as [dayjs.Dayjs, dayjs.Dayjs];
};

/**
 * 将 dayjs 对象数组转换为数字时间戳数组
 * @param _value - dayjs 对象数组或空值
 * @returns 时间戳数组 [start, end]
 */
export const datesToNumbers = (
  _value: [dayjs.Dayjs, dayjs.Dayjs] | null | undefined,
): [number | undefined, number | undefined] => {
  if (!_value || !_value.length) return [undefined, undefined];

  return [_value[0]?.valueOf(), _value[1]?.valueOf()];
};

/**
 * 根据字符串值获取日期实体
 * @param stringValue - 字符串值，格式为 "type,value"
 * @returns 日期实体对象
 */
export const getValueEntityByStringValue = (
  stringValue: string,
): { type: DateType; value: number } => {
  const arr = stringValue.split(',');
  const type = arr[0] as DateType;
  const value = Number(arr[1]);

  return {
    type,
    value,
  };
};

/**
 * 根据日期类型和值获取时间范围
 * @param type - 日期类型
 * @param typeValue - 时间单位数量
 * @returns 时间范围数组 [start, end]
 */
export const getDataRangeByValue = (
  type: DateType,
  typeValue: number,
): [number | undefined, number | undefined] => {
  const arr = type.split('-');
  const direction = arr[0];
  const unit = arr[1] as UnitType;
  const currentTime = dayjs();

  if (direction === 'b') {
    // 未来时间：从当前时间减去指定单位到当前时间
    return [currentTime.subtract(typeValue, unit).valueOf(), currentTime.valueOf()] as [
      number,
      number,
    ];
  }

  if (direction === 'a') {
    // 过去时间：从当前时间到当前时间加上指定单位
    return [currentTime.valueOf(), currentTime.add(typeValue, unit).valueOf()] as [number, number];
  }

  return [undefined, undefined];
};

/**
 * 获取日期类型对应的标签
 * @param params - 包含类型和值的参数对象
 * @returns 标签内容
 */
export const getLabel = ({ type, value }: { type: DateType; value?: number }): React.ReactNode => {
  return labelByTypeMap.get(type)?.(!isCustomByType(type) ? value : undefined);
};

/**
 * 默认配置项
 */
const DEFAULT_CONFIG: ConfigItem[] = [
  { type: 'a-d', value: 7 },
  { type: 'a-w', value: 1 },
  { type: 'a-M', value: 3 },
  { type: 'a-Q', value: 1 },
  { type: 'a-y', value: 1 },
  { type: 'a-h', value: 24 },
  { type: 'a-m', value: 60 },
  { type: 'a-s', value: 60 },
  { type: 'a-ms', value: 1000 },
  { type: 'b-d', value: 7 },
  { type: 'b-w', value: 1 },
  { type: 'b-M', value: 3 },
  { type: 'b-Q', value: 1 },
  { type: 'b-y', value: 1 },
  { type: 'b-h', value: 24 },
  { type: 'b-m', value: 60 },
  { type: 'b-s', value: 60 },
  { type: 'b-ms', value: 1000 },
  { type: 'custom' },
];

/**
 * 内部快速日期范围选择器组件
 */
const InternalQuickRangeDate = memo<QuickRangeDateProps>(
  forwardRef<HTMLElement, QuickRangeDateProps>(
    (
      { className, style, config, value, onChange, radioGroupProps, rangePickerProps, children },
      ref,
    ) => {
      const innerRef = useRef<HTMLDivElement | null>(null);

      useTheme<HTMLElement>({
        elRef: innerRef as RefObject<HTMLElement>,
        group: 'normal',
        displayName: 'QuickRangeDate',
      });

      const [selfValue, setSelfValue] = useState<DateValue | undefined>(sync(value));

      // 使用配置项或默认配置
      const targetConfig = useMemo<ConfigItem[]>(() => {
        return config || DEFAULT_CONFIG;
      }, [config]);

      // 处理单选按钮变化
      const handleRadioChange = (type: DateType, typeValue: number) => {
        const itemEntityValue = { type, value: typeValue };
        const dataRange = getDataRangeByValue(type, typeValue);
        const changeValue = {
          ...itemEntityValue,
          start: dataRange[0],
          end: dataRange[1],
        };

        setSelfValue(changeValue);
        onChange?.(changeValue);
      };

      // 处理日期范围选择器变化
      const handleRangePickerChange = (_value: any) => {
        const numbers = datesToNumbers(_value);
        const changeValue = {
          type: 'custom' as const,
          value: undefined,
          start: numbers[0],
          end: numbers[1],
        };

        setSelfValue(changeValue);
        onChange?.(changeValue);
      };

      // 处理自定义 onChange 回调
      const handleCustomChange = (_value: DateValue) => {
        if (isCustomByType(_value?.type)) {
          setSelfValue(_value);
          onChange?.(_value);
          return;
        }

        const dataRange = getDataRangeByValue(_value.type, _value.value as number);
        const changeValue = {
          ..._value,
          start: dataRange[0],
          end: dataRange[1],
        };

        setSelfValue(changeValue);
        onChange?.(changeValue);
      };

      const defaultElement = useMemo(() => {
        return (
          <div className={`${selectorPrefix}-group`}>
            <Radio.Group
              value={stringValue(selfValue)}
              optionType="button"
              buttonStyle="solid"
              {...(radioGroupProps ?? {})}
            >
              {targetConfig.map(({ type, value: typeValue, label, render }) => {
                const itemEntityValue = { type, value: typeValue };
                const itemValue = stringValue(itemEntityValue) as string;

                return (
                  <Radio.Button
                    key={itemValue}
                    value={itemValue}
                    onChange={() => handleRadioChange(type as DateType, typeValue as number)}
                  >
                    {render?.(value) ?? label ?? getLabel({ type, value: typeValue })}
                  </Radio.Button>
                );
              })}
            </Radio.Group>

            {isCustomByType(selfValue?.type) && (
              <div className={`${selectorPrefix}-range`}>
                <DatePicker.RangePicker
                  {...(rangePickerProps ?? {})}
                  value={numberToDayjs([selfValue?.start, selfValue?.end])}
                  onChange={handleRangePickerChange}
                />
              </div>
            )}
          </div>
        );
      }, [targetConfig, selfValue, rangePickerProps, radioGroupProps, value]);

      // 当外部 value 变化时同步内部状态
      useUpdateEffect(() => {
        setSelfValue(sync(value));
      }, [value]);

      return (
        <div
          ref={(node) => {
            innerRef.current = node;
            if (ref) {
              if (typeof ref === 'function') {
                ref(node);
              } else {
                ref.current = node;
              }
            }
          }}
          className={classNames(selectorPrefix, className ?? '')}
          style={style ?? {}}
        >
          {children &&
            children({
              defaultElement,
              value,
              onChange: handleCustomChange,
            })}

          {!children && defaultElement}
        </div>
      );
    },
  ),
);

// 设置组件显示名称
InternalQuickRangeDate.displayName = 'InternalQuickRangeDate';

/**
 * 快速日期范围选择器组件
 */
const QuickRangeDate = InternalQuickRangeDate as QuickRangeDateComponent;

QuickRangeDate.displayName = 'QuickRangeDate';

// 绑定静态方法
QuickRangeDate.sync = sync;
QuickRangeDate.stringValue = stringValue;
QuickRangeDate.getLabel = getLabel;
QuickRangeDate.numberToDayjs = numberToDayjs;
QuickRangeDate.datesToNumbers = datesToNumbers;
QuickRangeDate.getValueEntityByStringValue = getValueEntityByStringValue;
QuickRangeDate.getDataRangeByValue = getDataRangeByValue;

export default QuickRangeDate;
