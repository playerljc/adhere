import { Button, Form, message } from 'antd';
import React from 'react';

import Expression from '../src/index';

import '../src/index.less';

export default () => {
  const [form] = Form.useForm();

  return (
    <div style={{ padding: 24, maxWidth: 720 }}>
      <Form
        form={form}
        layout="vertical"
        onFinish={(values) => {
          message.success(`提交成功：${values.expression ? '有值' : '空'}`);
        }}
      >
        <Form.Item
          name="expression"
          label="表达式"
          rules={[Expression.AntdFormRequireValidator('请输入表达式')]}
        >
          <Expression
            allowClear
            disableQuickTip
            placeholder="表单必填校验"
            onContinuousTextChange={() => {}}
          />
        </Form.Item>

        <Button type="primary" htmlType="submit">
          提交
        </Button>
      </Form>
    </div>
  );
};
