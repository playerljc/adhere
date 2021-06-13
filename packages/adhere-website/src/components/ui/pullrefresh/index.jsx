import React from 'react';
import { List, Avatar, Button } from 'antd';
import { PullRefresh, Space } from '@baifendian/adhere';

import FunctionProps from '@/lib/FunctionProps';
import Playground from '@/lib/Playground';
import PlaygroundMulit from '@/lib/PlaygroundMulit';
import Props from '@/lib/Props';

import refreshIcon from './refresh.svg';

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
          params: 'renderLoadingAnimation',
          desc: '拉取后的loading效果，如果是string可选的值可以参考load-awesome库',
          type: '() => React.ReactElement | string',
          defaultVal: '',
        },
        {
          params: 'isShowUpdateTime',
          desc: '是否显示更新时间',
          type: 'boolean',
          defaultVal: '',
        },
        {
          params: 'updateTime',
          desc: '默认的更新时间(毫秒)',
          type: 'number',
          defaultVal: '当前时间的毫秒',
        },
        {
          params: 'updateTimeFormat',
          desc: '更新时间的格式化',
          type: 'string',
          defaultVal: 'YYYY-MM-DD HH:mm:ss',
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
        {
          name: 'resetUpdateTime',
          desc: '重置更新时间',
          modifier: 'public',
          params: [
            {
              name: 'updateTime',
              desc: '更新时间(毫秒)',
              type: 'number',
              defaultVal: '当前时间的毫秒',
              required: '',
            },
          ],
          returnType: 'Promise',
          returnDesc: '',
        },
        {
          name: 'getUpdateTime',
          desc: '获取更新时间(毫秒)',
          modifier: 'public',
          params: [],
          returnType: 'number',
          returnDesc: '当前时间的毫秒',
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

    <Space />

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
    type="primary"
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
        type="primary"
        onClick={() => {
          ref.current.refresh();
        }}
      >
        触发下拉刷新
      </Button>
    </Playground>

    <Space />

    <h2>自定义图标和文本(1)</h2>
    <PlaygroundMulit
      config={[
        {
          title: 'index.js',
          mode: 'code',
          scope: { React },
          codeText: `
  import React from 'react';
  import { List, Avatar } from 'antd';
  import { PullRefresh } from '@baifendian/adhere';
  
  import refreshIcon from './refresh.svg';
  
  import styles from './index.less';
  
  let data = [];
  data.length = 100;
  data.fill(0);
  data = data.map((t, index) => "Ant Design Title" + (index + 1));
  
  <PullRefresh
    className={styles.Wrap}
    isShowUpdateTime={false}
    renderIcon={() => (
      <div>
        <img src={refreshIcon} alt="" />
      </div>
    )}
    renderLabel={() => '下拉可刷新'}
    renderCanLabel={() => '释放可刷新'}
    renderLoadingAnimation={() => (
      <div className={styles.RefreshCustom1}>
        <img src={refreshIcon} alt="" />
        <div>刷新中...</div>
      </div>
    )}
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
          `,
        },
        {
          title: 'index.less',
          mode: 'code',
          scope: { React },
          codeText: `
  .Wrap {
    height: 300px;
  }
  
  .RefreshCustom1 {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #000;
  
    img {
      margin-right: 15px;
      :local {
        animation: RefreshCustom1 1.2s infinite linear;
      }
    }
  }
  
  @keyframes RefreshCustom1 {
    to {
      transform: rotate(405deg);
      transform-origin: center center;
    }
  }
          `,
        },
      ]}
    >
      <PullRefresh
        className={styles.Wrap}
        isShowUpdateTime={false}
        renderIcon={() => (
          <div>
            <img src={refreshIcon} alt="" />
          </div>
        )}
        renderLabel={() => '下拉可刷新'}
        renderCanLabel={() => '释放可刷新'}
        renderLoadingAnimation={() => (
          <div className={styles.RefreshCustom1}>
            <img src={refreshIcon} alt="" />
            <div>刷新中...</div>
          </div>
        )}
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
    </PlaygroundMulit>
  </div>
);
