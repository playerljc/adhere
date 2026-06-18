import type { DataItemRow } from '@baifendian/adhere-ui-tablegridlayout';
export type FormPropertyItemsRef = {
    get: (key: string) => unknown;
    set: (key: string, node: HTMLElement | null) => void;
};
export declare function createFormPropertyLabelRow(ref: FormPropertyItemsRef): DataItemRow;
export declare function createFormPropertyNameRow(): DataItemRow;
export declare function createFormPropertyHiddenRow(): DataItemRow;
export declare function createFormPropertyNoStyleRow(): DataItemRow;
export declare function createFormPropertyValuePropNameSelectRow(): DataItemRow;
export declare function createFormPropertyValuePropNameInputRow(): DataItemRow;
export declare function createFormPropertyValidateFirstRow(): DataItemRow;
export declare function createFormPropertyColSpanRow(): DataItemRow;
export declare function createFormPropertyFillRow(): DataItemRow;
export declare function createFormPropertyValidateTriggerRow(): DataItemRow;
export declare function createFormPropertyRulesRow(): DataItemRow;
