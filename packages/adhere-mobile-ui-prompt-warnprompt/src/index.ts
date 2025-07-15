import { 
  openWarnDialog, 
  openWarnMessage, 
  getConfig, 
  updateConfig, 
  resetConfig 
} from './WarnPrompt';
import type { WarnPromptComponent } from './types';

/**
 * 警告提示组件
 * 
 * @description 提供警告消息和对话框的显示功能
 * 
 * @example
 * ```tsx
 * import WarnPrompt from '@baifendian/adhere-mobile-ui-prompt-warnprompt';
 * 
 * // 显示警告消息
 * WarnPrompt.openWarnMessage();
 * 
 * // 显示警告对话框
 * WarnPrompt.openWarnDialog({
 *   content: '这是一个警告'
 * });
 * 
 * // 配置管理
 * WarnPrompt.updateConfig({ defaultDuration: 5000 });
 * ```
 */
const WarnPrompt: WarnPromptComponent & {
  /**
   * 获取当前配置
   */
  getConfig: typeof getConfig;
  
  /**
   * 更新配置
   */
  updateConfig: typeof updateConfig;
  
  /**
   * 重置配置
   */
  resetConfig: typeof resetConfig;
} = {
  openWarnMessage,
  openWarnDialog,
  getConfig,
  updateConfig,
  resetConfig,
};

export default WarnPrompt;

// 导出类型
export type { 
  WarnDialogProps, 
  WarnDialog, 
  WarnPromptComponent, 
  WarnPromptConfig,
  Duration 
} from './types';

// 导出函数
export { 
  openWarnMessage, 
  openWarnDialog, 
  getConfig, 
  updateConfig, 
  resetConfig 
} from './WarnPrompt';
