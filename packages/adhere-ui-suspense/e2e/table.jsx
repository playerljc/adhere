import { Table } from 'antd';
import React from 'react';

import Suspense from '../src/index';

class TableWrap extends Suspense {
  constructor(props) {
    super(props);

    this.state = {
      dataSource: [],
      loading: false,
      pagination: {
        current: 1,
        pageSize: 2,
      },
    };
  }

  componentWillReceiveProps(nextProps) {
    super.componentWillReceiveProps(nextProps);

    if (nextProps.reset) {
      this.setState(
        {
          pagination: {
            current: 1,
            pageSize: 2,
          },
        },
        () => {
          this.fetchData();
        },
      );
    }
  }

  getColumns() {
    return [
      {
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: '性别',
        key: 'sex',
        dataIndex: 'sex',
      },
      {
        title: '年龄',
        key: 'age',
        dataIndex: 'age',
      },
      {
        title: '身高',
        key: 'height',
        dataIndex: 'height',
      },
      {
        title: '体重',
        key: 'width',
        dataIndex: 'width',
      },
    ];
  }

  fetchData() {
    const list = [];
    list.length = 10;
    list.fill(0);

    this.setState(
      {
        loading: true,
      },
      () => {
        setTimeout(() => {
          const dataSource = list.map((t, index) => ({
            id: index + 1,
            name: `人${index + 1}`,
            sex: '男',
            age: 66,
            height: 180,
            width: 180,
          }));

          this.setState(
            {
              dataSource,
            },
            () => {
              setTimeout(() => {
                this.setState({
                  loading: false,
                });
              }, 200);
            },
          );
        }, 2000);
      },
    );
  }

  showLoading() {
    return this.state.loading;
  }

  handleTableChange = (pagination) => {
    this.setState(
      {
        pagination,
      },
      () => {
        this.fetchData();
      },
    );
  };

  renderInner() {
    return (
      <div style={{ position: 'relative' }}>
        <Table
          rowKey="id"
          columns={this.getColumns()}
          dataSource={this.state.dataSource}
          pagination={this.state.pagination}
          onChange={this.handleTableChange}
        />
      </div>
    );
  }
}

export default TableWrap;
