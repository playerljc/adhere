import { Transfer, TransferProps } from 'antd';
import React, { useMemo } from 'react';

import { TransferHOCComponent } from '../types';
import { createFactory, getTransferValue } from '../util';

const InternalTransfer: TransferHOCComponent = createFactory<
  TransferProps & {
    isHideInvalidValue?: boolean;
  }
>(Transfer, {});

const TransferHOC: TransferHOCComponent = createFactory(
  ({ dataSource, selectedKeys, targetKeys, isHideInvalidValue = true, ...resetProps }) => {
    const realSelectedKeys = useMemo(
      () =>
        isHideInvalidValue ? getTransferValue({ value: selectedKeys, dataSource }) : selectedKeys,
      [isHideInvalidValue, selectedKeys, dataSource],
    );

    const realTargetKeys = useMemo(
      () => (isHideInvalidValue ? getTransferValue({ value: targetKeys, dataSource }) : targetKeys),
      [isHideInvalidValue, targetKeys, dataSource],
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
