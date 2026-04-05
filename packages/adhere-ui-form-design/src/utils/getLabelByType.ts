import type { ReactNode } from 'react';

import type { FieldType, ToolBoxItem, ToolBoxOption } from '../types';

/**
 * 根据控件类型从 toolbox 中获取完整工具项
 */
export function getToolBoxItemByType(
  type: FieldType | undefined,
  toolBox: ToolBoxOption = [],
): ToolBoxItem | undefined {
  if (!type) return undefined;

  for (const group of toolBox) {
    const toolItem = group.items?.find((item) => item.type === type);
    if (toolItem) {
      return toolItem;
    }
  }

  return undefined;
}

/**
 * 根据控件类型从 toolbox 中获取 label
 * @param type 控件类型
 * @param toolBox 工具箱配置
 */
export function getLabelByType(
  type: FieldType | undefined,
  toolBox: ToolBoxOption = [],
): string | ReactNode {
  const toolItem = getToolBoxItemByType(type, toolBox);
  if (toolItem) {
    return toolItem.label ?? type ?? '';
  }

  return type ?? '';
}
