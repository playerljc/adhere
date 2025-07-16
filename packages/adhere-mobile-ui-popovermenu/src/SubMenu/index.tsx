import { Popover } from 'antd-mobile';
import { DownFill } from 'antd-mobile-icons';
import type { PopoverRef } from 'antd-mobile/es/components/popover';
import classNames from 'classnames';
import React, { useCallback, useContext, useEffect, useMemo, useRef } from 'react';
import type { FC } from 'react';

import Context from '../Context';
import Menu from '../Menu';
import type { SubMenuProps } from '../types';

const selectorPrefix = 'adhere-mobile-ui-popover-menu';
const subMenuSelectorPrefix = `${selectorPrefix}-sub-menu`;

/**
 * 子菜单组件
 * @description 渲染带有子菜单的菜单项，支持弹出式子菜单
 * @param className - 自定义类名
 * @param style - 自定义样式
 * @param direction - 菜单展开方向
 * @param icon - 菜单项图标
 * @param text - 菜单项文本
 * @param disabled - 是否禁用
 * @param popoverProps - Popover 组件的额外属性
 * @param items - 子菜单项配置
 * @param maxCount - 最大显示菜单项数量
 */
const SubMenu: FC<SubMenuProps> = ({
  className,
  style,
  direction,
  icon,
  text,
  disabled = false,
  popoverProps,
  items = [],
  maxCount,
}) => {
  const popoverRef = useRef<PopoverRef>();
  const { refs } = useContext(Context);

  // 计算弹出位置
  const placement = useMemo(() => {
    if (direction === 'horizontal' || !direction) {
      return 'right';
    }
    return 'right';
  }, [direction]);

  // 渲染子菜单内容
  const content = useMemo(
    () => <Menu direction={direction} items={items} maxCount={maxCount} />,
    [direction, items, maxCount],
  );

  // 注册 Popover 引用到上下文
  useEffect(() => {
    if (popoverRef.current) {
      refs.push(popoverRef.current);
    }
  }, [refs]);

  // 渲染触发器元素
  const trigger = useMemo(
    () => (
      <li
        className={classNames(subMenuSelectorPrefix, className, {
          [`${subMenuSelectorPrefix}-disabled`]: disabled,
        })}
        style={style}
      >
        {icon && <div className={`${subMenuSelectorPrefix}-icon`}>{icon}</div>}
        <div className={`${subMenuSelectorPrefix}-text`}>{text}</div>
        <span className={`${subMenuSelectorPrefix}-arrow`}>
          <DownFill />
        </span>
      </li>
    ),
    [className, disabled, icon, style, text],
  );

  // 如果禁用，直接渲染触发器
  if (disabled) {
    return trigger;
  }

  // 渲染带 Popover 的触发器
  return (
    <Popover
      ref={popoverRef as any}
      className={selectorPrefix}
      trigger="click"
      placement={placement as any}
      content={content}
      {...popoverProps}
    >
      {trigger}
    </Popover>
  );
};

export default SubMenu;
