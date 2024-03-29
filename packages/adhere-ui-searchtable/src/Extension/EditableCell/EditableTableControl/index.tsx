import type { FormInstance, FormListFieldData, FormListOperation } from 'antd/es/form';
import classNames from 'classnames';
import type { FC, ReactNode } from 'react';
import React, { useCallback, useContext } from 'react';

import ConditionalRender from '@baifendian/adhere-ui-conditionalrender';
import Intl from '@baifendian/adhere-util-intl';

import type SearchEditableTable from '../../../Editable/SearchEditableTable';
import type SearchTable from '../../../SearchTable';
import { SearchTableContext, selectorPrefix } from '../../../SearchTable';
import type { EditorTableControlProps } from '../../../types';

/**
 * EditableTableControl
 * @description 编辑表格的控制器
 * @param className
 * @param styles
 * @param renderEditorTable
 * @param renderSave
 * @param renderCancel
 * @param rowKey
 * @param onEditor
 * @param onSave
 */

const EditableTableControl: FC<EditorTableControlProps> = ({
  className,
  styles,
  renderEditorTable,
  renderSave,
  renderCancel,
  onEditor,
  onSave,
}) => {
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

  const renderDefaultSave = useCallback(() => <a>{Intl.v('保存')}</a>, []);

  const renderDefaultCancel = useCallback(() => <a>{Intl.v('取消')}</a>, []);

  const renderDefaultEditorTable = useCallback(() => <a>{Intl.v('编辑表格')}</a>, []);

  const validateFieldsSuccess = useCallback((values) => {
    if (onSave) {
      return onSave(values.dataSource).then(() => updateEditorCellTableData(values.dataSource));
    }

    return updateEditorCellTableData(values.dataSource);
  }, []);

  const _onEditor = useCallback(() => {
    if (onEditor) {
      onEditor?.()?.then(() => updateTableEdit());

      return;
    }

    updateTableEdit();
  }, []);

  const updateEditorCellTableData = (changeData) =>
    // @ts-ignore
    (context?.context as SearchEditableTable<any, any>)
      ?.updateEditorData(changeData)
      ?.then(() => reset());

  const updateTableEdit = () => {
    // @ts-ignore
    context?.context?.setFieldValues?.(context?.context?.getData());

    // @ts-ignore
    context?.context?.setState({
      isTableEditor: true,
    });
  };

  /**
   * reset
   * @description 取消
   */
  const reset = () =>
    // @ts-ignore
    context?.context?.setState({
      isTableEditor: false,
    });

  return (
    <div
      className={classNames(`${selectorPrefix}-editor-table-control`, className)}
      style={styles ?? {}}
    >
      <ConditionalRender
        conditional={!context?.context.state.isTableEditor}
        noMatch={() => (
          <div className={`${selectorPrefix}-editor-table-control-save-cancel`}>
            {/* 保存 */}
            <div
              className={`${selectorPrefix}-editor-table-control-save-cancel-item`}
              onClick={() =>
                context?.editable?.tableEditable?.form?.validateFields()?.then?.((values) => {
                  return validateFieldsSuccess(values);
                })
              }
            >
              <ConditionalRender conditional={!renderSave} noMatch={() => renderSave?.()}>
                {() => renderDefaultSave()}
              </ConditionalRender>
            </div>

            {/* 取消 */}
            <div
              className={`${selectorPrefix}-editor-table-control-save-cancel-item`}
              onClick={reset}
            >
              <ConditionalRender conditional={!renderCancel} noMatch={() => renderCancel?.()}>
                {() => renderDefaultCancel()}
              </ConditionalRender>
            </div>
          </div>
        )}
      >
        {/* 编辑表格 */}
        {() => (
          <div className={`${selectorPrefix}-editor-table-control-edit`} onClick={_onEditor}>
            <ConditionalRender
              conditional={!renderEditorTable}
              noMatch={() => renderEditorTable?.()}
            >
              {() => renderDefaultEditorTable()}
            </ConditionalRender>
          </div>
        )}
      </ConditionalRender>
    </div>
  );
};

export default EditableTableControl;
