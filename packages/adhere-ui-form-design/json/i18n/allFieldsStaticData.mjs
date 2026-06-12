/** AllFields.json 静态数据源与 i18n 辅助 */

let sortCounter = 0;

export function i18n(zh, en, pt = en, ar = en) {
  return {
    selectValue: 'zh_CN',
    zh_CN: zh,
    en_US: en,
    pt_PT: pt,
    ar_EG: ar,
  };
}

export function sortId() {
  sortCounter += 1;
  return `fd-sort-allfields-${sortCounter}`;
}

export function selectOption(zh, en, value, pt = en, ar = en) {
  return {
    label: i18n(zh, en, pt, ar),
    value,
    __fdSortId: sortId(),
  };
}

export const departmentSelectOptions = {
  type: 'static',
  dataSource: [
    selectOption('研发中心', 'R&D Center', 'rd'),
    selectOption('产品部', 'Product', 'product'),
    selectOption('运营部', 'Operations', 'ops'),
    selectOption('人力资源部', 'Human Resources', 'hr'),
  ],
};

export const notificationRadioOptions = {
  type: 'static',
  dataSource: [
    selectOption('邮件', 'Email', 'email'),
    selectOption('短信', 'SMS', 'sms'),
    selectOption('站内信', 'In-app Message', 'inbox'),
  ],
};

export const skillCheckboxOptions = {
  type: 'static',
  dataSource: [
    selectOption('JavaScript', 'JavaScript', 'js'),
    selectOption('TypeScript', 'TypeScript', 'ts'),
    selectOption('React', 'React', 'react'),
    selectOption('Node.js', 'Node.js', 'node'),
  ],
};

export const viewSegmentedOptions = {
  type: 'static',
  dataSource: [
    selectOption('列表', 'List', 'list'),
    selectOption('卡片', 'Card', 'card'),
    selectOption('看板', 'Kanban', 'kanban'),
  ],
};

export const regionTreeData = [
  {
    value: 'zhejiang',
    label: '浙江省',
    children: [
      {
        value: 'hangzhou',
        label: '杭州市',
        children: [
          { value: 'xihu', label: '西湖区' },
          { value: 'binjiang', label: '滨江区' },
        ],
      },
      {
        value: 'ningbo',
        label: '宁波市',
        children: [{ value: 'haishu', label: '海曙区' }],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: '江苏省',
    children: [
      {
        value: 'nanjing',
        label: '南京市',
        children: [{ value: 'xuanwu', label: '玄武区' }],
      },
      {
        value: 'suzhou',
        label: '苏州市',
        children: [{ value: 'gusu', label: '姑苏区' }],
      },
    ],
  },
];

export const orgTreeData = [
  {
    value: 'hq',
    label: '总公司',
    children: [
      {
        value: 'rd',
        label: '研发中心',
        children: [
          { value: 'fe', label: '前端组' },
          { value: 'be', label: '后端组' },
          { value: 'qa', label: '测试组' },
        ],
      },
      {
        value: 'product',
        label: '产品部',
        children: [
          { value: 'pm', label: '产品经理组' },
          { value: 'ux', label: '设计组' },
        ],
      },
      { value: 'hr', label: '人力资源部' },
      { value: 'finance', label: '财务部' },
    ],
  },
];

export function treeOptionsJson(data) {
  return JSON.stringify(data, null, 2);
}

export function transferItem(key, titleZh, titleEn, descZh, descEn) {
  return {
    key,
    title: i18n(titleZh, titleEn),
    description: i18n(descZh, descEn),
    disabled: false,
    __fdSortId: sortId(),
  };
}

export const transferDataSource = {
  type: 'static',
  dataSource: [
    transferItem('admin', '系统管理员', 'System Admin', '拥有全部系统权限', 'Full system access'),
    transferItem('editor', '内容编辑', 'Content Editor', '可编辑与发布内容', 'Can edit and publish content'),
    transferItem('viewer', '只读访客', 'Read-only Viewer', '仅可查看数据', 'View data only'),
    transferItem('auditor', '审计员', 'Auditor', '可查看操作日志', 'Can view audit logs'),
  ],
};

export const tableDataRows = [
  { key: '1', name: '张三', age: 32, department: '研发中心' },
  { key: '2', name: '李四', age: 28, department: '产品部' },
  { key: '3', name: '王五', age: 35, department: '运营部' },
  { key: '4', name: '赵六', age: 29, department: '人力资源部' },
];

export const tableDataSourceJson = JSON.stringify(tableDataRows, null, 2);

export const DEFAULT_PAGING_SETTING = {
  defaultCurrent: 1,
  pageSize: 10,
  showSizeChanger: true,
  pageSizeOptions: [10, 20, 50, 100],
  showQuickJumper: false,
  simple: false,
  hideOnSinglePage: false,
  position: ['bottomRight'],
  size: 'default',
};

export function buildEditorTableColumnSetting(columnIdName, columnIdDept) {
  return [
    {
      id: columnIdName,
      title: i18n('姓名', 'Name'),
      field: 'name',
      widthMode: 'adaptive',
      align: 'left',
      editorType: 'input',
      editorSetting: {
        placeholder: i18n('姓名', 'Name'),
      },
    },
    {
      id: columnIdDept,
      title: i18n('部门', 'Department'),
      field: 'department',
      widthMode: 'adaptive',
      align: 'center',
      editorType: 'select',
      editorSetting: {
        selectOptions: departmentSelectOptions,
        placeholder: i18n('部门', 'Department'),
      },
    },
  ];
}

export function buildTableSelectionColumnSetting(columnIdName, columnIdAge, columnIdDept) {
  return [
    {
      id: columnIdName,
      title: i18n('姓名', 'Name'),
      dataIndex: 'name',
      visible: true,
      align: 'left',
      ellipsis: false,
    },
    {
      id: columnIdAge,
      title: i18n('年龄', 'Age'),
      dataIndex: 'age',
      visible: true,
      align: 'left',
      ellipsis: false,
    },
    {
      id: columnIdDept,
      title: i18n('部门', 'Department'),
      dataIndex: 'department',
      visible: true,
      align: 'left',
      ellipsis: false,
    },
  ];
}
