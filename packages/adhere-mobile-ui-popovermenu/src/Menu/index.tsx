import classNames from 'classnames';
import React, { useMemo } from 'react';
import type { CSSProperties, FC } from 'react';

import MenuItem from '../MenuItem';
import SubMenu from '../SubMenu';
import type { MenuProps } from '../types';

const selectorPrefix = 'adhere-mobile-ui-popovermenu';

/**
 * Menu
 * @description Menu
 */
const Menu: FC<MenuProps> = ({ className, style, direction, maxCount, items }) => {
  const menuStyles = useMemo<CSSProperties>(() => {
    if (maxCount !== undefined) {
      return {
        maxHeight: maxCount * 50,
        overflowY: 'auto',
      };
    }

    return {};
  }, [maxCount]);

  return (
    <div className={classNames(selectorPrefix, className ?? '')} style={style ?? {}}>
      <ul className={classNames(`${selectorPrefix}-menu`)} style={menuStyles}>
        {items?.map((menuItemConfig) => {
          if (!menuItemConfig.isLeaf) {
            return <SubMenu direction={direction} {...menuItemConfig} />;
          }

          return <MenuItem {...menuItemConfig} />;
        })}
      </ul>
    </div>
  );
};

export default Menu;
