import { Button } from 'antd';
import Mock from 'mockjs';
import React, { useEffect } from 'react';

import Cascader from '../src/cascader';
import Form from '../src/form';
import { AsyncTreeEntityValueHOC } from '../src/index';
import TreeSelect from '../src/tree-select';
import { City, County, Province } from './mock/pcc';

export default () => {
  const [form] = Form.useForm();

  useEffect(() => {
    // form.setFieldValue('sex', [
    //   {
    //     label: Province[0].name,
    //     value: Province[0].id,
    //   },
    //   {
    //     label: City[110000000000][0].name,
    //     value: City[110000000000][0].id,
    //   },
    //   {
    //     label: County[110100000000][0].name,
    //     value: County[110100000000][0].id,
    //   },
    // ]);
    // form.setFieldValue('sex', {
    //   label: Province[0].name,
    //   value: Province[0].id,
    // });
    // form.setFieldValue('sex', [
    //   [
    //     {
    //       label: Province[0].name,
    //       value: Province[0].id,
    //     },
    //   ],
    // ]);

    form.setFieldValue('sex');
  }, []);

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

  /**
   * fetchData
   * @param pid
   * @param cascadeParams
   */
  function fetchFlatData(pid, cascadeParams) {
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

  /**
   * fetchData
   * @param pid
   * @param cascadeParams
   */
  function fetchCascaderData(pid, cascadeParams) {
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

  /**
   * fetchData
   * @param pid
   * @param cascadeParams
   */
  function fetchCascaderFlatData(pid, cascadeParams) {
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
        // initialValue={Province[0].id}
      >
        <AsyncTreeEntityValueHOC>
          {/*<TreeSelect.AsyncTreeSelect
            style={{ width: 200 }}
            placeholder="AsyncTreeSelect"
            fetchData={fetchData}
          />*/}

          {/*<TreeSelect.AsyncTreeMultiSelect
            style={{ width: 200 }}
            placeholder="AsyncTreeSelect"
            fetchData={fetchData}
          />*/}

          {/*<TreeSelect.AsyncTreeMultiSelect
            style={{ width: 200 }}
            placeholder="AsyncTreeSelect"
            fetchData={fetchFlatData}
            treeDataSimpleMode
          />*/}

          {/*<Cascader.AsyncCascader
            style={{ width: 200 }}
            placeholder="AsyncCascader"
            fetchData={fetchCascaderData}
          />*/}

          {/*<Cascader.AsyncCascaderShowChild
            style={{ width: 200 }}
            placeholder="AsyncCascader"
            fetchData={fetchCascaderData}
          />*/}

          <Cascader.AsyncCascaderShowChild
            style={{ width: 200 }}
            placeholder="AsyncCascader"
            fetchData={fetchCascaderFlatData}
            treeDataSimpleMode
          />
        </AsyncTreeEntityValueHOC>
      </Form.Item>

      <Form.Item>
        <Button htmlType="submit" block type="primary">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
