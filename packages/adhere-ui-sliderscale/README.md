# 简介

&ensp;&ensp;一个带有刻度显示的滑块组件，支持自定义最小值、最大值、步进值和刻度间隔。提供直观的数值选择体验，适用于需要精确数值输入的场景。

- 支持自定义数值范围和步进
- 可配置刻度间隔和显示样式
- 提供流畅的滑动交互体验
- 支持主题定制和样式自定义
- 轻量级实现，性能优异

# ✨ 特性

- 🎚️ **灵活配置**: 支持自定义最小值、最大值、步进值和刻度间隔
- 📏 **刻度显示**: 智能显示刻度线和数值标签，提供直观的数值参考
- 🎨 **主题定制**: 支持 CSS 变量自定义，可完全定制外观样式
- ⚡ **高性能**: 使用 React.memo 优化，避免不必要的重渲染
- 🎯 **精确控制**: 支持精确的数值选择和回调处理
- 📱 **响应式**: 支持移动端和桌面端的触摸/鼠标操作
- 🔧 **易于使用**: 简洁的 API 设计，易于集成和使用
- 🎭 **边界处理**: 智能处理边界情况，确保组件稳定性
- 🌍 **国际化**: 支持国际化配置
- 📦 **按需加载**: 支持动态引入(babel-plugin-import)
- 🎯 **TypeScript**: 完整的 TypeScript 类型定义

# 🖥 兼容环境

- 现代浏览器，IE11+
- React >= 18.0.0

# 📦 安装

```bash
npm install @baifendian/adhere-ui-sliderscale --save
``` 

```bash
yarn add @baifendian/adhere-ui-sliderscale
```

# 🔨 使用

## 基础用法

```tsx
import React, { useState } from 'react';
import SliderScale from '@baifendian/adhere-ui-sliderscale';

const BasicExample = () => {
  const [value, setValue] = useState(50);

  return (
    <div>
      <h3>当前值: {value}</h3>
      <SliderScale
        min={0}
        max={100}
        step={1}
        value={value}
        interval={10}
        onChange={(newValue) => setValue(newValue)}
      />
    </div>
  );
};

export default BasicExample;
```

## 自定义范围和步进

```tsx
import React, { useState } from 'react';
import SliderScale from '@baifendian/adhere-ui-sliderscale';

const CustomRangeExample = () => {
  const [value, setValue] = useState(25);

  return (
    <SliderScale
      min={10}
      max={200}
      step={5}
      value={value}
      interval={20}
      onChange={(newValue) => setValue(newValue)}
    />
  );
};
```

## 温度控制器示例

```tsx
import React, { useState } from 'react';
import SliderScale from '@baifendian/adhere-ui-sliderscale';

const TemperatureController = () => {
  const [temperature, setTemperature] = useState(22);

  return (
    <div style={{ padding: '20px' }}>
      <h3>室内温度控制</h3>
      <p>当前温度: {temperature}°C</p>
      <SliderScale
        min={16}
        max={30}
        step={0.5}
        value={temperature}
        interval={2}
        onChange={setTemperature}
        style={{ marginTop: '20px' }}
      />
    </div>
  );
};
```

## 音量控制示例

```tsx
import React, { useState } from 'react';
import SliderScale from '@baifendian/adhere-ui-sliderscale';

const VolumeController = () => {
  const [volume, setVolume] = useState(50);

  return (
    <div style={{ padding: '20px' }}>
      <h3>音量控制</h3>
      <p>当前音量: {volume}%</p>
      <SliderScale
        min={0}
        max={100}
        step={1}
        value={volume}
        interval={25}
        onChange={setVolume}
        className="volume-slider"
      />
    </div>
  );
};
```

# 📚 API

## SliderScale Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| className | 自定义 CSS 类名 | string | - |
| style | 自定义样式对象 | CSSProperties | - |
| min | 最小值 | number | 0 |
| max | 最大值 | number | 100 |
| step | 步进值 | number | 1 |
| value | 当前值 | number | 0 |
| interval | 刻度的间隔 | number | 5 |
| onChange | 值变化时的回调函数 | (value: number) => void | - |

## 类型定义

```tsx
interface SliderScaleProps {
  /** 自定义 CSS 类名 */
  className?: string;
  /** 自定义样式对象 */
  style?: CSSProperties;
  /** 最小值，默认为 0 */
  min?: number;
  /** 最大值，默认为 100 */
  max?: number;
  /** 步进值，默认为 1 */
  step?: number;
  /** 当前值，默认为 0 */
  value?: number;
  /** 刻度的间隔，默认为 5 */
  interval?: number;
  /** 值变化时的回调函数 */
  onChange?: (value: number) => void;
}

/** 刻度项渲染结果类型 */
type ScaleItemResult = ReactElement | null;
```

# 🎨 样式定制

组件支持通过 CSS 变量进行样式定制：

