import { Form } from 'antd';
import { FormInstance } from 'antd/es/form';
import moment from 'moment';
import React, { FC, useContext, useEffect } from 'react';

import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
import ConditionalRender from '@baifendian/adhere-ui-conditionalrender';

import { selectorPrefix } from '../../../SearchTable';
import { EditableCellEditProps } from '../../../types';
import { EditableContext } from '../EditableRow';
import FormItemGenerator from './FormItemGenerator';

/**
 * EditableCellEdit
 * @description 可编辑单元格的编辑状态
 */
const EditableCellEdit: FC<EditableCellEditProps> = (props) => {
  const {
    useTrigger,
    useKeepEdit,
    renderSaveTrigger,
    renderCancelTrigger,
    onSave,
    onBeforeCancel,
    dataIndex,
    type,
    render,
    rules,
    formItemProps,
  } = props.editableConfig;

  const { record, rowIndex, onTriggerChange } = props;

  const form = useContext<FormInstance | null>(EditableContext);

  const value = Form.useWatch(dataIndex as string, form as FormInstance);

  /**
   * valueToFormItemValueMap
   * @description 值和表单控件值之间的转换，现在只涉及到时间控件
   */
  const valueToFormItemValueMap = new Map<string, () => any>([
    [
      'rangePicker',
      () => {
        let value = record?.[dataIndex as string];
        return Array.isArray(value) && value.length === 2
          ? [moment(value[0]), moment(value[1])]
          : [moment(), moment()];
      },
    ],
    [
      'datePicker',
      () => {
        let value = record?.[dataIndex as string];
        return moment(value);
      },
    ],
    [
      'timePicker',
      () => {
        let value = record?.[dataIndex as string];
        return moment(value);
      },
    ],
  ]);

  /**
   * renderDefaultSaveTrigger
   * @description 渲染缺省的保存句柄
   */
  function renderDefaultSaveTrigger() {
    return <CheckOutlined />;
  }

  /**
   * renderDefaultCancelTrigger
   * @description 渲染缺省的取消句柄
   */
  function renderDefaultCancelTrigger() {
    return <CloseOutlined />;
  }

  /**
   * onSaveTrigger
   * @description 点击了保存句柄
   */
  function onSaveTrigger() {
    // 对表单进行校验
    form?.validateFields().then((values) => {
      if (onSave) {
        onSave({
          value,
          values,
          record,
          dataIndex,
          rowIndex,
        })?.then(() => onTriggerChange?.());
        return;
      }

      onTriggerChange?.();
    });
  }

  /**
   * onCancelTrigger
   * @description 点击了cancel句柄
   */
  function onCancelTrigger() {
    if (onBeforeCancel) {
      onBeforeCancel({
        value,
        record,
        dataIndex,
        rowIndex,
      })?.then(() => onTriggerChange?.());
      return;
    }

    onTriggerChange?.();
  }

  /**
   * valueToFormItemValue
   * @description 值和表单值的转换
   */
  function valueToFormItemValue() {
    const item = valueToFormItemValueMap.get(type as string);

    return item ? item?.() : record?.[dataIndex as string];
  }

  useEffect(() => {
    form?.setFieldValue(dataIndex as string, valueToFormItemValue());
  }, [record?.[dataIndex as string]]);

  return (
    <div className={`${selectorPrefix}-editablecell-edit`}>
      <div className={`${selectorPrefix}-editablecell-edit-inner`}>
        <Form.Item
          // initialValue={record[dataIndex as string]}
          name={dataIndex as string}
          rules={rules}
          {...(formItemProps || {})}
        >
          {type !== 'custom'
            ? FormItemGenerator.render({
                type,
                props: props.editableConfig.props,
                dictName: props.editableConfig.dictName,
                renderChildren: props.editableConfig.renderChildren,
              })
            : render?.({
                value: record?.[dataIndex as string],
                record,
                dataIndex,
                rowIndex,
              })}
        </Form.Item>
      </div>

      <ConditionalRender conditional={!!useTrigger && !useKeepEdit}>
        {() => (
          <div className={`${selectorPrefix}-editablecell-edit-trigger`}>
            <div className={`${selectorPrefix}-editablecell-edit-trigger-inner`}>
              <div
                className={`${selectorPrefix}-editablecell-edit-trigger-save`}
                onClick={onSaveTrigger}
              >
                {!!renderSaveTrigger &&
                  renderSaveTrigger?.({
                    value: record?.[dataIndex as string],
                    record,
                    dataIndex,
                    rowIndex,
                  })}
                {!renderSaveTrigger && renderDefaultSaveTrigger()}
              </div>

              <div
                className={`${selectorPrefix}-editablecell-edit-trigger-cancel`}
                onClick={onCancelTrigger}
              >
                {!!renderCancelTrigger &&
                  renderCancelTrigger?.({
                    value: record?.[dataIndex as string],
                    record,
                    dataIndex,
                    rowIndex,
                  })}
                {!renderCancelTrigger && renderDefaultCancelTrigger()}
              </div>
            </div>
          </div>
        )}
      </ConditionalRender>
    </div>
  );
};

export default EditableCellEdit;
