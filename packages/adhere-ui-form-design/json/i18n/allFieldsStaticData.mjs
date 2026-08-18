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

export const industrySelectOptions = {
  type: 'static',
  dataSource: [
    selectOption('互联网 / 软件', 'Internet / Software', 'it'),
    selectOption('金融', 'Finance', 'finance'),
    selectOption('制造', 'Manufacturing', 'manufacture'),
    selectOption('教育', 'Education', 'edu'),
    selectOption('医疗健康', 'Healthcare', 'health'),
    selectOption('零售电商', 'Retail / E-commerce', 'retail'),
    selectOption('其他', 'Other', 'other'),
  ],
};

export const companySizeOptions = {
  type: 'static',
  dataSource: [
    selectOption('1–50 人', '1–50 employees', 's'),
    selectOption('51–200 人', '51–200 employees', 'm'),
    selectOption('201–1000 人', '201–1000 employees', 'l'),
    selectOption('1000 人以上', '1000+ employees', 'xl'),
  ],
};

export const budgetOptions = {
  type: 'static',
  dataSource: [
    selectOption('10 万以内', 'Under 100k', 'lt10'),
    selectOption('10–50 万', '100k–500k', '10to50'),
    selectOption('50–100 万', '500k–1M', '50to100'),
    selectOption('100 万以上', 'Over 1M', 'gt100'),
    selectOption('暂不确定', 'Not sure yet', 'unknown'),
  ],
};

export const inquiryTypeOptions = {
  type: 'static',
  dataSource: [
    selectOption('产品咨询', 'Product inquiry', 'product'),
    selectOption('商务合作', 'Business partnership', 'partner'),
    selectOption('技术支持', 'Technical support', 'support'),
    selectOption('采购招标', 'Procurement', 'purchase'),
  ],
};

export const productInterestOptions = {
  type: 'static',
  dataSource: [
    selectOption('表单设计器', 'Form designer', 'form-design'),
    selectOption('低代码平台', 'Low-code platform', 'lowcode'),
    selectOption('数据中台', 'Data platform', 'data'),
    selectOption('移动端组件', 'Mobile components', 'mobile'),
  ],
};

export const genderRadioOptions = {
  type: 'static',
  dataSource: [
    selectOption('男', 'Male', 'male'),
    selectOption('女', 'Female', 'female'),
    selectOption('其他', 'Other', 'other'),
  ],
};

export const educationSelectOptions = {
  type: 'static',
  dataSource: [
    selectOption('高中及以下', 'High school or below', 'highschool'),
    selectOption('大专', 'College', 'college'),
    selectOption('本科', 'Bachelor', 'bachelor'),
    selectOption('硕士', 'Master', 'master'),
    selectOption('博士', 'Doctorate', 'phd'),
  ],
};

export const employeeTypeOptions = {
  type: 'static',
  dataSource: [
    selectOption('正式员工', 'Full-time', 'fulltime'),
    selectOption('实习生', 'Intern', 'intern'),
    selectOption('外包', 'Contractor', 'contractor'),
    selectOption('劳务派遣', 'Dispatched', 'dispatch'),
  ],
};

export const environmentRadioOptions = {
  type: 'static',
  dataSource: [
    selectOption('生产环境', 'Production', 'prod'),
    selectOption('预发环境', 'Staging', 'staging'),
    selectOption('测试环境', 'Test', 'test'),
  ],
};

export const severityRadioOptions = {
  type: 'static',
  dataSource: [
    selectOption('阻断', 'Blocker', 'blocker'),
    selectOption('严重', 'Critical', 'critical'),
    selectOption('一般', 'Major', 'major'),
    selectOption('轻微', 'Minor', 'minor'),
  ],
};

export const usageDurationOptions = {
  type: 'static',
  dataSource: [
    selectOption('不到 1 个月', 'Less than 1 month', 'lt1m'),
    selectOption('1–6 个月', '1–6 months', '1to6m'),
    selectOption('半年以上', 'Over 6 months', 'gt6m'),
  ],
};

export const userRoleRadioOptions = {
  type: 'static',
  dataSource: [
    selectOption('业务人员', 'Business user', 'biz'),
    selectOption('开发人员', 'Developer', 'dev'),
    selectOption('管理员', 'Administrator', 'admin'),
    selectOption('实施顾问', 'Consultant', 'consultant'),
  ],
};

export const productFeatureOptions = {
  type: 'static',
  dataSource: [
    selectOption('拖拽设计', 'Drag-and-drop design', 'dnd'),
    selectOption('数据源联动', 'Data source binding', 'datasource'),
    selectOption('校验规则', 'Validation rules', 'rules'),
    selectOption('移动端适配', 'Mobile layout', 'mobile'),
    selectOption('模板库', 'Template library', 'template'),
  ],
};

export const maritalStatusOptions = {
  type: 'static',
  dataSource: [
    selectOption('未婚', 'Single', 'single'),
    selectOption('已婚', 'Married', 'married'),
    selectOption('其他', 'Other', 'other'),
  ],
};

export const idTypeOptions = {
  type: 'static',
  dataSource: [
    selectOption('身份证', 'National ID', 'idcard'),
    selectOption('护照', 'Passport', 'passport'),
    selectOption('港澳通行证', 'HK/Macau permit', 'hkmo'),
  ],
};

export const bloodTypeOptions = {
  type: 'static',
  dataSource: [
    selectOption('A', 'A', 'a'),
    selectOption('B', 'B', 'b'),
    selectOption('AB', 'AB', 'ab'),
    selectOption('O', 'O', 'o'),
  ],
};

export const yesNoOptions = {
  type: 'static',
  dataSource: [
    selectOption('是', 'Yes', 'yes'),
    selectOption('否', 'No', 'no'),
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
