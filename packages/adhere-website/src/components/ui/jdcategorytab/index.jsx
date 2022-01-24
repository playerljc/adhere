import React, { useState, useRef } from 'react';
import { List, Avatar, Table, Tag, Space, Button } from 'antd';
import { JdCategoryTab, ConditionalRender, Space as BSpace, Spin } from '@baifendian/adhere';

import PlayGroundPage, {
  Section,
  PropsSection,
  CodeBoxSection,
  FunctionPropsSection,
} from '@/lib/PlaygroundPage';

const data = [];
data.length = 100;
data.fill(0);

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: (tags) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];

const tableData = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];

const listData = [
  {
    title: 'Ant Design Title 1',
  },
  {
    title: 'Ant Design Title 2',
  },
  {
    title: 'Ant Design Title 3',
  },
  {
    title: 'Ant Design Title 4',
  },
];

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
  const data = [];
  data.length = 100;
  data.fill(0);

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Tags',
      key: 'tags',
      dataIndex: 'tags',
      render: (tags) => (
        <>
          {tags.map((tag) => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
            if (tag === 'loser') {
              color = 'volcano';
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
          <a>Invite {record.name}</a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];

  const tableData = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser'],
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
  ];

  const listData = [
    {
      title: 'Ant Design Title 1',
    },
    {
      title: 'Ant Design Title 2',
    },
    {
      title: 'Ant Design Title 3',
    },
    {
      title: 'Ant Design Title 4',
    },
];
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
  import React from 'react';
  import { List, Avatar, Table } from 'antd';
  import { JdCategoryTab, ConditionalRender } from '@baifendian/adhere';

  <div style={{ width: 600, height: 600, border: '1px solid rgba(0,0,0,.1)' }}>
    <JdCategoryTab
      menuData={data.map((t, index) => ({
        key: String(index + 1),
        name: "菜单:+(index + 1)",
      }))}
      activeKey="1"
    >
      {data.map((t, index) => (
        <JdCategoryTab.Item key={String(index + 1)} id={String(index + 1)}>
          <ConditionalRender
            conditional={index % 2 === 0}
            noMatch={
              () => (
                <Table
                  style={{ padding: 20 }}
                  columns={columns}
                  dataSource={tableData}
                  pagination={false}
                />
              )
            }
          >
            () => (
              <List
                style={{ padding: 20 }}
                itemLayout="horizontal"
                dataSource={listData}
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
            )
          </ConditionalRender>
        </JdCategoryTab.Item>
      ))}
    </JdCategoryTab>
  </div>
        `,
        type: 'PlayGround',
        renderChildren: () => (
          <div style={{ width: 600, height: 600, border: '1px solid rgba(0,0,0,.1)' }}>
            <JdCategoryTab
              menuData={data.map((t, index) => ({
                key: `${index + 1}`,
                name: `菜单${index + 1}`,
              }))}
              activeKey="1"
            >
              {data.map((t, index) => (
                <JdCategoryTab.Item key={`${index + 1}`} id={`${index + 1}`}>
                  <ConditionalRender
                    conditional={index % 2 === 0}
                    noMatch={() => (
                      <Table
                        style={{ padding: 20 }}
                        columns={columns}
                        dataSource={tableData}
                        pagination={false}
                      />
                    )}
                  >
                    {() => (
                      <List
                        style={{ padding: 20 }}
                        itemLayout="horizontal"
                        dataSource={listData}
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
                    )}
                  </ConditionalRender>
                </JdCategoryTab.Item>
              ))}
            </JdCategoryTab>
          </div>
        ),
      },
      {
        id: `p3`,
        name: `同一时刻只有一个Tab`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: '同一时刻只有一个Tab',
            info: 'tab同一时刻只有一个Tab',
          },
        },
        codeText: `
  import React, { useState, useRef } from 'react';
  import { List, Avatar, Table, Tag, Space, Button } from 'antd';
  import { JdCategoryTab, ConditionalRender, Space as BSpace, Spin } from '@baifendian/adhere';

  <div style={{ width: 600, height: 600, border: '1px solid rgba(0,0,0,.1)' }}>
    <JdCategoryTab
      menuData={data.map((t, index) => ({
        key: String(index + 1),
        name: "菜单" + (index + 1),
      }))}
      activeKey={activeKey}
      onChange={(k) => {
        setActiveKey(k);
      }}
    >
      <JdCategoryTab.Item id={activeKey}>
        <ConditionalRender
          conditional={parseInt(activeKey) % 2 === 0}
          noMatch={
            () => (
              <Table
                style={{ padding: 20 }}
                columns={columns}
                dataSource={tableData}
                pagination={false}
              />
            )
          }
        >
          () => (
            <List
              style={{ padding: 20 }}
              itemLayout="horizontal"
              dataSource={listData}
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
          )
        </ConditionalRender>
      </JdCategoryTab.Item>
    </JdCategoryTab>
  </div>
        `,
        type: 'PlayGround',
        renderChildren: () => (
          <div style={{ width: 600, height: 600, border: '1px solid rgba(0,0,0,.1)' }}>
            <JdCategoryTab
              menuData={data.map((t, index) => ({
                key: `${index + 1}`,
                name: `菜单${index + 1}`,
              }))}
              activeKey={activeKey}
              onChange={(k) => {
                setActiveKey(k);
              }}
            >
              <JdCategoryTab.Item id={activeKey}>
                <ConditionalRender
                  conditional={parseInt(activeKey) % 2 === 0}
                  noMatch={() => (
                    <Table
                      style={{ padding: 20 }}
                      columns={columns}
                      dataSource={tableData}
                      pagination={false}
                    />
                  )}
                >
                  {() => (
                    <List
                      style={{ padding: 20 }}
                      itemLayout="horizontal"
                      dataSource={listData}
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
                  )}
                </ConditionalRender>
              </JdCategoryTab.Item>
            </JdCategoryTab>
          </div>
        ),
      },
      {
        id: `p4`,
        name: `置顶或置底`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: '置顶或置底',
            info: '置顶或置底',
          },
        },
        codeText: `
  import React, { useState, useRef } from 'react';
  import { List, Avatar, Table, Tag, Space, Button } from 'antd';
  import { JdCategoryTab, ConditionalRender, Space as BSpace, Spin } from '@baifendian/adhere';

  <BSpace.Group direction="horizontal">
    <Button
      type="primary"
      onClick={() => {
        ref.current.scrollTo('1');
      }}
    >
      置顶
    </Button>
    <Button
      onClick={() => {
        ref.current.scrollTo(\`${data.length}\`);
      }}
    >
      置底
    </Button>
  </BSpace.Group>

  <BSpace />

  <div
    style={{
      position: 'relative',
      width: 600,
      height: 600,
      border: '1px solid rgba(0,0,0,.1)',
    }}
  >
    <Spin spinning={loading} />
    <JdCategoryTab
      ref={ref}
      menuData={data.map((t, index) => ({
        key: String(index + 1),
        name: "菜单" + (index + 1),
      }))}
      activeKey={activeKey1}
      onBeforeChange={() => {
        setLoading(true);
        return true;
      }}
      onChange={(key) => {
        setActiveKey1(key);
        setLoading(false);
      }}
    >
      {data.map((t, index) => (
        <JdCategoryTab.Item key={String(index + 1)} id={String(index + 1)}>
          <ConditionalRender
            conditional={index % 2 === 0}
            noMatch={
              () => (
                <Table
                  style={{ padding: 20 }}
                  columns={columns}
                  dataSource={tableData}
                  pagination={false}
                />
              )
            }
          >
            {
              () => (
                <List
                  style={{ padding: 20 }}
                  itemLayout="horizontal"
                  dataSource={listData}
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
              )
            }
          </ConditionalRender>
        </JdCategoryTab.Item>
      ))}
    </JdCategoryTab>
  </div>
        `,
        type: 'PlayGround',
        renderChildren: () => (
          <>
            <BSpace.Group direction="horizontal">
              <Button
                type="primary"
                onClick={() => {
                  ref.current.scrollTo('1');
                }}
              >
                置顶
              </Button>
              <Button
                onClick={() => {
                  ref.current.scrollTo(`${data.length}`);
                }}
              >
                置底
              </Button>
            </BSpace.Group>

            <BSpace />

            <div
              style={{
                position: 'relative',
                width: 600,
                height: 600,
                border: '1px solid rgba(0,0,0,.1)',
              }}
            >
              <Spin spinning={loading} />
              <JdCategoryTab
                ref={ref}
                menuData={data.map((t, index) => ({
                  key: `${index + 1}`,
                  name: `菜单${index + 1}`,
                }))}
                activeKey={activeKey1}
                onBeforeChange={() => {
                  setLoading(true);
                  return true;
                }}
                onChange={(key) => {
                  setActiveKey1(key);
                  setLoading(false);
                }}
              >
                {data.map((t, index) => (
                  <JdCategoryTab.Item key={`${index + 1}`} id={`${index + 1}`}>
                    <ConditionalRender
                      conditional={index % 2 === 0}
                      noMatch={() => (
                        <Table
                          style={{ padding: 20 }}
                          columns={columns}
                          dataSource={tableData}
                          pagination={false}
                        />
                      )}
                    >
                      {() => (
                        <List
                          style={{ padding: 20 }}
                          itemLayout="horizontal"
                          dataSource={listData}
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
                      )}
                    </ConditionalRender>
                  </JdCategoryTab.Item>
                ))}
              </JdCategoryTab>
            </div>
          </>
        ),
      },
    ];
  }

  const [activeKey, setActiveKey] = useState('1');
  const [activeKey1, setActiveKey1] = useState('1');
  const [loading, setLoading] = useState(false);

  const ref = useRef();

  return (
    <PlayGroundPage>
      <Section title="JDCategoryTab">
        <p>京东的面板</p>
        <p>本组件基于iscroll开发</p>
      </Section>

      <CodeBoxSection title="代码演示" columnCount={1} config={boxPanelConfig()} />

      <PropsSection
        title="Props"
        config={[
          {
            border: true,
            title: 'JdCategoryTab',
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
                params: 'menuClassName',
                desc: 'menu附加的样式表',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'menuStyle',
                desc: 'menu附加的样式',
                type: 'React.CSSProperties',
                defaultVal: '',
              },
              {
                params: 'menuInnerClassName',
                desc: 'menuInner附加的样式表',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'menuInnerStyle',
                desc: 'menuInner附加的样式',
                type: 'React.CSSProperties',
                defaultVal: '',
              },
              {
                params: 'tabClassName',
                desc: 'tab附加的样式表',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'tabStyle',
                desc: 'tab附加的样式',
                type: 'React.CSSProperties',
                defaultVal: '',
              },
              {
                params: 'menuItemClassName',
                desc: 'menuItem附加的样式表',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'menuItemStyle',
                desc: 'menuItem附加的样式',
                type: 'React.CSSProperties',
                defaultVal: '',
              },
              {
                params: 'menuData',
                desc: '菜单数据',
                type: 'Object{key,name}',
                defaultVal: '{}',
              },
              {
                params: 'activeKey',
                desc: '当前激活项',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'renderMenuItem',
                desc: '自定义渲染菜单',
                type: 'Function',
                defaultVal: '',
              },
              {
                params: 'onBeforeChange',
                desc: '激活之前的钩子',
                type: 'Function',
                defaultVal: '执行改变返回true，否则返回false',
              },
              {
                params: 'onChange',
                desc: '菜单激活想发生改变',
                type: 'Function',
                defaultVal: '',
              },
            ],
          },
          {
            border: true,
            title: 'JdCategoryTab.Item',
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
                params: 'key',
                desc: '唯一标志',
                type: 'string',
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
                name: 'scrollTo',
                desc: '滚动到指定key',
                modifier: 'public',
                params: [
                  {
                    name: 'key',
                    desc: '唯一标志',
                    type: 'string',
                    defaultVal: '',
                    required: '',
                  },
                  {
                    name: 'time',
                    desc: '滚动时间',
                    type: 'number',
                    defaultVal: '250',
                    required: '',
                  },
                  {
                    name: 'easing',
                    desc: 'IScroll的easing',
                    type: 'string',
                    defaultVal: 'IScroll.utils.ease',
                    required: '',
                  },
                ],
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
