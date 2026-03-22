import type { FormItemProps as AntdFormItemProps } from 'antd/es/form/FormItem';

// 表单项的Props
export type FormItemProps = AntdFormItemProps & {
  // 跨列属性
  colSpan?: number;
  // 是否充满父容器
  fill?: boolean;
};
