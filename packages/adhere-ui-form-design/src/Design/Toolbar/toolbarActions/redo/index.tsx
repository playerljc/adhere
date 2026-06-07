import { RedoOutlined } from '@ant-design/icons';
import classNames from 'classnames';
import React, { useCallback, useContext } from 'react';

import Intl from '@baifendian/adhere-util-intl';

import { SELECT_PREFIX } from '../../../../constant';
import { DesignContext } from '../../../Context';

const menuItemDisabledClass = `${SELECT_PREFIX}-design-toolbar-menu-item-disabled`;

export const Redo = () => {
  const { getCanRedo, redo } = useContext(DesignContext);
  const canRedo = getCanRedo();

  const handleClick = useCallback(() => {
    if (!getCanRedo()) return;
    redo();
  }, [getCanRedo, redo]);

  return (
    <span
      key={config.key}
      className={classNames({
        [menuItemDisabledClass]: !canRedo,
      })}
      title={config.label}
      aria-disabled={!canRedo}
      onClick={canRedo ? handleClick : undefined}
    >
      {config.icon}
    </span>
  );
};

const config = {
  key: 'redo',
  label: Intl.get('redo'),
  icon: <RedoOutlined />,
  render: () => <Redo />,
};

export default config;
