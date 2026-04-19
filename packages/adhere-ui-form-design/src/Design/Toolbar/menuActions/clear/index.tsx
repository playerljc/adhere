import React, { useContext } from 'react';

import { ClearOutlined } from '@ant-design/icons';
import Intl from '@baifendian/adhere-util-intl';

import { DesignContext } from '../../../Context';

export const Clear = () => {
  const {} = useContext(DesignContext);

  return (
    <span key={config.key} title={config.label} onClick={() => {}}>
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
