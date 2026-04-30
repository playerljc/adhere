import React, { type ReactNode } from 'react';
import { ActionItem } from '../../../components/ActionsFormItem';
import type { DesignValueProps } from '../../../types';
/**
 * ActionsProperty
 *
 * @description
 *
 * @param {DesignValueProps} props
 */
export declare function ActionsProperty({ designValue, actions, }: {
    designValue: DesignValueProps;
    actions: ActionItem[];
}): React.JSX.Element;
/**
 * renderActionsProperty
 * @description 对Actions的渲染
 * @param props
 */
export declare function renderActionsProperty(props: DesignValueProps): ReactNode;
