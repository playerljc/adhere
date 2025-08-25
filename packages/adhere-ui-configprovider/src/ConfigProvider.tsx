import init from '@baifendian/adhere-ui-css';

import { useUpdateEffect, useUpdateLayoutEffect } from 'ahooks';
import classNames from 'classnames';
import React, { memo, useContext, useLayoutEffect, useMemo, useRef, useState } from 'react';

import ConditionalRender from '@baifendian/adhere-ui-conditionalrender';
import type { ThemeConfig as CSSThemeConfig } from '@baifendian/adhere-ui-css/es/types';
import Hooks from '@baifendian/adhere-ui-hooks';
import Intl from '@baifendian/adhere-util-intl';

import { Context } from './Context';
import themeFunction from './theme';
import type { ConfigProviderComponent, ConfigProviderContext, ConfigProviderProps } from './types';
import useTheme from './useTheme';

const { useForceUpdate } = Hooks;

const selectorPrefix = 'adhere-ui-config-provider';

/**
 * ConfigProvider 内部组件
 * @description 全局配置提供者，负责国际化、字典配置和主题管理
 * @param props ConfigProvider属性
 * @returns JSX.Element
 */
const InternalConfigProvider = memo<ConfigProviderProps>((props) => {
  const {
    intl,
    theme,
    media,
    children,
    onIntlInit,
    router,
    publicPath,
    isUseWrapper = true,
  } = props;

  const wrapperELRef = useRef<HTMLDivElement | null>(null);
  const context = useContext(Context);

  // 合并国际化配置
  const targetIntl = useMemo<ConfigProviderProps['intl']>(() => {
    const lang = intl?.lang ?? context?.intl?.lang;
    const locales = intl?.locales ?? context?.intl?.locales;
    const prefix = intl?.prefix ?? context?.intl?.prefix ?? '';
    const mainLanguage = intl?.mainLanguage ?? context?.intl?.mainLanguage;

    return {
      lang,
      locales,
      prefix,
      mainLanguage,
    };
  }, [intl, context]);

  // 合并主题配置
  const targetTheme = useMemo(() => {
    return theme ?? context?.theme;
  }, [theme, context]);

  // 合并媒体配置
  const targetMedia = useMemo(() => {
    return media ?? context?.media;
  }, [media, context]);

  // 合并路由配置
  const targetRouter = useMemo(() => {
    return router ?? context?.router;
  }, [router, context]);

  // 合并公共路径配置
  const targetPublicPath = useMemo(() => {
    return publicPath ?? context?.publicPath;
  }, [publicPath, context]);

  const [isIntlInit, setIntlInit] = useState(false);
  const forceUpdate = useForceUpdate();

  // 构建Provider值
  const providerValue = useMemo<ConfigProviderContext>(
    () => ({
      media: {
        isUseMedia: false,
        designWidth: 192,
        ...(targetMedia ?? {}),
      },
      router: targetRouter ?? 'browser',
      theme: { ...(targetTheme ?? {}) },
      intl: {
        lang: targetIntl?.lang,
        prefix: targetIntl?.prefix ?? '',
        locales: targetIntl?.locales ?? {},
        mainLanguage: targetIntl?.mainLanguage,
      },
      publicPath: targetPublicPath ?? '/',
    }),
    [targetIntl, targetMedia, targetRouter, targetTheme, targetPublicPath],
  );

  // 渲染子组件
  const targetChildren = useMemo(() => {
    if (isUseWrapper) {
      return (
        <div
          ref={wrapperELRef}
          className={classNames(selectorPrefix, props.className ?? '')}
          style={props.style ?? {}}
        >
          {children()}
        </div>
      );
    }

    return children();
  }, [isUseWrapper, children, props.className, props.style]);

  /**
   * 初始化国际化
   * @returns Promise<void>
   */
  async function initIntl(): Promise<void> {
    try {
      await Intl.init(
        {
          prefix: targetIntl?.prefix || 'local',
          currentLocale: targetIntl?.lang ?? '',
          locales: targetIntl?.locales ?? {},
          mainLanguage: targetIntl?.mainLanguage || 'zh_CN',
        },
        Intl.isInit(),
      );
    } catch (error) {
      console.error('Failed to initialize internationalization:', error);
    }
  }

  // 国际化配置变化时重新初始化
  useUpdateEffect(() => {
    initIntl().then(() => {
      if (targetIntl?.lang) {
        forceUpdate();
      }
    });
  }, [targetIntl]);

  // 组件挂载时初始化国际化
  useLayoutEffect(() => {
    initIntl().then(() => {
      if (targetIntl?.lang) {
        setIntlInit(true);
        if (onIntlInit) {
          onIntlInit();
        }
      }
    });
  }, []);

  // 主题和媒体配置变化时重新初始化CSS变量
  useUpdateLayoutEffect(() => {
    if (isIntlInit && wrapperELRef.current && targetTheme) {
      try {
        const baseTheme = Object.fromEntries(
          Object.entries(targetTheme).filter(([key]) => key !== 'components'),
        ) as CSSThemeConfig;

        // 初始化CSS变量
        init(baseTheme, document.documentElement, targetMedia);
      } catch (error) {
        console.error('Failed to initialize CSS variables:', error);
      }
    }
  }, [targetTheme, targetMedia, isIntlInit]);

  return (
    <ConditionalRender conditional={isIntlInit}>
      {() => <Context.Provider value={providerValue}>{targetChildren}</Context.Provider>}
    </ConditionalRender>
  );
});

// 设置组件显示名称
InternalConfigProvider.displayName = 'InternalConfigProvider';

/**
 * ConfigProvider 组件
 * @description 全局配置提供者，提供国际化、主题、媒体等配置
 */
const ConfigProvider = InternalConfigProvider as ConfigProviderComponent;

// 添加静态属性
ConfigProvider.Context = Context;
ConfigProvider.useTheme = useTheme;
ConfigProvider.theme = themeFunction;
ConfigProvider.displayName = 'ConfigProvider';

export default ConfigProvider;
