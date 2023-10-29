import React, { memo } from 'react';
import type { FC } from 'react';

import DropdownRenderSelect from '../select/DropdownRenderSelect';
import type { RadioSelectProps } from '../types';
import VerticalRadio from './VerticalRadio';
import useRenderProps from './useRenderProps';

/**
 * RadioSelect
 * @param radioProps
 * @param props
 * @constructor
 */
const RadioSelect: FC<RadioSelectProps> = ({ radioProps, ...props }) => {
  const renderProps = useRenderProps(radioProps);

  return (
    <DropdownRenderSelect {...props}>
      {({ originNode, ...rest }) => <VerticalRadio {...renderProps(rest)} />}
    </DropdownRenderSelect>
  );
};

export default memo(RadioSelect);
