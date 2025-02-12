import { Button } from 'antd';
import React, { useContext, useEffect } from 'react';

import { ConfigProvider, Util } from '@baifendian/adhere';
import { Form, TreeEntityValueHOC, TreeSelect } from '@baifendian/adhere-ui-anthoc';

import { City, County, Province } from '@/mock/pcc';

const treeData = [
  {
    value: 'parent 1',
    title: 'parent 1',
    children: [
      {
        value: 'parent 1-0',
        title: 'parent 1-0',
        children: [
          {
            value: 'leaf1',
            title: 'leaf1',
          },
          {
            value: 'leaf2',
            title: 'leaf2',
          },
        ],
      },
      {
        value: 'parent 1-1',
        title: 'parent 1-1',
        children: [
          {
            value: 'leaf3',
            title: <b style={{ color: '#08c' }}>leaf3</b>,
          },
        ],
      },
    ],
  },
];

const flatTreeData = [
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
        <TreeEntityValueHOC>
          <TreeSelect
            dropdownStyle={{
              maxHeight: Util.pxToRem(400, media.designWidth, media),
              overflow: 'auto',
            }}
            placeholder="Please select"
            treeDefaultExpandAll
            treeData={treeData}
          />
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
        <TreeEntityValueHOC>
          <TreeSelect.TreeMultiSelect
            dropdownStyle={{
              maxHeight: Util.pxToRem(400, media.designWidth, media),
              overflow: 'auto',
            }}
            placeholder="Please select"
            treeDefaultExpandAll
            treeData={treeData}
          />
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
        <TreeEntityValueHOC>
          <TreeSelect.TreeCheckedShowParentSelect
            dropdownStyle={{
              maxHeight: Util.pxToRem(400, media.designWidth, media),
              overflow: 'auto',
            }}
            placeholder="Please select"
            treeDefaultExpandAll
            treeData={treeData}
          />
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
        <TreeEntityValueHOC>
          <TreeSelect.TreeCheckedShowChildSelect
            dropdownStyle={{
              maxHeight: Util.pxToRem(400, media.designWidth, media),
              overflow: 'auto',
            }}
            placeholder="Please select"
            treeDefaultExpandAll
            treeData={treeData}
          />
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
        <TreeEntityValueHOC>
          <TreeSelect.TreeCheckedShowAllSelect
            dropdownStyle={{
              maxHeight: Util.pxToRem(400, media.designWidth, media),
              overflow: 'auto',
            }}
            placeholder="Please select"
            treeDefaultExpandAll
            treeData={treeData}
          />
        </TreeEntityValueHOC>
      </Form.Item>

      <Form.Item
        name="sex5"
        label="性别"
        rules={[
          {
            required: true,
            message: '请选择性别',
          },
        ]}
      >
        <TreeEntityValueHOC>
          <TreeSelect
            dropdownStyle={{
              maxHeight: Util.pxToRem(400, media.designWidth, media),
              overflow: 'auto',
            }}
            placeholder="Please select"
            treeDefaultExpandAll
            treeData={flatTreeData}
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
