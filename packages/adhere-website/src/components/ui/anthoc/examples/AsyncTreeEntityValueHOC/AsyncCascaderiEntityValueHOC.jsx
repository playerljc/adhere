import { Button } from 'antd';
import React, { useEffect } from 'react';

import { AsyncTreeEntityValueHOC, Cascader, Form } from '@baifendian/adhere-ui-anthoc';

import { City, County, Province } from '@/mock/pcc';

/**
 * fetchData
 * @param pid
 * @param cascadeParams
 */
function fetchData(pid, cascadeParams) {
  console.log('pid', pid);

  if (!pid) {
    return Promise.resolve(
      Province.map((t) => ({
        label: t.name,
        value: t.id,
        pId: 0,
        isLeaf: false,
      })),
    );
  }

  const countyIds = Object.keys(County)
    .map((key) => County[key])
    .flat()
    .map((t) => t.id);

  const result = { ...City, ...County }[pid]?.map?.((t) => ({
    label: t.name,
    value: t.id,
    pId: pid,
    isLeaf: countyIds.includes(t.id),
  }));

  return Promise.resolve(result);
}

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
        <Cascader.AsyncCascader placeholder="AsyncCascader" fetchData={fetchData} />
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
        <AsyncTreeEntityValueHOC>
          <Cascader.AsyncCascaderChangeOnSelect
            placeholder="AsyncCascaderChangeOnSelect"
            fetchData={fetchData}
          />
        </AsyncTreeEntityValueHOC>
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
        <AsyncTreeEntityValueHOC>
          <Cascader.AsyncCascaderMulti placeholder="AsyncCascaderMulti" fetchData={fetchData} />
        </AsyncTreeEntityValueHOC>
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
        <AsyncTreeEntityValueHOC>
          <Cascader.AsyncCascader
            placeholder="AsyncCascader"
            fetchData={fetchData}
            treeDataSimpleMode
          />
        </AsyncTreeEntityValueHOC>
      </Form.Item>

      <Form.Item wrapperCol={{ span: 24 }}>
        <Button htmlType="submit" block type="primary">
          提交
        </Button>
      </Form.Item>
    </Form>
  );
};
