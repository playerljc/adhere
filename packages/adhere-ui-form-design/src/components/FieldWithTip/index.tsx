import classNames from 'classnames';
import React, { type ReactNode } from 'react';

import { SELECT_PREFIX } from '../../constant';
import type { I18nValue } from '../../types';
import { isResolvedI18nTextEmpty, resolveI18nText, styleCodeStringToCSSProperties } from '../../utils';

import './index.less';

const selectorPrefix = `${SELECT_PREFIX}-field-with-tip`;
const tipSelectorPrefix = `${SELECT_PREFIX}-field-tip`;

export type FieldWithTipProps = {
  tip?: I18nValue | string | null;
  tipStyles?: string;
  lang: string;
  children: ReactNode;
};

function FieldTipDesign({
  tip,
  tipStyles,
  lang,
}: {
  tip?: I18nValue | string | null;
  tipStyles?: string;
  lang: string;
}) {
  if (isResolvedI18nTextEmpty(tip, lang)) {
    return null;
  }

  const text = resolveI18nText(tip, lang);
  const style = styleCodeStringToCSSProperties(tipStyles ?? '');

  return (
    <div className={classNames(tipSelectorPrefix)} style={style ?? {}}>
      {text}
    </div>
  );
}

export default function FieldWithTip({ tip, tipStyles, lang, children }: FieldWithTipProps) {
  return (
    <div className={classNames(selectorPrefix)}>
      {children}
      <FieldTipDesign tip={tip} tipStyles={tipStyles} lang={lang} />
    </div>
  );
}
