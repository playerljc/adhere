import React, { memo } from 'react';

import AutoCompleteCheckAllMultipleSelect from '../multiple-select/AutoCompleteCheckAllMultipleSelect';
import type { AutoCompleteCheckAllTagSelectProps, DisplayNameInternal } from '../types';
import useAutoCompleteFetchLoading from '../useAutoCompleteFetchLoading';
import VerticalCheckableTagGroup from './VerticalCheckableTagGroup';
import useRenderProps from './useRenderProps';

/**
 * AutoCompleteCheckAllTagSelect
 * @param tagProps
 * @param props
 * @constructor
 */
const InternalAutoCompleteCheckAllTagSelect = memo<AutoCompleteCheckAllTagSelectProps>(
  ({ tagProps, ...props }) => {
    const fetchLoading = useAutoCompleteFetchLoading(props.renderLoading);
    const renderProps = useRenderProps(tagProps, 'multiple');

    return (
      <AutoCompleteCheckAllMultipleSelect {...props}>
        {({ originNode, loading, ...rest }) => (
          <>
            {loading && fetchLoading}
            {!loading && (
              <VerticalCheckableTagGroup
                {...renderProps({
                  ...rest,
                  onChange: (_value) => rest.onChange?.(_value, []),
                })}
                mode="multiple"
              />
            )}
          </>
        )}
      </AutoCompleteCheckAllMultipleSelect>
    );
  },
);

const AutoCompleteCheckAllTagSelect = InternalAutoCompleteCheckAllTagSelect as DisplayNameInternal<
  typeof InternalAutoCompleteCheckAllTagSelect
>;
AutoCompleteCheckAllTagSelect.displayName = 'AutoCompleteCheckAllTagSelect';

export default AutoCompleteCheckAllTagSelect;
