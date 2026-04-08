import type { FormItemProps as AntdFormItemProps } from 'antd/es/form/FormItem';
export type FormItemProps = AntdFormItemProps & {
    colSpan?: number;
    require?: boolean;
};
