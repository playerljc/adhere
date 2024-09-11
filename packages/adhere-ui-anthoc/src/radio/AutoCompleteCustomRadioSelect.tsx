import React, { memo } from 'react';

import AutoComplete from '../select/AutoCompleteSelect';
import type { AutoCompleteCustomRadioSelectProps, DisplayNameInternal } from '../types';
import useAutoCompleteFetchLoading from '../useAutoCompleteFetchLoading';
import CustomRadio from './CustomRadio';
import useRenderProps from './useRenderProps';

/**
 * AutoCompleteCustomRadioSelect
 * @param radioProps
 * @param children
 * @param props
 * @constructor
 */
const InternalAutoCompleteCustomRadioSelect = memo<AutoCompleteCustomRadioSelectProps>(
  ({ radioProps, children, ...props }) => {
    const fetchLoading = useAutoCompleteFetchLoading(props.renderLoading);
    const renderProps = useRenderProps(radioProps);

    return (
      <AutoComplete {...props}>
        {({ originNode, loading, ...rest }) => (
          <>
            {loading && fetchLoading}
            {!loading && <CustomRadio {...renderProps(rest)}>{children}</CustomRadio>}
          </>
        )}
      </AutoComplete>
    );
  },
);

const AutoCompleteCustomRadioSelect = InternalAutoCompleteCustomRadioSelect as DisplayNameInternal<
  typeof InternalAutoCompleteCustomRadioSelect
>;
AutoCompleteCustomRadioSelect.displayName = 'AutoCompleteCustomRadioSelect';

export default AutoCompleteCustomRadioSelect;
