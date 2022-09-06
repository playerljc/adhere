import React, { FC, useEffect, createContext, useState } from 'react';
import Intl from '@baifendian/adhere-util-intl';
import Resource from '@baifendian/adhere-util-resource';
import ConditionalRender from '@baifendian/adhere-ui-conditionalrender';
import Hooks from '@baifendian/adhere-ui-hooks';

import { ConfigProviderProps, ConfigProviderContext } from './types';

const Context = createContext<ConfigProviderContext>({});
const { useForceUpdate } = Hooks;

/**
 * ConfigProvider
 * @constructor
 * @classdesc 全局配置 国际化、字典配置
 */
const ConfigProvider: FC<ConfigProviderProps> = (props) => {
  const {
    intl: { lang, locales, prefix },
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

export default ConfigProvider;
