import React, { useMemo } from 'react';
import type { FC } from 'react';
import type { Dayjs } from 'dayjs';

import Calendar from '../calendar';
import type { CalendarFormatValueHOCProps } from '../types';
import { DEFAULT_DATE_FORMAT, formatDayjs, parseDayjs } from '../value-hoc/dateValue';

/**
 * ValueHOC
 * @param defaultValue
 * @param value
 * @param validRange
 * @param onChange
 * @param disabledDate
 * @param dateFullCellRender
 * @param dateCellRender
 * @param monthFullCellRender
 * @param monthCellRender
 * @param cellRender
 * @param fullCellRender
 * @param onPanelChange
 * @param onSelect
 * @param props
 * @constructor
 */
const ValueHOC: FC<CalendarFormatValueHOCProps> = ({
  defaultValue,
  value,
  validRange,
  onChange,
  disabledDate,
  dateFullCellRender,
  dateCellRender,
  monthFullCellRender,
  monthCellRender,
  cellRender,
  fullCellRender,
  onPanelChange,
  onSelect,
  ...props
}) => {
  const formatValue = (current?: Dayjs | null) => {
    if (current == null) return undefined;
    return formatDayjs(current, undefined, DEFAULT_DATE_FORMAT);
  };

  const targetValue = useMemo(
    () => parseDayjs(value, undefined, DEFAULT_DATE_FORMAT),
    [value],
  );

  const targetDefaultValue = useMemo(
    () => parseDayjs(defaultValue, undefined, DEFAULT_DATE_FORMAT),
    [defaultValue],
  );

  const targetValidRange = useMemo(() => {
    if (validRange?.[0] == null || validRange?.[1] == null) return undefined;

    const start = parseDayjs(validRange[0], undefined, DEFAULT_DATE_FORMAT);
    const end = parseDayjs(validRange[1], undefined, DEFAULT_DATE_FORMAT);
    if (start == null || end == null) return undefined;

    return [start, end] as [Dayjs, Dayjs];
  }, [validRange]);

  return (
    <Calendar
      {...(props as any)}
      defaultValue={targetDefaultValue}
      value={targetValue}
      validRange={targetValidRange}
      {...(onChange
        ? {
            onChange: (current) => {
              const next = formatValue(current);
              if (next != null) onChange(next);
            },
          }
        : {})}
      {...(disabledDate
        ? {
            disabledDate: (current) => {
              const next = formatValue(current);
              return next != null ? Boolean(disabledDate(next)) : false;
            },
          }
        : {})}
      {...(dateFullCellRender
        ? {
            dateFullCellRender: (current) => {
              const next = formatValue(current);
              return next == null ? null : dateFullCellRender(next);
            },
          }
        : {})}
      {...(dateCellRender
        ? {
            dateCellRender: (current) => {
              const next = formatValue(current);
              return next == null ? null : dateCellRender(next);
            },
          }
        : {})}
      {...(monthFullCellRender
        ? {
            monthFullCellRender: (current) => {
              const next = formatValue(current);
              return next == null ? null : monthFullCellRender(next);
            },
          }
        : {})}
      {...(monthCellRender
        ? {
            monthCellRender: (current) => {
              const next = formatValue(current);
              return next == null ? null : monthCellRender(next);
            },
          }
        : {})}
      {...(cellRender
        ? {
            cellRender: (current, info) => {
              const next = formatValue(current);
              return next == null ? info?.originNode : cellRender(next, info);
            },
          }
        : {})}
      {...(fullCellRender
        ? {
            fullCellRender: (current, info) => {
              const next = formatValue(current);
              return next == null ? info?.originNode : fullCellRender(next, info);
            },
          }
        : {})}
      {...(onPanelChange
        ? {
            onPanelChange: (current, mode) => {
              const next = formatValue(current);
              if (next != null) onPanelChange(next, mode);
            },
          }
        : {})}
      {...(onSelect
        ? {
            onSelect: (current, selectInfo) => {
              const next = formatValue(current);
              if (next != null) onSelect(next, selectInfo);
            },
          }
        : {})}
    />
  );
};

export default ValueHOC;
