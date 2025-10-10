import { ConfigProvider } from 'antd-mobile';
import React, { useEffect, useMemo } from 'react';
import type { FC } from 'react';

import Util from '@baifendian/adhere-util';

import Context from './Context';
import { DesignTokens, InternalConfigProviderProps } from './types';

const _defaultToken: DesignTokens = {
  radiusS: 4,
  radiusM: 8,
  radiusL: 12,
  fontSize1: 9,
  fontSize2: 10,
  fontSize3: 11,
  fontSize4: 12,
  fontSize5: 13,
  fontSize6: 14,
  fontSize7: 15,
  fontSize8: 16,
  fontSize9: 17,
  fontSize10: 18,
  colorPrimary: '#1677ff',
  colorSuccess: '#00b578',
  colorWarning: '#ff8f1f',
  colorDanger: '#ff3141',
  colorYellow: '#ff9f18',
  colorOrange: '#ff6430',
  colorWathet: '#e7f1ff',
  colorText: '#333',
  colorTextSecondary: '#666',
  colorWeak: '#999',
  colorLight: '#ccc',
  colorBorder: '#eee',
  colorBackground: '#fff',
  colorHighlight: '#ff3141',
  colorWhite: '#fff',
  colorBox: '#f5f5f5',
  colorTextLightSolid: '#fff',
  colorTextDarkSolid: '#000',
  colorFillContent: '#f5f5f5',
  fontSizeMain: 13,
  fontFamily:
    '-apple-system, blinkmacsystemfont, "Helvetica Neue", helvetica, segoe ui, arial, roboto, "PingFang SC", "miui", "Hiragino Sans GB", "Microsoft Yahei", sans-serif',
  borderColor: '#eee',
};

// 存储当前最新的token值
let _currentToken: DesignTokens = { ..._defaultToken };

/**
 * 处理token值，根据配置转换为rem或保持原值
 */
const processTokenValue = (
  value: string | number | undefined,
  isUseREM: boolean,
  designWidth?: number,
): string | number | undefined => {
  if (isUseREM && typeof value === 'number' && designWidth !== undefined) {
    return Util.pxToRem(value, designWidth);
  }
  return value;
};

/**
 * 设置CSS变量到document.documentElement
 */
const setCSSVariable = (key: string, value: string | number | undefined): void => {
  if (value !== undefined) {
    document.documentElement.style.setProperty(
      `--adm-${Util.pascalCaseToKebabCase2(key)}`,
      String(value),
    );
  }
};

/**
 * InternalConfigProvider
 * @description 内部配置提供器，支持主题token配置和REM转换
 */
const InternalConfigProvider: FC<InternalConfigProviderProps> = ({ children, theme, ...props }) => {
  const { token: customToken, isUseREM = false, designWidth } = theme || {};

  // 合并并处理token
  const processedToken = useMemo(() => {
    const mergedToken = { ..._defaultToken, ...customToken };

    return (Object.keys(mergedToken) as Array<keyof DesignTokens>).reduce<DesignTokens>(
      (acc, key) => {
        const processedValue = processTokenValue(mergedToken[key], isUseREM, designWidth);
        if (processedValue !== undefined) {
          acc[key] = processedValue as any;
        }
        return acc;
      },
      {} as DesignTokens,
    );
  }, [customToken, isUseREM, designWidth]);

  // 同步token到HTML和全局变量
  useEffect(() => {
    _currentToken = processedToken;

    (Object.keys(processedToken) as Array<keyof DesignTokens>).forEach((key) => {
      setCSSVariable(key, processedToken[key]);
    });
  }, [processedToken]);

  return (
    <ConfigProvider {...props}>
      <Context.Provider value={theme}>{children}</Context.Provider>
    </ConfigProvider>
  );
};

/**
 * 获取当前最新的token值
 * @returns 当前token的副本
 */
export function getToken(): DesignTokens {
  return { ..._currentToken };
}

export default InternalConfigProvider;
