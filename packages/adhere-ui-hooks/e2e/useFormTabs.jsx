import { Button, Form, Input, Space, Tabs } from 'antd';
import React, { useMemo } from 'react';

import Hooks from '../src';

const { useFormTabs } = Hooks;

/**
 * useFormTabs
 * @description 多页签 Form 校验失败时切到首个错误页签
 */
export default () => {
  const [form] = Form.useForm();

  const tabs = useMemo(
    () => [
      { key: 'a', fieldNames: ['name'] },
      { key: 'b', fieldNames: ['email'] },
    ],
    [],
  );

  const { activeTab, setActiveTab, validateFields } = useFormTabs({
    form,
    tabs,
    defaultTab: 'a',
  });

  return (
    <div style={{ padding: 24 }}>
      <Form form={form} layout="vertical">
        <Tabs
          activeKey={activeTab}
          onChange={setActiveTab}
          items={[
            {
              key: 'a',
              label: '基本信息',
              children: (
                <Form.Item name="name" label="姓名" rules={[{ required: true, message: '请输入姓名' }]}>
                  <Input placeholder="name" />
                </Form.Item>
              ),
            },
            {
              key: 'b',
              label: '联系方式',
              children: (
                <Form.Item
                  name="email"
                  label="邮箱"
                  rules={[
                    { required: true, message: '请输入邮箱' },
                    { type: 'email', message: '邮箱格式错误' },
                  ]}
                >
                  <Input placeholder="email" />
                </Form.Item>
              ),
            },
          ]}
        />
      </Form>

      <Space style={{ marginTop: 12 }}>
        <Button
          type="primary"
          onClick={() => {
            validateFields().then((values) => {
              alert(JSON.stringify(values));
            });
          }}
        >
          校验并提交
        </Button>
        <Button onClick={() => form.resetFields()}>重置</Button>
      </Space>
    </div>
  );
};
