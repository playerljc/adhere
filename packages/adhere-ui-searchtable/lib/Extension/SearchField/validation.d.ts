import type { ReactNode } from 'react';
import type { ColumnSearchConfig, ColumnTypeExt, ValidatorRule } from '../../types';
import type { SearchFieldItem, SearchFieldValidationContext } from './types';
/**
 * resolveSearchTitleNode
 * @description 将查询项 title 解析为可渲染节点
 */
export declare function resolveSearchTitleNode(currentTitle: ReactNode): ReactNode;
/**
 * getSearchFieldTitle
 * @description 获取查询项标题文本（用于 notification 等纯文本场景）
 */
export declare function getSearchFieldTitle(searchConfig: ColumnSearchConfig, column: ColumnTypeExt): string;
/**
 * getRuleMessage
 * @description 从校验规则中提取错误文案
 */
export declare function getRuleMessage(rule: ValidatorRule | undefined, fallback: string): string;
/**
 * getSearchFieldValue
 * @description 获取查询项当前值
 */
export declare function getSearchFieldValue(searchConfig: ColumnSearchConfig, dataIndex: string, state: Record<string, any>): any;
/**
 * isSearchValueEmpty
 * @description 判断查询项值是否为空
 */
export declare function isSearchValueEmpty(value: any, searchConfig: ColumnSearchConfig, state: Record<string, any>): boolean;
/**
 * getSearchFieldRules
 * @description 合并 required 与 rules，生成最终校验规则
 */
export declare function getSearchFieldRules(searchConfig: ColumnSearchConfig, fieldTitle: string): ValidatorRule[];
/**
 * showSearchValidationError
 * @description 使用 antd notification 展示查询校验错误
 */
export declare function showSearchValidationError(fieldTitle: string, message: string): void;
/**
 * validateSearchField
 * @description 校验单个查询项，失败时触发 onError 并返回 false
 */
export declare function validateSearchField(item: SearchFieldItem, state: Record<string, any>, onError: (fieldTitle: string, message: string) => void): Promise<boolean>;
/**
 * validateSearchFields
 * @description 校验所有查询项；遇到第一个错误即阻断
 */
export declare function validateSearchFields({ state, fields, onError, }: SearchFieldValidationContext): Promise<boolean>;
