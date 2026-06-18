import type { ReactNode } from 'react';
import type { FieldType, ToolBoxItem, ToolBoxOption } from '../types';
/**
 * 根据控件类型从 toolbox 中获取完整工具项
 */
export declare function getToolBoxItemByType(type: FieldType | undefined, toolBox?: ToolBoxOption): ToolBoxItem | undefined;
/**
 * 根据控件类型从 toolbox 中获取 label
 * @param type 控件类型
 * @param toolBox 工具箱配置
 */
export declare function getLabelByType(type: FieldType | undefined, toolBox?: ToolBoxOption): string | ReactNode;
