import type { DividerProps } from 'antd';
import React, { useContext } from 'react';

import { Divider } from '@baifendian/adhere-ui-anthoc';
import ConfigProvider from '@baifendian/adhere-ui-configprovider';

import { resolveI18nText } from '../../../../utils';
import { createSimpleFieldRenderDesign } from '../../../../utils/createSimpleFieldRenderDesign';

const DividerWrapper: React.FC<DividerProps> = (props) => {
  const ConfigProviderContext = useContext(ConfigProvider.Context);
  const lang = ConfigProviderContext.intl.lang!;

  const { children, ...rest } = props;
  const text = resolveI18nText(children as any, lang);
  return <Divider {...rest}>{text}</Divider>;
};

export const renderDesign = createSimpleFieldRenderDesign(DividerWrapper);
export const renderDesignToMobile = renderDesign;
