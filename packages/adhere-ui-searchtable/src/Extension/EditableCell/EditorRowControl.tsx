import { FormInstance } from 'antd/es/form';
import classNames from 'classnames';
import React, { FC, useCallback, useContext } from 'react';

import ConditionalRender from '@baifendian/adhere-ui-conditionalrender';
import Intl from '@baifendian/adhere-util-intl';

import { selectorPrefix } from '../../SearchTable';
import { EditorRowControlProps } from '../../types';
import { EditableContext } from './EditableRow';

/**
 * EditorRowControl
 * @description 编辑行的控制器
 * @param record
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
  record,
  rowKey,
  editorRowId,
  onEditor,
  onSave,
}) => {
  const form = useContext<FormInstance | null>(EditableContext);

  const renderDefaultSave = useCallback(() => <a>{Intl.v('保存')}</a>, []);

  const renderDefaultEditorRow = useCallback(() => <a>{Intl.v('编辑行')}</a>, []);

  return (
    <div
      className={classNames(`${selectorPrefix}-editor-row-control`, className)}
      style={styles || {}}
    >
      <ConditionalRender
        conditional={editorRowId !== record[rowKey]}
        noMatch={() => (
          <div
            onClick={() => {
              form?.validateFields().then((values) => onSave?.(values));
            }}
          >
            {renderSave ? renderSave() : renderDefaultSave()}
          </div>
        )}
      >
        {() => (
          <div onClick={() => onEditor?.(record[rowKey])}>
            {renderEditorRow ? renderEditorRow() : renderDefaultEditorRow()}
          </div>
        )}
      </ConditionalRender>
    </div>
  );
};

export default EditorRowControl;
