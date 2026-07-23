import { Space, Toast } from 'antd-mobile';
import React from 'react';

import { SubmitButton } from '../src/index';

export default () => {
  return (
    <div style={{ padding: 16 }}>
      <Space>
        <SubmitButton
          color="primary"
          onClick={() =>
            new Promise((resolve) => {
              setTimeout(() => {
                Toast.show({ content: '提交成功' });
                resolve();
              }, 1000);
            })
          }
        >
          异步提交
        </SubmitButton>
        <SubmitButton
          color="danger"
          onClick={() =>
            new Promise((_, reject) => {
              setTimeout(() => {
                Toast.show({ content: '提交失败', icon: 'fail' });
                reject(new Error('submit failed'));
              }, 800);
            }).catch(() => undefined)
          }
        >
          失败示例
        </SubmitButton>
      </Space>
    </div>
  );
};
