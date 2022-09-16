import { Avatar, Empty, List, Spin } from 'antd';
import React, { useEffect, useState } from 'react';

import { ScrollLoad, Space } from '@baifendian/adhere';

import FunctionProps from '@/lib/FunctionProps';
import Playground from '@/lib/Playground';
import Props from '@/lib/Props';

const globalData = [];
globalData.length = 10;
globalData.fill(1);

let page = 1;

let callbackHandler = null;

let ref1Status = ScrollLoad.NORMAL;
let ref2Status = ScrollLoad.NORMAL;
let ref3Status = ScrollLoad.NORMAL;

export default () => {
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
      title: `Ant Design Title ${index + 1}`,
    }));
  }

  return (
    <div className="Page">
      <h1>ScrollLoad</h1>
      <p>滚动加载</p>

      <Props
        border
        title="ScrollLoad"
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
        ]}
      />

      <Space />

      <FunctionProps
        border
        title="方法"
        data={[
          {
            name: 'hideAll',
            desc: '隐藏所有',
            modifier: 'public',
            params: [],
            returnType: 'void',
            returnDesc: '',
          },
        ]}
      />

      <Space />

      <Playground
        mode="code"
        scope={{ React }}
        expand
        codeText={`
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
        `}
      />

      <h2>基本使用</h2>
      <Playground
        mode="code"
        scope={{ React }}
        codeText={`
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
        `}
      >
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
      </Playground>

      <h2>没有数据的显示</h2>
      <Playground
        mode="code"
        scope={{ React }}
        codeText={`
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
        `}
      >
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
      </Playground>

      <h2>错误的显示</h2>
      <Playground
        mode="code"
        scope={{ React }}
        codeText={`
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
        `}
      >
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
      </Playground>

      <h2>自定义loading和empty</h2>
      <Playground
        mode="code"
        scope={{ React }}
        codeText={`
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
        `}
      >
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
      </Playground>
    </div>
  );
};
