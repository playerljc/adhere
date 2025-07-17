/**
 * ConfigProvider 导出文件
 * @description 导出全局配置提供者组件
 */
import ConfigProvider from './ConfigProvider';
import useTheme from './useTheme';
import { Context } from './Context';
import themeFunction from './theme';
export default ConfigProvider;
export { useTheme, Context, themeFunction };
export type { UseThemeParams } from './useTheme';
export type { ConfigProviderProps, ConfigProviderContext, ConfigProviderComponent, IntlType, ThemeConfig, MediaConfig, RouterType, IntlLanguage, IntlInitCallback, } from './types';
