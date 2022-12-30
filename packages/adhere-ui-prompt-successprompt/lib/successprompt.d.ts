import { ArgsProps, ConfigOnClose } from 'antd/lib/message';
import { ModalProps } from 'antd/lib/modal/Modal';
import React from 'react';
declare type ConfigContent = React.ReactNode;
declare type JointContent = ConfigContent | ArgsProps;
declare type ConfigDuration = number | (() => void);
/**
 * openSuccessDialog
 * @param props
 */
export declare const openSuccessDialog: (props?: ModalProps) => {
    destroy: () => void;
    update: (configUpdate: import("antd").ModalFuncProps | ((prevConfig: import("antd").ModalFuncProps) => import("antd").ModalFuncProps)) => void;
};
/**
 * 成功的提示
 * @param content
 * @param duration
 * @param onClose
 */
export declare const openSuccessMessage: (content?: JointContent, duration?: ConfigDuration, onClose?: ConfigOnClose) => import("antd/lib/message").MessageType;
export {};
