import { Avatar, List } from 'antd';
import React, { useRef } from 'react';

import { ScrollLoad } from '@baifendian/adhere';

import styles from './examples.less';

const globalData = Array.from({ length: 10 }).fill(1);

export default () => {
  let refStatus = useRef(ScrollLoad.NORMAL);

  return (
    <ScrollLoad
      className={styles.Wrapper}
      onScrollBottom={(callback) => {
        if (refStatus.current === ScrollLoad.ERROR) {
          callback(ScrollLoad.ERROR);
        }

        setTimeout(() => {
          callback(ScrollLoad.ERROR);
          refStatus.current = ScrollLoad.ERROR;
        }, 2000);
      }}
      onErrorClick={() => {
        alert('点击了');
      }}
    >
      <List
        itemLayout="horizontal"
        dataSource={globalData.map((t, index) => ({
          title: `Ant Design Title${index + 1}`,
        }))}
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
    </ScrollLoad>
  );
};
