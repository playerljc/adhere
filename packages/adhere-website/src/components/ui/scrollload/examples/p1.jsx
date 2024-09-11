import { Avatar, List } from 'antd';
import React, { useEffect, useRef, useState } from 'react';

import { ScrollLoad } from '@baifendian/adhere';

import styles from './examples.less';

export default () => {
  const page = useRef(0);

  const [data, setData] = useState(getData());

  let callbackHandler = useRef(null);

  function getData() {
    page.current = page.current + 1;

    return Array.from({ length: page.current * 10 })
      .fill(0)
      .map((t, index) => ({
        title: `Ant Design Title ${index + 1}`,
      }));
  }

  useEffect(() => {
    if (callbackHandler.current) {
      callbackHandler.current(ScrollLoad.NORMAL);
      callbackHandler.current = null;
    }
  }, [data]);

  return (
    <ScrollLoad
      className={styles.Wrapper}
      onScrollBottom={(callback) => {
        setTimeout(() => {
          callbackHandler.current = callback;
          setData(getData());
        }, 2000);
      }}
    >
      <List
        itemLayout="horizontal"
        dataSource={data}
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
