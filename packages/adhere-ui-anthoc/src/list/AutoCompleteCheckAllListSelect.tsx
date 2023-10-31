import React, { memo } from 'react';
import type { FC } from 'react';

import AutoCompleteCheckAllMultipleSelect from '../multiple-select/AutoCompleteCheckAllMultipleSelect';
import type { AutoCompleteCheckAllListSelectProps } from '../types';
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
const AutoCompleteCheckAllListSelect: FC<AutoCompleteCheckAllListSelectProps> = ({
  listProps,
  ...props
}) => {
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
};

export default memo(AutoCompleteCheckAllListSelect);
