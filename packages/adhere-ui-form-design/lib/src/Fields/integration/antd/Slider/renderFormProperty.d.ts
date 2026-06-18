import React, { type ReactNode } from 'react';
import type { DataItemRow } from '@baifendian/adhere-ui-tablegridlayout';
import type { DesignValueProps } from '../../../../types';
/** FormProperty for Slider - value is number (single mode) or [number, number] (range mode). We use one number for initial value. */
export declare function FormProperty({ designValue, renderFormItems, }: {
    designValue: DesignValueProps;
    renderFormItems?: (defaultFormItems: DataItemRow[]) => DataItemRow[];
}): React.JSX.Element;
export declare function renderFormProperty(props: DesignValueProps): ReactNode;
