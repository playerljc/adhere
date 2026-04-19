import React, { useContext } from 'react';

import { ArrowLeftOutlined } from '@ant-design/icons';
import Intl from '@baifendian/adhere-util-intl';

import { DesignContext } from '../../../Context';

export const Redo = () => {
  const {} = useContext(DesignContext);

  return (
    <span key={config.key} title={config.label} onClick={() => {}}>
      {config.icon}
    </span>
  );
};

const config = {
  key: 'redo',
  label: Intl.get('redo'),
  icon: <ArrowLeftOutlined />,
  render: () => <Redo />,
};

export default config;
