import React, { memo } from 'react';
import type { FC } from 'react';

import AutoCompleteMultipleSelect from '../multiple-select/AutoCompleteMultipleSelect';
import type { AutoCompleteTransferSelectProps } from '../types';
import useAutoCompleteFetchLoading from '../useAutoCompleteFetchLoading';
import Transfer from './Transfer';
import useRenderProps from './useRenderProps';

/**
 * AutoCompleteTransferSelect
 * @param transferProps
 * @param props
 * @constructor
 */
const AutoCompleteTransferSelect: FC<AutoCompleteTransferSelectProps> = ({
  transferProps,
  ...props
}) => {
  const fetchLoading = useAutoCompleteFetchLoading(props.renderLoading);
  const renderProps = useRenderProps(transferProps);

  return (
    <AutoCompleteMultipleSelect {...props} mode="multiple">
      {({ originNode, loading, ...rest }) => (
        <>
          {loading && fetchLoading}
          {!loading && <Transfer {...renderProps(rest)} />}
        </>
      )}
    </AutoCompleteMultipleSelect>
  );
};

export default memo(AutoCompleteTransferSelect);
