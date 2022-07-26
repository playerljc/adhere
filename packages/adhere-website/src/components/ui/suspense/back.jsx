import { Button } from 'antd';
import React, { useState } from 'react';

import { Space } from '@baifendian/adhere';
import { Spin } from '@baifendian/adhere';

import FunctionProps from '@/lib/FunctionProps';
import Playground from '@/lib/Playground';
import Props from '@/lib/Props';

import Table from './table';

export default () => {
  const [reset, setReset] = useState(false);

  const [reser1, setReset1] = useState(false);

  return (
    <div className="Page">
      <h1>Suspense</h1>
      <p>
        数据加载单元(如第一次是骷髅骨架，其他是loading)，有数据加载的单元，第一次是骷髅骨架(或其他)mount，更新是loading
      </p>
      <p>
        此组件是一个父类，使用的时候需要写一个子类，人后重写fetchData、renderInner和showLoading三个方法，所以只能使用class的方式，不能使用hooks
      </p>

      <Props
        border
        title="属性"
        data={[
          {
            params: 'reset',
            desc: '是否重置',
            type: 'boolean',
            defaultVal: 'false',
          },
          {
            params: 'firstLoading',
            desc: '自定义firstLoading',
            type: 'React.ReactElement | null',
            defaultVal: 'null',
          },
        ]}
      />

      <Space />

      <FunctionProps
        border
        title="重写的方法"
        data={[
          {
            name: 'fetchData',
            desc: '加载数据',
            modifier: 'public',
            params: [],
            returnType: 'void',
            returnDesc: '',
          },
          {
            name: 'renderInner',
            desc: '渲染的UI',
            modifier: 'public',
            params: [],
            returnType: 'React.ReactElement',
            returnDesc: '',
          },
          {
            name: 'showLoading',
            desc: '是否显示遮罩',
            modifier: 'public',
            params: [],
            returnType: 'boolean',
            returnDesc: '',
          },
        ]}
      />

      <h2>基本使用</h2>
      <Playground
        mode="code"
        scope={{ React }}
        codeText={`
  // table.jsx

  import React from 'react';
  import { Table } from 'antd';
  import { Suspense } from '@baifendian/adhere';

  class TableWrap extends Suspense {
    constructor(props) {
      super(props);

      this.state = {
        dataSource: [],
        loading: false,
        pagination: {
          current: 1,
          pageSize: 2,
        },
      };
    }

    componentWillReceiveProps(nextProps) {
      super.componentWillReceiveProps(nextProps);

      if (nextProps.reset) {
        this.setState(
          {
            pagination: {
              current: 1,
              pageSize: 2,
            },
          },
          () => {
            this.fetchData();
          },
        );
      }
    }

    getColumns() {
      return [
        {
          title: '姓名',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: '性别',
          key: 'sex',
          dataIndex: 'sex',
        },
        {
          title: '年龄',
          key: 'age',
          dataIndex: 'age',
        },
        {
          title: '身高',
          key: 'height',
          dataIndex: 'height',
        },
        {
          title: '体重',
          key: 'width',
          dataIndex: 'width',
        },
      ];
    }

    fetchData() {
      const list = [];
      list.length = 10;
      list.fill(0);

      this.setState(
        {
          loading: true,
        },
        () => {
          setTimeout(() => {
            const dataSource = list.map((t, index) => ({
              id: index + 1,
              name: "人" + (index + 1),
              sex: '男',
              age: 66,
              height: 180,
              width: 180,
            }));

            this.setState(
              {
                dataSource,
              },
              () => {
                setTimeout(() => {
                  this.setState({
                    loading: false,
                  });
                }, 200);
              },
            );
          }, 2000);
        },
      );
    }

    showLoading() {
      return this.state.loading;
    }

    handleTableChange = (pagination) => {
      this.setState(
        {
          pagination,
        },
        () => {
          this.fetchData();
        },
      );
    };

    renderInner() {
      return (
        <div style={{ position: 'relative' }}>
          <Table
            rowKey="id"
            columns={this.getColumns()}
            dataSource={this.state.dataSource}
            loading={this.showLoading()}
            pagination={this.state.pagination}
            onChange={this.handleTableChange}
          />
        </div>
      );
    }
  }

  export default TableWrap;

  import React, { useState } from 'react';
  import { Button } from 'antd';
  import { Spin } from '@baifendian/adhere';
  import Table from './table';

  <Button
    type="primary"
    onClick={() => {
      setReset(true);
    }}
  >
    重置
  </Button>

  <Table reset={reset} />
      `}
      >
        <Button
          type="primary"
          onClick={() => {
            setReset(true);
          }}
        >
          重置
        </Button>

        <Table reset={reset} />
      </Playground>

      <h2>自定义firstLoading的UI</h2>
      <Playground
        mode="code"
        scope={{ React }}
        codeText={`
  import React, { useState } from 'react';
  import { Button } from 'antd';
  import { Spin } from '@baifendian/adhere';
  import Table from './table';

  <Button
    type="primary"
    onClick={() => {
      setReset1(true);
    }}
  >
    重置
  </Button>

  <Table
    firstLoading={
      <div style={{ position: 'relative' }}>
        <Spin spinning />
      </div>
    }
    reset={reser1}
  />

  <Table reset={reset} />
      `}
      >
        <Button
          type="primary"
          onClick={() => {
            setReset1(true);
          }}
        >
          重置
        </Button>

        <Table
          firstLoading={
            <div style={{ position: 'relative' }}>
              <Spin spinning />
            </div>
          }
          reset={reser1}
        />
      </Playground>
    </div>
  );
};
