import React, { memo, useMemo } from 'react';

import DropdownRenderSelect from '../select/DropdownRenderSelect';
import type { DisplayNameInternal, TreeTransferSelectProps } from '../types';
import TreeTransfer from './TreeTransfer';
import { treeToSelectOptions } from './transferUtils';
import useTreeTransferRenderProps from './useTreeTransferRenderProps';

const InternalTreeTransferSelect = memo<TreeTransferSelectProps>(
  ({ transferProps, treeData, options: optionsProp, ...props }) => {
    const renderProps = useTreeTransferRenderProps(transferProps);

    const options = useMemo(
      () => optionsProp ?? treeToSelectOptions(treeData ?? []),
      [optionsProp, treeData],
    );

    return (
      <DropdownRenderSelect {...props} mode="multiple" options={options}>
        {({ originNode, ...rest }) => (
          <TreeTransfer {...renderProps({ ...rest, treeData })} />
        )}
      </DropdownRenderSelect>
    );
  },
);

const TreeTransferSelect = InternalTreeTransferSelect as DisplayNameInternal<
  typeof InternalTreeTransferSelect
>;
TreeTransferSelect.displayName = 'TreeTransferSelect';

export default TreeTransferSelect;
