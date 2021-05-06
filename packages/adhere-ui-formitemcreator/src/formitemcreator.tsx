import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'antd';

import renderItem from './formitem';
import { IFormItemCreatorProps, IFormItemProps } from './types';

const selectorPrefix = 'adhere-ui-formitemcreator';

/**
 * FormItemCreator
 * @class FormItemCreator
 * @classdesc 表单项的创建组件
 */
class FormItemCreator extends React.Component<IFormItemCreatorProps> {
  static defaultProps: any;
  static propTypes: any;

  componentDidMount() {}

  componentWillReceiveProps(nextProps: Readonly<IFormItemCreatorProps>, nextContext: any) {}

  /**
   * 表单单项的默认配置 通过type来制定
   * @param {Object} item
   */
  getDefaultItemProps = (item: IFormItemProps) => {
    switch (item.type) {
      case 'switch':
        return { valuePropName: 'checked' };
      case 'checkbox':
        return { valuePropName: 'checked' };
      case 'upload':
        return { valuePropName: 'fileList' };
      default:
        return null;
    }
  };

  /**
   * 表单单项渲染 通过type来制定
   * @param {Object} item
   */
  createFormItem = (item: IFormItemProps) => {
    const { type, contentProps = {} } = item;
    let component;
    switch (type) {
      case 'text':
        component = renderItem.renderText(contentProps);
        break;
      case 'input':
        component = renderItem.renderInput(contentProps);
        break;
      case 'search':
        component = renderItem.renderSearch(contentProps);
        break;
      case 'password':
        component = renderItem.renderPassword(contentProps);
        break;
      case 'textarea':
        component = renderItem.renderInputArea(contentProps);
        break;
      case 'number':
        component = renderItem.renderInputNumber(contentProps);
        break;
      case 'radio':
        component = renderItem.renderRadio(contentProps);
        break;
      case 'checkbox':
        component = renderItem.renderCheckbox(contentProps);
        break;
      case 'datepicker':
        component = renderItem.renderDatepicker(contentProps);
        break;
      case 'rangepicker':
        component = renderItem.renderRangepicker(contentProps);
        break;
      case 'timepicker':
        component = renderItem.renderTimePicker(contentProps);
        break;
      case 'switch':
        component = renderItem.renderSwitch(contentProps);
        break;
      case 'select':
        component = renderItem.renderSelect(contentProps);
        break;
      case 'slider':
        component = renderItem.renderSlider(contentProps);
        break;
      case 'rate':
        component = renderItem.renderRate(contentProps);
        break;
      case 'upload':
        component = renderItem.renderUpload(contentProps);
        break;
      case 'define':
        component = item.content;
        break;
      default:
        component = renderItem.renderInput(contentProps);;
        break;
    }
    return component || null;
  }; 

  render() {
    // @ts-ignore
    const { columns, layout } = this.props;

    // @ts-ignore
    return (
      columns.map((item: IFormItemProps) => {
        const { skip, contentProps, ...itemProps } = item;
        if (skip) return;
        return (
          <Form.Item
            {...this.getDefaultItemProps(item)}
            {...layout}
            {...itemProps}
          >
            {this.createFormItem(item)}
          </Form.Item>
        )
      })
    )
  }
}

FormItemCreator.defaultProps = {
  columns: [],
};

FormItemCreator.propTypes = {
  columns: PropTypes.array,
};

export default FormItemCreator;
