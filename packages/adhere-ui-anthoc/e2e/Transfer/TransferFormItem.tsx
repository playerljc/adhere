import { Form } from 'antd';
import React from 'react';

import Transfer from '../../src/transfer';

const mockData = Array.from({
  length: 20,
}).map((_, i) => ({
  key: i.toString(),
  title: `content${i + 1}`,
  description: `description of content${i + 1}`,
}));

/**
 * 独立 Transfer 直接作为 Form.Item 子组件（value 映射 targetKeys）
 */
export default () => {
  const [form] = Form.useForm();

  return (
    <Form
      form={form}
      layout="vertical"
      initialValues={{ ids: ['11', '12'] }}
      onValuesChange={(_, all) => {
        console.log('form values', all);
      }}
      style={{ padding: 16 }}
    >
      <Form.Item name="ids" label="独立 Transfer">
        <Transfer
          dataSource={mockData}
          titles={['Source', 'Target']}
          render={(item) => item.title}
          showSearch
        />
      </Form.Item>
    </Form>
  );
};
