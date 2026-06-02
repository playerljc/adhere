import React, { type ReactNode } from 'react';
import { ActionItem } from '../../../components/ActionsFormItem';
import type { DesignValueProps } from '../../../types';
/**
 * ActionsProperty
 *
 * @description PhoneWithAreaCode：左侧区号选择与右侧号码输入分别配置事件
 */
export declare function ActionsProperty({ designValue, areaCodeActions, phoneInputActions, }: {
    designValue: DesignValueProps;
    areaCodeActions: ActionItem[];
    phoneInputActions: ActionItem[];
}): React.JSX.Element;
export declare function renderActionsProperty(props: DesignValueProps): ReactNode;
