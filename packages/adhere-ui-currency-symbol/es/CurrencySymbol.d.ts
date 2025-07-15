import type { CurrencySymbolComponent } from './types';
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
declare const CurrencySymbol: CurrencySymbolComponent;
export default CurrencySymbol;
