import { Avatar, Button, List } from 'antd';
import React, { useRef } from 'react';

import { PullRefresh, Space } from '@baifendian/adhere';

import PlayGroundPage, {
  CodeBoxSection,
  FunctionPropsSection,
  PropsSection,
  Section,
} from '@/lib/PlaygroundPage';

import refreshIcon from './refresh.svg';

import styles from './index.less';

let data = [];
data.length = 100;
data.fill(0);
data = data.map((t, index) => `Ant Design Title ${index + 1}`);

export default () => {
  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();

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
    `,
        type: 'PlayGround',
        renderChildren: () => (
          <PullRefresh
            ref={ref1}
            className={styles.Wrap}
            onPullRefresh={() => {
              setTimeout(() => {
                ref1.current.reset();
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
        ),
      },
      {
        id: `p2`,
        name: `Api触发刷新`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: 'Api触发刷新',
            info: 'Api触发刷新',
          },
        },
        codeText: `
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
    `,
        type: 'PlayGround',
        renderChildren: () => (
          <>
            <PullRefresh
              className={styles.Wrap}
              ref={ref2}
              onPullRefresh={() => {
                setTimeout(() => {
                  ref2.current.reset();
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
                ref2.current.refresh();
              }}
            >
              触发下拉刷新
            </Button>
          </>
        ),
      },
      {
        id: `p3`,
        name: `自定义图标和文本`,
        cardProps: {
          description: {
            title: '自定义图标和文本',
            info: '自定义图标和文本',
          },
        },
        config: [
          {
            title: 'index.jsx',
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
        ],
        type: 'PlayGroundMulit',
        renderChildren: () => (
          <PullRefresh
            ref={ref3}
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
            onPullRefresh={() => {
              setTimeout(() => {
                ref3.current.reset();
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
        ),
      },
    ];
  }

  return (
    <PlayGroundPage>
      <Section title="PullRefresh">
        <p>下拉刷新</p>
        <ul>
          <li>- 支持mobile和pc</li>
        </ul>
      </Section>

      <CodeBoxSection title="代码演示" columnCount={1} config={boxPanelConfig()} />

      <PropsSection
        title="Props"
        config={[
          {
            border: true,
            title: 'PullRefresh',
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
            ],
          },
        ]}
      />

      <FunctionPropsSection
        title="Api"
        config={[
          {
            border: true,
            title: '方法',
            data: [
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
            ],
          },
        ]}
      />
    </PlayGroundPage>
  );
};
