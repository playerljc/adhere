import { Table } from 'antd';
import React from 'react';

import { Browsersniff } from '@baifendian/adhere';

export default () => (
  <Table
    columns={[
      {
        title: '浏览器',
        dataIndex: 'browser',
        key: 'browser',
      },
      {
        title: '版本',
        dataIndex: 'version',
        key: 'version',
      },
      {
        title: '内核',
        dataIndex: 'engine',
        key: 'engine',
      },
      {
        title: '操作系统',
        dataIndex: 'os',
        key: 'os',
      },
      {
        title: '设备',
        dataIndex: 'device',
        key: 'device',
      },
      {
        title: '语言',
        dataIndex: 'language',
        key: 'language',
      },
    ]}
    dataSource={[
      {
        browser: Browsersniff.browser(),
        device: Browsersniff.device(),
        engine: Browsersniff.engine(),
        language: Browsersniff.language(),
        os: Browsersniff.os(),
        version: Browsersniff.version(),
      },
    ]}
  />
);
