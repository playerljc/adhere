import React, { memo, useMemo } from 'react';
import type { FC } from 'react';

import AutoCompleteMultipleSelect from '../multiple-select/AutoCompleteMultipleSelect';
import AutoCompleteSelect from '../select/AutoCompleteSelect';
import type { AutoCompleteListSelectProps } from '../types';
import useAutoCompleteFetchLoading from '../useAutoCompleteFetchLoading';
import CheckboxList from './CheckboxList';
import RadioList from './RadioList';
import useRenderProps from './useRenderProps';

/**
 * AutoCompleteListSelect
 * @description ListSelect，单选或多选
 * @param listProps
 * @param props
 * @constructor
 */
const AutoCompleteListSelect: FC<AutoCompleteListSelectProps> = ({ listProps, ...props }) => {
  const isMultiple = useMemo(() => 'mode' in props && props.mode === 'multiple', [props.mode]);
  const renderProps = useRenderProps(listProps);
  const fetchLoading = useAutoCompleteFetchLoading(props.renderLoading);
  const Component = useMemo(
    () => (isMultiple ? AutoCompleteMultipleSelect : AutoCompleteSelect),
    [isMultiple],
  );

  return (
    <Component {...props}>
      {({ originNode, loading, ...rest }) => (
        <>
          {loading && fetchLoading}
          {!loading && isMultiple && <CheckboxList {...renderProps(rest)} />}
          {!loading && !isMultiple && <RadioList {...renderProps(rest)} />}
        </>
      )}
    </Component>
  );
};

export default memo(AutoCompleteListSelect);
