import { Button } from 'antd';
import React, { useRef } from 'react';

import { Space, Surnames } from '@baifendian/adhere';

import PlayGroundPage, {
  CodeBoxSection,
  FunctionPropsSection,
  PropsSection,
  Section,
} from '@/lib/PlaygroundPage';

import './index.less';

function getIndexesProps() {
  const startCharCode = 'A'.charCodeAt();
  const endCharCode = 'Z'.charCodeAt();

  const indexes = [];

  const count = [];
  count.length = 10;
  count.fill(1);

  for (let i = startCharCode; i <= endCharCode; i++) {
    indexes.push({
      index: String.fromCharCode(i),
      renderIndex: (index) => index.index,
      renderTitle: (record) => record.index,
      renderContent: (record) => (
        <ul key={record.index}>
          {count.map((t, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <li key={index + 1}>{`${record.index}${index + 1}`}</li>
          ))}
        </ul>
      ),
    });
  }

  return indexes;
}

function getDataSource() {
  const startCharCode = 'A'.charCodeAt();
  const endCharCode = 'Z'.charCodeAt();

  const dataSource = [];

  for (let i = startCharCode; i <= endCharCode; i++) {
    dataSource.push({
      index: String.fromCharCode(i),
      data: [],
    });
  }

  return dataSource;
}

