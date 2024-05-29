import init from '@baifendian/adhere-ui-css';

import { useUpdateEffect, useUpdateLayoutEffect } from 'ahooks';
import classNames from 'classnames';
import React, { createContext, memo, useLayoutEffect, useMemo, useRef, useState } from 'react';

import ConditionalRender from '@baifendian/adhere-ui-conditionalrender';
import Hooks from '@baifendian/adhere-ui-hooks';
import Intl from '@baifendian/adhere-util-intl';
import Resource from '@baifendian/adhere-util-resource';

import type { ConfigProviderComponent, ConfigProviderContext, ConfigProviderProps } from './types';

export const Context = createContext<ConfigProviderContext>({} as ConfigProviderContext);

const { useForceUpdate } = Hooks;

const selectorPrefix = 'adhere-ui-config-provider';

/**
 * ConfigProvider
 * @constructor
 * @classdesc 全局配置 国际化、字典配置
 */
const InternalConfigProvider = memo<ConfigProviderProps>((props) => {
  const {
    intl: { lang, locales, prefix, mainLanguage },
    theme,
    media,
    children,
    onIntlInit,
    isUseWrapper = true,
  } = props;

  const wrapperELRef = useRef<HTMLElement | null>(null);

  const [isIntlInit, setIntlInit] = useState(false);

  const providerValue = useMemo<ConfigProviderContext>(
    () => ({
      intl: {
        lang,
        prefix,
        locales: locales ?? {},
      },
      media: {
        ...{
          isUseMedia: false,
          designWidth: 192,
        },
        ...(media ?? {}),
      },
    }),
    [lang, prefix, locales, media],
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
        prefix: prefix || 'local',
        currentLocale: lang,
        locales: locales ?? {},
        mainLanguage: mainLanguage || 'zh_CN',
      },
      Intl.isInit(),
    );
  }

  useUpdateEffect(() => {
    initIntl().then(() => {
      Resource.Dict.value.LocalsMoment.value[lang]();

      forceUpdate();
    });
  }, [lang, locales, prefix, mainLanguage]);

  useLayoutEffect(() => {
    initIntl().then(() => {
      Resource.Dict.value.LocalsMoment.value[lang]();

      setIntlInit(true);

      if (onIntlInit) onIntlInit();
    });
  }, []);

  useUpdateLayoutEffect(() => {
    if (isIntlInit && wrapperELRef.current) {
      // 初始化css变量
      init(theme, wrapperELRef.current as HTMLElement, media);
    }
  }, [theme, isIntlInit]);

  return (
    <ConditionalRender conditional={isIntlInit}>
      {() => <Context.Provider value={providerValue}>{targetChildren}</Context.Provider>}
    </ConditionalRender>
  );
});

const ConfigProvider = InternalConfigProvider as ConfigProviderComponent;

ConfigProvider.Context = Context;

ConfigProvider.displayName = 'ConfigProvider';

export default ConfigProvider;
