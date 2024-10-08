import { Form } from 'antd';
import type { FormInstance, FormListFieldData, FormListOperation } from 'antd/es/form';
import dayjs from 'dayjs';
import type { FC, ReactNode } from 'react';
import React, { useContext, useEffect, useMemo } from 'react';

import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
import ConditionalRender from '@baifendian/adhere-ui-conditionalrender';
import Util from '@baifendian/adhere-util';

import type SearchTable from '../../../SearchTable';
import { SearchTableContext, selectorPrefix } from '../../../SearchTable';
import type { EditableCellEditProps } from '../../../types';
import { EditableContext } from '../EditableRow';
import EventTypes from '../EventTypes';
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

  const value = Form.useWatch(dataIndex as string, form as FormInstance);

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
    if (onSave) {
      form?.validateFields().then((values) => {
        onSave({
          value,
          values,
          record,
          dataIndex,
          rowIndex,
        })?.then(() => onTriggerChange?.());
      });

      return;
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

  /**
   * updateEditorCellData
   * @description 更新单元格的值
   */
  function updateEditorCellData() {
    if (value instanceof dayjs) {
      // @ts-ignore
      return context?.context?.updateEditorCellDateData({
        record,
        dataIndex,
        value,
      });
    }

    // @ts-ignore
    return context?.context?.updateEditorCellDate({
      record,
      dataIndex,
      value,
    });
  }

  /**
   * renderFormItem
   */
  function renderFormItem() {
    const childrenProps = Util.isFunction(props.editableConfig.props)
      ? (props.editableConfig.props as Function)({ record, dataIndex, rowIndex }) ?? {}
      : props.editableConfig.props ?? {};

    const formItemNodeProps = {
      autoFocus: !useKeepEdit,
      ...childrenProps,
      ...EventTypes.reduce<Record<string, Function>>((eventCombination, eventType) => {
        eventCombination[eventType] = (e: any) => {
          if (childrenProps[eventType]) {
            childrenProps[eventType](e, {
              form,
              dataIndex,
              rowIndex,
              updateEditorCellData: () => updateEditorCellData(),
            });
          }
        };
        return eventCombination;
      }, {}),
    };

    const formItemNode = FormItemGenerator.render({
      type,
      props: formItemNodeProps,
      dictName: props.editableConfig.dictName,
      // renderChildren: props.editableConfig.renderChildren,
      form,
      dataIndex,
      rowIndex,
    });

    return render
      ? render({
          value: record?.[dataIndex as string],
          record,
          dataIndex,
          rowIndex,
          form,
          updateEditorCellData: () => updateEditorCellData(),
          children: formItemNode,
        })
      : formItemNode;
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
    form?.setFieldValue(
      dataIndex as string,
      // @ts-ignore
      context?.context?.valueToFormItemValue({
        type,
        record,
        dataIndex,
      }),
    );
  }, [context?.context?.getData()]);

  // useEffect(() => {
  //   form?.setFieldValue(
  //     dataIndex as string,
  //     // @ts-ignore
  //     context?.context?.valueToFormItemValue({
  //       type,
  //       record,
  //       dataIndex,
  //     }),
  //   );
  // }, [record?.[dataIndex as string]]);

  return (
    <div className={`${selectorPrefix}-editable-cell-edit`}>
      <div className={`${selectorPrefix}-editable-cell-edit-inner`}>
        <Form.Item
          // initialValue={record[dataIndex as string]}
          name={dataIndex as string}
          rules={targetRules ?? []}
          {...(formItemProps ?? {})}
        >
          {type !== 'custom'
            ? renderFormItem()
            : render?.({
                value: record?.[dataIndex as string],
                record,
                dataIndex,
                rowIndex,
                form,
                updateEditorCellData: () => updateEditorCellData(),
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

EditableCellEdit.displayName = 'EditableCellEdit';

export default EditableCellEdit;
