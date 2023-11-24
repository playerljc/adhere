import React, { memo } from 'react';

import DropdownRenderSelect from '../select/DropdownRenderSelect';
import type { CustomRadioSelectProps, DisplayNameInternal } from '../types';
import CustomRadio from './CustomRadio';
import useRenderProps from './useRenderProps';

/**
 * AutoCompleteCustomRadioSelect
 * @param radioProps
 * @param children
 * @param props
 * @constructor
 */
const InternalCustomRadioSelect = memo<CustomRadioSelectProps>(
  ({ radioProps, children, ...props }) => {
    const renderProps = useRenderProps(radioProps);

    return (
      <DropdownRenderSelect {...props}>
        {({ originNode, ...rest }) => <CustomRadio {...renderProps(rest)}>{children}</CustomRadio>}
      </DropdownRenderSelect>
    );
  },
);

const CustomRadioSelect = InternalCustomRadioSelect as DisplayNameInternal<
  typeof InternalCustomRadioSelect
>;
CustomRadioSelect.displayName = 'CustomRadio';

export default CustomRadioSelect;
