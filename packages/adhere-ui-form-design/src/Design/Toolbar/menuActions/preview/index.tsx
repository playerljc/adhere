import React, { useContext } from 'react';

import { EyeOutlined } from '@ant-design/icons';
import Intl from '@baifendian/adhere-util-intl';

import { DesignContext } from '../../../Context';

export const Preview = () => {
  const {} = useContext(DesignContext);

  return (
    <span key={config.key} title={config.label} onClick={() => {}}>
      {config.icon} {config.label}
    </span>
  );
};

const config = {
  key: 'preview',
  label: Intl.get('preview'),
  icon: <EyeOutlined />,
  render: () => <Preview />,
};

export default config;
