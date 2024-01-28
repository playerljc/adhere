import React, { useEffect } from 'react';
import { useImmer } from 'use-immer';

import { ArrayEntityValueHOC, Avatar, Button, Form, List } from '@baifendian/adhere-ui-anthoc';

import Book from '@/mock/book';

const data = [
  {
    title: 'Ant Design Title 1',
  },
  {
    title: 'Ant Design Title 2',
  },
  {
    title: 'Ant Design Title 3',
  },
  {
    title: 'Ant Design Title 4',
  },
].map(({ title }) => ({
  title,
  label: title,
  value: title,
}));

export default () => {
  const [form] = Form.useForm();

  const [value3, setValue3] = useImmer({
    options: [],
    value: [],
  });

  const [value4, setValue4] = useImmer({
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
          <List.ListSelect
            placeholder="List"
            options={data}
            listProps={{
              itemLayout: 'horizontal',
              renderItem: (item, index) => (
                <List.Item>
                  <List.Item.Meta
                    avatar={
                      <Avatar
                        src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`}
                      />
                    }
                    title={<a href="https://ant.design">{item.title}</a>}
                    description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                  />
                </List.Item>
              ),
            }}
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
          <List.ListSelect
            mode="multiple"
            placeholder="List"
            options={data}
            listProps={{
              itemLayout: 'horizontal',
              renderItem: (item, index) => (
                <List.Item>
                  <List.Item.Meta
                    avatar={
                      <Avatar
                        src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`}
                      />
                    }
                    title={<a href="https://ant.design">{item.title}</a>}
                    description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                  />
                </List.Item>
              ),
            }}
          />
        </ArrayEntityValueHOC>
      </Form.Item>

      <Form.Item
        name="sex2"
        label="性别"
        rules={[
          {
            required: true,
            message: '请选择性别',
          },
        ]}
      >
        <ArrayEntityValueHOC>
          <List.CheckAllListSelect
            placeholder="List"
            options={data}
            listProps={{
              itemLayout: 'horizontal',
              renderItem: (item, index) => (
                <List.Item>
                  <List.Item.Meta
                    avatar={
                      <Avatar
                        src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`}
                      />
                    }
                    title={<a href="https://ant.design">{item.title}</a>}
                    description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                  />
                </List.Item>
              ),
            }}
          />
        </ArrayEntityValueHOC>
      </Form.Item>

      <Form.Item
        name="sex3"
        label="性别"
        rules={[
          {
            required: true,
            message: '请选择性别',
          },
        ]}
      >
        <ArrayEntityValueHOC>
          <List.AutoCompleteListSelect
            placeholder="AutoCompleteListSelect"
            dropdownStyle={{ maxHeight: 300, overflowY: 'auto' }}
            options={value3.options}
            loadData={(_kw) =>
              new Promise((resolve) => {
                console.log('_kw', _kw);

                if (!_kw) {
                  setValue3((draft) => {
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

                  setValue3((draft) => {
                    draft.options = result;
                  });

                  resolve();
                }, 500);
              })
            }
            listProps={{
              itemLayout: 'horizontal',
              renderItem: (item) => (
                <List.Item>
                  <List.Item.Meta title={item.title} description={item.label} />
                </List.Item>
              ),
            }}
          />
        </ArrayEntityValueHOC>
      </Form.Item>

      <Form.Item
        name="sex4"
        label="性别"
        rules={[
          {
            required: true,
            message: '请选择性别',
          },
        ]}
      >
        <ArrayEntityValueHOC>
          <List.AutoCompleteCheckAllListSelect
            placeholder="AutoCompleteCheckAllListSelect"
            dropdownStyle={{ maxHeight: 300, overflowY: 'auto' }}
            options={value4.options}
            loadData={(_kw) =>
              new Promise((resolve) => {
                if (!_kw) {
                  setValue4((draft) => {
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

                  setValue4((draft) => {
                    draft.options = result;
                  });

                  resolve();
                }, 500);
              })
            }
            listProps={{
              itemLayout: 'horizontal',
              renderItem: (item) => (
                <List.Item>
                  <List.Item.Meta title={item.title} description={item.label} />
                </List.Item>
              ),
            }}
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
