import classNames from 'classnames';
import React, { memo, useContext } from 'react';

import { ProviderContext } from './ContextMenuContext';
import MenuItem from './MenuItem';
import type { ContextMenuContext, SubMenuProps } from './types';

const selectorPrefix = 'adhere-ui-context-menu-sub-menu';

const SubMenu = memo<SubMenuProps>((props) => {
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
      className={classNames(selectorPrefix, className ?? '')}
      style={{ ...(style ?? {}), ...getStyle() }}
    >
      {(data || []).map((item) => (
        <MenuItem key={item.id} data={item} />
      ))}
    </ul>
  );
});

SubMenu.displayName = 'SubMenu';

export default SubMenu;
