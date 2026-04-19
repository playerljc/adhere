import React, { useContext } from 'react';

import { FullscreenOutlined } from '@ant-design/icons';
import Intl from '@baifendian/adhere-util-intl';

import { DesignContext } from '../../../Context';

export const FullScreen = () => {
  const {} = useContext(DesignContext);

  return (
    <span key={config.key} title={config.label} onClick={() => {}}>
      {config.icon}
    </span>
  );
};

const config = {
  key: 'fullScreen',
  label: Intl.get('full_screen'),
  icon: <FullscreenOutlined />,
  render: () => <FullScreen />,
};

export default config;
