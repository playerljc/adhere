import { ArgsProps } from 'antd/lib/message';
import { ModalProps } from 'antd/lib/modal/Modal';
import React from 'react';
type ConfigContent = React.ReactNode;
type JointContent = ConfigContent | ArgsProps;
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
export declare const openSuccessMessage: (content?: JointContent, duration?: number | VoidFunction, onClose?: VoidFunction) => import("antd/es/message/interface").MessageType;
export {};
