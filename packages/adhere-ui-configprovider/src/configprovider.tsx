import React, { FC, createContext, memo, useEffect, useState } from 'react';

import ConditionalRender from '@baifendian/adhere-ui-conditionalrender';
import Hooks from '@baifendian/adhere-ui-hooks';
import Intl from '@baifendian/adhere-util-intl';
import Resource from '@baifendian/adhere-util-resource';

import { ConfigProviderContext, ConfigProviderProps } from './types';

const Context = createContext<ConfigProviderContext>({});
const { useForceUpdate } = Hooks;

/**
 * ConfigProvider
 * @constructor
 * @classdesc 全局配置 国际化、字典配置
 */
const ConfigProvider: FC<ConfigProviderProps> = (props) => {
  const {
    intl: { lang, locales, prefix, mainLanguage },
    children,
  } = props;

  const [isIntlInit, setIntlInit] = useState(false);

  const forceUpdate = useForceUpdate();

  useEffect(() => {
    Intl.init(
      {
        prefix: prefix || 'local',
        currentLocale: lang,
        locales: locales || {},
        mainLanguage: mainLanguage || 'zh_CN',
      },
      Intl.isInit(),
    ).then(() => {
      Resource.Dict.value.LocalsMoment.value[lang]();

      if (!isIntlInit) {
        setIntlInit(true);
      } else {
        forceUpdate();
      }
    });
  }, [lang, locales, prefix]);

  return (
    <ConditionalRender conditional={isIntlInit}>
      {() => <Context.Provider value={{}}>{children()}</Context.Provider>}
    </ConditionalRender>
  );
};

export default memo(ConfigProvider);
