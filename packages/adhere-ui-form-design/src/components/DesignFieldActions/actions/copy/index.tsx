import React from 'react';

import { CopyOutlined } from '@ant-design/icons';
import Intl from '@baifendian/adhere-util-intl';

export const Copy = {
  key: 'copy',
  icon: <CopyOutlined />,
  label: Intl.get('copy'),
  handler: () => {},
};
