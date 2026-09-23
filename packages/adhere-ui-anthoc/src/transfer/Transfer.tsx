import { Transfer } from 'antd';
import React, { useMemo } from 'react';

import { TransferHOCComponent, TransferHOCProps } from '../types';
import { createFactory, getTransferValue } from '../util';

const InternalTransfer: TransferHOCComponent = createFactory<TransferHOCProps>(Transfer, {});

const TransferHOC: TransferHOCComponent = createFactory(
  ({
    dataSource,
    selectedKeys,
    targetKeys,
    value,
    lockedKeys,
    isHideInvalidValue = true,
    onChange,
    ...resetProps
  }: TransferHOCProps) => {
    const mergedTargetKeys = value !== undefined ? value : targetKeys;
    const lockedKeySet = useMemo(
      () => new Set((lockedKeys ?? []).map((key) => String(key))),
      [lockedKeys],
    );

    const realSelectedKeys = useMemo(
      () =>
        isHideInvalidValue ? getTransferValue({ value: selectedKeys, dataSource }) : selectedKeys,
      [isHideInvalidValue, selectedKeys, dataSource],
    );

    const realTargetKeys = useMemo(() => {
      const keys = isHideInvalidValue
        ? getTransferValue({ value: mergedTargetKeys, dataSource })
        : mergedTargetKeys;

      if (!lockedKeySet.size) {
        return keys;
      }

      return (keys ?? []).filter((key) => !lockedKeySet.has(String(key)));
    }, [isHideInvalidValue, mergedTargetKeys, dataSource, lockedKeySet]);

    const realDataSource = useMemo(() => {
      if (!lockedKeySet.size || !dataSource?.length) {
        return dataSource;
      }

      return dataSource.map((item) =>
        lockedKeySet.has(String(item.key)) ? { ...item, disabled: true } : item,
      );
    }, [dataSource, lockedKeySet]);

    return (
      <InternalTransfer
        {...resetProps}
        dataSource={realDataSource}
        selectedKeys={realSelectedKeys}
        targetKeys={realTargetKeys}
        onChange={(nextKeys, direction, moveKeys) => {
          const next = lockedKeySet.size
            ? (nextKeys ?? []).filter((key) => !lockedKeySet.has(String(key)))
            : nextKeys;
          onChange?.(next, direction, moveKeys);
        }}
      />
    );
  },
  {},
);

TransferHOC.displayName = 'Transfer';

export default TransferHOC;
