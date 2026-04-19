import React, { useContext } from 'react';

import { MobileOutlined } from '@ant-design/icons';
import Intl from '@baifendian/adhere-util-intl';

import { DesignContext } from '../../../Context';

export const ChangeMobileMode = () => {
  const {} = useContext(DesignContext);

  return (
    <span key={config.key} title={config.label} onClick={() => {}}>
      {config.icon}
    </span>
  );
};

const config = {
  key: 'changeMobileMode',
  label: Intl.get('mobile_mode'),
  icon: <MobileOutlined />,
  render: () => <ChangeMobileMode />,
};

export default config;
