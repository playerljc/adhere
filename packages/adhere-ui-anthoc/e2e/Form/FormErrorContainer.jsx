import { Col, Row } from 'antd';
import React from 'react';

import { MinusCircleOutlined } from '@ant-design/icons';

import { Button, Form, Input } from '../../src';

export default () => {
  const [form] = Form.useForm();

  return (
    <div style={{ height: 320, overflowY: 'auto', border: '1px solid #f0f0f0', padding: 16 }}>
      <Form
        form={form}
        name="formErrorContainer"
        scrollToFirstError
        scrollMarginTop={24}
        onFinish={(values) => {
          console.log('onFinish', values);
        }}
      >
        <Form.Item
          name="name"
          label="姓名"
          useCustomError
          getErrorContainer={() => document.getElementById('form-error-container')}
          rules={[
            {
              required: true,
              message: '请输入姓名',
            },
          ]}
        >
          <Input placeholder="name" />
        </Form.Item>

        <Form.Item
          name="address"
          label="地址"
          rules={[
            {
              required: true,
              message: '请输入地址',
            },
          ]}
        >
          <Input placeholder="address" />
        </Form.Item>

        <Form.List
          name="names"
          rules={[
            {
              validator: async (_, names) => {
                if (!names || names.length < 2) {
                  return Promise.reject(new Error('至少添加 2 个乘客'));
                }
              },
            },
          ]}
        >
          {(fields, { add, remove }, { errors }) => (
            <>
              {fields.map((field) => (
                <Row key={field.key} gutter={8} style={{ marginBottom: 8 }}>
                  <Col span={20}>
                    <Form.Item
                      {...field}
                      rules={[
                        {
                          required: true,
                          whitespace: true,
                          message: '请输入乘客姓名或删除该字段',
                        },
                      ]}
                      noStyle
                    >
                      <Input placeholder="passenger name" style={{ width: '100%' }} />
                    </Form.Item>
                  </Col>
                  <Col span={4}>
                    {fields.length > 1 ? (
                      <MinusCircleOutlined onClick={() => remove(field.name)} />
                    ) : null}
                  </Col>
                </Row>
              ))}

              <Button type="dashed" onClick={() => add()} style={{ width: '60%' }}>
                Add field
              </Button>

              <Form.ErrorList errors={errors} />
            </>
          )}
        </Form.List>

        <Form.Item style={{ marginTop: 16 }}>
          <Form.SubmitButton form={form} type="primary" block>
            Submit
          </Form.SubmitButton>
        </Form.Item>
      </Form>

      <div id="form-error-container" style={{ color: 'red', marginTop: 12 }} />
    </div>
  );
};
