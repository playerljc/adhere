import React, { memo } from 'react';
import type { FC } from 'react';

import AutoComplete from '../select/AutoCompleteSelect';
import type { AutoCompleteCustomRadioSelectProps } from '../types';
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
const AutoCompleteCustomRadioSelect: FC<AutoCompleteCustomRadioSelectProps> = ({
  radioProps,
  children,
  ...props
}) => {
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
};

export default memo(AutoCompleteCustomRadioSelect);
