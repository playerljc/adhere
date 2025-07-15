import classNames from 'classnames';
import React, { useContext, useCallback } from 'react';
import type { FC } from 'react';

import Context from '../Context';
import type { MenuItemProps } from '../types';

const selectorPrefix = 'adhere-mobile-ui-popovermenu-menu-item';

/**
 * 菜单项组件
 * @description 渲染单个菜单项，支持图标、文本、点击事件和禁用状态
 * @param className - 自定义类名
 * @param style - 自定义样式
 * @param icon - 菜单项图标
 * @param text - 菜单项文本
 * @param disabled - 是否禁用
 * @param onClick - 点击回调函数
 */
const MenuItem: FC<MenuItemProps> = ({ 
  className, 
  style, 
  icon, 
  text, 
  disabled = false, 
  onClick 
}) => {
  const { refs } = useContext(Context);

  /**
   * 关闭所有弹出层
   */
  const closeAllPopovers = useCallback(() => {
    refs.forEach((ref) => {
      if (ref && typeof ref.hide === 'function') {
        ref.hide();
      }
    });
  }, [refs]);

  /**
   * 处理点击事件
   */
  const handleClick = useCallback(async () => {
    if (disabled || !onClick) {
      return;
    }

    try {
      await onClick();
    } finally {
      closeAllPopovers();
    }
  }, [disabled, onClick, closeAllPopovers]);

  return (
    <li
      className={classNames(selectorPrefix, className, {
        [`${selectorPrefix}-disabled`]: disabled,
      })}
      style={style}
      onClick={handleClick}
    >
      {icon && (
        <div className={`${selectorPrefix}-icon`}>
          {icon}
        </div>
      )}
      <div className={`${selectorPrefix}-text`}>
        {text}
      </div>
    </li>
  );
};

export default MenuItem;
