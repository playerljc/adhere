import React, { type ReactNode } from 'react';
import type { DataItemRow } from '@baifendian/adhere-ui-tablegridlayout/es/types';
import type { DesignValueProps } from '../../../../types';
/**
 * MainProperty - Slider basic props per https://ant.design/components/slider-cn#api
 * Basic only: disabled, keyboard, min, max, step, orientation (horizontal|vertical), reverse, dots, included, range (boolean)
 */
export declare function MainProperty({ designValue, renderFormItems, }: {
    designValue: DesignValueProps;
    renderFormItems?: (defaultFormItems: DataItemRow[]) => DataItemRow[];
}): React.JSX.Element;
export declare function renderMainProperty(props: DesignValueProps): ReactNode;
