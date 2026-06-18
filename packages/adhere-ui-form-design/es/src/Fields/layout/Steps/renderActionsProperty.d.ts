import React, { type ReactNode } from 'react';
import { ActionItem } from '../../../components/ActionsFormItem';
import type { DesignValueProps } from '../../../types';
/**
 * ActionsProperty
 * @param {DesignValueProps} props
 */
export declare function ActionsProperty({ designValue, }: {
    designValue: DesignValueProps;
    actions: ActionItem[];
}): React.JSX.Element;
/**
 * renderActionsProperty
 * @param props
 */
export declare function renderActionsProperty(props: DesignValueProps): ReactNode;
