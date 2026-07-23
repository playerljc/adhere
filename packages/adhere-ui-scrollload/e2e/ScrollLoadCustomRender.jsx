import { Avatar, Empty, List, Spin } from 'antd';
import React, { useRef } from 'react';

import ScrollLoad from '../src/index';

import '../src/index.less';

const globalData = Array.from({ length: 10 }).fill(1);

export default () => {
  const refStatus = useRef(ScrollLoad.NORMAL);

  return (
    <ScrollLoad
      style={{ width: 400, height: 600 }}
      onScrollBottom={(callback) => {
        if (refStatus.current === ScrollLoad.EMPTY) {
          callback(ScrollLoad.EMPTY);
        }

        setTimeout(() => {
          callback(ScrollLoad.EMPTY);
          refStatus.current = ScrollLoad.EMPTY;
        }, 2000);
      }}
      renderLoading={() => <Spin tip="loading..." style={{ width: '100%' }} />}
      renderEmpty={() => <Empty />}
      renderError={() => <div style={{ padding: 16, color: '#ff4d4f' }}>自定义错误 UI</div>}
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
