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
    amount?: number;
    code?: string;
    bold?: boolean;
    danger?: boolean;
    symbolSize?: 'small' | 'middle' | 'large';
    isUseKilo?: boolean;
    isUseAnimation?: boolean;
    align?: 'top' | 'center' | 'bottom';
    countUpProps?: CountUpProps;
}
export type CurrencySymbolComponent = NamedExoticComponent<CurrencySymbolProps> & {
    currencies: typeof codes;
    currenciesMap: typeof currenciesMap;
};
