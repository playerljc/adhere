import dayjs from 'dayjs';
import quarterOfYear from 'dayjs/plugin/quarterOfYear';
import weekOfYear from 'dayjs/plugin/weekOfYear';
import React, { useMemo } from 'react';
import type { FC } from 'react';

import Calendar from '../calendar';
import type { CalendarTimestampValueHOC } from '../types';

dayjs.extend(weekOfYear);
dayjs.extend(quarterOfYear);

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
 * @param type
 * @param props
 * @constructor
 */
const ValueHOC: FC<CalendarTimestampValueHOC> = ({
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
  type = 'milliseconds',
  ...props
}) => {
  function originValueToDateJSObject(_value) {
    if (_value === null || _value === undefined) return _value;

    if (type === 'seconds') {
      return dayjs.unix(_value);
    }

    return dayjs(_value);
  }

  function changeValueMillisecondsToTargetValue(milliseconds) {
    if (type === 'seconds') {
      return Math.round(milliseconds / 1000);
    }

    return milliseconds;
  }

  const targetValue = useMemo(() => originValueToDateJSObject(value), [value]);

  const targetDefaultValue = useMemo(() => originValueToDateJSObject(defaultValue), [defaultValue]);

  const targetValidRange = useMemo<[dayjs.Dayjs, dayjs.Dayjs]>(
    () => [originValueToDateJSObject(validRange?.[0]), originValueToDateJSObject(validRange?.[1])],
    [validRange],
  );

  function _onChange(_value) {
    onChange?.(changeValueMillisecondsToTargetValue(_value.valueOf()));
  }

  function _disabledDate(_value) {
    return disabledDate?.(changeValueMillisecondsToTargetValue(_value.valueOf())) as boolean;
  }

  function _dateFullCellRender(_value) {
    return dateFullCellRender?.(changeValueMillisecondsToTargetValue(_value.valueOf()));
  }

  function _dateCellRender(_value) {
    return dateCellRender?.(changeValueMillisecondsToTargetValue(_value.valueOf()));
  }

  function _monthFullCellRender(_value) {
    return monthFullCellRender?.(changeValueMillisecondsToTargetValue(_value.valueOf()));
  }

  function _monthCellRender(_value) {
    return monthCellRender?.(changeValueMillisecondsToTargetValue(_value.valueOf()));
  }

  function _cellRender(_value, info) {
    return cellRender?.(changeValueMillisecondsToTargetValue(_value.valueOf()), info);
  }

  function _fullCellRender(_value, info) {
    return fullCellRender?.(changeValueMillisecondsToTargetValue(_value.valueOf()), info);
  }

  function _onPanelChange(_value, mode) {
    onPanelChange?.(changeValueMillisecondsToTargetValue(_value.valueOf()), mode);
  }

  function _onSelect(_value, selectInfo) {
    onSelect?.(changeValueMillisecondsToTargetValue(_value.valueOf()), selectInfo);
  }

  return (
    <Calendar
      {...props}
      defaultValue={targetDefaultValue}
      value={targetValue}
      validRange={targetValidRange}
      onChange={_onChange}
      disabledDate={_disabledDate}
      dateFullCellRender={_dateFullCellRender}
      dateCellRender={_dateCellRender}
      monthFullCellRender={_monthFullCellRender}
      monthCellRender={_monthCellRender}
      cellRender={_cellRender}
      fullCellRender={_fullCellRender}
      onPanelChange={_onPanelChange}
      onSelect={_onSelect}
    />
  );
};

export default ValueHOC;
