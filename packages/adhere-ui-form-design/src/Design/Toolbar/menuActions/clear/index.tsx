import { ClearOutlined } from '@ant-design/icons';
import { Modal } from 'antd';
import classNames from 'classnames';
import React, { useCallback, useContext } from 'react';

import Intl from '@baifendian/adhere-util-intl';

import { SELECT_PREFIX } from '../../../../constant';
import { hasDesignCanvasUserContent } from '../../../../utils';
import { DesignContext } from '../../../Context';

const menuItemPrefix = `${SELECT_PREFIX}-design-toolbar-menu-clear`;
const menuItemDisabledClass = `${SELECT_PREFIX}-design-toolbar-menu-item-disabled`;

export const Clear = () => {
  const { getDesignValue, resetDesignValue } = useContext(DesignContext);

  const canClear = hasDesignCanvasUserContent(getDesignValue());

  const handleClick = useCallback(() => {
    if (!hasDesignCanvasUserContent(getDesignValue())) return;
    Modal.confirm({
      title: Intl.get('clear_all_confirm_title'),
      content: Intl.get('clear_all_confirm_content'),
      onOk: () => {
        resetDesignValue();
      },
    });
  }, [getDesignValue, resetDesignValue]);

  return (
    <span
      key={config.key}
      className={classNames(menuItemPrefix, {
        [menuItemDisabledClass]: !canClear,
      })}
      title={canClear ? config.label : Intl.get('clear_all_disabled_hint')}
      aria-disabled={!canClear}
      onClick={canClear ? handleClick : undefined}
    >
      {config.icon} {config.label}
    </span>
  );
};

const config = {
  key: 'clear',
  label: Intl.get('clear_all'),
  icon: <ClearOutlined />,
  render: () => <Clear />,
};

export default config;
