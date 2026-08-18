/**
 * DesignValue JSON 模板构建工具（与 AllFields.json 同结构）
 */
import crypto from 'crypto';

import { i18n, orgTreeData, regionTreeData, treeOptionsJson } from '../i18n/allFieldsStaticData.mjs';

export function uuid() {
  return crypto.randomUUID();
}

export function randomSuffix(length = 8) {
  const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i += 1) {
    result += chars[Math.floor(Math.random() * chars.length)];
  }
  return result;
}

export function fieldName(type) {
  const base = type.replace(/^ant-/, 'ant_').replace(/-/g, '_');
  return `${base}_${randomSuffix()}`;
}

export function deepMerge(target, ...sources) {
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

export const baseFormItemProps = {
  require: false,
  hidden: false,
  noStyle: false,
  validateFirst: false,
  validateTrigger: 'onChange',
};

const valueItem = (fieldProps) => ({
  formItemProps: { ...baseFormItemProps, valuePropName: 'value' },
  fieldProps,
});

const checkedItem = (fieldProps) => ({
  formItemProps: { ...baseFormItemProps, valuePropName: 'checked', value: false },
  fieldProps,
});

export const FIELD_DEFAULTS = {
  'ant-input': valueItem({
    type: 'text',
    allowClear: true,
    readOnly: false,
    disabled: false,
    variant: 'outlined',
    fill: true,
  }),
  'ant-textarea': valueItem({
    allowClear: true,
    readOnly: false,
    disabled: false,
    showCount: false,
    autoSize: false,
    variant: 'outlined',
    fill: true,
  }),
  'ant-input-search': valueItem({
    readOnly: false,
    allowClear: true,
    disabled: false,
    showCount: false,
    loading: false,
    size: 'middle',
    variant: 'outlined',
    fill: true,
  }),
  'ant-input-password': valueItem({
    allowClear: true,
    disabled: false,
    variant: 'outlined',
    fill: true,
  }),
  'ant-input-otp': valueItem({
    disabled: false,
    length: 6,
    mask: false,
    size: 'middle',
    variant: 'outlined',
    fill: true,
  }),
  'ant-input-number': valueItem({
    disabled: false,
    variant: 'outlined',
    fill: true,
  }),
  'ant-select': valueItem({
    allowClear: false,
    disabled: false,
    defaultActiveFirstOption: true,
    listHeight: 256,
    fill: true,
  }),
  'ant-radio': checkedItem({ disabled: false, fill: true }),
  'ant-radio-group': valueItem({
    disabled: false,
    optionType: 'default',
    buttonStyle: 'outline',
    block: false,
    optionWrap: false,
    fill: true,
  }),
  'ant-checkbox': checkedItem({ disabled: false, indeterminate: false, fill: true }),
  'ant-checkbox-group': valueItem({ disabled: false, optionWrap: false, fill: true }),
  'ant-switch': checkedItem({ disabled: false, loading: false, size: 'default', fill: true }),
  'ant-rate': valueItem({ disabled: false, allowHalf: false, count: 5, fill: true }),
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
  'ant-segmented': valueItem({
    disabled: false,
    block: false,
    orientation: 'horizontal',
    size: 'medium',
    shape: 'default',
    fill: true,
  }),
  'ant-date-picker': valueItem({
    disabled: false,
    format: 'YYYY-MM-DD',
    showTime: false,
    allowClear: true,
    isBirthday: false,
    dateBoundMode: '',
    fill: true,
  }),
  'ant-date-dange-picker': valueItem({
    format: 'YYYY-MM-DD',
    allowClear: true,
    disabled: false,
    showTime: false,
    allowEmpty: [true, true],
    fill: true,
  }),
  'ant-time-picker': valueItem({
    disabled: false,
    format: 'HH:mm:ss',
    minuteStep: 1,
    allowClear: true,
    fill: true,
  }),
  'ant-time-range-picker': valueItem({
    format: 'HH:mm:ss',
    allowClear: true,
    disabled: false,
    minuteStep: 1,
    fill: true,
  }),
  'ant-color-picker': valueItem({
    format: 'hex',
    allowClear: true,
    disabled: false,
    showText: false,
    fill: true,
  }),
  'ant-cascader': valueItem({
    allowClear: false,
    changeOnSelect: false,
    disabled: false,
    multiple: false,
    showCheckedStrategy: 'SHOW_PARENT',
    fill: true,
  }),
  'ant-tree-select': valueItem({
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
  }),
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
    formItemProps: {
      ...baseFormItemProps,
      valuePropName: 'value',
      initialValue: 'https://ant.design/',
    },
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
  'ant-rich-editor': valueItem({
    readOnly: false,
    disabled: false,
    bordered: true,
    minHeight: 300,
    height: 360,
    gap: 60,
    direction: 'ltr',
    toolbarPreset: 'basic',
    fill: true,
  }),
  'ant-editor-table': valueItem({
    bordered: true,
    pagination: false,
    no: true,
    size: 'middle',
    fill: true,
  }),
  'phone-with-area-code': valueItem({
    defaultCode: '+86',
    allowClear: true,
    disabled: false,
    fill: true,
  }),
  'send-sms': valueItem({
    defaultCode: '+86',
    allowClear: true,
    disabled: false,
    readOnly: false,
    countdownSeconds: 60,
    fill: true,
  }),
  'image-captcha': valueItem({
    mode: 'image',
    fill: true,
  }),
  'ant-alert': {
    formItemProps: { noStyle: true },
    fieldProps: {
      message: 'Alert',
      description: 'Description',
      type: 'info',
      closable: false,
      showIcon: true,
      fill: false,
    },
  },
  'ant-text': {
    formItemProps: { noStyle: true },
    fieldProps: {
      children: 'Text',
      type: 'secondary',
      strong: false,
      underline: false,
      delete: false,
      disabled: false,
      ellipsis: false,
      fill: false,
    },
  },
  'ant-divider': {
    formItemProps: { noStyle: true },
    fieldProps: {
      children: i18n('分割线', 'Divider'),
      orientation: 'horizontal',
      vertical: false,
      dashed: false,
      plain: false,
      titlePlacement: 'center',
      variant: 'solid',
      size: 'medium',
    },
  },
  'ant-button': {
    formItemProps: { noStyle: true },
    fieldProps: {
      children: 'Button',
      type: 'default',
      shape: 'default',
      size: 'middle',
      htmlType: 'button',
      ghost: false,
      danger: false,
      loading: false,
      disabled: false,
      block: false,
      fill: false,
    },
  },
  'ant-submit-button': {
    formItemProps: { noStyle: true },
    fieldProps: {
      children: 'Submit',
      type: 'primary',
      shape: 'default',
      size: 'middle',
      htmlType: 'submit',
      ghost: false,
      danger: false,
      loading: false,
      disabled: false,
      block: false,
      fill: false,
    },
  },
  'ant-link': {
    formItemProps: { noStyle: true },
    fieldProps: {
      children: 'Link',
      href: 'https://ant.design',
      target: '_blank',
      disabled: false,
      fill: false,
    },
  },
};

const NO_PLACEHOLDER_TYPES = new Set([
  'ant-alert',
  'ant-text',
  'ant-divider',
  'ant-button',
  'ant-submit-button',
  'ant-link',
  'ant-qrcode',
  'ant-signature-pad',
  'ant-editor-table',
  'ant-rich-editor',
  'ant-transfer',
  'ant-table-selection',
  'ant-tree-selection',
  'image-captcha',
]);

export function createField(type, spec = {}) {
  const defaults = FIELD_DEFAULTS[type];
  if (!defaults) {
    throw new Error(`Unknown field type: ${type}`);
  }

  const label =
    spec.label ??
    (spec.labelZh
      ? i18n(spec.labelZh, spec.labelEn ?? spec.labelZh, spec.labelPt, spec.labelAr)
      : undefined);
  const placeholder = spec.placeholder ?? label;

  const formItemProps = deepMerge(
    {},
    defaults.formItemProps,
    {
      ...(label ? { label } : {}),
      ...(spec.name || label ? { name: spec.name ?? fieldName(type) } : {}),
      ...(spec.colSpan != null ? { colSpan: spec.colSpan } : {}),
    },
    spec.formItemProps ?? {},
  );

  const fieldProps = deepMerge(
    {},
    defaults.fieldProps,
    !NO_PLACEHOLDER_TYPES.has(type) && placeholder ? { placeholder } : {},
    spec.fieldProps ?? {},
  );

  return {
    id: uuid(),
    type,
    props: {
      formItemProps,
      fieldProps,
      fieldActionTypes: spec.fieldActionTypes ?? ['copy', 'delete'],
    },
  };
}

export function requiredRule(zh, en, pt, ar) {
  const message = typeof zh === 'object' && zh ? zh : i18n(zh, en, pt, ar);
  return [
    {
      type: 'required',
      config: {
        required: true,
        message,
      },
    },
  ];
}

const EMAIL_PATTERN = '^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$';

export function emailRules(requiredMessage, invalidMessage) {
  return [
    {
      type: 'required',
      config: {
        required: true,
        message: requiredMessage,
      },
    },
    {
      type: 'pattern',
      config: {
        pattern: EMAIL_PATTERN,
        message: invalidMessage,
      },
    },
  ];
}

const defaultFlexFieldProps = {
  direction: 'vertical',
  wrap: false,
  justifyContent: 'flex-start',
  alignItems: 'stretch',
  alignContent: 'normal',
  gap: 8,
};

export function createFlex(children = [], overrides = {}) {
  return {
    id: uuid(),
    type: 'flex-layout',
    props: {
      fieldProps: { ...defaultFlexFieldProps, ...(overrides.fieldProps ?? {}) },
      flexProps: {
        minSize: true,
        scroll: true,
        ...(overrides.flexProps ?? {}),
      },
      children,
      fieldActionTypes: overrides.fieldActionTypes ?? ['delete'],
    },
  };
}

export function createCard(titleZh, titleEn, children = [], extraFieldProps = {}) {
  return {
    id: uuid(),
    type: 'card-layout',
    props: {
      fieldProps: {
        variant: 'outlined',
        size: 'default',
        hoverable: false,
        loading: false,
        autoHeight: false,
        title: i18n(titleZh, titleEn),
        ...extraFieldProps,
      },
      flexProps: {
        flex: 1,
        flexShrink: 1,
        minSize: false,
        scroll: false,
      },
      children,
      fieldActionTypes: ['delete'],
    },
  };
}

export function createTableGrid(fields, columnCount = 2) {
  return {
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
            columnCount,
            colgroup: Array.from({ length: columnCount }, () => 'auto'),
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
  };
}

export function createCardGrid(titleZh, titleEn, fields, columnCount = 2) {
  return createCard(titleZh, titleEn, [createTableGrid(fields, columnCount)]);
}

export function createTabs(panes) {
  const tabItems = panes.map((pane, index) => ({
    id: uuid(),
    key: String(index + 1),
    label: i18n(pane.labelZh, pane.labelEn),
    closable: true,
  }));

  return {
    id: uuid(),
    type: 'tabs-layout',
    props: {
      fieldProps: {
        tabItems,
        defaultActiveKey: tabItems[0]?.key ?? '1',
        type: 'line',
        size: 'middle',
        tabPlacement: 'top',
        centered: false,
      },
      flexProps: {
        minSize: true,
        scroll: true,
      },
      children: panes.map((pane) => createFlex(pane.children ?? [])),
      fieldActionTypes: ['delete'],
    },
  };
}

export function createCollapse(panels, extraFieldProps = {}) {
  const panelItems = panels.map((panel, index) => ({
    id: uuid(),
    key: String(index + 1),
    label: i18n(panel.labelZh, panel.labelEn),
    forceRender: false,
    destroyOnHidden: false,
    showArrow: true,
  }));

  return {
    id: uuid(),
    type: 'collapse-layout',
    props: {
      fieldProps: {
        panelItems,
        defaultActiveKey: ['1'],
        accordion: false,
        bordered: true,
        ghost: false,
        size: 'medium',
        expandIconPlacement: 'start',
        destroyOnHidden: false,
        ...extraFieldProps,
      },
      flexProps: {
        minSize: true,
        scroll: true,
      },
      children: panels.map((panel) => createFlex(panel.children ?? [])),
      fieldActionTypes: ['delete'],
    },
  };
}

export function createSteps(steps) {
  const stepItems = steps.map((step) => ({
    id: uuid(),
    title: i18n(step.labelZh, step.labelEn),
  }));

  return {
    id: uuid(),
    type: 'steps-layout',
    props: {
      fieldProps: {
        stepItems,
        current: 0,
        initial: 0,
        direction: 'top',
        type: 'default',
        size: 'default',
        itemRenderMode: 'lazy',
        itemLayoutMode: 'surplus',
        isFullWidth: true,
        isFullHeight: true,
        titlePlacement: 'horizontal',
      },
      flexProps: {
        minSize: true,
        scroll: true,
      },
      children: steps.map((step) => createFlex(step.children ?? [])),
      fieldActionTypes: ['delete'],
    },
  };
}

export function createAlert(message, description, type = 'info') {
  return createField('ant-alert', {
    fieldProps: {
      type,
      showIcon: true,
      message,
      description,
    },
  });
}

export function createSubmit(label, extraFieldProps = {}) {
  return createField('ant-submit-button', {
    fieldProps: {
      children: label,
      ...extraFieldProps,
    },
  });
}

export function createTreeField(type, spec = {}) {
  return createField(type, {
    ...spec,
    fieldProps: {
      searchPlaceholder: i18n('请输入关键字搜索', 'Enter keyword to search'),
      treeOptions: {
        type: 'static',
        treeDataJson: treeOptionsJson(type === 'ant-cascader' ? regionTreeData : orgTreeData),
      },
      ...(spec.fieldProps ?? {}),
    },
  });
}

export function createRoot(children) {
  return createFlex(children, {
    flexProps: { minSize: true, scroll: true },
    fieldActionTypes: [],
  });
}
