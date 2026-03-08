import type { ReactNode } from 'react';

import type { DataItemRow } from '@baifendian/adhere-ui-tablegridlayout/es/types';

import type { DesignContextType, DesignProps, DesignValue, Terminal } from '../../types';
import { isDesktop } from '../../utils/isDesktop';

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
    return item?.renderDesign({
      parentId,
      value,
      context,
    });
  }

  return item?.renderDesignToMobile({
    parentId,
    value,
    context,
  });
}