export default () => {
  const ref1 = useRef();

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
  function getIndexesProps() {
    const startCharCode = 'A'.charCodeAt();
    const endCharCode = 'Z'.charCodeAt();

    const indexes = [];

    const count = [];
    count.length = 10;
    count.fill(1);

    for (let i = startCharCode; i <= endCharCode; i++) {
      indexes.push({
        index: String.fromCharCode(i),
        renderIndex: (index) => index.index,
        renderTitle: (record) => record.index,
        renderContent: (record) => (
          <ul key={record.index}>
            {count.map((t, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <li key={index + 1}>{record + 1}-{index + 1}</li>
            ))}
          </ul>
        ),
      });
    }

    return indexes;
  }

  function getDataSource() {
    const startCharCode = 'A'.charCodeAt();
    const endCharCode = 'Z'.charCodeAt();

    const dataSource = [];

    for (let i = startCharCode; i <= endCharCode; i++) {
      dataSource.push({
        index: String.fromCharCode(i),
        data: [],
      });
    }

    return dataSource;
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
  import { Surnames, Space } from '@baifendian/adhere';

  <div style={{ display: 'flex' }}>
    <Space.Group direction="horizontal">
      <div style={{ width: 300 }}>
        <Surnames
          style={{ border: '1px solid #ccc' }}
          indexes={getIndexesProps()}
          dataSource={getDataSource()}
        />
      </div>

      <div style={{ width: 300 }}>
        <Surnames
          position="left"
          style={{ border: '1px solid #ccc' }}
          indexes={getIndexesProps()}
          dataSource={getDataSource()}
        />
      </div>
    </Space.Group>
  </div>
      `,
        type: 'PlayGround',
        renderChildren: () => (
          <div style={{ display: 'flex' }}>
            <Space.Group direction="horizontal">
              <div style={{ width: 300 }}>
                <Surnames
                  style={{ border: '1px solid #ccc' }}
                  indexes={getIndexesProps()}
                  dataSource={getDataSource()}
                />
              </div>

              <div style={{ width: 300 }}>
                <Surnames
                  position="left"
                  style={{ border: '1px solid #ccc' }}
                  indexes={getIndexesProps()}
                  dataSource={getDataSource()}
                />
              </div>
            </Space.Group>
          </div>
        ),
      },
      {
        id: `p3`,
        name: `上下结构`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: '上下结构',
            info: '上下结构',
          },
        },
        codeText: `
  import { Surnames, Space } from '@baifendian/adhere';

  <div style={{ display: 'flex' }}>
    <Space.Group direction="horizontal">
      <div style={{ height: 516 }}>
        <Surnames
          position="top"
          style={{ border: '1px solid #ccc' }}
          indexes={getIndexesProps()}
          dataSource={getDataSource()}
        />
      </div>

      <div style={{ height: 516 }}>
        <Surnames
          position="bottom"
          style={{ border: '1px solid #ccc' }}
          indexes={getIndexesProps()}
          dataSource={getDataSource()}
        />
      </div>
    </Space.Group>
  </div>
      `,
        type: 'PlayGround',
        "antd": "^5.8.3"
        renderChildren: () => (
          <div style={{ display: 'flex' }}>
            <Space.Group direction="horizontal">
              <div style={{ height: 516 }}>
                <Surnames
                  position="top"
                  style={{ border: '1px solid #ccc' }}
                  indexes={getIndexesProps()}
                  dataSource={getDataSource()}
                />
              </div>

              <div style={{ height: 516 }}>
                <Surnames
                  position="bottom"
                  style={{ border: '1px solid #ccc' }}
                  indexes={getIndexesProps()}
                  dataSource={getDataSource()}
                />
              </div>
            </Space.Group>
          </div>
        ),
      },
      {
        id: `p4`,
        name: `使用api`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: '使用api',
            info: '使用api',
          },
        },
        codeText: `
  import { Surnames, Space } from '@baifendian/adhere';

  const ref1 = useRef();

  <Space.Group direction="horizontal">
    <Button
      type="primary"
      onClick={() => {
        ref1.current.scrollToAnimation('Z');
      }}
    >
      滚动到底部
    </Button>
    <Button
      onClick={() => {
        ref1.current.scrollToAnimation('A');
      }}
    >
      滚动到顶部
    </Button>
  </Space.Group>

  <Space direction="vertical" />

  <div style={{ width: 300 }}>
    <Surnames
      ref={ref1}
      style={{ border: '1px solid #ccc' }}
      indexes={getIndexesProps()}
      dataSource={getDataSource()}
    />
  </div>
      `,
        type: 'PlayGround',
        renderChildren: () => (
          <>
            <Space.Group direction="horizontal">
              <Button
                type="primary"
                onClick={() => {
                  ref1.current.scrollToAnimation('Z');
                }}
              >
                滚动到底部
              </Button>
              <Button
                onClick={() => {
                  ref1.current.scrollToAnimation('A');
                }}
              >
                滚动到顶部
              </Button>
            </Space.Group>

            <Space direction="vertical" />

            <div style={{ width: 300 }}>
              <Surnames
                ref={ref1}
                style={{ border: '1px solid #ccc' }}
                indexes={getIndexesProps()}
                dataSource={getDataSource()}
              />
            </div>
          </>
        ),
      },
    ];
  }

  return (
    <PlayGroundPage className="Surnames">
      <Section title="Surnames">
        <p>姓名面板</p>
      </Section>

      <CodeBoxSection title="代码演示" columnCount={1} config={boxPanelConfig()} />

      <PropsSection
        title="Props"
        config={[
          {
            border: true,
            title: 'Surnames',
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
                params: 'position',
                desc: "显示的位置 'top', 'right', 'bottom', 'left'",
                type: 'string',
                defaultVal: 'right',
              },
              {
                params: 'indexes',
                desc: '索引的信息',
                type: 'Array',
                defaultVal: '[]',
              },
              {
                params: 'dataSource',
                desc: '数据',
                type: 'Array',
                defaultVal: '[]',
              },
              {
                params: 'onBeforeScroll',
                desc: '滚动之前的钩子',
                type: 'Function',
                defaultVal: '',
              },
              {
                params: 'onScroll',
                desc: '滚动',
                type: 'Function',
                defaultVal: '',
              },
            ],
          },
          {
            border: true,
            title: 'indexes',
            data: [
              {
                params: 'index',
                desc: '索引值',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'renderIndex',
                desc: '渲染索引的方法',
                type: 'Function',
                defaultVal: '',
              },
              {
                params: 'renderTitle',
                desc: '渲染title的方法',
                type: 'Function',
                defaultVal: '',
              },
              {
                params: 'renderContent',
                desc: '渲染Content的方法',
                type: 'Function',
                defaultVal: '',
              },
            ],
          },
          {
            border: true,
            title: 'dataSource',
            data: [
              {
                params: 'index',
                desc: '索引值',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'data',
                desc: '数据',
                type: 'Array<Object>',
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
                name: 'scrollToAnimation',
                desc: '动画的滚动到指定所引处',
                modifier: 'public',
                params: [
                  {
                    name: 'name',
                    desc: '索引名称',
                    type: 'string',
                    defaultVal: '',
                    required: 'true',
                  },
                  {
                    name: 'duration',
                    desc: '动画的完成时间',
                    type: 'number',
                    defaultVal: '100',
                    required: 'false',
                  },
                ],
                returnType: '',
                returnDesc: '',
              },
              {
                name: 'scrollTo',
                desc: '滚动到指定所引处',
                modifier: 'public',
                params: [
                  {
                    name: 'name',
                    desc: '索引名称',
                    type: 'string',
                    defaultVal: '',
                    required: 'true',
                  },
                ],
                returnType: '',
                returnDesc: '',
              },
            ],
          },
        ]}
      />
    </PlayGroundPage>
  );
};
