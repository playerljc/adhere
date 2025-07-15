# CurrencySymbol 货币符号组件

一个用于显示带有货币符号的金额的React组件，支持多种货币和丰富的自定义选项。

## 特性

- 🎯 支持30种常用货币
- 🎨 丰富的样式自定义选项
- ⚡ 数字动画效果支持
- 📱 响应式设计
- 🔧 TypeScript 完整支持
- 🎭 主题系统集成

## 安装

```bash
npm install @baifendian/adhere-ui-currency-symbol
```

## 基本用法

```tsx
import CurrencySymbol from '@baifendian/adhere-ui-currency-symbol';

// 基本用法
<CurrencySymbol amount={1234.56} code="USD" />

// 人民币（默认）
<CurrencySymbol amount={1234.56} />

// 欧元
<CurrencySymbol amount={1234.56} code="EUR" />
```

## 高级用法

### 自定义样式

```tsx
<CurrencySymbol 
  amount={1234.56} 
  code="EUR" 
  bold={false}
  danger={true}
  symbolSize="large"
  className="custom-wrapper"
  symbolClassName="custom-symbol"
  amountClassName="custom-amount"
/>
```

### 动画效果

```tsx
<CurrencySymbol 
  amount={1234.56} 
  isUseAnimation={true}
  countUpProps={{ 
    delay: 0.5,
    duration: 2,
    useEasing: true 
  }}
/>
```

### 对齐方式

```tsx
// 顶部对齐
<CurrencySymbol amount={1234.56} align="top" />

// 居中对齐
<CurrencySymbol amount={1234.56} align="center" />

// 底部对齐（默认）
<CurrencySymbol amount={1234.56} align="bottom" />
```

### 前缀和后缀

```tsx
<CurrencySymbol 
  amount={1234.56} 
  prefix="价格: "
  suffix=" (含税)"
/>
```

## API

### CurrencySymbol Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `amount` | `number` | `0` | 金额数值 |
| `code` | `string` | `'CNY'` | 货币代码（ISO 4217标准） |
| `bold` | `boolean` | `true` | 是否加粗显示 |
| `danger` | `boolean` | `false` | 是否为危险状态（红色显示） |
| `symbolSize` | `'small' \| 'middle' \| 'large'` | `'middle'` | 货币符号大小 |
| `isUseKilo` | `boolean` | `true` | 是否使用千分位分隔符 |
| `isUseAnimation` | `boolean` | `false` | 是否使用数字动画效果 |
| `align` | `'top' \| 'center' \| 'bottom'` | `'bottom'` | 货币符号与金额的对齐方式 |
| `className` | `string` | - | 外层容器CSS类名 |
| `style` | `CSSProperties` | - | 外层容器样式 |
| `symbolClassName` | `string` | - | 货币符号CSS类名 |
| `symbolStyle` | `CSSProperties` | - | 货币符号样式 |
| `amountClassName` | `string` | - | 金额容器CSS类名 |
| `amountStyle` | `CSSProperties` | - | 金额容器样式 |
| `amountInnerClassName` | `string` | - | 金额内部元素CSS类名 |
| `prefix` | `ReactNode` | - | 前缀内容 |
| `suffix` | `ReactNode` | - | 后缀内容 |
| `countUpProps` | `CountUpProps` | - | CountUp组件的额外属性 |

### 支持的货币

组件支持以下30种货币：

- USD (美元) - $
- EUR (欧元) - €
- GBP (英镑) - £
- JPY (日元) - ¥
- CAD (加拿大元) - $
- AUD (澳元) - $
- CHF (瑞士法郎) - CHF
- CNY (人民币) - ¥
- HKD (港币) - HK$
- SGD (新加坡元) - $
- SEK (瑞典克朗) - kr
- NOK (挪威克朗) - kr
- DKK (丹麦克朗) - kr
- THB (泰铢) - ฿
- NZD (新西兰元) - $
- ZAR (南非兰特) - R
- INR (印度卢比) - ₹
- BRL (巴西雷亚尔) - R$
- RUB (俄罗斯卢布) - ₽
- KRW (韩元) - ₩
- TRY (土耳其里拉) - ₺
- MXN (墨西哥比索) - $
- AED (阿联酋迪拉姆) - د.إ
- SAR (沙特里亚尔) - ﷼
- ARS (阿根廷比索) - $
- ILS (以色列新谢克尔) - ₪
- EGP (埃及镑) - £
- VND (越南盾) - ₫
- PHP (菲律宾比索) - ₱
- MYR (马来西亚林吉特) - RM

### 静态属性

```tsx
// 获取支持的货币代码列表
console.log(CurrencySymbol.currencies);

// 获取货币信息映射表
console.log(CurrencySymbol.currenciesMap);
```

## 类型定义

```tsx
import type { 
  CurrencySymbolProps, 
  CurrencySymbolComponent,
  CurrenciesItem,
  CurrencySymbolSize,
  CurrencySymbolAlign 
} from '@baifendian/adhere-ui-currency-symbol';
```

## 样式定制

组件使用CSS类名进行样式定制，主要类名包括：

- `.adhere-ui-currency-symbol` - 主容器
- `.adhere-ui-currency-symbol-symbol` - 货币符号
- `.adhere-ui-currency-symbol-amount` - 金额容器
- `.adhere-ui-currency-symbol-bold` - 加粗样式
- `.adhere-ui-currency-symbol-danger` - 危险状态样式

## 注意事项

1. 货币代码必须符合ISO 4217标准
2. 如果提供了不支持的货币代码，会回退到默认的CNY
3. 数字动画效果依赖react-countup库
4. 组件已使用React.memo优化性能

## 许可证

MIT

