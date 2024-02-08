import dayjs from 'dayjs';
import quarterOfYear from 'dayjs/plugin/quarterOfYear';
import weekOfYear from 'dayjs/plugin/weekOfYear';
import React, { useMemo } from 'react';
import type { FC } from 'react';

import Calendar from '../calendar';
import type { CalendarFormatValueHOCProps } from '../types';

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
  function originValueToDateJSObject(_value) {
    if (_value === null || _value === undefined) return _value;

    return dayjs(_value);
  }

  const targetValue = useMemo(() => originValueToDateJSObject(value), [value]);

  const targetDefaultValue = useMemo(() => originValueToDateJSObject(defaultValue), [defaultValue]);

  const targetValidRange = useMemo<[dayjs.Dayjs, dayjs.Dayjs]>(
    () => [originValueToDateJSObject(validRange?.[0]), originValueToDateJSObject(validRange?.[0])],
    [validRange],
  );

  function _onChange(_value) {
    onChange?.(_value.format('L LTS'));
  }

  function _disabledDate(_value) {
    return disabledDate?.(_value.format('L LTS')) as boolean;
  }

  function _dateFullCellRender(_value) {
    return dateFullCellRender?.(_value.format('L LTS'));
  }

  function _dateCellRender(_value) {
    return dateCellRender?.(_value.format('L LTS'));
  }

  function _monthFullCellRender(_value) {
    return monthFullCellRender?.(_value.format('L LTS'));
  }

  function _monthCellRender(_value) {
    return monthCellRender?.(_value.format('L LTS'));
  }

  function _cellRender(_value, info) {
    return cellRender?.(_value.format('L LTS'), info);
  }

  function _fullCellRender(_value, info) {
    return fullCellRender?.(_value.format('L LTS'), info);
  }

  function _onPanelChange(_value, mode) {
    onPanelChange?.(_value.format('L LTS'), mode);
  }

  function _onSelect(_value, selectInfo) {
    onSelect?.(_value.format('L LTS'), selectInfo);
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
