import { Button } from 'antd';
import React, { useEffect } from 'react';

import { AsyncTreeEntityValueHOC, Form, TreeSelect } from '@baifendian/adhere-ui-anthoc';

import { City, County, Province } from '@/mock/pcc';

/**
 * fetchData
 * @param pid
 * @param cascadeParams
 */
function fetchData(pid, cascadeParams) {
  if (!pid) {
    return Promise.resolve(
      Province.map((t) => ({
        title: t.name,
        label: t.name,
        value: t.id,
        id: t.id,
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
    title: t.name,
    label: t.name,
    value: t.id,
    id: t.id,
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
        <AsyncTreeEntityValueHOC>
          <TreeSelect.AsyncTreeSelect placeholder="AsyncTreeSelect" fetchData={fetchData} />
        </AsyncTreeEntityValueHOC>
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
          <TreeSelect.AsyncTreeMultiSelect
            placeholder="AsyncTreeMultiSelectEcho"
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
          <TreeSelect.AsyncTreeCheckedShowParentSelect
            placeholder="AsyncTreeCheckedShowParentSelect"
            fetchData={fetchData}
          />
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
          <TreeSelect.AsyncTreeCheckedShowAllSelect
            placeholder="AsyncTreeCheckedShowAllSelect"
            fetchData={fetchData}
          />
        </AsyncTreeEntityValueHOC>
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
        <TreeSelect.AsyncTreeCheckedShowChildSelect
          placeholder="AsyncTreeCheckedShowChildSelect"
          fetchData={fetchData}
        />
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
        <AsyncTreeEntityValueHOC>
          <TreeSelect.AsyncTreeSelect
            placeholder="AsyncTreeSelect"
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
