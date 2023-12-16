import { Avatar, List } from 'antd';
import React, { useRef } from 'react';

import { BackTopAnimation } from '@baifendian/adhere';

export default () => {
  const ref = useRef();

  let data = [];
  data.length = 100;
  data.fill(0);
  data = data.map((t, index) => ({
    title: `Ant Design Title ${index}`,
  }));

  return (
    <div style={{ position: 'relative', height: 300, overflowY: 'hidden' }}>
      <div style={{ height: '100%', overflowY: 'auto' }} ref={ref}>
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
      </div>
      <BackTopAnimation
        getContainer={() => ref.current}
        onTrigger={() => {
          return new Promise((resolve) => resolve());
        }}
        onScrollTop={(val) => {
          console.log(val);
        }}
      />
    </div>
  );
};
