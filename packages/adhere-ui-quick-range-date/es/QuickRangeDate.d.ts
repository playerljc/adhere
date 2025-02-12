import dayjs from 'dayjs';
import type { DateType, DateValue, QuickRangeDateComponent } from './types';
/**
 * sync
 * @param {DateType | function} dateValue
 * @return {undefined | DateType}
 */
export declare function sync(dateValue: DateValue | undefined): DateValue | undefined;
/**
 * stringValue
 * @param {DateValue | undefined} dateValue
 * @return {undefined | DateType | string}
 */
export declare const stringValue: (dateValue: DateValue | undefined) => string | undefined;
/**
 * numberToDayjs
 * @param {[number | undefined, number | undefined]} dateValue
 * @return {null | [dayjs.Dayjs, dayjs.Dayjs]}
 */
export declare const numberToDayjs: (dateValue: [number | undefined, number | undefined]) => [dayjs.Dayjs, dayjs.Dayjs] | null;
/**
 * datesToNumbers
 * @param {undefined | [] | [dayjs.Dayjs, dayjs.Dayjs]} _value
 * @return {[undefined | number, undefined | number]}
 */
export declare const datesToNumbers: (_value: any) => any;
/**
 * getValueEntityByStringValue
 * @param {string} stringValue
 * @return { type: DateType, value: number }
 */
export declare const getValueEntityByStringValue: (stringValue: string) => {
    type: DateType;
    value: number;
};
/**
 * getDataRangeByValue
 * @param {DateType} type
 * @param {number} typeValue
 * @return {[number | undefined, number | undefined]}
 */
export declare const getDataRangeByValue: (type: DateType, typeValue: number) => number[] | undefined[];
/**
 * getLabel
 * @param { type: DateType; value?: number } params
 * @return { ReactNode }
 */
export declare const getLabel: ({ type, value }: {
    type: DateType;
    value?: number;
}) => string | undefined;
/**
 * isCustomByType
 * @param {DateValue} type
 * @return {boolean}
 */
export declare const isCustomByType: (type?: DateType) => type is "custom";
declare const QuickRangeDate: QuickRangeDateComponent;
export default QuickRangeDate;
