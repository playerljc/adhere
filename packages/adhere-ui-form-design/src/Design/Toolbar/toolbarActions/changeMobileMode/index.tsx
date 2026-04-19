import React, { useContext } from 'react';

import { MobileOutlined } from '@ant-design/icons';
import Intl from '@baifendian/adhere-util-intl';

import { DesignContext } from '../../../Context';

const config = {
  key: 'changeMobileMode',
  label: Intl.get('mobile_mode'),
  icon: <MobileOutlined />,
  render: () => <ChangeMobileMode />,
};

export const ChangeMobileMode = () => {
  const { setCurrentTerminal } = useContext(DesignContext);

  return (
    <span key={config.key} title={config.label} onClick={() => setCurrentTerminal('mobile')}>
      {config.icon}
    </span>
  );
};

export default config;
