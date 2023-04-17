import { Form } from 'antd';
import type { FormInstance, FormListFieldData, FormListOperation } from 'antd/es/form';
import type { FC, ReactNode } from 'react';
import React, { useContext, useEffect } from 'react';

import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
import ConditionalRender from '@baifendian/adhere-ui-conditionalrender';

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

  console.log('record', rowIndex, nameItemPath, record.name);

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
    const formItemNode = FormItemGenerator.render({
      type,
      props: { autoFocus: !useKeepEdit, ...props.editableConfig.props },
      dictName: props.editableConfig.dictName,
      renderChildren: props.editableConfig.renderChildren,
      form: context?.editable?.tableEditable?.form,
      dataIndex,
      rowIndex,
    });

    return formItemNode; /*render
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
                form: context?.editable?.tableEditable?.form as FormInstance,
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
