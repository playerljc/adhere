import React, { useContext } from 'react';

import { CodeOutlined } from '@ant-design/icons';
import Intl from '@baifendian/adhere-util-intl';

import { DesignContext } from '../../../Context';

export const GenJSON = () => {
  const {} = useContext(DesignContext);

  return (
    <span key={config.key} title={config.label} onClick={() => {}}>
      {config.icon} {config.label}
    </span>
  );
};

const config = {
  key: 'genJSON',
  label: Intl.get('gen_json'),
  icon: <CodeOutlined />,
  render: () => <GenJSON />,
};

export default config;
