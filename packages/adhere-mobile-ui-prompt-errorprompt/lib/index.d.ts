import type { ErrorPromptComponent } from './types';
/**
 * 错误提示组件
 *
 * 提供两种错误提示方式：
 * 1. openErrorMessage - 轻量级的Toast错误提示
 * 2. openErrorDialog - 模态对话框形式的错误提示
 *
 * @example
 * ```tsx
 * import ErrorPrompt from '@baifendian/adhere-mobile-ui-prompt-errorprompt';
 *
 * // 显示错误消息
 * ErrorPrompt.openErrorMessage();
 *
 * // 显示错误对话框
 * ErrorPrompt.openErrorDialog({
 *   content: '操作失败，请重试',
 *   duration: 3000
 * });
 * ```
 */
declare const ErrorPrompt: ErrorPromptComponent;
export default ErrorPrompt;
export type { ErrorPromptComponent, ErrorDialogProps, Duration } from './types';
export { openErrorMessage, openErrorDialog } from './ErrorPrompt';
