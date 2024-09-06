import React, { useEffect, useRef } from 'react';

import FlexLayout from '@baifendian/adhere-ui-flexlayout';

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
    form.setFieldsValue(JSON.parse('{"name":"1","obj1":{"a":"2","b":{"b.1":"3","b.2":"4"}}}'));
  }, []);

  return (
    <div>
      <Form form={form}>
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
        >
          <Form.NestingFormItem ref={obj1Ref}>
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
            >
              <Form.NestingFormItem ref={obj2Ref}>
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

        <Form.List name="array">
          {(fields, { add, remove }, { errors }) => {
            return (
              <>
                <Button
                  onClick={() => {
                    add();
                  }}
                >
                  Add
                </Button>

                {fields.map((field) => {
                  return (
                    <Form.Item
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
                  );
                })}
                <Form.ErrorList errors={errors} />
              </>
            );
          }}
        </Form.List>
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
              });
          }}
        >
          Submit
        </Button>
      </div>
    </div>
  );

  /**
   * 人
   * 姓名
   * 性别
   * 出生年月
   * 联系电话
   *   联系电话
   *   紧急联系电话
   * 住址
   *   常驻地址
   *   户籍地址
   * 父亲
   *   姓名
   *   出生年月
   *   籍贯
   *   住址
   * 母亲
   *   姓名
   *   出生年月
   *   籍贯
   *   住址
   *
   * 房屋信息
   *
   * 车辆信息
   */
};
