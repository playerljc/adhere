import React, { useRef } from 'react';

import FlexLayout from '@baifendian/adhere-ui-flexlayout';

import { Button, Form, Input } from '../../src';
import NestingFormItem from '../../src/form/NestingFormItem';

import '@baifendian/adhere-ui-flexlayout/lib/index.less';

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
    <div style={{ overflowY: 'auto' }}>
      <Form
        form={form}
        name="nestingForm"
        scrollToFirstError
        onFinish={(values) => {
          console.log('onFinish', values);
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
          useCustomError
          getErrorContainer={() => document.getElementById('error')}
        >
          <Input placeholder="name" />
        </Form.Item>

        <Form.Item
          noStyle
          name="obj1"
          rules={[
            {
              validator: function () {
                return obj1Ref.current.validateFields();
              },
            },
          ]}
        >
          <NestingFormItem ref={obj1Ref}>
            <Form.Item
              name="a1"
              label="a1"
              rules={[
                {
                  required: true,
                  message: '请输入a',
                },
              ]}
            >
              <Input placeholder="a1" />
            </Form.Item>

            <Form.Item
              name="b1"
              label="b1"
              rules={[
                {
                  required: true,
                  message: '请输入b',
                },
              ]}
            >
              <Input placeholder="b1" />
            </Form.Item>

            <Form.Item
              noStyle
              name="o1"
              rules={[
                {
                  validator: function () {
                    return obj2Ref.current.validateFields();
                  },
                },
              ]}
            >
              <Form.NestingFormItem ref={obj2Ref}>
                <Form.Item
                  name="c1"
                  label="c1"
                  rules={[
                    {
                      required: true,
                      message: '请输入c1',
                    },
                  ]}
                >
                  <Input placeholder="c1" />
                </Form.Item>
              </Form.NestingFormItem>
            </Form.Item>
          </NestingFormItem>
        </Form.Item>

        <Form.List name="array">
          {(fields, { add, remove }, { errors }) => (
            <>
              <Button
                onClick={() => {
                  add();
                }}
              >
                Add
              </Button>

              {fields.map((field) => (
                <Form.Item
                  noStyle
                  key={field.key}
                  {...field}
                  rules={[
                    {
                      validator: () => {
                        const map = getMap();
                        const ref = map.get(field.key);
                        return ref.validateFields();
                      },
                    },
                  ]}
                >
                  <Form.NestingFormItem
                    ref={(node) => {
                      const map = getMap();
                      if (node) {
                        map.set(field.key, node);
                      } else {
                        map.delete(field.key);
                      }
                    }}
                  >
                    <FlexLayout direction="horizontal">
                      <FlexLayout.Auto>
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

                        <Form.Item
                          name="key3"
                          noStyle
                          rules={[
                            {
                              validator: () => {
                                const map = getMap();
                                const ref = map.get(`${field.key}_key3`);
                                return ref.validateFields();
                              },
                            },
                          ]}
                        >
                          <Form.NestingFormItem
                            ref={(node) => {
                              const map = getMap();
                              if (node) {
                                map.set(`${field.key}_key3`, node);
                              } else {
                                map.delete(`${field.key}_key3`);
                              }
                            }}
                          >
                            <Form.Item
                              name="key3"
                              label="key3"
                              rules={[
                                {
                                  required: true,
                                  message: '请输入key3',
                                },
                              ]}
                            >
                              <Input />
                            </Form.Item>
                          </Form.NestingFormItem>
                        </Form.Item>
                      </FlexLayout.Auto>

                      <FlexLayout.Fixed>
                        <Button
                          onClick={() => {
                            remove(field.name);
                          }}
                        >
                          删除
                        </Button>
                      </FlexLayout.Fixed>
                    </FlexLayout>
                  </Form.NestingFormItem>
                </Form.Item>
              ))}
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

      <div id="error" style={{ color: 'red', marginTop: 12 }} />
    </div>
  );
};
