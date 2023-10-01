import classNames from 'classnames';
import React, { FC, memo, useContext } from 'react';

import { ProviderContext } from './ContextMenuContext';
import MenuItem from './MenuItem';
import { ContextMenuContext, SubMenuProps } from './types';

const selectorPrefix = 'adhere-ui-context-menu-sub-menu';

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
      className={classNames(selectorPrefix, className ?? '')}
      style={{ ...(style ?? {}), ...getStyle() }}
    >
      {(data || []).map((item) => (
        <MenuItem key={item.id} data={item} />
      ))}
    </ul>
  );
};

export default memo(SubMenu);
