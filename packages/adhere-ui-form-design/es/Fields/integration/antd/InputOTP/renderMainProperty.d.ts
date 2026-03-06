import React, { type ReactNode } from 'react';
import type { DataItemRow } from '@baifendian/adhere-ui-tablegridlayout/es/types';
import type { DesignValueProps } from '../../../../types';
/**
 * MainProperty - OTP-specific: length, mask (boolean), size, variant, status, disabled
 */
export declare function MainProperty({ designValue, renderFormItems, }: {
    designValue: DesignValueProps;
    renderFormItems?: (defaultFormItems: DataItemRow[]) => DataItemRow[];
}): React.JSX.Element;
export declare function renderMainProperty(props: DesignValueProps): ReactNode;
