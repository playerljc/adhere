import Popup from './Popup';
import Trigger from './Trigger';
import TriggerPrompt from './TriggerPrompt';
import SubmitButton from './SubmitButton';

// 导出类型
export type {
  IConfig,
  TriggerProps,
  TriggerPromptProps,
  SubmitButtonProps,
  TriggerHandle,
  TriggerPromptHandle,
  ActionConfig,
} from './types';

// 导出组件
export { default as Popup } from './Popup';
export { default as Trigger } from './Trigger';
export { default as TriggerPrompt } from './TriggerPrompt';
export { default as SubmitButton } from './SubmitButton';

// 默认导出
export default Popup;
