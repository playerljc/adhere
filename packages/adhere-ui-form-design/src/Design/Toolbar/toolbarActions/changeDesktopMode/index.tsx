import React, { useContext } from 'react';

import { DesktopOutlined } from '@ant-design/icons';
import Intl from '@baifendian/adhere-util-intl';

import { DesignContext } from '../../../Context';

export const ChangeDesktopMode = () => {
  const {} = useContext(DesignContext);

  return (
    <span key={config.key} title={config.label} onClick={() => {}}>
      {config.icon}
    </span>
  );
};

const config = {
  key: 'changeDesktopMode',
  label: Intl.get('desktop_mode'),
  icon: <DesktopOutlined />,
  render: () => <ChangeDesktopMode />,
};

export default config;
