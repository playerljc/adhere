import React, { useContext } from 'react';

import { DeleteOutlined } from '@ant-design/icons';
import Intl from '@baifendian/adhere-util-intl';

import { DesignContext } from '../../../../Design/Context';

/**
 * Delete
 * @description 删除制定的控件
 * @param {string} id
 * @constructor
 */
export const Delete = ({ id }: { id: string }) => {
  const { deleteFieldByChildren } = useContext(DesignContext);

  return (
    <span
      key={config.key}
      title={config.label}
      onClick={() => {
        deleteFieldByChildren(id);
      }}
    >
      {config.icon}
    </span>
  );
};

const config = {
  key: 'delete',
  label: Intl.get('delete'),
  icon: <DeleteOutlined />,
  render: (id: string) => <Delete id={id} />,
};

export default config;
