import classNames from 'classnames';
import React, { memo, useMemo, useRef } from 'react';
import CountUp from 'react-countup';

import ConfigProvider from '@baifendian/adhere-ui-configprovider';

import codes from './codes';
import currenciesMap from './currenciesMap';
import type { CurrencySymbolComponent, CurrencySymbolProps } from './types';
import { isValidCurrencyCode } from './utils';

const selectorPrefix = 'adhere-ui-currency-symbol';

const { useTheme } = ConfigProvider;

/**
 * 内部货币符号组件
 * @description 实际的货币符号渲染组件，使用memo优化性能
 * @param props - 组件属性
 * @returns JSX.Element
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
    const wrapperRef = useRef<HTMLSpanElement>(null);

    // 使用useMemo优化性能，避免不必要的重新计算
    const targetCode = useMemo(() => {
      const providedCode = code ?? 'CNY';
      // 验证货币代码有效性，如果无效则回退到CNY
      return isValidCurrencyCode(providedCode) ? providedCode : 'CNY';
    }, [code]);
    
    const targetAmount = useMemo(() => amount ?? 0, [amount]);
    const targetBold = useMemo(() => bold ?? true, [bold]);
    const targetDanger = useMemo(() => danger ?? false, [danger]);
    const targetSymbolSize = useMemo(() => symbolSize ?? 'middle', [symbolSize]);
    const targetIsUseKilo = useMemo(() => isUseKilo ?? true, [isUseKilo]);
    const targetIsUseAnimation = useMemo(() => isUseAnimation ?? false, [isUseAnimation]);
    const targetAlign = useMemo(() => align ?? 'bottom', [align]);

    // 获取货币信息
    const currencyInfo = useMemo(() => currenciesMap.get(targetCode), [targetCode]);

    // 应用主题
    useTheme<HTMLSpanElement>({
      elRef: wrapperRef,
      group: 'normal',
      displayName: 'CurrencySymbol',
    });

    return (
      <span
        ref={wrapperRef}
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
          {currencyInfo?.symbol}
        </span>

        <span
          className={classNames(`${selectorPrefix}-amount`, amountClassName)}
          style={amountStyle ?? {}}
        >
          <CountUp
            className={amountInnerClassName}
            duration={targetIsUseAnimation ? 1 : 0.1}
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

/**
 * 货币符号组件
 * @description 用于显示带有货币符号的金额，支持多种货币和自定义样式
 * @example
 * ```tsx
 * // 基本用法
 * <CurrencySymbol amount={1234.56} code="USD" />
 * 
 * // 自定义样式
 * <CurrencySymbol 
 *   amount={1234.56} 
 *   code="EUR" 
 *   bold={false}
 *   danger={true}
 *   symbolSize="large"
 * />
 * 
 * // 带动画效果
 * <CurrencySymbol 
 *   amount={1234.56} 
 *   isUseAnimation={true}
 *   countUpProps={{ delay: 0.5 }}
 * />
 * ```
 */
const CurrencySymbol = InternalCurrencySymbol as CurrencySymbolComponent;

CurrencySymbol.displayName = 'CurrencySymbol';

// 静态属性
CurrencySymbol.currencies = codes;
CurrencySymbol.currenciesMap = currenciesMap;

export default CurrencySymbol;
