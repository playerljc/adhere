import type { FC } from 'react';
import { DesignTokens, InternalConfigProviderProps } from './types';
/**
 * InternalConfigProvider
 * @description 内部配置提供器，支持主题token配置和REM转换
 */
declare const InternalConfigProvider: FC<InternalConfigProviderProps>;
/**
 * 获取当前最新的token值
 * @returns 当前token的副本
 */
export declare function getToken(): DesignTokens;
export default InternalConfigProvider;
