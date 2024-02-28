import React, { memo, useMemo } from 'react';

import AutoCompleteMultipleSelect from '../multiple-select/AutoCompleteMultipleSelect';
import AutoCompleteSelect from '../select/AutoCompleteSelect';
import type { AutoCompleteTableSelectProps, DisplayNameInternal } from '../types';
import useAutoCompleteFetchLoading from '../useAutoCompleteFetchLoading';
import CheckboxTable from './CheckboxTable';
import RadioTable from './RadioTable';
import useRenderProps from './useRenderProps';

/**
 * AutoCompleteTableSelect
 * @description ListSelect，单选或多选
 * @param listProps
 * @param props
 * @constructor
 */
const InternalAutoCompleteTableSelect = memo<AutoCompleteTableSelectProps>(
  ({ tableProps, ...props }) => {
    const isMultiple = useMemo(() => 'mode' in props && props.mode === 'multiple', [props.mode]);

    const renderProps = useRenderProps(tableProps);

    const fetchLoading = useAutoCompleteFetchLoading(props.renderLoading);

    const Component = useMemo(
      () => (isMultiple ? AutoCompleteMultipleSelect : AutoCompleteSelect),
      [isMultiple],
    );

    return (
      <Component {...props}>
        {({ originNode, loading, ...rest }) => {
          const tableProps = renderProps(rest);

          return (
            <>
              {loading && fetchLoading}
              {!loading && isMultiple && <CheckboxTable {...tableProps} />}
              {!loading && !isMultiple && <RadioTable {...tableProps} />}
            </>
          );
        }}
      </Component>
    );
  },
);

const AutoCompleteTableSelect = InternalAutoCompleteTableSelect as DisplayNameInternal<
  typeof InternalAutoCompleteTableSelect
>;
AutoCompleteTableSelect.displayName = 'AutoCompleteTableSelect';

export default AutoCompleteTableSelect;
