import React, { memo } from 'react';
import type { FC } from 'react';

import AutoCompleteSelect from '@baifendian/adhere-ui-auto-complete';

import { AutoCompleteRadioSelectProps } from '../types';
import useAutoCompleteFetchLoading from '../useAutoCompleteFetchLoading';
import VerticalRadio from './VerticalRadio';
import useRenderProps from './useRenderProps';

/**
 * AutoCompleteRadioSelect
 * @param radioProps
 * @param props
 * @constructor
 */
const AutoCompleteRadioSelect: FC<AutoCompleteRadioSelectProps> = ({ radioProps, ...props }) => {
  const fetchLoading = useAutoCompleteFetchLoading(props.renderLoading);
  const renderProps = useRenderProps(radioProps);

  return (
    <AutoCompleteSelect {...props}>
      {({ originNode, loading, ...rest }) => (
        <>
          {loading && fetchLoading}
          {!loading && <VerticalRadio {...renderProps(rest)} />}
        </>
      )}
    </AutoCompleteSelect>
  );
};

export default memo(AutoCompleteRadioSelect);
