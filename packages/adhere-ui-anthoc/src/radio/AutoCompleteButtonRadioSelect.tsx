import React, { memo } from 'react';

import AutoComplete from '../select/AutoCompleteSelect';
import type { AutoCompleteButtonRadioSelectProps, DisplayNameInternal } from '../types';
import useAutoCompleteFetchLoading from '../useAutoCompleteFetchLoading';
import ButtonRadio from './ButtonRadio';
import useRenderProps from './useRenderProps';

/**
 * AutoCompleteButtonRadioSelect
 * @param radioProps
 * @param props
 * @constructor
 */
const InternalAutoCompleteButtonRadioSelect = memo<AutoCompleteButtonRadioSelectProps>(
  ({ radioProps, ...props }) => {
    const fetchLoading = useAutoCompleteFetchLoading(props.renderLoading);
    const renderProps = useRenderProps(radioProps);

    return (
      <AutoComplete {...props}>
        {({ originNode, loading, ...rest }) => (
          <>
            {loading && fetchLoading}
            {!loading && <ButtonRadio {...renderProps(rest)} />}
          </>
        )}
      </AutoComplete>
    );
  },
);

const AutoCompleteButtonRadioSelect = InternalAutoCompleteButtonRadioSelect as DisplayNameInternal<
  typeof InternalAutoCompleteButtonRadioSelect
>;
AutoCompleteButtonRadioSelect.displayName = 'AutoCompleteButtonRadioSelect';

export default AutoCompleteButtonRadioSelect;
