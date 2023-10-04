import { JointContent, WarnDialog, duration } from './types';
/**
 * openWarnDialog
 * @param duration
 * @param props
 */
export declare const openWarnDialog: WarnDialog;
/**
 * 警告的提示
 * @param content
 * @param duration
 * @param onClose
 */
export declare const openWarnMessage: (content?: JointContent, duration?: duration | undefined, onClose?: VoidFunction) => import("antd/es/message/interface").MessageType;
