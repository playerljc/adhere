import React, { useEffect, useRef } from 'react';

import { Button, Form, Input } from '../../src';

import '@baifendian/adhere-ui-flexlayout/lib/index.less';

export default () => {
  const [form] = Form.useForm();
  const itemsRef = useRef(null);

  const obj1Ref = useRef();
  const obj2Ref = useRef();

  function getMap() {
    if (!itemsRef.current) {
      // 首次运行时初始化 Map。
      itemsRef.current = new Map();
    }
    return itemsRef.current;
  }

  useEffect(() => {
    // form.setFieldsValue(JSON.parse('{"name":"1","obj1":{"a":"2","b":{"b.1":"3","b.2":"4"}}}'));
  }, []);

  return (
    <div style={{ height: '100%', overflowY: 'auto' }}>
      <Form
        form={form}
        layout="horizontal"
        onFinishFailed={() => {
          debugger;
        }}
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
              validator: () => {
                return obj1Ref.current.validateFields();
              },
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
                  validator: () => {
                    return obj2Ref.current.validateFields();
                  },
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
          {(fields) => {
            return fields.map(({ index }) => {
              return (
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
              );
            });
          }}
        </Form.Array>
      </Form>

      <div>
        <Button
          block
          onClick={() => {
            form
              .validateFields()
              .then((values) => {
                debugger;
              })
              .catch((err) => {
                debugger;

                const error = form.getFieldsError();
                debugger;
              });
          }}
        >
          Submit
        </Button>
      </div>
    </div>
  );
};
