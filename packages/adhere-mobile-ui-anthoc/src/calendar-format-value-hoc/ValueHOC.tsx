import dayjs from 'dayjs';
import React, { cloneElement, useMemo } from 'react';
import type { FC } from 'react';

import type { CalendarFormatValueHOCProps } from '../types';
import {
  DEFAULT_DATE_FORMAT,
  dayjsPairToDate,
  dayjsToDate,
  formatDayjs,
  formatDayjsPair,
  parseDayjs,
  parseDayjsPair,
} from '../value-hoc/dateValue';

/**
 * ValueHOC
 * @param defaultValue
 * @param value
 * @param onChange
 * @param format
 * @param children
 * @param props
 * @constructor
 */
const ValueHOC: FC<CalendarFormatValueHOCProps> = ({
  defaultValue,
  value,
  onChange,
  format,
  children,
  ...props
}) => {
  const targetValue = useMemo(() => {
    if (Array.isArray(value)) return dayjsPairToDate(parseDayjsPair(value, format, DEFAULT_DATE_FORMAT));
    return dayjsToDate(parseDayjs(value, format, DEFAULT_DATE_FORMAT));
  }, [value, format]);

  const targetDefaultValue = useMemo(() => {
    if (Array.isArray(defaultValue)) {
      return dayjsPairToDate(parseDayjsPair(defaultValue, format, DEFAULT_DATE_FORMAT)) ?? undefined;
    }
    return dayjsToDate(parseDayjs(defaultValue, format, DEFAULT_DATE_FORMAT)) ?? undefined;
  }, [defaultValue, format]);

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
      onChange?.(formatDayjsPair([toDayjs(_date[0]), toDayjs(_date[1])], format, DEFAULT_DATE_FORMAT));
      return;
    }

    const current = dayjs(_date);
    onChange?.(current.isValid() ? formatDayjs(current, format, DEFAULT_DATE_FORMAT) : null);
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
