import React, { type ReactNode } from 'react';
import { ActionItem } from '../../../../components/ActionsFormItem';
import type { DesignValueProps } from '../../../../types';
/**
 * ActionsProperty
 *
 * @description Upload 的事件配置面板
 */
export declare function ActionsProperty({ designValue, actions, }: {
    designValue: DesignValueProps;
    actions: ActionItem[];
}): React.JSX.Element;
/**
 * renderActionsProperty
 * @description 对 Upload Actions 的渲染
 */
export declare function renderActionsProperty(props: DesignValueProps): ReactNode;
