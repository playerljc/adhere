/**
 * 生成设计器业务测试模板（AllFields.json 同结构）
 *
 * 用法：node packages/adhere-ui-form-design/json/scripts/generateTestTemplates.mjs
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

import {
  DEFAULT_PAGING_SETTING,
  bloodTypeOptions,
  buildEditorTableColumnSetting,
  buildTableSelectionColumnSetting,
  departmentSelectOptions,
  educationSelectOptions,
  employeeTypeOptions,
  genderRadioOptions,
  i18n,
  idTypeOptions,
  maritalStatusOptions,
  notificationRadioOptions,
  productFeatureOptions,
  skillCheckboxOptions,
  tableDataSourceJson,
  transferDataSource,
  usageDurationOptions,
  userRoleRadioOptions,
  yesNoOptions,
} from '../i18n/allFieldsStaticData.mjs';
import {
  createAlert,
  createCard,
  createCardGrid,
  createCollapse,
  createField,
  createFlex,
  createRoot,
  createSteps,
  createSubmit,
  createTableGrid,
  createTabs,
  createTreeField,
  requiredRule,
  uuid,
} from './templateKit.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const jsonDir = path.join(__dirname, '..');

function writeJson(fileName, designValue) {
  const outputPath = path.join(jsonDir, fileName);
  fs.writeFileSync(outputPath, `${JSON.stringify(designValue, null, 2)}\n`, 'utf8');
  return outputPath;
}

function buildLayoutKitchenSink() {
  const onboardingFields = [
    createField('ant-input', { name: 'name', labelZh: '姓名', labelEn: 'Name' }),
    createField('ant-radio-group', {
      name: 'gender',
      labelZh: '性别',
      labelEn: 'Gender',
      fieldProps: { selectOptions: genderRadioOptions, optionType: 'button' },
    }),
    createField('phone-with-area-code', { name: 'mobile', labelZh: '手机号', labelEn: 'Mobile' }),
    createField('ant-input', {
      name: 'email',
      labelZh: '企业邮箱',
      labelEn: 'Work email',
      fieldProps: { type: 'email' },
    }),
    createField('ant-select', {
      name: 'department',
      labelZh: '入职部门',
      labelEn: 'Department',
      fieldProps: { selectOptions: departmentSelectOptions },
    }),
    createField('ant-select', {
      name: 'employeeType',
      labelZh: '用工类型',
      labelEn: 'Employment type',
      fieldProps: { selectOptions: employeeTypeOptions },
    }),
    createField('ant-date-picker', { name: 'joinDate', labelZh: '入职日期', labelEn: 'Join date' }),
    createField('ant-switch', { name: 'probation', labelZh: '试用期员工', labelEn: 'On probation' }),
  ];

  const collapse = createCollapse([
    {
      labelZh: '紧急联系人',
      labelEn: 'Emergency contact',
      children: [
        createCardGrid('紧急联系人', 'Emergency contact', [
          createField('ant-input', { name: 'emergencyName', labelZh: '联系人姓名', labelEn: 'Contact name' }),
          createField('phone-with-area-code', {
            name: 'emergencyPhone',
            labelZh: '联系人电话',
            labelEn: 'Contact phone',
          }),
          createField('ant-select', {
            name: 'emergencyRelation',
            labelZh: '与本人关系',
            labelEn: 'Relationship',
            fieldProps: {
              selectOptions: {
                type: 'static',
                dataSource: [
                  { label: i18n('配偶', 'Spouse'), value: 'spouse' },
                  { label: i18n('父母', 'Parent'), value: 'parent' },
                  { label: i18n('子女', 'Child'), value: 'child' },
                  { label: i18n('其他', 'Other'), value: 'other' },
                ],
              },
            },
          }),
          createField('ant-input', { name: 'emergencyAddress', labelZh: '联系地址', labelEn: 'Address' }),
        ]),
      ],
    },
    {
      labelZh: '薪酬与社保',
      labelEn: 'Payroll and social security',
      children: [
        createCardGrid('薪酬与社保', 'Payroll and social security', [
          createField('ant-input', { name: 'bankName', labelZh: '开户银行', labelEn: 'Bank name' }),
          createField('ant-input', { name: 'bankAccount', labelZh: '工资卡号', labelEn: 'Payroll account' }),
          createField('ant-input', { name: 'socialSecurityNo', labelZh: '社保账号', labelEn: 'Social security no.' }),
          createField('ant-input', { name: 'housingFundNo', labelZh: '公积金账号', labelEn: 'Housing fund no.' }),
          createField('ant-checkbox-group', {
            name: 'benefits',
            labelZh: '福利项',
            labelEn: 'Benefits',
            colSpan: 2,
            fieldProps: {
              selectOptions: {
                type: 'static',
                dataSource: [
                  { label: i18n('补充医疗', 'Supplementary medical'), value: 'medical' },
                  { label: i18n('年度体检', 'Annual checkup'), value: 'checkup' },
                  { label: i18n('交通补贴', 'Transport allowance'), value: 'transport' },
                  { label: i18n('餐补', 'Meal allowance'), value: 'meal' },
                ],
              },
            },
          }),
        ]),
      ],
    },
    {
      labelZh: '岗位编制',
      labelEn: 'Headcount',
      children: [
        createFlex(
          [
            createCardGrid('编制信息', 'Headcount', [
              createField('ant-input', {
                name: 'employeeNo',
                labelZh: '工号',
                labelEn: 'Employee ID',
                fieldProps: { readOnly: true },
                formItemProps: { initialValue: '待系统生成' },
              }),
              createTreeField('ant-tree-select', {
                name: 'orgNode',
                labelZh: '组织节点',
                labelEn: 'Org node',
              }),
            ]),
            createCardGrid('职级信息', 'Job grade', [
              createField('ant-input', { name: 'jobTitle', labelZh: '岗位名称', labelEn: 'Job title' }),
              createField('ant-input-number', {
                name: 'grade',
                labelZh: '职级',
                labelEn: 'Grade',
                fieldProps: { min: 1, max: 20 },
              }),
            ]),
          ],
          { fieldProps: { direction: 'horizontal', gap: 12 } },
        ),
      ],
    },
  ]);

  const steps = createSteps([
    {
      labelZh: '材料上传',
      labelEn: 'Documents',
      children: [
        createCardGrid('入职材料', 'Onboarding documents', [
          createField('ant-image-upload', {
            name: 'idPhoto',
            labelZh: '证件照',
            labelEn: 'ID photo',
            colSpan: 2,
            fieldProps: { uploadDataSource: { type: 'dynamic' } },
          }),
          createField('ant-file-upload', {
            name: 'resume',
            labelZh: '简历 / 学历证明',
            labelEn: 'Resume / diploma',
            colSpan: 2,
            fieldProps: { uploadDataSource: { type: 'dynamic' } },
          }),
        ]),
      ],
    },
    {
      labelZh: '合同确认',
      labelEn: 'Contract',
      children: [
        createCardGrid('劳动合同', 'Labor contract', [
          createField('ant-date-dange-picker', {
            name: 'contractPeriod',
            labelZh: '合同期限',
            labelEn: 'Contract period',
          }),
          createField('ant-input-number', {
            name: 'probationMonths',
            labelZh: '试用期(月)',
            labelEn: 'Probation (months)',
            fieldProps: { min: 0, max: 6 },
          }),
          createTreeField('ant-cascader', {
            name: 'workLocation',
            labelZh: '工作地点',
            labelEn: 'Work location',
          }),
          createField('ant-switch', { name: 'remoteAllowed', labelZh: '允许远程办公', labelEn: 'Remote allowed' }),
        ]),
      ],
    },
    {
      labelZh: '签署提交',
      labelEn: 'Sign and submit',
      children: [
        createCard('入职承诺', 'Onboarding pledge', [
          createTableGrid(
            [
              createField('ant-checkbox', {
                name: 'agreeHandbook',
                labelZh: '已阅读员工手册',
                labelEn: 'I have read the employee handbook',
                formItemProps: { valuePropName: 'checked' },
              }),
              createField('ant-signature-pad', {
                name: 'signature',
                labelZh: '本人签名',
                labelEn: 'Signature',
                colSpan: 2,
              }),
              createField('ant-textarea', {
                name: 'remarks',
                labelZh: '补充说明',
                labelEn: 'Remarks',
                colSpan: 2,
                fieldProps: { autoSize: true },
              }),
              createSubmit(i18n('提交入职申请', 'Submit onboarding')),
            ],
            2,
          ),
        ]),
      ],
    },
  ]);

  return createRoot([
    createTabs([
      {
        labelZh: '入职登记',
        labelEn: 'Onboarding',
        children: [createCardGrid('员工基本信息', 'Employee profile', onboardingFields)],
      },
      {
        labelZh: '人事档案',
        labelEn: 'HR file',
        children: [collapse],
      },
      {
        labelZh: '入职办理',
        labelEn: 'Process',
        children: [steps],
      },
    ]),
  ]);
}

function buildValidationShowcase() {
  return createRoot([
    createCardGrid('入职信息核验', 'Onboarding verification', [
      createAlert(
        i18n('核验说明', 'Verification notes'),
        i18n(
          '标 * 为必填；工号只读；组织名称由主数据带出不可改；隐藏字段用于携带核验令牌。',
          'Asterisks are required. Employee ID is read-only. Org name comes from master data. A hidden token is carried for verification.',
        ),
      ),
      createField('ant-input', {
        name: 'name',
        labelZh: '姓名',
        labelEn: 'Name',
        formItemProps: {
          require: true,
          rules: requiredRule('请输入姓名', 'Please enter name'),
        },
      }),
      createField('ant-input', {
        name: 'idNumber',
        labelZh: '证件号码',
        labelEn: 'ID number',
        formItemProps: {
          require: true,
          rules: requiredRule('请输入证件号码', 'Please enter ID number'),
        },
      }),
      createField('ant-input', {
        name: 'email',
        labelZh: '企业邮箱',
        labelEn: 'Work email',
        fieldProps: { type: 'email' },
        formItemProps: {
          require: true,
          rules: requiredRule('请输入邮箱', 'Please enter email'),
        },
      }),
      createField('phone-with-area-code', {
        name: 'mobile',
        labelZh: '手机号',
        labelEn: 'Mobile',
        formItemProps: {
          require: true,
          rules: requiredRule('请输入手机号', 'Please enter mobile number'),
        },
      }),
      createField('ant-select', {
        name: 'department',
        labelZh: '入职部门',
        labelEn: 'Department',
        fieldProps: { selectOptions: departmentSelectOptions },
        formItemProps: {
          require: true,
          rules: requiredRule('请选择部门', 'Please select department'),
        },
      }),
      createField('ant-input-number', {
        name: 'probationSalary',
        labelZh: '试用期薪资',
        labelEn: 'Probation salary',
        fieldProps: { min: 3000, max: 80000 },
        formItemProps: {
          require: true,
          initialValue: 12000,
          rules: requiredRule('请输入试用期薪资', 'Please enter probation salary'),
        },
      }),
      createField('ant-input', {
        name: 'verifyToken',
        labelZh: '核验令牌',
        labelEn: 'Verify token',
        formItemProps: {
          hidden: true,
          initialValue: 'hidden-token',
        },
      }),
      createField('ant-input', {
        name: 'employeeNo',
        labelZh: '工号（只读）',
        labelEn: 'Employee ID (read-only)',
        fieldProps: { readOnly: true },
        formItemProps: { initialValue: 'EMP-10086' },
      }),
      createField('ant-input', {
        name: 'orgName',
        labelZh: '组织名称（主数据）',
        labelEn: 'Org name (master data)',
        fieldProps: { disabled: true },
        formItemProps: { initialValue: '杭州研发中心' },
      }),
      createField('ant-switch', {
        name: 'probation',
        labelZh: '处于试用期',
        labelEn: 'On probation',
        formItemProps: { initialValue: true, valuePropName: 'checked' },
      }),
      createField('ant-date-dange-picker', {
        name: 'contractPeriod',
        labelZh: '合同期限',
        labelEn: 'Contract period',
        colSpan: 2,
        formItemProps: {
          require: true,
          rules: requiredRule('请选择合同期限', 'Please select contract period'),
        },
      }),
      createField('ant-textarea', {
        name: 'hrRemark',
        labelZh: 'HR 核验备注',
        labelEn: 'HR verification notes',
        colSpan: 2,
        fieldProps: { autoSize: true, showCount: true },
        formItemProps: {
          require: true,
          rules: requiredRule('请填写核验备注', 'Please enter verification notes'),
        },
      }),
    ]),
  ]);
}

function fieldByType(type, spec) {
  if (type === 'ant-select' && !spec.fieldProps) {
    spec.fieldProps = { selectOptions: departmentSelectOptions };
  }
  return createField(type, spec);
}

function buildManyFields() {
  const groups = [
    {
      titleZh: '基本信息',
      titleEn: 'Profile',
      fields: [
        ['ant-input', { name: 'fullName', labelZh: '姓名', labelEn: 'Full name' }],
        ['ant-radio-group', { name: 'gender', labelZh: '性别', labelEn: 'Gender', fieldProps: { selectOptions: genderRadioOptions, optionType: 'button' } }],
        ['ant-date-picker', { name: 'birthday', labelZh: '出生日期', labelEn: 'Date of birth', fieldProps: { isBirthday: true } }],
        ['ant-select', { name: 'idType', labelZh: '证件类型', labelEn: 'ID type', fieldProps: { selectOptions: idTypeOptions } }],
        ['ant-input', { name: 'idNumber', labelZh: '证件号码', labelEn: 'ID number' }],
        ['ant-select', { name: 'education', labelZh: '最高学历', labelEn: 'Education', fieldProps: { selectOptions: educationSelectOptions } }],
        ['ant-select', { name: 'marital', labelZh: '婚姻状况', labelEn: 'Marital status', fieldProps: { selectOptions: maritalStatusOptions } }],
        ['ant-select', { name: 'bloodType', labelZh: '血型', labelEn: 'Blood type', fieldProps: { selectOptions: bloodTypeOptions } }],
        ['ant-cascader', { name: 'nativePlace', labelZh: '籍贯', labelEn: 'Hometown' }],
        ['ant-input-number', { name: 'height', labelZh: '身高(cm)', labelEn: 'Height (cm)', fieldProps: { min: 100, max: 220 } }],
        ['ant-switch', { name: 'hasDisability', labelZh: '残疾证', labelEn: 'Disability certificate' }],
        ['ant-input', { name: 'ethnicity', labelZh: '民族', labelEn: 'Ethnicity' }],
      ],
    },
    {
      titleZh: '联系方式',
      titleEn: 'Contact',
      fields: [
        ['phone-with-area-code', { name: 'mobile', labelZh: '手机号', labelEn: 'Mobile' }],
        ['ant-input', { name: 'email', labelZh: '个人邮箱', labelEn: 'Personal email', fieldProps: { type: 'email' } }],
        ['ant-input', { name: 'workEmail', labelZh: '企业邮箱', labelEn: 'Work email', fieldProps: { type: 'email' } }],
        ['ant-input', { name: 'wechat', labelZh: '微信号', labelEn: 'WeChat' }],
        ['ant-input', { name: 'officePhone', labelZh: '办公电话', labelEn: 'Office phone' }],
        ['ant-input', { name: 'emergencyName', labelZh: '紧急联系人', labelEn: 'Emergency contact' }],
        ['phone-with-area-code', { name: 'emergencyPhone', labelZh: '紧急联系电话', labelEn: 'Emergency phone' }],
        ['ant-input', { name: 'currentAddress', labelZh: '现居地址', labelEn: 'Current address' }],
        ['ant-input', { name: 'hukouAddress', labelZh: '户籍地址', labelEn: 'Hukou address' }],
        ['ant-input', { name: 'zipCode', labelZh: '邮编', labelEn: 'Zip code' }],
        ['ant-time-range-picker', { name: 'contactWindow', labelZh: '方便联系时段', labelEn: 'Contact window' }],
        ['ant-switch', { name: 'smsNotify', labelZh: '接收短信通知', labelEn: 'SMS notifications' }],
      ],
    },
    {
      titleZh: '教育经历',
      titleEn: 'Education',
      fields: [
        ['ant-select', { name: 'highestDegree', labelZh: '最高学位', labelEn: 'Highest degree', fieldProps: { selectOptions: educationSelectOptions } }],
        ['ant-input', { name: 'school', labelZh: '毕业院校', labelEn: 'School' }],
        ['ant-input', { name: 'major', labelZh: '专业', labelEn: 'Major' }],
        ['ant-date-picker', { name: 'enrollDate', labelZh: '入学日期', labelEn: 'Enrollment date' }],
        ['ant-date-picker', { name: 'graduateDate', labelZh: '毕业日期', labelEn: 'Graduation date' }],
        ['ant-input-number', { name: 'years', labelZh: '学制(年)', labelEn: 'Years', fieldProps: { min: 1, max: 8 } }],
        ['ant-switch', { name: 'fullTime', labelZh: '全日制', labelEn: 'Full-time' }],
        ['ant-input', { name: 'advisor', labelZh: '导师', labelEn: 'Advisor' }],
        ['ant-input', { name: 'gpa', labelZh: 'GPA / 均分', labelEn: 'GPA' }],
        ['ant-input', { name: 'diplomaNo', labelZh: '学历证书编号', labelEn: 'Diploma no.' }],
        ['ant-file-upload', { name: 'diplomaFile', labelZh: '学历扫描件', labelEn: 'Diploma scan', colSpan: 2, fieldProps: { uploadDataSource: { type: 'dynamic' } } }],
        ['ant-textarea', { name: 'eduRemark', labelZh: '教育说明', labelEn: 'Education notes', colSpan: 2, fieldProps: { autoSize: true } }],
      ],
    },
    {
      titleZh: '工作经历',
      titleEn: 'Work history',
      fields: [
        ['ant-input', { name: 'lastCompany', labelZh: '最近任职公司', labelEn: 'Last company' }],
        ['ant-input', { name: 'lastTitle', labelZh: '职务', labelEn: 'Title' }],
        ['ant-select', { name: 'lastDept', labelZh: '所在部门', labelEn: 'Department' }],
        ['ant-date-dange-picker', { name: 'lastPeriod', labelZh: '在职期间', labelEn: 'Employment period' }],
        ['ant-input-number', { name: 'lastSalary', labelZh: '税前月薪', labelEn: 'Monthly salary', fieldProps: { min: 0 } }],
        ['ant-input', { name: 'supervisor', labelZh: '直接上级', labelEn: 'Supervisor' }],
        ['ant-input', { name: 'reason', labelZh: '离职原因', labelEn: 'Leave reason' }],
        ['ant-switch', { name: 'canContactReferee', labelZh: '可联系证明人', labelEn: 'Referee contactable' }],
        ['ant-input', { name: 'refereeName', labelZh: '证明人姓名', labelEn: 'Referee name' }],
        ['phone-with-area-code', { name: 'refereePhone', labelZh: '证明人电话', labelEn: 'Referee phone' }],
        ['ant-textarea', { name: 'jobDesc', labelZh: '工作职责', labelEn: 'Responsibilities', colSpan: 2, fieldProps: { autoSize: true } }],
        ['ant-textarea', { name: 'achievements', labelZh: '主要业绩', labelEn: 'Achievements', colSpan: 2, fieldProps: { autoSize: true } }],
      ],
    },
    {
      titleZh: '项目经验',
      titleEn: 'Projects',
      fields: [
        ['ant-input', { name: 'projectName', labelZh: '项目名称', labelEn: 'Project name' }],
        ['ant-input', { name: 'projectRole', labelZh: '担任角色', labelEn: 'Role' }],
        ['ant-date-dange-picker', { name: 'projectPeriod', labelZh: '项目周期', labelEn: 'Period' }],
        ['ant-input-number', { name: 'teamSize', labelZh: '团队规模', labelEn: 'Team size', fieldProps: { min: 1 } }],
        ['ant-select', { name: 'projectDept', labelZh: '所属条线', labelEn: 'Line of business' }],
        ['ant-checkbox-group', { name: 'techStack', labelZh: '技术栈', labelEn: 'Tech stack', colSpan: 2, fieldProps: { selectOptions: skillCheckboxOptions } }],
        ['ant-rate', { name: 'projectImpact', labelZh: '项目重要度', labelEn: 'Impact' }],
        ['ant-slider', { name: 'contribution', labelZh: '个人贡献占比', labelEn: 'Contribution %', fieldProps: { min: 0, max: 100 } }],
        ['ant-switch', { name: 'isLead', labelZh: '是否负责人', labelEn: 'Project lead' }],
        ['ant-input', { name: 'customer', labelZh: '客户 / 业务方', labelEn: 'Customer' }],
        ['ant-textarea', { name: 'projectSummary', labelZh: '项目概述', labelEn: 'Summary', colSpan: 2, fieldProps: { autoSize: true } }],
        ['ant-textarea', { name: 'projectResult', labelZh: '项目成果', labelEn: 'Outcomes', colSpan: 2, fieldProps: { autoSize: true } }],
      ],
    },
    {
      titleZh: '技能证书',
      titleEn: 'Skills & certificates',
      fields: [
        ['ant-checkbox-group', { name: 'skills', labelZh: '专业技能', labelEn: 'Skills', colSpan: 2, fieldProps: { selectOptions: skillCheckboxOptions } }],
        ['ant-checkbox-group', { name: 'productSkills', labelZh: '产品能力', labelEn: 'Product skills', colSpan: 2, fieldProps: { selectOptions: productFeatureOptions } }],
        ['ant-input', { name: 'certName', labelZh: '证书名称', labelEn: 'Certificate' }],
        ['ant-input', { name: 'certNo', labelZh: '证书编号', labelEn: 'Certificate no.' }],
        ['ant-date-picker', { name: 'certDate', labelZh: '获证日期', labelEn: 'Issued on' }],
        ['ant-date-picker', { name: 'certExpire', labelZh: '有效期至', labelEn: 'Expires on' }],
        ['ant-select', { name: 'language', labelZh: '外语语种', labelEn: 'Language', fieldProps: { selectOptions: { type: 'static', dataSource: [{ label: i18n('英语', 'English'), value: 'en' }, { label: i18n('日语', 'Japanese'), value: 'ja' }, { label: i18n('其他', 'Other'), value: 'other' }] } } }],
        ['ant-rate', { name: 'languageLevel', labelZh: '口语水平', labelEn: 'Speaking level' }],
        ['ant-input', { name: 'langScore', labelZh: '语言成绩', labelEn: 'Test score' }],
        ['ant-file-upload', { name: 'certFiles', labelZh: '证书附件', labelEn: 'Certificate files', colSpan: 2, fieldProps: { uploadDataSource: { type: 'dynamic' } } }],
        ['ant-switch', { name: 'canTravel', labelZh: '接受出差', labelEn: 'Willing to travel' }],
        ['ant-switch', { name: 'canRelocate', labelZh: '接受调动', labelEn: 'Willing to relocate' }],
      ],
    },
    {
      titleZh: '家庭成员',
      titleEn: 'Family',
      fields: [
        ['ant-input', { name: 'spouseName', labelZh: '配偶姓名', labelEn: 'Spouse name' }],
        ['ant-input', { name: 'spouseCompany', labelZh: '配偶工作单位', labelEn: 'Spouse employer' }],
        ['phone-with-area-code', { name: 'spousePhone', labelZh: '配偶电话', labelEn: 'Spouse phone' }],
        ['ant-input-number', { name: 'childrenCount', labelZh: '子女人数', labelEn: 'Number of children', fieldProps: { min: 0, max: 10 } }],
        ['ant-input', { name: 'childName', labelZh: '子女姓名', labelEn: 'Child name' }],
        ['ant-date-picker', { name: 'childBirthday', labelZh: '子女出生日期', labelEn: 'Child birthday' }],
        ['ant-input', { name: 'fatherName', labelZh: '父亲姓名', labelEn: 'Father name' }],
        ['ant-input', { name: 'motherName', labelZh: '母亲姓名', labelEn: 'Mother name' }],
        ['ant-input', { name: 'familyAddress', labelZh: '家庭住址', labelEn: 'Family address' }],
        ['ant-switch', { name: 'needDorm', labelZh: '需要宿舍', labelEn: 'Need dormitory' }],
        ['ant-textarea', { name: 'familyRemark', labelZh: '家庭情况说明', labelEn: 'Family notes', colSpan: 2, fieldProps: { autoSize: true } }],
        ['ant-checkbox', { name: 'emergencySameFamily', labelZh: '紧急联系人为家庭成员', labelEn: 'Emergency contact is family', formItemProps: { valuePropName: 'checked' } }],
      ],
    },
    {
      titleZh: '其他补充',
      titleEn: 'Others',
      fields: [
        ['ant-select', { name: 'expectedDept', labelZh: '期望部门', labelEn: 'Preferred department' }],
        ['ant-input-number', { name: 'expectedSalary', labelZh: '期望薪资', labelEn: 'Expected salary', fieldProps: { min: 0 } }],
        ['ant-date-picker', { name: 'availableDate', labelZh: '可到岗日期', labelEn: 'Available date' }],
        ['ant-cascader', { name: 'preferredCity', labelZh: '期望工作城市', labelEn: 'Preferred city' }],
        ['ant-segmented', { name: 'workMode', labelZh: '办公方式', labelEn: 'Work mode', fieldProps: { selectOptions: { type: 'static', dataSource: [{ label: i18n('现场', 'On-site'), value: 'onsite' }, { label: i18n('混合', 'Hybrid'), value: 'hybrid' }, { label: i18n('远程', 'Remote'), value: 'remote' }] } } }],
        ['ant-radio-group', { name: 'source', labelZh: '招聘渠道', labelEn: 'Source', fieldProps: { selectOptions: { type: 'static', dataSource: [{ label: i18n('内推', 'Referral'), value: 'referral' }, { label: i18n('官网', 'Career site'), value: 'site' }, { label: i18n('猎头', 'Headhunter'), value: 'hunter' }] } } }],
        ['ant-input', { name: 'referrer', labelZh: '内推人', labelEn: 'Referrer' }],
        ['ant-switch', { name: 'hasConflict', labelZh: '存在竞业限制', labelEn: 'Non-compete' }],
        ['ant-image-upload', { name: 'avatar', labelZh: '证件照', labelEn: 'Photo', colSpan: 2, fieldProps: { uploadDataSource: { type: 'dynamic' } } }],
        ['ant-rich-editor', { name: 'selfIntro', labelZh: '自我评价', labelEn: 'Self introduction', colSpan: 2, fieldProps: { placeholder: i18n('请简要介绍自己', 'Briefly introduce yourself') } }],
        ['ant-textarea', { name: 'otherRemark', labelZh: '其他需要说明的事项', labelEn: 'Other notes', colSpan: 2, fieldProps: { autoSize: true } }],
        ['ant-checkbox', { name: 'infoAccurate', labelZh: '本人承诺以上信息真实有效', labelEn: 'I confirm the information is accurate', formItemProps: { valuePropName: 'checked' } }],
      ],
    },
  ];

  const cards = groups.map((group) => {
    const fields = group.fields.map(([type, spec]) => {
      if (type === 'ant-cascader') {
        return createTreeField(type, spec);
      }
      return fieldByType(type, spec);
    });
    return createCardGrid(group.titleZh, group.titleEn, fields);
  });

  return createRoot(cards);
}

function buildWidgetGallery() {
  const editorColName = uuid();
  const editorColDept = uuid();
  const tableColName = uuid();
  const tableColAge = uuid();
  const tableColDept = uuid();

  return createRoot([
    createCard('申请须知', 'Application notes', [
      createTableGrid(
        [
          createAlert(
            i18n('项目协作空间申请', 'Project workspace request'),
            i18n(
              '用于开通代码仓库、文档空间与成员权限。提交后需部门负责人会签。',
              'Opens the repo, docs space, and member permissions. Department head approval is required.',
            ),
          ),
          createField('ant-text', {
            fieldProps: {
              children: i18n('请先确认项目已完成立项评审。', 'Confirm the project has passed kickoff review.'),
              type: 'secondary',
            },
          }),
          createField('ant-divider', {
            fieldProps: { children: i18n('基本信息', 'Basic info') },
          }),
          createField('ant-link', {
            fieldProps: {
              children: i18n('查看研发安全规范', 'View R&D security policy'),
              href: 'https://ant.design',
            },
          }),
          createField('ant-button', {
            fieldProps: { children: i18n('保存草稿', 'Save draft'), type: 'default' },
          }),
          createSubmit(i18n('提交申请', 'Submit request')),
        ],
        2,
      ),
    ]),
    createCardGrid('权限与成员', 'Access and members', [
      createTreeField('ant-cascader', { name: 'region', labelZh: '所属地区', labelEn: 'Region' }),
      createTreeField('ant-tree-select', { name: 'owner', labelZh: '项目负责人', labelEn: 'Project owner' }),
      createTreeField('ant-tree-selection', {
        name: 'menuPermissions',
        labelZh: '功能权限',
        labelEn: 'Feature permissions',
        colSpan: 2,
      }),
      createField('ant-transfer', {
        name: 'roles',
        labelZh: '空间角色',
        labelEn: 'Workspace roles',
        colSpan: 2,
        fieldProps: { transferOptions: transferDataSource },
      }),
      createField('ant-table-selection', {
        name: 'members',
        labelZh: '初始成员',
        labelEn: 'Initial members',
        colSpan: 2,
        fieldProps: {
          searchPlaceholder: i18n('搜索同事', 'Search colleagues'),
          paginationSetting: { ...DEFAULT_PAGING_SETTING },
          columnSetting: buildTableSelectionColumnSetting(tableColName, tableColAge, tableColDept),
          tableOptions: {
            type: 'static',
            dataSourceJson: tableDataSourceJson,
          },
        },
      }),
    ]),
    createCardGrid('空间配置', 'Workspace setup', [
      createField('ant-file-upload', {
        name: 'proposal',
        labelZh: '立项材料',
        labelEn: 'Proposal files',
        colSpan: 2,
        fieldProps: { uploadDataSource: { type: 'dynamic' } },
      }),
      createField('ant-image-upload', {
        name: 'logo',
        labelZh: '空间 Logo',
        labelEn: 'Workspace logo',
        colSpan: 2,
        fieldProps: { uploadDataSource: { type: 'dynamic' } },
      }),
      createField('ant-qrcode', {
        name: 'inviteQr',
        labelZh: '邀请二维码',
        labelEn: 'Invite QR',
        fieldProps: { value: 'https://example.com/workspace/invite' },
        formItemProps: { initialValue: 'https://example.com/workspace/invite' },
      }),
      createField('ant-color-picker', { name: 'themeColor', labelZh: '主题色', labelEn: 'Theme color' }),
      createField('ant-signature-pad', {
        name: 'ownerSign',
        labelZh: '负责人签署',
        labelEn: 'Owner signature',
        colSpan: 2,
      }),
      createField('ant-rich-editor', {
        name: 'scope',
        labelZh: '项目范围说明',
        labelEn: 'Project scope',
        colSpan: 2,
        fieldProps: { placeholder: i18n('请描述项目背景、范围与里程碑', 'Describe background, scope, and milestones') },
      }),
      createField('ant-editor-table', {
        name: 'milestones',
        labelZh: '里程碑计划',
        labelEn: 'Milestone plan',
        colSpan: 2,
        fieldProps: {
          columnSetting: buildEditorTableColumnSetting(editorColName, editorColDept),
        },
      }),
    ]),
    createCardGrid('身份核验', 'Identity verification', [
      createField('phone-with-area-code', { name: 'ownerMobile', labelZh: '负责人手机号', labelEn: 'Owner mobile' }),
      createField('send-sms', { name: 'smsCode', labelZh: '短信验证码', labelEn: 'SMS code' }),
      createField('image-captcha', {
        name: 'captcha',
        labelZh: '图形验证码',
        labelEn: 'Captcha',
        colSpan: 2,
      }),
    ]),
  ]);
}

function buildSurveyForm() {
  return createRoot([
    createCardGrid('答题人信息', 'Respondent', [
      createAlert(
        i18n('产品体验问卷', 'Product experience survey'),
        i18n('大约需要 3 分钟。结果仅用于改进产品，不会用于营销推销。', 'Takes about 3 minutes. Results are used for product improvement only.'),
      ),
      createField('ant-radio-group', {
        name: 'role',
        labelZh: '您的角色',
        labelEn: 'Your role',
        fieldProps: { selectOptions: userRoleRadioOptions },
      }),
      createField('ant-segmented', {
        name: 'tenure',
        labelZh: '使用时长',
        labelEn: 'Usage duration',
        fieldProps: { selectOptions: usageDurationOptions },
      }),
      createField('ant-select', {
        name: 'department',
        labelZh: '所在部门',
        labelEn: 'Department',
        fieldProps: { selectOptions: departmentSelectOptions },
      }),
      createField('ant-radio-group', {
        name: 'firstUse',
        labelZh: '是否首次使用本产品',
        labelEn: 'First-time user',
        fieldProps: { selectOptions: yesNoOptions, optionType: 'button' },
      }),
    ]),
    createCardGrid('体验评价', 'Experience', [
      createField('ant-rate', { name: 'nps', labelZh: '整体推荐意愿', labelEn: 'Likelihood to recommend' }),
      createField('ant-slider', {
        name: 'easeOfUse',
        labelZh: '易用程度',
        labelEn: 'Ease of use',
        fieldProps: { min: 0, max: 100 },
      }),
      createField('ant-rate', { name: 'stability', labelZh: '稳定性', labelEn: 'Stability' }),
      createField('ant-rate', { name: 'performance', labelZh: '性能体验', labelEn: 'Performance' }),
      createField('ant-checkbox-group', {
        name: 'lovedFeatures',
        labelZh: '最有价值的能力',
        labelEn: 'Most valuable features',
        colSpan: 2,
        fieldProps: { selectOptions: productFeatureOptions },
      }),
      createField('ant-radio-group', {
        name: 'notifyChannel',
        labelZh: '希望如何接收更新',
        labelEn: 'Preferred update channel',
        fieldProps: { selectOptions: notificationRadioOptions },
      }),
      createField('ant-switch', { name: 'followUp', labelZh: '愿意接受回访', labelEn: 'Accept follow-up interview' }),
      createField('ant-textarea', {
        name: 'suggestion',
        labelZh: '最想改进的一点',
        labelEn: 'Top improvement',
        colSpan: 2,
        fieldProps: { autoSize: true, showCount: true },
      }),
      createSubmit(i18n('提交问卷', 'Submit survey'), { block: true }),
    ]),
  ]);
}

function main() {
  const templates = [
    ['LayoutKitchenSink.json', buildLayoutKitchenSink()],
    ['ValidationShowcase.json', buildValidationShowcase()],
    ['ManyFields.json', buildManyFields()],
    ['WidgetGallery.json', buildWidgetGallery()],
    ['SurveyForm.json', buildSurveyForm()],
  ];

  for (const [fileName, designValue] of templates) {
    console.log(`Generated ${writeJson(fileName, designValue)}`);
  }
}

main();
