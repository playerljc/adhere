import { Button } from 'antd';
import React, { useEffect } from 'react';

import { Cascader, Form, TreeEntityValueHOC } from '@baifendian/adhere-ui-anthoc';

import { City, County, Province } from '@/mock/pcc';

const options = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
          },
        ],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
          },
        ],
      },
    ],
  },
];

const treeData = [
  ...Province.map((t) => ({
    title: t.name,
    label: t.name,
    value: t.id,
    id: t.id,
    isLeaf: false,
    pId: 0,
  })),
  ...Object.keys(City)
    .map((key) =>
      City[key].map((t) => ({
        title: t.name,
        label: t.name,
        value: t.id,
        id: t.id,
        isLeaf: false,
        pId: `${key}`,
      })),
    )
    .flat(),
  ...Object.keys(County)
    .map((key) =>
      County[key].map((t) => ({
        title: t.name,
        label: t.name,
        value: t.id,
        id: t.id,
        isLeaf: true,
        pId: key,
      })),
    )
    .flat(),
];

export default () => {
  const [form] = Form.useForm();

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
        <TreeEntityValueHOC treeDataProp="options">
          <Cascader placeholder="Please select" options={options} />
        </TreeEntityValueHOC>
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
        <TreeEntityValueHOC treeDataProp="options">
          <Cascader.CascaderMulti placeholder="Please select" options={options} />
        </TreeEntityValueHOC>
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
        <TreeEntityValueHOC treeDataProp="options">
          <Cascader.CascaderChangeOnSelect placeholder="Please select" options={options} />
        </TreeEntityValueHOC>
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
        <TreeEntityValueHOC treeDataProp="options">
          <Cascader.CascaderShowChild placeholder="Please select" options={options} />
        </TreeEntityValueHOC>
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
        <TreeEntityValueHOC treeDataProp="options">
          <Cascader.CascaderMulti
            placeholder="Please select"
            options={treeData}
            treeDataSimpleMode
          />
        </TreeEntityValueHOC>
      </Form.Item>

      <Form.Item wrapperCol={{ span: 24 }}>
        <Button htmlType="submit" block type="primary">
          提交
        </Button>
      </Form.Item>
    </Form>
  );
};
