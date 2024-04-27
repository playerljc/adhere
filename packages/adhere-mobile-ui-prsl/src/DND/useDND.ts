import { useUpdateEffect } from 'ahooks';
import { arrayMoveImmutable } from 'array-move';
import { useMemo, useState } from 'react';

import type { DNDChangeValue } from '../types';

/**
 * UseDND
 * @param mode
 * @param dataSource
 * @param reset
 * @param rowKey
 * @param total
 * @constructor
 */
export default function UseDND({ mode, dataSource, reset, rowKey, total }) {
  const [optionDataSource, setOptionDataSource] = useState([...(dataSource ?? [])]);

  const isUseDNDMode = useMemo(() => mode === 'dnd', [mode]);

  function finish() {
    return optionDataSource.reduce<DNDChangeValue>((result, optionRecord, _index) => {
      const preValue = dataSource[_index][rowKey];
      const currentValue = optionRecord[rowKey];

      if (preValue !== currentValue) {
        result.push({
          preValue,
          currentValue,
        });
      }

      return result;
    }, []);
  }

  function cancel() {
    setOptionDataSource([...(dataSource ?? [])]);
    reset();
  }

  function move({ oldIndex, newIndex }) {
    setOptionDataSource((_optionDataSource) =>
      arrayMoveImmutable(_optionDataSource, oldIndex, newIndex),
    );
  }

  useUpdateEffect(() => {
    setOptionDataSource([...(dataSource ?? [])]);
  }, [dataSource]);

  return {
    optionDataSource: {
      data: optionDataSource,
      total,
    },
    isUseDNDMode,
    finish,
    cancel,
    move,
  };
}
