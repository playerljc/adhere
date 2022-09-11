import React, { FC, useContext } from 'react';
import classNames from 'classnames';

import { SubMenuProps, ContextMenuContext } from './types';
import MenuItem from './MenuItem';
import { ProviderContext } from './ContextMenuContext';

const selectorPrefix = 'adhere-ui-contextmenu-submenu';

const SubMenu: FC<SubMenuProps> = (props) => {
  const { className = '', style = {}, data = [] } = props;

  const { config } = useContext<ContextMenuContext>(ProviderContext);

  function getStyle() {
    const { width } = config;

    return {
      width: `${width}px`,
      zIndex: 99999 * 2 + 1,
    };
  }

  return (
    <ul
      className={classNames(selectorPrefix, className || '')}
      style={{ ...(style || {}), ...getStyle() }}
    >
      {(data || []).map((item) => (
        <MenuItem key={item.id} data={item} />
      ))}
    </ul>
  );
};

export default SubMenu;
