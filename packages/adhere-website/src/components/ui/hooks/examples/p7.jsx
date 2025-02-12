import { Button, Empty, Skeleton, Table } from 'antd';
import Mockjs from 'mockjs';
import React from 'react';

import { Hooks, Spin } from '@baifendian/adhere';

const { use } = Hooks;

function loadData(...args) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        Array.from({ length: 10 }).map(() => ({
          id: '',
          name: Mockjs.mock('@guid'),
          jg: Mockjs.mock('@cname'),
          address: Mockjs.mock('@cname'),
        })),
      );
    }, 2000);
  });
}

export default () => {
  const { data, isPending, isValidate, reset, reload, type } = use(loadData, []);

  function renderTable() {
    return (
      <div>
        <div>
          <Button
            type="primary"
            onClick={() => {
              reset();
            }}
          >
            重置成reset
          </Button>

          <Button
            type="primary"
            onClick={() => {
              reload();
            }}
          >
            重置成reload
          </Button>
        </div>
        <Table
          dataSource={data}
          columns={[
            {
              title: '姓名',
              key: 'name',
              dataIndex: 'name',
            },
            {
              title: '籍贯',
              key: 'jg',
              dataIndex: 'jg',
            },
            {
              title: '住址',
              key: 'address',
              dataIndex: 'address',
            },
          ]}
        />
      </div>
    );
  }

  return (
    <>
      {isPending && type === 'reset' && (
        <Skeleton
          avatar
          paragraph={{
            rows: 4,
          }}
        />
      )}

      {isPending && type === 'reload' && (
        <>
          <Spin spinning />
          {renderTable()}
        </>
      )}

      {!isPending && data && !!data.length && renderTable()}

      {!isPending && (!data || !data.length) && <Empty />}
    </>
  );
};
