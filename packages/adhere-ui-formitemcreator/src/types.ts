import type { ReactElement, PropsWithChildren, ValidationMap, WeakValidationMap } from 'react';
import type { FormItemProps } from 'antd/lib/form/FormItem';
import type { ColProps, ColSize } from 'antd/lib/col';
import type { RowProps } from 'antd/lib/row';

export interface FormItemCreatorFunction<P> {
  (props: PropsWithChildren<P>, context?: any): any;
  propTypes?: WeakValidationMap<P> | undefined;
  contextTypes?: ValidationMap<any> | undefined;
  defaultProps?: Partial<P> | undefined;
  displayName?: string | undefined;
  TEXT: Symbol;
  INPUT: Symbol;
  SEARCH: Symbol;
  PASSWORD: Symbol;
  TEXTAREA: Symbol;
  NUMBER: Symbol;
  RADIO: Symbol;
  CHECKBOX: Symbol;
  DATEPICKER: Symbol;
  RANGEPICKER: Symbol;
  TIMEPICKER: Symbol;
  SWITCH: Symbol;
  SELECT: Symbol;
  SLIDER: Symbol;
  RATE: Symbol;
  UPLOAD: Symbol;
  DEFINE: Symbol;
}

/**
 * FormItemCreatorProps
 * @interface FormItemCreatorProps
 */
export interface FormItemCreatorProps {
  columns: ColumnItemProps[];
  layout?: FormItemLayoutProps;
  row?: RowProps;
}

/**
 * ColumnItemProps
 */
export interface ColumnItemProps extends FormItemProps {
  name?: string | number | (string | number)[];
  type?: Symbol;
  contentProps?: any;
  skip?: boolean;
  content?: ReactElement;
  col?: ColProps;
}

/**
 * FormItemLayoutProps
 */
export interface FormItemLayoutProps {
  labelCol?: ColSize;
  wrapperCol?: ColSize;
}
