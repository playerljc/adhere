import React, { type CSSProperties } from 'react';
import type { AutoCompleteProps } from '@baifendian/adhere-ui-auto-complete/es/types';
import type { DisplayNameInternal } from '../types';
export type InternalAutoCompleteSelectType = AutoCompleteProps & {
    wrapperClassName?: string;
    wrapperStyle?: CSSProperties;
};
/**
 * AutoCompleteSelect
 * @param props
 * @constructor
 */
declare const InternalAutoCompleteSelect: React.NamedExoticComponent<InternalAutoCompleteSelectType>;
declare const AutoCompleteSelect: DisplayNameInternal<typeof InternalAutoCompleteSelect>;
export default AutoCompleteSelect;
