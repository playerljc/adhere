import type { ReactNode } from 'react';

import type { DesignProps, DesignValue } from '../../types';

/**
 * parseMainProperty
 * @description 对激活控件的designValue进行解析
 * @param {{
 *   value: DesignValue; 激活控件的designValue
 *   items: DesignProps['items']; 所有设计控件的集合
 * }} params
 * @return ReactElement 解析后的核心控件
 */
export function parseMainProperty({
  // 设置的值
  value,
  // 所有控件
  items,
}: {
  value: DesignValue;
  items: DesignProps['items'];
}): ReactNode {
  // 根据designValue中的type在集合中找到指定的设计控件
  const item = items.find((_item) => _item.type === value.type);

  // 调用设计Field的renderMainProperty进行渲染(desktop和mobile的属性设置是一样的)
  return item?.renderMainProperty(value.props);
}
