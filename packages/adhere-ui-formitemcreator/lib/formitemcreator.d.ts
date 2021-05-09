import React from 'react';
import { IFormItemCreatorProps } from './types';
/**
 * FormItemCreator
 * @class FormItemCreator
 * @classdesc 表单项的创建组件
 */
declare class FormItemCreator extends React.Component<IFormItemCreatorProps> {
    static defaultProps: any;
    static propTypes: any;
    static TEXT: symbol;
    static INPUT: symbol;
    static SEARCH: symbol;
    static PASSWORD: symbol;
    static TEXTAREA: symbol;
    static NUMBER: symbol;
    static RADIO: symbol;
    static CHECKBOX: symbol;
    static DATEPICKER: symbol;
    static RANGEPICKER: symbol;
    static TIMEPICKER: symbol;
    static SWITCH: symbol;
    static SELECT: symbol;
    static SLIDER: symbol;
    static RATE: symbol;
    static UPLOAD: symbol;
    static DEFINE: symbol;
    private readonly FORM_ITEM_CONFIG;
    /**
     * getDefaultItemProps - 表单单项的默认配置 通过type来制定
     * @param {Object} item
     */
    private getDefaultItemProps;
    /**
     * renderFormItem - 表单单项渲染 通过type来制定
     * @param {Object} item
     */
    private renderFormItem;
    render(): (JSX.Element | undefined)[];
}
export default FormItemCreator;
