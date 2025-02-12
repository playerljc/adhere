import { Popover } from 'antd-mobile';
import type { PopoverRef } from 'antd-mobile/es/components/popover';
import classNames from 'classnames';
import React, { memo, useEffect, useMemo, useRef } from 'react';

import Context from './Context';
import Menu from './Menu';
import type { PopoverMenuComponent, PopoverMenuProps } from './types';

const selectorPrefix = 'adhere-mobile-ui-popovermenu';

/**
 * InternalPopoverMenu
 */
const InternalPopoverMenu = memo<PopoverMenuProps>(
  ({
    className,
    style,
    menuClassName,
    menuStyle,
    direction,
    popoverProps,
    items,
    maxCount,
    children,
  }) => {
    const refs = useRef<PopoverRef[]>([]);

    const popoverRef = useRef<PopoverRef>();

    // placement
    const placement = useMemo(() => {
      if (direction === 'horizontal' || !direction) {
        return 'bottom';
      }

      return 'right';
    }, [direction]);

    // content
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
      [menuClassName, menuStyle, items],
    );

    useEffect(() => {
      refs.current.push(popoverRef.current as PopoverRef);
    }, []);

    return (
      <Context.Provider
        value={{
          refs: refs.current,
        }}
      >
        <Popover
          ref={popoverRef as any}
          className={classNames(selectorPrefix, className ?? '')}
          style={style ?? {}}
          placement={placement}
          trigger="click"
          stopPropagation={[]}
          content={content}
          {...(popoverProps ?? {})}
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
