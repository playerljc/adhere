import React from 'react';
/**
 * IAlertArgv
 * @interface IAlertArgv
 */
export interface IAlertArgv {
    title?: string | null | React.ReactElement;
    text?: string | null | React.ReactElement;
    width?: number;
    zIndex?: number;
    local?: string;
    icon?: React.ReactElement | null;
}
/**
 * IConfirmArgv
 * @interface IConfirmArgv
 */
export interface IConfirmArgv extends IAlertArgv {
    onSuccess?: Function;
}
/**
 * IModalDialogProps
 * @interface IModalDialogProps
 */
export interface IModalDialogProps {
    cloneBtn: boolean;
    config: Object;
    close(): void;
}
