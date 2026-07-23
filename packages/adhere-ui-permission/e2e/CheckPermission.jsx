import { Button, Space } from 'antd';
import React, { useState } from 'react';

import { checkPermission, getPermission, setPermission } from '../src/index';

setPermission(['read', 'write']);

/**
 * CheckPermission
 * @description setPermission / getPermission / checkPermission
 */
export default () => {
  const [result, setResult] = useState('');

  return (
    <div style={{ padding: 24, lineHeight: 1.8 }}>
      <p>getPermission()：{JSON.stringify(getPermission())}</p>

      <Space wrap>
        <Button
          onClick={() => {
            setPermission(['read', 'write', 'delete']);
            setResult(`setPermission -> ${JSON.stringify(getPermission())}`);
          }}
        >
          setPermission([read, write, delete])
        </Button>
        <Button
          type="primary"
          onClick={() => {
            setResult(`checkPermission(undefined, 'read') = ${checkPermission(undefined, 'read')}`);
          }}
        >
          check read
        </Button>
        <Button
          onClick={() => {
            setResult(
              `checkPermission(undefined, ['read','admin']) = ${checkPermission(undefined, [
                'read',
                'admin',
              ])}`,
            );
          }}
        >
          check read+admin
        </Button>
        <Button
          onClick={() => {
            setResult(
              `checkPermission(['admin'], 'admin') = ${checkPermission(['admin'], 'admin')}`,
            );
          }}
        >
          自定义 allPermission
        </Button>
      </Space>

      <pre style={{ marginTop: 16, background: '#f5f5f5', padding: 12 }}>{result || '-'}</pre>
    </div>
  );
};
