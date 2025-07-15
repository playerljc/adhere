/**
 * 错误提示组件
 * 
 * @description 提供错误对话框和错误消息提示功能
 * 
 * @example
 * ```typescript
 * import ErrorPrompt from '@baifendian/adhere-ui-prompt-errorprompt';
 * 
 * // 显示错误对话框
 * ErrorPrompt.openErrorDialog();
 * 
 * // 显示错误消息
 * ErrorPrompt.openErrorMessage('操作失败');
 * ```
 */
import { openErrorDialog, openErrorMessage } from './ErrorPrompt';

export default {
  openErrorDialog,
  openErrorMessage,
};

// 导出具体函数，支持按需导入
export { openErrorDialog, openErrorMessage };
