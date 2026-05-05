import type { ReactNode } from 'react';

import type { DataItemRow } from '@baifendian/adhere-ui-tablegridlayout/es/types';

import type { DesignContextType, DesignProps, DesignValue } from '../../types';
import { isDesktop } from '../../utils';

/**
 * parseDesign
 * @description 对designValue进行解析
 * @param {{
 *   terminal: Terminal;
 *   value: DesignValue;
 *   items: DesignProps['items'];
 *   onActiveFieldById: onActiveFieldById: (id: string) => void
 * }} params
 * @return ReactElement
 */
export function parseDesign({
  parentId,
  value,
  context,
}: {
  parentId?: string;
  value: DesignValue;
  context: DesignContextType;
}): DataItemRow | ReactNode {
  const { getTerminal, getItems } = context;

  const terminal = getTerminal();
  const items = getItems();

  const item = items.find((_item) => _item.type === value.type);

  if (isDesktop(terminal)) {
    const result = item?.renderDesign({
      parentId,
      value,
      context,
    });

    // hidden 字段在布局中不占位（TableGridLayout 会过滤 show=false 的行）
    if (
      result &&
      typeof result === 'object' &&
      'key' in result &&
      'label' in result &&
      'value' in result
    ) {
      const hidden = !!value.props?.formItemProps?.hidden;
      if (hidden && !('show' in result)) {
        (result as DataItemRow).show = false;
      }
    }

    return result;
  }

  return item?.renderDesignToMobile({
    parentId,
    value,
    context,
  });
}