## CSS 变量

```css
.adhere-ui-slider-scale {
  /* 容器边距 */
  --margin-top: 15px;
  --padding: 0;
  
  /* 滑块轨道样式 */
  --slider-runnable-track-height: 30px;
  --slider-runnable-track-background-color: #f2f2f2;
  --slider-runnable-track-border-radius: 5px;
  
  /* 滑块手柄样式 */
  --slider-thumb-margin-top: -10px;
  --slider-thumb-border-top: 18px solid rgba(0, 0, 0, 0.5);
  --slider-thumb-border-right: 10px solid transparent;
  
  /* 刻度容器样式 */
  --scale-left: 10px;
  --scale-right: 10px;
  
  /* 刻度项样式 */
  --scale-item-height: 10%;
  --scale-item-point-height: 30%;
  --scale-item-background-color: transparent;
  
  /* 刻度值样式 */
  --scale-item-value-width: 12px;
  --scale-item-value-bottom: -15px;
  --scale-item-value-margin-right: -6px;
  --scale-item-value-color: var(--adhere-color-text-tertiary);
  --scale-item-value-font-size: var(--adhere-font-size-sm);
}
```

## 自定义样式示例

```css
/* 自定义主题色彩 */
.custom-slider-scale {
  --slider-runnable-track-background-color: #e6f7ff;
  --slider-thumb-border-top: 18px solid #1890ff;
  --scale-item-value-color: #1890ff;
}

/* 紧凑模式 */
.compact-slider-scale {
  --margin-top: 10px;
  --slider-runnable-track-height: 20px;
  --scale-item-value-bottom: -12px;
  --scale-item-value-font-size: 12px;
}
```

# 🎯 高级用法

## 动态配置

```tsx
import React, { useState } from 'react';
import SliderScale from '@baifendian/adhere-ui-sliderscale';

const DynamicConfigExample = () => {
  const [config, setConfig] = useState({
    min: 0,
    max: 100,
    step: 1,
    interval: 10,
  });
  const [value, setValue] = useState(50);

  const updateConfig = (newConfig) => {
    setConfig({ ...config, ...newConfig });
    // 确保当前值在新范围内
    if (value < newConfig.min) setValue(newConfig.min);
    if (value > newConfig.max) setValue(newConfig.max);
  };

  return (
    <div>
      <div style={{ marginBottom: '20px' }}>
        <button onClick={() => updateConfig({ min: 0, max: 50 })}>
          范围 0-50
        </button>
        <button onClick={() => updateConfig({ min: 50, max: 200 })}>
          范围 50-200
        </button>
      </div>
      
      <SliderScale
        {...config}
        value={value}
        onChange={setValue}
      />
    </div>
  );
};
```

## 受控组件

```tsx
import React, { useState, useCallback } from 'react';
import SliderScale from '@baifendian/adhere-ui-sliderscale';

const ControlledExample = () => {
  const [value, setValue] = useState(30);

  const handleChange = useCallback((newValue: number) => {
    // 可以在这里添加验证逻辑
    if (newValue >= 0 && newValue <= 100) {
      setValue(newValue);
      console.log('值已更新:', newValue);
    }
  }, []);

  const resetValue = () => setValue(50);

  return (
    <div>
      <SliderScale
        min={0}
        max={100}
        step={1}
        value={value}
        interval={10}
        onChange={handleChange}
      />
      <button onClick={resetValue}>重置为 50</button>
    </div>
  );
};
```

# 🔧 最佳实践

## 1. 合理设置刻度间隔

```tsx
// 推荐：根据数值范围合理设置间隔
<SliderScale min={0} max={100} interval={10} />  // 显示 0, 10, 20, ..., 100
<SliderScale min={0} max={10} interval={1} />    // 显示 0, 1, 2, ..., 10
<SliderScale min={0} max={1000} interval={100} /> // 显示 0, 100, 200, ..., 1000
```

## 2. 性能优化

```tsx
// 使用 useCallback 优化回调函数
const handleChange = useCallback((value: number) => {
  // 处理值变化
}, []);

// 避免在 render 中创建新对象
const sliderStyle = useMemo(() => ({ marginTop: '20px' }), []);
```

## 3. 边界情况处理

```tsx
// 组件会自动处理边界情况
<SliderScale min={10} max={10} />     // 最小值等于最大值
<SliderScale min={10} max={11} />     // 范围只有1
<SliderScale min={-50} max={50} />    // 负数范围
```

# 📝 更新日志

查看 [CHANGELOG.md](./changelog/CHANGELOG.md) 了解详细的版本更新信息。

# 🔗 相关链接

- [在线演示](https://playerljc.github.io/adhere/index.html#/adhere/adhere/ui/sliderscale)
- [GitHub](https://github.com/playerljc/adhere)
- [问题反馈](https://github.com/playerljc/adhere/issues)

