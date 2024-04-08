import { Image, Input, List } from 'antd-mobile';
import _ from 'lodash';
import Mockjs, { Random } from 'mockjs';
import React, { useMemo, useState } from 'react';

import { ShareAltOutlined, UserAddOutlined } from '@ant-design/icons';

import PRSL from '../../src/index';

import '../../src/index.less';
import './index.less';

const dataSource = Array.from({ length: 100 })
  .fill(0)
  .map(() => ({
    id: Mockjs.mock('@guid'),
    name: Mockjs.mock('@cname'),
    describe: Mockjs.mock('@name'),
    avatar: Random.image(),
  }));

function getData({ page, pageSize, searchKeyWord, filterValues = {}, sortValues = [] }) {
  return new Promise((resolve) => {
    let filterData;

    // filter
    if (!searchKeyWord && _.isEmpty(filterValues) && !sortValues.length) {
      filterData = dataSource;
    } else {
      filterData = dataSource.filter(
        (record) =>
          (!searchKeyWord
            ? true
            : record.name.indexOf(searchKeyWord) !== -1 ||
              record.describe.indexOf(searchKeyWord) !== -1) &&
          (_.isEmpty(filterValues) ? true : record.name.indexOf(filterValues.name) !== -1),
      );
    }

    // sort
    if (sortValues.length) {
      filterData = sortValues.reduce((res, sortValue) => {
        res = res.sort((r1, r2) => {
          if (sortValue.order === 'asc') {
            if (r1[sortValue.name] > r2[sortValue.name]) return 1;
            else if (r1[sortValue.name] < r2[sortValue.name]) return -1;
            else return 0;
          } else {
            if (r1[sortValue.name] < r2[sortValue.name]) return 1;
            else if (r1[sortValue.name] > r2[sortValue.name]) return -1;
            else return 0;
          }
        });
        return [...res];
      }, filterData);
    }

    resolve({
      total: filterData.length,
      data: filterData.slice((page - 1) * pageSize, page * pageSize),
    });
  });
}

// function getData() {
//   return new Promise((resolve) => {
//     resolve({
//       total: dataSource.length,
//       data: dataSource,
//     });
//   });
// }

export default () => {
  const [loading, setLoading] = useState(true);

  const filterConfig = useMemo(
    () => [
      {
        key: 'name',
        name: 'name',
        label: '姓名',
        render: () => <Input />,
      },
    ],
    [],
  );

  const sortConfig = useMemo(
    () => [
      {
        name: 'name',
        label: '姓名',
      },
      {
        name: 'describe',
        label: '说明',
      },
    ],
    [],
  );

  return (
    <div className="Wrapper">
      <PRSL
        // isUseFirstLoading={false}
        className="PRSLWrapper"
        beforeRender={() => <div>InnerBefore</div>}
        afterRender={() => <div>InnerAfter</div>}
        beforeToolBarRender={() => <div>beforeToolBarRender</div>}
        afterToolBarRender={() => <div>afterToolBarRender</div>}
        scrollLoadBeforeRender={() => <div>scrollLoadBeforeRender</div>}
        scrollLoadAfterRender={() => <div>scrollLoadAfterRender</div>}
        paging={{
          defaultPageSize: 30,
        }}
        isUseLocal={false}
        toolbarConfig={(defaultElements) => {
          return [
            {
              key: 'add',
              label: '新增',
              icon: <UserAddOutlined />,
              onClick: () => {
                console.log('新增');
              },
            },
            {
              key: 'share',
              label: '分享',
              icon: <ShareAltOutlined />,
              onClick: () => {
                console.log('分享');
              },
            },
            ...defaultElements,
          ];
        }}
        filterConfig={filterConfig}
        sortConfig={sortConfig}
        isLoading={loading}
        loadData={(params) => {
          return getData(params).then((res) => {
            setLoading(false);
            return res;
          });
        }}
        onLoadMore={(params) => {
          return new Promise((resolve) => {
            setTimeout(() => {
              getData(params).then((res) => {
                resolve(res);
              });
            }, 1500);
          });
        }}
        onRefresh={(params) => {
          return new Promise((resolve) => {
            setTimeout(() => {
              getData(params).then((res) => {
                resolve(res);
              });
            }, 1500);
          });
        }}
      >
        {(dataSource) => (
          <List header="用户列表">
            {dataSource.map((user) => (
              <List.Item
                key={user.id}
                prefix={
                  <Image
                    src={user.avatar}
                    style={{ borderRadius: 20 }}
                    fit="cover"
                    width={40}
                    height={40}
                  />
                }
                description={user.describe}
              >
                {user.name}
              </List.Item>
            ))}
          </List>
        )}
      </PRSL>
    </div>
  );
};
