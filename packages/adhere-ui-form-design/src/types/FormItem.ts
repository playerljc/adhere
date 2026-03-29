import type { FormItemProps as AntdFormItemProps } from 'antd/es/form/FormItem';

// 表单项的Props
export type FormItemProps = AntdFormItemProps & {
  // 跨列属性
  colSpan?: number;
  // 设计视图中 label 是否显示必填星号
  require?: boolean;
};
