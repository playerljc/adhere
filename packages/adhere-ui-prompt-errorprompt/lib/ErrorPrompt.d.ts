import { ErrorDialog, JointContent, duration } from './types';
/**
 * openErrorDialog
 * @param duration
 * @param props
 */
export declare const openErrorDialog: ErrorDialog;
/**
 * 错误的提示
 * @param content
 * @param duration
 * @param onClose
 */
export declare const openErrorMessage: (content?: JointContent, duration?: duration | undefined, onClose?: VoidFunction) => import("antd/es/message/interface").MessageType;
