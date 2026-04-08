import type { DataItemRow } from '@baifendian/adhere-ui-tablegridlayout';
export type FormPropertyLabelSlotRef = {
    get: (key: string) => unknown;
    set: (key: string, value: unknown) => void;
};
/** 标签（含 i18n） */
export declare function buildFormPropertyLabelRow(slot: FormPropertyLabelSlotRef): DataItemRow;
/** 标题（含 i18n），如 Card.title、EditorTable 表格标题 */
export declare function buildFormPropertyTitleRow(slot: FormPropertyLabelSlotRef): DataItemRow;
/** 字段 name */
export declare function buildFormPropertyNameRow(): DataItemRow;
/** 是否隐藏 */
export declare function buildFormPropertyHiddenRow(): DataItemRow;
/** noStyle */
export declare function buildFormPropertyNoStyleRow(): DataItemRow;
/** 跨列 colSpan */
export declare function buildFormPropertyColSpanRow(): DataItemRow;
/** 充满父级 fill */
export declare function buildFormPropertyFillRow(): DataItemRow;
/** validateFirst */
export declare function buildFormPropertyValidateFirstRow(): DataItemRow;
/** validateTrigger */
export declare function buildFormPropertyValidateTriggerRow(): DataItemRow;
/** 设计视图中 label 是否显示必填星号 */
export declare function buildFormPropertyRequireRow(): DataItemRow;
/** 校验规则 */
export declare function buildFormPropertyRulesRow(): DataItemRow;
/** valuePropName：纯文本输入（Rate / Slider 等） */
export declare function buildFormPropertyValuePropNamePlainInputRow(): DataItemRow;
