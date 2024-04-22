import { useUpdateEffect } from 'ahooks';
import difference from 'lodash.difference';
import { useMemo, useState } from 'react';

const DEFAULT_SELECTION_MULTIPLE = true;

export default function UseSelection({
  selectedRowKeys,
  selectionMultiple,
  mode,
  dataSource,
  rowKey,
}) {
  const [targetSelectedRowKeys, setTargetSelectedRowKeys] = useState(selectedRowKeys ?? []);

  const [optionSelectedRowKeys, setOptionSelectedRowKeys] = useState(selectedRowKeys ?? []);

  const isUseSelectionMode = useMemo(() => mode === 'selection', [mode]);

  const isSelectionMultiple = useMemo(
    () => selectionMultiple ?? DEFAULT_SELECTION_MULTIPLE,
    [selectionMultiple],
  );
  function finish() {
    const _preSelectedRowKeys = [...targetSelectedRowKeys];
    const _targetSelectedRowKeys = [...optionSelectedRowKeys];

    setTargetSelectedRowKeys(_targetSelectedRowKeys);

    const removed = difference(_preSelectedRowKeys, _targetSelectedRowKeys);

    const added = difference(_targetSelectedRowKeys, _preSelectedRowKeys);

    return {
      selectedRowKeys: _targetSelectedRowKeys,
      selectedRows: _targetSelectedRowKeys.map(
        (_id) => dataSource.find((r) => (r as any)?.[rowKey] === _id) as Record<string, any>,
      ),
      changeRowKeys: [...(removed ?? []), ...(added ?? [])],
      info: {
        type: (added ?? []).length ? 'select' : 'unselect',
      },
    };
  }

  function cancel() {
    setOptionSelectedRowKeys([...targetSelectedRowKeys]);
  }

  function selectionChange(_checked, _id) {
    setOptionSelectedRowKeys((_optionSelectedRowKeys) => {
      if (_checked) {
        if (isSelectionMultiple) {
          return [..._optionSelectedRowKeys, _id];
        } else {
          return [_id];
        }
      } else {
        if (isSelectionMultiple) {
          return _optionSelectedRowKeys.filter((_v) => _v !== _id);
        } else {
          return [];
        }
      }
    });
  }

  function selectionAllChange(_checkAll) {
    setOptionSelectedRowKeys((_optionSelectedRowKeys) => {
      if (_checkAll) {
        return [...dataSource.map((t) => t[rowKey])];
      } else {
        return [];
      }
    });
  }

  useUpdateEffect(() => {
    setTargetSelectedRowKeys(selectedRowKeys ?? []);
    setOptionSelectedRowKeys(selectedRowKeys ?? []);
  }, [selectedRowKeys]);

  return {
    optionSelectedRowKeys,
    targetSelectedRowKeys,
    isUseSelectionMode,
    isSelectionMultiple,
    selectionChange,
    selectionAllChange,
    finish,
    cancel,
  };
}
