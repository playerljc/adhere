import { JointContent, SuccessDialog, duration } from './types';
/**
 * openSuccessDialog
 * @param duration
 * @param props
 */
export declare const openSuccessDialog: SuccessDialog;
/**
 * 成功的提示
 * @param content
 * @param duration
 * @param onClose
 */
export declare const openSuccessMessage: (content?: JointContent, duration?: duration, onClose?: VoidFunction) => import("antd/es/message/interface").MessageType;
