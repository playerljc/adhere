import { Button } from 'antd';
import React, { useEffect } from 'react';
import { useImmer } from 'use-immer';

import { ArrayEntityValueHOC, Form, Tag } from '@baifendian/adhere-ui-anthoc';

import Book from '@/mock/book';

const options = Array.from({ length: 26 }).map((t, _index) => {
  const letter = String.fromCharCode(97 + _index).toUpperCase();

  return {
    value: letter,
    label: letter,
    children: letter,
  };
});

export default () => {
  const [form] = Form.useForm();

  const [value6, setValue6] = useImmer({
    options: [],
    value: [],
  });

  const [value7, setValue7] = useImmer({
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
        label="a-z"
        rules={[
          {
            required: true,
            message: '请选择性别',
          },
        ]}
      >
        <ArrayEntityValueHOC>
          <Tag.TagSelect mode="multiple" placeholder="A-Z" options={options} />
        </ArrayEntityValueHOC>
      </Form.Item>

      <Form.Item
        name="sex1"
        label="a-z"
        rules={[
          {
            required: true,
            message: '请选择性别',
          },
        ]}
      >
        <ArrayEntityValueHOC>
          <Tag.VerticalCheckableTagGroup mode="multiple" options={options} />
        </ArrayEntityValueHOC>
      </Form.Item>

      <Form.Item
        name="sex2"
        label="a-z"
        rules={[
          {
            required: true,
            message: '请选择性别',
          },
        ]}
      >
        <ArrayEntityValueHOC>
          <Tag.VerticalCheckAllCheckableTagGroup options={options} />
        </ArrayEntityValueHOC>
      </Form.Item>

      <Form.Item
        name="sex3"
        label="a-z"
        rules={[
          {
            required: true,
            message: '请选择性别',
          },
        ]}
      >
        <ArrayEntityValueHOC>
          <Tag.CheckAllTagSelect placeholder="A-Z" options={options} />
        </ArrayEntityValueHOC>
      </Form.Item>

      <Form.Item
        name="sex4"
        label="a-z"
        rules={[
          {
            required: true,
            message: '请选择性别',
          },
        ]}
      >
        <ArrayEntityValueHOC>
          <Tag.HorizontalCheckableTagGroup mode="multiple" options={options} />
        </ArrayEntityValueHOC>
      </Form.Item>

      <Form.Item
        name="sex5"
        label="a-z"
        rules={[
          {
            required: true,
            message: '请选择性别',
          },
        ]}
      >
        <ArrayEntityValueHOC>
          <Tag.HorizontalCheckAllCheckableTagGroup options={options} />
        </ArrayEntityValueHOC>
      </Form.Item>

      <Form.Item
        name="sex6"
        label="a-z"
        rules={[
          {
            required: true,
            message: '请选择性别',
          },
        ]}
      >
        <ArrayEntityValueHOC>
          <Tag.AutoCompleteTagSelect
            placeholder="AutoCompleteTagSelect"
            mode="multiple"
            options={value6.options}
            loadData={(_kw) =>
              new Promise((resolve) => {
                if (!_kw) {
                  setValue6((draft) => {
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
                      children: t.t,
                    }));

                  setValue6((draft) => {
                    draft.options = result;
                  });

                  resolve();
                }, 500);
              })
            }
            // tagProps={{
            //   mode: 'multiple',
            // }}
          />
        </ArrayEntityValueHOC>
      </Form.Item>

      <Form.Item
        name="sex7"
        label="a-z"
        rules={[
          {
            required: true,
            message: '请选择性别',
          },
        ]}
      >
        <ArrayEntityValueHOC>
          <Tag.AutoCompleteCheckAllTagSelect
            placeholder="AutoCompleteCheckAllTagSelect"
            options={value7.options}
            loadData={(_kw) =>
              new Promise((resolve) => {
                if (!_kw) {
                  setValue7((draft) => {
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
                      children: t.t,
                    }));

                  setValue7((draft) => {
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
