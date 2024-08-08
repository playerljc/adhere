import { Button, DatePicker, Form, Input, Radio } from 'antd';
import React from 'react';

import { Resource, Space, TableGridLayout } from '@baifendian/adhere';

const { Label, Value } = TableGridLayout;

export default () => {
  const [form] = Form.useForm();

  return (
    <Space.Group>
      <div>
        <Button
          type="primary"
          onClick={() => {
            form
              .validateFields()
              .then((values) => {
                alert(JSON.stringify(values));
              })
              .catch((err) => {
                console.log(err);
              });
          }}
        >
          提交
        </Button>
      </div>
      <Form form={form}>
        <TableGridLayout
          innerStyle={{ padding: '0 0 20px 0' }}
          // bordered
          // parity
          // density="middle"
          mode="bordered"
          data={[
            {
              name: 'g1',
              width: '100%',
              columnCount: 4,
              colgroup: [135, 'auto', 130, 'auto', 90, 150, , 'auto'],
              data: [
                {
                  key: 'UserName',
                  require: true,
                  label: <Label>UserName：</Label>,
                  value: (
                    <Value>
                      <Form.Item
                        name="username"
                        rules={[
                          {
                            required: true,
                            message: '请输入姓名',
                          },
                          Resource.Dict.value.FormInputStringRule.value,
                        ]}
                      >
                        <Input placeholder="username" />
                      </Form.Item>
                    </Value>
                  ),
                },
                {
                  key: 'Telephone',
                  require: true,
                  label: <Label>Telephone：</Label>,
                  value: (
                    <Value>
                      <Form.Item
                        name="Telephone"
                        rules={[
                          {
                            required: true,
                            message: '请输入姓名',
                          },
                          Resource.Dict.value.FormInputStringRule.value,
                        ]}
                      >
                        <Input placeholder="Telephone" />
                      </Form.Item>
                    </Value>
                  ),
                },
                {
                  key: 'Sex',
                  require: true,
                  label: <Label>Sex：</Label>,
                  value: (
                    <Value>
                      <Form.Item
                        name="Sex"
                        rules={[
                          {
                            required: true,
                            message: '请选择性别',
                          },
                        ]}
                      >
                        <Radio.Group
                          options={[
                            { label: '男', value: 1 },
                            { label: '女', value: 0 },
                          ]}
                        />
                      </Form.Item>
                    </Value>
                  ),
                },
                {
                  key: 'Birthday',
                  require: true,
                  label: <Label>Birthday：</Label>,
                  value: (
                    <Value>
                      <Form.Item
                        name="Birthday"
                        rules={[
                          {
                            required: true,
                            message: '请选择出生年月',
                          },
                        ]}
                      >
                        <DatePicker />
                      </Form.Item>
                    </Value>
                  ),
                },
                {
                  key: 'Address',
                  require: true,
                  label: <Label valign="top">Address：</Label>,
                  value: (
                    <Value colSpan={7}>
                      <Form.Item
                        name="Address"
                        rules={[
                          {
                            required: true,
                            message: '请输入地址',
                          },
                        ]}
                      >
                        <Input.TextArea />
                      </Form.Item>
                    </Value>
                  ),
                },
              ],
            },
          ]}
        />
      </Form>
    </Space.Group>
  );
};
