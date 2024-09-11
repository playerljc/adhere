import React, { memo } from 'react';

import AutoComplete from '../select/AutoCompleteSelect';
import { AutoCompleteRadioSelectProps, DisplayNameInternal } from '../types';
import useAutoCompleteFetchLoading from '../useAutoCompleteFetchLoading';
import VerticalRadio from './VerticalRadio';
import useRenderProps from './useRenderProps';

/**
 * AutoCompleteRadioSelect
 * @param radioProps
 * @param props
 * @constructor
 */
const InternalAutoCompleteRadioSelect = memo<AutoCompleteRadioSelectProps>(
  ({ radioProps, ...props }) => {
    const fetchLoading = useAutoCompleteFetchLoading(props.renderLoading);
    const renderProps = useRenderProps(radioProps);

    return (
      <AutoComplete {...props}>
        {({ originNode, loading, ...rest }) => (
          <>
            {loading && fetchLoading}
            {!loading && <VerticalRadio {...renderProps(rest)} />}
          </>
        )}
      </AutoComplete>
    );
  },
);

const AutoCompleteRadioSelect = InternalAutoCompleteRadioSelect as DisplayNameInternal<
  typeof InternalAutoCompleteRadioSelect
>;
AutoCompleteRadioSelect.displayName = 'AutoCompleteRadioSelect';

export default AutoCompleteRadioSelect;
