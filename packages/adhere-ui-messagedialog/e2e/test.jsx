import { Button, Form, Input, Select } from 'antd';
import React, { forwardRef, useEffect, useImperativeHandle, useRef } from 'react';

import MessageDialog from '../src/index';
import SelectPerson from './SelectPerson';

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
  const openModal = () => {
    const dialog = MessageDialog.Modal({
      config: {
        title: '查看',
        width: '50%',
        maskClosable: false,
      },
      children: <div>222</div>,
    });
  };

  const openMaximizeModal = () => {
    const dialog = MessageDialog.MaximizeModal({
      config: {
        title: '查看',
        width: '50%',
        maskClosable: false,
      },
      children: <div>222</div>,
    });
  };

  const formRef = useRef();

  const [form] = Form.useForm();

  const personSelectRef = useRef();

  const person = Form.useWatch('person', form);

  return (
    <div>
      <div
        onClick={() => {
          openModal();
        }}
      >
        openModal
      </div>

      <div
        onClick={() => {
          openMaximizeModal();
        }}
      >
        openMaximizeModal
      </div>

      <MessageDialog.TriggerPrompt
        okText="确认"
        renderTrigger={() => <div>trigger</div>}
        modalConfig={{
          config: {
            title: '确认',
          },
        }}
        onSubmit={() => {
          return new Promise((resolve) => {
            setTimeout(() => {
              resolve(123);
            }, 2000);
          });
        }}
      >
        <div>Inner</div>
      </MessageDialog.TriggerPrompt>

      <MessageDialog.TriggerPrompt
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
      </MessageDialog.TriggerPrompt>

      <Form
        name="PersonForm"
        form={form}
        onFinish={(values) => {
          alert(values);
        }}
      >
        <Form.Item
          name="person"
          label="人员选择"
          rules={[
            {
              required: true,
              message: '请选择人员',
            },
          ]}
        >
          <MessageDialog.TriggerPrompt
            okText="确认"
            renderTrigger={() => <Button type="primary">选取({person?.length})</Button>}
            modalConfig={{
              config: {
                title: '人员选择',
              },
            }}
            onSubmit={() =>
              new Promise((resolve) => {
                resolve(personSelectRef.current.getValues());
              })
            }
          >
            <SelectPerson ref={personSelectRef} />
          </MessageDialog.TriggerPrompt>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            提交
          </Button>
        </Form.Item>
      </Form>

      <MessageDialog.Trigger
        renderTrigger={() => <div>Trigger</div>}
        modalConfig={{
          config: {
            title: '确认',
          },
        }}
        footer={[
          {
            key: 'submit',
            type: 'primary',
            children: '提交',
            onClick: () =>
              new Promise((resolve, reject) => {
                setTimeout(() => {
                  resolve(123);
                }, 2000);
              }),
          },
          {
            key: 'submit',
            type: 'primary',
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
      </MessageDialog.Trigger>
    </div>
  );
};
