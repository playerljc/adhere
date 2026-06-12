/**
 * 生成 AllFields.json — antd 全部表单控件示例
 *
 * 用法：node packages/adhere-ui-form-design/json/scripts/generateAllFields.mjs
 */
import crypto from 'crypto';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

import {
  DEFAULT_PAGING_SETTING,
  buildEditorTableColumnSetting,
  buildTableSelectionColumnSetting,
  departmentSelectOptions,
  i18n,
  notificationRadioOptions,
  orgTreeData,
  regionTreeData,
  skillCheckboxOptions,
  tableDataSourceJson,
  transferDataSource,
  treeOptionsJson,
  viewSegmentedOptions,
} from '../i18n/allFieldsStaticData.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outputPath = path.join(__dirname, '../AllFields.json');

function uuid() {
  return crypto.randomUUID();
}

function randomSuffix(length = 8) {
  const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i += 1) {
    result += chars[Math.floor(Math.random() * chars.length)];
  }
  return result;
}

function fieldName(type) {
  const base = type.replace(/^ant-/, 'ant_').replace(/-/g, '_');
  return `${base}_${randomSuffix()}`;
}

function deepMerge(target, ...sources) {
  const result = { ...target };
  for (const source of sources) {
    if (!source) continue;
    for (const key of Object.keys(source)) {
      const sv = source[key];
      const tv = result[key];
      if (
        sv &&
        typeof sv === 'object' &&
        !Array.isArray(sv) &&
        tv &&
        typeof tv === 'object' &&
        !Array.isArray(tv)
      ) {
        result[key] = deepMerge(tv, sv);
      } else if (sv !== undefined) {
        result[key] = sv;
      }
    }
  }
  return result;
}

const baseFormItemProps = {
  require: false,
  hidden: false,
  noStyle: false,
  validateFirst: false,
  validateTrigger: 'onChange',
};

