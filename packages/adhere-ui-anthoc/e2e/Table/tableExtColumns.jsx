const sexMap = {
  0: '女',
  1: '男',
};

/** 基础表格 / 虚拟滚动共用列配置 */
export const flatColumns = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
    width: {},
    fixed: 'left',
  },
  {
    title: '性别',
    dataIndex: 'sex',
    key: 'sex',
    width: {},
    render: (v) => sexMap[v] ?? '-',
    renderToString: (v) => sexMap[v] ?? '-',
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
    width: {},
    sorter: true,
  },
  {
    title: '身高',
    dataIndex: 'height',
    key: 'height',
    width: {},
    sorter: true,
  },
  {
    title: '体重',
    dataIndex: 'width',
    key: 'width',
    width: {},
    sorter: true,
  },
  {
    title: '出生年月',
    dataIndex: 'birthday',
    key: 'birthday',
    width: {},
  },
  {
    title: '籍贯',
    dataIndex: 'homeTown',
    key: 'homeTown',
    width: {},
  },
  {
    title: '现居住地',
    dataIndex: 'address',
    key: 'address',
    width: {},
  },
  {
    title: '部门',
    dataIndex: 'deptName',
    key: 'deptName',
    width: {},
  },
  {
    title: '邮箱',
    dataIndex: 'email',
    key: 'email',
    width: {},
  },
  {
    title: '手机号',
    dataIndex: 'phone',
    key: 'phone',
    width: {},
  },
  {
    title: '民族',
    dataIndex: 'nation',
    key: 'nation',
    width: {},
  },
  {
    title: '学历',
    dataIndex: 'education',
    key: 'education',
    width: {},
  },
  {
    title: '公司',
    dataIndex: 'company',
    key: 'company',
    width: {},
    ellipsis: true,
  },
  {
    title: '职位',
    dataIndex: 'position',
    key: 'position',
    width: {},
  },
  {
    title: '薪资',
    dataIndex: 'salary',
    key: 'salary',
    width: {},
    sorter: true,
  },
  {
    title: '备注',
    dataIndex: 'remark',
    key: 'remark',
    width: {},
    ellipsis: true,
  },
];
