import { openSuccessDialog, openSuccessMessage, openSuccessMessageWithParams, clearSuccessDialogTimer } from './SuccessPrompt';
/**
 * 成功提示组件
 *
 * @description 提供多种成功提示功能，包括对话框和消息提示
 *
 * @example
 * ```typescript
 * import SuccessPrompt from '@baifendian/adhere-ui-prompt-successprompt';
 *
 * // 显示成功对话框
 * SuccessPrompt.openSuccessDialog();
 *
 * // 显示成功消息
 * SuccessPrompt.openSuccessMessage('操作成功');
 *
 * // 使用对象参数
 * SuccessPrompt.openSuccessMessageWithParams({
 *   content: '保存成功',
 *   duration: 3000
 * });
 *
 * // 清理定时器
 * SuccessPrompt.clearSuccessDialogTimer();
 * ```
 */
declare const _default: {
    /** 打开成功对话框 */
    openSuccessDialog: import("./types").SuccessDialog;
    /** 显示成功消息提示 */
    openSuccessMessage: (content?: import("./types").JointContent, duration?: import("./types").Duration, onClose?: VoidFunction) => void;
    /** 显示成功消息提示（对象参数版本） */
    openSuccessMessageWithParams: (params: import("./types").SuccessMessageParams) => void;
    /** 清理全局定时器 */
    clearSuccessDialogTimer: () => void;
};
export default _default;
export { openSuccessDialog, openSuccessMessage, openSuccessMessageWithParams, clearSuccessDialogTimer, };
export type { SuccessDialogProps, SuccessDialog, JointContent, Duration, SuccessMessageParams, } from './types';
