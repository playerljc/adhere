import { Popover } from 'antd-mobile';
import { DownFill } from 'antd-mobile-icons';
import type { PopoverRef } from 'antd-mobile/es/components/popover';
import classNames from 'classnames';
import React, { useContext, useEffect, useMemo, useRef } from 'react';
import type { FC } from 'react';

import Context from '../Context';
import Menu from '../Menu';
import type { SubMenuProps } from '../types';

const selectorPrefix = 'adhere-mobile-ui-popovermenu';
const subMenuSelectorPrefix = `${selectorPrefix}-sub-menu`;

const SubMenu: FC<SubMenuProps> = ({
  className,
  style,
  direction,
  icon,
  text,
  disabled,
  popoverProps,
  items,
  maxCount,
}) => {
  const placement = useMemo(() => {
    if (direction === 'horizontal' || !direction) {
      return 'right';
    }

    return 'right';
  }, [direction]);

  const content = useMemo(
    () => <Menu direction={direction} items={items ?? []} maxCount={maxCount} />,
    [items],
  );

  const popoverRef = useRef<PopoverRef>();

  const { refs } = useContext(Context);

  const trigger = (
    <li
      className={classNames(`${subMenuSelectorPrefix}`, className ?? '', {
        [`${subMenuSelectorPrefix}-disabled`]: !!disabled,
      })}
      style={style ?? {}}
    >
      {icon && <div className={`${subMenuSelectorPrefix}-icon`}>{icon}</div>}
      <div className={`${subMenuSelectorPrefix}-text`}>{text}</div>
      <span className={`${subMenuSelectorPrefix}-arrow`}>
        <DownFill />
      </span>
    </li>
  );

  useEffect(() => {
    refs.push(popoverRef.current as PopoverRef);
  }, []);

  return (
    <>
      {disabled && trigger}
      {!disabled && (
        <Popover
          ref={popoverRef as any}
          className={selectorPrefix}
          trigger="click"
          placement={placement as any}
          content={content}
          {...(popoverProps ?? {})}
        >
          {trigger}
        </Popover>
      )}
    </>
  );
};

export default SubMenu;
