import React, { memo } from 'react';

import AutoCompleteMultipleSelect from '../multiple-select/AutoCompleteMultipleSelect';
import type { AutoCompleteTransferSelectProps, DisplayNameInternal } from '../types';
import useAutoCompleteFetchLoading from '../useAutoCompleteFetchLoading';
import Transfer from './Transfer';
import useRenderProps from './useRenderProps';

/**
 * AutoCompleteTransferSelect
 * @param transferProps
 * @param props
 * @constructor
 */
const InternalAutoCompleteTransferSelect = memo<AutoCompleteTransferSelectProps>(
  ({ transferProps, ...props }) => {
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
  },
);

const AutoCompleteTransferSelect = InternalAutoCompleteTransferSelect as DisplayNameInternal<
  typeof InternalAutoCompleteTransferSelect
>;
AutoCompleteTransferSelect.displayName = 'AutoCompleteTransferSelect';

export default AutoCompleteTransferSelect;
