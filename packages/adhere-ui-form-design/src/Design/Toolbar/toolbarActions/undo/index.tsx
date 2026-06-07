import { UndoOutlined } from '@ant-design/icons';
import classNames from 'classnames';
import React, { useCallback, useContext } from 'react';

import Intl from '@baifendian/adhere-util-intl';

import { SELECT_PREFIX } from '../../../../constant';
import { DesignContext } from '../../../Context';

const menuItemDisabledClass = `${SELECT_PREFIX}-design-toolbar-menu-item-disabled`;

export const Undo = () => {
  const { getCanUndo, undo } = useContext(DesignContext);
  const canUndo = getCanUndo();

  const handleClick = useCallback(() => {
    if (!getCanUndo()) return;
    undo();
  }, [getCanUndo, undo]);

  return (
    <span
      key={config.key}
      className={classNames({
        [menuItemDisabledClass]: !canUndo,
      })}
      title={config.label}
      aria-disabled={!canUndo}
      onClick={canUndo ? handleClick : undefined}
    >
      {config.icon}
    </span>
  );
};

const config = {
  key: 'undo',
  label: Intl.get('undo'),
  icon: <UndoOutlined />,
  render: () => <Undo />,
};

export default config;
