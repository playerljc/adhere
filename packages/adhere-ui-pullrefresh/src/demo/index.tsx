import { Avatar, List } from 'antd';
import React, { useRef } from 'react';
import ReactDOM from 'react-dom';

import AdhereConfigProvider from '@baifendian/adhere-ui-configprovider';

import PullRefresh from '../index';

import './index.less';

const data = Array.from({ length: 100 })
  .fill(0)
  .map((t, index) => `Ant Design Title ${index + 1}`);

function Wrap() {
  const ref = useRef();

  return (
    <PullRefresh
      ref={ref}
      className="Wrap"
      onPullRefresh={() => {
        setTimeout(() => {
          ref.current.reset();
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
              title={<a href="https://ant.design">{item.title}</a>}
              description="Ant Design, a design language for background applications, is refined by Ant UED Team"
            />
          </List.Item>
        )}
      />
    </PullRefresh>
  );
}

ReactDOM.render(
  <AdhereConfigProvider
    intl={{
      lang: 'zh_CN',
      locales: {},
    }}
  >
    {() => <Wrap />}
  </AdhereConfigProvider>,
  document.getElementById('app'),
);
