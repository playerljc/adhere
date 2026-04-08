import { type ReactNode } from 'react';
import { Form } from '@baifendian/adhere-ui-anthoc';
import type { DataItemRow } from '@baifendian/adhere-ui-tablegridlayout/es/types';
import { type FormPropertyLabelSlotRef } from '../components';
import type { DesignValueProps } from '../types';
export interface GetDefaultFormItemsCtx {
    form: ReturnType<typeof Form.useForm>[0];
    /**
     * useWatch 监听到的表单值
     * - `Form.useWatch([], form)`：监听整个表单
     * - 可能为 `undefined`（首次渲染/尚未 setFieldsValue）
     */
    watchValues: any;
    /** 与 buildFormPropertyTitleRow 配合，挂载 SlotEndLabel 节点供语言切换弹层定位 */
    titleLabelSlot: FormPropertyLabelSlotRef;
}
export interface CreateMainPropertyOptions {
    /** 表单名称 */
    formName: string;
    /** 默认表单项数组（不包含 fill） */
    getDefaultFormItems: (designValue: DesignValueProps, ctx: GetDefaultFormItemsCtx) => DataItemRow[];
    /** 是否自动添加 fill 设置项（默认 true） */
    autoFill?: boolean;
}
export declare function createMainProperty(options: CreateMainPropertyOptions): ({ designValue, renderFormItems, }: {
    designValue: DesignValueProps;
    renderFormItems?: (defaultFormItems: DataItemRow[]) => DataItemRow[];
}) => ReactNode;
export declare function renderMainProperty(Component: ReturnType<typeof createMainProperty>, props: DesignValueProps): ReactNode;
