import React, { memo } from 'react';

import DropdownRenderSelect from '../select/DropdownRenderSelect';
import type { DisplayNameInternal, RadioSelectProps } from '../types';
import VerticalRadio from './VerticalRadio';
import useRenderProps from './useRenderProps';

/**
 * RadioSelect
 * @param radioProps
 * @param props
 * @constructor
 */
const InternalRadioSelect = memo<RadioSelectProps>(({ radioProps, ...props }) => {
  const renderProps = useRenderProps(radioProps);

  return (
    <DropdownRenderSelect {...props}>
      {({ originNode, ...rest }) => <VerticalRadio {...renderProps(rest)} />}
    </DropdownRenderSelect>
  );
});

const RadioSelect = InternalRadioSelect as DisplayNameInternal<typeof InternalRadioSelect>;
RadioSelect.displayName = 'RadioSelect';

export default RadioSelect;
