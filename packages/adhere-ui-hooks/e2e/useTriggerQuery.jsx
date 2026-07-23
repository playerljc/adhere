import { Button, Input, Space } from 'antd';
import React from 'react';

import Hooks from '../src';

const { useTriggerQuery } = Hooks;

/**
 * useTriggerQuery
 * @description 表单字段与 searchParams 分离的查询管理
 */
export default () => {
  const { fieldsValue, searchParams, setFieldsValue, search, reset } = useTriggerQuery({
    keyword: '',
    status: 'all',
  });

  return (
    <div style={{ padding: 24, lineHeight: 1.8 }}>
      <Space direction="vertical" style={{ width: '100%' }}>
        <Input
          placeholder="keyword"
          value={fieldsValue.current.keyword}
          onChange={(e) => {
            setFieldsValue((draft) => {
              draft.keyword = e.target.value;
            });
          }}
          style={{ width: 240 }}
        />
        <Space>
          <Button type="primary" onClick={() => search()}>
            搜索
          </Button>
          <Button onClick={() => reset()}>重置</Button>
        </Space>
        <pre style={{ background: '#f5f5f5', padding: 12 }}>
          {JSON.stringify(
            {
              fieldsValue: fieldsValue.current,
              searchParams: searchParams.current,
            },
            null,
            2,
          )}
        </pre>
      </Space>
    </div>
  );
};
