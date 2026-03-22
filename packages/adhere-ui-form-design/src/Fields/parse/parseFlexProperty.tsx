import type { ReactNode } from 'react';

import type { DesignProps, DesignValue } from '../../types';

/**
 * parseFlexProperty
 * @description 对designValue进行解析
 * @param {{
 *   value: DesignValue;
 *   items: DesignProps['items'];
 * }} params
 * @return ReactElement
 */
export function parseFlexProperty({
  // 设置的值
  value,
  // 所有控件
  items,
}: {
  value: DesignValue;
  items: DesignProps['items'];
}): ReactNode {
  const item = items.find((_item) => _item.type === value.type);

  return item?.renderFlexProperty!(value.props);
}
