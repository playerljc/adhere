import { FormInstance, FormListFieldData, FormListOperation } from 'antd/es/form';
import React, { ReactElement, ReactNode, useContext, useEffect, useMemo, useState } from 'react';

import SearchTable, { SearchTableContext } from '../../SearchTable';
import { ColumnEditableConfig, TableCellComponentReducer } from '../../types';
import EditableTableCellEdit from './Edit/EditableTableCellEdit';
import EditableCellView from './View';

/**
 * EditableTableCell
 * @description 单元格编辑
 */
const EditableTableCell: TableCellComponentReducer = (props) => {
  const { column } = props;

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

  /**
   * 数据改变则切换成查看状态
   */
  useEffect(() => setStatus('view'), [context?.context?.getData()]);

  /**
   * 缺省状态改变切换到缺省状态
   */
  useEffect(() => {
    setStatus(editableConfig?.defaultStatus as string);
  }, [editableConfig?.defaultStatus]);

  return (tdREL: ReactElement) => {
    let res = tdREL;

    // 单元格不是可编辑的单元格
    if (!editableConfig.editable) {
      res = tdREL;
    }

    // 始终保持编辑状态
    else if (editableConfig.useKeepEdit) {
      res = React.cloneElement(tdREL, tdREL.props, [
        <EditableTableCellEdit
          {...props}
          editableConfig={editableConfig}
          onTriggerChange={() => setStatus('view')}
        />,
      ]);
    }

    // 查看状态
    else if (status === 'view') {
      res = React.cloneElement(tdREL, tdREL.props, [
        <EditableCellView
          {...props}
          editableConfig={editableConfig}
          onTriggerChange={() => setStatus('edit')}
        />,
      ]);
    }

    // 编辑状态
    else if (status === 'edit') {
      res = React.cloneElement(tdREL, tdREL.props, [
        <EditableTableCellEdit
          {...props}
          editableConfig={editableConfig}
          onTriggerChange={() => setStatus('view')}
        />,
      ]);
    }

    return res;
  };
};

export default EditableTableCell;
