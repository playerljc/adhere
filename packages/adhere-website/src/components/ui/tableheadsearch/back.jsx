import React, { useState } from 'react';
import { Table, Input, Button, Select } from 'antd';
import { Resource, TableHeadSearch } from '@baifendian/adhere';

import FunctionProps from '@/lib/FunctionProps';
import Playground from '@/lib/Playground';

const { Option } = Select;

const { Search } = Input;

function getColumns() {
  return [
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
      ...TableHeadSearch(({ confirm }) => (
        <div style={{ padding: 10 }}>
          <div style={{ marginBottom: 10 }}>
            <Input autoFocus style={{ width: '100%' }} />
          </div>
          <div>
            <Button
              size="small"
              type="primary"
              onClick={() => {
                confirm();
              }}
            >
              确定
            </Button>
          </div>
        </div>
      )),
    },
    {
      title: '性别',
      dataIndex: 'sex',
      key: 'sex',
      ...TableHeadSearch(({ confirm }) => (
        <div>
          <Select
            autoFocus
            style={{ width: '100%' }}
            onChange={() => {
              confirm();
            }}
            getPopupContainer={Resource.Dict.value.FormPopupContainer.value}
          >
            <Option key={1} value="男">
              男
            </Option>
            <Option key={2} value="女">
              女
            </Option>
          </Select>
        </div>
      )),
    },
    {
      title: '所在部门',
      dataIndex: 'dept',
      key: 'dept',
      ...TableHeadSearch(({ confirm }) => (
        <div style={{ padding: 20 }}>
          <div style={{ marginBottom: 10 }}>
            <Search
              placeholder="input search text"
              allowClear
              style={{ width: 200, marginRight: 10 }}
            />
            <Button
              type="primary"
              onClick={() => {
                confirm();
              }}
            >
              确定
            </Button>
          </div>
          <div>
            <Table
              dataSource={[
                {
                  name: '产品部',
                  count: 20,
                },
                {
                  name: '研发部',
                  count: 30,
                },
              ]}
              columns={[
                {
                  key: 'name',
                  dataIndex: 'name',
                },
                {
                  key: 'count',
                  dataIndex: 'count',
                },
              ]}
            />
          </div>
        </div>
      )),
    },
  ];
}

export default () => {
  const [dataSource, setDataSource] = useState([
    {
      name: '张三',
      sex: '男',
      dept: '产品部',
    },
    {
      name: '李四',
      sex: '男',
      dept: '研发部',
    },
    {
      name: '王五',
      sex: '女',
      dept: '产品部',
    },
  ]);

  return (
    <div className="Page">
      <h1>TableHeadSearch</h1>
      <p>基于antd-design的Table的列头筛选</p>

      <FunctionProps
        border
        title="方法"
        data={[
          {
            name: 'TableHeadSearch',
            desc: '构建UI的方法',
            modifier: 'global',
            params: [
              {
                name: 'render',
                desc: '构建UI的回调方法',
                type: 'Function({confirm}) confirm用来关闭窗体',
                defaultVal: '',
                required: 'true',
              },
              {
                name: 'icon',
                desc: '右侧的图标',
                type: 'React.ReactElement',
                defaultVal: '<SearchOutlined />',
                required: '',
              },
            ],
            returnType: 'void',
            returnDesc: '',
          },
        ]}
      />

      <h2>基本使用</h2>
      <Playground
        mode="code"
        scope={{ React }}
        codeText={`
  import React, { useState } from 'react';
  import { Table, Input, Button, Select } from 'antd';
  import { TableHeadSearch } from '@baifendian/adhere';

  const { Option } = Select;

  const { Search } = Input;

  function getColumns() {
    return [
      {
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
        ...TableHeadSearch(({ confirm }) => (
          <div style={{ padding: 10 }}>
            <div style={{ marginBottom: 10 }}>
              <Input autoFocus style={{ width: '100%' }} />
            </div>
            <div>
              <Button
                size="small"
                type="primary"
                onClick={() => {
                  confirm();
                }}
              >
                确定
              </Button>
            </div>
          </div>
        )),
      },
      {
        title: '性别',
        dataIndex: 'sex',
        key: 'sex',
        ...TableHeadSearch(({ confirm }) => (
          <div>
            <Select
              autoFocus
              style={{ width: '100%' }}
              onChange={() => {
                confirm();
              }}
            >
              <Option key={1} value="男">
                男
              </Option>
              <Option key={2} value="女">
                女
              </Option>
            </Select>
          </div>
        )),
      },
      {
        title: '所在部门',
        dataIndex: 'dept',
        key: 'dept',
        ...TableHeadSearch(({ confirm }) => (
          <div style={{ padding: 20 }}>
            <div style={{ marginBottom: 10 }}>
              <Search
                placeholder="input search text"
                allowClear
                style={{ width: 200, marginRight: 10 }}
              />
              <Button
                type="primary"
                onClick={() => {
                  confirm();
                }}
              >
                确定
              </Button>
            </div>
            <div>
              <Table
                dataSource={[
                  {
                    name: '产品部',
                    count: 20,
                  },
                  {
                    name: '研发部',
                    count: 30,
                  },
                ]}
                columns={[
                  {
                    key: 'name',
                    dataIndex: 'name',
                  },
                  {
                    key: 'count',
                    dataIndex: 'count',
                  },
                ]}
              />
            </div>
          </div>
        )),
      },
    ];
  }

  const [dataSource, setDataSource] = useState([
    {
      name: '张三',
      sex: '男',
      dept: '产品部',
    },
    {
      name: '李四',
      sex: '男',
      dept: '研发部',
    },
    {
      name: '王五',
      sex: '女',
      dept: '产品部',
    },
  ]);

  <Table dataSource={dataSource} columns={getColumns()} pagination={false} />
    `}
      >
        <Table dataSource={dataSource} columns={getColumns()} pagination={false} />
      </Playground>
    </div>
  );
};
