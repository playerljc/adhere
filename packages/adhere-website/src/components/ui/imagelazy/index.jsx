import { Avatar, List } from 'antd';
import React from 'react';

import { ImageLazy } from '@baifendian/adhere';

import PlayGroundPage, { CodeBoxSection, PropsSection, Section } from '@/lib/PlaygroundPage';

export default () => {
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

  function boxPanelConfig() {
    return [
      {
        id: `p1`,
        name: `基本使用`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: '基本使用',
            info: '基本使用',
          },
        },
        codeText: `
  import React from 'react';
  import { List, Avatar } from 'antd';
  import { ImageLazy } from '@baifendian/adhere';

  const listData = [];

  for (let i = 0; i < 6; i++) {
    listData.push({
      href: 'https://ant.design',
      title: 'ant design part ' + i,
      avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
      description:
        'Ant Design, a design language for background applications, is refined by Ant UED Team.',
      content:
        'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
    });
  }

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
              width: 272,
              alt: 'logo',
              targetSrc:
                'https://img2.baidu.com/it/u=1697432864,1600199787&fm=26&fmt=auto&gp=0.jpg',
            }}
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
      `,
        type: 'PlayGround',
        renderChildren: () => (
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
                      width: 272,
                      alt: 'logo',
                      targetSrc:
                        'https://dss2.bdstatic.com/8_V1bjqh_Q23odCf/pacific/1989213037.jpg',
                    }}
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
        ),
      },
      {
        id: `p2`,
        name: `初始化图片`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: '初始化图片',
            info: '使用originSrc设置初始化图片',
          },
        },
        codeText: `
  import React from 'react';
  import { List, Avatar } from 'antd';
  import { ImageLazy } from '@baifendian/adhere';

  const listData = [];

  for (let i = 0; i < 6; i++) {
    listData.push({
      href: 'https://ant.design',
      title: 'ant design part ' + i,
      avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
      description:
        'Ant Design, a design language for background applications, is refined by Ant UED Team.',
      content:
        'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
    });
  }

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
              width: 272,
              alt: 'logo',
              originSrc: 'https://dss2.bdstatic.com/8_V1bjqh_Q23odCf/pacific/1989213037.jpg',
              targetSrc:
                'https://img2.baidu.com/it/u=1697432864,1600199787&fm=26&fmt=auto&gp=0.jpg',
            }}
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
      `,
        type: 'PlayGround',
        renderChildren: () => (
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
                      width: 272,
                      alt: 'logo',
                      originSrc:
                        'data:image/png;base64,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',
                      targetSrc:
                        'https://dss2.bdstatic.com/8_V1bjqh_Q23odCf/pacific/1989213037.jpg',
                    }}
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
        ),
      },
    ];
  }

  return (
    <PlayGroundPage>
      <Section title="ImageLazy">
        <p>图片懒加载</p>
      </Section>

      <CodeBoxSection title="代码演示" columnCount={1} config={boxPanelConfig()} />

      <PropsSection
        title="Props"
        config={[
          {
            border: true,
            title: '属性',
            data: [
              {
                params: 'className',
                desc: '附加样式',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'imgArgs',
                desc: '图片的参数',
                type: 'object',
                defaultVal: `{originSrc:'',targetSrc:''}`,
              },
            ],
          },
          {
            border: true,
            title: 'imgArgs',
            data: [
              {
                params: 'originSrc',
                desc: '预加载的图片地址',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'errorSrc',
                desc: '图片载入错误时候图片的地址',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'targetSrc',
                desc: '实际的图片地址',
                type: 'string',
                defaultVal: '',
              },
            ],
          },
        ]}
      />
    </PlayGroundPage>
  );
};
