import React from 'react';
import { List, Avatar } from 'antd';
import { ImageLazy, Space } from '@baifendian/adhere';

import PlayGroundPage, { Section, PropsSection, CodeBoxSection } from '@/lib/PlaygroundPage';

export default () => {
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
                        'https://dss2.bdstatic.com/8_V1bjqh_Q23odCf/pacific/1989213037.jpg',
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
        ),
      },
    ];
  }

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
