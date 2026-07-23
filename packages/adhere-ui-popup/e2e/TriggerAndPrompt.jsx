import { Form, Input, Select } from 'antd';
import React, { forwardRef, useEffect, useImperativeHandle, useRef } from 'react';

import Space from '@baifendian/adhere-ui-space';

import Popup from '../src/index';

import '../src/index.less';

const { Option } = Select;

const UserForm = forwardRef(({ value }, ref) => {
  const [form] = Form.useForm();

  useEffect(() => {
    form.setFieldsValue(value);
  }, [value]);

  useImperativeHandle(ref, () => ({
    validAndGetValues: () => form.validateFields(),
  }));

  return (
    <Form form={form}>
      <Form.Item
        name="note"
        label="Note"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="gender"
        label="Gender"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Select placeholder="Select a option and change input text above" allowClear>
          <Option value="male">male</Option>
          <Option value="female">female</Option>
          <Option value="other">other</Option>
        </Select>
      </Form.Item>
    </Form>
  );
});

export default () => {
  const formRef = useRef();

  return (
    <div>
      <Space.Group direction="vertical" size={20}>
        <Popup.TriggerPrompt
          okText="确认111"
          isShowCloseAction={false}
          renderTrigger={() => <div>trigger</div>}
          title="确认"
          onSubmit={() => {
            return new Promise((resolve) => {
              setTimeout(() => {
                resolve(123);
              }, 2000);
            });
          }}
        >
          <div>Inner</div>
        </Popup.TriggerPrompt>

        <Popup.TriggerPrompt
          value={{ note: '123', gender: 'male' }}
          renderTrigger={() => <div>触发</div>}
          onSubmit={() => {
            return new Promise((resolve, reject) => {
              formRef.current
                .validAndGetValues()
                .then((values) => {
                  resolve(values);
                })
                .catch((error) => {
                  reject(error);
                });
            });
          }}
        >
          <UserForm ref={formRef} />
        </Popup.TriggerPrompt>

        <Form>
          <Form.Item
            name="values"
            label="选人"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Popup.TriggerPrompt
              renderTrigger={() => <div>触发</div>}
              onSubmit={() => {
                return new Promise((resolve, reject) => {});
              }}
            >
              <div>111</div>
            </Popup.TriggerPrompt>
          </Form.Item>
        </Form>

        <Popup.Trigger
          renderTrigger={() => <div>Trigger</div>}
          title="确认"
          actions={[
            {
              key: 'submit',
              color: 'primary',
              children: '提交',
              onClick: () =>
                new Promise((resolve, reject) => {
                  setTimeout(() => {
                    resolve(123);
                  }, 2000);
                }),
            },
            {
              key: 'save',
              color: 'primary',
              children: '暂存',
              onClick: () =>
                new Promise((resolve, reject) => {
                  setTimeout(() => {
                    resolve(123);
                  }, 2000);
                }),
            },
          ]}
        >
          <div>Inner</div>
        </Popup.Trigger>
      </Space.Group>
    </div>
  );
};
