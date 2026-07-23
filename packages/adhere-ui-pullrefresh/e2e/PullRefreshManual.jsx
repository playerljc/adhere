import { Avatar, Button, List, Space } from 'antd';
import React, { useRef } from 'react';

import PullRefresh from '../src/index';

import '../src/index.less';

const data = Array.from({ length: 100 }, (_, index) => `Ant Design Title ${index + 1}`);

export default () => {
  const ref = useRef();

  return (
    <div>
      <Space style={{ marginBottom: 12 }}>
        <Button
          type="primary"
          onClick={() => {
            ref.current?.refresh();
          }}
        >
          触发下拉刷新
        </Button>
        <Button
          onClick={() => {
            ref.current?.reset();
          }}
        >
          reset
        </Button>
      </Space>
      <PullRefresh
        className="Wrap"
        ref={ref}
        onPullRefresh={() => {
          setTimeout(() => {
            ref.current?.reset();
          }, 1000 * 3);
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
                title={<a href="https://ant.design">{item}</a>}
                description="Ant Design, a design language for background applications, is refined by Ant UED Team"
              />
            </List.Item>
          )}
        />
      </PullRefresh>
    </div>
  );
};
