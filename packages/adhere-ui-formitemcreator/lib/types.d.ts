import React from 'react';
import { FormItemProps } from 'antd/lib/form/FormItem';
export interface IFormItemProps extends FormItemProps {
    name?: string | number | (string | number)[];
    type?: string;
    contentProps?: any;
    skip?: boolean;
    content?: React.ReactElement;
}
export interface IFormItemLayoutProps {
    labelCol?: object;
    wrapperCol?: object;
}
/**
 * ITemplateProps
 * @interface IFormItemCreatorProps
 */
export interface IFormItemCreatorProps {
    columns: Array<IFormItemProps>;
    layout?: IFormItemLayoutProps;
    render: () => React.ReactElement<HTMLDivElement>;
}
