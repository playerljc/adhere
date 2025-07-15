import { Popover } from 'antd-mobile';
import type { PopoverRef } from 'antd-mobile/es/components/popover';
import classNames from 'classnames';
import React, { memo, useEffect, useMemo, useRef } from 'react';

import Context from './Context';
import Menu from './Menu';
import type { PopoverMenuComponent, PopoverMenuProps } from './types';

const selectorPrefix = 'adhere-mobile-ui-popover-menu';

/**
 * 内部弹出菜单组件
 * @description 渲染弹出式菜单，支持多级菜单和统一关闭功能
 * @param className - 自定义类名
 * @param style - 自定义样式
 * @param menuClassName - 菜单容器的自定义类名
 * @param menuStyle - 菜单容器的自定义样式
 * @param direction - 菜单展开方向
 * @param popoverProps - Popover 组件的额外属性
 * @param items - 菜单项配置数组
 * @param maxCount - 最大显示菜单项数量
 * @param children - 触发弹出菜单的子元素
 */
const InternalPopoverMenu = memo<PopoverMenuProps>(
  ({
    className,
    style,
    menuClassName,
    menuStyle,
    direction,
    popoverProps,
    items = [],
    maxCount,
    children,
  }) => {
    const refs = useRef<PopoverRef[]>([]);
    const popoverRef = useRef<PopoverRef>();

    // 计算弹出位置
    const placement = useMemo(() => {
      if (direction === 'horizontal' || !direction) {
        return 'bottom';
      }
      return 'right';
    }, [direction]);

    // 渲染菜单内容
    const content = useMemo(
      () => (
        <Menu
          className={menuClassName}
          style={menuStyle}
          direction={direction}
          maxCount={maxCount}
          items={items}
        />
      ),
      [menuClassName, menuStyle, direction, maxCount, items],
    );

    // 注册 Popover 引用到上下文
    useEffect(() => {
      if (popoverRef.current) {
        refs.current.push(popoverRef.current);
      }
    }, []);

    // 创建上下文值
    const contextValue = useMemo(() => ({
      refs: refs.current,
    }), []);

    return (
      <Context.Provider value={contextValue}>
        <Popover
          ref={popoverRef as any}
          className={classNames(selectorPrefix, className)}
          style={style}
          placement={placement}
          trigger="click"
          stopPropagation={[]}
          content={content}
          {...popoverProps}
        >
          {children}
        </Popover>
      </Context.Provider>
    );
  },
);

const PopoverMenu = InternalPopoverMenu as PopoverMenuComponent;

PopoverMenu.displayName = 'PopoverMenu';

export default PopoverMenu;
