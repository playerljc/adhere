import React, { useRef } from 'react';

import { Button, Form, Input } from '../../src';

import '../../src/index.less';

export default () => {
  const [form] = Form.useForm();
  const itemsRef = useRef(null);
  const obj1Ref = useRef();
  const obj2Ref = useRef();

  function getMap() {
    if (!itemsRef.current) {
      itemsRef.current = new Map();
    }
    return itemsRef.current;
  }

  return (
    <div style={{ height: '100%', overflowY: 'auto' }}>
      <Form
        form={form}
        layout="horizontal"
        footer={
          <Button
            block
            color="primary"
            size="middle"
            onClick={() => {
              form
                .validateFields()
                .then((values) => {
                  alert(JSON.stringify(values));
                })
                .catch(() => {
                  alert(JSON.stringify(form.getFieldsError()));
                });
            }}
          >
            提交
          </Button>
        }
      >
        <Form.Item
          name="name"
          label="姓名"
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
          name="obj1"
          rules={[
            {
              validator: () => obj1Ref.current.validateFields(),
            },
          ]}
          style={{ padding: 0 }}
        >
          <Form.NestingFormItem
            ref={obj1Ref}
            formProps={{
              layout: 'horizontal',
            }}
          >
            <Form.Item
              name="a"
              label="a"
              rules={[
                {
                  required: true,
                  message: '请输入a',
                },
              ]}
            >
              <Input placeholder="a" />
            </Form.Item>

            <Form.Item
              name="b"
              rules={[
                {
                  validator: () => obj2Ref.current.validateFields(),
                },
              ]}
              style={{ padding: 0 }}
            >
              <Form.NestingFormItem
                ref={obj2Ref}
                formProps={{
                  layout: 'horizontal',
                }}
              >
                <Form.Item
                  name="b.1"
                  label="b.1"
                  rules={[
                    {
                      required: true,
                      message: '请输入b.1',
                    },
                  ]}
                >
                  <Input placeholder="b.1" />
                </Form.Item>

                <Form.Item
                  name="b.2"
                  label="b.2"
                  rules={[
                    {
                      required: true,
                      message: '请输入b.2',
                    },
                  ]}
                >
                  <Input placeholder="b.2" />
                </Form.Item>
              </Form.NestingFormItem>
            </Form.Item>
          </Form.NestingFormItem>
        </Form.Item>

        <Button
          color="primary"
          block
          onClick={() => {
            form.setFieldsValue({
              array: [
                ...(form.getFieldValue('array') ?? []),
                {
                  key1: '',
                  key2: '',
                },
              ],
            });
          }}
        >
          Add
        </Button>

        <Form.Array name="array">
          {(fields) =>
            fields.map(({ index }) => (
              <Form.Item
                name={[index]}
                key={index}
                rules={[
                  {
                    validator: () => {
                      const map = getMap();
                      const ref = map.get(index);
                      return ref.validateFields();
                    },
                  },
                ]}
              >
                <Form.NestingFormItem
                  ref={(node) => {
                    const map = getMap();
                    if (node) {
                      map.set(index, node);
                    } else {
                      map.delete(index);
                    }
                  }}
                  formProps={{
                    layout: 'horizontal',
                  }}
                >
                  <Form.Item
                    name="key1"
                    label="key1"
                    rules={[
                      {
                        required: true,
                        message: '请输入key1',
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>

                  <Form.Item
                    name="key2"
                    label="key2"
                    rules={[
                      {
                        required: true,
                        message: '请输入key2',
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </Form.NestingFormItem>
              </Form.Item>
            ))
          }
        </Form.Array>
      </Form>
    </div>
  );
};
