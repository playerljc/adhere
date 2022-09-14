import { Avatar, List } from 'antd';
import React from 'react';

import { BackTopAnimation } from '@baifendian/adhere';

import Playground from '@/lib/Playground';
import Props from '@/lib/Props';

export default () => {
  let data = [];
  data.length = 100;
  data.fill(0);
  data = data.map((t, index) => ({
    title: `Ant Design Title ${index}`,
  }));

  const ref = React.createRef();

  return (
    <div className="Page">
      <h1>BackTopAnimation</h1>
      <p>动画的回到顶部</p>

      <Props
        border
        title="属性"
        data={[
          {
            params: 'className',
            desc: '附加的样式表',
            type: 'string',
            defaultVal: '',
          },
          {
            params: 'style',
            desc: '附加的样式',
            type: 'React.CSSProperties',
            defaultVal: '',
          },
          {
            params: 'zIndex',
            desc: '层级',
            type: 'boolean',
            defaultVal: '',
          },
          {
            params: 'duration',
            desc: '动画持续的事件',
            type: 'number',
            defaultVal: '300',
          },
          {
            params: 'target',
            desc: '获取滚动的目标元素',
            type: '() => HtmlElement | Window',
            defaultVal: '',
          },
          {
            params: 'onTrigger',
            desc: '点击事件',
            type: '() => void',
            defaultVal: '',
          },
          {
            params: 'onScrollTop',
            desc: '滚动',
            type: '(value: number) => void',
            defaultVal: '',
          },
        ]}
      />

      <h2>基本使用</h2>
      <Playground
        mode="code"
        scope={{ React }}
        codeText={`
  import React from 'react';
  import { List, Avatar } from 'antd';
  import { BackTopAnimation } from '@baifendian/adhere';

  let data = [];
  data.length = 100;
  data.fill(0);
  data = data.map((t, index) => ({
    title: 'Ant Design Title' + (index + 1),
  }));

  const ref = React.createRef();

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
      target={() => ref.current}
      onTrigger={() => {
        return new Promise((resolve) => resolve());
      }}
      onScrollTop={(val) => {
        console.log(val);
      }}
    />
  </div>
      `}
      >
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
            target={() => ref.current}
            onTrigger={() => {
              return new Promise((resolve) => resolve());
            }}
            onScrollTop={(val) => {
              console.log(val);
            }}
          />
        </div>
      </Playground>
    </div>
  );
};
