import { Button, Empty, Input, Space, Tag } from 'antd';
import React, { useState } from 'react';

import {
  Permission,
  getPermission,
  setPermission,
} from '../src/index';

setPermission(['read', 'write']);

/**
 * PermissionComponent
 * @description Permission 组件：单权限 / 多权限 / noMatch
 */
export default () => {
  const [allPermission, setAllPermission] = useState(() => getPermission());
  const [required, setRequired] = useState('read');
  const [inputAll, setInputAll] = useState(allPermission.join(','));
  const [inputRequired, setInputRequired] = useState(required);

  return (
    <div style={{ padding: 24, lineHeight: 1.8 }}>
      <Space direction="vertical" style={{ width: '100%' }} size={16}>
        <div>
          <div style={{ marginBottom: 8 }}>全局权限（逗号分隔）</div>
          <Space>
            <Input
              value={inputAll}
              onChange={(e) => setInputAll(e.target.value)}
              style={{ width: 280 }}
            />
            <Button
              type="primary"
              onClick={() => {
                const next = inputAll
                  .split(',')
                  .map((s) => s.trim())
                  .filter(Boolean);
                setPermission(next);
                setAllPermission(getPermission());
              }}
            >
              setPermission
            </Button>
          </Space>
          <div style={{ marginTop: 8 }}>
            getPermission：
            {allPermission.map((item) => (
              <Tag key={item}>{item}</Tag>
            ))}
          </div>
        </div>

        <div>
          <div style={{ marginBottom: 8 }}>当前需要的权限</div>
          <Space>
            <Input
              value={inputRequired}
              onChange={(e) => setInputRequired(e.target.value)}
              style={{ width: 280 }}
              placeholder="read 或 read,write"
            />
            <Button
              onClick={() => {
                const parts = inputRequired
                  .split(',')
                  .map((s) => s.trim())
                  .filter(Boolean);
                setRequired(parts.length <= 1 ? parts[0] || '' : parts);
              }}
            >
              应用
            </Button>
          </Space>
        </div>

        <Permission permissions={required} noMatch={() => <Empty description="无权限" />}>
          <Button type="primary">有权限才能看到这个按钮</Button>
        </Permission>

        <Permission
          allPermission={['admin', 'user']}
          permissions="admin"
          noMatch={() => <Empty description="需要管理员权限" />}
        >
          <Button>自定义 allPermission=admin 可见</Button>
        </Permission>
      </Space>
    </div>
  );
};
