import { Button, Card, Table } from 'antd';
import Mock from 'mockjs';
import React, { useState } from 'react';

import { DateDisplay, Dict } from '@baifendian/adhere';

const { useDict } = Dict;

export default () => {
  function Test() {
    const [params, setParams] = useState(Date.now());
    const { data, isPending } = useDict('Test8Dict', { functionArgs: params });

    return (
      <Card
        title="人员"
        extra={
          <Button
            type="primary"
            onClick={() => {
              setParams(Date.now());
            }}
          >
            刷新
          </Button>
        }
      >
        <Table
          columns={[
            {
              title: '姓名',
              dataIndex: 'name',
              key: 'name',
            },
            {
              title: '性别',
              dataIndex: 'sex',
              key: 'sex',
              render: (v) => (v === 1 ? '男' : '女'),
            },
            {
              title: '生日',
              dataIndex: 'birthDay',
              key: 'birthDay',
              render: (val) => <DateDisplay.DateDisplay10 value={val} />,
            },
            {
              title: '所在部门',
              dataIndex: 'deptName',
              key: 'deptName',
            },
            {
              title: '身高',
              dataIndex: 'height',
              key: 'height',
            },
            {
              title: '体重',
              dataIndex: 'width',
              key: 'width',
            },
            {
              title: '籍贯',
              dataIndex: 'hometown',
              key: 'hometown',
            },
            {
              title: '地址',
              dataIndex: 'address',
              key: 'address',
            },
          ]}
          loading={isPending}
          dataSource={data}
        />
      </Card>
    );
  }

  const Test8Dict = {
    initStatic() {},
    initRemote() {
      Dict.handlers.Test8Dict = () => () =>
        new Promise((resolve) => {
          setTimeout(() => {
            resolve(
              Array.from({ length: 10 }).map((v, index) => ({
                id: Mock.mock('@guid'),
                name: Mock.mock('@name'),
                sex: `${(index + 1) % 2}`,
                birthDay: Mock.mock('@now'),
                deptName: Mock.mock('@name'),
                height: Mock.mock({
                  'number|+1': 202,
                }),
                width: Mock.mock({
                  'number|+1': 202,
                }),
                hometown: Mock.mock('@city'),
                address: Mock.mock('@region'),
              })),
            );
          }, 3000);
        });
    },
  };

  // 初始化
  Dict.init([Test8Dict], {});

  // 使用字典
  return <Test />;
};
