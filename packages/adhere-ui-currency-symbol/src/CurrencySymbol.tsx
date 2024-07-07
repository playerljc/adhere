import classNames from 'classnames';
import React, { memo, useMemo } from 'react';
import CountUp from 'react-countup';

import codes from './codes';
import currenciesMap from './currenciesMap';
import type { CurrencySymbolComponent, CurrencySymbolProps } from './types';

const selectorPrefix = 'adhere-ui-currency-symbol';

/**
 * InternalCurrencySymbol
 */
const InternalCurrencySymbol = memo<CurrencySymbolProps>(
  ({
    className,
    style,
    symbolClassName,
    symbolStyle,
    amountClassName,
    amountStyle,
    amountInnerClassName,
    amount,
    code,
    bold,
    danger,
    symbolSize,
    isUseKilo,
    isUseAnimation,
    countUpProps,
    prefix,
    suffix,
    align,
  }) => {
    const targetCode = useMemo(() => code ?? 'CNY', [code]);

    const targetAmount = useMemo(() => amount ?? 0, [amount]);

    const targetBold = useMemo(() => bold ?? true, [bold]);

    const targetDanger = useMemo(() => danger ?? false, [danger]);

    const targetSymbolSize = useMemo(() => symbolSize ?? 'middle', [symbolSize]);

    const targetIsUseKilo = useMemo(() => isUseKilo ?? true, [isUseKilo]);

    const targetIsUseAnimation = useMemo(() => isUseAnimation ?? false, [isUseAnimation]);

    const targetAlign = useMemo(() => align ?? 'bottom', [align]);

    return (
      <span
        className={classNames(selectorPrefix, className, `${selectorPrefix}-${targetAlign}`, {
          [`${selectorPrefix}-bold`]: targetBold,
          [`${selectorPrefix}-danger`]: targetDanger,
        })}
        style={style ?? {}}
      >
        {prefix}
        <span
          className={classNames(
            `${selectorPrefix}-symbol`,
            symbolClassName,
            `${selectorPrefix}-symbol-${targetSymbolSize}`,
          )}
          style={symbolStyle ?? {}}
        >
          {currenciesMap.get(targetCode)?.symbol}
        </span>

        <span
          className={classNames(`${selectorPrefix}-amount`, amountClassName)}
          style={amountStyle ?? {}}
        >
          <CountUp
            className={amountInnerClassName}
            duration={targetIsUseAnimation ? 1 : 0}
            separator={targetIsUseKilo ? ',' : ''}
            {...(countUpProps ?? {})}
            end={targetAmount}
          />
        </span>
        {suffix}
      </span>
    );
  },
);

const CurrencySymbol = InternalCurrencySymbol as CurrencySymbolComponent;

CurrencySymbol.displayName = 'CurrencySymbol';

CurrencySymbol.currencies = codes;

CurrencySymbol.currenciesMap = currenciesMap;

export default CurrencySymbol;
