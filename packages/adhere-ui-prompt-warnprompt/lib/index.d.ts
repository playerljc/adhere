import { openWarnDialog, openWarnMessage, clearWarnDialogTimer } from './WarnPrompt';
export type { ConfigContent, Duration, JointContent, WarnDialogProps, WarnDialog, WarnMessage, } from './types';
export { openWarnDialog, openWarnMessage, clearWarnDialogTimer };
/**
 * 警告提示模块
 *
 * @description 提供警告对话框和警告消息的功能
 *
 * @example
 * ```tsx
 * import { openWarnDialog, openWarnMessage, clearWarnDialogTimer } from '@baifendian/adhere-ui-prompt-warnprompt';
 *
 * // 显示警告对话框
 * openWarnDialog({
 *   content: '操作确认',
 *   duration: 5000
 * });
 *
 * // 显示警告消息
 * openWarnMessage('操作失败');
 *
 * // 清理定时器（在组件卸载时）
 * useEffect(() => {
 *   return () => clearWarnDialogTimer();
 * }, []);
 * ```
 */
declare const _default: {
    openWarnMessage: import("./types").WarnMessage;
    openWarnDialog: import("./types").WarnDialog;
    clearWarnDialogTimer: () => void;
};
export default _default;
