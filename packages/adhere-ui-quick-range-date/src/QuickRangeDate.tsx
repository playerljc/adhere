import { useUpdateEffect } from 'ahooks';
import { DatePicker, Radio } from 'antd';
import classNames from 'classnames';
import dayjs, { UnitType } from 'dayjs';
import quarterOfYear from 'dayjs/plugin/quarterOfYear';
import React, { type MutableRefObject, forwardRef, memo, useMemo, useState } from 'react';

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
 * sync
 * @param {DateType | function} dateValue
 * @return {undefined | DateType}
 */
export function sync(dateValue: DateValue | undefined) {
  if (!dateValue) return undefined;

  const { type, value } = dateValue;

  if (isCustomByType(type)) return dateValue;

  if (dateValue?.start && dateValue?.end) return dateValue;

  const dataRange = getDataRangeByValue(type, value as number);

  return {
    ...dateValue,
    start: dataRange[0],
    end: dataRange[1],
  };
}

/**
 * stringValue
 * @param {DateValue | undefined} dateValue
 * @return {undefined | DateType | string}
 */
export const stringValue = (dateValue: DateValue | undefined) => {
  if (!dateValue) return undefined;

  const { type, value } = dateValue;

  if (isCustomByType(type)) return type;

  return [type, value].toString();
};

/**
 * numberToDayjs
 * @param {[number | undefined, number | undefined]} dateValue
 * @return {null | [dayjs.Dayjs, dayjs.Dayjs]}
 */
export const numberToDayjs = (dateValue: [number | undefined, number | undefined]) => {
  if (!dateValue.filter((t) => !!t).length) return null;

  return dateValue.map((_v) => dayjs(_v as number)) as [dayjs.Dayjs, dayjs.Dayjs];
};

/**
 * datesToNumbers
 * @param {undefined | [] | [dayjs.Dayjs, dayjs.Dayjs]} _value
 * @return {[undefined | number, undefined | number]}
 */
export const datesToNumbers = (_value) => {
  if (!_value) return [undefined, undefined];

  if (!_value.length) return [undefined, undefined];

  return _value.map((_dayjs) => _dayjs.valueOf());
};

/**
 * getValueEntityByStringValue
 * @param {string} stringValue
 * @return { type: DateType, value: number }
 */
export const getValueEntityByStringValue = (stringValue: string) => {
  const arr = stringValue.split(',');
  const type = arr[0] as DateType;
  const value = Number(arr[1]);

  return {
    type,
    value,
  };
};

/**
 * getDataRangeByValue
 * @param {DateType} type
 * @param {number} typeValue
 * @return {[number | undefined, number | undefined]}
 */
export const getDataRangeByValue = (type: DateType, typeValue: number) => {
  const arr = type.split('-');

  const direction = arr[0];

  const unit = arr[1] as UnitType;

  const currentTime = dayjs();

  if (direction === 'b') {
    return [currentTime.subtract(typeValue, unit).valueOf(), currentTime.valueOf()];
  }

  if (direction === 'a') {
    return [currentTime.valueOf(), currentTime.add(typeValue, unit).valueOf()];
  }

  return [undefined, undefined];
};

/**
 * getLabel
 * @param { type: DateType; value?: number } params
 * @return { ReactNode }
 */
export const getLabel = ({ type, value }: { type: DateType; value?: number }) => {
  return labelByTypeMap.get(type)?.(!isCustomByType(type) ? value : undefined);
};

/**
 * isCustomByType
 * @param {DateValue} type
 * @return {boolean}
 */
export const isCustomByType = (type?: DateType) => {
  return type === 'custom';
};

const InternalQuickRangeDate = memo<QuickRangeDateProps>(
  forwardRef<HTMLElement, QuickRangeDateProps>(
    (
      { className, style, config, value, onChange, radioGroupProps, rangePickerProps, children },
      ref,
    ) => {
      useTheme<HTMLElement>({
        elRef: ref as MutableRefObject<HTMLElement>,
        group: 'normal',
        displayName: 'QuickRangeDate',
      });

      const [selfValue, setSelfValue] = useState(sync(value));

      const targetConfig = useMemo<ConfigItem[]>(() => {
        if (!config) {
          return [
            {
              type: 'a-d',
              value: 7,
            },
            {
              type: 'a-w',
              value: 1,
            },
            {
              type: 'a-M',
              value: 3,
            },
            {
              type: 'a-Q',
              value: 1,
            },
            {
              type: 'a-y',
              value: 1,
            },
            {
              type: 'a-h',
              value: 24,
            },
            {
              type: 'a-m',
              value: 60,
            },
            {
              type: 'a-s',
              value: 60,
            },
            {
              type: 'a-ms',
              value: 1000,
            },
            {
              type: 'b-d',
              value: 7,
            },
            {
              type: 'b-w',
              value: 1,
            },
            {
              type: 'b-M',
              value: 3,
            },
            {
              type: 'b-Q',
              value: 1,
            },
            {
              type: 'b-y',
              value: 1,
            },
            {
              type: 'b-h',
              value: 24,
            },
            {
              type: 'b-m',
              value: 60,
            },
            {
              type: 'b-s',
              value: 60,
            },
            {
              type: 'b-ms',
              value: 1000,
            },
            {
              type: 'custom',
            },
          ];
        }

        return config;
      }, [config]);

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
                const itemEntityValue = {
                  type,
                  value: typeValue,
                };

                const itemValue = stringValue(itemEntityValue) as string;

                return (
                  <Radio.Button
                    key={itemValue}
                    value={itemValue}
                    onChange={() => {
                      const dataRange = getDataRangeByValue(type as DateType, typeValue as number);

                      const changeValue = {
                        ...itemEntityValue,
                        start: dataRange[0],
                        end: dataRange[1],
                      };

                      setSelfValue(changeValue);
                      onChange?.(changeValue);
                    }}
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
                  onChange={(_value) => {
                    const numbers = datesToNumbers(_value);

                    setSelfValue((_self) => {
                      return {
                        type: 'custom',
                        value: undefined,
                        start: numbers[0],
                        end: numbers[1],
                      };
                    });

                    onChange?.({
                      type: 'custom',
                      value: undefined,
                      start: numbers[0],
                      end: numbers[1],
                    });
                  }}
                />
              </div>
            )}
          </div>
        );
      }, [targetConfig, selfValue, rangePickerProps, radioGroupProps]);

      useUpdateEffect(() => {
        setSelfValue(sync(value));
      }, [value]);

      return (
        <div
          // @ts-ignore
          ref={ref}
          className={classNames(selectorPrefix, className ?? '')}
          style={style ?? {}}
        >
          {children &&
            children({
              defaultElement,
              value,
              onChange: (_value) => {
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
              },
            })}

          {!children && defaultElement}
        </div>
      );
    },
  ),
);

const QuickRangeDate = InternalQuickRangeDate as QuickRangeDateComponent;

QuickRangeDate.displayName = 'QuickRangeDate';

QuickRangeDate.sync = sync;

QuickRangeDate.stringValue = stringValue;

QuickRangeDate.getLabel = getLabel;

QuickRangeDate.numberToDayjs = numberToDayjs;

QuickRangeDate.datesToNumbers = datesToNumbers;

QuickRangeDate.getValueEntityByStringValue = getValueEntityByStringValue;

QuickRangeDate.getDataRangeByValue = getDataRangeByValue;

export default QuickRangeDate;
