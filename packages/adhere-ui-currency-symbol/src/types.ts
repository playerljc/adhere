import type { CSSProperties, NamedExoticComponent } from 'react';
import { CountUpProps } from 'react-countup/build';

import codes from './codes';
import currenciesMap from './currenciesMap';

export interface CurrenciesItem {
  name: string;
  symbol: string;
  code: string;
}

/**
 * CurrencySymbolProps
 * @interface CurrencySymbolProps
 */
export interface CurrencySymbolProps {
  className?: string;
  style?: CSSProperties;
  symbolClassName?: string;
  symbolStyle?: CSSProperties;
  amountClassName?: string;
  amountStyle?: CSSProperties;
  amountInnerClassName?: string;
  // 金额
  amount?: number;
  // 符号code
  code?: string;
  // 是否加粗显示
  bold?: boolean;
  // 是否是危险状态
  danger?: boolean;
  // 符号的大小
  symbolSize?: 'small' | 'middle' | 'large';
  // 是否使用千分位显示
  isUseKilo?: boolean;
  // 是否使用动画显示
  isUseAnimation?: boolean;
  // 符号和金额的对其方式
  align?: 'top' | 'center' | 'bottom';
  countUpProps?: CountUpProps;
}

export type CurrencySymbolComponent = NamedExoticComponent<CurrencySymbolProps> & {
  currencies: typeof codes;
  currenciesMap: typeof currenciesMap;
};
