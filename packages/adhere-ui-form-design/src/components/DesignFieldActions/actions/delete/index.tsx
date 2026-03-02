import React from 'react';

import { DeleteOutlined } from '@ant-design/icons';
import Intl from '@baifendian/adhere-util-intl';

export const Delete = {
  key: 'delete',
  icon: <DeleteOutlined />,
  label: Intl.get('delete'),
  handler: () => {},
};
