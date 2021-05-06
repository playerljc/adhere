import React from 'react';
import { TableList } from '@baifendian/adhere';

const requestData = (params) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const page = params && params.page || '';
      const response = {
        code: 200,
        data: {
          list: [
            { id: 1, name: '小明' + page, age: 48, sex: 1 },
            { id: 2, name: '小红' + page, age: 27, sex: 2 },
            { id: 3, name: '小李' + page, age: 22, sex: 2 },
            { id: 4, name: '小张' + page, age: 30, sex: 1 },
            { id: 5, name: '小秦' + page, age: 50, sex: 2 },
            { id: 6, name: '小王' + page, age: 50, sex: 1 },
            { id: 7, name: '小孙' + page, age: 30, sex: 2 },
            { id: 9, name: '小吴' + page, age: 32, sex: 2 },
            { id: 10, name: '小郑' + page, age: 21, sex: 2 },
            { id: 11, name: '小红' + page, age: 14, sex: 1 },
          ],
          total: 20,
        },
        message: '',
      }
      resolve(response);
    }, 2000)
  })
}

class Util {
  constructor(ins) {
    console.log(ins);
    this.ins = ins;
    console.log(this.ins);
  }

  add() {
    console.log(this.ins.props);
  }
}
class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: []
    }
  }

  fetchData = (params) => {
    console.log('搜索参数', params);
    return requestData(params).then(res => {
      if (res.code === 200) {
        this.setState({ tableData: res.data });
      }
    })
  }

  tableColumns = ([
    { title: '姓名', dataIndex: 'name', key: 'name', ellipsis: true },
    { title: '年龄', dataIndex: 'age', key: 'age', ellipsis: true },
    { title: '性别', dataIndex: 'sex', key: 'sex', ellipsis: true, valueType: 'map', map: [{ value: 1, label: '男'}, { value: 2, label: '女'}] },
  ]);

  render() {
    const { tableData } = this.state;
    return (
      <TableList
        mode="table"
        search={{
          columns: [
            { label: '姓名', type: 'input', name: 'name' },
            { label: '年龄', type: 'number', name: 'age' },
          ],
        }}
        toolbar={{
          title: '功能全的表格演示',
          total: true,
          selectAll: true,
          setting: true,
          reload: true,
          search: [
            { type: 'search', name: 'kw' }
          ]
        }}
        showNumber
        table={{
          columns: this.tableColumns,
          dataSource: tableData && tableData.list,
          pagination: { total: tableData && tableData.total },
          rowSelection: true,
        }}
        ref={c => this.tableListRef = c}
        request={this.fetchData}
      />
    );
  }
}

export default Demo;
