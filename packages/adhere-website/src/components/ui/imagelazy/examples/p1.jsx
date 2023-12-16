import { Avatar, List } from 'antd';
import React from 'react';

import { ImageLazy } from '@baifendian/adhere';

const listData = [];

for (let i = 0; i < 6; i++) {
  listData.push({
    href: 'https://ant.design',
    title: `ant design part ${i}`,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description:
      'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    content:
      'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
  });
}

export default () => {
  return (
    <List
      itemLayout="vertical"
      size="large"
      dataSource={listData}
      renderItem={(item) => (
        <List.Item
          key={item.title}
          extra={
            <ImageLazy
              imgArgs={{
                alt: 'logo',
                targetSrc: 'https://dss2.bdstatic.com/8_V1bjqh_Q23odCf/pacific/1989213037.jpg',
              }}
              style={{ width: 272 }}
            />
          }
        >
          <List.Item.Meta
            avatar={<Avatar src={item.avatar} />}
            title={<a href={item.href}>{item.title}</a>}
            description={item.description}
          />
          {item.content}
        </List.Item>
      )}
    />
  );
};
