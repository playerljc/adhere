import Preferences, { StorageType, StorageInterface } from './preferences';
import type {
  UserData,
  SessionData,
  AppConfig,
  StorageKey,
  StorageResult,
  StorageStats,
} from './types';
import { STORAGE_KEYS } from './types';

// 导出类型和枚举
export type { StorageInterface, UserData, SessionData, AppConfig, StorageKey, StorageResult, StorageStats };
export { StorageType, Preferences, STORAGE_KEYS };

// 导出默认对象（保持向后兼容性）
export default Preferences;
