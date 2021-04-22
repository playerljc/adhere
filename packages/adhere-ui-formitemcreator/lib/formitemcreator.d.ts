import React from 'react';
import { IFormItemCreatorProps, IFormItemProps } from './types';
/**
 * FormItemCreator
 * @class FormItemCreator
 * @classdesc 表单项的创建组件
 */
declare class FormItemCreator extends React.Component<IFormItemCreatorProps> {
    static defaultProps: any;
    static propTypes: any;
    componentDidMount(): void;
    componentWillReceiveProps(nextProps: Readonly<IFormItemCreatorProps>, nextContext: any): void;
    /**
     * 表单单项的默认配置 通过type来制定
     * @param {Object} item
     */
    getDefaultItemProps: (item: IFormItemProps) => {
        valuePropName: string;
    } | null;
    /**
     * 表单单项渲染 通过type来制定
     * @param {Object} item
     */
    createFormItem: (item: IFormItemProps) => any;
    render(): (JSX.Element | undefined)[];
}
export default FormItemCreator;
