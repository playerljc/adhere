import type { ReactNode } from 'react';

import type { FieldType, ToolBoxOption } from '../types';

/**
 * 根据控件类型从 toolbox 中获取 label
 * @param type 控件类型
 * @param toolBox 工具箱配置
 */
export function getLabelByType(
  type: FieldType | undefined,
  toolBox: ToolBoxOption = [],
): string | ReactNode {
  if (!type) return '';

  for (const group of toolBox) {
    const toolItem = group.items?.find((item) => item.type === type);
    if (toolItem) {
      return toolItem.label ?? type;
    }
  }

  return type;
}
