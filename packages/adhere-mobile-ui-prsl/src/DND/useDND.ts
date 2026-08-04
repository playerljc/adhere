import { useLatest, useUpdateEffect } from 'ahooks';
import { arrayMoveImmutable } from 'array-move';
import { useMemo, useState } from 'react';

import type { DNDChangeValue, ModeType } from '../types';

export type UseDNDParams = {
  mode: ModeType;
  dataSource: Record<string, any>[];
  reset: () => void;
  rowKey: string;
  total: number;
};

export type DNDMoveParams = {
  oldIndex: number;
  newIndex: number;
};

/**
 * UseDND
 * @param mode
 * @param dataSource
 * @param reset
 * @param rowKey
 * @param total
 * @constructor
 */
export default function UseDND({ mode, dataSource, reset, rowKey, total }: UseDNDParams) {
  const [optionDataSource, setOptionDataSource] = useState<Record<string, any>[]>([
    ...(dataSource ?? []),
  ]);

  const optionDataSourceRef = useLatest(optionDataSource);

  const dataSourceRef = useLatest(dataSource);

  const isUseDNDMode = useMemo(() => mode === 'dnd', [mode]);

  const finish = () => {
    return optionDataSourceRef?.current?.reduce<DNDChangeValue>((result, optionRecord, _index) => {
      const preValue = dataSourceRef.current[_index][rowKey];
      const currentValue = optionRecord[rowKey];

      if (preValue !== currentValue) {
        result.push({
          preValue,
          currentValue,
        });
      }

      return result;
    }, []);
  };

  const cancel = () => {
    setOptionDataSource([...(dataSourceRef.current ?? [])]);
    reset();
  };

  function move({ oldIndex, newIndex }: DNDMoveParams) {
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
