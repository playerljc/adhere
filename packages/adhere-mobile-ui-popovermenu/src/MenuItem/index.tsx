import classNames from 'classnames';
import React, { useContext } from 'react';
import type { FC } from 'react';

import Context from '../Context';
import type { MenuItemProps } from '../types';

const selectorPrefix = 'adhere-mobile-ui-popovermenu-menu-item';

/**
 * MenuItem
 * @param className
 * @param style
 * @param icon
 * @param text
 * @param disabled
 * @param onClick
 * @constructor
 */
const MenuItem: FC<MenuItemProps> = ({ className, style, icon, text, disabled, onClick }) => {
  const { refs } = useContext(Context);

  function closeAllPopovers() {
    refs.forEach((ref) => ref.hide());
  }

  return (
    <li
      className={classNames(`${selectorPrefix}`, className ?? '', {
        [`${selectorPrefix}-disabled`]: !!disabled,
      })}
      style={style ?? {}}
      onClick={
        !!disabled
          ? () => {}
          : () => {
              onClick?.()?.finally(() => {
                closeAllPopovers();
              });
            }
      }
    >
      {icon && <div className={`${selectorPrefix}-icon`}>{icon}</div>}
      <div className={`${selectorPrefix}-text`}>{text}</div>
    </li>
  );
};

export default MenuItem;
