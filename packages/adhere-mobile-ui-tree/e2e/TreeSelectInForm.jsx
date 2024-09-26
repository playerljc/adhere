import { useMount } from 'ahooks';
import { Button, Form } from 'antd-mobile';
import React from 'react';

import Tree from '../src';

import '../src/index.less';

function generateTree(depth, width, currentDepth = 1, parentKey = '0') {
  // 基本结构
  const tree = [];

  // 当深度超过指定的深度时，返回空 children
  if (currentDepth > depth) {
    return tree;
  }

  for (let i = 0; i < width; i++) {
    const key = `${parentKey}-${i}`;
    tree.push({
      key: key,
      title: `Node ${key}`,
      children: generateTree(depth, width, currentDepth + 1, key), // 递归生成子节点
    });
  }

  return tree;
}

// 生成深度为 3，宽度为 3 的树形数据
const treeData = generateTree(3, 3);

export default () => {
  const [form] = Form.useForm();

  useMount(() => {
    form.setFieldsValue({
      persons: ['0-0-0-0'],
    });
  });

  return (
    <Form
      form={form}
      layout="horizontal"
      footer={
        <Button
          block
          type="submit"
          color="primary"
          size="middle"
          onClick={() => {
            const values = form?.getFieldsValue();
            alert(JSON.stringify(values));
          }}
        >
          提交
        </Button>
      }
    >
      <Form.Item name="persons" label="人员" rules={[{ required: true, message: '请选择人员' }]}>
        <Tree.TreeSelect
          treeData={treeData}
          size="middle"
          multiple={false}
          checkStrictly
          onExpand={function () {}}
          onSelect={function () {}}
        />
      </Form.Item>
    </Form>
  );
};
