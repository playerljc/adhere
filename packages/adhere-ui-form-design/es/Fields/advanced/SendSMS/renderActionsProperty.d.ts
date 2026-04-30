import React, { type ReactNode } from 'react';
import { ActionItem } from '../../../components/ActionsFormItem';
import type { DesignValueProps } from '../../../types';
export declare function ActionsProperty({ designValue, codeInputActions, sendButtonActions, countdownActions, }: {
    designValue: DesignValueProps;
    codeInputActions: ActionItem[];
    sendButtonActions: ActionItem[];
    countdownActions: ActionItem[];
}): React.JSX.Element;
export declare function renderActionsProperty(props: DesignValueProps): ReactNode;