const FIELD_DEFAULTS = {
  'ant-input': {
    formItemProps: { ...baseFormItemProps, valuePropName: 'value' },
    fieldProps: {
      type: 'text',
      allowClear: true,
      readOnly: false,
      disabled: false,
      variant: 'outlined',
      fill: true,
    },
  },
  'ant-textarea': {
    formItemProps: { ...baseFormItemProps, valuePropName: 'value' },
    fieldProps: {
      allowClear: true,
      readOnly: false,
      disabled: false,
      showCount: false,
      autoSize: false,
      variant: 'outlined',
      fill: true,
    },
  },
  'ant-input-search': {
    formItemProps: { ...baseFormItemProps, valuePropName: 'value' },
    fieldProps: {
      readOnly: false,
      allowClear: true,
      disabled: false,
      showCount: false,
      loading: false,
      size: 'middle',
      variant: 'outlined',
      fill: true,
    },
  },
  'ant-input-password': {
    formItemProps: { ...baseFormItemProps, valuePropName: 'value' },
    fieldProps: {
      allowClear: true,
      disabled: false,
      variant: 'outlined',
      fill: true,
    },
  },
  'ant-input-otp': {
    formItemProps: { ...baseFormItemProps, valuePropName: 'value' },
    fieldProps: {
      disabled: false,
      length: 6,
      mask: false,
      size: 'middle',
      variant: 'outlined',
      fill: true,
    },
  },
  'ant-input-number': {
    formItemProps: { ...baseFormItemProps, valuePropName: 'value' },
    fieldProps: {
      disabled: false,
      variant: 'outlined',
      fill: true,
    },
  },
  'ant-select': {
    formItemProps: { ...baseFormItemProps, valuePropName: 'value' },
    fieldProps: {
      allowClear: false,
      disabled: false,
      defaultActiveFirstOption: true,
      listHeight: 256,
      fill: true,
    },
  },
  'ant-radio': {
    formItemProps: { ...baseFormItemProps, valuePropName: 'checked', value: false },
    fieldProps: { disabled: false, fill: true },
  },
  'ant-radio-group': {
    formItemProps: { ...baseFormItemProps, valuePropName: 'value' },
    fieldProps: {
      disabled: false,
      optionType: 'default',
      buttonStyle: 'outline',
      block: false,
      optionWrap: false,
      fill: true,
    },
  },
  'ant-checkbox': {
    formItemProps: { ...baseFormItemProps, valuePropName: 'checked', value: false },
    fieldProps: { disabled: false, indeterminate: false, fill: true },
  },
  'ant-checkbox-group': {
    formItemProps: { ...baseFormItemProps, valuePropName: 'value' },
    fieldProps: { disabled: false, optionWrap: false, fill: true },
  },
  'ant-switch': {
    formItemProps: { ...baseFormItemProps, valuePropName: 'checked', value: false },
    fieldProps: { disabled: false, loading: false, size: 'default', fill: true },
  },
  'ant-rate': {
    formItemProps: { ...baseFormItemProps, valuePropName: 'value' },
    fieldProps: { disabled: false, allowHalf: false, count: 5, fill: true },
  },
  'ant-slider': {
    formItemProps: { ...baseFormItemProps, valuePropName: 'value', value: 0 },
    fieldProps: {
      disabled: false,
      keyboard: true,
      min: 0,
      max: 100,
      step: 1,
      orientation: 'horizontal',
      reverse: false,
      dots: false,
      included: true,
      range: false,
      fill: true,
    },
  },
  'ant-segmented': {
    formItemProps: { ...baseFormItemProps, valuePropName: 'value' },
    fieldProps: {
      disabled: false,
      block: false,
      orientation: 'horizontal',
      size: 'medium',
      shape: 'default',
      fill: true,
    },
  },
  'ant-date-picker': {
    formItemProps: { ...baseFormItemProps, valuePropName: 'value' },
    fieldProps: {
      disabled: false,
      format: 'YYYY-MM-DD',
      showTime: false,
      allowClear: true,
      isBirthday: false,
      dateBoundMode: '',
      fill: true,
    },
  },
  'ant-date-dange-picker': {
    formItemProps: { ...baseFormItemProps, valuePropName: 'value' },
    fieldProps: {
      format: 'YYYY-MM-DD',
      allowClear: true,
      disabled: false,
      showTime: false,
      allowEmpty: [true, true],
      fill: true,
    },
  },
  'ant-time-picker': {
    formItemProps: { ...baseFormItemProps, valuePropName: 'value' },
    fieldProps: {
      disabled: false,
      format: 'HH:mm:ss',
      minuteStep: 1,
      allowClear: true,
      fill: true,
    },
  },
  'ant-time-range-picker': {
    formItemProps: { ...baseFormItemProps, valuePropName: 'value' },
    fieldProps: {
      format: 'HH:mm:ss',
      allowClear: true,
      disabled: false,
      minuteStep: 1,
      fill: true,
    },
  },
  'ant-color-picker': {
    formItemProps: { ...baseFormItemProps, valuePropName: 'value' },
    fieldProps: {
      format: 'hex',
      allowClear: true,
      disabled: false,
      showText: false,
      fill: true,
    },
  },
  'ant-cascader': {
    formItemProps: { ...baseFormItemProps, valuePropName: 'value' },
    fieldProps: {
      allowClear: false,
      changeOnSelect: false,
      disabled: false,
      multiple: false,
      showCheckedStrategy: 'SHOW_PARENT',
      fill: true,
    },
  },
  'ant-tree-select': {
    formItemProps: { ...baseFormItemProps, valuePropName: 'value' },
    fieldProps: {
      allowClear: false,
      disabled: false,
      labelInValue: false,
      multiple: false,
      treeCheckable: false,
      showCheckedStrategy: 'SHOW_CHILD',
      treeDefaultExpandAll: false,
      treeLine: false,
      virtual: true,
      listHeight: 256,
      fill: true,
    },
  },
  'ant-tree-selection': {
    formItemProps: { ...baseFormItemProps, valuePropName: 'value', initialValue: [] },
    fieldProps: {
      checkable: true,
      checkStrictly: false,
      defaultExpandAll: false,
      autoExpandParent: true,
      blockNode: false,
      selectable: true,
      multiple: false,
      treeLine: false,
      virtual: true,
      draggable: false,
      disabled: false,
      contentMaxHeight: 320,
      showSearch: true,
      searchAllowClear: true,
    },
  },
  'ant-transfer': {
    formItemProps: { ...baseFormItemProps, valuePropName: 'targetKeys' },
    fieldProps: {
      disabled: false,
      showSearch: false,
      oneWay: false,
      pagination: false,
      showSelectAll: true,
    },
  },
  'ant-table-selection': {
    formItemProps: { ...baseFormItemProps, valuePropName: 'value', initialValue: [] },
    fieldProps: {
      bordered: true,
      loading: false,
      size: 'middle',
      showHeader: true,
      tableLayout: 'auto',
      rowKey: 'key',
      rowSelectionType: 'checkbox',
      hideSelectAll: false,
      rowSelectionFixed: true,
      showSearch: true,
      searchAllowClear: true,
      pagination: false,
    },
  },
  'ant-file-upload': {
    formItemProps: { ...baseFormItemProps, valuePropName: 'value', value: [] },
    fieldProps: {
      disabled: false,
      accept: '',
      multiple: true,
      listType: 'text',
      showUploadList: true,
      fill: true,
    },
  },
  'ant-image-upload': {
    formItemProps: { ...baseFormItemProps, valuePropName: 'value', value: [] },
    fieldProps: {
      disabled: false,
      accept: 'image/*',
      multiple: true,
      listType: 'picture-card',
      showUploadList: true,
      cropEnabled: true,
      cropShape: 'rect',
      cropAllowFlip: true,
      fill: true,
    },
  },
  'ant-qrcode': {
    formItemProps: { ...baseFormItemProps, valuePropName: 'value', initialValue: 'https://ant.design/' },
    fieldProps: {
      value: 'https://ant.design/',
      type: 'canvas',
      size: 160,
      bordered: true,
      boostLevel: true,
      status: 'active',
      statusRenderTemplate: 'ant-example',
      fill: true,
    },
  },
  'ant-signature-pad': {
    formItemProps: { ...baseFormItemProps, valuePropName: 'value', initialValue: '' },
    fieldProps: {
      value: '',
      penColor: '#000000',
      backgroundColor: '#ffffff',
      mode: 'free',
      lineWidth: 2,
      canvasWidth: 300,
      canvasHeight: 200,
      clearOnResize: false,
      fill: true,
    },
  },
  'ant-rich-editor': {
    formItemProps: { ...baseFormItemProps, valuePropName: 'value' },
    fieldProps: {
      readOnly: false,
      disabled: false,
      bordered: true,
      minHeight: 300,
      height: 360,
      gap: 60,
      direction: 'ltr',
      toolbarPreset: 'basic',
      fill: true,
    },
  },
  'ant-editor-table': {
    formItemProps: { ...baseFormItemProps, valuePropName: 'value' },
    fieldProps: {
      bordered: true,
      pagination: false,
      no: true,
      size: 'middle',
      fill: true,
    },
  },
};

