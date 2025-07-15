# Adhere Mobile UI Warn Prompt

移动端警告提示组件，提供Toast和Modal两种形式的警告提示功能。

## 功能特性

- 🚀 **双模式支持**: 支持Toast轻提示和Modal对话框两种显示模式
- ⏰ **自动关闭**: 支持设置自动关闭时间
- 🎨 **可定制**: 支持自定义样式和配置
- 📱 **移动端优化**: 专为移动端场景设计
- 🔧 **配置管理**: 提供配置获取、更新和重置功能

## 安装

```bash
npm install @baifendian/adhere-mobile-ui-prompt-warnprompt
```

## 基本使用

### 导入组件

```tsx
import WarnPrompt from '@baifendian/adhere-mobile-ui-prompt-warnprompt';
```

### 显示警告消息（Toast）

```tsx
// 基本用法
WarnPrompt.openWarnMessage();

// 自定义内容
WarnPrompt.openWarnMessage({
  content: '自定义警告消息',
  duration: 2000
});

// 获取处理器进行控制
const handler = WarnPrompt.openWarnMessage();
// 手动关闭
handler.close();
```

### 显示警告对话框（Modal）

```tsx
// 基本用法
WarnPrompt.openWarnDialog({
  content: '这是一个警告对话框'
});

// 自定义持续时间
WarnPrompt.openWarnDialog({
  content: '5秒后自动关闭',
  duration: 5000
});

// 不自动关闭
WarnPrompt.openWarnDialog({
  content: '需要手动关闭',
  duration: 0
});

// 获取处理器进行控制
const handler = WarnPrompt.openWarnDialog({
  content: '这是一个警告'
});
// 手动关闭
handler.close();
```

## 配置管理

### 获取当前配置

```tsx
const config = WarnPrompt.getConfig();
console.log(config);
// 输出: { defaultDuration: 3000, defaultIconColor: '#faad14', defaultIconSize: 22 }
```

### 更新配置

```tsx
// 更新默认持续时间
WarnPrompt.updateConfig({ defaultDuration: 5000 });

// 更新多个配置
WarnPrompt.updateConfig({
  defaultDuration: 4000,
  defaultIconColor: '#ff4d4f',
  defaultIconSize: 24
});
```

### 重置配置

```tsx
// 重置为默认值
WarnPrompt.resetConfig();
```

## API 参考

### WarnPrompt.openWarnMessage(props?)

显示警告消息（Toast形式）

**参数:**
- `props` (可选): Toast显示属性，继承自 `antd-mobile` 的 `ToastShowProps`

**返回值:**
- `ToastHandler`: Toast处理器，用于控制Toast的显示和隐藏

### WarnPrompt.openWarnDialog(props)

显示警告对话框（Modal形式）

**参数:**
- `props`: 对话框属性
  - `duration` (可选): 自动关闭时间（毫秒），默认为3000ms，设为0则不自动关闭
  - 其他属性继承自 `antd-mobile` 的 `ModalShowProps`

**返回值:**
- `ModalShowHandler`: Modal处理器，用于控制对话框的显示和隐藏

### WarnPrompt.getConfig()

获取当前配置

**返回值:**
- `Required<WarnPromptConfig>`: 当前配置对象

### WarnPrompt.updateConfig(config)

更新配置

**参数:**
- `config`: 要更新的配置对象

### WarnPrompt.resetConfig()

重置配置为默认值

## 类型定义

### WarnDialogProps

```tsx
interface WarnDialogProps extends ModalShowProps {
  duration?: Duration;
}
```

### WarnPromptConfig

```tsx
interface WarnPromptConfig {
  defaultDuration?: number;    // 默认持续时间，默认3000ms
  defaultIconColor?: string;   // 默认图标颜色，默认'#faad14'
  defaultIconSize?: number;    // 默认图标大小，默认22px
}
```

### Duration

```tsx
type Duration = number | VoidFunction;
```

## 样式定制

组件使用CSS变量进行样式定制，可以通过CSS变量覆盖默认样式：

```css
:root {
  --dialog-icon-margin-right: 15px;
  --dialog-icon-color: #faad14;
  --dialog-icon-font-size: 22px;
  --dialog-content-color: var(--adhere-color-text-base);
}
```

## 注意事项

1. **定时器管理**: 组件会自动管理定时器，避免内存泄漏
2. **国际化**: 默认使用 `@baifendian/adhere-util-intl` 进行国际化
3. **依赖**: 需要安装 `antd-mobile` 和 `antd-mobile-icons`
4. **TypeScript**: 完整的TypeScript类型支持

## 示例

查看 `IntTest` 目录下的完整示例代码。

## 更新日志

### v1.0.0
- 初始版本发布
- 支持Toast和Modal两种警告提示模式
- 提供配置管理功能
- 完整的TypeScript类型支持


