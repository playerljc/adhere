import React, { type ReactNode } from 'react';
import type { DataItemRow } from '@baifendian/adhere-ui-tablegridlayout';
import type { DesignValueProps } from '../../../../types';
/**
 * FormProperty
 *
 * @param {DesignValueProps} props
 */
export declare function FormProperty({ designValue, renderFormItems, }: {
    designValue: DesignValueProps;
    renderFormItems?: (defaultFormItems: DataItemRow[]) => DataItemRow[];
}): React.JSX.Element;
/**
 * renderFormProperty
 * @description 对表单的渲染
 * @param props
 */
export declare function renderFormProperty(props: DesignValueProps): ReactNode;
