import { Button, Space, Tag } from 'antd';
import React, { useState } from 'react';

import { PermissionFun, getPermission, setPermission } from '../src/index';

setPermission(['read']);

/**
 * PermissionFunDemo
 * @description PermissionFun 函数式权限渲染
 */
export default () => {
  const [tick, setTick] = useState(0);

  const single = PermissionFun({
    permissions: 'read',
    match: <Tag color="green">有 read</Tag>,
    noMatch: <Tag color="red">无 read</Tag>,
  });

  const multi = PermissionFun({
    permissions: ['read', 'write'],
    match: <Tag color="green">有 read+write</Tag>,
    noMatch: <Tag color="red">缺少 read+write</Tag>,
  });

  return (
    <div style={{ padding: 24, lineHeight: 2 }}>
      <p>当前权限：{getPermission().join(', ') || '(空)'}</p>
      <Space>
        <Button
          onClick={() => {
            setPermission(['read']);
            setTick((n) => n + 1);
          }}
        >
          设为 read
        </Button>
        <Button
          type="primary"
          onClick={() => {
            setPermission(['read', 'write']);
            setTick((n) => n + 1);
          }}
        >
          设为 read,write
        </Button>
      </Space>
      <div key={tick} style={{ marginTop: 16 }}>
        <div>单权限：{single}</div>
        <div>多权限：{multi}</div>
      </div>
    </div>
  );
};
