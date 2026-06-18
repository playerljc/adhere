import React, { type ReactNode } from 'react';
import type { I18nValue } from '../../types';
import './index.less';
export type FieldWithTipProps = {
    tip?: I18nValue | string | null;
    tipStyles?: string;
    lang: string;
    children: ReactNode;
};
export default function FieldWithTip({ tip, tipStyles, lang, children }: FieldWithTipProps): React.JSX.Element;
