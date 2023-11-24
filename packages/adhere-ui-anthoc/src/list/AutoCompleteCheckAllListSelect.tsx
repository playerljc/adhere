import React, { memo } from 'react';

import AutoCompleteCheckAllMultipleSelect from '../multiple-select/AutoCompleteCheckAllMultipleSelect';
import type { AutoCompleteCheckAllListSelectProps, DisplayNameInternal } from '../types';
import useAutoCompleteFetchLoading from '../useAutoCompleteFetchLoading';
import CheckboxList from './CheckboxList';
import useRenderProps from './useRenderProps';

/**
 * AutoCompleteCheckAllListSelect
 * @description 可以全选的ListSelect
 * @param listProps
 * @param props
 * @constructor
 */
const InternalAutoCompleteCheckAllListSelect = memo<AutoCompleteCheckAllListSelectProps>(
  ({ listProps, ...props }) => {
    const fetchLoading = useAutoCompleteFetchLoading(props.renderLoading);
    const renderProps = useRenderProps(listProps);

    return (
      <AutoCompleteCheckAllMultipleSelect {...props}>
        {({ originNode, loading, ...rest }) => (
          <>
            {loading && fetchLoading}
            {!loading && <CheckboxList {...renderProps(rest)} />}
          </>
        )}
      </AutoCompleteCheckAllMultipleSelect>
    );
  },
);

const AutoCompleteCheckAllListSelect =
  InternalAutoCompleteCheckAllListSelect as DisplayNameInternal<
    typeof InternalAutoCompleteCheckAllListSelect
  >;
AutoCompleteCheckAllListSelect.displayName = 'AutoCompleteCheckAllListSelect';

export default AutoCompleteCheckAllListSelect;
