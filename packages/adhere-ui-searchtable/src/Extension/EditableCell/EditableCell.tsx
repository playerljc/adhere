// import { useLatest } from 'ahooks';
import type { FormInstance } from 'antd/es/form';
import React, { useContext, useEffect, useMemo, useState } from 'react';

import Util from '@baifendian/adhere-util';
import Emitter from '@baifendian/adhere-util-emitter';

import { CELL_ACTIVE } from '../../Constant';
import type SearchTable from '../../SearchTable';
import { SearchTableContext } from '../../SearchTable';
import { createChildren } from '../../Util';
import type { ColumnEditableConfig, TableCellComponentReducer } from '../../types';
import EditableCellEdit from './Edit/EditableCellEdit';
import EditableCellView from './View';

/**
 * EditableCell
 * @description 单元格编辑
 */
const EditableCell: TableCellComponentReducer = (props) => {
  const { column, rowIndex, record } = props;

  // const validateAllEditableRowCB = useRef<((rowIndex: number, dataIndex: string) => void) | null>(
  //   null,
  // );

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

  // const columnLatest = useLatest(column);

  // const rowIndexLatest = useLatest(rowIndex);

  /**
   * editableConfig
   * @description 实际的单元格配置
   */
  const editableConfig: ColumnEditableConfig = useMemo(
    () => ({ ...defaultConfig, ...(column?.$editable ?? {}) }),
    [column, column?.dataIndex],
  );

  // const editableConfigLatest = useLatest(editableConfig);

  /**
   * status
   * @description 单元格的状态 edit激活状态 view查看状态
   */
  const [status, setStatus] = useState<'view' | 'edit' | string>(
    editableConfig.defaultStatus as string,
  );

  // const statusLatest = useLatest(status);

  const context = useContext<{
    context: SearchTable;
    editable?: {
      tableEditable?: {
        form?: FormInstance;
      };
    };
  } | null>(SearchTableContext);

  /**
   * 数据改变则切换成查看状态
   * 当前单元格数据变了变成查看状态
   */
  useEffect(() => {
    const dataSource = context?.context?.getData();

    const preValue = record?.[column?.dataIndex];
    const currentValue = dataSource?.[rowIndex]?.[column?.dataIndex];

    // 如果之前的值和当前数据不一致则切换成查看状态
    if (preValue !== currentValue) {
      setStatus(editableConfig?.defaultStatus as string);
    }
  }, [context?.context?.getData()]);

  /**
   * 缺省状态改变切换到缺省状态
   */
  useEffect(() => {
    setStatus(editableConfig?.defaultStatus as string);
  }, [editableConfig?.defaultStatus]);

  /**
   * 监听单元格激活状态
   */
  useEffect(() => {
    function onActiveCells(params: { rowId: string; dataIndex: string }[]) {
      if (params.find((item) => item.rowId === record.id && item.dataIndex === column.dataIndex)) {
        setStatus('edit');
      } else {
        setStatus('view');
      }
    }

    Emitter.on(CELL_ACTIVE, onActiveCells);

    return () => {
      Emitter.remove(CELL_ACTIVE, onActiveCells);
    };
  }, [column, record]);

  // useUpdateEffect(() => {
  //   if (statusLatest.current === 'edit' && validateAllEditableRowCB.current) {
  //     validateAllEditableRowCB.current(rowIndex, column.dataIndex);
  //   }
  // }, [status]);

  // useEffect(() => {
  //   function onValidateAllEditableRow(_validateAllEditableRowCB) {
  //     if (!editableConfigLatest.current.editable) return;
  //
  //     if (editableConfigLatest.current.useKeepEdit) return;
  //
  //     if (statusLatest.current !== 'edit') {
  //       validateAllEditableRowCB.current = _validateAllEditableRowCB;
  //       setStatus('edit');
  //     } else {
  //       _validateAllEditableRowCB(rowIndexLatest.current, columnLatest.current.dataIndex);
  //     }
  //   }
  //
  //   function onValidateEditableRow() {}
  //
  //   Emitter.on(VALIDATE_ALL_EDITABLE_ROW, onValidateAllEditableRow);
  //   Emitter.on(VALIDATE_EDITABLE_ROW, onValidateEditableRow);
  //
  //   return () => {
  //     Emitter.remove(VALIDATE_ALL_EDITABLE_ROW, onValidateAllEditableRow);
  //     Emitter.remove(VALIDATE_EDITABLE_ROW, onValidateEditableRow);
  //     validateAllEditableRowCB.current = null;
  //   };
  // }, []);

  return (tdREL: React.ReactElement<any>) => {
    let res = tdREL;

    let editable;

    if (Util.isFunction(editableConfig.editable)) {
      editable = (editableConfig.editable as Function)(record, rowIndex);
    } else {
      editable = editableConfig.editable;
    }

    // 单元格不是可编辑的单元格
    if (!editable) {
      res = tdREL;
    }
    // 始终保持编辑状态
    else if (editableConfig.useKeepEdit) {
      res = React.cloneElement(
        tdREL,
        tdREL.props,
        createChildren(
          tdREL,
          <EditableCellEdit
            {...props}
            editableConfig={editableConfig}
            onTriggerChange={() => {
              // @ts-ignore
              // context?.context?.setActiveValue?.('');
              setStatus('view');
            }}
          />,
        ),
      );
    }
    // 查看状态
    else if (status === 'view') {
      res = React.cloneElement(
        tdREL,
        tdREL.props,
        <EditableCellView
          {...props}
          editableConfig={editableConfig}
          onTriggerChange={() => {
            // context?.context
            //   // @ts-ignore
            //   ?.setActiveValue?.(props.record[props.column.dataIndex as string]);
            setStatus('edit');
          }}
        />,
      );
    }
    // 编辑状态
    else if (status === 'edit') {
      res = React.cloneElement(
        tdREL,
        tdREL.props,
        createChildren(
          tdREL,
          <EditableCellEdit
            {...props}
            editableConfig={editableConfig}
            onTriggerChange={() => {
              // @ts-ignore
              // context?.context?.setActiveValue?.('');
              setStatus('view');
            }}
          />,
        ),
      );
    }

    return res;
  };
};

export default EditableCell;
