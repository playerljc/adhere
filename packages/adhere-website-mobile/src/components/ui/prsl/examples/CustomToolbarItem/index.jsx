import { Image, List } from 'antd-mobile';
import _ from 'lodash';
import Mockjs, { Random } from 'mockjs';
import React, { useState } from 'react';

import { ShareAltOutlined, UserAddOutlined } from '@ant-design/icons';
import { MobilePRSL } from '@baifendian/adhere';

import styles from './index.less';

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

export default () => {
  const [loading, setLoading] = useState(true);

  return (
    <div className={styles.Wrapper}>
      <MobilePRSL
        className={styles.PRSLWrapper}
        isUseFirstLoading
        searchKeyWordBarProps={{
          placeholder: '请输入查询关键字',
        }}
        isLoading={loading}
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
        {({ dataSource }) => (
          <List header="用户列表">
            {dataSource.map((user) => (
              <List.Item
                key={user.id}
                prefix={<Image src={user.avatar} className={styles.Image} fit="cover" />}
                description={user.describe}
              >
                {user.name}
              </List.Item>
            ))}
          </List>
        )}
      </MobilePRSL>
    </div>
  );
};
