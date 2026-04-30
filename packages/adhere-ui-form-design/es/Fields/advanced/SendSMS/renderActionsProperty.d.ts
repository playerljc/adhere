import React, { type ReactNode } from 'react';
import { ActionItem } from '../../../components/ActionsFormItem';
import type { DesignValueProps } from '../../../types';
export declare function ActionsProperty({ designValue, areaCodeActions, phoneInputActions, codeInputActions, sendButtonActions, countdownActions, }: {
    designValue: DesignValueProps;
    areaCodeActions: ActionItem[];
    phoneInputActions: ActionItem[];
    codeInputActions: ActionItem[];
    sendButtonActions: ActionItem[];
    countdownActions: ActionItem[];
}): React.JSX.Element;
export declare function renderActionsProperty(props: DesignValueProps): ReactNode;
