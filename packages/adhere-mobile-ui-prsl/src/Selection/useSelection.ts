import { useLatest, useUpdateEffect } from 'ahooks';
import difference from 'lodash.difference';
import { useMemo, useState } from 'react';

import type { ModeType } from '../types';

const DEFAULT_SELECTION_MULTIPLE = true;

export type SelectionRowKey = string | number;

export type SelectionChangeInfo = {
  type: 'select' | 'unselect';
};

export type SelectionFinishResult = {
  selectedRowKeys: SelectionRowKey[];
  selectedRows: Record<string, any>[];
  changeRowKeys: SelectionRowKey[];
  info: SelectionChangeInfo;
};

export type UseSelectionParams = {
  selectedRowKeys?: SelectionRowKey[];
  selectionMultiple?: boolean;
  mode: ModeType;
  dataSource: Record<string, any>[];
  rowKey: string;
};

export default function UseSelection({
  selectedRowKeys,
  selectionMultiple,
  mode,
  dataSource,
  rowKey,
}: UseSelectionParams) {
  const [targetSelectedRowKeys, setTargetSelectedRowKeys] = useState<SelectionRowKey[]>(
    selectedRowKeys ?? [],
  );

  const [optionSelectedRowKeys, setOptionSelectedRowKeys] = useState<SelectionRowKey[]>(
    selectedRowKeys ?? [],
  );

  const targetSelectedRowKeysRef = useLatest(targetSelectedRowKeys);

  const optionSelectedRowKeysRef = useLatest(optionSelectedRowKeys);

  const isUseSelectionMode = useMemo(() => mode === 'selection', [mode]);

  const isSelectionMultiple = useMemo(
    () => selectionMultiple ?? DEFAULT_SELECTION_MULTIPLE,
    [selectionMultiple],
  );

  const finish = (): SelectionFinishResult => {
    const _preSelectedRowKeys = [...targetSelectedRowKeysRef.current];
    const _targetSelectedRowKeys = [...optionSelectedRowKeysRef.current];

    setTargetSelectedRowKeys(_targetSelectedRowKeys);

    const removed = difference(_preSelectedRowKeys, _targetSelectedRowKeys);

    const added = difference(_targetSelectedRowKeys, _preSelectedRowKeys);

    return {
      selectedRowKeys: _targetSelectedRowKeys,
      selectedRows: _targetSelectedRowKeys.map(
        (_id) =>
          dataSource.find((r) => r?.[rowKey] === _id) as Record<string, any>,
      ),
      changeRowKeys: [...(removed ?? []), ...(added ?? [])],
      info: {
        type: (added ?? []).length ? 'select' : 'unselect',
      },
    };
  };

  const cancel = () => {
    setOptionSelectedRowKeys([...targetSelectedRowKeysRef.current]);
  };

  function selectionChange(_checked: boolean, _id: SelectionRowKey) {
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

  function selectionAllChange(_checkAll: boolean) {
    setOptionSelectedRowKeys(() => {
      if (_checkAll) {
        return [...dataSource.map((t) => t[rowKey] as SelectionRowKey)];
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
