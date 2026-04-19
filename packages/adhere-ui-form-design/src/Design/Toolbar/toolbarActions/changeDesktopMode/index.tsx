import React, { useContext } from 'react';

import { DesktopOutlined } from '@ant-design/icons';
import Intl from '@baifendian/adhere-util-intl';

import { DesignContext } from '../../../Context';

const config = {
  key: 'changeDesktopMode',
  label: Intl.get('desktop_mode'),
  icon: <DesktopOutlined />,
  render: () => <ChangeDesktopMode />,
};

export const ChangeDesktopMode = () => {
  const { setCurrentTerminal } = useContext(DesignContext);

  return (
    <span key={config.key} title={config.label} onClick={() => setCurrentTerminal('desktop')}>
      {config.icon}
    </span>
  );
};

export default config;
