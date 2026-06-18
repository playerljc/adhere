import type { DesignValue } from '../../../../../types';
import type { GetItemByType } from './createTemplateField';
/**
 * 将表单字段包裹在 TableGridLayout 中。
 * FlexLayout 只能直接放置布局/无表单控件；Input/Select 等返回 DataItemRow 的字段必须经 TableGridLayout 渲染。
 */
export declare function createTemplateTableGridContainer(getItemByType: GetItemByType, fields: DesignValue[]): DesignValue;
/** 单行 TableGridLayout，适用于 TextArea 等需独占一行的控件 */
export declare function createTemplateTableGridRow(getItemByType: GetItemByType, field: DesignValue): DesignValue;
