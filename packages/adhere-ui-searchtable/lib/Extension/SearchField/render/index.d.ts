import type { ReactNode } from 'react';
import type { ColumnSearchConfig } from '../../../types';
/**
 * resolveSearchTitleNode
 * @description 将查询项 title 解析为可渲染节点
 */
export declare function resolveSearchTitleNode(currentTitle: ReactNode): ReactNode;
/**
 * renderSearchRequiredMark
 * @description 渲染查询项必填符号
 */
export declare function renderSearchRequiredMark(searchConfig: ColumnSearchConfig, classNamePrefix: string): ReactNode;
/**
 * renderSearchLabelContent
 * @description 渲染查询项 label 文本（含必填符号）
 */
export declare function renderSearchLabelContent(currentTitle: ReactNode, searchConfig: ColumnSearchConfig, classNamePrefix: string): ReactNode;
/**
 * renderSearchHelp
 * @description 渲染查询项 help 说明
 */
export declare function renderSearchHelp(searchConfig: ColumnSearchConfig, classNamePrefix: string): ReactNode;
