import init from '@baifendian/adhere-ui-css';

import { useUpdateEffect, useUpdateLayoutEffect } from 'ahooks';
import classNames from 'classnames';
import React, { createContext, memo, useLayoutEffect, useRef, useState } from 'react';

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
    children,
    onIntlInit,
  } = props;

  const wrapperELRef = useRef<HTMLElement | null>(null);

  const [isIntlInit, setIntlInit] = useState(false);

  const forceUpdate = useForceUpdate();

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
    // console.log('useLayoutEffect');

    initIntl().then(() => {
      Resource.Dict.value.LocalsMoment.value[lang]();

      // console.log('initIntl');

      setIntlInit(true);

      if (onIntlInit) onIntlInit();
    });
  }, []);

  useUpdateLayoutEffect(() => {
    // console.log('useUpdateLayoutEffect');

    if (isIntlInit && wrapperELRef.current) {
      init(theme, wrapperELRef.current as HTMLElement);
    }
  }, [theme, isIntlInit]);

  return (
    <ConditionalRender conditional={isIntlInit}>
      {() => (
        <Context.Provider
          value={{
            intl: {
              lang,
              prefix,
              locales: locales ?? {},
            },
          }}
        >
          <div
            // @ts-ignore
            ref={wrapperELRef}
            className={classNames(selectorPrefix, props.className ?? '')}
            style={props.style ?? {}}
          >
            {children()}
          </div>
        </Context.Provider>
      )}
    </ConditionalRender>
  );
});

const ConfigProvider = InternalConfigProvider as ConfigProviderComponent;

ConfigProvider.Context = Context;

ConfigProvider.displayName = 'ConfigProvider';

export default ConfigProvider;
