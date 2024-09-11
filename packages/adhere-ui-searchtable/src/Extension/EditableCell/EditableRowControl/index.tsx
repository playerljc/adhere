import type { FormInstance, FormListFieldData, FormListOperation } from 'antd/es/form';
import classNames from 'classnames';
import type { FC, ReactNode } from 'react';
import React, { useCallback, useContext } from 'react';

import ConditionalRender from '@baifendian/adhere-ui-conditionalrender';
import Intl from '@baifendian/adhere-util-intl';

import type SearchEditableRowTable from '../../../Editable/SearchEditableRowTable';
import type SearchTable from '../../../SearchTable';
import { SearchTableContext, selectorPrefix } from '../../../SearchTable';
import type { EditorRowControlProps } from '../../../types';
import { EditableContext } from '../EditableRow';

/**
 * EditableRowControl
 * @description 编辑行的控制器
 * @param record
 * @param renderCancel
 * @param onEditor
 * @param onSave
 * @param editorRowId
 * @param rowKey
 * @param className
 * @param styles
 * @param renderEditableRow
 * @param renderSave
 * @returns {JSX.Element}
 * @constructor
 */
const EditableRowControl: FC<EditorRowControlProps> = ({
  className,
  styles,
  renderEditorRow,
  renderSave,
  renderCancel,
  record,
  rowKey,
  editorRowId,
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

  const form = useContext<FormInstance | null>(EditableContext);

  const renderDefaultSave = useCallback(() => <a>{Intl.v('保存')}</a>, []);

  const renderDefaultCancel = useCallback(() => <a>{Intl.v('取消')}</a>, []);

  const renderDefaultEditorRow = useCallback(() => <a>{Intl.v('编辑行')}</a>, []);

  const validateFieldsSuccess = useCallback((values) => {
    if (onSave) {
      return onSave(values).then(() => updateEditorCellRowData(values));
    }

    return updateEditorCellRowData(values);
  }, []);

  const _onEditor = useCallback(() => {
    if (onEditor) {
      onEditor?.(record[rowKey])?.then(() => updateRowEdit());

      return;
    }

    updateRowEdit();
  }, []);

  const updateEditorCellRowData = (values) =>
    // @ts-ignore
    (context?.context as SearchEditableRowTable<any, any>)
      ?.updateEditorCellRowData({ values, record })
      ?.then(() => reset());

  const reset = () =>
    // @ts-ignore
    context?.context?.setState({
      editorRowId: '',
    });

  const updateRowEdit = () =>
    // @ts-ignore
    context?.context?.setState({
      editorRowId: record[rowKey],
    });

  return (
    <div
      className={classNames(`${selectorPrefix}-editor-row-control`, className)}
      style={styles ?? {}}
    >
      <ConditionalRender
        conditional={editorRowId !== record[rowKey]}
        noMatch={() => (
          <div className={`${selectorPrefix}-editor-row-control-save-cancel`}>
            <div
              className={`${selectorPrefix}-editor-row-control-save-cancel-item`}
              onClick={() => form?.validateFields().then((values) => validateFieldsSuccess(values))}
            >
              <ConditionalRender conditional={!renderSave} noMatch={() => renderSave?.()}>
                {() => renderDefaultSave()}
              </ConditionalRender>
            </div>

            <div
              className={`${selectorPrefix}-editor-row-control-save-cancel-item`}
              onClick={reset}
            >
              <ConditionalRender conditional={!renderCancel} noMatch={() => renderCancel?.()}>
                {() => renderDefaultCancel()}
              </ConditionalRender>
            </div>
          </div>
        )}
      >
        {/* 编辑行 */}
        {() => (
          <div className={`${selectorPrefix}-editor-row-control-edit`} onClick={_onEditor}>
            <ConditionalRender conditional={!renderEditorRow} noMatch={() => renderEditorRow?.()}>
              {() => renderDefaultEditorRow()}
            </ConditionalRender>
          </div>
        )}
      </ConditionalRender>
    </div>
  );
};

EditableRowControl.displayName = 'EditableRowControl';

export default EditableRowControl;
