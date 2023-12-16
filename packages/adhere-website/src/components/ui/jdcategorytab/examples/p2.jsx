import { Avatar, List, Space, Table, Tag } from 'antd';
import React, { useState } from 'react';

import { ConditionalRender, JdCategoryTab } from '@baifendian/adhere';

const data = Array.from({ length: 100 }).fill(0);

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
  const [activeKey, setActiveKey] = useState('1');

  return (
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
        <JdCategoryTab.Item key={activeKey}>
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
  );
};
