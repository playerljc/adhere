import dayjs from 'dayjs';
import React, { cloneElement, useMemo } from 'react';
import type { FC } from 'react';

import type { CalendarTimestampValueHOCProps } from '../types';
import {
  dayjsPairToDate,
  dayjsToDate,
  formatTimestamp,
  formatTimestampPair,
  normalizeRangeTypes,
  normalizeTimestampType,
  parseTimestamp,
  parseTimestampPair,
} from '../value-hoc/dateValue';

/**
 * ValueHOC
 * @param defaultValue
 * @param value
 * @param onChange
 * @param type
 * @param children
 * @param props
 * @constructor
 */
const ValueHOC: FC<CalendarTimestampValueHOCProps> = ({
  defaultValue,
  value,
  onChange,
  type = 'milliseconds',
  children,
  ...props
}) => {
  const typeKey = Array.isArray(type) ? `${type[0] ?? ''}|${type[1] ?? ''}` : type;
  const rangeUnits = useMemo(
    () => normalizeRangeTypes(Array.isArray(type) ? type : undefined),
    // typeKey 把内联数组收成稳定字符串，避免每次渲染都换一组单位
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [typeKey],
  );
  const unit = normalizeTimestampType(typeof type === 'string' ? type : undefined);

  const targetValue = useMemo(() => {
    if (Array.isArray(value)) return dayjsPairToDate(parseTimestampPair(value, rangeUnits));
    return dayjsToDate(parseTimestamp(value, unit));
  }, [value, rangeUnits, unit]);

  const targetDefaultValue = useMemo(() => {
    if (Array.isArray(defaultValue)) {
      return dayjsPairToDate(parseTimestampPair(defaultValue, rangeUnits)) ?? undefined;
    }
    return dayjsToDate(parseTimestamp(defaultValue, unit)) ?? undefined;
  }, [defaultValue, rangeUnits, unit]);

  const _onChange = (_date) => {
    if (_date == null) {
      onChange?.(null);
      return;
    }

    if (Array.isArray(_date)) {
      const toDayjs = (item) => {
        if (item == null) return null;
        const current = dayjs(item);
        return current.isValid() ? current : null;
      };
      onChange?.(formatTimestampPair([toDayjs(_date[0]), toDayjs(_date[1])], rangeUnits));
      return;
    }

    const current = dayjs(_date);
    onChange?.(current.isValid() ? formatTimestamp(current, unit) : null);
  };

  return useMemo(() => {
    if (!React.isValidElement(children)) return children as any;
    const el = children as React.ReactElement<any>;
    return cloneElement(
      el,
      {
        ...(props as any),
        defaultValue: targetDefaultValue,
        value: targetValue,
        onChange: _onChange,
      } as any,
      (el.props as any)?.children,
    );
  }, [props, targetDefaultValue, targetValue, children, _onChange]);
};

export default ValueHOC;
