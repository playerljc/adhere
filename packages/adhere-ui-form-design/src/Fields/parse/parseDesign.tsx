import type { ReactNode } from 'react';

import type { DataItemRow } from '@baifendian/adhere-ui-tablegridlayout/es/types';

import type { DesignProps, DesignValue, Terminal } from '../../types';
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
  terminal,
  // 设置的值
  value,
  // 所有控件
  items,
}: {
  terminal: Terminal;
  value: DesignValue;
  items: DesignProps['items'];
}): DataItemRow | ReactNode {
  const item = items.find((_item) => _item.type === value.type);

  if (isDesktop(terminal)) {
    return item?.renderDesign({
      value,
    });
  }

  return item?.renderDesignToMobile({
    value,
  });
}
