import { Form } from 'antd';
import { FormInstance, FormListFieldData, FormListOperation } from 'antd/es/form';
import React, { FC, ReactNode, useContext, useEffect } from 'react';

import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
import ConditionalRender from '@baifendian/adhere-ui-conditionalrender';

import SearchTable, { SearchTableContext, selectorPrefix } from '../../../SearchTable';
import { EditableCellEditProps } from '../../../types';
import FormItemGenerator from './FormItemGenerator';

/**
 * EditableTableCellEdit
 * @description 表格可编辑单元格的编辑状态
 */
const EditableTableCellEdit: FC<EditableCellEditProps> = (props) => {
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

  const context = useContext<{
    context: SearchTable;
    form?: FormInstance;
    formList?: {
      fields: FormListFieldData[];
      operation?: FormListOperation;
      meta?: {
        errors?: ReactNode[];
        warnings?: ReactNode[];
      };
    };
  } | null>(SearchTableContext);

  const nameItemPath = [context?.formList?.fields[rowIndex]?.name as number, dataIndex as string];
  const namePath = ['dataSource', ...nameItemPath];

  const value = Form.useWatch(namePath, context?.form as FormInstance);

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
    context?.form?.validateFields?.()?.then?.((values) => {
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

  function renderFormItem() {
    const formItemNode = FormItemGenerator.render({
      type,
      props: { autoFocus: !useKeepEdit, ...props.editableConfig.props },
      dictName: props.editableConfig.dictName,
      renderChildren: props.editableConfig.renderChildren,
      form: context?.form,
      dataIndex,
      rowIndex,
    });

    return render
      ? render({
          value: record?.[dataIndex as string],
          record,
          dataIndex,
          rowIndex,
          form: context?.form as FormInstance,
          children: formItemNode,
        })
      : formItemNode;
  }

  useEffect(() => {
    context?.form?.setFieldValue(
      namePath,
      // @ts-ignore
      context?.context?.valueToFormItemValue?.({
        type,
        record,
        dataIndex: dataIndex as string,
      }),
    );
  }, [record?.[dataIndex as string]]);

  return (
    <div className={`${selectorPrefix}-editablecell-edit`}>
      <div className={`${selectorPrefix}-editablecell-edit-inner`}>
        <Form.Item
          // initialValue={record[dataIndex as string]}
          name={nameItemPath}
          rules={rules}
          {...(formItemProps || {})}
        >
          {type !== 'custom'
            ? renderFormItem()
            : render?.({
                value: record?.[dataIndex as string],
                record,
                dataIndex,
                rowIndex,
                form: context?.form as FormInstance,
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

export default EditableTableCellEdit;