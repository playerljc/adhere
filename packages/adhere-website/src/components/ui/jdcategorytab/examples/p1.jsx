import { Avatar, List, Space, Table, Tag } from 'antd';
import React from 'react';

import { ConditionalRender, JdCategoryTab } from '@baifendian/adhere';

import styles from './examples.less';

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
  return (
    <div className={styles.Wrapper} style={{ border: '1px solid rgba(0,0,0,.1)' }}>
      <JdCategoryTab
        menuData={data.map((t, index) => ({
          key: `${index + 1}`,
          name: `菜单${index + 1}`,
        }))}
        activeKey="1"
      >
        {data.map((t, index) => (
          <JdCategoryTab.Item key={`${index + 1}`}>
            <ConditionalRender
              conditional={index % 2 === 0}
              noMatch={() => (
                <Table
                  className={styles.Table}
                  columns={columns}
                  dataSource={tableData}
                  pagination={false}
                />
              )}
            >
              {() => (
                <List
                  className={styles.Table}
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
  );
};
