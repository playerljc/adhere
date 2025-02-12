import { Button } from 'antd';
import Mock from 'mockjs';
import React, { useEffect } from 'react';

import Cascader from '../src/cascader';
import Form from '../src/form';
import { TreeEntityValueHOC } from '../src/index';
import TreeSelect from '../src/tree-select';
import { City, County, Province } from './mock/pcc';

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

export default () => {
  const [form] = Form.useForm();

  useEffect(() => {
    form.setFieldValue('sex', [
      [options[0], options[0].children[0], options[0].children[0].children[0]],
    ]);
    // form.setFieldValue('sex', treeData[0]);
  }, []);

  return (
    <Form
      form={form}
      onFinish={(values) => {
        debugger;
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
        // initialValue={[]}
      >
        <TreeEntityValueHOC treeDataProp="options">
          {/*<TreeSelect
            style={{ width: 300 }}
            dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
            placeholder="Please select"
            treeDefaultExpandAll
            treeData={treeData}
          />*/}

          {/*<TreeSelect.TreeMultiSelect
            style={{ width: 300 }}
            dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
            placeholder="Please select"
            treeDefaultExpandAll
            treeData={treeData}
          />*/}

          {/*<TreeSelect.TreeMultiLeafSelect
            style={{ width: 300 }}
            dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
            placeholder="Please select"
            treeDefaultExpandAll
            treeData={treeData}
          />*/}

          {/*<TreeSelect.TreeCheckedShowAllSelect
            style={{ width: 300 }}
            dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
            placeholder="Please select"
            treeDefaultExpandAll
            treeData={treeData}
          />*/}

          {/*<TreeSelect.TreeMultiSelect
            style={{ width: 200 }}
            dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
            placeholder="Please select"
            treeDefaultExpandAll
            treeData={flatTreeData}
            treeDataSimpleMode
          />*/}

          <Cascader.CascaderShowChild placeholder="Please select" options={options} />
        </TreeEntityValueHOC>
      </Form.Item>

      <Form.Item>
        <Button htmlType="submit" block type="primary">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
