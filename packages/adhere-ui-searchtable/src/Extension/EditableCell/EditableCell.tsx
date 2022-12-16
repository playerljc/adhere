import React, { FC, useEffect, useMemo, useState } from 'react';

import { ColumnEditableConfig, EditableCellProps } from '../../types';
import EditableCellEdit from './Edit';
import EditableCellView from './View';

/**
 * EditableCell
 * @description 单元格编辑
 */
const EditableCell: FC<EditableCellProps> = (props) => {
  const { record, column, rowIndex, columns, $context, ...restProps } = props;

  /**
   * defaultConfig
   * @description 缺省的单元格配置
   */
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

  /**
   * editableConfig
   * @description 实际的单元格配置
   */
  const editableConfig: ColumnEditableConfig = useMemo(
    () => ({ ...defaultConfig, ...(column?.$editable || {}) }),
    [column, column?.dataIndex],
  );

  /**
   * status
   * @description 单元格的状态
   */
  const [status, setStatus] = useState<'view' | 'edit' | string>(
    editableConfig.defaultStatus as string,
  );

  /**
   * 数据改变则切换成查看状态
   */
  useEffect(() => setStatus('view'), [$context?.getData()]);

  /**
   * 缺省状态改变切换到缺省状态
   */
  useEffect(() => {
    setStatus(editableConfig?.defaultStatus as string);
  }, [editableConfig?.defaultStatus]);

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