function createField(type, spec) {
  const defaults = FIELD_DEFAULTS[type];
  if (!defaults) {
    throw new Error(`Unknown field type: ${type}`);
  }

  const label = i18n(spec.labelZh, spec.labelEn);
  const placeholder = i18n(spec.labelZh, spec.labelEn);

  const formItemProps = deepMerge({}, defaults.formItemProps, {
    label,
    name: spec.name ?? fieldName(type),
    colSpan: spec.colSpan,
  }, spec.formItemProps ?? {});

  const fieldProps = deepMerge({}, defaults.fieldProps, {
    placeholder,
  }, spec.fieldProps ?? {});

  return {
    id: uuid(),
    type,
    props: {
      formItemProps,
      fieldProps,
      fieldActionTypes: ['copy', 'delete'],
    },
  };
}

function buildFieldSpecs() {
  const editorColName = uuid();
  const editorColDept = uuid();
  const tableColName = uuid();
  const tableColAge = uuid();
  const tableColDept = uuid();

  return [
    { type: 'ant-input', labelZh: '姓名', labelEn: 'Name', fieldProps: { type: 'text' } },
    { type: 'ant-input-search', labelZh: '搜索关键词', labelEn: 'Search keyword' },
    { type: 'ant-input-password', labelZh: '登录密码', labelEn: 'Password' },
    { type: 'ant-input-otp', labelZh: '短信验证码', labelEn: 'SMS code' },
    {
      type: 'ant-input-number',
      labelZh: '年龄',
      labelEn: 'Age',
      fieldProps: { min: 18, max: 65 },
    },
    {
      type: 'ant-textarea',
      labelZh: '备注',
      labelEn: 'Remarks',
      colSpan: 2,
      fieldProps: { autoSize: true },
    },
    {
      type: 'ant-select',
      labelZh: '所属部门',
      labelEn: 'Department',
      fieldProps: { selectOptions: departmentSelectOptions },
    },
    {
      type: 'ant-radio',
      labelZh: '同意协议',
      labelEn: 'Agree to terms',
      formItemProps: { valuePropName: 'checked' },
    },
    {
      type: 'ant-radio-group',
      labelZh: '通知方式',
      labelEn: 'Notification method',
      fieldProps: { selectOptions: notificationRadioOptions },
    },
    {
      type: 'ant-checkbox',
      labelZh: '订阅资讯',
      labelEn: 'Subscribe to newsletter',
      formItemProps: { valuePropName: 'checked' },
    },
    {
      type: 'ant-checkbox-group',
      labelZh: '技能标签',
      labelEn: 'Skills',
      fieldProps: { selectOptions: skillCheckboxOptions },
    },
    {
      type: 'ant-switch',
      labelZh: '账号启用',
      labelEn: 'Account enabled',
      formItemProps: { valuePropName: 'checked' },
    },
    { type: 'ant-rate', labelZh: '满意度', labelEn: 'Satisfaction' },
    {
      type: 'ant-slider',
      labelZh: '优先级',
      labelEn: 'Priority',
      fieldProps: { min: 0, max: 100 },
    },
    {
      type: 'ant-segmented',
      labelZh: '视图模式',
      labelEn: 'View mode',
      fieldProps: { selectOptions: viewSegmentedOptions },
    },
    { type: 'ant-date-picker', labelZh: '入职日期', labelEn: 'Join date' },
    { type: 'ant-date-dange-picker', labelZh: '合同期限', labelEn: 'Contract period' },
    { type: 'ant-time-picker', labelZh: '上班时间', labelEn: 'Work start time' },
    { type: 'ant-time-range-picker', labelZh: '工作时段', labelEn: 'Work hours' },
    { type: 'ant-color-picker', labelZh: '主题色', labelEn: 'Theme color' },
    {
      type: 'ant-cascader',
      labelZh: '所在地区',
      labelEn: 'Region',
      fieldProps: {
        treeOptions: {
          type: 'static',
          treeDataJson: treeOptionsJson(regionTreeData),
        },
      },
    },
    {
      type: 'ant-tree-select',
      labelZh: '汇报上级',
      labelEn: 'Reports to',
      fieldProps: {
        treeOptions: {
          type: 'static',
          treeDataJson: treeOptionsJson(orgTreeData),
        },
      },
    },
    {
      type: 'ant-tree-selection',
      labelZh: '菜单权限',
      labelEn: 'Menu permissions',
      colSpan: 2,
      fieldProps: {
        searchPlaceholder: i18n('请输入关键字搜索', 'Enter keyword to search'),
        treeOptions: {
          type: 'static',
          treeDataJson: treeOptionsJson(orgTreeData),
        },
      },
    },
    {
      type: 'ant-transfer',
      labelZh: '分配角色',
      labelEn: 'Assign roles',
      colSpan: 2,
      fieldProps: { transferOptions: transferDataSource },
    },
    {
      type: 'ant-table-selection',
      labelZh: '选择同事',
      labelEn: 'Select colleagues',
      colSpan: 2,
      fieldProps: {
        searchPlaceholder: i18n('请输入关键字搜索', 'Enter keyword to search'),
        paginationSetting: { ...DEFAULT_PAGING_SETTING },
        columnSetting: buildTableSelectionColumnSetting(tableColName, tableColAge, tableColDept),
        tableOptions: {
          type: 'static',
          dataSourceJson: tableDataSourceJson,
        },
      },
    },
    {
      type: 'ant-file-upload',
      labelZh: '附件上传',
      labelEn: 'Attachments',
      colSpan: 2,
      fieldProps: {
        uploadDataSource: { type: 'dynamic' },
      },
    },
    {
      type: 'ant-image-upload',
      labelZh: '头像上传',
      labelEn: 'Avatar',
      colSpan: 2,
      fieldProps: {
        uploadDataSource: { type: 'dynamic' },
      },
    },
    {
      type: 'ant-qrcode',
      labelZh: '邀请链接',
      labelEn: 'Invite link',
      fieldProps: { value: 'https://example.com/invite/abc123' },
      formItemProps: { initialValue: 'https://example.com/invite/abc123' },
    },
    { type: 'ant-signature-pad', labelZh: '电子签名', labelEn: 'Signature', colSpan: 2 },
    {
      type: 'ant-rich-editor',
      labelZh: '个人简介',
      labelEn: 'Bio',
      colSpan: 2,
      fieldProps: {
        placeholder: i18n('请输入个人简介', 'Enter your bio'),
      },
    },
    {
      type: 'ant-editor-table',
      labelZh: '工作经历',
      labelEn: 'Work experience',
      colSpan: 2,
      fieldProps: {
        columnSetting: buildEditorTableColumnSetting(editorColName, editorColDept),
      },
    },
  ];
}

