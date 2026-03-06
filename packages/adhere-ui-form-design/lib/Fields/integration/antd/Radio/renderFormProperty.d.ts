import React, { type ReactNode } from 'react';
import type { DataItemRow } from '@baifendian/adhere-ui-tablegridlayout';
import type { DesignValueProps } from '../../../../types';
/** FormProperty for Radio - valuePropName "checked", initial value boolean */
export declare function FormProperty({ designValue, renderFormItems, }: {
    designValue: DesignValueProps;
    renderFormItems?: (defaultFormItems: DataItemRow[]) => DataItemRow[];
}): React.JSX.Element;
export declare function renderFormProperty(props: DesignValueProps): ReactNode;
