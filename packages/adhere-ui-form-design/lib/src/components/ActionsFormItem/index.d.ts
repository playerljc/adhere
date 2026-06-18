import React from 'react';
import type { Action } from '../../types';
export type ActionItem = {
    label: string;
    value: string;
};
export interface ActionsFormItemProps {
    actions: ActionItem[];
    value?: Action[];
    onChange?: (value: Action[]) => void;
    className?: string;
    style?: React.CSSProperties;
}
declare const _default: React.NamedExoticComponent<ActionsFormItemProps>;
export default _default;
