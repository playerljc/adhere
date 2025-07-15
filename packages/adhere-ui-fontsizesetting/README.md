# @baifendian/adhere-ui-fontsizesetting

字体大小设置组件，提供字体大小调节功能，包含预设选项和滑动条控制。

## 安装

```bash
npm install @baifendian/adhere-ui-fontsizesetting
# 或
yarn add @baifendian/adhere-ui-fontsizesetting
```

## 使用

```tsx
import React, { useState } from 'react';
import FontSizeSetting from '@baifendian/adhere-ui-fontsizesetting';

const App = () => {
  const [fontSize, setFontSize] = useState(50);

  const handleFontSizeChange = (value: number) => {
    setFontSize(value);
    console.log('字体大小:', value);
  };

  return (
    <div>
      <h2>字体大小设置</h2>
      <FontSizeSetting
        value={fontSize}
        onChange={handleFontSizeChange}
        min={0}
        max={100}
        step={1}
      />
      <p style={{ fontSize: `${fontSize}px` }}>
        当前字体大小: {fontSize}px
      </p>
    </div>
  );
};

export default App;
```

## API

### FontSizeSettingProps

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| className | 自定义CSS类名 | `string` | - | - |
| style | 自定义内联样式 | `CSSProperties` | - | - |
| min | 字体大小最小值 | `number` | `0` | - |
| max | 字体大小最大值 | `number` | `100` | - |
| step | 滑动步长 | `number` | `1` | - |
| value | 当前字体大小值 | `number` | - | - |
| onChange | 字体大小变化时的回调函数 | `(value: number) => void` | - | - |

### 预设选项

组件内置了四个字体大小预设选项：

- **small**: 小字体 (0)
- **medium**: 中等字体 (33)
- **large**: 大字体 (66)
- **extra_large**: 超大字体 (100)

用户可以通过点击预设选项快速设置字体大小，也可以通过滑动条进行精确调节。

## 特性

- 🎯 **预设选项**: 提供常用的字体大小预设
- 🎛️ **滑动控制**: 支持精确的滑动条调节
- ♿ **无障碍支持**: 支持键盘导航和屏幕阅读器
- 🎨 **主题支持**: 集成主题系统
- 🌍 **国际化**: 支持多语言显示
- 📱 **响应式**: 适配不同屏幕尺寸

## 类型定义

```tsx
import type { FontSizeSettingProps, FontSizePreset, FontSizePresetConfig } from '@baifendian/adhere-ui-fontsizesetting';

// 组件属性类型
interface FontSizeSettingProps extends Omit<SliderSingleProps, 'onChange'> {
  className?: string;
  style?: CSSProperties;
  min?: number;
  max?: number;
  step?: number;
  value?: number;
  onChange?: (value: number) => void;
}

// 预设选项类型
type FontSizePreset = 'small' | 'medium' | 'large' | 'extra_large';

// 预设配置类型
interface FontSizePresetConfig {
  label: string;
  value: number;
}
```

## 依赖

- React >= 18.0.0
- React DOM >= 18.0.0
- Antd >= 5.0.0
- @baifendian/adhere-ui-configprovider
- @baifendian/adhere-util-intl

## 许可证

ISC

