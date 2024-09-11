import type { FC } from 'react';
import type { FormItemProps } from '../types';
/**
 * FormItem
 * @description 自定义Form.Item，可以自定义error的错误信息显示位置
 * @param {() => HtmlElement | null} getErrorContainer
 * @param children
 * @param {FormItemProps} props
 * @return {React.ReactNode}
 */
declare const FormItem: FC<FormItemProps>;
export default FormItem;
