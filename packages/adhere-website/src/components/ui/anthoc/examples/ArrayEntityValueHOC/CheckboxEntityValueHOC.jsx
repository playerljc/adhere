import { Button } from 'antd';
import React, { useEffect } from 'react';
import { useImmer } from 'use-immer';

import { ArrayEntityValueHOC, Checkbox, Form } from '@baifendian/adhere-ui-anthoc';

import Book from '@/mock/book';

const options = Array.from({ length: 26 }).map((t, _index) => {
  const letter = String.fromCharCode(97 + _index).toUpperCase();

  return {
    label: letter,
    value: letter,
  };
});

export default () => {
  const [form] = Form.useForm();

  const [value, setValue] = useImmer({
    options: [],
    value: [],
  });

  useEffect(() => {}, []);

  return (
    <Form
      form={form}
      labelAlign="right"
      labelCol={{ span: 3 }}
      wrapperCol={{ span: 21 }}
      onFinish={(values) => {
        console.log('values', values);
        alert(JSON.stringify(values));
      }}
    >
      <Form.Item
        name="sex"
        label="性别"
        rules={[
          {
            required: true,
            message: '请选择性别',
          },
        ]}
      >
        <ArrayEntityValueHOC>
          <Checkbox.VerticalCheckAllCheckbox
            options={[
              {
                label: '男',
                value: '2',
              },
              {
                label: '女',
                value: '1',
              },
            ]}
          />
        </ArrayEntityValueHOC>
      </Form.Item>

      <Form.Item
        name="sex1"
        label="性别"
        rules={[
          {
            required: true,
            message: '请选择性别',
          },
        ]}
      >
        <ArrayEntityValueHOC>
          <Checkbox.HorizontalCheckAllCheckbox
            options={[
              {
                label: '男',
                value: '2',
              },
              {
                label: '女',
                value: '1',
              },
            ]}
          />
        </ArrayEntityValueHOC>
      </Form.Item>

      <Form.Item
        name="letter1"
        label="a-z"
        rules={[
          {
            required: true,
            message: '请选择a-z',
          },
        ]}
      >
        <ArrayEntityValueHOC>
          <Checkbox.CheckboxSelect placeholder="A-Z" options={options} />
        </ArrayEntityValueHOC>
      </Form.Item>

      <Form.Item
        name="letter2"
        label="a-z"
        rules={[
          {
            required: true,
            message: '请选择a-z',
          },
        ]}
      >
        <ArrayEntityValueHOC>
          <Checkbox.CheckAllCheckboxSelect placeholder="A-Z" options={options} />
        </ArrayEntityValueHOC>
      </Form.Item>

      <Form.Item
        name="book"
        label="book"
        rules={[
          {
            required: true,
            message: '请选择a-z',
          },
        ]}
      >
        <ArrayEntityValueHOC>
          <Checkbox.AutoCompleteCheckboxSelect
            placeholder="AutoCompleteCheckboxSelect"
            dropdownStyle={{ maxHeight: 300, overflowY: 'auto' }}
            options={value.options}
            loadData={(_kw) =>
              new Promise((resolve) => {
                if (!_kw) {
                  setValue((draft) => {
                    draft.options = [];
                  });
                  resolve();
                  return;
                }

                setTimeout(() => {
                  const result = [...Book]
                    .filter((_book) => _book.t.indexOf(_kw) !== -1)
                    .map((t) => ({
                      label: t.t,
                      value: t.id,
                    }));

                  setValue((draft) => {
                    draft.options = result;
                  });

                  resolve();
                }, 500);
              })
            }
          />
        </ArrayEntityValueHOC>
      </Form.Item>

      <Form.Item wrapperCol={{ span: 24 }}>
        <Button htmlType="submit" block type="primary">
          提交
        </Button>
      </Form.Item>
    </Form>
  );
};
