import init from '@baifendian/adhere-ui-css';

import { useUpdateEffect } from 'ahooks';
import React, { createContext, memo, useEffect, useState } from 'react';

import ConditionalRender from '@baifendian/adhere-ui-conditionalrender';
import Hooks from '@baifendian/adhere-ui-hooks';
import Intl from '@baifendian/adhere-util-intl';
import Resource from '@baifendian/adhere-util-resource';

import type { ConfigProviderComponent, ConfigProviderContext, ConfigProviderProps } from './types';

export const Context = createContext<ConfigProviderContext>({});
const { useForceUpdate } = Hooks;

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

  const [isIntlInit, setIntlInit] = useState(false);

  const forceUpdate = useForceUpdate();

  useEffect(() => {
    Intl.init(
      {
        prefix: prefix || 'local',
        currentLocale: lang,
        locales: locales ?? {},
        mainLanguage: mainLanguage || 'zh_CN',
      },
      Intl.isInit(),
    ).then(() => {
      Resource.Dict.value.LocalsMoment.value[lang]();

      if (!isIntlInit) {
        setIntlInit(true);
        if (onIntlInit) onIntlInit();
      } else {
        forceUpdate();
      }
    });
  }, [lang, locales, prefix]);

  useEffect(() => {
    init(theme);
  }, []);

  useUpdateEffect(() => {
    init(theme);
  }, [theme]);

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
          {children()}
        </Context.Provider>
      )}
    </ConditionalRender>
  );
});

const ConfigProvider = InternalConfigProvider as ConfigProviderComponent;

ConfigProvider.Context = Context;

ConfigProvider.displayName = 'ConfigProvider';

export default ConfigProvider;
