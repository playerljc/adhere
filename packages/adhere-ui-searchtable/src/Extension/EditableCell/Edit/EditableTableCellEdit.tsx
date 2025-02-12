import { Form } from 'antd';
import type { FormInstance, FormListFieldData, FormListOperation } from 'antd/es/form';
import type { FC, ReactNode } from 'react';
import React, { useContext, useEffect, useMemo } from 'react';

import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
import ConditionalRender from '@baifendian/adhere-ui-conditionalrender';
import Util from '@baifendian/adhere-util';

import type SearchTable from '../../../SearchTable';
import { SearchTableContext, selectorPrefix } from '../../../SearchTable';
import type { EditableCellEditProps } from '../../../types';
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
    editable?: {
      tableEditable?: {
        form?: FormInstance;
        formList?: {
          fields: FormListFieldData[];
          operation?: FormListOperation;
          meta?: {
            errors?: ReactNode[];
            warnings?: ReactNode[];
          };
        };
      };
    };
  } | null>(SearchTableContext);

  const nameItemPath = [
    context?.editable?.tableEditable?.formList?.fields[rowIndex]?.name as number,
    dataIndex as string,
  ];

  const namePath = ['dataSource', ...nameItemPath];

  const value = Form.useWatch(namePath, context?.editable?.tableEditable?.form as FormInstance);

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
    if (onSave) {
      // 对表单进行校验
      context?.editable?.tableEditable?.form?.validateFields?.()?.then?.((values) => {
        onSave({
          value,
          values,
          record,
          dataIndex,
          rowIndex,
        })?.then(() => onTriggerChange?.());

        return;
      });
    }

    onTriggerChange?.();
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
    const childrenProps = Util.isFunction(props.editableConfig.props)
      ? (props.editableConfig.props as Function)({ record, dataIndex, rowIndex }) ?? {}
      : props.editableConfig.props ?? {};

    return FormItemGenerator.render({
      type,
      props: { autoFocus: !useKeepEdit, ...childrenProps },
      dictName: props.editableConfig.dictName,
      // renderChildren: props.editableConfig.renderChildren,
      form: context?.editable?.tableEditable?.form,
      dataIndex,
      rowIndex,
    }); /*render
      ? render({
          value: record?.[dataIndex as string],
          record,
          dataIndex,
          rowIndex,
          form: context?.editable?.tableEditable?.form as FormInstance,
          children: formItemNode,
        })
      : formItemNode;*/
  }

  const targetRules = useMemo(() => {
    if (Util.isFunction(rules)) {
      return (rules as Function)({
        record,
        value,
        rowIndex,
        dataIndex,
      });
    }

    return rules;
  }, [rules, record, value, rowIndex, dataIndex]);

  useEffect(() => {
    context?.editable?.tableEditable?.form?.setFieldValue(
      namePath,
      // @ts-ignore
      context?.context?.valueToFormItemValue?.({
        type,
        record,
        dataIndex: dataIndex as string,
      }),
    );
  }, [context?.context?.getData()]);

  // useEffect(() => {
  //   context?.editable?.tableEditable?.form?.setFieldValue(
  //     namePath,
  //     // @ts-ignore
  //     context?.context?.valueToFormItemValue?.({
  //       type,
  //       record,
  //       dataIndex: dataIndex as string,
  //     }),
  //   );
  // }, [record?.[dataIndex as string]]);

  return (
    <div className={`${selectorPrefix}-editable-cell-edit`}>
      <div className={`${selectorPrefix}-editable-cell-edit-inner`}>
        <Form.Item
          // initialValue={record[dataIndex as string]}
          name={nameItemPath}
          rules={targetRules}
          {...(formItemProps ?? {})}
        >
          {type !== 'custom'
            ? renderFormItem()
            : render?.({
                value: record?.[dataIndex as string],
                record,
                dataIndex,
                rowIndex,
                form: context?.editable?.tableEditable?.form as FormInstance,
              })}
        </Form.Item>
      </div>

      <ConditionalRender conditional={!!useTrigger && !useKeepEdit}>
        {() => (
          <div className={`${selectorPrefix}-editable-cell-edit-trigger`}>
            <div className={`${selectorPrefix}-editable-cell-edit-trigger-inner`}>
              <div
                className={`${selectorPrefix}-editable-cell-edit-trigger-save`}
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
                className={`${selectorPrefix}-editable-cell-edit-trigger-cancel`}
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

EditableTableCellEdit.displayName = 'EditableTableCellEdit';

export default EditableTableCellEdit;
