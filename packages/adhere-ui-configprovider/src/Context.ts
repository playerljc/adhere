import { createContext } from 'react';

import type { ConfigProviderContext } from './types';

/**
 * ConfigProvider 上下文对象
 * 用于在组件树中传递配置信息
 */
export const Context = createContext<ConfigProviderContext>({} as ConfigProviderContext);
