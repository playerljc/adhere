import React, { memo } from 'react';
import type { FC } from 'react';

import DropdownRenderSelect from '../select/DropdownRenderSelect';
import type { CustomRadioSelectProps } from '../types';
import CustomRadio from './CustomRadio';
import useRenderProps from './useRenderProps';

/**
 * AutoCompleteCustomRadioSelect
 * @param radioProps
 * @param children
 * @param props
 * @constructor
 */
const CustomRadioSelect: FC<CustomRadioSelectProps> = ({ radioProps, children, ...props }) => {
  const renderProps = useRenderProps(radioProps);

  return (
    <DropdownRenderSelect {...props}>
      {({ originNode, ...rest }) => <CustomRadio {...renderProps(rest)}>{children}</CustomRadio>}
    </DropdownRenderSelect>
  );
};

export default memo(CustomRadioSelect);
