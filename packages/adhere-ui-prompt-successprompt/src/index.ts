import { 
  openSuccessDialog, 
  openSuccessMessage, 
  openSuccessMessageWithParams,
  clearSuccessDialogTimer 
} from './SuccessPrompt';

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
export default {
  /** 打开成功对话框 */
  openSuccessDialog,
  /** 显示成功消息提示 */
  openSuccessMessage,
  /** 显示成功消息提示（对象参数版本） */
  openSuccessMessageWithParams,
  /** 清理全局定时器 */
  clearSuccessDialogTimer,
};

// 命名导出
export {
  openSuccessDialog,
  openSuccessMessage,
  openSuccessMessageWithParams,
  clearSuccessDialogTimer,
};

// 类型导出
export type {
  SuccessDialogProps,
  SuccessDialog,
  JointContent,
  Duration,
  SuccessMessageParams,
} from './types';
