import { Avatar, List, Radio } from 'antd';
import React, { useState } from 'react';

import { Space, SwipeOut } from '@baifendian/adhere';

export default () => {
  const [data, setData] = useState([
    {
      title: 'Ant Design Title 1',
      beforeShow: false,
      afterShow: false,
      duration: 200,
    },
    {
      title: 'Ant Design Title 2',
      beforeShow: false,
      afterShow: false,
      duration: 200,
    },
    {
      title: 'Ant Design Title 3',
      beforeShow: false,
      afterShow: false,
      duration: 200,
    },
    {
      title: 'Ant Design Title 4',
      beforeShow: false,
      afterShow: false,
      duration: 200,
    },
  ]);

  return (
    <>
      <div>
        <Radio.Group>
          <Radio.Button
            value="large"
            onClick={() => {
              setData((record) =>
                record.map((t) => ({ ...t, beforeShow: true, afterShow: false })),
              );
            }}
          >
            showBefore
          </Radio.Button>
          <Radio.Button
            value="default"
            onClick={() => {
              setData((record) =>
                record.map((t) => ({ ...t, beforeShow: false, afterShow: true })),
              );
            }}
          >
            showAfter
          </Radio.Button>
          <Radio.Button
            value="small"
            onClick={() => {
              setData((record) =>
                record.map((t) => ({ ...t, beforeShow: false, afterShow: false })),
              );
            }}
          >
            closeAll
          </Radio.Button>
        </Radio.Group>
      </div>

      <Space direction="vertical" />

      <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(item) => (
          <SwipeOut
            before={() => (
              <Radio.Group>
                <Radio.Button value="large">Large</Radio.Button>
                <Radio.Button value="default">Default</Radio.Button>
                <Radio.Button value="small">Small</Radio.Button>
              </Radio.Group>
            )}
            after={() => (
              <Radio.Group>
                <Radio.Button value="large">Large</Radio.Button>
                <Radio.Button value="default">Default</Radio.Button>
                <Radio.Button value="small">Small</Radio.Button>
              </Radio.Group>
            )}
            beforeShow={item.beforeShow}
            afterShow={item.afterShow}
            duration={item.duration}
          >
            <List.Item>
              <List.Item.Meta
                avatar={
                  <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                }
                title={<a href="https://ant.design">{item.title}</a>}
                description="Ant Design, a design language for background applications, is refined by Ant UED Team"
              />
            </List.Item>
          </SwipeOut>
        )}
      />
    </>
  );
};
