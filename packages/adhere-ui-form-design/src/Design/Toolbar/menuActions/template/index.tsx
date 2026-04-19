import React, { useContext } from 'react';

import { SnippetsOutlined } from '@ant-design/icons';
import Intl from '@baifendian/adhere-util-intl';

import { DesignContext } from '../../../Context';

export const Template = () => {
  const {} = useContext(DesignContext);

  return (
    <span key={config.key} title={config.label} onClick={() => {}}>
      {config.icon} {config.label}
    </span>
  );
};

const config = {
  key: 'template',
  label: Intl.get('template'),
  icon: <SnippetsOutlined />,
  render: () => <Template />,
};

export default config;
