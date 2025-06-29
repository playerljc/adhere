import init from '@baifendian/adhere-ui-css';

import { useUpdateEffect, useUpdateLayoutEffect } from 'ahooks';
import classNames from 'classnames';
import React, { memo, useContext, useLayoutEffect, useMemo, useRef, useState } from 'react';

import ConditionalRender from '@baifendian/adhere-ui-conditionalrender';
import Hooks from '@baifendian/adhere-ui-hooks';
import Intl from '@baifendian/adhere-util-intl';

// import Resource from '@baifendian/adhere-util-resource';
import { Context } from './Context';
import themeFunction from './theme';
import type { ConfigProviderComponent, ConfigProviderContext, ConfigProviderProps } from './types';
import useTheme from './useTheme';

const { useForceUpdate } = Hooks;

const selectorPrefix = 'adhere-ui-config-provider';

/**
 * ConfigProvider
 * @constructor
 * @classdesc 全局配置 国际化、字典配置
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

  const wrapperELRef = useRef<HTMLElement | null>(null);

  const context = useContext(Context);

  const targetIntl = useMemo<ConfigProviderProps['intl']>(() => {
    const lang = intl?.lang ?? context?.intl?.lang;

    const locales = intl?.locales ?? context?.intl?.locales;

    const prefix = intl?.prefix ?? context?.intl?.prefix ?? '';

    const mainLanguage = intl?.mainLanguage ?? context?.intl?.mainLanguage;

    // const extraLibLocales = intl?.extraLibLocales ?? context?.intl?.extraLibLocales;

    return {
      lang,
      locales,
      prefix,
      mainLanguage,
      // extraLibLocales,
    };
  }, [context]);

  const targetTheme = useMemo(() => {
    return theme ?? context?.theme;
  }, [context]);

  const targetMedia = useMemo(() => {
    return media ?? context?.media;
  }, [context]);

  const targetRouter = useMemo(() => {
    return router ?? context?.router;
  }, [context]);

  const targetPublicPath = useMemo(() => {
    return publicPath ?? context?.publicPath;
  }, [context]);

  const [isIntlInit, setIntlInit] = useState(false);

  const providerValue = useMemo<ConfigProviderContext>(
    () => ({
      media: {
        ...{
          isUseMedia: false,
          designWidth: 192,
        },
        ...(targetMedia ?? {}),
      },
      router: targetRouter ?? 'browser',
      theme: { ...(targetTheme ?? {}) },
      intl: {
        lang: targetIntl?.lang,
        prefix: targetIntl?.prefix,
        locales: targetIntl?.locales ?? {},
      },
      publicPath: targetPublicPath ?? '/',
    }),
    [targetIntl, targetMedia, targetRouter, targetTheme, targetPublicPath],
  );

  const forceUpdate = useForceUpdate();

  const targetChildren = useMemo(() => {
    if (isUseWrapper) {
      return (
        <div
          // @ts-ignore
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

  function initIntl() {
    return Intl.init(
      {
        prefix: targetIntl?.prefix || 'local',
        currentLocale: targetIntl?.lang ?? '',
        locales: targetIntl?.locales ?? {},
        mainLanguage: targetIntl?.mainLanguage || 'zh_CN',
        // extraLibLocales: targetIntl?.extraLibLocales,
      },
      Intl.isInit(),
    );
  }

  useUpdateEffect(() => {
    initIntl().then(() => {
      if (targetIntl?.lang) {
        // Resource?.Dict?.value?.LocalsMoment?.value[targetIntl?.lang]();
        forceUpdate();
      }
    });
  }, [targetIntl]);

  useLayoutEffect(() => {
    initIntl().then(() => {
      if (targetIntl?.lang) {
        // Resource?.Dict?.value?.LocalsMoment?.value[targetIntl?.lang]();
        setIntlInit(true);
        if (onIntlInit) onIntlInit();
      }
    });
  }, []);

  useUpdateLayoutEffect(() => {
    if (isIntlInit && wrapperELRef.current && !!targetTheme) {
      const baseTheme = Object.fromEntries(
        Object.entries(targetTheme).filter(([key]) => key !== 'components'),
      ) as { [prop: string]: string };

      // 初始化css变量
      init(baseTheme, wrapperELRef.current as HTMLElement, targetMedia);
    }
  }, [targetTheme, targetMedia, isIntlInit]);

  return (
    <ConditionalRender conditional={isIntlInit}>
      {() => <Context.Provider value={providerValue}>{targetChildren}</Context.Provider>}
    </ConditionalRender>
  );
});

const ConfigProvider = InternalConfigProvider as ConfigProviderComponent;

ConfigProvider.Context = Context;

ConfigProvider.useTheme = useTheme;

ConfigProvider.theme = themeFunction;

ConfigProvider.displayName = 'ConfigProvider';

export default ConfigProvider;
