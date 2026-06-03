# DisabledText 禁用文本组件

## 简介

`DisabledText` 是一个用于在表单设计器中显示禁用状态文本内容的组件。该组件会以视觉上的禁用样式展示文本，禁止用户交互。

## 特性

- 支持自定义子元素内容
- 内置禁用状态样式（半透明、不可选择、禁用光标）
- 支持 forwardRef 引用
- 支持 className 自定义类名
- 阻止所有子元素的指针事件

## 安装

```bash
npm install @baifendian/adhere-ui-form-design
```

## 使用示例

```tsx
import React from 'react';
import { DisabledText } from '@baifendian/adhere-ui-form-design';

const App = () => {
  return (
    <div>
      <DisabledText>这是一段禁用的文本</DisabledText>
      
      <DisabledText className="custom-class">
        <span>自定义样式的禁用文本</span>
      </DisabledText>
    </div>
  );
};

export default App;
```

## API

### DisabledTextProps

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| children | 子元素内容 | React.ReactNode | - |
| className | 自定义类名 | string | - |
| ...props | 其他 HTML div 元素属性 | HTMLAttributes\<HTMLDivElement\> | - |

## 样式说明

组件使用以下 CSS 类名前缀：`adhere-ui-fd-disabled-text`

主要样式特征：
- 颜色：`rgba(0, 0, 0, 0.25)` （灰色）
- 透明度：`0.6`
- 光标：`not-allowed` （禁用图标）
- 用户选择：`none` （不可选择）
- 子元素指针事件：`none` （禁止交互）

## 注意事项

1. 该组件主要用于表单设计器中的只读展示场景
2. 所有子元素都会继承禁用状态，无法进行点击等交互操作
3. 如需启用交互，请使用其他合适的组件
