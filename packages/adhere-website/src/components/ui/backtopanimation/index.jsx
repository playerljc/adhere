import { Avatar, List } from 'antd';
import React from 'react';

import { BackTopAnimation } from '@baifendian/adhere';

import PlayGroundPage, { CodeBoxSection, PropsSection, Section } from '@/lib/PlaygroundPage';

export default () => {
  const ref = React.createRef();

  let data = [];
  data.length = 100;
  data.fill(0);
  data = data.map((t, index) => ({
    title: `Ant Design Title ${index}`,
  }));

  return (
    <PlayGroundPage>
      <Section title="BackTopAnimation">
        <p>动画的回到顶部</p>
      </Section>

      <CodeBoxSection
        title="代码演示"
        config={[
          {
            id: `p1`,
            name: `列表中使用`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: '列表中使用',
                info: '可以动画的回到列表的顶端',
              },
            },
            codeText: `
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
      onScrollTop={() => ref.current}
      onTrigger={() => {
        return new Promise((resolve) => resolve());
      }}
      onScrollTop={(val) => {
        console.log(val);
      }}
    />
  </div>
      `,
            type: 'PlayGround',
            renderChildren: () => (
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
            ),
          },
        ]}
      />

      <PropsSection
        title="Props"
        config={[
          {
            border: true,
            title: '属性',
            data: [
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
                params: 'onScrollTop',
                desc: '获取滚动的目标元素',
                type: '() => HtmlElement',
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
            ],
          },
        ]}
      />
    </PlayGroundPage>
  );
};
