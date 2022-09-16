import { Button } from 'antd';
import React, { useState } from 'react';

import { Spin } from '@baifendian/adhere';

import PlayGroundPage, {
  CodeBoxSection,
  FunctionPropsSection,
  PropsSection,
  Section,
} from '@/lib/PlaygroundPage';

import ASync from './async';
import Sync from './sync';
import Table from './table';

export default () => {
  const [reset, setReset] = useState(false);

  const [reser1, setReset1] = useState(false);

  function boxPanelConfig() {
    return [
      {
        id: `p1`,
        name: `基本使用`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: '基本使用',
            info: '基本使用',
          },
        },
        codeText: `
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
      `,
        type: 'PlayGround',
        renderChildren: () => (
          <>
            <Button
              type="primary"
              onClick={() => {
                setReset(true);
              }}
            >
              重置
            </Button>

            <Table reset={reset} />
          </>
        ),
      },
      {
        id: `p2`,
        name: `自定义firstLoading的UI`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: '自定义firstLoading的UI',
            info: '自定义firstLoading的UI',
          },
        },
        codeText: `
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
      `,
        type: 'PlayGround',
        renderChildren: () => (
          <>
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
          </>
        ),
      },
      {
        id: `p3`,
        name: `不调用接口值传递数据`,
        mode: 'code',
        scope: { React },
        codeText: `
  import React, { useEffect, useRef, useState } from 'react';
  import { Space, Suspense } from '@baifendian/adhere';
  import { Button, Table } from 'antd';
  import faker from 'faker';

  export default () => {
    const [data, setData] = useState([]);

    const ref = useRef();

    function fetchData() {
      setTimeout(() => {
        const list = [];
        list.length = 10;
        list.fill(0);

        const dataSource = list.map((t, index) => ({
          id: index + 1,
          name: faker.internet.userName(),
          sex: index % 2 === 0 ? '男' : '女',
          age: faker.random.number(),
          height: faker.random.number(),
          width: faker.random.number(),
        }));

        setData(dataSource);
      }, 1000 * 5);
    }

    function getColumns() {
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

    useEffect(() => {
      fetchData();
    }, []);

    return (
      <Suspense.Sync ref={ref} data={data} isEmpty={() => data.length === 0}>
        <Space.Group direction="horizontal">
          <Button type="primary" onClick={() => ref.current.reset().then(() => fetchData())}>
            重置
          </Button>
          <Button type="primary" onClick={fetchData}>
            加载数据
          </Button>
        </Space.Group>
        <Table rowKey="id" columns={getColumns()} dataSource={data} pagination={false} />
      </Suspense.Sync>
    );
  };
        `,
        cardProps: {
          description: {
            title: '不调用接口值传递数据',
            info: '不调用接口值传递数据',
          },
        },
        type: 'PlayGround',
        renderChildren: () => <Sync />,
      },
      {
        id: `p4`,
        name: `调用接口传递数据`,
        mode: 'code',
        scope: { React },
        codeText: `
  import React, { useRef } from 'react';
  import { Space, Suspense, Hooks } from '@baifendian/adhere';
  import { Button, Table } from 'antd';
  import faker from 'faker';

  const { useSetState } = Hooks;

  export default () => {
    const [data, setData] = useSetState([]);

    const ref = useRef();

    function fetchData() {
      return new Promise((resolve) => {
        setTimeout(() => {
          const list = [];
          list.length = 10;
          list.fill(0);

          const dataSource = list.map((t, index) => ({
            id: index + 1,
            name: faker.internet.userName(),
            sex: index % 2 === 0 ? '男' : '女',
            age: faker.random.number(),
            height: faker.random.number(),
            width: faker.random.number(),
          }));

          setData(dataSource, () => resolve());
        }, 1000 * 5);
      });
    }

    function getColumns() {
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

    return (
      <Suspense.ASync ref={ref} fetchData={fetchData} isEmpty={() => data.length === 0}>
        <Space.Group direction="horizontal">
          <Button type="primary" onClick={() => ref.current.reset().then(() => fetchData())}>
            重置
          </Button>
          <Button type="primary" onClick={() => ref.current.fetchData()}>
            加载数据
          </Button>
        </Space.Group>
        <Table rowKey="id" columns={getColumns()} dataSource={data} pagination={false} />
      </Suspense.ASync>
    );
  };
        `,
        cardProps: {
          description: {
            title: '调用接口传递数据',
            info: '调用接口传递数据',
          },
        },
        type: 'PlayGround',
        renderChildren: () => <ASync />,
      },
    ];
  }

  return (
    <PlayGroundPage>
      <Section title="Suspense">
        <p>
          数据加载单元(如第一次是骷髅骨架，其他是loading)，有数据加载的单元，第一次是骷髅骨架(或其他)mount，更新是loading
        </p>
        <p>
          此组件是一个父类，使用的时候需要写一个子类，人后重写fetchData、renderInner和showLoading三个方法，所以只能使用class的方式，不能使用hooks
        </p>
      </Section>

      <CodeBoxSection title="代码演示" columnCount={1} config={boxPanelConfig()} />

      <PropsSection
        title="Props"
        config={[
          {
            border: true,
            title: '属性',
            data: [
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
            ],
          },
        ]}
      />

      <FunctionPropsSection
        title="Api"
        config={[
          {
            border: true,
            title: '重写的方法',
            data: [
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
            ],
          },
        ]}
      />
    </PlayGroundPage>
  );
};
