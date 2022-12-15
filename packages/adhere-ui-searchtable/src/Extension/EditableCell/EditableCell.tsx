import React, { FC, useEffect, useMemo, useState } from 'react';

import SearchTable from '../../SearchTable';
import { ColumnEditableConfig, ColumnTypeExt, EditableCellProps } from '../../types';
import EditableCellEdit from './Edit';
import EditableCellView from './View';

/**
 * EditableCell
 * @description 单元格编辑
 */
const EditableCell: FC<EditableCellProps> = (props) => {
  const { record, column, rowIndex, columns, $context, ...restProps } = props;

  const defaultConfig = {
    editable: false,
    defaultStatus: 'view',
    type: 'input',
    props: {},
    formItemProps: {},
    useTrigger: true,
    require: true,
    dataIndex: column?.dataIndex,
    useKeepEdit: false,
  };

  const editableConfig: ColumnEditableConfig = useMemo(
    () => ({ ...defaultConfig, ...(column?.$editable || {}) }),
    [column, column?.dataIndex],
  );

  const [status, setStatus] = useState<'view' | 'edit' | string>(
    editableConfig.defaultStatus as string,
  );

  useEffect(() => setStatus(editableConfig.defaultStatus as string), [$context?.getData()]);

  // 单元格不是可编辑的单元格
  if (!editableConfig.editable) {
    return <td {...(restProps || {})}>{restProps?.children}</td>;
  }

  // 始终保持编辑状态
  if (editableConfig.useKeepEdit) {
    return (
      <td {...(restProps || {})}>
        <EditableCellEdit
          {...props}
          editableConfig={editableConfig}
          onTriggerChange={() => setStatus('view')}
        />
      </td>
    );
  }

  // 查看状态
  if (status === 'view') {
    return (
      <td {...(restProps || {})}>
        <EditableCellView
          {...props}
          editableConfig={editableConfig}
          onTriggerChange={() => setStatus('edit')}
        />
      </td>
    );
  }

  // 编辑状态
  if (status === 'edit') {
    return (
      <td {...(restProps || {})}>
        <EditableCellEdit
          {...props}
          editableConfig={editableConfig}
          onTriggerChange={() => setStatus('view')}
        />
      </td>
    );
  }

  // default
  return <td {...(restProps || {})}>{restProps?.children}</td>;
};

export default EditableCell;