function createLayoutShell(fields) {
  return {
    id: uuid(),
    type: 'flex-layout',
    props: {
      fieldProps: {
        direction: 'vertical',
        wrap: false,
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        alignContent: 'normal',
        gap: 8,
      },
      flexProps: {
        minSize: true,
        scroll: true,
      },
      children: [
        {
          id: uuid(),
          type: 'card-layout',
          props: {
            fieldProps: {
              variant: 'outlined',
              size: 'default',
              hoverable: false,
              loading: false,
              autoHeight: false,
              title: i18n('全部表单控件', 'All form controls'),
            },
            flexProps: {
              flex: 1,
              flexShrink: 1,
              minSize: false,
              scroll: false,
            },
            children: [
              {
                id: uuid(),
                type: 'table-grid-layout',
                props: {
                  fieldProps: {
                    layout: 'vertical',
                    bordered: false,
                    density: 'default',
                    mode: 'normal',
                    data: [
                      {
                        name: 'g1',
                        columnCount: 2,
                        colgroup: ['auto', 'auto'],
                        data: [],
                      },
                    ],
                  },
                  flexProps: {
                    minSize: true,
                    scroll: true,
                  },
                  children: fields,
                  fieldActionTypes: ['delete'],
                },
              },
            ],
            fieldActionTypes: ['delete'],
          },
        },
      ],
    },
  };
}

function main() {
  const specs = buildFieldSpecs();
  const fields = specs.map((spec) => createField(spec.type, spec));
  const designValue = createLayoutShell(fields);

  fs.writeFileSync(outputPath, `${JSON.stringify(designValue, null, 2)}\n`, 'utf8');

  const types = fields.map((f) => f.type);
  const uniqueTypes = new Set(types);
  console.log(`Generated ${outputPath}`);
  console.log(`Fields: ${types.length}, unique types: ${uniqueTypes.size}`);
  if (types.length !== uniqueTypes.size) {
    console.warn('Warning: duplicate field types detected');
    process.exitCode = 1;
  }
  if (uniqueTypes.size !== 31) {
    console.warn(`Warning: expected 31 form field types, got ${uniqueTypes.size}`);
    process.exitCode = 1;
  }
}

main();
