import { ArgsProps, ConfigOnClose } from 'antd/lib/message';
import { ModalProps } from 'antd/lib/modal/Modal';
import React from 'react';
declare type ConfigContent = React.ReactNode;
declare type JointContent = ConfigContent | ArgsProps;
declare type ConfigDuration = number | (() => void);
/**
 * openErrorDialog
 * @param props
 */
export declare const openErrorDialog: (props?: ModalProps) => {
    destroy: () => void;
    update: (configUpdate: import("antd").ModalFuncProps | ((prevConfig: import("antd").ModalFuncProps) => import("antd").ModalFuncProps)) => void;
};
/**
 * 错误的提示
 * @param content
 * @param duration
 * @param onClose
 */
export declare const openErrorMessage: (content?: JointContent, duration?: ConfigDuration, onClose?: ConfigOnClose) => import("antd/lib/message").MessageType;
export {};
