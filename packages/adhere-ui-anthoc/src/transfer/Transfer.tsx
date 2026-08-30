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
    isHideInvalidValue = true,
    ...resetProps
  }: TransferHOCProps) => {
    const mergedTargetKeys = value !== undefined ? value : targetKeys;

    const realSelectedKeys = useMemo(
      () =>
        isHideInvalidValue ? getTransferValue({ value: selectedKeys, dataSource }) : selectedKeys,
      [isHideInvalidValue, selectedKeys, dataSource],
    );

    const realTargetKeys = useMemo(
      () =>
        isHideInvalidValue
          ? getTransferValue({ value: mergedTargetKeys, dataSource })
          : mergedTargetKeys,
      [isHideInvalidValue, mergedTargetKeys, dataSource],
    );

    return (
      <InternalTransfer
        {...resetProps}
        dataSource={dataSource}
        selectedKeys={realSelectedKeys}
        targetKeys={realTargetKeys}
      />
    );
  },
  {},
);

TransferHOC.displayName = 'Transfer';

export default TransferHOC;
