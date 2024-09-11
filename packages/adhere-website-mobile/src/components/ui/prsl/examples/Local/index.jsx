import { Image, List } from 'antd-mobile';
import Mockjs, { Random } from 'mockjs';
import React, { useState } from 'react';

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

function getData() {
  return new Promise((resolve) => {
    resolve({
      total: dataSource.length,
      data: dataSource,
    });
  });
}

export default () => {
  const [loading, setLoading] = useState(true);

  return (
    <div className={styles.Wrapper}>
      <MobilePRSL
        className={styles.PRSLWrapper}
        isUseLocal
        isLoading={loading}
        paging={{
          defaultPageSize: 30,
        }}
        loadData={(params) => {
          return getData(params).then((res) => {
            setLoading(false);
            return res;
          });
        }}
      >
        {({ dataSource }) => (
          <List header="用户列表">
            {dataSource.map((user) => (
              <List.Item
                key={user.id}
                prefix={<Image src={user.avatar} className={styles.Images} fit="cover" />}
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
