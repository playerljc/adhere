import React, { type CSSProperties, memo, useRef } from 'react';

import AutoComplete from '@baifendian/adhere-ui-auto-complete';
import type { AutoCompleteProps } from '@baifendian/adhere-ui-auto-complete/es/types';
import ConfigProvider from '@baifendian/adhere-ui-configprovider';

import type { DisplayNameInternal } from '../types';

const { useTheme } = ConfigProvider;

export type InternalAutoCompleteSelectType = AutoCompleteProps & {
  wrapperClassName?: string;
  wrapperStyle?: CSSProperties;
};

/**
 * AutoCompleteSelect
 * @param props
 * @constructor
 */
const InternalAutoCompleteSelect = memo<InternalAutoCompleteSelectType>(
  ({ wrapperClassName, wrapperStyle, ...props }) => {
    const wrapperRef = useRef<HTMLElement | undefined>(undefined);

    useTheme<HTMLElement>({
      elRef: wrapperRef,
      group: 'normal-hoc',
    });

    return (
      <div
        // @ts-ignore
        ref={wrapperRef}
        className={wrapperClassName}
        style={wrapperStyle ?? {}}
      >
        <AutoComplete {...props} />
      </div>
    );
  },
);

const AutoCompleteSelect = InternalAutoCompleteSelect as DisplayNameInternal<
  typeof InternalAutoCompleteSelect
>;
AutoCompleteSelect.displayName = 'AutoCompleteSelect';

export default AutoCompleteSelect;
