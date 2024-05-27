import { Avatar, Button } from 'antd';
import Mock from 'mockjs';
import React, { useContext, useEffect } from 'react';

import { ConfigProvider, Util } from '@baifendian/adhere';
import { Form, List, PagingEntityValueHOC } from '@baifendian/adhere-ui-anthoc';

const data = Array.from({ length: 100 }).map(() => {
  const label = Mock.mock('@cname');
  const value = Mock.mock('@guid');

  return {
    label,
    value,
    title: label,
    avatar: `https://xsgames.co/randomusers/avatar.php?g=pixel&key=${value}`,
  };
});

export default () => {
  const [form] = Form.useForm();

  function loadData(page, limit) {
    console.log('paging', page, limit);

    return new Promise((resolve) => {
      resolve({
        totalCount: data.length,
        data: data.slice((page - 1) * limit, page * limit),
      });
    });
  }

  const { media } = useContext(ConfigProvider.Context);

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
        <PagingEntityValueHOC>
          <List.ListPaging
            isSuspenseAsync={false}
            pagingProps={{
              loadData,
              defaultLimit: 5,
            }}
            listPagingProps={{
              itemLayout: 'horizontal',
              renderItem: (item, index) => (
                <List.Item>
                  <List.Item.Meta
                    avatar={<Avatar src={item.avatar} />}
                    title={<a href="https://ant.design">{item.title}</a>}
                    description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                  />
                </List.Item>
              ),
            }}
          />
        </PagingEntityValueHOC>
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
        <PagingEntityValueHOC>
          <List.ListPagingSelect
            placeholder="RadioListPagingSelect"
            pagingProps={{
              loadData,
              defaultLimit: 5,
            }}
            listPagingProps={{
              itemLayout: 'horizontal',
              renderItem: (item, index) => (
                <List.Item>
                  <List.Item.Meta
                    avatar={<Avatar src={item.avatar} />}
                    title={<a href="https://ant.design">{item.title}</a>}
                    description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                  />
                </List.Item>
              ),
            }}
          />
        </PagingEntityValueHOC>
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
        <PagingEntityValueHOC>
          <List.ListPaging
            mode="multiple"
            isSuspenseAsync={false}
            pagingProps={{
              loadData,
              defaultLimit: 5,
            }}
            listPagingProps={{
              itemLayout: 'horizontal',
              renderItem: (item, index) => (
                <List.Item>
                  <List.Item.Meta
                    avatar={<Avatar src={item.avatar} />}
                    title={<a href="https://ant.design">{item.title}</a>}
                    description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                  />
                </List.Item>
              ),
            }}
          />
        </PagingEntityValueHOC>
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
        <PagingEntityValueHOC>
          <List.ListPagingSelect
            mode="multiple"
            placeholder="CheckboxListPagingSelect"
            pagingProps={{
              loadData,
              defaultLimit: 5,
            }}
            listPagingProps={{
              itemLayout: 'horizontal',
              renderItem: (item, index) => (
                <List.Item>
                  <List.Item.Meta
                    avatar={<Avatar src={item.avatar} />}
                    title={<a href="https://ant.design">{item.title}</a>}
                    description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                  />
                </List.Item>
              ),
            }}
          />
        </PagingEntityValueHOC>
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
        <PagingEntityValueHOC>
          <List.AutoCompleteListPagingSelect
            mode="multiple"
            placeholder="AutoCompleteListPagingSelect"
            dropdownStyle={{
              maxHeight: Util.pxToRem(300, media.designWidth, media),
              overflow: 'auto',
            }}
            pagingProps={{
              loadData,
              defaultLimit: 5,
            }}
            listPagingProps={{
              itemLayout: 'horizontal',
              renderItem: (item) => (
                <List.Item>
                  <List.Item.Meta title={item.title} description={item.label} />
                </List.Item>
              ),
            }}
          />
        </PagingEntityValueHOC>
      </Form.Item>

      <Form.Item wrapperCol={{ span: 24 }}>
        <Button htmlType="submit" block type="primary">
          提交
        </Button>
      </Form.Item>
    </Form>
  );
};
