import { Button, Space } from 'antd';
import React, { useState } from 'react';

import { PermissionUtils, setPermission } from '../src/index';

setPermission(['read', 'write', 'delete']);

/**
 * PermissionUtilsDemo
 * @description hasAny / hasAll / intersection / isEmpty / isValidFormat
 */
export default () => {
  const [result, setResult] = useState('');

  return (
    <div style={{ padding: 24 }}>
      <Space wrap>
        <Button
          type="primary"
          onClick={() => {
            setResult(
              `hasAnyPermission(undefined, ['admin','write']) = ${PermissionUtils.hasAnyPermission(
                undefined,
                ['admin', 'write'],
              )}`,
            );
          }}
        >
          hasAnyPermission
        </Button>
        <Button
          onClick={() => {
            setResult(
              `hasAllPermissions(undefined, ['read','write']) = ${PermissionUtils.hasAllPermissions(
                undefined,
                ['read', 'write'],
              )}`,
            );
          }}
        >
          hasAllPermissions
        </Button>
        <Button
          onClick={() => {
            setResult(
              `getPermissionIntersection(...) = ${JSON.stringify(
                PermissionUtils.getPermissionIntersection(undefined, [
                  'read',
                  'admin',
                  'write',
                ]),
              )}`,
            );
          }}
        >
          getPermissionIntersection
        </Button>
        <Button
          onClick={() => {
            setResult(
              `isEmpty([])=${PermissionUtils.isEmpty([])}, isValidFormat('user:read')=${PermissionUtils.isValidFormat(
                'user:read',
              )}`,
            );
          }}
        >
          isEmpty / isValidFormat
        </Button>
      </Space>

      <pre style={{ marginTop: 16, background: '#f5f5f5', padding: 12 }}>{result || '-'}</pre>
    </div>
  );
};
