import React, { memo } from 'react';

import DropdownRenderSelect from '../select/DropdownRenderSelect';
import type { DisplayNameInternal, TableTransferSelectProps } from '../types';
import TableTransfer from './TableTransfer';
import useTableTransferRenderProps from './useTableTransferRenderProps';

const InternalTableTransferSelect = memo<TableTransferSelectProps>(
  ({ transferProps, leftColumns, rightColumns, ...props }) => {
    const renderProps = useTableTransferRenderProps(transferProps, { leftColumns, rightColumns });

    return (
      <DropdownRenderSelect {...props} mode="multiple">
        {({ originNode, ...rest }) => <TableTransfer {...renderProps(rest)} />}
      </DropdownRenderSelect>
    );
  },
);

const TableTransferSelect = InternalTableTransferSelect as DisplayNameInternal<
  typeof InternalTableTransferSelect
>;
TableTransferSelect.displayName = 'TableTransferSelect';

export default TableTransferSelect;
