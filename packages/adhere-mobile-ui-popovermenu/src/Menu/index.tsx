import classNames from 'classnames';
import React, { useMemo } from 'react';
import type { CSSProperties, FC } from 'react';

import MenuItem from '../MenuItem';
import SubMenu from '../SubMenu';
import type { MenuProps } from '../types';

const selectorPrefix = 'adhere-mobile-ui-popover-menu';

/**
 * 菜单容器组件
 * @description 渲染菜单项列表，支持子菜单和普通菜单项
 * @param className - 自定义类名
 * @param style - 自定义样式
 * @param direction - 菜单展开方向
 * @param maxCount - 最大显示菜单项数量
 * @param items - 菜单项配置数组
 */
const Menu: FC<MenuProps> = ({ className, style, direction, maxCount, items = [] }) => {
  // 计算菜单样式，当设置了最大数量时添加滚动条
  const menuStyles = useMemo<CSSProperties>(() => {
    if (typeof maxCount === 'number' && maxCount > 0) {
      return {
        maxHeight: maxCount * 50,
        overflowY: 'auto',
      };
    }
    return {};
  }, [maxCount]);

  return (
    <div className={classNames(selectorPrefix, className)} style={style}>
      <ul className={`${selectorPrefix}-menu`} style={menuStyles}>
        {items.map((menuItemConfig, index) => {
          const itemKey = menuItemConfig.key || `menu-item-${index}`;
          const { key, ...restProps } = menuItemConfig;

          if (!menuItemConfig.isLeaf) {
            return <SubMenu key={itemKey} direction={direction} {...restProps} />;
          }

          return <MenuItem key={itemKey} {...restProps} />;
        })}
      </ul>
    </div>
  );
};

export default Menu;
