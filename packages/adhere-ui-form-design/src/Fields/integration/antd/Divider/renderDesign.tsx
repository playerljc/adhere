import { Divider } from '@baifendian/adhere-ui-anthoc';
import type { DividerProps } from 'antd';
import React from 'react';

import { SELECT_VALUE_KEY_NAME } from '../../../../constant';
import type { I18nValue } from '../../../../types';
import { createSimpleFieldRenderDesign } from '../../../../utils/createSimpleFieldRenderDesign';
import { resolveI18nText } from '../../../../utils';

function getI18nText(v: unknown): string | undefined {
  if (!v) return undefined;
  if (typeof v === 'string') return v;

  if (typeof v === 'object' && v !== null && SELECT_VALUE_KEY_NAME in (v as Record<string, any>)) {
    const i18n = v as I18nValue;
    const lang = i18n[SELECT_VALUE_KEY_NAME];
    return resolveI18nText(i18n, lang);
  }

  return undefined;
}

const DividerWrapper: React.FC<DividerProps> = (props) => {
  const { children, ...rest } = props;
  const text = getI18nText(children);
  return <Divider {...rest}>{text}</Divider>;
};

export const renderDesign = createSimpleFieldRenderDesign(DividerWrapper);
export const renderDesignToMobile = renderDesign;

