import React, { useContext } from 'react';

import { ArrowRightOutlined } from '@ant-design/icons';
import Intl from '@baifendian/adhere-util-intl';

import { DesignContext } from '../../../Context';

export const Undo = () => {
  const {} = useContext(DesignContext);

  return (
    <span key={config.key} title={config.label} onClick={() => {}}>
      {config.icon}
    </span>
  );
};

const config = {
  key: 'undo',
  label: Intl.get('undo'),
  icon: <ArrowRightOutlined />,
  render: () => <Undo />,
};

export default config;
