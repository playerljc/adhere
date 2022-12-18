import { FormInstance } from 'antd/es/form';
import classNames from 'classnames';
import React, { FC, useCallback, useContext } from 'react';

import ConditionalRender from '@baifendian/adhere-ui-conditionalrender';
import Intl from '@baifendian/adhere-util-intl';

import SearchEditorRowTable from '../../../SearchEditorRowTable';
import { selectorPrefix } from '../../../SearchTable';
import SearchTable, { SearchTableContext } from '../../../SearchTable';
import { EditorRowControlProps } from '../../../types';
import { EditableContext } from '../EditableRow';

/**
 * EditorRowControl
 * @description 编辑行的控制器
 * @param record
 * @param renderCancel
 * @param onEditor
 * @param onSave
 * @param editorRowId
 * @param rowKey
 * @param className
 * @param styles
 * @param renderEditorRow
 * @param renderSave
 * @returns {JSX.Element}
 * @constructor
 */
const EditorRowControl: FC<EditorRowControlProps> = ({
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
  const form = useContext<FormInstance | null>(EditableContext);

  const renderDefaultSave = useCallback(() => <a>{Intl.v('保存')}</a>, []);

  const renderDefaultCancel = useCallback(() => <a>{Intl.v('取消')}</a>, []);

  const renderDefaultEditorRow = useCallback(() => <a>{Intl.v('编辑行')}</a>, []);

  const context = useContext<SearchTable | null>(SearchTableContext);

  const validateFieldsSuccess = useCallback((values) => {
    if (onSave) {
      onSave(values).then(() => updateEditorCellRowData(values));
      return;
    }

    updateEditorCellRowData(values);
  }, []);

  const _onEditor = useCallback(() => {
    if (onEditor) {
      onEditor?.(record[rowKey])?.then(() => updateRowEdit());

      return;
    }

    updateRowEdit();
  }, []);

  const updateEditorCellRowData = (values) =>
    (context as SearchEditorRowTable<any, any>)
      ?.updateEditorCellRowData({ values, record })
      ?.then(() => reset());

  const reset = () =>
    context?.setState({
      editorRowId: '',
    });

  const updateRowEdit = () =>
    context?.setState({
      editorRowId: record[rowKey],
    });

  return (
    <div
      className={classNames(`${selectorPrefix}-editor-row-control`, className)}
      style={styles || {}}
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
          <div onClick={_onEditor}>
            <ConditionalRender conditional={!renderEditorRow} noMatch={() => renderEditorRow?.()}>
              {() => renderDefaultEditorRow()}
            </ConditionalRender>
          </div>
        )}
      </ConditionalRender>
    </div>
  );
};

export default EditorRowControl;
