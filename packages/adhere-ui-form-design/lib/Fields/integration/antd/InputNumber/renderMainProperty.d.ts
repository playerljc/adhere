import React, { type ReactNode } from 'react';
import type { DataItemRow } from '@baifendian/adhere-ui-tablegridlayout/es/types';
import type { DesignValueProps } from '../../../../types';
/**
 * MainProperty - InputNumber basic props per Ant Design InputNumber API
 * @see https://ant.design/components/input-number-cn#api
 * Basic types only: placeholder, decimalSeparator, min, max, step, precision,
 * mode, stringMode, keyboard, changeOnBlur, changeOnWheel, controls, disabled,
 * readOnly, size, variant, status.
 */
export declare function MainProperty({ designValue, renderFormItems, }: {
    designValue: DesignValueProps;
    renderFormItems?: (defaultFormItems: DataItemRow[]) => DataItemRow[];
}): React.JSX.Element;
export declare function renderMainProperty(props: DesignValueProps): ReactNode;
