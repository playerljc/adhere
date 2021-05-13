import React from 'react';
import { List, Avatar, Button } from 'antd';
import { PullRefresh, Space } from '@baifendian/adhere';

import FunctionProps from '@/lib/FunctionProps';
import Playground from '@/lib/Playground';
import Props from '@/lib/Props';

import styles from './index.less';

let data = [];
data.length = 100;
data.fill(0);
data = data.map((t, index) => `Ant Design Title ${index + 1}`);

const ref = React.createRef();

export default () => (
  <div className="Page">
    <h1>PullRefresh</h1>
    <p>下拉刷新</p>
    <ul>
      <li>- 支持mobile和pc</li>
    </ul>

    <h3>PullRefresh</h3>
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
          params: 'scrollClassName',
          desc: '附加的样式表',
          type: 'string',
          defaultVal: '',
        },
        {
          params: 'scrollStyle',
          desc: '附加的样式',
          type: 'React.CSSProperties',
          defaultVal: '',
        },
        {
          params: 'pullHeight',
          desc: '拉取的高度',
          type: 'number',
          defaultVal: 'target返回的元素高度',
        },
        {
          params: 'renderIcon',
          desc: '图标的渲染',
          type: '() => React.ReactElement',
          defaultVal: '',
        },
        {
          params: 'renderLabel',
          desc: '默认文字的渲染',
          type: '() => React.ReactElement',
          defaultVal: '',
        },
        {
          params: 'renderCanLabel',
          desc: '可以刷新文本的渲染',
          type: '() => React.ReactElement',
          defaultVal: '',
        },
        {
          params: 'isShowUpdateTime',
          desc: '是否显示更新时间',
          type: 'boolean',
          defaultVal: '',
        },
        {
          params: 'renderLoadingAnimation',
          desc: '拉取后的loading效果，如果是string可选的值可以参考load-awesome库',
          type: '() => React.ReactElement | string',
          defaultVal: '',
        },
        {
          params: 'onPullStart',
          desc: '拖动开始',
          type: 'Function',
          defaultVal: '',
        },
        {
          params: 'onPullCanRefresh',
          desc: '可以进行刷新操作',
          type: 'Function',
          defaultVal: '',
        },
        {
          params: 'onPullRefresh',
          desc: '执行了刷新',
          type: 'Function',
          defaultVal: '',
        },
        {
          params: 'onPullBottom',
          desc: '拉动到了底部',
          type: 'Function',
          defaultVal: '',
        },
        {
          params: 'renderEmpty',
          desc: '自定义empty的UI',
          type: 'Function',
          defaultVal: 'JSX',
        },
        {
          params: 'onPullRebound',
          desc: '弹回了',
          type: 'Function',
          defaultVal: '',
        },
      ]}
    />

    <h3>方法</h3>
    <FunctionProps
      data={[
        {
          name: 'refresh',
          desc: '执行刷新操作',
          modifier: 'public',
          params: [],
          returnType: 'void',
          returnDesc: '',
        },
        {
          name: 'reset',
          desc: '重置',
          modifier: 'public',
          params: [],
          returnType: 'void',
          returnDesc: '',
        },
      ]}
    />

    <Space />

    <h2>基本使用</h2>
    <Playground
      mode="code"
      scope={{ React }}
      codeText={`
  import React from 'react';
  import { List, Avatar } from 'antd';
  import { PullRefresh  } from '@baifendian/adhere';
  
  import styles from './index.less';
  
  let data = [];
  data.length = 100;
  data.fill(0);
  data = data.map((t, index) => "Ant Design Title" + (index + 1));
  
  <PullRefresh
    className={styles.Wrap}
    onPullRefresh={(ins) => {
      setTimeout(() => {
        ins.reset();
      }, 1000 * 3);
    }}
  >
    <List
      itemLayout="horizontal"
      dataSource={[].concat(data)}
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
    `}
    >
      <PullRefresh
        className={styles.Wrap}
        onPullRefresh={(ins) => {
          setTimeout(() => {
            ins.reset();
          }, 1000 * 3);
        }}
      >
        <List
          itemLayout="horizontal"
          dataSource={[].concat(data)}
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
    </Playground>

    <h2>Api触发刷新</h2>
    <Playground
      mode="code"
      scope={{ React }}
      codeText={`
  import React from 'react';
  import { List, Avatar, Button } from 'antd';
  import { PullRefresh, Space } from '@baifendian/adhere';
  
  import styles from './index.less';
  
  let data = [];
  data.length = 100;
  data.fill(0);
  data = data.map((t, index) => "Ant Design Title" + (index + 1));
  
  const ref = React.createRef();
  
  <PullRefresh
    className={styles.Wrap}
    ref={ref}
    onPullRefresh={(ins) => {
      setTimeout(() => {
        ins.reset();
      }, 1000 * 3);
    }}
  >
    <List
      itemLayout="horizontal"
      dataSource={[].concat(data)}
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
  <Space />

  <Button
    onClick={() => {
      ref.current.refresh();
    }}
  >
    触发下拉刷新
  </Button>
    `}
    >
      <PullRefresh
        className={styles.Wrap}
        ref={ref}
        onPullRefresh={(ins) => {
          setTimeout(() => {
            ins.reset();
          }, 1000 * 3);
        }}
      >
        <List
          itemLayout="horizontal"
          dataSource={[].concat(data)}
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
      <Space />

      <Button
        onClick={() => {
          ref.current.refresh();
        }}
      >
        触发下拉刷新
      </Button>
    </Playground>
  </div>
);
