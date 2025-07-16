/**
 * ConfigProvider 导出文件
 * @description 导出全局配置提供者组件
 */

import ConfigProvider from './ConfigProvider';
import useTheme from './useTheme';
import { Context } from './Context';
import themeFunction from './theme';

// 导出主要组件
export default ConfigProvider;

// 导出工具函数和上下文
export { useTheme, Context, themeFunction };

// 导出 useTheme 相关类型
export type { UseThemeParams } from './useTheme';

// 导出其他类型
export type {
  ConfigProviderProps,
  ConfigProviderContext,
  ConfigProviderComponent,
  IntlType,
  ThemeConfig,
  MediaConfig,
  RouterType,
  IntlLanguage,
  IntlInitCallback,
} from './types';
