import { openErrorDialog, openErrorMessage } from './ErrorPrompt';
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
const ErrorPrompt: ErrorPromptComponent = {
  openErrorMessage,
  openErrorDialog,
};

export default ErrorPrompt;

// 导出类型定义，方便用户使用
export type { ErrorPromptComponent, ErrorDialogProps, Duration } from './types';

// 导出具体方法，支持按需导入
export { openErrorMessage, openErrorDialog } from './ErrorPrompt';
