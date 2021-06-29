import React, { useState } from 'react';
import { List, Avatar, Radio } from 'antd';

import Props from '@/lib/Props';
import FunctionProps from '@/lib/FunctionProps';
import Playground from '@/lib/Playground';

import { SwipeOut, Space } from '@baifendian/adhere';

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
    <div className="Page">
      <h1>SwipeOut</h1>
      <p>滑动操作</p>

      <h2>属性</h2>
      <Props
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
            params: 'beforeClassName',
            desc: '附加的样式表',
            type: 'string',
            defaultVal: '',
          },
          {
            params: 'beforeStyle',
            desc: '附加的样式',
            type: 'React.CSSProperties',
            defaultVal: '',
          },
          {
            params: 'afterClassName',
            desc: '附加的样式表',
            type: 'string',
            defaultVal: '',
          },
          {
            params: 'afterStyle',
            desc: '附加的样式',
            type: 'React.CSSProperties',
            defaultVal: '',
          },
          {
            params: 'contentClassName',
            desc: '附加的样式表',
            type: 'string',
            defaultVal: '',
          },
          {
            params: 'contentStyle',
            desc: '附加的样式',
            type: 'React.CSSProperties',
            defaultVal: '',
          },
          {
            params: 'beforeShow',
            desc: '是否显示内容之前的操作',
            type: 'boolean',
            defaultVal: 'false',
          },
          {
            params: 'afterShow',
            desc: '是否显示内容之后的操作',
            type: 'boolean',
            defaultVal: 'false',
          },
          {
            params: 'direction',
            desc: '方向',
            type: "'horizontal' | 'vertical'",
            defaultVal: 'horizontal',
          },
          {
            params: 'before',
            desc: '内容之前的UI',
            type: '() => React.ReactElement',
            defaultVal: '',
          },
          {
            params: 'after',
            desc: '内容之后的UI',
            type: '() => React.ReactElement',
            defaultVal: '',
          },
          {
            params: 'duration',
            desc: 'beforeShow和afterShow的持续时间(毫秒)',
            type: 'number',
            defaultVal: '200',
          },
          {
            params: 'onInit',
            desc: 'onInit',
            type: '() => void',
            defaultVal: '',
          },
          {
            params: 'slideChangeTransitionStart',
            desc: 'slideChangeTransitionStart',
            type: '() => void',
            defaultVal: '',
          },
          {
            params: 'slideChangeTransitionEnd',
            desc: 'slideChangeTransitionEnd',
            type: '() => void',
            defaultVal: '',
          },
        ]}
      />

      <h2>基本使用</h2>
      <Playground
        mode="code"
        scope={{ React }}
        codeText={`
  import React, { useState } from 'react';
  import { List, Avatar, Radio } from 'antd';
  
  import { SwipeOut, Space } from '@baifendian/adhere';

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

  <Space />

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
      `}
      >
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

        <Space />

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
      </Playground>
    </div>
  );
};
