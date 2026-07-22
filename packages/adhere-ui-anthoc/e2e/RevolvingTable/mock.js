import Mock from 'mockjs';

const CITIES = ['北京', '上海', '广州', '深圳', '杭州', '成都', '武汉', '南京'];
const DEPARTMENTS = ['研发', '产品', '设计', '运营', '市场', '销售'];
const STATUSES = ['success', 'processing', 'warning', 'error'];

export const STATUS_COLOR_MAP = {
  success: '#52c41a',
  processing: '#1677ff',
  warning: '#faad14',
  error: '#ff4d4f',
};

export const STATUS_LABEL_MAP = {
  success: '正常',
  processing: '处理中',
  warning: '预警',
  error: '异常',
};

export function createColumns({ withEllipsis } = {}) {
  return [
    {
      dataIndex: 'name',
      key: 'name',
      title: '姓名',
      width: 120,
      align: 'center',
      tooltip: '员工姓名',
    },
    {
      dataIndex: 'department',
      key: 'department',
      title: '部门',
      width: 100,
      align: 'center',
    },
    {
      dataIndex: 'age',
      key: 'age',
      title: '年龄',
      width: 80,
      align: 'center',
    },
    {
      dataIndex: 'city',
      key: 'city',
      title: '城市',
      width: '15%',
      align: 'center',
    },
    {
      dataIndex: 'address',
      key: 'address',
      title: '地址',
      ellipsis: !!withEllipsis,
      tooltip: withEllipsis ? '超长地址将省略显示' : undefined,
    },
    {
      dataIndex: 'status',
      key: 'status',
      title: '状态',
      width: 100,
      align: 'center',
    },
  ];
}

export function createDataSource(length = 12) {
  return Array.from({ length }).map((_, index) => ({
    id: Mock.mock('@guid'),
    name: Mock.mock('@cname'),
    department: DEPARTMENTS[index % DEPARTMENTS.length],
    age: Mock.mock('@integer(22, 55)'),
    city: CITIES[index % CITIES.length],
    address:
      index % 3 === 0
        ? `${Mock.mock('@county(true)')} · ${Mock.mock('@csentence(12, 20)')}`
        : Mock.mock('@county(true)'),
    status: STATUSES[index % STATUSES.length],
    score: Mock.mock('@integer(60, 100)'),
  }));
}
