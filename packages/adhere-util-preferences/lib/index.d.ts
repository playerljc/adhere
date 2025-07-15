import Preferences, { StorageType, StorageInterface } from './preferences';
import type { UserData, SessionData, AppConfig, StorageKey, StorageResult, StorageStats } from './types';
import { STORAGE_KEYS } from './types';
export type { StorageInterface, UserData, SessionData, AppConfig, StorageKey, StorageResult, StorageStats };
export { StorageType, Preferences, STORAGE_KEYS };
export default Preferences;
