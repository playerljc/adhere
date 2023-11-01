import React, { memo, useMemo } from 'react';
import type { FC } from 'react';

import AutoCompleteMultipleSelect from '../multiple-select/AutoCompleteMultipleSelect';
import AutoComplete from '../select/AutoCompleteSelect';
import type { AutoCompleteTagSelectProps } from '../types';
import useAutoCompleteFetchLoading from '../useAutoCompleteFetchLoading';
import VerticalCheckableTagGroup from './VerticalCheckableTagGroup';
import useRenderProps from './useRenderProps';

/**
 * AutoCompleteTagSelect
 * @param tagProps
 * @param props
 * @constructor
 */
const AutoCompleteTagSelect: FC<AutoCompleteTagSelectProps> = ({ tagProps, ...props }) => {
  const fetchLoading = useAutoCompleteFetchLoading(props.renderLoading);
  const renderProps = useRenderProps(tagProps);

  const Component = useMemo(() => {
    return 'mode' in (tagProps ?? {}) && tagProps?.mode === 'multiple'
      ? AutoCompleteMultipleSelect
      : AutoComplete;
  }, [(tagProps ?? {}).mode]);

  return (
    <Component {...props}>
      {({ originNode, loading, ...rest }) => (
        <>
          {loading && fetchLoading}
          {!loading && (
            <VerticalCheckableTagGroup
              {...renderProps({
                ...rest,
                onChange: (_value) => rest.onChange?.(_value, []),
              })}
            />
          )}
        </>
      )}
    </Component>
  );
};

export default memo(AutoCompleteTagSelect);
