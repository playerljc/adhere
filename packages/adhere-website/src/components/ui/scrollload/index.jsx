import React, { useState, useEffect } from 'react';
import { List, Avatar, Spin, Empty } from 'antd';
import { ScrollLoad } from '@baifendian/adhere';

import PlayGroundPage, {
  Section,
  PropsSection,
  CodeBoxSection,
  FunctionPropsSection,
} from '@/lib/PlaygroundPage';

const globalData = [];
globalData.length = 10;
globalData.fill(1);

let page = 1;

let callbackHandler = null;

let ref1Status = ScrollLoad.NORMAL;
let ref2Status = ScrollLoad.NORMAL;
let ref3Status = ScrollLoad.NORMAL;

export default () => {
  function boxPanelConfig() {
    return [
      {
        id: `p1`,
        name: `公共代码`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: '公共代码',
            info: '公共代码',
          },
        },
        codeText: `
  const globalData = [];
  globalData.length = 10;
  globalData.fill(1);

  let page = 1;

  let callbackHandler = null;

  let ref1Status = ScrollLoad.NORMAL;
  let ref2Status = ScrollLoad.NORMAL;
  let ref3Status = ScrollLoad.NORMAL;

  // eslint-disable-next-line no-use-before-define,no-shadow
  const [data, setData] = useState(getData());

  useEffect(() => {
    if (callbackHandler) {
      callbackHandler(ScrollLoad.NORMAL);
      callbackHandler = null;
    }
  }, [data]);

  function getData() {
    const result = [];
    result.length = page * 10;
    result.fill(0);

    // eslint-disable-next-line no-plusplus
    page++;

    return result.map((t, index) => ({
      title: "Ant Design Title" + (index + 1) ,
    }));
  }
        `,
        type: 'PlayGround',
      },
      {
        id: `p2`,
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
  import { List, Avatar } from 'antd';
  import { ScrollLoad } from '@baifendian/adhere';

  <ScrollLoad
    style={{ width: 400, height: 600 }}
    onScrollBottom={(callback) => {
      setTimeout(() => {
        callbackHandler = callback;
        setData(getData());
      }, 2000);
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
  </ScrollLoad>
        `,
        type: 'PlayGround',
        renderChildren: () => (
          <ScrollLoad
            style={{ width: 400, height: 600 }}
            onScrollBottom={(callback) => {
              setTimeout(() => {
                callbackHandler = callback;
                setData(getData());
              }, 2000);
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
          </ScrollLoad>
        ),
      },
      {
        id: `p3`,
        name: `没有数据的显示`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: '没有数据的显示',
            info: '没有数据的显示',
          },
        },
        codeText: `
  import React from 'react';
  import { List, Avatar } from 'antd';
  import { ScrollLoad } from '@baifendian/adhere';

  <ScrollLoad
    style={{ width: 400, height: 600 }}
    onScrollBottom={(callback) => {
      if (ref1Status === ScrollLoad.EMPTY) {
        callback(ScrollLoad.EMPTY);
      }

      setTimeout(() => {
        callback(ScrollLoad.EMPTY);
        ref1Status = ScrollLoad.EMPTY;
      }, 2000);
    }}
    onEmptyClick={() => {
      alert('点击了');
    }}
  >
    <List
      itemLayout="horizontal"
      dataSource={globalData.map((t, index) => ({
        title: "Ant Design Title" + (index + 1),
      }))}
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
  </ScrollLoad>
        `,
        type: 'PlayGround',
        renderChildren: () => (
          <ScrollLoad
            style={{ width: 400, height: 600 }}
            onScrollBottom={(callback) => {
              if (ref1Status === ScrollLoad.EMPTY) {
                callback(ScrollLoad.EMPTY);
              }

              setTimeout(() => {
                callback(ScrollLoad.EMPTY);
                ref1Status = ScrollLoad.EMPTY;
              }, 2000);
            }}
            onEmptyClick={() => {
              alert('点击了');
            }}
          >
            <List
              itemLayout="horizontal"
              dataSource={globalData.map((t, index) => ({
                title: `Ant Design Title${index + 1}`,
              }))}
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
          </ScrollLoad>
        ),
      },
      {
        id: `p4`,
        name: `错误的显示`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: '错误的显示',
            info: '错误的显示',
          },
        },
        codeText: `
  import React from 'react';
  import { List, Avatar } from 'antd';
  import { ScrollLoad } from '@baifendian/adhere';

  <ScrollLoad
    style={{ width: 400, height: 600 }}
    onScrollBottom={(callback) => {
      if (ref2Status === ScrollLoad.ERROR) {
        callback(ScrollLoad.ERROR);
      }

      setTimeout(() => {
        callback(ScrollLoad.ERROR);
        ref2Status = ScrollLoad.ERROR;
      }, 2000);
    }}
    onErrorClick={() => {
      alert('点击了');
    }}
  >
    <List
      itemLayout="horizontal"
      dataSource={globalData.map((t, index) => ({
        title: "Ant Design Title"+(index + 1),
      }))}
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
  </ScrollLoad>
        `,
        type: 'PlayGround',
        renderChildren: () => (
          <ScrollLoad
            style={{ width: 400, height: 600 }}
            onScrollBottom={(callback) => {
              if (ref2Status === ScrollLoad.ERROR) {
                callback(ScrollLoad.ERROR);
              }

              setTimeout(() => {
                callback(ScrollLoad.ERROR);
                ref2Status = ScrollLoad.ERROR;
              }, 2000);
            }}
            onErrorClick={() => {
              alert('点击了');
            }}
          >
            <List
              itemLayout="horizontal"
              dataSource={globalData.map((t, index) => ({
                title: `Ant Design Title${index + 1}`,
              }))}
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
          </ScrollLoad>
        ),
      },
      {
        id: `p5`,
        name: `自定义loading和empty`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: '自定义loading和empty',
            info: '自定义loading和empty',
          },
        },
        codeText: `
  import React from 'react';
  import { List, Avatar } from 'antd';
  import { ScrollLoad } from '@baifendian/adhere';

  <ScrollLoad
    style={{ width: 400, height: 400 }}
    onScrollBottom={(callback) => {
      if (ref3Status === ScrollLoad.EMPTY) {
        callback(ScrollLoad.EMPTY);
      }

      setTimeout(() => {
        callback(ScrollLoad.EMPTY);
        ref3Status = ScrollLoad.EMPTY;
      }, 2000);
    }}
    renderLoading={() => <Spin tip="loading..." style={{ width: '100%' }} />}
    renderEmpty={() => <Empty />}
  >
    <List
      itemLayout="horizontal"
      dataSource={globalData.map((t, index) => ({
        title: "Ant Design Title" + (index + 1),
      }))}
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
  </ScrollLoad>
        `,
        type: 'PlayGround',
        renderChildren: () => (
          <ScrollLoad
            style={{ width: 400, height: 400 }}
            onScrollBottom={(callback) => {
              if (ref3Status === ScrollLoad.EMPTY) {
                callback(ScrollLoad.EMPTY);
              }

              setTimeout(() => {
                callback(ScrollLoad.EMPTY);
                ref3Status = ScrollLoad.EMPTY;
              }, 2000);
            }}
            renderLoading={() => <Spin tip="loading..." style={{ width: '100%' }} />}
            renderEmpty={() => <Empty />}
          >
            <List
              itemLayout="horizontal"
              dataSource={globalData.map((t, index) => ({
                title: `Ant Design Title${index + 1}`,
              }))}
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
          </ScrollLoad>
        ),
      },
    ];
  }

  const [data, setData] = useState(getData());

  useEffect(() => {
    if (callbackHandler) {
      callbackHandler(ScrollLoad.NORMAL);
      callbackHandler = null;
    }
  }, [data]);

  function getData() {
    const result = [];
    result.length = page * 10;
    result.fill(0);

    // eslint-disable-next-line no-plusplus
    page++;

    return result.map((t, index) => ({
      title: `Ant Design Title ${index + 1}`,
    }));
  }

  return (
    <PlayGroundPage>
      <Section title="ScrollLoad">
        <p>滚动加载</p>
      </Section>

      <CodeBoxSection title="代码演示" columnCount={1} config={boxPanelConfig()} />

      <PropsSection
        title="Props"
        config={[
          {
            border: true,
            title: 'ScrollLoad',
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
                params: 'loadClassName',
                desc: 'load附加的样式表',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'loadStyle',
                desc: 'load附加的样式',
                type: 'React.CSSProperties',
                defaultVal: '',
              },
              {
                params: 'emptyClassName',
                desc: 'empty附加的样式表',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'emptyStyle',
                desc: 'empty附加的样式',
                type: 'React.CSSProperties',
                defaultVal: '',
              },
              {
                params: 'errorClassName',
                desc: 'error附加的样式表',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'errorStyle',
                desc: 'error附加的样式',
                type: 'React.CSSProperties',
                defaultVal: '',
              },
              {
                params: 'distance',
                desc: '距离底部的距离',
                type: 'number',
                defaultVal: '50',
              },
              {
                params: 'onScrollBottom',
                desc: '滚动到底部的钩子',
                type: 'Function',
                defaultVal: '',
              },
              {
                params: 'onEmptyClick',
                desc: '点击empty的钩子',
                type: 'Function',
                defaultVal: '',
              },
              {
                params: 'onErrorClick',
                desc: '点击error的钩子',
                type: 'Function',
                defaultVal: '',
              },
              {
                params: 'renderLoading',
                desc: '自定义loading的UI',
                type: 'Function',
                defaultVal: '返回JSX',
              },
              {
                params: 'renderEmpty',
                desc: '自定义empty的UI',
                type: 'Function',
                defaultVal: 'JSX',
              },
              {
                params: 'renderError',
                desc: '自定义error的UI',
                type: 'Function',
                defaultVal: 'JSX',
              },
              {
                params: 'getScrollContainer',
                desc: '滚动元素设置',
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
                name: 'hideAll',
                desc: '隐藏所有',
                modifier: 'public',
                params: [],
                returnType: 'void',
                returnDesc: '',
              },
            ],
          },
        ]}
      />
    </PlayGroundPage>
  );
};
