import React, { memo } from 'react';
import type { FC } from 'react';

import DropdownRenderSelect from '../select/DropdownRenderSelect';
import type { ButtonRadioSelectProps } from '../types';
import ButtonRadio from './ButtonRadio';
import useRenderProps from './useRenderProps';

/**
 * ButtonRadioSelect
 * @param radioProps
 * @param props
 * @constructor
 */
const ButtonRadioSelect: FC<ButtonRadioSelectProps> = ({ radioProps, ...props }) => {
  const renderProps = useRenderProps(radioProps);

  return (
    <DropdownRenderSelect {...props}>
      {({ originNode, ...rest }) => <ButtonRadio {...renderProps(rest)} />}
    </DropdownRenderSelect>
  );
};

export default memo(ButtonRadioSelect);
