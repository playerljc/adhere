import React from 'react';
import { FormItemProps } from 'antd/lib/form/FormItem';
import { ColProps } from 'antd/lib/col';
/**
 * IFormItemProps
 */
export interface IFormItemProps extends FormItemProps {
    name?: string | number | (string | number)[];
    type?: Symbol;
    contentProps?: any;
    skip?: boolean;
    content?: React.ReactElement;
    col?: ColProps;
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
