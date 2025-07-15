import { openWarnDialog, openWarnMessage, clearWarnDialogTimer } from './WarnPrompt';

// 重新导出类型定义
export type {
  ConfigContent,
  Duration,
  JointContent,
  WarnDialogProps,
  WarnDialog,
  WarnMessage,
} from './types';

// 重新导出函数
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
export default {
  openWarnMessage,
  openWarnDialog,
  clearWarnDialogTimer,
};
