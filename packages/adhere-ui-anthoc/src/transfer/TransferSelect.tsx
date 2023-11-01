import React, { memo } from 'react';
import type { FC } from 'react';

import DropdownRenderSelect from '../select/DropdownRenderSelect';
import type { TransferSelectProps } from '../types';
import Transfer from './Transfer';
import useRenderProps from './useRenderProps';

/**
 * TransferSelect
 * @param transferProps
 * @param props
 * @constructor
 */
const TransferSelect: FC<TransferSelectProps> = ({ transferProps, ...props }) => {
  const renderProps = useRenderProps(transferProps);

  return (
    <DropdownRenderSelect {...props} mode="multiple">
      {({ originNode, ...rest }) => <Transfer {...renderProps(rest)} />}
    </DropdownRenderSelect>
  );
};

export default memo(TransferSelect);
