import { Avatar, Button, List } from 'antd';
import React, { useRef } from 'react';

import { PullRefresh, Space } from '@baifendian/adhere';

import styles from '../index.less';

const data = Array.from({ length: 100 })
  .fill(0)
  .map((t, index) => `Ant Design Title ${index + 1}`);

export default () => {
  const ref = useRef();

  return (
    <>
      <PullRefresh
        className={styles.Wrap}
        ref={ref}
        onPullRefresh={() => {
          setTimeout(() => {
            ref.current.reset();
          }, 1000 * 3);
        }}
      >
        <List
          itemLayout="horizontal"
          dataSource={[].concat(data)}
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta
                avatar={
                  <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                }
                title={<a href="https://ant.design">{item.title}</a>}
                description="Ant Design, a design language for background applications, is refined by Ant UED Team"
              />
            </List.Item>
          )}
        />
      </PullRefresh>
      <Space direction="vertical" />

      <Button
        type="primary"
        onClick={() => {
          ref.current.refresh();
        }}
      >
        触发下拉刷新
      </Button>
    </>
  );
};
