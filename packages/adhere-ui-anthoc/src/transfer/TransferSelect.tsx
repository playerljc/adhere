import React, { memo } from 'react';

import DropdownRenderSelect from '../select/DropdownRenderSelect';
import type { DisplayNameInternal, TransferSelectProps } from '../types';
import Transfer from './Transfer';
import useRenderProps from './useRenderProps';

/**
 * TransferSelect
 * @param transferProps
 * @param props
 * @constructor
 */
const InternalTransferSelect = memo<TransferSelectProps>(({ transferProps, ...props }) => {
  const renderProps = useRenderProps(transferProps);

  return (
    <DropdownRenderSelect {...props} mode="multiple">
      {({ originNode, ...rest }) => <Transfer {...renderProps(rest)} />}
    </DropdownRenderSelect>
  );
});

const TransferSelect = InternalTransferSelect as DisplayNameInternal<typeof InternalTransferSelect>;
TransferSelect.displayName = 'TransferSelect';

export default TransferSelect;
