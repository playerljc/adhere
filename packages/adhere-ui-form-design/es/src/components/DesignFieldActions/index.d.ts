import { type FC, type ReactElement } from 'react';
export interface DesignFieldAction {
    key: string;
    label: string;
    icon: ReactElement;
    el: ReactElement;
}
export interface DesignFieldActionsProps {
    items: DesignFieldAction[];
}
/**
 * DesignFieldActions
 * @description Field工具栏外框
 * @param items
 * @constructor
 */
declare const DesignFieldActions: FC<DesignFieldActionsProps>;
export default DesignFieldActions;
