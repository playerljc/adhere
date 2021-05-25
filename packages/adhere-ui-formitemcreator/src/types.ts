import React from 'react';
import { FormItemProps } from 'antd/lib/form/FormItem';

/**
 * IFormItemProps
 */
export interface IFormItemProps extends FormItemProps {
  name?: string | number | (string | number)[];
  type?: Symbol;
  contentProps?: any;
  skip?: boolean;
  content?: React.ReactElement;
}

/**
 * IFormItemLayoutProps
 */
export interface IFormItemLayoutProps {
  labelCol?: object;
  wrapperCol?: object;
}

/**
 * ITemplateProps
 * @interface IFormItemCreatorProps
 */
export interface IFormItemCreatorProps {
  columns: IFormItemProps[];
  layout?: IFormItemLayoutProps;
}
