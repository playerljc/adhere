import React, { memo } from 'react';

import DropdownRenderSelect from '../select/DropdownRenderSelect';
import type { ButtonRadioSelectProps, DisplayNameInternal } from '../types';
import ButtonRadio from './ButtonRadio';
import useRenderProps from './useRenderProps';

/**
 * ButtonRadioSelect
 * @param radioProps
 * @param props
 * @constructor
 */
const InternalButtonRadioSelect = memo<ButtonRadioSelectProps>(({ radioProps, ...props }) => {
  const renderProps = useRenderProps(radioProps);

  return (
    <DropdownRenderSelect {...props}>
      {({ originNode, ...rest }) => <ButtonRadio {...renderProps(rest)} />}
    </DropdownRenderSelect>
  );
});

const ButtonRadioSelect = InternalButtonRadioSelect as DisplayNameInternal<
  typeof InternalButtonRadioSelect
>;
ButtonRadioSelect.displayName = 'ButtonRadioSelect';

export default ButtonRadioSelect;
