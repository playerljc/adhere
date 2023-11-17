import React, { memo } from 'react';
import type { FC } from 'react';

import AutoCompleteCheckAllMultipleSelect from '../multiple-select/AutoCompleteCheckAllMultipleSelect';
import type { AutoCompleteCheckAllTagSelectProps } from '../types';
import useAutoCompleteFetchLoading from '../useAutoCompleteFetchLoading';
import VerticalCheckableTagGroup from './VerticalCheckableTagGroup';
import useRenderProps from './useRenderProps';

/**
 * AutoCompleteCheckAllTagSelect
 * @param tagProps
 * @param props
 * @constructor
 */
const AutoCompleteCheckAllTagSelect: FC<AutoCompleteCheckAllTagSelectProps> = ({
  tagProps,
  ...props
}) => {
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
};

export default memo(AutoCompleteCheckAllTagSelect);
