import { ArgsProps } from 'antd/lib/message';
import { ModalProps } from 'antd/lib/modal/Modal';
import React from 'react';
type ConfigContent = React.ReactNode;
type JointContent = ConfigContent | ArgsProps;
/**
 * openErrorDialog
 * @param props
 */
export declare const openWarnDialog: (props?: ModalProps) => {
    destroy: () => void;
    update: (configUpdate: import("antd").ModalFuncProps | ((prevConfig: import("antd").ModalFuncProps) => import("antd").ModalFuncProps)) => void;
};
/**
 * 警告的提示
 * @param content
 * @param duration
 */
export declare const openWarnMessage: (content?: JointContent, duration?: number | VoidFunction, onClose?: VoidFunction) => import("antd/es/message/interface").MessageType;
export {};
