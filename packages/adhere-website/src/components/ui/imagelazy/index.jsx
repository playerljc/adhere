import React from 'react';
import { List, Avatar } from 'antd';
import { ImageLazy } from '@baifendian/adhere';

import Props from '@/lib/Props';
import Playground from '@/lib/Playground';

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

  return (
    <div className="Page">
      <h1>ImageLazy</h1>
      <p>图片懒加载</p>
      <h2>属性</h2>
      <Props
        data={[
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
        ]}
      />
      <h2>imgArgs</h2>
      <Props
        data={[
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
        ]}
      />

      <h2>基本使用</h2>
      <Playground
        mode="code"
        scope={{ React }}
        codeText={`
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
                'https://dev-ws.percent.cn/pic/group1/default/20201124/18/11/1/7382f049130a04028f110ffbbaa84d0e.jpg',
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
      `}
      >
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
                      'https://dev-ws.percent.cn/pic/group1/default/20201124/18/11/1/7382f049130a04028f110ffbbaa84d0e.jpg',
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
      </Playground>

      <h2>使用originSrc设置初始化图片</h2>
      <Playground
        mode="code"
        scope={{ React }}
        codeText={`
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
                'https://dev-ws.percent.cn/pic/group1/default/20201124/18/11/1/7382f049130a04028f110ffbbaa84d0e.jpg',
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
      `}
      >
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
                      'https://dev-ws.percent.cn/pic/group1/default/20201124/18/11/1/7382f049130a04028f110ffbbaa84d0e.jpg',
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
      </Playground>
    </div>
  );
};
